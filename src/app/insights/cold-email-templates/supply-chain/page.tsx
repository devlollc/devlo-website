import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ColdEmailSequenceMasterPage } from "@/components/pages/cold-email-sequence-master-page";
import { getLocalizedColdEmailSequence } from "@/lib/i18n/insights-helpers";

const slug = "supply-chain";
const content = getLocalizedColdEmailSequence(slug, "fr");

export const metadata: Metadata = {
  title: content?.metaTitle ?? "Séquence cold email B2B | devlo",
  description: content?.metaDescription ?? "Séquence cold email B2B avec exemples, métriques et méthode devlo.",
  alternates: { canonical: "/insights/cold-email-templates/supply-chain" },
};

export default function ColdEmailSequencePage() {
  if (!content) notFound();

  return <ColdEmailSequenceMasterPage slug={slug} locale="fr" />;
}
