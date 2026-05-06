import type { Metadata } from "next";

import { ColdEmailTemplatesMasterPage } from "@/components/pages/cold-email-templates-master-page";
import { getLocalizedColdEmailHub } from "@/lib/i18n/insights-helpers";
import { buildPageMetadata, stripDevloSuffix } from "@/lib/seo/metadata";

const content = getLocalizedColdEmailHub("fr");

export const metadata: Metadata = buildPageMetadata({
  title: stripDevloSuffix(content.metaTitle),
  description: content.metaDescription,
  path: "/insights/cold-email-templates",
  type: "article",
  datePublished: "2026-03-23",
  dateModified: "2026-05-03",
  author: "Charles Perret",
});

export default function ColdEmailTemplatesPage() {
  return <ColdEmailTemplatesMasterPage locale="fr" />;
}
