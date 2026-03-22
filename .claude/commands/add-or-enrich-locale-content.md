---
name: add-or-enrich-locale-content
description: Workflow command scaffold for add-or-enrich-locale-content in devlo-website.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-enrich-locale-content

Use this workflow when working on **add-or-enrich-locale-content** in `devlo-website`.

## Goal

Adds or enriches content for multiple locales (FR/EN/DE/NL), including translations, new JSON bundles, and updating slug maps for routing.

## Common Files

- `src/lib/i18n/agency-content.json`
- `src/lib/i18n/alternatives-content.json`
- `src/lib/i18n/blog-content.json`
- `src/lib/i18n/geo-content.json`
- `src/lib/i18n/slug-map.json`
- `src/app/[locale]/[[...slug]]/page.tsx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Translate or enrich content in source language (often FR).
- Use DeepL or similar to generate EN/DE/NL versions.
- Update or create JSON bundles (e.g., agency-content.json, blog-content.json, geo-content.json, alternatives-content.json).
- Update slug-map.json to include new or corrected localized routes.
- Update or create locale-aware page/component files to render the new content.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.