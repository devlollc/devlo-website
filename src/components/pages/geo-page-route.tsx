import { JsonLd } from "@/components/seo/json-ld";
import { GeoLandingPage } from "@/components/pages/geo-landing-page";
import { GEO_PAGES } from "@/content/geo-pages";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/schema-builders";
import { siteConfig } from "@/lib/site";

export function getGeoPageData(slug: string) {
  const data = GEO_PAGES[slug];
  if (!data) {
    throw new Error(`Unknown geo page: ${slug}`);
  }
  return data;
}

export function createGeoPageMetadata(slug: string) {
  const data = getGeoPageData(slug);
  return buildPageMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/${data.slug}`,
  });
}

export function GeoPageJsonLd({ slug }: { slug: string }) {
  const data = getGeoPageData(slug);
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.localBusiness.name,
    url: siteConfig.url,
    telephone: data.localBusiness.telephone,
    email: data.localBusiness.email,
    address: { "@type": "PostalAddress", ...data.localBusiness.address },
    areaServed: "CH",
  };

  return (
    <JsonLd
      schema={[
        buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: data.h1, path: `/${data.slug}` },
        ]),
        buildFaqPageSchema(data.faqs),
        localBusinessSchema,
      ]}
    />
  );
}

export function GeoPageView({ slug }: { slug: string }) {
  return <GeoLandingPage data={getGeoPageData(slug)} />;
}
