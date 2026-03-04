# Phase 2 — Translation Results

Date: 2026-03-04

## Commands executed

```bash
set -a && source .env.local && set +a && node scripts/sanity_seed_from_repo_fr.mjs
set -a && source .env.local && set +a && node scripts/translate_missing_locales_deepl.mjs
```

## Seed output (FR source upsert)

```text
Sanity seed complete: 84 docs upserted from slug-map.
Seeded FR fields => title:84 description:84 ogImage:71
Metadata sources => chatseo-csv:30 crawl-csv:13 live-http:41
```

## Translation output (DeepL)

```text
DeepL translation complete: 40 docs patched.
{
  "totalDocs": 84,
  "docsPatched": 40,
  "fieldsPatched": 480,
  "slugPatched": 0,
  "missingFrDocs": 0,
  "totalCharactersSent": 12162,
  "deeplUsage": {
    "endpoint": "https://api.deepl.com/v2/usage",
    "character_count": 3938927,
    "character_limit": 15000000
  }
}
```

## Post-translation Sanity verification

```json
{
  "total": 84,
  "byType": {
    "page": 60,
    "caseStudy": 14,
    "service": 10
  },
  "frTitle": 84,
  "enTitle": 84,
  "deTitle": 84,
  "nlTitle": 84,
  "frDesc": 84,
  "enDesc": 84,
  "deDesc": 84,
  "nlDesc": 84,
  "frSeoTitle": 84,
  "enSeoTitle": 84,
  "deSeoTitle": 84,
  "nlSeoTitle": 84,
  "frSeoDesc": 84,
  "enSeoDesc": 84,
  "deSeoDesc": 84,
  "nlSeoDesc": 84,
  "missingAnyLocale": 0
}
```

## Conclusion

- FR seed: complete on all 84 docs.
- EN/DE/NL translation: complete on all 84 docs for title/description/seoTitle/seoDescription.
- Remaining blockers: none in Sanity content fields.
