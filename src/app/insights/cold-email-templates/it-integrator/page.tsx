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
    "Séquence Cold Email Intégration IT & Audiovisuel — 69% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 9 étapes sur 30 jours pour intégration it & audiovisuel. 262 prospects contactés. 6 emails, 2 appels téléphoniques, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/it-integrator",
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
    name: "Intégration IT & Audiovisuel",
    path: "/insights/cold-email-templates/it-integrator",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment obtenir un taux de réponse de 69% ?",
    answer:
      "Trois facteurs clés : (1) un ciblage ultra-précis (bureaux d’ingénierie et d’architecture en Suisse romande), (2) une proposition de valeur claire et applicable (accompagnement AV complet), (3) une invitation à déjeuner qui démarque l’approche de tous les autres cold emails. Le marché suisse valorise particulièrement les relations personnelles.",
  },
  {
    question:
      "Pourquoi inviter à déjeuner plutôt qu’à une démo ?",
    answer:
      "Dans le secteur de l’intégration AV en Suisse, la confiance se construit en personne. Un déjeuner élimine la barrière du &quot;call commercial&quot; et crée un espace de conversation égal à égal. Cette technique est particulièrement efficace avec les décideurs IT de PME qui préfèrent un contact humain.",
  },
  {
    question:
      "Comment adapter cette séquence à d’autres secteurs IT ?",
    answer:
      "Gardez la structure (9 touches, 30 jours, 2 appels rapprochés) et adaptez la proposition de valeur. Remplacez &quot;audiovisuel&quot; par votre domaine. L’invitation à déjeuner fonctionne dans tout secteur où la relation humaine est importante. Conservez l’envoi de la brochure après l’appel raté (Touch #5) comme point de contact supplémentaire.",
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
      "projets audiovisuels - {{firstName}} & {{salesRep}}",
    content: `Bonjour {{firstName}},

{{Icebreaker - example: post shared on LinkedIn - Your background is impressive; I visited your LinkedIn profile; As a [JobTitle], is the [subject] important to you?}}. 

De nombreux {{engineering offices; architectural offices}} se sont tournés vers nous pour trouver les meilleures solutions aux problèmes audiovisuels de leurs clients, et j'ai pensé à {{CompanyName}}. 

Notre entreprise vous accompagnera pleinement dans vos projets, vous conseillera sur les dernières innovations et technologies, et répondra à toutes vos questions, telles que :

Qu'en est-il du plan d'élévation, des schémas techniques, des courants forts, des réseaux, du tirage de câbles, etc. ?
Quelles solutions sont utilisées pour mettre en œuvre le travail hybride ?
Comment naviguer entre {{client_ref}}, etc., et assurer leur interopérabilité ?

Nos clients font également appel à nos experts pour leurs projets d'affichage dynamique, de réservation de salles, de domotique, d'installations visuelles interactives, etc.

Si l'intégration audiovisuelle est un sujet essentiel pour vous et vos clients, seriez-vous intéressé par un premier contact ?

Merci pour votre temps et votre réponse.

Cordialement,
{{salesRep}}

PS : J'espère que cette photo vous fera sourire !

{{signature}}`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "3 jours après",
    content: `Bonjour {{firstName}},

J'espère que vous allez bien.

Je souhaiterais vous faire une proposition et vous donner plus de détails.

Nous serions ravis de vous inviter à déjeuner pour faire votre connaissance. Nous sommes impatients d'en savoir plus sur {{CompanyName}}, ainsi que sur vos projets actuels et à venir. 

Depuis 2001, plus de 750 clients ont fait appel à notre équipe de 40 collaborateurs, principalement basée à Gland. Ces derniers temps, les solutions de travail hybrides sont devenues une priorité. Ce serait donc une excellente idée d'aborder ce sujet ensemble.

Cette invitation vous intéresserait-elle ? Ou préférez-vous un entretien téléphonique de 10 à 15 minutes ?

Vous pouvez choisir la date qui vous convient directement dans l'agenda de mon responsable. 

Je vous remercie d'avance pour votre réponse.

Cordialement,
{{salesRep}}

PS : Ma liste de tâches ci-dessous m'a rappelé de vous contacter 😉



{{signature}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "6 jours après",
    content: `Bonjour {{firstName}},
J'espère que vous allez bien.

Je me demandais si ce n'était pas le bon moment ou si nos services n'avaient pas suscité votre intérêt. Est-ce parce que :

Avez-vous déjà un autre partenaire en matière d'antivirus ?
Serait-il préférable de contacter un autre de vos collègues, peut-être {{colleaguename}} ?
Y a-t-il une autre raison ?

L'invitation à déjeuner ensemble que je vous avais adressée dans mon dernier message tient toujours.

Je vous remercie par avance de votre réponse.

Cordialement,
{{salesRep}}
{{signature}}`,
  },
  {
    number: 4,
    channel: "call",
    label: "Appel téléphonique",
    timing: "5 jours après",
    content: `Appel à froid n° 1

Date d'envoi : 5 jours après le dernier message
Script d'appel :
Si le prospect répond :

Bonjour {{firstName}}, c'est {{salesRep}} de [ClientCompanyName]. Comment allez-vous ? … [« Oui, merci, et vous ? »]
Très bien, merci. Je vous ai contacté par e-mail car j’ai vu que vous étiez responsable du {{jobtitle}} chez {{companyName}}. J’ai pensé vous passer un petit coup de fil. Auriez-vous une minute pour en discuter ensemble ?
Si oui :
Nous sommes un intégrateur de systèmes audiovisuels et de technologies de communication : solutions de visioconférence, affichage dynamique, domotique et réservation de salles.

Vous savez comme moi que [...]. [DiscoveryQuestion] ? [Réponse du prospect]

C'est pourquoi je me demandais si vous seriez intéressé(e) par un rendez-vous avec mon responsable ?
__PROTÉGÉ_6____PROTÉGÉ_7____PROTÉGÉ_8____PROTÉGÉ_9____PROTÉGÉ_10____PROTÉGÉ_11____PROTÉGÉ_12____PROTÉGÉ_13____PROTÉGÉ_14____PROTÉGÉ_15____PROTÉGÉ_16____PROTÉGÉ_17____PROTÉGÉ_18__ -------__PROTÉGÉ_19____PROTÉGÉ_20____PROTÉGÉ_21____PROTÉGÉ_22____PROTÉGÉ_23____PROTÉGÉ_24____PROTÉGÉ_25____PROTÉGÉ_26____PROTÉGÉ_27____PROTÉGÉ_28____PROTÉGÉ_29__ -------------------------
S'ils sont intéressés, 
posez ces questions pour qualifier le prospect :
__________________________________________________________________________________.
__________________________________________________________________________________.
__________________________________________________________________________________.
S'ils sont qualifiés, posez ces questions afin de personnaliser la démonstration :
__________________________________________________________________________________.
__________________________________________________________________________________.

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "1 jours après",
    content: `Bonjour {{firstName}},

J'ai essayé de vous joindre par téléphone hier. Pourrais-je vous appeler à un autre moment ? Sinon, je tenterai de vous recontacter dans quelques jours.

Je souhaitais m'entretenir avec vous pour en savoir plus sur vos projets actuels et voir si certaines de nos réalisations présentent des similitudes.

Je vous transmets notre brève brochure. Vous y trouverez plusieurs exemples de réalisations ainsi que des informations supplémentaires qui vous permettront de mieux cerner les types de projets que nous pourrions envisager ensemble.

Bonne journée,
{{salesRep}}

{{signature}}`,
  },
  {
    number: 6,
    channel: "call",
    label: "Appel téléphonique",
    timing: "2 jours après",
    content: `Appel à froid n° 2
Date d'envoi : 2 jours après le dernier contact
Script d'appel : 

(Identique à celui du contact n° 4)`,
  },
  {
    number: 7,
    channel: "email",
    label: "Email #7",
    timing: "1 day after last touch",
    content: `Bonjour {{firstName}},

J'espère que vous allez bien.

J'ai essayé de vous joindre par téléphone hier au sujet de vos projets audiovisuels (mon numéro de portable est le [PhoneNumber]).

Pourrais-je vous appeler à un autre moment ? Sinon, je tenterai de vous recontacter dans quelques jours.

Merci d'avance pour votre réponse.

Cordialement,
{{salesRep}}

{{signature}}`,
  },
  {
    number: 8,
    channel: "email",
    label: "Email #8",
    timing: "3 jours après",
    content: `Bonjour {{firstName}},
 
J'espère que vous allez bien.
 
Si un autre moment vous convient mieux, ou si vous n'êtes pas intéressé par nos services, n'hésitez pas à me le faire savoir.    
 
Ou devrais-je plutôt m'adresser à un autre de vos collègues ? Peut-être {{colleaguename}} ?
 
Je reste à votre disposition si vous avez des questions ou si vous souhaitez discuter de vos projets.
 
Je vous remercie d'avance pour votre réponse et vous souhaite tout le meilleur pour l'avenir.
 
Cordialement,
{{salesRep}}
 
{{signature}}`,
  },
  {
    number: 9,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "1 jours après",
    content: `Demande de connexion sur LinkedIn
Date d'envoi : 1 jour après le dernier message
Contenu : provenant de LinkedIn
Bonjour {{firstName}}, je m'appelle {{salesRep}} et je travaille chez [ClientCompanyName]. Je me réjouis de me connecter avec vous et de découvrir les projets et les idées de {{companyName}} que vous partagez. À bientôt.`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ItIntegratorPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Intégration IT & Audiovisuel — 69% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 9 étapes sur 30 jours pour intégration it & audiovisuel.",
            path: "/insights/cold-email-templates/it-integrator",
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
              {["AUDIOVISUEL","MULTICANAL","DSI & CTO"].map((tag) => (
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
                Séquence cold email pour intégration it & audiovisuel — 69% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                9 étapes sur 30 jours. 6 emails, 2 appels téléphoniques, 1 message LinkedIn. 262 prospects contactés.
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
                value: "262",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "89%",
                label: "Taux d'ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "69%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "16",
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
              Les 9 touches de la séquence
            </h2>
            <p
              className="mx-auto mb-12 max-w-xl text-center text-sm"
              style={{ color: "#666d70" }}
            >
              6 emails, 2 appels téléphoniques, 1 message LinkedIn — sur 30 jours.
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
                262 prospects et un taux de réponse impressionnant de 69% — le plus élevé de toutes nos séquences. Cette performance s’explique par un ciblage très précis (bureaux d’ingénierie et d’architecture) et une proposition de valeur claire : accompagnement complet dans les projets audiovisuels.
              </p>
              <p>
                L’invitation à déjeuner proposée au Touch #2 est un différenciateur majeur. Dans un secteur où les relations professionnelles sont construites sur la confiance et la proximité, proposer une rencontre physique plutôt qu’une démo virtuelle résonne beaucoup plus avec les décideurs IT des PME suisses.
              </p>
              <p>
                Les deux appels téléphoniques (Touch #4 et #6) espacés de seulement 2 jours, entourant un email de suivi (Touch #5), créent une cadence intensive qui fonctionne particulièrement bien dans le secteur de l’intégration audiovisuelle où les décisions sont souvent prises rapidement.
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
                  <strong>Inviter à déjeuner plutôt qu’à une démo.</strong>{" "}
                  Pour les PME suisses, la rencontre physique crée plus de confiance qu’un appel virtuel.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Partager une brochure après l’appel.</strong>{" "}
                  Le Touch #5 envoie la brochure après la tentative d’appel — le prospect a un document à consulter.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Deux appels rapprochés.</strong>{" "}
                  Touch #4 et #6 espacés de 2 jours créent une cadence intensive efficace.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Le taux de réponse de 69% prouve l’efficacité.</strong>{" "}
                  Un ciblage précis + une proposition de valeur claire = résultats exceptionnels.
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
                  title: "Intégration audiovisuelle et IT",
                  desc: "Visioconférence, affichage dynamique, domotique, réservation de salles — votre offre couvre ces domaines.",
                },
                {
                  title: "Ciblage bureaux d’ingénierie et architecture",
                  desc: "Les responsables IT de ces structures sont les décideurs clés pour les projets AV.",
                },
                {
                  title: "PME suisses romandes",
                  desc: "L’invitation à déjeuner et la proximité physique sont des arguments forts en Suisse romande.",
                },
                {
                  title: "Solutions de travail hybride",
                  desc: "Si votre offre adresse les défis du travail hybride (salles de réunion connectées, collaboration à distance).",
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
                  title: "Intégrateurs AV et IT",
                  desc: "Si vous installez et configurez des systèmes audiovisuels et de communication.",
                },
                {
                  title: "SDRs ciblant les responsables IT de PME",
                  desc: "Le script d’appel et l’invitation à déjeuner sont adaptés au marché suisse.",
                },
                {
                  title: "Fournisseurs de solutions de collaboration",
                  desc: "Teams, Zoom, solutions de salles de réunion connectées.",
                },
                {
                  title: "Revendeurs de technologies AV",
                  desc: "Si vous représentez des marques d’équipements audiovisuels professionnels.",
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
