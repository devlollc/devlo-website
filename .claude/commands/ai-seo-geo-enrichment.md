---
name: ai-seo-geo-enrichment
description: Workflow command scaffold for ai-seo-geo-enrichment in devlo-website.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /ai-seo-geo-enrichment

Use this workflow when working on **ai-seo-geo-enrichment** in `devlo-website`.

## Goal

Enriches existing pages with AI SEO and GEO signals: summary sections, author bylines, answer capsules, definition patterns, citations, and JSON-LD schema for better search and AI visibility.

## Common Files

- `src/components/pages/*`
- `src/components/shared/summary-section.tsx`
- `src/components/shared/author-byline.tsx`
- `src/components/shared/comparison-table.tsx`
- `src/lib/i18n/masterfile-content.json`
- `src/content/masterfile.fr.ts`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update or add SummarySection, AuthorByline, and other semantic components in page files
- Add or update editorial fields (summaryPoints, editorialTitle, citations) in content files (JSON or TS)
- Add or update JSON-LD schema and microdata in components/pages
- Sync content between masterfile.fr.ts and masterfile-content.json
- Translate new fields across locales if needed

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.