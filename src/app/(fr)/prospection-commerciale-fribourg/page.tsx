import { createGeoPageMetadata, GeoPageJsonLd, GeoPageView } from "@/components/pages/geo-page-route";

const slug = "prospection-commerciale-fribourg";

export const metadata = createGeoPageMetadata(slug);

export default function ProspectionCommercialeFribourgPage() {
  return (
    <>
      <GeoPageJsonLd slug={slug} />
      <GeoPageView slug={slug} />
    </>
  );
}
