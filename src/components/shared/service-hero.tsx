import Link from "next/link";

type ServiceHeroProps = {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  paragraphs: string[];
};

export function ServiceHero({ title, subtitle, breadcrumbLabel, paragraphs }: ServiceHeroProps) {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-14 pt-12 md:px-8 md:pb-18 md:pt-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
            <li>
              <Link href="/" className="transition hover:text-devlo-700">
                devlo.ch
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="transition hover:text-devlo-700">
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-devlo-900">{breadcrumbLabel}</li>
          </ol>
        </nav>

        <p className="inline-flex items-center rounded-full bg-devlo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.09em] text-devlo-700">
          DEVLO.CH — AGENCE B2B SUISSE
        </p>

        <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight text-devlo-900 md:text-5xl lg:text-[56px]">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-xl font-semibold leading-relaxed text-devlo-700 md:text-2xl">{subtitle}</p>

        <div className="mt-6 max-w-4xl space-y-4 text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
          {paragraphs.map((paragraph, index) => (
            <p key={`${title}-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
