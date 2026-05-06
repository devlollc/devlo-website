import { createGeoPageMetadata, GeoPageJsonLd, GeoPageView } from "@/components/pages/geo-page-route";

const slug = "prospection-commerciale-berne";

export const metadata = createGeoPageMetadata(slug);

export default function ProspectionCommercialeBernePage() {
  return (
    <>
      <GeoPageJsonLd slug={slug} />
      <GeoPageView slug={slug} />
    </>
  );
}
