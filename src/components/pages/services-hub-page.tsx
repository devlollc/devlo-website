import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { InfiniteLogoRail } from "@/components/shared/logo-rail";
import { ServicesSectionHeader, ServicesSurfaceCard } from "@/components/services/services-ui";
import { CaseStudyGrid } from "@/components/shared/case-study-grid";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buttonClassName } from "@/components/ui/button";
import { TRUSTED_LOGOS_STRIP } from "@/content/service-brand-assets";
import type { CaseStudyCard, ServiceHubCard } from "@/content/services";
import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";
import { toAbsoluteUrl } from "@/lib/seo/metadata";

type ServicesHubCopy = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  ctaDiscover: string;
  ctaConsultation: string;
  ctaResults: string;
  trustedTitle: string;
  trustedDescription: string;
};

type ServicesHubPageProps = {
  cards: ServiceHubCard[];
  copy: ServicesHubCopy;
  caseStudies: CaseStudyCard[];
  locale?: SupportedLocale;
};

const breadcrumbLabelsByLocale: Record<SupportedLocale, { home: string; services: string }> = {
  fr: { home: "Accueil", services: "Services" },
  en: { home: "Home", services: "Services" },
  de: { home: "Startseite", services: "Leistungen" },
  nl: { home: "Home", services: "Diensten" },
};

export function ServicesHubPage({ cards, copy, caseStudies, locale = "fr" }: ServicesHubPageProps) {
  const labels = breadcrumbLabelsByLocale[locale];
  const toLocalePath = (frPath: string) => resolvePathForLocale(frPath, locale).path;
  const servicesHubPath = toLocalePath("/services");
  const serviceHubSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.title,
    description: copy.description,
    provider: {
      "@type": "Organization",
      name: "devlo",
      url: "https://devlo.ch",
    },
    areaServed: ["CH", "BE", "FR", "DE", "AT", "NL"],
    url: toAbsoluteUrl(servicesHubPath),
  };

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: labels.home, path: toLocalePath("/") },
            { name: labels.services, path: servicesHubPath },
          ]),
          serviceHubSchema,
        ]}
      />

      <main>
        <section className="relative overflow-hidden bg-white pt-12 md:pt-14">
          <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-devlo-100/45 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-16 h-56 w-56 rounded-full bg-devlo-100/35 blur-3xl" />

          <SectionWrapper background="white" className="relative !bg-transparent !pb-4 !pt-0 md:!pb-5">
            <div className="max-w-4xl">
              <ServicesSectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-500">{copy.intro}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#nos-services" className={buttonClassName("secondary", "px-7 py-3.5 text-sm")}>
                  {copy.ctaDiscover}
                </a>
                <Link href={toLocalePath("/consultation")} className={buttonClassName("primary", "px-7 py-3.5 text-sm")}>
                  {copy.ctaConsultation}
                </Link>
                <Link href={toLocalePath("/etudes-de-cas")} className={buttonClassName("secondary", "px-7 py-3.5 text-sm")}>
                  {copy.ctaResults}
                </Link>
              </div>
            </div>

            <div className="relative my-[2cm] -mx-6 overflow-hidden md:-mx-12 lg:-mx-16">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[8vw] bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[8vw] bg-gradient-to-l from-white to-transparent" />
              <InfiniteLogoRail logos={TRUSTED_LOGOS_STRIP} duration="slow" pauseOnHover />
            </div>
          </SectionWrapper>
        </section>

        <SectionWrapper id="nos-services" background="white" className="!pt-0">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((service) => (
              <Link key={service.href} href={toLocalePath(service.href)} className="group">
                <ServicesSurfaceCard className="h-full p-6 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-devlo-600/35 group-hover:shadow-panel">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl" aria-hidden>
                      {service.icon}
                    </span>
                    <span className="text-sm font-semibold text-devlo-700 transition group-hover:translate-x-0.5">→</span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold leading-tight text-devlo-900">{service.title}</h2>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-devlo-700">{service.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{service.description}</p>

                  <div className="mt-5 border-t border-neutral-100 pt-4">
                    <p className="text-xs font-semibold text-devlo-700">✓ {service.kpi}</p>
                  </div>
                </ServicesSurfaceCard>
              </Link>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper background="white" className="border-t border-neutral-200">
          <div className="space-y-8">
            <ServicesSectionHeader title={copy.trustedTitle} description={copy.trustedDescription} />

            <CaseStudyGrid caseStudies={caseStudies} locale={locale} />
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}
