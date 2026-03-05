import Link from "next/link";

import { type ServiceSlug } from "@/content/services";
import { getLocalizedServicesContent } from "@/lib/i18n/services-content";
import { resolvePathForLocale, type SupportedLocale } from "@/lib/i18n/slug-map";

type RelatedServicesProps = {
  currentSlug: ServiceSlug;
  relatedSlugs: ServiceSlug[];
  locale?: SupportedLocale;
};

const copyByLocale: Record<SupportedLocale, { eyebrow: string; titlePrefix: string; titleSuffix: string }> = {
  fr: {
    eyebrow: "Services liés",
    titlePrefix: "Étendre",
    titleSuffix: "avec des leviers complémentaires",
  },
  en: {
    eyebrow: "Related services",
    titlePrefix: "Expand",
    titleSuffix: "with complementary levers",
  },
  de: {
    eyebrow: "Verwandte Leistungen",
    titlePrefix: "Erweitern Sie",
    titleSuffix: "mit ergänzenden Hebeln",
  },
  nl: {
    eyebrow: "Gerelateerde diensten",
    titlePrefix: "Breid",
    titleSuffix: "uit met aanvullende hefbomen",
  },
};

export function RelatedServices({ currentSlug, relatedSlugs, locale = "fr" }: RelatedServicesProps) {
  const localizedServicesData = getLocalizedServicesContent(locale).SERVICE_PAGE_DATA;
  const current = localizedServicesData[currentSlug];
  const copy = copyByLocale[locale];

  return (
    <section className="border-t border-[var(--border)] bg-white py-18">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--primary)]">
          {copy.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
          {copy.titlePrefix} {current.navTitle.toLowerCase()} {copy.titleSuffix}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {relatedSlugs.map((slug) => {
            const related = localizedServicesData[slug];
            return (
              <Link
                key={slug}
                href={resolvePathForLocale(related.path, locale).path}
                className="rounded-2xl border border-[var(--border)] bg-white p-5 transition hover:border-[var(--primary)]/40 hover:bg-white"
              >
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{related.navTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{related.pageSubtitle}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
