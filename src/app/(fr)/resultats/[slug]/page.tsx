import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateMetadata as generateEtudesCaseStudyMetadata } from "@/app/(fr)/etudes-de-cas/[slug]/page";
import { CaseStudyMasterPage } from "@/components/pages/case-study-master-page";
import { caseStudiesCards } from "@/content/masterfile.fr";
import { caseStudies } from "@/lib/case-studies";
import { caseStudySlugRedirects, resolveCaseStudyCanonicalSlug } from "@/lib/case-study-slug-redirects";
import { buildLanguageAlternates, toAbsoluteUrl } from "@/lib/seo/metadata";

type Params = {
  params: Promise<{ slug: string }>;
  searchParams?: Record<string, string | string[] | undefined>;
};

export function generateStaticParams() {
  const slugs = new Set<string>();
  for (const slug of Object.keys(caseStudySlugRedirects)) slugs.add(slug);
  for (const study of caseStudiesCards) slugs.add(study.slug);
  for (const study of caseStudies) slugs.add(study.slug);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = resolveCaseStudyCanonicalSlug(slug);
  const baseMetadata = await generateEtudesCaseStudyMetadata({ params: Promise.resolve({ slug: canonicalSlug }) });
  const canonicalPath = `/etudes-de-cas/${canonicalSlug}`;
  const alternates = buildLanguageAlternates(canonicalPath);

  return {
    ...baseMetadata,
    alternates: {
      canonical: canonicalPath,
      languages: alternates,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      url: toAbsoluteUrl(canonicalPath),
    },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const canonicalSlug = resolveCaseStudyCanonicalSlug(slug);
  const exists = caseStudiesCards.some((study) => study.slug === canonicalSlug) || caseStudies.some((study) => study.slug === canonicalSlug);

  if (!exists) {
    notFound();
  }

  return <CaseStudyMasterPage slug={canonicalSlug} />;
}
