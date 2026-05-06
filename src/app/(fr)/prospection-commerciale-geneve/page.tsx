import { createGeoPageMetadata, GeoPageJsonLd, GeoPageView } from "@/components/pages/geo-page-route";

const slug = "prospection-commerciale-geneve";

export const metadata = createGeoPageMetadata(slug);

export default function Page() {
  return (
    <>
      <GeoPageJsonLd slug={slug} />
      <GeoPageView slug={slug} />
    </>
  );
}
