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
    "Séquence Cold Email Sécurité IT & SOC — 26% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 4 étapes sur 40 jours pour sécurité it & soc. 950 prospects contactés. 3 emails, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/it-security-soc",
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
    name: "Sécurité IT & SOC",
    path: "/insights/cold-email-templates/it-security-soc",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment se démarquer dans un marché SOC saturé ?",
    answer:
      "Les notes audio LinkedIn sont le principal différenciateur de cette séquence. Dans un secteur où tous les fournisseurs envoient des emails similaires, une voix humaine attire immédiatement l’attention. Le résumé en une ligne (&quot;onboarding en jours, sans installation, essai 3 mois&quot;) élimine les principales objections d’entrée.",
  },
  {
    question:
      "Pourquoi cibler les entreprises de 80 à 3’000 employés ?",
    answer:
      "C’est le sweet spot pour un SOC-as-a-Service : assez grandes pour avoir besoin d’un SOC, trop petites pour justifier un SOC interne. Les CISO de ce segment cherchent des solutions plug-and-play qui ne nécessitent pas d’équipe sécurité dédiée.",
  },
  {
    question:
      "Comment utiliser les templates de réponse efficacement ?",
    answer:
      "Préparez une réponse pour chaque scénario AVANT de lancer la campagne. Quand un prospect répond &quot;je suis déjà équipé&quot;, le commercial envoie immédiatement le template &quot;well-covered&quot; qui propose une comparaison. Cette réactivité (<1h de délai) multiplie par 3x le taux de conversion.",
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
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "Jour 1",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Cher{% endif %} {{firstName}},

Le message LinkedIn commence ainsi :

« Mon collègue {salesRep} m’a parlé de… »
« Félicitations pour… »
« Votre publication LinkedIn concernant… »
« Votre interview/article/billet de blog… »
Et elle se termine par « Au plaisir de faire votre connaissance. »

---

→ Note audio (envoyée 3 jours après l’acceptation de la demande de connexion sur LinkedIn) :
Mon collègue {{salesRep}} vous a envoyé un e-mail. Nous nous demandions si vous souhaitiez savoir pourquoi nos clients affirment que notre solution SOC-as-a-service native du cloud était un choix évident ?
→ SMS (envoyé directement après la note audio) :
En bref : mise en service en quelques jours sans installation sur site, économique, période d’essai de 3 mois, résiliation possible en une semaine

---

→ Message avec les noms des collègues (envoyé 10 jours plus tard) :
{{firstName}}, vaut-il mieux contacter vos collègues {{colleaguename1}} ou {{colleaguename2}} pour discuter de la sécurité informatique chez {{companyName}} ?

---

→ Message de rupture (envoyé 10 jours plus tard) :
{{firstName}}, nos clients ont choisi notre solution SOC-as-a-service parmi des dizaines de produits disponibles en Suisse pour réduire les risques liés à la cybersécurité. N'hésitez pas à nous contacter pour savoir pourquoi, lorsque le moment sera plus opportun. Cordialement

Autres modèles de réponses LinkedIn
→ Envoyés manuellement si le prospect répond par un message non concluant qui interrompt la séquence

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Jour 1",    subject:
      "{{subject}}",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Cher{% endif %} {{firstName}},
{{icebreaker; Congrats for…}}
Nos clients ont choisi notre SOC-as-a-Service parmi les dizaines de produits disponibles en Suisse.
Ils ont préféré notre solution à leur ancien SOC car elle était plus complète, prête à l&apos;emploi et plus rentable.
[Client_Testimony]
Vaut-il la peine de donner plus de contexte ? Ou est-ce hors sujet ?
Cordialement,
{{salesRep}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "10 jours après",    subject:
      "discussion avec {{colleaguename1}} ou {{colleaguename2}}",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Cher{% endif %} {{firstNasme}},
Vaut-il mieux contacter votre collègue {{colleaguename1}} ou {{colleaguename2}} pour discuter du SOC de {{companyName}} ?
Je comprends que vous soyez occupé, mais je ne voudrais pas manquer l&apos;occasion de rencontrer un représentant de  {{companyName}}.
Vous et vos collègues serez impressionnés de voir comment nos experts ont aidé nos clients à surveiller et à protéger efficacement leurs systèmes informatiques contre les cybermenaces et les cyberattaques.
    
Bonne journée

{{signature}}`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "10 jours après",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Cher{% endif %} {{firstNasme}},

Notre directeur [Director_Name]  et moi-même avons essayé de vous contacter.
Nous avons pensé que vous seriez peut-être intéressé(e) de découvrir comment nos clients surveillent leur infrastructure informatique et leurs données, et protègent leur entreprise contre les cybermenaces.

Serait-il possible d&apos;organiser un bref entretien téléphonique pour vous présenter notre solution ?

Si cela ne vous intéresse pas, n&apos;hésitez pas à me le faire savoir ; je comprendrai tout à fait.

Cordialement,

{{signature}}`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ItSecuritySocPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Sécurité IT & SOC — 26% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 4 étapes sur 40 jours pour sécurité it & soc.",
            path: "/insights/cold-email-templates/it-security-soc",
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
              {["SOC-AS-A-SERVICE","LINKEDIN + EMAIL","CISO & DSI"].map((tag) => (
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
                Séquence cold email pour sécurité it & soc — 26% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                4 étapes sur 40 jours. 3 emails, 1 message LinkedIn. 950 prospects contactés.
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
                value: "950",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "28%",
                label: "Taux d&apos;ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "26%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "12",
                label: "Prospects intéressés",
                bg: "#d97706",
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
              3 emails, 1 message LinkedIn — sur 40 jours.
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
                950 prospects contactés avec un taux de réponse de 26% et 12 prospects intéressés. Cette séquence de 6 touches sur 40 jours combine LinkedIn et email pour atteindre les CISO et responsables IT dans les entreprises de 80 à 3’000 employés en Suisse alémanique.
              </p>
              <p>
                L’utilisation de notes audio LinkedIn est un différenciateur majeur. Dans un flux de messages textuels, une note vocale attire l’attention et crée un lien personnel. Le message audio résume l’essentiel en quelques secondes : &quot;onboarding en quelques jours, sans installation sur site, période d’essai de 3 mois&quot;.
              </p>
              <p>
                La séquence inclut des templates de réponse pour chaque scénario (prospect non concluant, bonne personne, mauvaise personne, pas intéressé, déjà équipé). Cette préparation exhaustive permet au commercial de répondre instantanément à chaque type de réponse, maximisant le taux de conversion.
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
                  <strong>Utiliser des notes audio LinkedIn.</strong>{" "}
                  Une voix humaine dans un flux de texte attire l’attention et crée un lien personnel.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Préparer des templates pour chaque type de réponse.</strong>{" "}
                  Prospect intéressé, pas intéressé, déjà équipé — une réponse prête pour chaque cas.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Résumer les avantages en une ligne.</strong>{" "}
                  &quot;Onboarding en jours, sans installation, période d’essai 3 mois, résiliation en 1 semaine.&quot;
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Cibler la Suisse alémanique spécifiquement.</strong>{" "}
                  Adapter la géographie de la campagne au marché cible de l’entreprise.
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
                  title: "Solutions SOC-as-a-Service",
                  desc: "Votre offre inclut la surveillance de sécurité, la détection de menaces ou la réponse aux incidents.",
                },
                {
                  title: "Ciblage CISO et responsables IT",
                  desc: "Entreprises de 80 à 3’000 employés en Suisse — le sweet spot pour un SOC externalisé.",
                },
                {
                  title: "Marché suisse alémanique",
                  desc: "La séquence est optimisée pour la Suisse germanophone, un marché où LinkedIn est très utilisé.",
                },
                {
                  title: "Offre avec période d’essai",
                  desc: "La période de 3 mois et la résiliation en 1 semaine éliminent les barrières à l’adoption.",
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
                  title: "Équipes commerciales cybersécurité",
                  desc: "Si vous vendez des solutions SOC, SIEM, MDR ou de surveillance de sécurité.",
                },
                {
                  title: "SDRs ciblant les CISO de mid-market",
                  desc: "Entreprises de 80 à 3’000 employés — le segment idéal pour un SOC externalisé.",
                },
                {
                  title: "MSSPs et intégrateurs sécurité",
                  desc: "Si vous proposez des services de sécurité managés à des PME et ETI.",
                },
                {
                  title: "Tout éditeur B2B ciblant les DSI suisses",
                  desc: "La structure LinkedIn + email fonctionne pour toute solution IT vendue en Suisse.",
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
