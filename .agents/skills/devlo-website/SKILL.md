---
name: devlo-website-conventions
description: Development conventions and patterns for devlo-website. TypeScript Next.js project with mixed commits.
---

# Devlo Website Conventions

> Generated from [alldevlo/devlo-website](https://github.com/alldevlo/devlo-website) on 2026-03-22

## Overview

This skill teaches Claude the development patterns and conventions used in devlo-website.

## Tech Stack

- **Primary Language**: TypeScript
- **Framework**: Next.js
- **Architecture**: type-based module organization
- **Test Location**: separate

## When to Use This Skill

Activate this skill when:
- Making changes to this repository
- Adding new features following established patterns
- Writing tests that match project conventions
- Creating commits with proper message format

## Commit Conventions

Follow these commit message conventions based on 162 analyzed commits.

### Commit Style: Mixed Style

### Prefixes Used

- `fix`
- `feat`
- `chore`

### Message Guidelines

- Average message length: ~54 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: add 94 B2B buying signals insight page
```

*Commit message example*

```text
docs: enrich SEO/GEO guide to 1275 lines + fix Vercel domain aliasing
```

*Commit message example*

```text
fix: use Vercel API to find latest deployment instead of parsing CLI output
```

*Commit message example*

```text
perf: replace force-dynamic with ISR on catch-all locale route
```

*Commit message example*

```text
chore: add AIOS sync trigger on content changes
```

*Commit message example*

```text
fix: explicitly alias devlo.ch after each Vercel deployment
```

*Commit message example*

```text
fix: enhanced domain diagnostic workflow
```

*Commit message example*

```text
fix: re-add devlo.ch domain + harden deploy workflow
```

## Architecture

### Project Structure: Single Package

This project uses **type-based** module organization.

### Source Layout

```
src/
├── app/
├── components/
├── content/
├── data/
├── lib/
├── types/
```

### Configuration Files

- `.eslintrc.json`
- `.github/workflows/deploy.yml`
- `.github/workflows/fix-domain.yml`
- `.github/workflows/notify-aios.yml`
- `next.config.mjs`
- `package.json`
- `tailwind.config.ts`
- `tsconfig.json`
- `vercel.json`

### Guidelines

- Group code by type (components, services, utils)
- Keep related functionality in the same type folder
- Avoid circular dependencies between type folders

## Code Style

### Language: TypeScript

### Naming Conventions

| Element | Convention |
|---------|------------|
| Files | snake_case |
| Functions | camelCase |
| Classes | PascalCase |
| Constants | SCREAMING_SNAKE_CASE |

### Import Style: Path Aliases (@/, ~/)

### Export Style: Default Exports


*Preferred import style*

```typescript
// Use path aliases for imports
import { Button } from '@/components/Button'
import { useAuth } from '@/hooks/useAuth'
import { api } from '@/lib/api'
```

*Preferred export style*

```typescript
// Use default exports for main component/function
export default function UserProfile() { ... }
```

## Error Handling

### Error Handling Style: Try-Catch Blocks


*Standard error handling pattern*

```typescript
try {
  const result = await riskyOperation()
  return result
} catch (error) {
  console.error('Operation failed:', error)
  throw new Error('User-friendly message')
}
```

## Common Workflows

These workflows were detected from analyzing commit patterns.

### Feature Development

Standard feature implementation workflow

**Frequency**: ~17 times per month

**Steps**:
1. Add feature implementation
2. Add tests for feature
3. Update documentation

**Files typically involved**:
- `src/components/layout/*`
- `src/components/pages/*`
- `src/components/shared/*`
- `**/*.test.*`
- `**/api/**`

**Example commit sequence**:
```
fix(i18n): translate hardcoded French strings in CaseStudySwitcher + SiteHeader
Merge pull request #10 from alldevlo/fix/i18n-hardcoded-strings
feat(ui): homepage services carousel, agence overhaul, breadcrumb upgrade + nav fix
```

### Add Or Localize New Page Or Resource

Adds a new page or resource (often with lead capture or SEO focus), or localizes an existing page to new locales. Typically involves creating a new page file, updating i18n slug maps, and sometimes adding supporting assets or API routes.

**Frequency**: ~2 times per month

**Steps**:
1. Create or rename page file in src/app/insights/ or similar directory
2. Update src/lib/i18n/slug-map.json with new or localized route
3. Add supporting files (e.g., public/llms.txt for SEO, API route, or downloads)
4. Update or add documentation if needed

**Files typically involved**:
- `src/app/insights/*/page.tsx`
- `src/lib/i18n/slug-map.json`
- `public/llms.txt`
- `src/app/api/*/route.ts`
- `public/downloads/*.skill`

**Example commit sequence**:
```
Create or rename page file in src/app/insights/ or similar directory
Update src/lib/i18n/slug-map.json with new or localized route
Add supporting files (e.g., public/llms.txt for SEO, API route, or downloads)
Update or add documentation if needed
```

### Ai Seo Geo Enrichment

Enriches pages and content with AI SEO and GEO signals, including summary points, author bylines, FAQ schema, JSON-LD, and translation of editorial content across locales.

**Frequency**: ~3 times per month

**Steps**:
1. Edit or add fields in content JSON/TS (summaryPoints, editorialTitle, etc.)
2. Update or create components to render new SEO/GEO fields (SummarySection, AuthorByline, etc.)
3. Add or update schema (Article JSON-LD, FAQ, breadcrumbs) in page components
4. Translate new/enriched content to EN/DE/NL via DeepL or scripts
5. Sync TS and JSON content files to ensure consistency

**Files typically involved**:
- `src/content/*.ts`
- `src/lib/i18n/*.json`
- `src/components/pages/*-master-page.tsx`
- `src/components/shared/summary-section.tsx`
- `src/components/shared/author-byline.tsx`
- `src/components/shared/faq-section.tsx`
- `scripts/geo-translate-json.mjs`

**Example commit sequence**:
```
Edit or add fields in content JSON/TS (summaryPoints, editorialTitle, etc.)
Update or create components to render new SEO/GEO fields (SummarySection, AuthorByline, etc.)
Add or update schema (Article JSON-LD, FAQ, breadcrumbs) in page components
Translate new/enriched content to EN/DE/NL via DeepL or scripts
Sync TS and JSON content files to ensure consistency
```

### I18n Slug And Redirect Management

Translates or corrects slugs for EN/DE/NL locales, updates slug-map, and manages 301 redirects for old URLs to new localized paths.

**Frequency**: ~2 times per month

**Steps**:
1. Update src/lib/i18n/slug-map.json with new or corrected slugs
2. Edit next.config.mjs to add or update redirects
3. Add or update 301 redirects for old paths
4. Test sitemap and navigation for correct locale routing

**Files typically involved**:
- `src/lib/i18n/slug-map.json`
- `next.config.mjs`

**Example commit sequence**:
```
Update src/lib/i18n/slug-map.json with new or corrected slugs
Edit next.config.mjs to add or update redirects
Add or update 301 redirects for old paths
Test sitemap and navigation for correct locale routing
```

### Github Actions Deploy Or Domain Fix

Updates GitHub Actions workflows to fix deployment or domain aliasing issues, often related to Vercel integration.

**Frequency**: ~1 times per month

**Steps**:
1. Edit .github/workflows/deploy.yml or fix-domain.yml to change deployment logic
2. Add diagnostics or explicit domain aliasing steps
3. Pin CLI versions or add API calls for reliability
4. Test deployment and domain assignment

**Files typically involved**:
- `.github/workflows/deploy.yml`
- `.github/workflows/fix-domain.yml`

**Example commit sequence**:
```
Edit .github/workflows/deploy.yml or fix-domain.yml to change deployment logic
Add diagnostics or explicit domain aliasing steps
Pin CLI versions or add API calls for reliability
Test deployment and domain assignment
```

### I18n Content Sync And Translation

Synchronizes or translates content across locales (FR/EN/DE/NL), ensuring all language files are up to date and consistent.

**Frequency**: ~2 times per month

**Steps**:
1. Edit or add fields in masterfile-content.json or similar files
2. Translate new or corrected fields via DeepL or scripts
3. Sync TS and JSON content files for all locales
4. Update components if new fields are rendered

**Files typically involved**:
- `src/lib/i18n/masterfile-content.json`
- `src/content/masterfile.fr.ts`
- `src/lib/i18n/services-content.json`
- `src/lib/i18n/agency-content.json`
- `scripts/translate_*.mjs`

**Example commit sequence**:
```
Edit or add fields in masterfile-content.json or similar files
Translate new or corrected fields via DeepL or scripts
Sync TS and JSON content files for all locales
Update components if new fields are rendered
```


## Best Practices

Based on analysis of the codebase, follow these practices:

### Do

- Use snake_case for file names
- Prefer default exports

### Don't

- Don't use long relative imports (use aliases)
- Don't deviate from established patterns without discussion

---

*This skill was auto-generated by [ECC Tools](https://ecc.tools). Review and customize as needed for your team.*
