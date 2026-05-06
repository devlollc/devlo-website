import Link from "next/link";

import { AuthorByline } from "@/components/shared/author-byline";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { WaveDivider } from "@/components/ui/wave-divider";
import { CTASection } from "@/components/shared/cta-section";
import { FAQSection } from "@/components/shared/faq-section";
import { InfiniteLogoRail } from "@/components/shared/logo-rail";
import { SummarySection } from "@/components/shared/summary-section";
import { TRUSTED_LOGOS_STRIP } from "@/content/service-brand-assets";
import { type GeoPageData } from "@/content/geo-pages";
import { getLocalizedCaseStudyBySlug } from "@/lib/i18n/case-studies-content";
import { getLocalizedGeoContent } from "@/lib/i18n/geo-content";
import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/schema-builders";
import { RichParagraph } from "@/lib/utils/rich-text";

const copyByLocale: Record<
  SupportedLocale,
  {
    home: string;
    presence: string;
    ctaConsultation: string;
    caseStudiesEyebrow: string;
    caseStudiesHeading: string;
    faqTitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
  }
> = {
  fr: {
    home: "Accueil",
    presence: "Présence",
    ctaConsultation: "Consultation gratuite",
    caseStudiesEyebrow: "Études de cas",
    caseStudiesHeading: "Résultats concrets sur ce marché",
    faqTitle: "Questions fréquentes",
    ctaTitle: "Prêt à développer votre pipeline commercial ?",
    ctaSubtitle: "Réservez un appel stratégique gratuit de 30 minutes avec notre équipe.",
  },
  en: {
    home: "Home",
    presence: "Presence",
    ctaConsultation: "Free consultation",
    caseStudiesEyebrow: "Case studies",
    caseStudiesHeading: "Concrete results in this market",
    faqTitle: "Frequently asked questions",
    ctaTitle: "Ready to grow your commercial pipeline?",
    ctaSubtitle: "Book a free 30-minute strategic call with our team.",
  },
  de: {
    home: "Startseite",
    presence: "Präsenz",
    ctaConsultation: "Kostenlose Beratung",
    caseStudiesEyebrow: "Fallstudien",
    caseStudiesHeading: "Konkrete Ergebnisse auf diesem Markt",
    faqTitle: "Häufig gestellte Fragen",
    ctaTitle: "Bereit, Ihre Vertriebspipeline auszubauen?",
    ctaSubtitle: "Buchen Sie ein kostenloses 30-minütiges Strategiegespräch mit unserem Team.",
  },
  nl: {
    home: "Home",
    presence: "Aanwezigheid",
    ctaConsultation: "Gratis consultatie",
    caseStudiesEyebrow: "Praktijkvoorbeelden",
    caseStudiesHeading: "Concrete resultaten op deze markt",
    faqTitle: "Veelgestelde vragen",
    ctaTitle: "Klaar om uw commerciële pipeline te laten groeien?",
    ctaSubtitle: "Boek een gratis strategiegesprek van 30 minuten met ons team.",
  },
};

const geoMarketTables: Record<
  SupportedLocale,
  {
    caption: string;
    headers: [string, string, string];
    rows: [string, string, string][];
  }
> = {
  fr: {
    caption: "Adaptations de prospection B2B par region suisse",
    headers: ["Region", "Adaptation necessaire", "Execution devlo"],
    rows: [
      ["Suisse romande", "Message direct, preuves locales et references francophones.", "Sequences FR avec cas clients suisses et relances multicanales."],
      ["Suisse alemanique", "Ton plus factuel, allemand natif et precision sur le ROI.", "Copies DE, ciblage DACH et qualification des decideurs."],
      ["Comptes nationaux", "Coordination entre langues, filiales et cycles de decision.", "Segmentation ICP par region, langue et signal d'achat."],
    ],
  },
  en: {
    caption: "B2B prospecting adaptations by Swiss region",
    headers: ["Region", "Required adaptation", "devlo execution"],
    rows: [
      ["French-speaking Switzerland", "Direct messaging, local proof, and French-language references.", "FR sequences with Swiss case studies and multichannel follow-ups."],
      ["German-speaking Switzerland", "More factual tone, native German, and clear ROI.", "DE copy, DACH targeting, and decision-maker qualification."],
      ["National accounts", "Coordination across languages, subsidiaries, and decision cycles.", "ICP segmentation by region, language, and buying signal."],
    ],
  },
  de: {
    caption: "B2B-Prospecting-Anpassungen nach Schweizer Region",
    headers: ["Region", "Noetige Anpassung", "devlo-Umsetzung"],
    rows: [
      ["Westschweiz", "Direkte Ansprache, lokale Belege und franzoesische Referenzen.", "FR-Sequenzen mit Schweizer Case Studies und Multichannel-Follow-ups."],
      ["Deutschschweiz", "Faktischer Ton, natives Deutsch und klare ROI-Argumente.", "DE-Copy, DACH-Targeting und Entscheiderqualifikation."],
      ["Nationale Accounts", "Koordination ueber Sprachen, Filialen und Entscheidungszyklen.", "ICP-Segmentierung nach Region, Sprache und Kaufsignal."],
    ],
  },
  nl: {
    caption: "B2B-prospectie-aanpassingen per Zwitserse regio",
    headers: ["Regio", "Nodige aanpassing", "devlo-uitvoering"],
    rows: [
      ["Franstalig Zwitserland", "Directe boodschap, lokaal bewijs en Franstalige referenties.", "FR-sequences met Zwitserse cases en multichannel follow-up."],
      ["Duitstalig Zwitserland", "Feitelijkere toon, native Duits en duidelijke ROI.", "DE-copy, DACH-targeting en beslisserkwalificatie."],
      ["Nationale accounts", "Coordinatie tussen talen, filialen en beslissingscycli.", "ICP-segmentatie per regio, taal en koopsignaal."],
    ],
  },
};

export function GeoLandingPage({ data, locale = "fr" }: { data: GeoPageData; locale?: SupportedLocale }) {
  const copy = copyByLocale[locale];
  const marketTable = geoMarketTables[locale];
  const localizedContent = getLocalizedGeoContent(data.slug, locale);
  const h1 = localizedContent?.h1 ?? data.h1;
  const intro = localizedContent?.intro ?? data.intro;
  const faqs = localizedContent?.faqs ?? data.faqs;
  const editorialTitle = localizedContent?.editorialTitle;
  const editorialParagraphs = localizedContent?.editorialParagraphs ?? [];
  const summaryTitle = localizedContent?.summaryTitle;
  const summaryPoints = localizedContent?.summaryPoints ?? [];
  const datePublished = localizedContent?.datePublished ?? "2024-06-15";
  const dateModified = localizedContent?.dateModified ?? "2026-03-01";
  const localizedCaseStudies = getLocalizedCaseStudyBySlug(locale);

  const studies = data.caseStudySlugs
    .map((slug) => localizedCaseStudies[slug])
    .filter(Boolean);

  const logos = data.excludeLogos
    ? TRUSTED_LOGOS_STRIP.filter((l) => !data.excludeLogos!.includes(l.alt))
    : TRUSTED_LOGOS_STRIP;

  const homePath = resolvePathForLocale("/", locale).path;
  const switzerlandPath = resolvePathForLocale("/prospection-commerciale-suisse", locale).path;
  const geoPath = resolvePathForLocale(`/${data.slug}`, locale).path;
  const consultationPath = resolvePathForLocale("/consultation", locale).path;

  const breadcrumbItems =
    data.country === "ch"
      ? [
          { name: copy.home, path: homePath },
          { name: h1, path: geoPath },
        ]
      : [
          { name: copy.home, path: homePath },
          { name: copy.presence, path: switzerlandPath },
          { name: h1, path: geoPath },
        ];

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildFaqPageSchema(faqs),
          buildArticleSchema({
            headline: h1,
            description: intro[0] ?? h1,
            path: geoPath,
            datePublished,
            dateModified,
            author: "Charles Perret",
            authorUrl: "https://www.linkedin.com/in/charlesperret/",
          }),
        ]}
      />
      <section className="bg-gradient-to-b from-[#074f74] to-[#0a3a54] pt-2 pb-16 text-white md:pb-24">
        <Breadcrumb items={breadcrumbItems} variant="dark" />
        <div className="mx-auto w-full max-w-screen-xl px-6 pt-8 text-center lg:px-10">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {h1}
          </h1>
          <div className="mt-4 flex justify-center">
            <AuthorByline datePublished={datePublished} dateModified={dateModified} locale={locale} />
          </div>
          <div className="mx-auto mt-6 max-w-3xl space-y-4">
            {intro.map((p, i) => (
              <p key={i} className="text-base leading-7 text-white/85 md:text-lg">
                {p}
              </p>
            ))}
          </div>
          <Link
            href={consultationPath}
            className="mt-8 inline-flex h-12 items-center rounded-lg bg-white px-6 text-sm font-semibold uppercase tracking-[0.1em] text-[#074f74] transition hover:bg-white/90"
          >
            {copy.ctaConsultation}
          </Link>
        </div>
      </section>

      <WaveDivider variant="layered-bottom" fromBg="#0a3a54" toBg="#FFFFFF" />

      {data.country === "ch" && (
        <section className="bg-white py-12">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white">
              <table className="min-w-[720px] w-full border-collapse text-left text-sm">
                <caption className="sr-only">{marketTable.caption}</caption>
                <thead className="bg-neutral-50 text-xs font-semibold uppercase tracking-[0.08em] text-[#074f74]">
                  <tr>
                    {marketTable.headers.map((header) => (
                      <th key={header} scope="col" className="px-5 py-3">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  {marketTable.rows.map(([region, adaptation, execution]) => (
                    <tr key={region}>
                      <td className="px-5 py-4 font-semibold text-[#153a54]">{region}</td>
                      <td className="px-5 py-4">{adaptation}</td>
                      <td className="px-5 py-4">{execution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {editorialTitle && (
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-10">
              <h2 className="text-2xl font-extrabold leading-[1.2] tracking-tight text-[#153a54] md:text-3xl">
                {editorialTitle}
              </h2>
              {editorialParagraphs.length > 0 && (
                <div className="mt-5 space-y-4 text-neutral-600">
                  {editorialParagraphs.map((p, i) => (
                    <RichParagraph key={i} className="text-sm leading-7 md:text-base md:leading-8">
                      {p}
                    </RichParagraph>
                  ))}
                </div>
              )}
              {summaryPoints.length > 0 && (
                <div className="mt-6">
                  <SummarySection
                    title={summaryTitle ?? (locale === "fr" ? "En résumé" : locale === "de" ? "Zusammenfassung" : locale === "nl" ? "Samenvatting" : "Key takeaways")}
                    points={summaryPoints}
                    locale={locale}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[8vw] bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[8vw] bg-gradient-to-l from-white to-transparent" />
            <InfiniteLogoRail logos={logos} duration="slow" pauseOnHover />
          </div>
        </div>
      </section>

      {studies.length > 0 && (
        <section className="bg-[#f7f8fc] py-14 md:py-18">
          <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--primary)]">
              {copy.caseStudiesEyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#153a54] md:text-3xl">
              {copy.caseStudiesHeading}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {studies.map((study) => (
                <Link
                  key={study.slug}
                  href={resolvePathForLocale(`/etudes-de-cas/${study.slug}`, locale).path}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft transition hover:border-[var(--primary)]/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4d6678]">
                    {study.client}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-[#153a54]">
                    {study.heroStats[0]
                      ? `${study.heroStats[0].value} ${study.heroStats[0].label}`
                      : study.summary.slice(0, 80)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {study.sector.length > 100 ? `${study.sector.slice(0, 100)}…` : study.sector}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection
        title={copy.faqTitle}
        items={faqs}
      />

      <CTASection
        locale={locale}
        title={copy.ctaTitle}
        subtitle={copy.ctaSubtitle}
      />
    </>
  );
}
