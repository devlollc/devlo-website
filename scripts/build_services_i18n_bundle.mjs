import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  SERVICE_HUB_CARDS,
  SERVICE_PAGE_DATA,
  ALL_CASE_STUDIES,
  RELATED_SERVICES,
  SERVICE_SLUGS,
} from '../src/content/services.ts';

const deeplKey = process.env.DEEPL_API_KEY;
if (!deeplKey) {
  throw new Error('Missing DEEPL_API_KEY');
}

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
  'path',
  'href',
  'src',
  'logo',
  'banner',
  'photo',
  'video1',
  'video2',
  'video3',
  'wistiaMediaId',
  'portalId',
  'formId',
  'region',
  'icon',
  'tag',
  'tags',
  'caseStudyTag',
  'relatedServices',
  'metadataKeywords',
]);

function shouldSkipString(value) {
  if (!value || typeof value !== 'string') return true;
  const v = value.trim();
  if (!v) return true;
  if (v.startsWith('/')) return true;
  if (/^https?:\/\//i.test(v)) return true;
  if (/\.(webp|png|jpg|jpeg|svg|gif|pdf|mp4|webm)$/i.test(v)) return true;
  if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(v)) return true;
  if (/^\+?[0-9\s().-]{8,}$/.test(v)) return true;
  if (/^[a-z0-9_-]{2,}$/i.test(v) && !/[\s'’]/.test(v) && v.length < 18) return true;
  return false;
}

function collectStrings(node, out, parentKey = '') {
  if (Array.isArray(node)) {
    for (const item of node) collectStrings(item, out, parentKey);
    return;
  }
  if (!node || typeof node !== 'object') {
    if (typeof node === 'string' && !SKIP_KEYS.has(parentKey) && !shouldSkipString(node)) {
      out.add(node);
    }
    return;
  }
  for (const [key, value] of Object.entries(node)) {
    if (SKIP_KEYS.has(key)) continue;
    collectStrings(value, out, key);
  }
}

function applyTranslations(node, map, parentKey = '') {
  if (Array.isArray(node)) {
    return node.map((item) => applyTranslations(item, map, parentKey));
  }
  if (!node || typeof node !== 'object') {
    if (typeof node === 'string' && !SKIP_KEYS.has(parentKey) && !shouldSkipString(node)) {
      return map.get(node) || node;
    }
    return node;
  }
  const out = {};
  for (const [key, value] of Object.entries(node)) {
    if (SKIP_KEYS.has(key)) {
      out[key] = value;
      continue;
    }
    out[key] = applyTranslations(value, map, key);
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
      lastError = `${response.status}:${raw.slice(0, 200)}`;
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

async function main() {
  const source = {
    SERVICE_HUB_CARDS,
    SERVICE_PAGE_DATA,
    ALL_CASE_STUDIES,
    RELATED_SERVICES,
    SERVICE_SLUGS,
    hubCopy: {
      eyebrow: 'DEVLO.CH — AGENCE B2B SUISSE',
      title: 'Services de prospection et génération de leads B2B',
      description:
        "devlo aide startups, PMEs et scale-ups à générer des rendez-vous qualifiés via des campagnes outbound multicanales, l'activation des signaux d'intention et une data commerciale exploitable.",
      intro:
        'Chaque service ci-dessous inclut un configurateur et un formulaire pour cadrer votre stratégie avant votre call.',
      ctaDiscover: 'Découvrir les services ↓',
      ctaConsultation: 'Planifier votre consultation gratuite →',
      ctaResults: 'Voir nos résultats →',
      trustedTitle: 'Ils nous ont fait confiance',
      trustedDescription:
        'Résultats obtenus en Suisse, Belgique, France et DACH sur des environnements B2B exigeants.',
    },
  };

  const strings = new Set();
  collectStrings(source, strings);
  const allStrings = Array.from(strings);

  const bundle = {
    fr: source,
    en: null,
    de: null,
    nl: null,
    meta: {
      generatedAt: new Date().toISOString(),
      translatedStringCount: allStrings.length,
    },
  };

  for (const target of TARGETS) {
    const map = new Map();
    const chunkSize = 40;
    for (let i = 0; i < allStrings.length; i += chunkSize) {
      const chunk = allStrings.slice(i, i + chunkSize);
      const translated = await translateBatch(chunk, target.deepl);
      chunk.forEach((src, idx) => map.set(src, translated[idx] || src));
    }
    bundle[target.locale] = applyTranslations(source, map);
    console.log(`translated ${target.locale}: ${allStrings.length} strings`);
  }

  const outPath = resolve(process.cwd(), 'src/lib/i18n/services-content.json');
  writeFileSync(outPath, JSON.stringify(bundle, null, 2));
  console.log(`written: ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
