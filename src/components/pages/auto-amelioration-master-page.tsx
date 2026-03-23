import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Globe,
  Layers,
  MessageSquare,
  RefreshCw,
  Target,
  Users,
} from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { WaveDivider } from "@/components/ui/wave-divider";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildHowToSchema,
} from "@/lib/seo/schema-builders";
import { getLocalizedAutoAmelioration } from "@/lib/i18n/insights-helpers";
import type { SupportedLocale } from "@/lib/i18n/slug-map";

const AXIS_ICONS = [Target, MessageSquare, Layers, Clock, Globe] as const;

export function AutoAmeliorationMasterPage({ locale }: { locale: SupportedLocale }) {
  const c = getLocalizedAutoAmelioration(locale);
  const prefix = locale === "fr" ? "" : `/${locale}`;

  const breadcrumbItems = [
    { name: c.breadcrumbs.home, path: `${prefix}/` },
    { name: c.breadcrumbs.insights, path: `${prefix}/insights` },
    { name: c.breadcrumbs.page, path: `${prefix}/insights/auto-amelioration-outbound` },
  ];

  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline: c.hero.h1,
            description: c.metaDescription,
            path: `${prefix}/insights/auto-amelioration-outbound`,
            imagePath: "/images/CharlesPerretProfilePicture2025.webp",
            datePublished: "2026-03-23",
            dateModified: "2026-03-23",
            author: "Charles Perret",
            authorUrl: "https://www.linkedin.com/in/charlesperret-devlo/",
          }),
          buildHowToSchema(c.hero.h1, c.howToSteps),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#074f74] to-[#0a3a54] pt-2 text-white">
        <Breadcrumb items={breadcrumbItems} variant="dark" />
        <div className="mx-auto w-full max-w-3xl px-6 pb-14 pt-10 text-center lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
            {c.hero.tag}
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {c.hero.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-relaxed text-white/85">
            {c.hero.subtitle}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Image
              src="/images/CharlesPerretProfilePicture2025.webp"
              alt="Charles Perret, fondateur de devlo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-left text-sm">
              <p className="font-medium text-white">{c.hero.authorName}</p>
              <p className="text-white/50">{c.hero.dateLabel}</p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="layered-bottom" fromBg="#0a3a54" toBg="#FFFFFF" />

      {/* Body */}
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-[1fr_280px] lg:px-10">
      <article>

        {/* Section 1 */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">{c.section1.title}</h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">{c.section1.p1}</p>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">{c.section1.p2}</p>
          <div className="rounded-lg border border-[#074f74]/10 bg-[#074f74]/5 p-5">
            <p className="text-sm font-semibold text-[#153a54]">{c.section1.calloutTitle}</p>
            <p className="mt-2 text-sm text-[#2a4c63]/80">{c.section1.calloutText}</p>
          </div>
        </section>

        {/* Section 2 — Loop */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">{c.section2.title}</h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">{c.section2.intro}</p>
          <div className="mt-6 space-y-4">
            {c.howToSteps.map((step: { title: string; description: string }, i: number) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#074f74] to-[#0a3a54] text-sm font-bold text-white shadow-soft">
                    {i + 1}
                  </div>
                  {i < c.howToSteps.length - 1 ? (
                    <div className="mt-1 h-full w-0.5 bg-gradient-to-b from-[#074f74]/30 to-[#074f74]/10" />
                  ) : (
                    <div className="mt-2 flex items-center gap-1">
                      <RefreshCw className="h-4 w-4 text-[#074f74]/50" />
                    </div>
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold text-[#153a54]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#2a4c63]/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-[#074f74]/5 p-4">
            <RefreshCw className="h-5 w-5 shrink-0 text-[#074f74]" />
            <p className="text-sm font-semibold text-[#153a54]">{c.section2.loopNote}</p>
          </div>
        </section>

        {/* Section 3 — 5 axes + variables */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">{c.section3.title}</h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">{c.section3.intro}</p>
          <div className="mt-6 space-y-4">
            {c.analysisAxes.map((axis: { axis: string; description: string; variables: string[] }, i: number) => {
              const Icon = AXIS_ICONS[i] ?? Target;
              const colors = [
                "from-[#074f74] to-[#0a3a54]",
                "from-[#1E4D6B] to-[#0a3a54]",
                "from-[#2A6F97] to-[#1E4D6B]",
                "from-[#074f74] to-[#1E4D6B]",
                "from-[#1B3A4B] to-[#0a3a54]",
              ];
              return (
                <div key={axis.axis} className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-soft">
                  <div className={`flex items-center gap-3 bg-gradient-to-r ${colors[i]} px-5 py-3 text-white`}>
                    <Icon className="h-5 w-5" aria-hidden />
                    <h3 className="text-base font-semibold">{axis.axis}</h3>
                    <span className="ml-auto rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold">
                      {axis.variables.length} variables
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm leading-relaxed text-[#2a4c63]/80">{axis.description}</p>
                    <div className="mt-3 grid gap-1 sm:grid-cols-2">
                      {axis.variables.map((v: string) => (
                        <div key={v} className="flex items-center gap-2 text-sm text-[#2a4c63]/70">
                          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#074f74]/40" />
                          {v}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm font-semibold text-[#074f74]">
            Total : {c.analysisAxes.reduce((sum: number, a: { variables: string[] }) => sum + a.variables.length, 0)} {c.section3.totalLabel}
          </p>
          <div className="rounded-lg border border-green-200 bg-green-50/50 p-5">
            <p className="text-sm font-semibold text-green-800">{c.section3.statsTitle}</p>
            <p className="mt-1 text-sm text-green-700/80">{c.section3.statsText}</p>
          </div>
        </section>

        {/* Section 4 — Objections */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">{c.section4.title}</h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">{c.section4.intro}</p>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {c.objectionTypes.map((obj: { type: string; desc: string }) => (
              <div key={obj.type} className="rounded-lg border border-neutral-200 bg-white p-3 shadow-soft">
                <p className="text-sm font-semibold text-[#153a54]">{obj.type}</p>
                <p className="mt-0.5 text-xs text-[#2a4c63]/60">{obj.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-[#153a54]">{c.section4.flowTitle}</h3>
            <div className="space-y-2">
              {c.section4.flowSteps.map((text: string, i: number) => (
                <div key={i} className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#074f74] text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-[#2a4c63]/80">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[#074f74]/10 bg-[#074f74]/5 p-5">
            <p className="text-sm font-semibold text-[#153a54]">{c.section4.validityTitle}</p>
            <p className="mt-1 text-sm text-[#2a4c63]/80">{c.section4.validityText}</p>
          </div>
        </section>

        {/* Section 5 — A/B vs Sequential */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">{c.section5.title}</h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">{c.section5.p1}</p>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">{c.section5.p2}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600">{c.section5.classicTitle}</p>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                {c.section5.classicItems.map((item: string) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">{c.section5.sequentialTitle}</p>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                {c.section5.sequentialItems.map((item: string) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">{c.section5.conclusion}</p>
        </section>

        {/* Section 6 — Cross-client */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">{c.section6.title}</h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">{c.section6.intro}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-soft">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-[#074f74]" aria-hidden />
                <h3 className="font-semibold text-[#153a54]">{c.section6.transferableTitle}</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                {c.section6.transferableItems.map((item: string) => <li key={item} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />)}
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-soft">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#074f74]" aria-hidden />
                <h3 className="font-semibold text-[#153a54]">{c.section6.isolatedTitle}</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                {c.section6.isolatedItems.map((item: string) => <li key={item} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />)}
              </ul>
            </div>
          </div>
          <div className="rounded-lg border border-[#074f74]/10 bg-[#074f74]/5 p-5">
            <p className="text-sm font-semibold text-[#153a54]">{c.section6.privacyTitle}</p>
            <p className="mt-1 text-sm text-[#2a4c63]/80">{c.section6.privacyText}</p>
          </div>
        </section>

        {/* Section 7 — Before/After */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">{c.section7.title}</h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">{c.section7.intro}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600">{c.section7.beforeTitle}</p>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                {c.section7.beforeItems.map((item: string) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">{c.section7.afterTitle}</p>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                {c.section7.afterItems.map((item: string) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">{c.section7.conclusion}</p>
        </section>

        {/* CTA */}
        <section className="mt-14">
          <div className="rounded-xl bg-gradient-to-b from-[#074f74] to-[#0a3a54] p-8 text-center text-white md:p-12">
            <h2 className="text-2xl font-bold">{c.cta.heading}</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/75">{c.cta.body}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`${prefix}/consultation`}
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#074f74] transition hover:bg-white/90"
              >
                {c.cta.primaryButton}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={c.sidebar.links[0]?.href ? `${prefix}${c.sidebar.links[0].href}` : `${prefix}/etudes-de-cas`}
                className="inline-flex h-11 items-center rounded-lg border border-white/30 px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
              >
                {c.cta.secondaryButton}
              </Link>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link
            href={`${prefix}/`}
            className="text-sm font-medium text-[#074f74] underline underline-offset-4 hover:text-[#0a3a54]"
          >
            {c.backLink}
          </Link>
        </div>
      </article>

      {/* Sticky CTA sidebar — desktop only */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-6">
          <div className="rounded-xl border border-[#074f74]/15 bg-gradient-to-b from-[#074f74]/5 to-white p-5 shadow-soft">
            <p className="text-sm font-bold text-[#153a54]">{c.sidebar.ctaTitle}</p>
            <p className="mt-2 text-xs leading-relaxed text-[#2a4c63]/70">{c.sidebar.ctaBody}</p>
            <Link
              href={`${prefix}/consultation`}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#074f74] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#0a3a54]"
            >
              {c.sidebar.ctaButton}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-wider text-[#074f74]/60">{c.sidebar.linksTitle}</p>
            <ul className="mt-3 space-y-2">
              {c.sidebar.links.map((link: { label: string; href: string }) => (
                <li key={link.href}>
                  <Link
                    href={`${prefix}${link.href}`}
                    className="text-xs font-medium text-[#153a54] underline underline-offset-2 hover:text-[#074f74]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      </div>
    </>
  );
}
