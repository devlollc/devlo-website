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

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = buildPageMetadata({
  title:
    "Séquence Cold Email Technologie Web & IT — 4% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 4 étapes sur 28 jours pour technologie web & it. 111 prospects contactés. 4 emails. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/web-technology",
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
  { name: "Templates Cold Email", path: "/insights/cold-email-templates" },
  {
    name: "Technologie Web & IT",
    path: "/insights/cold-email-templates/web-technology",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Pourquoi seulement 4 touches pour les services IT ?",
    answer:
      "Les dirigeants de PME en finance et juridique préfèrent la sobriété. Trop d’emails risquent d’irriter plutôt que d’engager. 4 emails bien espacés (6-9 jours entre chaque) respectent leur temps tout en maintenant la présence. L’audit gratuit au dernier email crée une dernière incitation forte.",
  },
  {
    question:
      "Comment le tarif fixe différencie-t-il la proposition ?",
    answer:
      "Pour une fiduciaire ou un cabinet d’avocats, les factures IT imprévisibles sont une frustration majeure. Le forfait fixe élimine cette incertitude et permet une budgétisation précise. C’est un argument particulièrement résonant avec des professionnels de la finance qui valorisent la prévisibilité.",
  },
  {
    question:
      "Comment utiliser les témoignages dans une séquence courte ?",
    answer:
      "Avec seulement 4 emails, chaque témoignage compte. Le Touch #1 intègre un témoignage qualitatif, le Touch #2 des métriques de performance chiffrées. Cette progression (qualitatif → quantitatif) construit la confiance en deux étapes. Le Touch #4 offre l’audit gratuit pour les prospects encore hésitants.",
  }
];

/* ------------------------------------------------------------------ */
/*  Sequence touch data                                               */
/* ------------------------------------------------------------------ */

type TouchChannel = "email" | "call" | "linkedin";

interface SequenceTouch {
  number: number;
  channel: TouchChannel;
  label: string;
  timing: string;
  subject?: string;
  content: string;
}

const CHANNEL_COLORS: Record<TouchChannel, string> = {
  email: "#074f74",
  call: "#d97706",
  linkedin: "#0e7490",
};

const CHANNEL_LABELS: Record<TouchChannel, string> = {
  email: "Email",
  call: "Appel",
  linkedin: "LinkedIn",
};

const touches: SequenceTouch[] = [
  {
    number: 1,
    channel: "email",
    label: "Email #1",
    timing: "Jour 1",    subject:
      "retards/coûts cachés",
    content: `A - version longue

Bonjour {{salutation}} {{lastName}},

En Suisse romande, de nombreuses entreprises comme {{companyName}} nous font part de leurs préoccupations informatiques : des tickets qui restent trop longtemps en attente, des factures imprévisibles, un support qui manque de réactivité dans les moments critiques, etc.

Pour {{testimony company}}, par exemple, ces goulots d&apos;étranglement représentaient une perte de 3 à 4 jours par mois. Aujourd&apos;hui, « {{clientCompanyName}} est notre partenaire informatique de confiance depuis des années. Il agit comme un service informatique externalisé et offre une fiabilité et une qualité de service exceptionnelles. »

Ces problèmes ne sont pas seulement d&apos;ordre informatique : ils sont source de stress, ralentissent les projets et entraînent d&apos;importants dépassements budgétaires.

{{companyName}} est-il parfois confronté à ces mêmes situations, ou me trompé-je ?

Cordialement,

{{accountSvignature}} 
Se désabonner

B - version abrégée

Bonjour {{salutation}} {{lastName}},

De nombreuses entreprises {{revisedjobtitle}} de Suisse romande dans le secteur {{revisedindustry}} évoquent les mêmes problèmes informatiques :
Des factures mensuelles difficiles à prévoir
Des tickets d’assistance qui restent en attente trop longtemps
Leurs prestataires informatiques qui s’appuient sur des services d’assistance offshore peu réactifs

Nous sommes basés à Genève et proposons des tarifs fixes pour une surveillance proactive 24h/24 et 7j/7. 

L&apos;informatique devient ainsi un allié fiable plutôt qu&apos;une source de frustration sans fin.

{{companyName}} est-il confronté aux mêmes casse-tête ? Ou suis-je complètement à côté de la plaque ?

Cordialement,

{{accountSignature}} 
Se désabonner`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "6 jours après",
    content: `Bonjour {{salutation}} {{lastName}},
Plus de {{amount}} entreprises de Suisse romande et certains de vos homologues à Genève ont décidé de tester notre assistance informatique. 
Concrètement :
{{testimonycompany}} : {{percentage}}  disponibilité, {{percentage}} délais de résolution plus courts, {{amount}} violations de sécurité.
{{testimonycompany}} : infrastructure FINMA, {{percentage}} moins de risques de phishing, {{amount}} violations de sécurité.
Serait-il pertinent pour {{companyName}} de comparer cela avec ce que propose votre fournisseur actuel ?
Cordialement,
{{accountSignature}}  
Se désabonner`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "7 jours après",    subject:
      "{% if Colleaguename1 != blank and Colleaguename2 != blank %} discuter avec {{ Colleaguename1 }} ou {{ Colleaguename2 }} ?{% elsif Colleaguename1 != blank %} discuter avec {{ Colleaguename1 }} ?{% else %} discuter avec quelqu&apos;un d&apos;autre sur {{ companyName }} ?{% endif %}",
    content: `Bonjour {{salutation}} {{lastName}},
{% if Colleaguename1 != blank and Colleaguename2 != blank %} Je ne sais pas si l&apos;assistance informatique relève de votre responsabilité ou si c&apos;est plutôt le travail de vos collègues {{ Colleaguename1 }} ou {{ Colleaguename2 }} ?{% elsif Colleaguename1 != blank %} Je ne sais pas si l&apos;assistance informatique relève de votre responsabilité ou s&apos;il vaut mieux que votre collègue {{Colleaguename1}} s&apos;en charge ?{% elsif Colleaguename2 != blank %} Vous ne savez pas si le support informatique relève de votre responsabilité ou s&apos;il serait mieux géré par votre collègue {{Colleaguename2}} ?{% else %} Vous ne savez pas si le support informatique relève de votre responsabilité ou s&apos;il relève davantage de la compétence d&apos;un autre membre de votre équipe ?{% endif %}
Des coûts transparents, une assistance locale réactive et une sécurité renforcée : voilà exactement ce que recherchent les responsables informatiques de Suisse romande lorsqu&apos;ils évaluent leurs options d&apos;externalisation informatique.
Pourriez-vous me mettre en contact avec vos collègues afin qu&apos;ils puissent se forger leur propre opinion ?
Cordialement
{{accountSignature}}  
Se désabonner`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "9 jours après",
    content: `Bonjour {{salutation}} {{lastName}},
Ceci sera mon dernier message. Pour dissiper toute hésitation, nous vous proposons un audit gratuit de votre infrastructure.
Dans les 48 heures, vous recevrez un rapport clair sur :
vos failles de sécurité
vos inefficacités
vos risques de non-conformité
Même si vous décidez de rester chez votre fournisseur actuel, cet audit vous fournira une feuille de route utile.
👉 Souhaitez-vous réserver un créneau à {{month}} pour {{companyName}} ?
Cordialement,
{{accountSignature}}  
Se désabonner`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function WebTechnologyPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Technologie Web & IT — 4% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 4 étapes sur 28 jours pour technologie web & it.",
            path: "/insights/cold-email-templates/web-technology",
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
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {["SERVICES IT","EMAIL","PME & FINANCE"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <h1
                className="font-black tracking-tight text-white"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  lineHeight: 1.1,
                  textWrap: "balance",
                } as React.CSSProperties}
              >
                Séquence cold email pour technologie web & it — 4% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                4 étapes sur 28 jours. 4 emails. 111 prospects contactés.
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

        <WaveDivider
          variant="layered-bottom"
          fromBg="#0a3a54"
          toBg="#FFFFFF"
        />

        {/* ============================================================ */}
        {/*  Metrics Bar                                                  */}
        {/* ============================================================ */}
        <section className="mx-auto -mt-6 max-w-4xl px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                value: "111",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "4%",
                label: "Taux d&apos;ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "4%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "N/A",
                label: "Prospects intéressés",
                bg: "#9ca3af",
                text: "#ffffff",
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl p-5 text-center shadow-md"
                style={{ background: metric.bg, color: metric.text }}
              >
                <div className="text-3xl font-black">{metric.value}</div>
                <div className="mt-1 text-sm font-medium opacity-90">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/*  Sequence Details                                              */}
        {/* ============================================================ */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2
              className="mb-4 text-center font-black text-[#0D0D0D]"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                lineHeight: 1.15,
              }}
            >
              Les 4 touches de la séquence
            </h2>
            <p
              className="mx-auto mb-12 max-w-xl text-center text-sm"
              style={{ color: "#666d70" }}
            >
              4 emails — sur 28 jours.
            </p>

            {/* Vertical timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-5 top-0 h-full w-0.5 sm:left-6"
                style={{ background: "#e0e4e6" }}
                aria-hidden="true"
              />

              <div className="space-y-8">
                {touches.map((touch) => (
                  <article
                    key={touch.number}
                    className="relative pl-14 sm:pl-16"
                  >
                    {/* Circle */}
                    <div
                      className="absolute left-2.5 top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white sm:left-3.5 sm:h-5 sm:w-5"
                      style={{
                        background: CHANNEL_COLORS[touch.channel],
                      }}
                      aria-hidden="true"
                    >
                      {touch.number}
                    </div>

                    {/* Card */}
                    <div className="rounded-xl border border-[#e0e4e6] bg-white p-5 shadow-sm">
                      {/* Header */}
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span
                          className="rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
                          style={{
                            background:
                              CHANNEL_COLORS[touch.channel],
                          }}
                        >
                          {CHANNEL_LABELS[touch.channel]}
                        </span>
                        <span
                          className="text-xs font-medium"
                          style={{ color: "#666d70" }}
                        >
                          {touch.timing}
                        </span>
                        <span className="text-xs font-semibold text-[#0D0D0D]">
                          — {touch.label}
                        </span>
                      </div>

                      {/* Subject line for emails */}
                      {touch.subject && (
                        <div className="mb-3 rounded-lg bg-[#f7f8fc] px-3 py-2">
                          <span
                            className="text-xs font-semibold uppercase tracking-wide"
                            style={{ color: "#666d70" }}
                          >
                            Objet :{" "}
                          </span>
                          <span className="text-xs text-[#0D0D0D]">
                            {touch.subject}
                          </span>
                        </div>
                      )}

                      {/* Body */}
                      <div
                        className="whitespace-pre-line text-sm leading-relaxed"
                        style={{ color: "#333" }}
                      >
                        {touch.content}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  Why it works                                                  */}
        {/* ============================================================ */}
        <section className="bg-[#f7f8fc] py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2
              className="mb-8 font-black text-[#0D0D0D]"
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              }}
            >
              Pourquoi cette séquence fonctionne
            </h2>
            <div className="space-y-5 text-[15px] leading-relaxed text-[#333]">
              <p>
                111 prospects contactés sur 28 jours avec 4 touches email uniquement. Cette séquence minimaliste cible les secteurs finance et juridique en Suisse romande — des marchés où la sobriété de la communication est valorisée.
              </p>
              <p>
                Le premier email aborde directement les problèmes IT concrets des PME : tickets en attente, factures imprévisibles, support peu réactif. Cette approche &quot;problem-first&quot; est particulièrement efficace auprès de dirigeants qui vivent ces frustrations au quotidien mais n’ont pas le temps de chercher des alternatives.
              </p>
              <p>
                Le témoignage client intégré (Touch #1) et les métriques de performance (Touch #2) construisent progressivement la confiance. L’offre d’audit gratuit au Touch #4 (&quot;breakup email&quot;) récupère les prospects hésitants en éliminant tout risque.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  Learnings                                                     */}
        {/* ============================================================ */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2
              className="mb-8 font-black text-[#0D0D0D]"
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              }}
            >
              Ce que vous pouvez apprendre de cette campagne
            </h2>
            <ul className="space-y-4 text-[15px] leading-relaxed text-[#333]">
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Aller droit au problème.</strong>{" "}
                  Tickets en attente, factures imprévisibles — des frustrations quotidiennes que chaque PME connaît.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer un audit gratuit comme breakup.</strong>{" "}
                  Un rapport en 48h sur les vulnérabilités, inefficacités et risques de conformité.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Cibler finance et juridique spécifiquement.</strong>{" "}
                  Ces secteurs ont des exigences de fiabilité IT et de conformité élevées.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Garder une séquence courte (4 emails).</strong>{" "}
                  Pour les PME suisses, la sobriété est respectée et valorisée.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  When to use                                                   */}
        {/* ============================================================ */}
        <section className="bg-[#f7f8fc] py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2
              className="mb-8 font-black text-[#0D0D0D]"
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              }}
            >
              Quand utiliser cette séquence
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Services IT managés pour PME",
                  desc: "Support IT, infogérance, monitoring 24/7, sécurité — cette séquence cible les PME frustrées par leur prestataire actuel.",
                },
                {
                  title: "Ciblage finance et juridique",
                  desc: "Fiduciaires, cabinets d’avocats, family offices, fonds d’investissement — des secteurs avec des exigences IT élevées.",
                },
                {
                  title: "Marché suisse romand",
                  desc: "La séquence bilingue (FR/EN) est calibrée pour Genève et la région lémanique.",
                },
                {
                  title: "Offre à tarif fixe",
                  desc: "Si votre modèle tarifaire est prévisible (forfait fixe), c’est un argument central de la séquence.",
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#e0e4e6] bg-white p-5"
                >
                  <h3 className="mb-2 text-sm font-bold text-[#0D0D0D]">
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#666d70" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  Who can use                                                   */}
        {/* ============================================================ */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2
              className="mb-8 font-black text-[#0D0D0D]"
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              }}
            >
              Qui peut utiliser cette séquence
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Prestataires IT pour PME",
                  desc: "Si vous offrez du support IT, de l’infogérance ou du monitoring proactif.",
                },
                {
                  title: "SDRs ciblant les dirigeants de PME",
                  desc: "Le ton direct et les problèmes concrets résonnent avec les gérants de petites entreprises.",
                },
                {
                  title: "ESN et sociétés de services IT",
                  desc: "Si vous proposez des services IT managés avec tarification transparente.",
                },
                {
                  title: "Fournisseurs de solutions de sécurité IT pour PME",
                  desc: "Adaptez la séquence à votre offre de protection informatique.",
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#e0e4e6] bg-white p-5"
                >
                  <h3 className="mb-2 text-sm font-bold text-[#0D0D0D]">
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#666d70" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FAQ Section                                                   */}
        {/* ============================================================ */}
        <section className="bg-[#f7f8fc] py-16">
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

        {/* ============================================================ */}
        {/*  CTA                                                           */}
        {/* ============================================================ */}
        <WaveDivider
          variant="layered-bottom"
          fromBg="#f7f8fc"
          toBg="#074f74"
        />

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
              Vous voulez une séquence personnalisée pour votre
              industrie ?
            </h2>
            <p className="text-base text-white/80">
              devlo conçoit et exécute des campagnes cold email B2B
              sur-mesure. ICP, signaux d&apos;achat, séquences
              multicanal — on s&apos;occupe de tout.
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

        {/* ============================================================ */}
        {/*  Related / Back link                                           */}
        {/* ============================================================ */}
        <section className="py-12 text-center">
          <Link
            href="/insights/cold-email-templates"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#074f74]"
            style={{ color: "#666d70" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Voir toutes les 25 séquences
          </Link>
        </section>

        <p
          className="py-8 text-center text-xs"
          style={{ color: "#666d70" }}
        >
          Dernière mise à jour : mars 2026
        </p>
      </main>
    </>
  );
}
