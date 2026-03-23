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
    "Séquence Cold Email Merchandising & Textile — 70% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 30 jours pour merchandising & textile. 285 prospects contactés. 5 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/merchandise-products",
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
    name: "Merchandising & Textile",
    path: "/insights/cold-email-templates/merchandise-products",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment vendre du merchandising aux écoles et universités ?",
    answer:
      "La clé est de simplifier la décision : offrir le développement graphique, gérer la collecte de tailles et les paiements, et livrer directement. Le décideur scolaire ne veut pas de travail supplémentaire. Les références à des institutions prestigieuses (CIO, Montreux Jazz) valident la qualité.",
  },
  {
    question:
      "Les certifications écologiques font-elles vraiment la différence ?",
    answer:
      "Dans le secteur éducatif, absolument. Les écoles et universités sont de plus en plus soucieuses de leur impact environnemental. Mentionner Oeko-Tex et PETA-Approved Vegan dans le premier email différencie immédiatement la proposition de la concurrence qui n’a pas ces certifications.",
  },
  {
    question:
      "Comment personnaliser l’email pour chaque institution ?",
    answer:
      "Recherchez le logo et les couleurs de l’institution, les événements sportifs récents et les associations étudiantes actives. Montrer un exemple de sweatshirt avec le logo de l’institution est le personnalisation la plus efficace — le prospect visualise immédiatement le résultat final.",
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
      "A] {{salutation}} {{lastName}} - notre appel",
    content: `Bonjour {{salutation}} {{lastName}},

{{icebreaker}} 

La promotion de {{companyname}} et la mise en avant de l&apos;appartenance à votre établissement sont sans aucun doute des thèmes d&apos;actualité. Nos partenaires, tels que [ClientCustomer], mais aussi des lycées et des écoles internationales, se sont tournés vers nous dans ce but. 

Ils bénéficient de nos services de merchandising pour des textiles et des objets personnalisés selon leur image de marque. Leurs élèves peuvent se procurer divers articles tels que des sweatshirts, des t-shirts, des blocs-notes et des équipements sportifs pour le basket, le football, etc.

Plus besoin de vous occuper de tâches fastidieuses et chronophages comme la collecte des tailles, les paiements ou les livraisons. Nos partenaires apprécient particulièrement notre plateforme qui permet à leurs clients de précommander et d’être livrés directement à leur domicile ou à leur établissement.

De plus, tout est produit dans le respect des personnes et de la planète : coton 100 % biologique, matériaux recyclés et certifications telles que Oeko-Tex ou PETA-Approved Vegan.

Souhaitez-vous en discuter ensemble pendant 15 minutes lors d&apos;un premier contact par téléphone {% assign today = "now" | date: "%A" %}{% case today %}{% when "Monday" %}demain ou mercredi{% when "Tuesday" %}demain ou jeudi{% when "Wednesday" %}demain ou vendredi{% when "Thursday" %}demain ou lundi{% when "Friday" %}lundi ou mardi matin{% endcase %}?

Merci d&apos;avance pour votre réponse.

Cordialement,
Janice

PS : Voici quelques exemples, et ci-dessous une illustration d&apos;un sweat-shirt de marque avec le logo [ClientCustomer] [ClientCustomer]

{{signature}}`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "7 jours après",
    content: `Bonjour {{salutation}} {{lastName}},

J'espère que vous allez bien.

L&apos;image de marque de {{companyname}} étant importante, j&apos;aimerais vous faire une proposition : la conception graphique personnalisée de vos articles vous serait entièrement offerte. 

À l&apos;instar de nos partenaires, vous et vos collègues serez accompagnés et conseillés par l&apos;un de nos experts. Tout est mis en œuvre pour vous faciliter la vie. Vous serez sans aucun doute surpris de découvrir la grande qualité de nos produits, leur faible impact écologique et les dernières technologies disponibles : sérigraphie, broderie, spécificité des produits (végan), etc.

Bien que de nombreux établissements du secteur de l&apos;éducation fassent appel à nos services, d&apos;autres organisations telles que le [ClientCustomer], le Comité International Olympique et le Montreux Jazz Festival nous font également confiance depuis plus de 20 ans.

Souhaitez-vous en discuter avec nous ? Si oui, aimeriez-vous recevoir 2 ou 3 propositions pour une visioconférence de 45 minutes [Client_FirstName] (vous pouvez également choisir une date directement dans son agenda) ?

Merci d&apos;avance pour votre réponse,

Cordialement,
{{salesRep}}

PS : Voici un petit café virtuel pour vous aider à poursuivre votre journée 🙂 

{{signature}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "6 jours après",
    content: `E-mail 3 - Contacter un autre collègue d&apos;ElonMusk / suivi
Date d&apos;envoi : 6 jours après le dernier message
Objet : identique au précédent
Date :

Bonjour {{salutation}} {{lastName}},

J'espère que vous allez bien. 

Dois-je écrire à votre collègue {{colleaguename}} ?

Ou bien
travaillez-vous déjà avec un autre fournisseur pour votre merchandising
La rentrée scolaire est une période chargée et ce n&apos;est pas le meilleur moment
une autre raison, peut-être ?

Veuillez noter que la proposition de mon dernier message reste d&apos;actualité.

Merci d&apos;avance pour votre réponse,

Cordialement,
{{salesRep}}

PS : Ma liste de tâches ci-dessous m'a rappelé de 😉 J'espère que cela fera




!`,
  },
  {
    number: 4,
    channel: "call",
    label: "Appel téléphonique",
    timing: "2 jours après",
    content: `Appel à froid
Réalisation : 2 jours après le dernier message
Script d&apos;appel :
Si le prospect répond :
Bonjour {{salutation}} {{lastName}}, je m'appelle {{salesRep}} et je travaille chez [ClientCompanyName]. Je vous ai contacté par e-mail au sujet de nos services de merchandising destinés à vos élèves, notamment pour renforcer l&apos;image de votre établissement. Auriez-vous 2 minutes à nous accorder ?
Si oui :
Plusieurs établissements d&apos;enseignement, tels que [ClientCustomer], ainsi que des écoles publiques, travaillent avec nous pour proposer à leurs élèves des vêtements et des objets personnalisés avec leur logo. Tout est fait pour leur simplifier la vie, et ils n&apos;ont rien à faire de leur côté, de la conception graphique à la commande et au paiement, en passant par la livraison. De plus, tout est produit dans le respect des personnes et de la planète : 100 % coton biologique avec des matériaux recyclés et certifiés.
Est-ce quelque chose que vous faites déjà ? [...]
D'accord, et seriez-vous intéressé(e) pour en discuter avec [Client_FirstName] lors d&apos;une visioconférence afin qu&apos;il puisse vous en dire plus et vous présenter une ou deux études de cas de nos partenaires ?
—---—---—---—---—---—---—---—---—---—---—---—---—- -------__PROTÉGÉ_19____PROTÉGÉ_20____PROTÉGÉ_21____PROTÉGÉ_22____PROTÉGÉ_23____PROTÉGÉ_24____PROTÉGÉ_25____PROTÉGÉ_26____PROTÉGÉ_27____PROTÉGÉ_28____PROTÉGÉ_29__ -------------------------
S'ils sont intéressés, 
posez ces questions pour évaluer le prospect :
__________________________________________________________________________________.
__________________________________________________________________________________.
__________________________________________________________________________________.

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "1 jours après",
    content: `Bonjour {{salutation}} {{lastName}},

Vous devriez avoir reçu un appel manqué de ma part hier. Mon numéro de portable est le [PhoneNumber]. 

Serait-il possible de vous rappeler {% assign today = "now" | date: "%A" %}{% case today %}{% when "Monday" %}demain ou mercredi{% when "Tuesday" %}demain ou jeudi{% when "Wednesday" %}demain ou vendredi{% when "Thursday" %}demain ou lundi{% when "Friday" %}lundi ou mardi matin{% when "Saturday" %}la semaine prochaine{% when "Sunday" %}la semaine prochaine{% endcase %}?

Merci d&apos;avance pour votre réponse,

Cordialement,
{{salesRep}}
 
{{signature}}`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "4 jours après",
    content: `Bonjour {{salutation}} {{lastName}},
 
Pourriez-vous m'indiquer si c&apos;est votre collègue {{colleaguename}} que je dois contacter ?
 
Si un autre moment vous convient mieux, ou si vous n&apos;êtes pas intéressé(e) par les avantages que pourraient tirer votre établissement et vos étudiants de vêtements personnalisés et d&apos;autres articles, n&apos;hésitez pas à me le faire savoir.
 
Je vous souhaite tout le meilleur pour l&apos;avenir.
 
Cordialement,
{{salesRep}}
 
{{signature}}`,
  },
  {
    number: 7,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "0 jours après",
    content: `Demande de connexion sur LinkedIn
Date d&apos;envoi : 0 jour après le dernier message
Envoyé depuis le compte LinkedIn de notre client (le PDG)
Bonjour {{salutation}} {{lastName}}, je suis [Client_FirstName] de [ClientCompanyName]. Mon collègue {{salesRep}} vous a contacté pour discuter de la commercialisation de vos articles textiles et personnalisés sous la marque {{companyName}}. J'ai hâte d&apos;échanger avec vous. À bientôt, j&apos;espère`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function MerchandiseProductsPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Merchandising & Textile — 70% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 7 étapes sur 30 jours pour merchandising & textile.",
            path: "/insights/cold-email-templates/merchandise-products",
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
              {["MERCHANDISING","MULTICANAL","ÉDUCATION"].map((tag) => (
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
                Séquence cold email pour merchandising & textile — 70% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 30 jours. 5 emails, 1 appel téléphonique, 1 message LinkedIn. 285 prospects contactés.
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
                value: "285",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "N/A",
                label: "Taux d&apos;ouverture",
                bg: "#9ca3af",
                text: "#ffffff",
              },
              {
                value: "70%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "23",
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
                285 prospects et 70% de taux de réponse — cette séquence merchandising ciblant les universités et écoles privées performe grâce à une proposition visuellement attrayante. Les exemples concrets de sweatshirts, t-shirts et équipements sportifs personnalisés parlent immédiatement aux décideurs éducatifs.
              </p>
              <p>
                Le Touch #2 combine plusieurs leviers psychologiques : l’offre de développement graphique gratuit, les références au Comité International Olympique et au Montreux Jazz Festival, et la mise en avant des certifications écologiques. Cette combinaison répond aux trois préoccupations d’un décideur scolaire : coût, prestige et responsabilité environnementale.
              </p>
              <p>
                L’engagement 100% coton biologique, matériaux recyclés et certifications Oeko-Tex ou PETA-Approved Vegan différencie cette proposition dans un marché où les institutions éducatives sont de plus en plus soucieuses de leur impact environnemental.
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
                  <strong>Offrir le développement graphique gratuitement.</strong>{" "}
                  Cette offre élimine la barrière financière initiale et démontre la confiance.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Référencer le CIO et le Montreux Jazz Festival.</strong>{" "}
                  Des clients prestigieux rassurent les institutions éducatives.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Mettre en avant les certifications écologiques.</strong>{" "}
                  Oeko-Tex et PETA-Approved Vegan répondent aux préoccupations RSE des écoles.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer des créneaux dynamiques.</strong>{" "}
                  L’utilisation de variables temporelles (&quot;demain ou mercredi&quot;) facilite la prise de rendez-vous.
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
                  title: "Services de merchandising et textile personnalisé",
                  desc: "Votre entreprise propose des vêtements, objets ou équipements personnalisés aux couleurs d’une marque.",
                },
                {
                  title: "Ciblage institutions éducatives",
                  desc: "Universités, écoles privées, hautes écoles, comités étudiants — le marché éducatif est votre cible.",
                },
                {
                  title: "Plateforme e-commerce en marque blanche",
                  desc: "Si votre solution inclut une plateforme de commande en ligne personnalisée pour chaque client.",
                },
                {
                  title: "Propositions éco-responsables",
                  desc: "Coton biologique, matériaux recyclés et certifications sont des différenciateurs dans ce marché.",
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
                  title: "Entreprises de merchandising éco-responsable",
                  desc: "Si votre offre combine personnalisation et engagement environnemental.",
                },
                {
                  title: "SDRs ciblant les institutions éducatives",
                  desc: "Les templates sont adaptés aux décideurs scolaires et universitaires.",
                },
                {
                  title: "Fournisseurs de vêtements d’entreprise",
                  desc: "Adaptez la séquence à votre offre de vêtements corporatifs personnalisés.",
                },
                {
                  title: "Plateformes e-commerce B2B",
                  desc: "Si votre solution inclut une boutique en ligne personnalisée par client.",
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
