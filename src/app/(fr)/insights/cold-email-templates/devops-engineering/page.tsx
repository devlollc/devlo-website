import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ColdEmailSequenceMasterPage } from "@/components/pages/cold-email-sequence-master-page";
import { getLocalizedColdEmailSequence } from "@/lib/i18n/insights-helpers";
import { buildPageMetadata, stripDevloSuffix } from "@/lib/seo/metadata";

const slug = "devops-engineering";
const content = getLocalizedColdEmailSequence(slug, "fr");

export const metadata: Metadata = buildPageMetadata({
  title: stripDevloSuffix(content?.metaTitle ?? "Séquence cold email B2B"),
  description: content?.metaDescription ?? "Séquence cold email B2B avec exemples, métriques et méthode devlo.",
  path: `/insights/cold-email-templates/${slug}`,
  type: "article",
  datePublished: "2026-03-23",
  dateModified: "2026-05-03",
  author: "Charles Perret",
});

export default function ColdEmailSequencePage() {
  if (!content) notFound();

  return <ColdEmailSequenceMasterPage slug={slug} locale="fr" />;
}
