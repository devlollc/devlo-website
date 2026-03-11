/**
 * Translates FR-only pages (agency, geo, alternatives, blog) to EN/DE/NL via DeepL.
 * Outputs 4 JSON bundles to src/lib/i18n/:
 *   agency-content.json, geo-content.json, alternatives-content.json, blog-content.json
 *
 * Usage: DEEPL_API_KEY=xxx node scripts/translate_fr_only_pages_deepl.mjs
 */

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const deeplKey = process.env.DEEPL_API_KEY;
if (!deeplKey) throw new Error('Missing DEEPL_API_KEY');

const TARGETS = [
  { locale: 'en', deepl: 'EN-GB' },
  { locale: 'de', deepl: 'DE' },
  { locale: 'nl', deepl: 'NL' },
];

const ENDPOINTS = [
  'https://api.deepl.com/v2/translate',
  'https://api-free.deepl.com/v2/translate',
];

const SKIP_KEYS = new Set([
  // URL / path fields
  'slug', 'sourceSlug', 'legacySlugs', 'sourceUrl', 'href', 'path', 'src',
  'url', 'founderLinkedIn', 'authorUrl',
  // Image / media
  'logo', 'banner', 'photo', 'previewSrc', 'icon', 'wistiaMediaId',
  // Person names
  'founderName', 'author',
  // Brand names
  'competitorName',
  // Locale / technical codes
  'country', 'addressCountry', 'addressRegion', 'postalCode', 'region',
  // Addresses
  'streetAddress', 'addressLocality',
  // IDs
  'portalId', 'formId',
  // Slugs arrays
  'caseStudySlugs', 'excludeLogos', 'relatedServiceSlug',
  // Status
  'validationStatus', 'migrationStatus', 'assetAudit',
  // Untranslatable data
  'email', 'telephone', 'date',
  // Blog category tags — brand-like terms
  'category',
]);

// --- import sources ---
const agencyMod = await import('../src/content/agency.ts');
const geoMod = await import('../src/content/geo-pages.ts');
const altsMod = await import('../src/content/alternatives.ts');
const blogMod = await import('../src/content/blog/articles.ts');

const agencySource = agencyMod.agencyContent;
const GEO_PAGES = geoMod.GEO_PAGES;
const ALTERNATIVE_PAGES = altsMod.ALTERNATIVE_PAGES;
const articles = blogMod.articles;

// Blog hub copy (FR source)
const blogHubCopy = {
  h1: 'Blog — Prospection B2B, cold email et outbound',
  subtitle: 'Ressources et guides pratiques sur la prospection commerciale B2B',
  description: 'Articles et guides pratiques sur la prospection commerciale B2B : cold email, LinkedIn outreach, intent data et stratégies outbound.',
  breadcrumbHome: 'Accueil',
  breadcrumbBlog: 'Blog',
  readMore: 'Lire l\'article →',
  publishedOn: 'Publié le',
  by: 'Par',
};

// -----------------------------------
// DeepL helpers (same as existing scripts)
// -----------------------------------

function shouldSkipString(value) {
  if (!value || typeof value !== 'string') return true;
  const v = value.trim();
  if (!v) return true;
  if (v.startsWith('/')) return true;
  if (/^https?:\/\//i.test(v)) return true;
  if (/\.(webp|png|jpg|jpeg|svg|gif|pdf|mp4|webm)$/i.test(v)) return true;
  if (/^\+?[0-9\s().-]{8,}$/.test(v)) return true;
  if (/^[A-Za-z0-9_-]{2,}$/.test(v) && !/[\s'']/.test(v) && v.length < 18) return true;
  return false;
}

function collectStrings(node, out, key = '') {
  if (Array.isArray(node)) {
    for (const item of node) collectStrings(item, out, key);
    return;
  }
  if (!node || typeof node !== 'object') {
    if (typeof node === 'string' && !SKIP_KEYS.has(key) && !shouldSkipString(node)) out.add(node);
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    if (SKIP_KEYS.has(k)) continue;
    collectStrings(v, out, k);
  }
}

function applyTranslations(node, map, key = '') {
  if (Array.isArray(node)) return node.map((item) => applyTranslations(item, map, key));
  if (!node || typeof node !== 'object') {
    if (typeof node === 'string' && !SKIP_KEYS.has(key) && !shouldSkipString(node)) return map.get(node) || node;
    return node;
  }
  const out = {};
  for (const [k, v] of Object.entries(node)) {
    if (SKIP_KEYS.has(k)) { out[k] = v; continue; }
    out[k] = applyTranslations(v, map, k);
  }
  return out;
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function translateBatch(texts, targetLang, attempt = 0) {
  if (texts.length === 0) return [];
  let lastError = '';
  for (const endpoint of ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `DeepL-Auth-Key ${deeplKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: texts, source_lang: 'FR', target_lang: targetLang, preserve_formatting: true }),
      });
      const raw = await response.text();
      if (!response.ok) { lastError = `${response.status}:${raw.slice(0, 180)}`; continue; }
      const json = JSON.parse(raw);
      const rows = Array.isArray(json?.translations) ? json.translations : [];
      if (rows.length !== texts.length) { lastError = `invalid-count:${rows.length}/${texts.length}`; continue; }
      return rows.map((row) => row?.text || '');
    } catch (err) {
      lastError = String(err.message || err);
      console.warn(`  fetch error on ${endpoint}: ${lastError}`);
    }
  }
  if (attempt < 4) {
    const delay = 1000 * Math.pow(2, attempt);
    console.warn(`  retry ${attempt + 1}/4 in ${delay}ms for ${targetLang}...`);
    await sleep(delay);
    return translateBatch(texts, targetLang, attempt + 1);
  }
  throw new Error(`DeepL translate failed (${targetLang}) ${lastError}`);
}

async function buildTranslationMap(source, label) {
  const strings = new Set();
  collectStrings(source, strings);
  const all = Array.from(strings);
  console.log(`${label}: ${all.length} strings to translate`);

  const maps = {};
  for (const target of TARGETS) {
    const map = new Map();
    const chunkSize = 35;
    for (let i = 0; i < all.length; i += chunkSize) {
      const chunk = all.slice(i, i + chunkSize);
      const translated = await translateBatch(chunk, target.deepl);
      chunk.forEach((src, idx) => map.set(src, translated[idx] || src));
    }
    maps[target.locale] = map;
    console.log(`  ${label}: translated ${target.locale}`);
  }
  return maps;
}

async function buildBundle(source, label) {
  const maps = await buildTranslationMap(source, label);
  const result = { fr: source };
  for (const target of TARGETS) {
    result[target.locale] = applyTranslations(source, maps[target.locale]);
  }
  return result;
}

function write(outFile, data) {
  const outPath = resolve(process.cwd(), outFile);
  writeFileSync(outPath, JSON.stringify(data, null, 2));
  console.log(`written: ${outPath}`);
}

// -----------------------------------
// 1. Agency content
// -----------------------------------
console.log('\n=== Agency ===');
const agencyBundle = await buildBundle(agencySource, 'agency');
write('src/lib/i18n/agency-content.json', agencyBundle);

// -----------------------------------
// 2. Geo pages content
// -----------------------------------
console.log('\n=== Geo pages ===');
const geoBundle = {};
for (const [slug, pageData] of Object.entries(GEO_PAGES)) {
  // Only translate translatable fields; keep address/technical fields as-is
  const translatable = {
    metaTitle: pageData.metaTitle,
    metaDescription: pageData.metaDescription,
    h1: pageData.h1,
    intro: pageData.intro,
    faqs: pageData.faqs,
  };
  const maps = await buildTranslationMap(translatable, `geo:${slug}`);
  geoBundle[slug] = { fr: translatable };
  for (const target of TARGETS) {
    geoBundle[slug][target.locale] = applyTranslations(translatable, maps[target.locale]);
  }
}
write('src/lib/i18n/geo-content.json', geoBundle);

// -----------------------------------
// 3. Alternative pages content
// -----------------------------------
console.log('\n=== Alternative pages ===');
const altsBundle = {};
for (const [slug, pageData] of Object.entries(ALTERNATIVE_PAGES)) {
  const translatable = {
    metaTitle: pageData.metaTitle,
    metaDescription: pageData.metaDescription,
    h1: pageData.h1,
    intro: pageData.intro,
    comparisonTable: pageData.comparisonTable,
    whyDevlo: pageData.whyDevlo,
    faqs: pageData.faqs,
  };
  const maps = await buildTranslationMap(translatable, `alt:${slug}`);
  altsBundle[slug] = { fr: translatable };
  for (const target of TARGETS) {
    altsBundle[slug][target.locale] = applyTranslations(translatable, maps[target.locale]);
  }
}
write('src/lib/i18n/alternatives-content.json', altsBundle);

// -----------------------------------
// 4. Blog content (articles + hub)
// -----------------------------------
console.log('\n=== Blog articles ===');
const blogBundle = { articles: {}, hubCopy: {} };

// Translate hub copy
const hubMaps = await buildTranslationMap(blogHubCopy, 'blog-hub');
blogBundle.hubCopy = { fr: blogHubCopy };
for (const target of TARGETS) {
  blogBundle.hubCopy[target.locale] = applyTranslations(blogHubCopy, hubMaps[target.locale]);
}

// Translate each article
for (const article of articles) {
  const translatable = {
    title: article.title,
    description: article.description,
    body: article.body,
  };
  const maps = await buildTranslationMap(translatable, `blog:${article.slug}`);
  blogBundle.articles[article.slug] = {
    fr: { ...translatable, author: article.author, authorUrl: article.authorUrl, date: article.date, category: article.category, relatedServiceSlug: article.relatedServiceSlug },
  };
  for (const target of TARGETS) {
    const translated = applyTranslations(translatable, maps[target.locale]);
    blogBundle.articles[article.slug][target.locale] = {
      ...translated,
      author: article.author,
      authorUrl: article.authorUrl,
      date: article.date,
      category: article.category,
      relatedServiceSlug: article.relatedServiceSlug,
    };
  }
}
write('src/lib/i18n/blog-content.json', blogBundle);

console.log('\nAll translations complete.');
