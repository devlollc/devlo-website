---
name: add-or-enrich-multilingual-page
description: Workflow command scaffold for add-or-enrich-multilingual-page in devlo-website.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-enrich-multilingual-page

Use this workflow when working on **add-or-enrich-multilingual-page** in `devlo-website`.

## Goal

Adds a new page or enriches an existing one with content and translations in multiple locales (FR/EN/DE/NL), including updating slug maps and localized JSON bundles.

## Common Files

- `src/app/[locale]/[[...slug]]/page.tsx`
- `src/app/insights/*/page.tsx`
- `src/app/ai-sales-ops/page.tsx`
- `src/app/agence/page.tsx`
- `src/components/pages/*`
- `src/lib/i18n/slug-map.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update page implementation (e.g., page.tsx) in src/app or src/components/pages
- Add or update content in locale-specific JSON files (e.g., src/lib/i18n/*-content.json, src/lib/i18n/slug-map.json)
- If new, add route to slug-map.json and sitemap.ts
- Translate or sync content across locales (often via DeepL or scripts)
- Update or create supporting components if needed

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.