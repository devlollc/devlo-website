import type { Metadata } from "next";

import { BuyingSignalsMasterPage } from "@/components/pages/buying-signals-master-page";
import { getLocalizedBuyingSignals } from "@/lib/i18n/insights-helpers";
import { buildPageMetadata } from "@/lib/seo/metadata";

const content = getLocalizedBuyingSignals("fr");

export const metadata: Metadata = buildPageMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: "/insights/buying-signals",
  type: "article",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  author: "Charles Perret",
});

export default function BuyingSignalsPage() {
  return <BuyingSignalsMasterPage locale="fr" />;
}
