import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@sanity/client";

const slugMapPath = resolve(process.cwd(), "src/lib/i18n/slug-map.json");
const chatSeoCsvPath = resolve(process.cwd(), "docs/chatseo-metadata-export.csv");
const crawlCsvPath = resolve(process.cwd(), "seo-crawl-exports/sf-internal-html.csv");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || process.env.SANITY_API_VERSION || "2025-01-01";
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    "Missing Sanity env vars. Required: (NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_PROJECT_ID), (NEXT_PUBLIC_SANITY_DATASET or SANITY_DATASET), (SANITY_API_TOKEN or SANITY_WRITE_TOKEN)",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
  perspective: "published",
});

const slugMap = JSON.parse(readFileSync(slugMapPath, "utf8"));

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withSlash.replace(/\/+$/, "");
}

function normalizePathOrNull(pathname) {
  if (!pathname) return null;
  return normalizePath(pathname);
}

function parseCsvLine(line) {
  const out = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];

    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === "," && !inQuotes) {
      out.push(cur);
      cur = "";
      continue;
    }

    cur += ch;
  }

  out.push(cur);
  return out;
}

function normalizeOgImage(value) {
  if (!value) return null;
  const trimmed = String(value).trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("https://devlo.ch/")) {
    try {
      const parsed = new URL(trimmed);
      return parsed.pathname;
    } catch {
      return null;
    }
  }

  if (trimmed.startsWith("/")) return trimmed;
  return null;
}

function parseChatSeoMap() {
  const csvRaw = readFileSync(chatSeoCsvPath, "utf8");
  const lines = csvRaw.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return new Map();

  const header = parseCsvLine(lines[0]);
  const idxScope = header.indexOf("scope");
  const idxRoute = header.indexOf("route");
  const idxTitle = header.indexOf("title");
  const idxDescription = header.indexOf("description");
  const idxOgImage = header.indexOf("og_image");

  const map = new Map();

  for (let i = 1; i < lines.length; i += 1) {
    const row = parseCsvLine(lines[i]);
    const scope = row[idxScope];
    const route = normalizePath(row[idxRoute] ?? "");
    if (!route || route === "*" || scope === "GLOBAL") continue;

    map.set(route, {
      source: "chatseo-csv",
      title: (row[idxTitle] || "").trim() || null,
      description: (row[idxDescription] || "").trim() || null,
      ogImage: normalizeOgImage(row[idxOgImage] || ""),
    });
  }

  return map;
}

function parseCrawlSeoMap() {
  const map = new Map();
  let raw = "";
  try {
    raw = readFileSync(crawlCsvPath, "utf8");
  } catch {
    return map;
  }

  const lines = raw.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return map;

  const header = parseCsvLine(lines[0]);
  const idxUrl = header.indexOf("url");
  const idxStatus = header.indexOf("status_code");
  const idxTitle = header.indexOf("title");
  const idxDescription = header.indexOf("description");
  const idxLang = header.indexOf("lang");

  for (let i = 1; i < lines.length; i += 1) {
    const row = parseCsvLine(lines[i]);
    const statusCode = row[idxStatus];
    if (statusCode !== "200") continue;

    const rawUrl = row[idxUrl];
    if (!rawUrl) continue;

    let pathname = "";
    try {
      const parsed = new URL(rawUrl.replace(/^"|"$/g, ""));
      if (parsed.host !== "devlo.ch") continue;
      pathname = normalizePath(parsed.pathname);
    } catch {
      continue;
    }

    const lang = (row[idxLang] || "").toLowerCase();
    if (lang && !lang.startsWith("fr")) continue;

    if (!map.has(pathname)) {
      map.set(pathname, {
        source: "crawl-csv",
        title: (row[idxTitle] || "").trim() || null,
        description: (row[idxDescription] || "").trim() || null,
        ogImage: null,
      });
    }
  }

  return map;
}

function extractTagValue(html, regex) {
  const match = html.match(regex);
  return match?.[1]?.trim() || null;
}

async function fetchLiveMetadata(frPath) {
  const url = `https://devlo.ch${frPath === "/" ? "/" : frPath}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort("timeout"), 4000);

  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "devlo-sanity-seed/1.0",
        accept: "text/html,application/xhtml+xml",
      },
    });

    if (!res.ok) {
      return {
        source: "live-http",
        ok: false,
        status: res.status,
        finalUrl: res.url,
        title: null,
        description: null,
        ogImage: null,
      };
    }

    const html = await res.text();
    const title = extractTagValue(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
    const description = extractTagValue(
      html,
      /<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i,
    );
    const ogImageRaw = extractTagValue(
      html,
      /<meta[^>]*property=["']og:image["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i,
    );

    return {
      source: "live-http",
      ok: true,
      status: res.status,
      finalUrl: res.url,
      title,
      description,
      ogImage: normalizeOgImage(ogImageRaw),
    };
  } catch (error) {
    return {
      source: "live-http",
      ok: false,
      status: 0,
      finalUrl: url,
      title: null,
      description: null,
      ogImage: null,
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    clearTimeout(timeout);
  }
}

function docTypeFromPageId(pageId) {
  if (pageId.startsWith("service:")) return "service";
  if (pageId.startsWith("case-study:")) return "caseStudy";
  return "page";
}

function sanityIdFromPageId(pageId) {
  return `localizedPage.${pageId.replace(/[^a-zA-Z0-9_.-]/g, "_")}`;
}

function localizedObject(frValue) {
  return frValue ? { fr: frValue } : null;
}

function buildSeedBody(frTitle, frDescription) {
  const parts = [frTitle, frDescription].map((value) => (value || "").trim()).filter(Boolean);
  if (parts.length === 0) return null;
  return parts.join("\n\n");
}

async function main() {
  const csvMetadataByRoute = parseChatSeoMap();
  const crawlMetadataByRoute = parseCrawlSeoMap();
  const liveMetadataCache = new Map();

  let upserted = 0;
  let withFrTitle = 0;
  let withFrDescription = 0;
  let withOgImage = 0;
  let sourceCsvCount = 0;
  let sourceCrawlCount = 0;
  let sourceLiveCount = 0;

  for (const [pageId, entry] of Object.entries(slugMap)) {
    if (!entry.fr) continue;

    const candidatePaths = [
      normalizePathOrNull(entry.fr),
      normalizePathOrNull(entry.en),
      normalizePathOrNull(entry.de),
      normalizePathOrNull(entry.nl),
    ].filter(Boolean);

    let metadata = null;

    for (const candidatePath of candidatePaths) {
      if (csvMetadataByRoute.has(candidatePath)) {
        metadata = csvMetadataByRoute.get(candidatePath);
        sourceCsvCount += 1;
        break;
      }
      if (crawlMetadataByRoute.has(candidatePath)) {
        metadata = crawlMetadataByRoute.get(candidatePath);
        sourceCrawlCount += 1;
        break;
      }
    }

    if (!metadata) {
      for (const candidatePath of candidatePaths) {
        if (!liveMetadataCache.has(candidatePath)) {
          liveMetadataCache.set(candidatePath, await fetchLiveMetadata(candidatePath));
        }
        const live = liveMetadataCache.get(candidatePath);
        if (live?.title || live?.description) {
          metadata = live;
          sourceLiveCount += 1;
          break;
        }
      }
    }

    const frTitle = metadata?.title || null;
    const frDescription = metadata?.description || null;
    const frOgImage = normalizeOgImage(metadata?.ogImage || null);
    const frBody = buildSeedBody(frTitle, frDescription);

    const doc = {
      _id: sanityIdFromPageId(pageId),
      _type: docTypeFromPageId(pageId),
      pageId,
      slug: {
        fr: entry.fr,
        en: entry.en ?? null,
        de: entry.de ?? null,
        nl: entry.nl ?? null,
      },
      title: localizedObject(frTitle),
      description: localizedObject(frDescription),
      seoTitle: localizedObject(frTitle),
      seoDescription: localizedObject(frDescription),
      ogImage: localizedObject(frOgImage),
      body: localizedObject(frBody),
      updatedAt: new Date().toISOString(),
    };

    await client.createOrReplace(doc);
    upserted += 1;
    if (frTitle) withFrTitle += 1;
    if (frDescription) withFrDescription += 1;
    if (frOgImage) withOgImage += 1;
  }

  console.log(`Sanity seed complete: ${upserted} docs upserted from slug-map.`);
  console.log(
    `Seeded FR fields => title:${withFrTitle} description:${withFrDescription} ogImage:${withOgImage}`,
  );
  console.log(
    `Metadata sources => chatseo-csv:${sourceCsvCount} crawl-csv:${sourceCrawlCount} live-http:${sourceLiveCount}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
