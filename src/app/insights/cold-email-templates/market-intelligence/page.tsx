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
    "Séquence Cold Email Intelligence Marché & Biocarburants — 33% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 30 jours pour intelligence marché & biocarburants. 289 prospects contactés. 5 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/market-intelligence",
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
    name: "Intelligence Marché & Biocarburants",
    path: "/insights/cold-email-templates/market-intelligence",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment vendre une plateforme d’intelligence marché ?",
    answer:
      "La clé est de démontrer la valeur des insights immédiatement. Le témoignage &quot;Your report is the Bible&quot; est un argument définitif. L’essai gratuit de 10 jours permet au prospect de vérifier par lui-même la qualité des données. Dans le monde du trading, la qualité de l’information est le critère de sélection n°1.",
  },
  {
    question:
      "Pourquoi 30 prospects intéressés sur 289 est un bon résultat ?",
    answer:
      "Un taux d’intérêt de 10% est excellent dans un marché de niche comme les biocarburants. Ces 30 prospects sont ultra-qualifiés — ce sont des traders et analystes qui ont un besoin réel de données marché. Le panier moyen d’un abonnement intelligence marché justifie largement l’investissement en prospection.",
  },
  {
    question:
      "Comment personnaliser cette séquence pour un autre marché data ?",
    answer:
      "Gardez la structure (7 touches, 30 jours) et remplacez &quot;biocarburants&quot; par votre domaine. L’essai gratuit (Touch #2) est universellement applicable. Le témoignage iconique doit venir d’un décideur reconnu dans votre secteur. Et le lien personnalisé vers le site web (Touch #1) ajoute une couche de personnalisation appréciée.",
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
      "notre appel {{firstName}}",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bon après-midi{% endif %} {{firstName}},

{{Icebreaker}}

Mes recherches m'ont montré que vous gérez des projets liés aux biocarburants chez {{companyName}}.

Il est de plus en plus difficile de suivre l&apos;évolution du marché des carburants renouvelables, notamment en ce qui concerne les cadres réglementaires et les prévisions de demande pour un éventail toujours plus large de matières premières et de technologies.

Des centaines d&apos;organisations font confiance à notre expertise et à notre connaissance des biocarburants à l&apos;échelle mondiale. Les membres de leurs équipes ont accès à des informations quotidiennes via notre plateforme Renewable Fuels Intelligence.

« Votre rapport est la Bible », a déclaré le grand patron du biodiesel d&apos;une entreprise du S&P 500. Personne n&apos;offre une analyse aussi précise.

Ce serait formidable de vous donner un peu plus de contexte par téléphone et de vous expliquer comment {{companyName}} pourrait également en bénéficier.

Cela vous intéresse-t-il, ou suis-je à côté de la plaque ?

Cordialement,
{{salesRep}}

PS : Jetez un œil à notre site web https://companyurl/{{firstName}}{{lastName}}



{{signature}}`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "7 jours après",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},

Voici une proposition à votre intention, accompagnée d&apos;un peu plus de contexte : testez notre plateforme pendant 10 jours.

Découvrez par vous-même pourquoi nos plus de 100 clients ne peuvent plus se passer de nos analyses pour suivre le marché des carburants renouvelables et prendre leurs propres décisions. 

Ils économisent des centaines d&apos;heures en surveillant les niveaux des obligations de mélange et en établissant des prévisions pour [ProductName].

Certains ont même réalisé qu&apos;ils n&apos;avaient pas besoin d&apos;embaucher un analyste en interne, car ils disposaient de toutes les informations nécessaires.

Cela vous intéresse ?

Cordialement,
{{salesRep}}

{{signature}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "5 jours après",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},
Vaut-il mieux contacter votre collègue {{colleaguename1}} ou {{colleaguename2}} pour discuter des informations relatives aux biocarburants ? Ou peut-être quelqu&apos;un d&apos;autre ?
Merci pour votre réponse,
{{salesRep}}

PS : Ma liste de tâches avec photo ci-dessous m'a rappelé de vous écrire 😉



{{signature}}`,
  },
  {
    number: 4,
    channel: "call",
    label: "Appel téléphonique",
    timing: "3 jours après",
    content: `Appel à froid n° 1
Date d&apos;envoi : 3 jours après le dernier message
Script d&apos;appel :
Si le prospect répond :

Suivez le script d&apos;appel à froid suivant
Dans ce cas, posez ces questions pour personnaliser la démonstration, évaluer le prospect et planifier la démonstration
Avez-vous un défi spécifique pour lequel nous pourrions vous aider ? 
Combien de personnes de l&apos;équipe sont impliquées ? 
Souhaitez-vous inviter vos collègues qui commercialisent également des biocarburants ?
Si ce n&apos;est pas le cas, demandez pourquoi et surmontez les objections : (Courtoisie - Problème - Action)
_____
_____
_____`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "1 jours après",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher/Chère{% variation %}Salut{% endspin %} {{firstName}},

Avez-vous reçu mon appel hier ? Y a-t-il un moment plus propice pour vous appeler ? Peut-être le {% assign today = "now" | date: "%A" %}{% case today %}{% when "Monday" %}demain ou mercredi{% when "Tuesday" %}demain ou jeudi{% when "Wednesday" %}demain ou vendredi{% when "Thursday" %}demain ou lundi{% when "Friday" %}lundi ou mardi matin{% when "Saturday" %}la semaine prochaine{% when "Sunday" %}la semaine prochaine{% endcase %}?

Cordialement,
{{salesRep}}

PS : Voici un petit café virtuel pour continuer ta journée :) !



{{signature}}`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "4 jours après",    subject:
      "Appel manqué {{firstName}}",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},

J'espère que vous allez bien.

J'ai essayé de vous contacter à plusieurs reprises, je comprends donc tout à fait si notre plateforme d&apos;informations sur les carburants renouvelables ne vous intéresse pas.

En tant que {{jobtitle}}, de quelles informations spécifiques avez-vous besoin actuellement et que vous ne parvenez pas à trouver ? Laissez-moi vous montrer que vous pouvez prendre de meilleures décisions grâce à nos analyses.

{{salesRep}}`,
  },
  {
    number: 7,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "1 jours après",
    content: `Connexion sur LinkedIn
Date d&apos;envoi : 1 jour après le dernier message
Expéditeur : [Client_FirstName]
Contenu : provenant de LinkedIn
{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}}, [Client_FirstName] de la part de [ClientCompanyName]. Je suis ravi de me connecter avec vous et de partager des informations sur les biocarburants et les meilleures pratiques. Cela pourrait peut-être vous être utile, à vous et à {{companyName}} ?`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function MarketIntelligencePage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Intelligence Marché & Biocarburants — 33% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 7 étapes sur 30 jours pour intelligence marché & biocarburants.",
            path: "/insights/cold-email-templates/market-intelligence",
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
              {["BIOCARBURANTS","MULTICANAL","TRADERS & CFO"].map((tag) => (
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
                Séquence cold email pour intelligence marché & biocarburants — 33% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 30 jours. 5 emails, 1 appel téléphonique, 1 message LinkedIn. 289 prospects contactés.
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
                value: "289",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "73%",
                label: "Taux d&apos;ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "33%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "30",
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
              Les 7 touches de la séquence
            </h2>
            <p
              className="mx-auto mb-12 max-w-xl text-center text-sm"
              style={{ color: "#666d70" }}
            >
              5 emails, 1 appel téléphonique, 1 message LinkedIn — sur 30 jours.
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
                289 prospects et un taux de réponse de 33% avec 30 prospects intéressés — 10% de taux d’intérêt. Cette séquence de 7 touches sur 30 jours cible un marché de niche (traders et analystes biocarburants) avec une précision chirurgicale.
              </p>
              <p>
                La citation &quot;Your report is the Bible&quot; d’un décideur d’une entreprise du S&P 500 est un témoignage d’une puissance exceptionnelle. Pour un trader ou analyste, cette référence établit immédiatement le niveau de qualité et de réputation de la plateforme.
              </p>
              <p>
                L’offre d’essai gratuit de 10 jours (Touch #2) est parfaitement adaptée à un produit data/intelligence. Les traders veulent tester la qualité des données avant de s’engager. En éliminant cette barrière, la séquence convertit des prospects curieux en utilisateurs actifs.
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
                  <strong>Utiliser un témoignage iconique.</strong>{" "}
                  &quot;Your report is the Bible&quot; d’un cadre du S&P 500 est un argument définitif.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer un essai gratuit court.</strong>{" "}
                  10 jours suffisent pour prouver la valeur d’une plateforme de données.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Personnaliser le lien du site web.</strong>{" "}
                  L’URL contenant le nom du prospect montre un effort de personnalisation supplémentaire.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Cibler un marché de niche avec précision.</strong>{" "}
                  Traders et analystes biocarburants = segment ultra-spécifique où la compétition est faible.
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
                  title: "Plateformes d’intelligence marché",
                  desc: "Vous vendez des données, analyses ou insights à un marché de niche. Le modèle s’adapte à tout secteur data.",
                },
                {
                  title: "Ciblage traders et analystes",
                  desc: "Les professionnels de la finance et du trading de matières premières sont votre audience.",
                },
                {
                  title: "Énergies renouvelables et biocarburants",
                  desc: "Si votre solution couvre les marchés renouvelables, cette séquence utilise le bon vocabulaire.",
                },
                {
                  title: "Modèle SaaS avec essai gratuit",
                  desc: "L’essai de 10 jours est un framework applicable à toute plateforme data/intelligence.",
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
                  title: "Fournisseurs de données marché",
                  desc: "Si vous vendez des analyses, rapports ou plateformes d’intelligence marché.",
                },
                {
                  title: "SDRs ciblant les traders et analystes",
                  desc: "Le ton professionnel et les références S&P 500 sont adaptés à ce public.",
                },
                {
                  title: "Éditeurs SaaS dans l’énergie renouvelable",
                  desc: "Adaptez la séquence au vocabulaire spécifique de votre segment énergétique.",
                },
                {
                  title: "Consultants en énergie et commodities",
                  desc: "Si vous conseillez les entreprises sur les marchés de matières premières renouvelables.",
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
