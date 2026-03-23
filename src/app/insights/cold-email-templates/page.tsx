import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { WaveDivider } from "@/components/ui/wave-divider";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildFaqPageSchema,
} from "@/lib/seo/schema-builders";

import { SEQUENCES } from "./sequence-data";
import { SequenceBrowser } from "./sequence-browser";

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = buildPageMetadata({
  title:
    "25 Séquences Cold Email B2B avec Résultats — Templates Gratuits",
  description:
    "Templates cold email B2B testés sur 1000+ campagnes. Séquences outreach complètes avec métriques réelles, exemples emails prospection et résultats mesurés.",
  path: "/insights/cold-email-templates",
  type: "article",
  datePublished: "2026-03-23",
  dateModified: "2026-03-23",
  author: "Charles Perret",
});

/* ------------------------------------------------------------------ */
/*  Breadcrumb                                                        */
/* ------------------------------------------------------------------ */

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Insights", path: "/insights" },
  {
    name: "Templates Cold Email",
    path: "/insights/cold-email-templates",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ (SEO schema)                                                  */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question: "Qu'est-ce qu'une séquence cold email ?",
    answer:
      "Une séquence cold email est une série d'emails envoyés automatiquement à des prospects qui ne vous connaissent pas encore. Chaque email de la séquence est espacé dans le temps et conçu pour créer de la valeur, établir la confiance et déclencher une réponse. Les meilleures séquences combinent plusieurs canaux (email, LinkedIn, appel) et s'appuient sur des signaux d'achat pour personnaliser chaque message.",
  },
  {
    question: "Comment personnaliser ces séquences ?",
    answer:
      "Pour personnaliser efficacement une séquence, commencez par identifier des signaux d'achat concrets : levée de fonds, recrutement, changement de direction, adoption d'une nouvelle technologie. Référencez des événements réels dans vos icebreakers (un post LinkedIn, un article de presse, une participation à un salon). Adaptez la proposition de valeur au contexte spécifique du prospect plutôt que d'envoyer un message générique.",
  },
  {
    question: "Combien d'étapes devrait avoir une séquence ?",
    answer:
      "Nos données sur 25 séquences montrent une moyenne de 6,9 étapes par séquence, avec une fourchette optimale entre 5 et 9 touches. Les séquences trop courtes (moins de 4 touches) ne laissent pas assez de chances au prospect de répondre, tandis que les séquences trop longues (plus de 10 touches) risquent d'être perçues comme du spam. La durée moyenne est de 25 jours.",
  },
  {
    question: "Ces séquences fonctionnent-elles pour mon industrie ?",
    answer:
      "Cette collection couvre plus de 15 industries différentes : Cybersecurity, SaaS, RH, Finance, Pharma, Immobilier, Manufacturing, et bien d'autres. Même si votre industrie exacte n'est pas représentée, les structures, les frameworks de personnalisation et les techniques de copywriting sont transférables. L'important est d'adapter le message à votre ICP et à vos signaux d'achat spécifiques.",
  },
];

/* ------------------------------------------------------------------ */
/*  Computed metrics                                                  */
/* ------------------------------------------------------------------ */

const totalTouches = SEQUENCES.reduce((sum, s) => sum + s.numTouches, 0);
const sequencesWithResults = SEQUENCES.filter(
  (s) => s.metrics.repliedPct !== null
).length;

const avgReplyRate =
  SEQUENCES.filter((s) => s.metrics.repliedPct !== null).reduce(
    (sum, s) => sum + (s.metrics.repliedPct ?? 0),
    0
  ) / sequencesWithResults;

const industries = new Set(
  SEQUENCES.map((s) => s.industry.split(" / ")[0].trim())
);

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ColdEmailTemplatesPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "25 Séquences Cold Email B2B avec Résultats — Templates Gratuits",
            description:
              "Templates cold email B2B testés sur 1000+ campagnes. Séquences outreach complètes avec métriques réelles, exemples emails prospection et résultats mesurés.",
            path: "/insights/cold-email-templates",
            imagePath: "/images/CharlesPerretProfilePicture2025.webp",
            datePublished: "2026-03-23",
            dateModified: "2026-03-23",
            author: "Charles Perret",
            authorUrl:
              "https://www.linkedin.com/in/charlesperret-devlo/",
          }),
          buildFaqPageSchema(faqItems),
        ]}
      />

      <main>
        {/* ============================================================ */}
        {/*  Hero Section                                                 */}
        {/* ============================================================ */}
        <section className="bg-gradient-to-b from-[#074f74] to-[#0a3a54] pt-2 text-white">
          <Breadcrumb items={breadcrumbItems} variant="dark" />

          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 pb-14 pt-10 text-center">
            <div className="space-y-4">
              <h1
                className="font-black tracking-tight text-white"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  lineHeight: 1.1,
                  textWrap: "balance",
                } as React.CSSProperties}
              >
                25 Séquences Cold Email B2B avec Résultats
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                Des séquences complètes testées sur plus de 1000 campagnes.
                Industrie, métriques, emails complets — utilisez-les comme
                base pour vos propres séquences.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/images/CharlesPerretProfilePicture2025.webp"
                alt="Charles Perret, fondateur de devlo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">
                  Charles Perret
                </p>
                <p className="text-xs text-white/60">
                  Fondateur de{" "}
                  <a
                    href="https://devlo.ch"
                    className="underline transition-colors hover:text-white"
                  >
                    devlo.ch
                  </a>{" "}
                  &middot; Mars 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider variant="layered-bottom" fromBg="#0a3a54" toBg="#FFFFFF" />

        {/* ============================================================ */}
        {/*  Sequence Browser                                             */}
        {/* ============================================================ */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <SequenceBrowser sequences={SEQUENCES} />
        </section>

        {/* ============================================================ */}
        {/*  Metrics summary                                              */}
        {/* ============================================================ */}
        <section className="bg-[#f7f8fc] py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2
              className="font-black text-[#0D0D0D]"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                lineHeight: 1.15,
              }}
            >
              25 séquences. {totalTouches} étapes.{" "}
              {sequencesWithResults} avec résultats mesurés.
            </h2>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4">
              <div>
                <div
                  className="text-3xl font-black"
                  style={{ color: "#074f74" }}
                >
                  25
                </div>
                <div className="mt-1 text-sm" style={{ color: "#666d70" }}>
                  séquences
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-black"
                  style={{ color: "#074f74" }}
                >
                  {totalTouches}
                </div>
                <div className="mt-1 text-sm" style={{ color: "#666d70" }}>
                  étapes au total
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-black"
                  style={{ color: "#074f74" }}
                >
                  {Math.round(avgReplyRate)}%
                </div>
                <div className="mt-1 text-sm" style={{ color: "#666d70" }}>
                  taux de réponse moyen
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-black"
                  style={{ color: "#074f74" }}
                >
                  {industries.size}+
                </div>
                <div className="mt-1 text-sm" style={{ color: "#666d70" }}>
                  industries couvertes
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FAQ Section                                                   */}
        {/* ============================================================ */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2
              className="mb-8 text-center font-black text-[#0D0D0D]"
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              }}
            >
              Questions fréquentes
            </h2>
            <div className="divide-y divide-[#e0e4e6] rounded-xl border border-[#e0e4e6] bg-white">
              {faqItems.map((item) => (
                <details key={item.question} className="group">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                    <h3
                      className="text-sm font-semibold"
                      style={{ color: "#0D0D0D" }}
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
                      className="px-5 text-sm leading-relaxed"
                      style={{ color: "#666d70" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider variant="layered-bottom" fromBg="#FFFFFF" toBg="#074f74" />

        {/* ============================================================ */}
        {/*  CTA Section                                                  */}
        {/* ============================================================ */}
        <section
          style={{
            background:
              "linear-gradient(165deg, #074f74 0%, #0a3a54 100%)",
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
              Vous voulez des séquences personnalisées pour votre industrie ?
            </h2>
            <p className="text-base text-white/80">
              devlo conçoit et exécute des campagnes cold email B2B
              sur-mesure. ICP, signaux d&apos;achat, séquences multichannel
              — on s&apos;occupe de tout.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/consultation"
                className="rounded-lg px-7 py-3 text-sm font-bold text-[#074f74] transition-all duration-150 active:scale-[0.97]"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                }}
              >
                Réserver une consultation
              </Link>
              <Link
                href="/services/cold-email"
                className="rounded-lg border px-7 py-3 text-sm font-bold text-white transition-all duration-150 active:scale-[0.97]"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </section>

        <p className="py-8 text-center text-xs" style={{ color: "#666d70" }}>
          Dernière mise à jour : mars 2026
        </p>
      </main>

      <section className="mx-auto w-full max-w-3xl px-6 py-12">
        <div className="rounded-xl border border-[#e0e4e6] bg-[#F7F8FC] p-8 text-center">
          <h3 className="text-xl font-semibold text-[#0D0D0D]">
            Recevez nos insights B2B chaque semaine
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#4A4A4A]">
            Stratégies outbound concrètes, automatisation IA et intelligence
            du marché suisse. Pas de blabla — uniquement ce qui fonctionne.
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
              placeholder="votre@email.com"
              className="flex-1 rounded-md border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-[#8C8C8C] focus:border-[#074f74] focus:outline-none focus:ring-1 focus:ring-[#074f74]"
            />
            <button
              type="submit"
              className="rounded-md bg-[#074f74] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a3a54]"
            >
              S&apos;abonner
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
