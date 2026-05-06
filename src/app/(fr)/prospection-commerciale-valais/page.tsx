import { createGeoPageMetadata, GeoPageJsonLd, GeoPageView } from "@/components/pages/geo-page-route";

const slug = "prospection-commerciale-valais";

export const metadata = createGeoPageMetadata(slug);

export default function ProspectionCommercialeValaisPage() {
  return (
    <>
      <GeoPageJsonLd slug={slug} />
      <GeoPageView slug={slug} />
    </>
  );
}
