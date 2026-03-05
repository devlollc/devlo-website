import { writeFileSync, readFileSync } from 'node:fs';
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
  'slug',
  'sourceSlug',
  'legacySlugs',
  'sourceUrl',
  'href',
  'path',
  'src',
  'logo',
  'banner',
  'photo',
  'previewSrc',
  'previewAlt',
  'heroImageUrl',
  'clientLogoUrl',
  'testimonialPhotoUrl',
  'testimonialPhotoAlt',
  'wistiaMediaId',
  'portalId',
  'formId',
  'region',
  'icon',
  'assetAudit',
  'validationStatus',
  'migrationStatus',
  'url',
  'email',
  'telephone',
]);

const masterfile = await import('../src/content/masterfile.fr.ts');
const caseStudiesSource = JSON.parse(readFileSync(resolve(process.cwd(), 'src/lib/case-studies.data.json'), 'utf8'));

const masterfileSource = {
  mainNav: masterfile.mainNav,
  homeSeo: masterfile.homeSeo,
  homeContent: masterfile.homeContent,
  consultationSeo: masterfile.consultationSeo,
  consultationContent: masterfile.consultationContent,
  academySeo: masterfile.academySeo,
  academyContent: masterfile.academyContent,
  caseStudiesSeo: masterfile.caseStudiesSeo,
  caseStudiesCards: masterfile.caseStudiesCards,
  conditionsSeo: masterfile.conditionsSeo,
  conditionsContent: masterfile.conditionsContent,
  footerContent: masterfile.footerContent,
};

function shouldSkipString(value) {
  if (!value || typeof value !== 'string') return true;
  const v = value.trim();
  if (!v) return true;
  if (v.startsWith('/')) return true;
  if (/^https?:\/\//i.test(v)) return true;
  if (/\.(webp|png|jpg|jpeg|svg|gif|pdf|mp4|webm)$/i.test(v)) return true;
  if (/^\+?[0-9\s().-]{8,}$/.test(v)) return true;
  if (/^[A-Za-z0-9_-]{2,}$/.test(v) && !/[\s'’]/.test(v) && v.length < 18) return true;
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
    if (SKIP_KEYS.has(k)) {
      out[k] = v;
      continue;
    }
    out[k] = applyTranslations(v, map, k);
  }
  return out;
}

async function translateBatch(texts, targetLang) {
  if (texts.length === 0) return [];
  let lastError = '';

  for (const endpoint of ENDPOINTS) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `DeepL-Auth-Key ${deeplKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: texts,
        source_lang: 'FR',
        target_lang: targetLang,
        preserve_formatting: true,
      }),
    });

    const raw = await response.text();
    if (!response.ok) {
      lastError = `${response.status}:${raw.slice(0, 180)}`;
      continue;
    }

    const json = JSON.parse(raw);
    const rows = Array.isArray(json?.translations) ? json.translations : [];
    if (rows.length !== texts.length) {
      lastError = `invalid-count:${rows.length}/${texts.length}`;
      continue;
    }

    return rows.map((row) => row?.text || '');
  }

  throw new Error(`DeepL translate failed (${targetLang}) ${lastError}`);
}

async function buildBundle(source, label, outFile) {
  const strings = new Set();
  collectStrings(source, strings);
  const all = Array.from(strings);

  const bundle = { fr: source, en: null, de: null, nl: null, meta: { generatedAt: new Date().toISOString(), translatedStringCount: all.length, label } };

  for (const target of TARGETS) {
    const map = new Map();
    const chunkSize = 35;
    for (let i = 0; i < all.length; i += chunkSize) {
      const chunk = all.slice(i, i + chunkSize);
      const translated = await translateBatch(chunk, target.deepl);
      chunk.forEach((src, idx) => map.set(src, translated[idx] || src));
    }
    bundle[target.locale] = applyTranslations(source, map);
    console.log(`${label}: translated ${target.locale} (${all.length} strings)`);
  }

  const outPath = resolve(process.cwd(), outFile);
  writeFileSync(outPath, JSON.stringify(bundle, null, 2));
  console.log(`written ${outPath}`);
}

await buildBundle(masterfileSource, 'masterfile', 'src/lib/i18n/masterfile-content.json');
await buildBundle(caseStudiesSource, 'case-studies', 'src/lib/i18n/case-studies-content.json');
