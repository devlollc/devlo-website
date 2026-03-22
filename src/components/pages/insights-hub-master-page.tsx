import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { WaveDivider } from "@/components/ui/wave-divider";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema } from "@/lib/seo/schema-builders";
import type { SupportedLocale } from "@/lib/i18n/slug-map";
import { getLocalizedInsightsHub } from "@/lib/i18n/insights-helpers";

const LOCALE_INSIGHTS_HREFS: Record<SupportedLocale, string> = {
  fr: "/insights/buying-signals",
  en: "/en/insights/buying-signals",
  de: "/de/insights/buying-signals",
  nl: "/nl/insights/buying-signals",
};

const LOCALE_CONSULTATION_HREFS: Record<SupportedLocale, string> = {
  fr: "/consultation",
  en: "/en/consultation",
  de: "/de/consultation",
  nl: "/nl/consultation",
};

const LOCALE_SERVICES_HREFS: Record<SupportedLocale, string> = {
  fr: "/services/cold-email",
  en: "/en/services/cold-email",
  de: "/de/services/cold-email",
  nl: "/nl/services/cold-email",
};

export function InsightsHubMasterPage({ locale }: { locale: SupportedLocale }) {
  const content = getLocalizedInsightsHub(locale);
  const prefix = locale === "fr" ? "" : `/${locale}`;

  const breadcrumbItems = [
    { name: content.breadcrumbs.home, path: prefix },
    { name: content.breadcrumbs.insights, path: `${prefix}/insights` },
  ];

  const insights = [
    {
      title: content.cards[0].title,
      description: content.cards[0].description,
      href: LOCALE_INSIGHTS_HREFS[locale],
      tag: content.cards[0].tag,
      date: content.cards[0].date,
    },
    {
      title: content.cards[1].title,
      description: content.cards[1].description,
      href: `${prefix}/insights/dictation-clean`,
      tag: content.cards[1].tag,
      date: content.cards[1].date,
    },
  ];

  return (
    <>
      <JsonLd schema={[buildBreadcrumbSchema(breadcrumbItems)]} />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#074f74] to-[#0a3a54] pt-2 text-white">
          <Breadcrumb items={breadcrumbItems} variant="dark" />

          <div className="mx-auto w-full max-w-3xl px-6 pb-14 pt-10 text-center lg:px-10">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">
              {content.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-relaxed text-white/85">
              {content.subtitle}
            </p>
          </div>
        </section>

        <WaveDivider variant="layered-bottom" fromBg="#0a3a54" toBg="#FFFFFF" />

        {/* Insight cards */}
        <section className="mx-auto w-full max-w-4xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {insights.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-[#e0e4e6] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#074f74] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    {item.tag}
                  </span>
                  <span className="text-xs text-[#666d70]">{item.date}</span>
                </div>
                <h2 className="mt-4 text-lg font-bold text-[#0d1a21] group-hover:text-[#074f74] transition-colors">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#666d70]">
                  {item.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-[#074f74]">
                  {content.readLink}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <WaveDivider variant="layered-bottom" fromBg="#FFFFFF" toBg="#074f74" />

        <section
          style={{
            background: "linear-gradient(165deg, #074f74 0%, #0a3a54 100%)",
          }}
        >
          <div className="mx-auto max-w-2xl space-y-8 px-6 py-20 text-center md:py-28">
            <h2
              className="font-black text-white"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                lineHeight: 1.1,
              }}
            >
              {content.cta.heading}
            </h2>
            <p className="text-base text-white/80">
              {content.cta.body}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={LOCALE_CONSULTATION_HREFS[locale]}
                className="rounded-lg px-7 py-3 text-sm font-bold text-[#074f74] transition-all duration-150 active:scale-[0.97]"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                }}
              >
                {content.cta.primaryButton}
              </Link>
              <Link
                href={LOCALE_SERVICES_HREFS[locale]}
                className="rounded-lg border px-7 py-3 text-sm font-bold text-white transition-all duration-150 active:scale-[0.97]"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                {content.cta.secondaryButton}
              </Link>
            </div>
          </div>
        </section>

        <p className="py-8 text-center text-xs" style={{ color: "#666d70" }}>
          {content.lastUpdated}
        </p>
      </main>
    </>
  );
}
