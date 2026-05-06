# SEO/GEO Growth Loop

This is the operating loop for devlo.ch when a new LLM API, AI search behavior, or major search feature changes.

## Trigger

Run this loop when:

- OpenAI, Anthropic, Google, Perplexity, Vercel AI Gateway, or a major search engine ships a relevant model/search update.
- devlo publishes a new core page, service page, regional page, comparison page, or guide.
- Search Console shows a material traffic or CTR change on demo-intent pages.

## Pages To Check First

- `/`
- `/consultation`
- `/services`
- `/prospection-commerciale-suisse`
- `/prospection-commerciale-suisse-romande`
- `/prospection-commerciale-suisse-alemanique`
- `/prospection-commerciale-geneve`
- `/prospection-commerciale-lausanne`
- `/prospection-commerciale-zurich`
- `/prospection-commerciale-dach`
- `/ai-sales-ops`
- `/insights/buying-signals`
- `/blog/cold-email-b2b-guide-complet`

## Technical Checks

Run:

```bash
npm run lint
npm run build
npm run check:slug-map-navigation
npm run check:seo-quality -- --json > /tmp/devlo-seo-quality.json
```

For preview or local checks:

```bash
SEO_QUALITY_BASE_URL=http://localhost:4020 npm run check:seo-quality -- --json
```

## GEO Checks

For each priority page, verify:

- One direct-answer block near the top.
- At least one extractable HTML table when the page has comparison or decision intent.
- FAQ schema and visible FAQ content.
- Author or freshness signal on article/insight pages.
- Local proof for regional pages, not city-name swapping.
- `public/llms.txt` includes new high-value pages.

## Measurement

GA4 events emitted by the site:

| Event | Purpose |
|---|---|
| `seo_geo_page_view` | Measures visits to GEO/regional SEO pages with `page_type`, `market`, `locale`, `page_path`. |
| `seo_geo_cta_clicked` | Measures consultation CTA clicks from GEO/regional pages. |
| `demo_requested` | Measures submitted consultation forms. |
| `paid_lead_submitted` | Measures paid-attributed form submissions. |

Search Console comparison:

- Compare 14 days before vs. 14 days after deploy.
- Repeat at 30 days.
- Segment by page group: core, services, Swiss regional, insights, blog.
- Track clicks, impressions, CTR, average position, top queries and demo conversion rate.

## Decision Rules

- If impressions rise but CTR drops: rewrite title/meta description first.
- If CTR rises but demo clicks do not: improve page CTA, proof and qualification clarity.
- If AI citation tests miss devlo: add concise answer blocks, citable stats and stronger third-party proof.
- If two regional pages cannibalize each other: narrow the H1, intro and internal links by city/region intent.
