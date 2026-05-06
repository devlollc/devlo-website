import type { Metadata } from "next";

import { AgencyMasterPage } from "@/components/pages/agency-master-page";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { agencyContent } from "@/content/agency";

export const metadata: Metadata = buildPageMetadata({
  title: agencyContent.metaTitle.replace(/\s*—\s*devlo$/i, ""),
  description: agencyContent.metaDescription,
  path: "/agence",
});

export default function AgencePage() {
  return <AgencyMasterPage locale="fr" />;
}
