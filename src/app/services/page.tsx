import type { Metadata } from "next";

import { ServicesHubPage as ServicesHubView } from "@/components/pages/services-hub-page";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getLocalizedServicesContent } from "@/lib/i18n/services-content";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Services de prospection B2B : cold email, LinkedIn, calling",
    description:
      "devlo est une agence de prospection B2B basée en Suisse : génération de leads, cold email, LinkedIn outreach, cold calling, intent data et enrichissement Clay.",
    path: "/services",
  }),
  keywords: [
    "services prospection B2B",
    "agence outbound Suisse",
    "cold email LinkedIn calling",
    "intent data",
    "enrichissement Clay",
  ],
};

export default function ServicesHubRoutePage() {
  const content = getLocalizedServicesContent("fr");
  return <ServicesHubView cards={content.SERVICE_HUB_CARDS} copy={content.hubCopy} caseStudies={content.ALL_CASE_STUDIES} />;
}
