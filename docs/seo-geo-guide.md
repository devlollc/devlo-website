# SEO & GEO Guide -- devlo.ch (Next.js 14 App Router)

**Last updated:** 2026-03-20
**Stack:** Next.js 14.2.35 / App Router / Vercel / TypeScript
**Domain:** https://devlo.ch
**Languages:** fr (default, no prefix), en, de, nl

---

## Changelog

| Date | Change |
|------|--------|
| 2026-03-20 | Initial guide created. Covers SEO fundamentals + GEO (Generative Engine Optimization). |

---

## Table of contents

1. [Page creation checklist](#1-page-creation-checklist)
2. [Metadata requirements](#2-metadata-requirements)
3. [GEO requirements](#3-geo-requirements--generative-engine-optimization)
4. [Core Web Vitals targets](#4-core-web-vitals-targets)
5. [Multilingual / hreflang rules](#5-multilingual--hreflang-rules)
6. [Internal linking rules](#6-internal-linking-rules)
7. [Image requirements](#7-image-requirements)
8. [Structured data templates](#8-structured-data-templates)
9. [llms.txt implementation guide](#9-llmstxt-implementation-guide)
10. [Validation tools and commands](#10-validation-tools-and-commands)

---

## 1. Page creation checklist

Run through every item before deploying a new page to production.

### Metadata & indexing

- [ ] Page has a unique `<title>` (50-60 chars). Uses `buildPageMetadata()` from `src/lib/seo/metadata.ts` or static `metadata` export
- [ ] Page has a unique `description` meta tag (120-155 chars)
- [ ] `robots: { index: true, follow: true }` is set (default via `buildPageMetadata`)
- [ ] `alternates.canonical` points to the correct canonical URL (no trailing slash, no query params)
- [ ] `alternates.languages` includes all published locale variants via `buildLanguageAlternates()`
- [ ] Open Graph tags are set: `og:title`, `og:description`, `og:image` (1200x630), `og:url`, `og:type`
- [ ] Twitter card is set: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:images`

### Structured data

- [ ] At minimum, page inherits Organization + LocalBusiness + Service schemas from root layout (`src/app/layout.tsx`)
- [ ] Page-specific JSON-LD added via `<JsonLd schema={...} />` from `src/components/seo/json-ld.tsx`
- [ ] Schema type matches content: Article for blog, FAQPage for FAQ sections, HowTo for step-by-step, BreadcrumbList for navigation, Course for academy

### Content structure (SEO + GEO)

- [ ] Page has exactly one `<h1>` containing the primary keyword
- [ ] Heading hierarchy is sequential: h1 > h2 > h3 (no skipped levels)
- [ ] At least one question-framed H2 (e.g., "Comment devlo genere des leads B2B ?")
- [ ] Each H2 section starts with a direct answer capsule (under 200 chars, first sentence)
- [ ] Body text includes the target keyword in the first 100 words
- [ ] At least 3 internal links to other pages on devlo.ch
- [ ] At least 1 external link to an authoritative source
- [ ] All images have descriptive `alt` text
- [ ] Page is added to `src/app/sitemap.ts` with correct priority and changeFrequency

### Performance

- [ ] Hero/above-the-fold images use `priority={true}` and explicit `width`/`height` or `fill` with `sizes`
- [ ] Below-the-fold images use default lazy loading (no `priority`)
- [ ] No layout shift from dynamic content (reserve height for embeds, forms, images)
- [ ] No blocking third-party scripts above the fold

### GEO readiness

- [ ] Content has visible author attribution (byline: "Par Charles Perret")
- [ ] Publication date and last-modified date are visible and in schema
- [ ] Key claims use attribution phrases ("selon", "d'apres", "based on")
- [ ] Statistics have source annotations
- [ ] Content passes the "standalone passage" test: each section is self-contained and quotable

### Final validation

- [ ] Run `node scripts/crawl-seo.mjs` or spot-check with the validation commands in section 10
- [ ] Test with Google Rich Results Test (https://search.google.com/test/rich-results)
- [ ] Verify structured data with Schema Markup Validator (https://validator.schema.org/)
- [ ] Check PageSpeed Insights score >= 90 mobile

---

## 2. Metadata requirements

### How metadata works in this codebase

The primary metadata builder is `src/lib/seo/metadata.ts`:

```typescript
import { buildPageMetadata } from "@/lib/seo/metadata";

// In any page.tsx:
export const metadata = buildPageMetadata({
  title: "Prospection commerciale B2B en Suisse",
  description: "devlo aide les entreprises suisses a generer des leads qualifies...",
  path: "/prospection-commerciale-suisse",
  type: "website", // or "article" for blog posts
  imagePath: "/images/og-geo-suisse.webp", // optional custom OG image
  datePublished: "2026-01-15", // for articles
  dateModified: "2026-03-20", // for articles
  author: "Charles Perret", // for articles
});
```

For dynamic routes, use `generateMetadata`:

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetchData(params.slug);
  return buildPageMetadata({
    title: data.title,
    description: data.description,
    path: `/etudes-de-cas/${params.slug}`,
    type: "article",
  });
}
```

### Title format

| Context | Format | Example |
|---------|--------|---------|
| Homepage | Raw title (no suffix) | "Agence de prospection commerciale B2B en Suisse" |
| Other pages | `%s \| devlo` (via template in layout) | "Cold Email B2B : Guide Complet \| devlo" |
| Max length | 50-60 characters (before `\| devlo`) | -- |

### Description format

| Rule | Value |
|------|-------|
| Length | 120-155 characters |
| Must contain | Primary keyword + value proposition |
| Must not contain | Duplicated text from another page |
| Language | Match the page locale |

### Open Graph image

| Property | Value |
|----------|-------|
| Dimensions | 1200 x 630 px |
| Format | WebP preferred, JPG fallback |
| Default | `/images/devlo_OG_Banner.webp` (set in `src/lib/seo/metadata.ts`) |
| Custom per-page | Pass `imagePath` to `buildPageMetadata()` or set via HadoSEO override |
| Alt text | Always set -- describes the image content |

### HadoSEO override system

Page-level metadata can be overridden without code changes via `src/content/hadoseo-metadata.ts`. This file maps routes to custom titles, descriptions, and OG images. The `buildPageMetadata` function checks this automatically.

---

## 3. GEO requirements -- Generative Engine Optimization

GEO optimizes content for citation by AI systems: Google AI Overviews, ChatGPT web search, Perplexity, Claude search. This is now as important as traditional SEO.

### Current devlo.ch AI SEO score: 57/100 (from ChatSEO audit 2026-03-15)

Key weaknesses to fix:
- Answerability: 26% (need answer capsules after question-framed H2s)
- Grounding Signals: 35% (need attribution, citations, dates)
- Readability for Compression: 38% (simplify language, add transitions)

### 3.1 Answer capsule pattern

Every question-framed heading must be followed immediately by a direct answer in under 200 characters. This is the single highest-impact GEO pattern.

```
WRONG:
## Comment fonctionne la prospection B2B ?
La prospection B2B est un sujet complexe qui implique de nombreux facteurs...

RIGHT:
## Comment fonctionne la prospection B2B ?
La prospection B2B consiste a identifier et contacter des decideurs d'entreprises
cibles via email, LinkedIn et telephone pour generer des rendez-vous qualifies.

En pratique, cela implique trois etapes : le ciblage, la sequence multicanale,
et la qualification des reponses...
```

### 3.2 Passage-level citability

AI engines extract individual passages, not full pages. Each section must pass this test: "If this paragraph were shown alone, would it be a complete, useful answer?"

Rules:
- Each H2 section should be 120-180 words (the citation sweet spot)
- Start with the conclusion/answer, then expand with context
- Include at least one specific data point per section
- Use transition words (cependant, par consequent, de plus) to improve logical flow

### 3.3 Attribution and authority signals

AI engines weight content higher when claims are attributed to sources.

| Pattern | Example |
|---------|---------|
| Expert attribution | "Selon Charles Perret, expert en prospection B2B avec plus de 1000 campagnes deployees..." |
| Data attribution | "D'apres une etude interne portant sur 14 campagnes B2B en Suisse..." |
| Source linking | "Comme le recommande HubSpot dans son guide de cold emailing [lien]..." |
| Quoted attribution | "Les taux de reponse en cold email B2B se situent entre 1% et 5%" -- SalesLoft, 2025 |

### 3.4 Content freshness signals

AI engines strongly prefer content less than 12 months old.

- [ ] Every page must have a visible "Derniere mise a jour : [date]" or "Last updated: [date]"
- [ ] Use `dateModified` in Article schema
- [ ] Use `article:modified_time` meta tag (set via `buildPageMetadata` `dateModified` param)
- [ ] Update `lastModified` in sitemap.ts when content changes

### 3.5 Entity clarity

AI engines need to clearly identify what entity (brand, person, concept) the page is about.

- [ ] "devlo" must appear in: page title, OG title, schema, and footer
- [ ] "Charles Perret" must appear on content pages with author byline
- [ ] Define key terms explicitly on first use: "La prospection B2B (business-to-business) designe..."
- [ ] Maintain 2-8 named entities per 100 words

### 3.6 Structured Q&A format

For pages with FAQ content, structure as explicit Q&A pairs. AI engines extract these directly.

```html
<h2>Questions frequentes</h2>
<h3>Combien coute une campagne de prospection B2B ?</h3>
<p>Une campagne de prospection B2B externalisee coute entre 2000 et 8000 CHF par mois,
selon le volume de prospects cibles et le nombre de canaux utilises.</p>
```

Back this with FAQPage JSON-LD (see section 8).

### 3.7 Tables and comparative data

AI engines parse tables with high accuracy. Use HTML tables for:
- Pricing comparisons
- Feature comparisons (vs competitors)
- Campaign results summaries
- Before/after metrics

### 3.8 AI crawler access

devlo.ch already allows all major AI crawlers in `src/app/robots.ts`:

| Bot | Purpose | Status |
|-----|---------|--------|
| GPTBot | OpenAI training + retrieval | Allowed |
| ChatGPT-User | ChatGPT real-time search | Allowed |
| PerplexityBot | Perplexity indexing | Allowed |
| ClaudeBot | Anthropic training | Allowed |
| anthropic-ai | Anthropic general | Allowed |
| Google-Extended | Google AI training | Allowed |

**Recommendation for future consideration:** As the industry matures, consider splitting training vs. retrieval access. For now, allowing all crawlers maximizes GEO visibility for a site that wants to be cited.

---

## 4. Core Web Vitals targets

### Target thresholds (Google "Good" rating)

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5s - 4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | < 200ms | 200ms - 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1 - 0.25 | > 0.25 |

**Passing criteria:** At least 75% of page visits must meet "Good" for all three metrics.

### devlo.ch internal targets

| Metric | Target | Rationale |
|--------|--------|-----------|
| LCP | < 2.0s | Below Google "Good" threshold with margin |
| INP | < 150ms | Below Google "Good" threshold with margin |
| CLS | < 0.05 | Half the Google threshold -- zero-shift goal |
| Lighthouse Performance (mobile) | >= 90 | Competitive floor for B2B sites |
| Lighthouse Performance (desktop) | >= 95 | Near-perfect expected for static content |

### Current baseline (2026-03-06)

| Page | Mobile | Desktop | Notes |
|------|--------|---------|-------|
| Homepage | 88 | 100 | -- |
| Services | 93 | 100 | -- |
| Consultation | 92 | 93 | CLS fixed (was 0.158 desktop) |
| Case study (Horus) | 93 | 100 | -- |

### Common CWV issues in this codebase

| Issue | Fix |
|-------|-----|
| CLS from HubSpot form load | Reserve height: `min-h-[560px] md:min-h-[640px]` on form container |
| CLS from image loading | Always set explicit `width`/`height` or use `fill` with `sizes` on `next/image` |
| LCP delay from third-party scripts | GA4 and HubSpot use `strategy="lazyOnload"` -- do not change to `beforeInteractive` |
| Large JS bundle from framer-motion | Use CSS animations where possible (already done for `fade-in-on-scroll`) |
| Font flash (FOIT/FOUT) | Using `display: swap` with `next/font/local` -- already configured |

---

## 5. Multilingual / hreflang rules

### URL structure

```
https://devlo.ch/              -> French (default, no prefix)
https://devlo.ch/en/           -> English
https://devlo.ch/de/           -> German
https://devlo.ch/nl/           -> Dutch
```

Decision: Subfolders, not subdomains. Domain authority is shared. See `docs/I18N_SEO_PLAN.md`.

### hreflang implementation

hreflang tags are generated automatically by `buildLanguageAlternates()` in `src/lib/seo/metadata.ts`, which reads from the slug map (`src/lib/i18n/slug-map.ts`).

**Rules:**

1. **Only declare hreflang for pages that actually exist in that locale.** Never point hreflang to a 404 or redirect.
2. **Every page must reference itself** in the hreflang set (self-referential tag).
3. **Include `x-default`** pointing to the French (default) version.
4. **Use correct locale codes:**
   - `fr` (not `fr-CH` in hreflang -- language only, unless regional targeting is needed)
   - `en`, `de`, `nl`
5. **Translated slugs are supported** but not mandatory. The slug map handles mappings like:
   - `/consultation` (fr) -> `/en/consultation` (en) -> `/de/kostenlose-beratung` (de) -> `/nl/gratis-consultatie` (nl)

### Adding a new locale variant

1. Create the translated page content
2. Add the route mapping in `src/lib/i18n/slug-map.ts`
3. The `buildLanguageAlternates()` function will automatically generate hreflang tags
4. Verify the sitemap includes the new URL (`src/app/sitemap.ts` iterates all locale variants)
5. Verify `<html lang="xx">` is set correctly via the `x-devlo-locale` header in layout.tsx

### Common mistakes to avoid

- Do NOT add hreflang for a locale if the page does not exist yet (returns 404)
- Do NOT use `fr-CH` in hreflang unless you also have a `fr-FR` or `fr-BE` variant
- Do NOT forget to update the sitemap when adding new locale pages
- Do NOT mix ISO codes: it is `de`, not `ge`; it is `nl`, not `du`

---

## 6. Internal linking rules

### Minimum requirements per page

| Rule | Minimum | Notes |
|------|---------|-------|
| Internal links | 3 per page | Link to related services, case studies, or blog posts |
| Contextual anchor text | Required | Use descriptive text, not "cliquez ici" or "en savoir plus" |
| Case study cross-links | 2 per case study | Link to related case studies by industry or metric |
| CTA link | 1 per page | Link to `/consultation` from every content page |

### Link architecture principles

1. **Hub-and-spoke model:** Service pages are hubs. Case studies, blog posts, and geo pages link back to their parent service.
2. **Topical clusters:** Group related content and interlink within the cluster:
   - Cold email cluster: service page + blog guide + case studies using cold email
   - LinkedIn cluster: service page + blog guide + case studies using LinkedIn
3. **Breadcrumb navigation:** Use `buildBreadcrumbSchema()` from `src/lib/seo/schema-builders.ts` on all non-homepage pages.
4. **Footer links:** The site footer provides baseline internal linking to key pages. Do not remove footer links.

### Anchor text guidelines

| Pattern | Example |
|---------|---------|
| Keyword-rich | "notre service de [cold email B2B](/services/cold-email)" |
| Natural context | "comme le montre [cette etude de cas](/etudes-de-cas/hr-54-rendez-vous-dach)" |
| Avoid | "cliquez ici", "en savoir plus", bare URLs |
| Avoid over-optimization | Do not use the exact same anchor text for the same target across many pages |

---

## 7. Image requirements

### Format and optimization

| Requirement | Value |
|-------------|-------|
| Preferred format | WebP (AVIF as progressive enhancement via Next.js) |
| Next.js config | `formats: ["image/avif", "image/webp"]` in `next.config.mjs` |
| Quality | 80-85 (default 75 in Next.js; devlo uses `quality={82}` for hero images) |
| Max file size (source) | 200KB for photos, 50KB for icons/illustrations |

### Sizing

| Context | Sizing approach |
|---------|----------------|
| Hero / above the fold | Use `priority={true}`, explicit `sizes` prop, `fill` or fixed dimensions |
| Content images | Use responsive `sizes` prop: `sizes="(min-width: 1024px) 50vw, 100vw"` |
| Thumbnails | Fixed dimensions: `width={400} height={300}` |
| OG images | 1200 x 630 px, WebP or JPG |

### Alt text

| Rule | Detail |
|------|--------|
| Every image must have alt text | Describe the content, not the file name |
| Decorative images | Use `alt=""` (empty string, not missing) |
| Include keyword naturally | "Resultats de la campagne cold email B2B pour Horus Software" |
| Max length | 125 characters |
| Language | Match the page locale |

### Current gap (from ChatSEO audit)

Homepage: 149 of 211 images have alt text (71%). Academy: 8 of 52 images have alt text (15%). Priority: fix Academy page image alt texts.

### Lazy loading

- `next/image` lazy-loads by default. Do NOT add `loading="lazy"` manually.
- Only use `priority={true}` for the single largest above-the-fold image per page.
- Do not set more than 2 images per page as `priority` -- it defeats the purpose.

---

## 8. Structured data templates

All schema builders are in `src/lib/seo/schema-builders.ts`. Render via `<JsonLd schema={...} />` from `src/components/seo/json-ld.tsx`.

### 8.1 Organization (global -- already in layout.tsx)

Already implemented. Includes Organization + LocalBusiness (CH + US) + Service with AggregateRating. Localized per `htmlLang`. No action needed.

### 8.2 BreadcrumbList

Use on all non-homepage pages.

```typescript
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";
import { JsonLd } from "@/components/seo/json-ld";

<JsonLd schema={buildBreadcrumbSchema([
  { name: "Accueil", path: "/" },
  { name: "Etudes de cas", path: "/etudes-de-cas" },
  { name: "Horus Software", path: "/etudes-de-cas/logiciel-comptable-200k-ca" },
])} />
```

### 8.3 FAQPage

Use on any page with Q&A content (homepage FAQ section, service pages).

```typescript
import { buildFaqPageSchema } from "@/lib/seo/schema-builders";

<JsonLd schema={buildFaqPageSchema([
  {
    question: "Combien coute une campagne de prospection B2B ?",
    answer: "Une campagne coute entre 2000 et 8000 CHF/mois selon le volume et les canaux.",
  },
  {
    question: "Quels resultats attendre d'une campagne cold email ?",
    answer: "En moyenne, nos clients obtiennent 15 a 80 rendez-vous qualifies par campagne.",
  },
])} />
```

### 8.4 Article (blog posts)

```typescript
import { buildArticleSchema } from "@/lib/seo/schema-builders";

<JsonLd schema={buildArticleSchema({
  headline: "Cold Email B2B : Guide Complet",
  description: "Comment structurer et deployer des campagnes cold email performantes.",
  path: "/blog/cold-email-b2b-guide-complet",
  imagePath: "/images/blog/cold-email-guide-og.webp",
  datePublished: "2026-01-15",
  dateModified: "2026-03-20",
  author: "Charles Perret",
  authorUrl: "https://www.linkedin.com/in/charlesperret/",
})} />
```

### 8.5 HowTo (step-by-step guides)

```typescript
import { buildHowToSchema } from "@/lib/seo/schema-builders";

<JsonLd schema={buildHowToSchema(
  "Comment lancer une campagne de prospection B2B",
  [
    { title: "Definir votre ICP", description: "Identifiez les entreprises cibles par taille, secteur et localisation." },
    { title: "Construire la liste", description: "Utilisez LinkedIn Sales Navigator et Clay pour enrichir les contacts." },
    { title: "Rediger les sequences", description: "Creez 3 a 5 emails personnalises avec un CTA clair." },
    { title: "Lancer et iterer", description: "Envoyez, mesurez les taux de reponse, et optimisez." },
  ]
)} />
```

### 8.6 VideoObject (YouTube embeds)

```typescript
import { buildVideoObjectSchema } from "@/lib/seo/schema-builders";

<JsonLd schema={buildVideoObjectSchema({
  name: "Comment devlo genere 80 rendez-vous B2B",
  description: "Charles Perret explique la methode de prospection multicanale de devlo.",
  thumbnailUrl: "/images/video-thumbnail.webp",
  uploadDate: "2026-03-15",
  embedUrl: "https://www.youtube.com/embed/VIDEO_ID",
  duration: "PT12M30S", // ISO 8601 duration
})} />
```

### 8.7 Course (Academy page -- already implemented)

Already implemented via `buildCourseSchema()` in `schema-builders.ts`. No action needed.

### 8.8 Review / AggregateRating (already in layout Service schema)

Already implemented in the layout-level Service schema. For additional review schemas on specific pages, use `buildReviewSchema()`.

### Schema type decision matrix

| Page type | Required schemas |
|-----------|-----------------|
| Homepage | Organization, LocalBusiness, Service, FAQPage (if FAQ section exists) |
| Service page | BreadcrumbList, Service or FAQPage |
| Case study | BreadcrumbList, Article |
| Blog post | BreadcrumbList, Article, (FAQPage if Q&A section) |
| Geo landing page | BreadcrumbList, LocalBusiness, Service |
| Academy | BreadcrumbList, Course |
| Alternative page | BreadcrumbList, (FAQPage if comparison table) |
| Consultation | BreadcrumbList |

---

## 9. llms.txt implementation guide

### Current state

devlo.ch already has an `llms.txt` file at `/public/llms.txt` (served at `https://devlo.ch/llms.txt`). It follows the specification from https://llmstxt.org/.

### Format specification

```markdown
# Site Name

> One-sentence description of the site.

## Section Heading
- [Page Title](URL): Brief description
- [Page Title](URL): Brief description
```

### Maintenance rules

1. **Update llms.txt whenever a new page is published.** Add the page under the appropriate section heading.
2. **Keep it curated.** Maximum 50-60 links. Only include pages that provide substantive content. Do not list thank-you pages, legal pages, or redirects.
3. **Match the sitemap.** Every URL in llms.txt should also be in the sitemap. But the sitemap will contain more URLs than llms.txt.
4. **Use plain ASCII.** Avoid accented characters in the llms.txt file (LLMs handle ASCII more reliably). Current file already follows this pattern.
5. **Update descriptions when content changes.** Keep the one-line description accurate.

### Optional: llms-full.txt

For a more comprehensive version, consider creating `/public/llms-full.txt` that includes the full text content of key pages in a single file. This is useful for LLMs that want to ingest all content at once. Priority: low (implement only if AI citation tracking shows demand).

### Adoption status (industry context)

Over 844,000 websites have implemented llms.txt (as of October 2025). Major adopters include Anthropic, Cloudflare, Stripe. No major AI platform has officially confirmed reading these files, but they align with the general principle of making content machine-accessible. Google has stated they do not support llms.txt, but other AI platforms may benefit from it.

---

## 10. Validation tools and commands

### Local validation

```bash
# Build the site and check for errors
npm run build

# Run the SEO crawler against production
node scripts/crawl-seo.mjs

# Verify HadoSEO metadata parity (titles/descriptions match expectations)
npm run check:hadoseo-metadata

# Build the slug map from the live sitemap
npm run slugmap:build

# Run Lighthouse locally (requires serve or next start)
npm run build && npx next start -p 4020
# Then in another terminal:
npx lighthouse http://localhost:4020 --output=json --output-path=./lighthouse-report.json
npx lighthouse http://localhost:4020/consultation --output=json --output-path=./lighthouse-consultation.json
```

### Online validation tools

| Tool | URL | What it checks |
|------|-----|----------------|
| Google Rich Results Test | https://search.google.com/test/rich-results | JSON-LD structured data validity + eligibility |
| Schema Markup Validator | https://validator.schema.org/ | Full schema.org validation |
| PageSpeed Insights | https://pagespeed.web.dev/ | Core Web Vitals + Lighthouse score |
| Google Search Console | https://search.google.com/search-console | Index coverage, CWV field data, errors |
| ChatSEO | https://chatseo.app | AI SEO score (GEO readiness) |
| Ahrefs Site Audit | https://ahrefs.com/site-audit | Technical SEO issues at scale |
| OpenGraph Debugger | https://www.opengraph.xyz/ | OG tag preview across platforms |
| Twitter Card Validator | https://cards-dev.twitter.com/validator | Twitter card preview |

### MCP servers available for SEO

These MCP servers are configured for the devlo-website project workspace:

| Server | Purpose | Notes |
|--------|---------|-------|
| `chatseo` | AI SEO scoring and recommendations | Available via `npx mcp-remote https://api.chatseo.app/mcp` |
| `gsc-server` | Google Search Console data | Credentials at `~/.config/gsc-mcp/devlo-gsc-credentials.json` |

### Post-deploy verification sequence

After deploying a new page or major content update:

1. Check the page loads: `curl -I https://devlo.ch/[path]` -- expect `200 OK`
2. Check robots.txt: `curl https://devlo.ch/robots.txt` -- verify the page is not disallowed
3. Check sitemap: `curl https://devlo.ch/sitemap.xml` -- verify the new URL is listed
4. Check structured data: Paste the URL in Google Rich Results Test
5. Check OG tags: Paste the URL in https://www.opengraph.xyz/
6. Check PageSpeed: Run the URL through https://pagespeed.web.dev/
7. Request indexing in Google Search Console (URL Inspection tool)
8. If GEO-critical content: Run ChatSEO audit on the URL

### Key files in the codebase

| File | Purpose |
|------|---------|
| `src/lib/seo/metadata.ts` | `buildPageMetadata()` -- generates Metadata objects |
| `src/lib/seo/schema-builders.ts` | JSON-LD schema builder functions |
| `src/lib/seo/site-config.ts` | Central SEO constants (org name, addresses, social) |
| `src/components/seo/json-ld.tsx` | `<JsonLd />` component for rendering schema |
| `src/app/robots.ts` | robots.txt generation (includes AI crawler rules) |
| `src/app/sitemap.ts` | sitemap.xml generation (all locales) |
| `src/app/layout.tsx` | Root layout with global schemas and metadata |
| `src/content/hadoseo-metadata.ts` | Per-route metadata overrides |
| `src/lib/i18n/localized-seo.ts` | Sanity-backed localized SEO data |
| `src/lib/i18n/slug-map.ts` | Locale-aware URL mappings for hreflang |
| `public/llms.txt` | LLM-optimized site map |
| `scripts/crawl-seo.mjs` | SEO crawler for migration/audit |
| `scripts/verify-hadoseo-metadata.mjs` | HadoSEO parity checker |

---

## Quick reference: GEO content writing checklist

For content writers and Claude agents creating new pages:

- [ ] First sentence after each H2 is a direct answer (under 200 chars)
- [ ] Each section is 120-180 words
- [ ] Include a statistic or data point every 150-200 words
- [ ] Attribute all claims: "selon [source]", "d'apres [etude]"
- [ ] Define technical terms on first use
- [ ] Use transition words between paragraphs
- [ ] Include at least one comparison table per long-form page
- [ ] Add a summary/conclusion section at the end
- [ ] Visible author byline and date
- [ ] Flesch Reading Ease target: 50-60 (moderate difficulty -- appropriate for B2B executives)
