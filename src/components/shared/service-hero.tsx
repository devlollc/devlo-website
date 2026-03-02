import { ServiceSwitcher } from "@/components/shared/service-switcher";
import type { ServiceSlug } from "@/content/services";

type ServiceHeroProps = {
  currentSlug: ServiceSlug;
  title: string;
  subtitle: string;
  paragraphs: string[];
  quickFacts: string[];
};

const sectionAnchors = [
  { id: "ce-que-couvre", label: "Ce que couvre" },
  { id: "processus", label: "Processus" },
  { id: "resultats", label: "Résultats" },
  { id: "faq", label: "FAQ" },
];

export function ServiceHero({ currentSlug, title, subtitle, paragraphs, quickFacts }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-b from-devlo-50/70 via-white to-white">
      <div className="pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-devlo-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-20 h-52 w-52 rounded-full bg-devlo-100/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-8 pt-6 md:px-8 md:pb-10 md:pt-8">
        <div className="max-w-md">
          <ServiceSwitcher currentSlug={currentSlug} />
        </div>

        <p className="mt-4 inline-flex items-center rounded-full bg-devlo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.09em] text-devlo-700">
          DEVLO.CH — AGENCE B2B SUISSE
        </p>

        <h1 className="mt-3 max-w-5xl text-3xl font-extrabold leading-[1.08] tracking-tight text-devlo-900 md:text-4xl lg:text-[44px]">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-devlo-700 md:text-lg md:leading-8">{subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {quickFacts.map((fact) => (
            <span
              key={fact}
              className="inline-flex items-center rounded-full border border-neutral-200 bg-white/85 px-3 py-1 text-xs font-semibold text-neutral-700 shadow-soft"
            >
              {fact}
            </span>
          ))}
        </div>

        <div className="mt-4 max-w-4xl space-y-3 text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
          {paragraphs.map((paragraph, index) => (
            <p key={`${title}-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>

        <nav aria-label="Navigation de section" className="mt-5">
          <ul className="flex flex-wrap gap-2">
            {sectionAnchors.map((anchor) => (
              <li key={anchor.id}>
                <a
                  href={`#${anchor.id}`}
                  className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-devlo-700 transition hover:border-devlo-700/40 hover:text-devlo-900"
                >
                  {anchor.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
