import Link from "next/link";

type CTASectionProps = {
  title: string;
  subtitle: string;
};

export function CTASection({ title, subtitle }: CTASectionProps) {
  return (
    <section className="border-t border-neutral-200 bg-white py-16 md:py-18">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold leading-tight text-devlo-900 md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-neutral-600 md:text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/consultation"
            className="rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            Réserver une consultation gratuite
          </Link>
          <Link
            href="/etudes-de-cas"
            className="rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-devlo-900 transition hover:border-devlo-700/40 hover:text-devlo-700"
          >
            Voir les études de cas
          </Link>
        </div>
      </div>
    </section>
  );
}
