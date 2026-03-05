import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@sanity/client";

const slugMapPath = resolve(process.cwd(), "src/lib/i18n/slug-map.json");
const slugMap = JSON.parse(readFileSync(slugMapPath, "utf8"));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || process.env.SANITY_API_VERSION || "2025-01-01";
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN;
const deeplKey = process.env.DEEPL_API_KEY;
const debug = process.env.TRANSLATE_DEBUG === "1";

if (!projectId || !dataset || !token) {
  throw new Error(
    "Missing Sanity env vars. Required: (NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_PROJECT_ID), (NEXT_PUBLIC_SANITY_DATASET or SANITY_DATASET), (SANITY_API_TOKEN or SANITY_WRITE_TOKEN)",
  );
}
if (!deeplKey) {
  throw new Error("Missing DEEPL_API_KEY");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
  perspective: "published",
});

const TARGETS = [
  { locale: "en", deepl: "EN-GB" },
  { locale: "de", deepl: "DE" },
  { locale: "nl", deepl: "NL" },
];

const DEEPL_TRANSLATE_ENDPOINTS = [
  "https://api.deepl.com/v2/translate",
  "https://api-free.deepl.com/v2/translate",
];
const DEEPL_USAGE_ENDPOINTS = [
  "https://api.deepl.com/v2/usage",
  "https://api-free.deepl.com/v2/usage",
];

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withSlash.replace(/\/+$/, "");
}

function removeLocalePrefix(pathname) {
  const normalized = normalizePath(pathname);
  if (normalized === "/en" || normalized === "/de" || normalized === "/nl") return "/";
  return normalized.replace(/^\/(en|de|nl)(?=\/|$)/, "") || "/";
}

function toLocalePath(locale, path) {
  const normalized = normalizePath(path);
  if (locale === "fr") return normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

function normalizeSlugMapPath(candidate) {
  if (!candidate) return null;
  return normalizePath(candidate);
}

function coerceLocalizedObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { fr: null, en: null, de: null, nl: null };
  }

  return {
    fr: typeof value.fr === "string" ? value.fr : null,
    en: typeof value.en === "string" ? value.en : null,
    de: typeof value.de === "string" ? value.de : null,
    nl: typeof value.nl === "string" ? value.nl : null,
  };
}

function normalizedText(value) {
  return (value || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function needsTranslation(frValue, localizedValue) {
  if (!frValue) return false;
  if (!localizedValue) return true;
  return normalizedText(frValue) === normalizedText(localizedValue);
}

const translationCache = new Map();
let totalCharactersSent = 0;

async function deepLTranslateMany(texts, targetLang) {
  const cleanTexts = texts.map((value) => value.trim()).filter(Boolean);
  if (cleanTexts.length === 0) return {};

  const results = {};
  const missing = [];

  for (const text of cleanTexts) {
    const cacheKey = `${targetLang}::${text}`;
    if (translationCache.has(cacheKey)) {
      results[text] = translationCache.get(cacheKey);
    } else {
      missing.push(text);
    }
  }

  if (missing.length > 0) {
    const attempts = [];

    for (const endpoint of DEEPL_TRANSLATE_ENDPOINTS) {
      const body = {
        text: missing,
        source_lang: "FR",
        target_lang: targetLang,
        preserve_formatting: true,
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `DeepL-Auth-Key ${deeplKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const payloadText = await response.text();

      if (!response.ok) {
        attempts.push(`${response.status}:${endpoint}:${payloadText.slice(0, 180)}`);
        continue;
      }

      const payload = JSON.parse(payloadText);
      const translatedRows = Array.isArray(payload?.translations) ? payload.translations : [];

      if (translatedRows.length !== missing.length) {
        attempts.push(`invalid-count:${endpoint}:expected-${missing.length}:got-${translatedRows.length}`);
        continue;
      }

      for (let i = 0; i < missing.length; i += 1) {
        const source = missing[i];
        const translated = translatedRows[i]?.text;
        if (!translated || typeof translated !== "string") {
          attempts.push(`empty-translation:${endpoint}:index-${i}`);
          continue;
        }
        const cacheKey = `${targetLang}::${source}`;
        translationCache.set(cacheKey, translated);
        results[source] = translated;
        totalCharactersSent += source.length;
      }

      break;
    }

    for (const text of missing) {
      if (!results[text]) {
        throw new Error(`DeepL translation failed (${targetLang}) for text="${text.slice(0, 80)}" attempts=${attempts.join(" | ")}`);
      }
    }
  }

  return results;
}

async function fetchDeepLUsage() {
  for (const endpoint of DEEPL_USAGE_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `DeepL-Auth-Key ${deeplKey}`,
        },
      });

      if (!response.ok) continue;
      const payload = await response.json();
      return {
        endpoint,
        character_count: payload.character_count ?? null,
        character_limit: payload.character_limit ?? null,
      };
    } catch {
      // continue
    }
  }

  return null;
}

function resolveSlugForLocale(pageId, locale, currentSlugObj) {
  const entry = slugMap[pageId];
  const fromMap = normalizeSlugMapPath(entry?.[locale]);
  if (fromMap) return fromMap;

  if (locale === "nl") {
    const enPath = normalizeSlugMapPath(currentSlugObj.en);
    if (enPath) {
      return toLocalePath("nl", removeLocalePrefix(enPath));
    }

    const frPath = normalizeSlugMapPath(currentSlugObj.fr);
    if (frPath) {
      return toLocalePath("nl", removeLocalePrefix(frPath));
    }
  }

  return normalizeSlugMapPath(currentSlugObj[locale]);
}

async function main() {
  const docs = await client.fetch(
    `*[_type in ["page","service","caseStudy"] && defined(pageId)]{
      _id,
      _type,
      pageId,
      slug,
      title,
      description,
      seoTitle,
      seoDescription,
      ogImage,
      body
    }`,
  );

  let docsPatched = 0;
  let fieldsPatched = 0;
  let slugPatched = 0;
  let missingFrDocs = 0;

  if (debug) {
    console.log(`[DEBUG] fetched docs: ${docs.length}`);
  }

  for (const doc of docs) {
    const patch = {};

    const currentSlugObj = {
      fr: doc?.slug?.fr ?? null,
      en: doc?.slug?.en ?? null,
      de: doc?.slug?.de ?? null,
      nl: doc?.slug?.nl ?? null,
    };
    const nextSlugObj = { ...currentSlugObj };

    let hasSlugChange = false;
    for (const target of TARGETS) {
      const desired = resolveSlugForLocale(doc.pageId, target.locale, nextSlugObj);
      if (desired && desired !== nextSlugObj[target.locale]) {
        nextSlugObj[target.locale] = desired;
        hasSlugChange = true;
      }
    }

    if (hasSlugChange) {
      patch.slug = nextSlugObj;
      slugPatched += 1;
    }

    const titleLocalized = coerceLocalizedObject(doc.title);
    const seoTitleLocalized = coerceLocalizedObject(doc.seoTitle);
    const descriptionLocalized = coerceLocalizedObject(doc.description);
    const seoDescriptionLocalized = coerceLocalizedObject(doc.seoDescription);
    const bodyLocalized = coerceLocalizedObject(doc.body);

    const frTitle = (titleLocalized.fr || seoTitleLocalized.fr || "").trim();
    const frDescription = (descriptionLocalized.fr || seoDescriptionLocalized.fr || "").trim();
    const frBody = (bodyLocalized.fr || [frTitle, frDescription].filter(Boolean).join("\n\n")).trim();
    const hasFrAnyField = Boolean(frTitle || frDescription || frBody);

    const nextTitle = { ...titleLocalized };
    const nextSeoTitle = { ...seoTitleLocalized };
    const nextDescription = { ...descriptionLocalized };
    const nextSeoDescription = { ...seoDescriptionLocalized };
    const nextBody = { ...bodyLocalized };
    let localizedChanged = false;

    for (const target of TARGETS) {
      const neededTexts = [];
      const needTitle = Boolean(
        frTitle && (needsTranslation(frTitle, nextTitle[target.locale]) || needsTranslation(frTitle, nextSeoTitle[target.locale])),
      );
      const needDescription = Boolean(
        frDescription &&
          (needsTranslation(frDescription, nextDescription[target.locale]) ||
            needsTranslation(frDescription, nextSeoDescription[target.locale])),
      );
      const needBody = Boolean(frBody && needsTranslation(frBody, nextBody[target.locale]));

      if (needTitle) neededTexts.push(frTitle);
      if (needDescription) neededTexts.push(frDescription);
      if (needBody) neededTexts.push(frBody);
      if (neededTexts.length === 0) continue;

      const uniqueNeededTexts = Array.from(new Set(neededTexts));
      const translatedBySource = await deepLTranslateMany(uniqueNeededTexts, target.deepl);

      if (needTitle) {
        const translated = translatedBySource[frTitle];
        if (translated) {
          if (needsTranslation(frTitle, nextTitle[target.locale])) {
            nextTitle[target.locale] = translated;
            fieldsPatched += 1;
          }
          if (needsTranslation(frTitle, nextSeoTitle[target.locale])) {
            nextSeoTitle[target.locale] = translated;
            fieldsPatched += 1;
          }
          localizedChanged = true;
        }
      }

      if (needDescription) {
        const translated = translatedBySource[frDescription];
        if (translated) {
          if (needsTranslation(frDescription, nextDescription[target.locale])) {
            nextDescription[target.locale] = translated;
            fieldsPatched += 1;
          }
          if (needsTranslation(frDescription, nextSeoDescription[target.locale])) {
            nextSeoDescription[target.locale] = translated;
            fieldsPatched += 1;
          }
          localizedChanged = true;
        }
      }

      if (needBody) {
        const translated = translatedBySource[frBody];
        if (translated && needsTranslation(frBody, nextBody[target.locale])) {
          nextBody[target.locale] = translated;
          fieldsPatched += 1;
          localizedChanged = true;
        }
      }
    }

    if (localizedChanged) {
      patch.title = nextTitle;
      patch.seoTitle = nextSeoTitle;
      patch.description = nextDescription;
      patch.seoDescription = nextSeoDescription;
      patch.body = nextBody;
    }

    if (!hasFrAnyField) {
      missingFrDocs += 1;
    }

    if (Object.keys(patch).length === 0) {
      continue;
    }

    await client.patch(doc._id).set(patch).commit({ autoGenerateArrayKeys: true });
    docsPatched += 1;
  }

  const deeplUsage = await fetchDeepLUsage();

  console.log(`DeepL translation complete: ${docsPatched} docs patched.`);
  console.log(
    JSON.stringify(
      {
        totalDocs: docs.length,
        docsPatched,
        fieldsPatched,
        slugPatched,
        missingFrDocs,
        totalCharactersSent,
        deeplUsage,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
