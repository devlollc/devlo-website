import type { Metadata } from "next";

import { ColdEmailTemplatesMasterPage } from "@/components/pages/cold-email-templates-master-page";
import { getLocalizedColdEmailHub } from "@/lib/i18n/insights-helpers";

const content = getLocalizedColdEmailHub("fr");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: { canonical: "/insights/cold-email-templates" },
};

export default function ColdEmailTemplatesPage() {
  return <ColdEmailTemplatesMasterPage locale="fr" />;
}
