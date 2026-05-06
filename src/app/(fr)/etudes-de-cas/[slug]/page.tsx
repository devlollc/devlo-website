import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { CaseStudyMasterPage } from "@/components/pages/case-study-master-page";
import { caseStudiesCards, caseStudiesSeo } from "@/content/masterfile.fr";
import { resolveCaseStudyCanonicalSlug } from "@/lib/case-study-slug-redirects";
import { caseStudies } from "@/lib/case-studies";
import {
  buildPageMetadata,
  getHadoSeoMetadataOverride,
  resolveOgImagePath,
  stripDevloSuffix,
} from "@/lib/seo/metadata";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/seo/schema-builders";

type Params = {
  params: Promise<{ slug: string }>;
};

function normalizeDescription(description: string, fallback: string): string {
  const normalized = description.replace(/\s+/g, " ").trim();
  if (normalized.length >= 120 && normalized.length <= 160) return normalized;
  if (normalized.length > 160) return `${normalized.slice(0, 157).trimEnd()}...`;

  const combined = `${normalized} ${fallback}`.replace(/\s+/g, " ").trim();
  if (combined.length <= 160) return combined;
  return `${combined.slice(0, 157).trimEnd()}...`;
}

function buildCaseStudySeoTitle(client: string): string {
  const base = `Étude de cas ${client}: résultats prospection B2B`;
  if (base.length <= 65) return base;
  return `Étude de cas ${client}: résultats B2B`;
}

export function generateStaticParams() {
  const slugs = new Set<string>();
  for (const study of caseStudiesCards) slugs.add(study.slug);
  for (const study of caseStudies) slugs.add(study.slug);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = resolveCaseStudyCanonicalSlug(slug);
  const canonicalPath = `/etudes-de-cas/${canonicalSlug}`;
  const cardStudy = caseStudiesCards.find((item) => item.slug === slug) ?? caseStudiesCards.find((item) => item.slug === canonicalSlug);
  const detailedStudy = caseStudies.find((item) => item.slug === slug) ?? caseStudies.find((item) => item.slug === canonicalSlug);
  const override = getHadoSeoMetadataOverride(canonicalPath);

  if (override) {
    return buildPageMetadata({
      title: stripDevloSuffix(override.title),
      description: override.description,
      path: canonicalPath,
      type: "article",
      imagePath: override.ogImage,
    });
  }

  const title =
    buildCaseStudySeoTitle(
      cardStudy?.client ?? detailedStudy?.client ?? "devlo",
    );
  const descriptionSource =
    detailedStudy?.summary ??
    (cardStudy
      ? `${cardStudy.client} — ${cardStudy.sector}. ${cardStudy.metrics.slice(0, 3).join(" · ")}.`
      : caseStudiesSeo.description);
  const descriptionFallback = cardStudy
    ? `Découvrez comment devlo a généré des rendez-vous qualifiés pour ${cardStudy.client}.`
    : "Découvrez comment devlo génère des rendez-vous qualifiés en prospection B2B.";
  const description = normalizeDescription(descriptionSource, descriptionFallback);
  const imagePath = resolveOgImagePath(cardStudy?.banner ?? detailedStudy?.heroImageUrl);

  return buildPageMetadata({
    title,
    description,
    path: canonicalPath,
    type: "article",
    imagePath,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const canonicalSlug = resolveCaseStudyCanonicalSlug(slug);
  const cardStudy = caseStudiesCards.find((item) => item.slug === slug) ?? caseStudiesCards.find((item) => item.slug === canonicalSlug);
  const detailedStudy = caseStudies.find((item) => item.slug === slug) ?? caseStudies.find((item) => item.slug === canonicalSlug);
  const breadcrumbLabel = cardStudy?.title ?? detailedStudy?.title ?? "Étude de cas";

  const articleSchema = buildArticleSchema({
    headline: breadcrumbLabel,
    description:
      detailedStudy?.summary ??
      cardStudy?.title ??
      "Étude de cas prospection B2B par devlo",
    path: `/etudes-de-cas/${canonicalSlug}`,
    imagePath: detailedStudy?.heroImageUrl ?? cardStudy?.banner,
  });

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Études de cas", path: "/etudes-de-cas" },
            { name: breadcrumbLabel, path: `/etudes-de-cas/${canonicalSlug}` },
          ]),
          articleSchema,
        ]}
      />
      <CaseStudyMasterPage slug={slug} />
    </>
  );
}
