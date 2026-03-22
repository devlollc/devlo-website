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

Follow these commit message conventions based on 164 analyzed commits.

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
fix: French accents, blue hero, category tooltips, newsletter placement
```

*Commit message example*

```text
feat: interactive buying-signals page with Lovable UI/UX spec
```

*Commit message example*

```text
docs: enrich SEO/GEO guide to 1275 lines + fix Vercel domain aliasing
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
feat: add 94 B2B buying signals insight page (#11)
```

*Commit message example*

```text
fix: use Vercel API to find latest deployment instead of parsing CLI output
```

*Commit message example*

```text
fix: explicitly alias devlo.ch after each Vercel deployment
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

**Frequency**: ~18 times per month

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

### Add Or Enrich Locale Content

Adds or enriches content for multiple locales (FR/EN/DE/NL), including translations, new JSON bundles, and updating slug maps for routing.

**Frequency**: ~3 times per month

**Steps**:
1. Translate or enrich content in source language (often FR).
2. Use DeepL or similar to generate EN/DE/NL versions.
3. Update or create JSON bundles (e.g., agency-content.json, blog-content.json, geo-content.json, alternatives-content.json).
4. Update slug-map.json to include new or corrected localized routes.
5. Update or create locale-aware page/component files to render the new content.
6. Add or update TypeScript content files if needed (e.g., agency-content.ts).

**Files typically involved**:
- `src/lib/i18n/agency-content.json`
- `src/lib/i18n/alternatives-content.json`
- `src/lib/i18n/blog-content.json`
- `src/lib/i18n/geo-content.json`
- `src/lib/i18n/slug-map.json`
- `src/app/[locale]/[[...slug]]/page.tsx`
- `src/components/pages/agency-master-page.tsx`
- `src/components/pages/alternative-page.tsx`
- `src/components/pages/blog-article-master-page.tsx`
- `src/components/pages/blog-hub-master-page.tsx`
- `src/components/pages/geo-landing-page.tsx`

**Example commit sequence**:
```
Translate or enrich content in source language (often FR).
Use DeepL or similar to generate EN/DE/NL versions.
Update or create JSON bundles (e.g., agency-content.json, blog-content.json, geo-content.json, alternatives-content.json).
Update slug-map.json to include new or corrected localized routes.
Update or create locale-aware page/component files to render the new content.
Add or update TypeScript content files if needed (e.g., agency-content.ts).
```

### Add Or Update Seo Geo Signals

Enriches pages with AI SEO and GEO signals: summary points, author byline, definition patterns, citations, structured data, and more for improved search and AI crawler visibility.

**Frequency**: ~4 times per month

**Steps**:
1. Add or update summary/conclusion sections with key takeaways.
2. Add or update AuthorByline with author microdata and dates.
3. Add definition patterns, attribution indicators, and answer capsules to content.
4. Add or update external citations and links in summary points.
5. Add or update Article JSON-LD and other structured data.
6. Sync enriched content between JSON and TypeScript files as needed.
7. Update or create supporting components (e.g., summary-section.tsx, author-byline.tsx, comparison-table.tsx).

**Files typically involved**:
- `src/components/shared/summary-section.tsx`
- `src/components/shared/author-byline.tsx`
- `src/components/shared/comparison-table.tsx`
- `src/components/shared/faq-section.tsx`
- `src/lib/i18n/masterfile-content.json`
- `src/content/masterfile.fr.ts`
- `src/components/pages/home-page.tsx`
- `src/components/pages/service-page.tsx`
- `src/components/pages/agency-master-page.tsx`
- `src/components/pages/geo-landing-page.tsx`

**Example commit sequence**:
```
Add or update summary/conclusion sections with key takeaways.
Add or update AuthorByline with author microdata and dates.
Add definition patterns, attribution indicators, and answer capsules to content.
Add or update external citations and links in summary points.
Add or update Article JSON-LD and other structured data.
Sync enriched content between JSON and TypeScript files as needed.
Update or create supporting components (e.g., summary-section.tsx, author-byline.tsx, comparison-table.tsx).
```

### Add New Insight Or Feature Page

Adds a new insight or feature page, often as a lead magnet or campaign, including implementation, i18n, newsletter integration, and supporting assets.

**Frequency**: ~2 times per month

**Steps**:
1. Create new page file under src/app/insights/[feature]/page.tsx.
2. Add or update supporting components (e.g., animated-counter, signal-browser, newsletter-section).
3. Add i18n entries to slug-map.json and/or masterfile-content.json.
4. Add supporting assets (e.g., .skill files, public/llms.txt entries).
5. Add or update API routes if needed (e.g., newsletter/route.ts).
6. Update sitemap.ts and llms.txt for SEO/AI discoverability.

**Files typically involved**:
- `src/app/insights/[feature]/page.tsx`
- `src/app/insights/[feature]/*.tsx`
- `src/lib/i18n/slug-map.json`
- `src/lib/i18n/masterfile-content.json`
- `src/app/api/newsletter/route.ts`
- `public/llms.txt`
- `src/app/sitemap.ts`

**Example commit sequence**:
```
Create new page file under src/app/insights/[feature]/page.tsx.
Add or update supporting components (e.g., animated-counter, signal-browser, newsletter-section).
Add i18n entries to slug-map.json and/or masterfile-content.json.
Add supporting assets (e.g., .skill files, public/llms.txt entries).
Add or update API routes if needed (e.g., newsletter/route.ts).
Update sitemap.ts and llms.txt for SEO/AI discoverability.
```

### Fix Or Update Deployment Workflow Vercel

Fixes or improves the Vercel deployment workflow, especially regarding domain aliasing, deployment ID resolution, and domain diagnostics.

**Frequency**: ~2 times per month

**Steps**:
1. Edit .github/workflows/deploy.yml to add or fix domain aliasing logic.
2. Use Vercel API to fetch latest deployment and assign custom domain.
3. Add or update fix-domain.yml for one-off or diagnostic runs.
4. Pin Vercel CLI version if needed.
5. Test and verify domain assignment after deployment.

**Files typically involved**:
- `.github/workflows/deploy.yml`
- `.github/workflows/fix-domain.yml`

**Example commit sequence**:
```
Edit .github/workflows/deploy.yml to add or fix domain aliasing logic.
Use Vercel API to fetch latest deployment and assign custom domain.
Add or update fix-domain.yml for one-off or diagnostic runs.
Pin Vercel CLI version if needed.
Test and verify domain assignment after deployment.
```

### Fix Or Translate I18n Slugs And Redirects

Corrects, translates, or adds localized slugs and 301 redirects for EN/DE/NL, ensuring proper routing and SEO.

**Frequency**: ~3 times per month

**Steps**:
1. Edit slug-map.json to correct or add localized slugs.
2. Edit next.config.mjs to add or update redirects.
3. Add or update 301 redirects for old or incorrect paths.
4. Update sitemap.ts to include new or corrected routes.
5. Test all locales for correct routing and redirection.

**Files typically involved**:
- `src/lib/i18n/slug-map.json`
- `next.config.mjs`
- `src/app/sitemap.ts`

**Example commit sequence**:
```
Edit slug-map.json to correct or add localized slugs.
Edit next.config.mjs to add or update redirects.
Add or update 301 redirects for old or incorrect paths.
Update sitemap.ts to include new or corrected routes.
Test all locales for correct routing and redirection.
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
