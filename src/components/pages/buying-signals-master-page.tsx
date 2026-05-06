import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { WaveDivider } from "@/components/ui/wave-divider";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildFaqPageSchema,
} from "@/lib/seo/schema-builders";
import type { SupportedLocale } from "@/lib/i18n/slug-map";
import {
  getLocalizedBuyingSignals,
  getLocalizedCategories,
} from "@/lib/i18n/insights-helpers";

import { AnimatedCounter } from "@/app/(fr)/insights/buying-signals/animated-counter";
import { SignalBrowser } from "@/app/(fr)/insights/buying-signals/signal-browser";

const LOCALE_CONSULTATION_HREFS: Record<SupportedLocale, string> = {
  fr: "/consultation",
  en: "/en/consultation",
  de: "/de/beratung",
  nl: "/nl/adviesgesprek",
};

const LOCALE_SERVICES_HREFS: Record<SupportedLocale, string> = {
  fr: "/services/cold-email",
  en: "/en/services/cold-email",
  de: "/de/services/cold-email",
  nl: "/nl/services/cold-email",
};

const signalDecisionTables: Record<
  SupportedLocale,
  {
    caption: string;
    headers: [string, string, string];
    rows: [string, string, string][];
  }
> = {
  fr: {
    caption: "Signaux d'achat B2B prioritaires et actions outbound recommandees",
    headers: ["Signal", "Ce que cela indique", "Action outbound"],
    rows: [
      ["Recrutement", "Budget, croissance ou tension operationnelle visible.", "Contacter le dirigeant ou le manager avant saturation de l'equipe."],
      ["Changement de direction", "Nouvelle priorite commerciale, IT, finance ou RH.", "Adapter le message aux 90 premiers jours du nouveau responsable."],
      ["Intent data", "Recherche active autour d'une categorie, d'un outil ou d'un probleme.", "Prioriser le compte et synchroniser email, LinkedIn et appel."],
    ],
  },
  en: {
    caption: "Priority B2B buying signals and recommended outbound actions",
    headers: ["Signal", "What it means", "Outbound action"],
    rows: [
      ["Hiring", "Visible budget, growth, or operational pressure.", "Reach the founder or manager before the team is overloaded."],
      ["Leadership change", "A new commercial, IT, finance, or HR priority.", "Adapt the message to the new leader's first 90 days."],
      ["Intent data", "Active research around a category, tool, or problem.", "Prioritize the account and coordinate email, LinkedIn, and calls."],
    ],
  },
  de: {
    caption: "Prioritaere B2B-Kaufsignale und empfohlene Outbound-Aktionen",
    headers: ["Signal", "Was es zeigt", "Outbound-Aktion"],
    rows: [
      ["Rekrutierung", "Sichtbares Budget, Wachstum oder operativer Druck.", "Geschaeftsfuehrung oder Manager vor der Ueberlastung des Teams kontaktieren."],
      ["Fuehrungswechsel", "Neue Prioritaet in Vertrieb, IT, Finanzen oder HR.", "Nachricht auf die ersten 90 Tage der neuen Rolle ausrichten."],
      ["Intent Data", "Aktive Recherche zu Kategorie, Tool oder Problem.", "Account priorisieren und E-Mail, LinkedIn und Anruf synchronisieren."],
    ],
  },
  nl: {
    caption: "Prioritaire B2B-koopsignalen en aanbevolen outbound-acties",
    headers: ["Signaal", "Wat het aangeeft", "Outbound-actie"],
    rows: [
      ["Werving", "Zichtbaar budget, groei of operationele druk.", "Benader de oprichter of manager voordat het team overbelast raakt."],
      ["Leiderschapswissel", "Nieuwe prioriteit in sales, IT, finance of HR.", "Stem de boodschap af op de eerste 90 dagen van de nieuwe verantwoordelijke."],
      ["Intent data", "Actief onderzoek rond een categorie, tool of probleem.", "Prioriteer het account en combineer e-mail, LinkedIn en bellen."],
    ],
  },
};

export function BuyingSignalsMasterPage({ locale }: { locale: SupportedLocale }) {
  const content = getLocalizedBuyingSignals(locale);
  const categories = getLocalizedCategories(locale);
  const prefix = locale === "fr" ? "" : `/${locale}`;
  const signalDecisionTable = signalDecisionTables[locale];

  const totalSignals = categories.reduce((sum, cat) => sum + cat.count, 0);

  const breadcrumbItems = [
    { name: content.breadcrumbs.home, path: prefix },
    { name: content.breadcrumbs.insights, path: `${prefix}/insights` },
    { name: content.breadcrumbs.buyingSignals, path: `${prefix}/insights/buying-signals` },
  ];

  const faqItems = content.faq;

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline: content.hero.title,
            description: content.metaDescription,
            path: `${prefix}/insights/buying-signals`,
            imagePath: "/images/CharlesPerretProfilePicture2025.webp",
            datePublished: "2026-03-22",
            dateModified: "2026-03-22",
            author: "Charles Perret",
            authorUrl: "https://www.linkedin.com/in/charlesperret-devlo/",
          }),
          buildFaqPageSchema(faqItems),
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#074f74] to-[#0a3a54] pt-2 text-white">
          <Breadcrumb items={breadcrumbItems} variant="dark" />

          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 pb-14 pt-10 text-center">
            <AnimatedCounter target={totalSignals} />

            <div className="space-y-4">
              <h1
                className="font-black tracking-tight text-white"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  lineHeight: 1.1,
                  textWrap: "balance",
                } as React.CSSProperties}
              >
                {content.hero.title}
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                {content.hero.subtitle}
              </p>
            </div>

            {/* Author card */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/CharlesPerretProfilePicture2025.webp"
                alt="Charles Perret"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">
                  Charles Perret
                </p>
                <p className="text-xs text-white/60">
                  {content.hero.authorRole}{" "}
                  <a
                    href="https://devlo.ch"
                    className="underline transition-colors hover:text-white"
                  >
                    devlo.ch
                  </a>{" "}
                  &middot; {content.hero.dateLabel}
                </p>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider variant="layered-bottom" fromBg="#0a3a54" toBg="#FFFFFF" />

        <section className="mx-auto w-full max-w-5xl px-6 py-12">
          <div className="overflow-x-auto rounded-xl border border-[#e0e4e6] bg-white">
            <table className="min-w-[720px] w-full border-collapse text-left text-sm">
              <caption className="sr-only">{signalDecisionTable.caption}</caption>
              <thead className="bg-[#F7F8FC] text-xs font-semibold uppercase tracking-[0.08em] text-[#074f74]">
                <tr>
                  {signalDecisionTable.headers.map((header) => (
                    <th key={header} scope="col" className="px-5 py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e0e4e6] text-[#334155]">
                {signalDecisionTable.rows.map(([signal, meaning, action]) => (
                  <tr key={signal}>
                    <td className="px-5 py-4 font-semibold text-[#0D0D0D]">{signal}</td>
                    <td className="px-5 py-4">{meaning}</td>
                    <td className="px-5 py-4">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mx-auto w-full max-w-3xl px-6 pb-12">
          <div className="rounded-xl border border-[#e0e4e6] bg-[#F7F8FC] p-8 text-center">
            <h3 className="text-xl font-semibold text-[#0D0D0D]">
              {content.newsletter.title}
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-[#4A4A4A]">
              {content.newsletter.subtitle}
            </p>
            <form
              action="/api/newsletter"
              method="POST"
              className="mx-auto mt-6 flex max-w-md gap-2"
            >
              <input
                type="email"
                name="email"
                required
                placeholder={content.newsletter.placeholder}
                className="flex-1 rounded-md border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-[#8C8C8C] focus:border-[#074f74] focus:outline-none focus:ring-1 focus:ring-[#074f74]"
              />
              <button
                type="submit"
                className="rounded-md bg-[#074f74] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a3a54]"
              >
                {content.newsletter.button}
              </button>
            </form>
          </div>
        </section>

        {/* Signal Browser */}
        <SignalBrowser
          categories={categories}
          uiLabels={{
            searchPlaceholder: content.searchPlaceholder,
            allTab: content.allTab,
            resultsCounter: content.resultsCounter,
            resultsSingular: content.resultsSingular,
            intensityLabels: content.intensityLabels,
            categoryTooltips: content.categoryTooltips,
          }}
        />

        {/* Email Framework */}
        <section style={{ background: "hsl(200 25% 97%)" }}>
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
            <div className="mb-14 text-center">
              <h2
                className="font-black tracking-tight"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.15,
                  textWrap: "balance",
                  color: "#0d1a21",
                } as React.CSSProperties}
              >
                {content.emailFramework.title}
              </h2>
              <p
                className="mx-auto mt-4 max-w-xl text-sm leading-relaxed"
                style={{ color: "#666d70" }}
              >
                {content.emailFramework.subtitle}
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute bottom-0 left-6 top-0 hidden w-px sm:block md:left-8"
                style={{
                  background:
                    "linear-gradient(180deg, #e0e4e6, rgba(7,79,116,0.3), #e0e4e6)",
                }}
                aria-hidden="true"
              />

              <div className="space-y-6">
                {content.emailFramework.steps.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-5 sm:gap-6"
                  >
                    <div
                      className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-black text-lg text-white transition-transform duration-200 group-hover:scale-105 md:h-16 md:w-16 md:text-xl"
                      style={{
                        background: "#074f74",
                        boxShadow: "0 4px 12px rgba(7,79,116,0.25)",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div className="pt-1 md:pt-3">
                      <p
                        className="text-base font-bold md:text-lg"
                        style={{ color: "#0d1a21" }}
                      >
                        {item.step}
                      </p>
                      <p
                        className="mt-1 text-sm leading-relaxed"
                        style={{ color: "#666d70" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h2
            className="mb-12 text-center font-black tracking-tight"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              lineHeight: 1.15,
              textWrap: "balance",
              color: "#0d1a21",
            } as React.CSSProperties}
          >
            {content.faqSectionTitle}
          </h2>

          <div
            className="overflow-hidden rounded-xl border bg-white p-2 md:p-4"
            style={{
              borderColor: "#e0e4e6",
              boxShadow: "0 1px 3px hsl(200 20% 80% / 0.3)",
            }}
          >
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group border-b last:border-b-0"
                style={{ borderColor: "#e0e4e6" }}
              >
                <summary className="flex cursor-pointer select-none list-none items-center justify-between py-5 [&::-webkit-details-marker]:hidden">
                  <h3
                    className="pr-4 text-sm font-semibold md:text-base"
                    style={{ color: "#0d1a21" }}
                  >
                    {item.question}
                  </h3>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-[#666d70] transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="pb-5 pr-8">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#666d70" }}
                  >
                    {item.answer}
                  </p>
                </div>
              </details>
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
                textWrap: "balance",
              } as React.CSSProperties}
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

      {/* Bottom newsletter */}
      <section className="mx-auto w-full max-w-3xl px-6 py-12">
        <div className="rounded-xl border border-[#e0e4e6] bg-[#F7F8FC] p-8 text-center">
          <h3 className="text-xl font-semibold text-[#0D0D0D]">
            {content.newsletter.title}
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#4A4A4A]">
            {content.newsletter.subtitle}
          </p>
          <form
            action="/api/newsletter"
            method="POST"
            className="mx-auto mt-6 flex max-w-md gap-2"
          >
            <input
              type="email"
              name="email"
              required
              placeholder={content.newsletter.placeholder}
              className="flex-1 rounded-md border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-[#8C8C8C] focus:border-[#074f74] focus:outline-none focus:ring-1 focus:ring-[#074f74]"
            />
            <button
              type="submit"
              className="rounded-md bg-[#074f74] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a3a54]"
            >
              {content.newsletter.button}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
