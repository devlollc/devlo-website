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
    "Séquence Cold Email Engagement Employés — 17% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 16 jours pour engagement employés. 225 prospects contactés. 5 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/employee-engagement",
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
    name: "Engagement Employés",
    path: "/insights/cold-email-templates/employee-engagement",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Pourquoi la séquence est-elle limitée à 16 jours ?",
    answer:
      "Les décisions d’engagement employé sont prises plus rapidement que les achats IT ou sécurité. Un VP HR qui voit un besoin d’engagement peut décider en quelques semaines. Étirer la séquence à 40 jours risquerait de perdre le momentum. 7 touches sur 16 jours créent une cadence soutenue sans être intrusive.",
  },
  {
    question:
      "Comment les références clients comme PwC impactent-elles le taux de réponse ?",
    answer:
      "Dans notre expérience, mentionner des clients reconnus dans le premier email augmente le taux de réponse de 25-40% par rapport à un email sans référence. Pour un VP HR, voir que PwC et L’Oréal utilisent la solution élimine le risque perçu. L’important est de citer des entreprises dans la même industrie ou de taille similaire au prospect.",
  },
  {
    question:
      "Comment adapter cette séquence au contexte post-COVID ?",
    answer:
      "Le Touch #7 de cette séquence utilise déjà le contexte COVID comme levier de conversation. Pour l’actualiser, remplacez la référence COVID par les nouveaux défis RH : travail hybride, quiet quitting, rétention des talents. La structure reste identique — seul le contexte change.",
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
      "Notre appel {{firstName}} - Engagement social des employés",
    content: `Bonjour {{firstName}},

Nous ne nous sommes jamais rencontrés, mais notre équipe a pris connaissance des différentes initiatives durables présentées sur le site web de {{ProspectCompanyName}}. Nous en avons conclu que votre entreprise prend très au sérieux son impact sur la communauté et implique son personnel dans des actions citoyennes.
 
[Nom du collègue] et moi-même travaillons chez [ClientCompanyName], une plateforme numérique dédiée à l&apos;engagement social des employés, qui propose des actions de bénévolat, de dons et des défis durables. Voici une photo de notre visioconférence, lors de laquelle nous avons pu en savoir plus sur votre organisation.
 


Nous collaborons avec des centaines d&apos;associations caritatives et d&apos;entreprises telles que PwC, L&apos;Oréal et BNP Paribas pour innover dans leurs programmes.

Pourrions-nous échanger rapidement par téléphone pour voir si [ClientCompanyName] pourrait vous convenir ?

Cordialement,
Charles
 




[ClientCompanyLogo]
Charles Perret
Chargé de compte - [ClientCompanyName]
[ClientCompanyAddress]
[ClientCompanyAddress]
+41 79 758 64 03
[ClientCompanyURL]`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "4 jours après",
    content: `Bonjour {{firstName}},

J'espère que vous allez bien.

Votre boîte de réception doit sans doute être bien remplie, et je tenais à vous recontacter au cas où mon message initial se serait perdu. J'ai pensé que cela vous intéresserait de savoir que nos clients, tels que BNP Paribas, L&apos;Oréal et PwC, ont réorienté leur plateforme de bénévolat d&apos;entreprise pour se concentrer sur les missions virtuelles (et le mois d&apos;août a battu tous les records).

Grâce à notre solution numérique, leurs collaborateurs sont encouragés à participer à de petits gestes de gentillesse, comme aider des personnes âgées à faire leurs courses. Ils peuvent également se connecter à des opportunités virtuelles publiées par leurs partenaires caritatifs pour accompagner en ligne des entrepreneurs migrants, organiser un cours de yoga solidaire ou traduire des documents (veuillez consulter le document ci-joint).

Pourrions-nous trouver un moment pour nous voir, peut-être dans les prochains jours ?

Dans l&apos;attente de votre réponse,

Cordialement,
Charles

{{signature}}`,
  },
  {
    number: 3,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "3 jours après",
    content: `Bonjour {{firstName}}, c&apos;est Charles de [ClientCompanyName]. Ce serait super de se connecter également sur LinkedIn. Je vous ai contacté par e-mail il y a quelques jours au sujet de vos initiatives en matière de développement durable. Prenez soin de vous`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "3 jours après",
    content: `Bonjour {{firstName}},

Pourrions-nous fixer un rendez-vous pour échanger rapidement par téléphone ?

Nous pourrions tirer parti de notre plateforme et améliorer votre programme de RSE tout en impliquant vos collaborateurs dans ce processus.

Si quelqu’un d’autre est mieux placé pour m’aider, je vous serais très reconnaissant de bien vouloir me mettre en relation avec la personne la plus appropriée. Merci d’avance.

Si cela vous intéresse, je vous invite à réserver directement un créneau dans mon agenda pour notre entretien de prise de contact, afin d&apos;éviter les allers-retours si cela vous convient mieux.

Cordialement,
Charles

{{signature}}`,
  },
  {
    number: 5,
    channel: "call",
    label: "Appel téléphonique",
    timing: "4 jours après",
    content: `Démarchage téléphonique
Date d&apos;envoi : 4 jours après le dernier message
Script d&apos;appel :
Si le prospect répond :
Bonjour {{firstName}}, je m'appelle Charles Perret et je travaille chez [ClientCompanyName]. Comment allez-vous ? [...]
Je vous ai contacté par e-mail au sujet de notre solution d&apos;engagement social des employés. Nous accompagnons des entreprises telles que PwC, L&apos;Oréal et BNP Paribas, et je me demandais si cela vous intéresserait d&apos;en savoir plus. [...]
Si oui : 
Très bien, parfait. Je vous propose d&apos;organiser une démonstration lorsque vous serez disponible. Auriez-vous 2 minutes maintenant pour que je vous pose quelques questions afin de mieux cerner votre situation, afin que nous puissions préparer une présentation personnalisée, incluant des exemples de réussite d&apos;entreprises au profil similaire ?
—---—---—---—---—---—---—---—---—---—---—---—---—- -------—---—---—---—---—---—---—-----—---—---—---—- -------------------------
S'ils sont intéressés, 
posez ces questions pour qualifier le prospect :
__________________________________________________________________________________.
__PROTÉGÉ_27__.
__PROTÉGÉ_28__.
S'ils sont qualifiés, posez ces questions afin de personnaliser la démonstration :
__PROTÉGÉ_29__.
__PROTÉGÉ_30__.
__PROTÉGÉ_31__.

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "1 jours après",
    content: `Bonjour {{firstName}},
 
J'ai essayé de vous appeler il y a quelques jours. J'espère que vous allez bien.
 
Vous serez sans doute d&apos;accord avec moi pour dire que la RSE est un vaste sujet, dans lequel une entreprise peut agir dans différents domaines, comme l&apos;installation de panneaux solaires sur un toit, la réduction de son empreinte carbone, etc.
 
La citoyenneté d&apos;entreprise est un domaine que les entreprises ne prennent en compte que de temps à autre, alors qu&apos;il s&apos;agit d&apos;une approche efficace pour faire le bien tout en donnant un rôle actif à vos employés. En mobilisant vos talents, ce n&apos;est plus seulement la direction qui se charge de développer un avenir durable.
 
Je vous invite à regarder cette vidéo YouTube pour en savoir plus sur nos approches descendantes et ascendantes. Elle montre comment la plateforme [ClientCompanyName] met en relation les employés avec les missions publiées par les associations caritatives que vous avez sélectionnées, tout en vous offrant une vue d&apos;ensemble de l&apos;ensemble du processus.
 
Pourriez-vous avoir l&apos;amabilité de transférer mon e-mail si je devais plutôt contacter un autre de vos collègues ?

Cordialement,
Charles

{{signature}}`,
  },
  {
    number: 7,
    channel: "email",
    label: "Email #7",
    timing: "3 jours après",
    content: `Bonjour {{firstName}},

Suite à mes derniers e-mails, j&apos;imagine que votre emploi du temps a quelque peu changé, et peut-être aussi votre activité, compte tenu de tout ce qui s&apos;est passé avec la COVID-19.
 
Malgré l&apos;incertitude, nous aimerions rester positifs et garder une vision optimiste. Certains de nos clients ont réorienté leurs programmes de bénévolat vers des missions virtuelles afin de renforcer l&apos;engagement de leurs employés.
 
Pourrions-nous nous rencontrer pour discuter de la façon dont les choses ont évolué de votre côté et de la manière dont nous pourrions éventuellement vous aider aujourd&apos;hui ou dans un avenir proche ?

Dans l&apos;attente de votre réponse,

Cordialement,
Charles

{{signature}}`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function EmployeeEngagementPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Engagement Employés — 17% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 7 étapes sur 16 jours pour engagement employés.",
            path: "/insights/cold-email-templates/employee-engagement",
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
              {["ENGAGEMENT","MULTICANAL","VP RH & CSR"].map((tag) => (
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
                Séquence cold email pour engagement employés — 17% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 16 jours. 5 emails, 1 appel téléphonique, 1 message LinkedIn. 225 prospects contactés.
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
                value: "225",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "70%",
                label: "Taux d&apos;ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "17%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "20",
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
              5 emails, 1 appel téléphonique, 1 message LinkedIn — sur 16 jours.
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
                Avec 225 prospects et un taux de réponse de 17%, cette séquence de 7 touches sur 16 jours est particulièrement rapide et ciblée. Le cycle court de 16 jours est adapté au monde RH où les décisions d’engagement employé sont souvent prises rapidement, contrairement aux cycles de vente IT qui s’étendent sur des mois.
              </p>
              <p>
                L’utilisation de références clients comme PwC, L’Oréal et BNP Paribas dès le premier email est stratégique. Pour un VP HR, ces noms sont des validations immédiates — si ces entreprises font confiance à la solution, elle mérite au minimum une écoute. Ce principe de validation sociale est amplifié par la photo d’équipe, qui humanise l’approche.
              </p>
              <p>
                La connexion LinkedIn au Touch #3, entre deux emails, crée un effet de présence multi-plateforme. Le prospect voit le nom de l’expéditeur à la fois dans sa boîte mail et sur LinkedIn, ce qui renforce la familiarité et légitime la démarche avant l’appel téléphonique du Touch #5.
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
                  <strong>Condenser la séquence sur 16 jours pour le secteur RH.</strong>{" "}
                  Les décisions d’engagement employé sont plus rapides que les achats IT.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Humaniser avec des photos d’équipe.</strong>{" "}
                  La photo du video call dans le Touch #1 crée un lien personnel immédiat.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Utiliser la vidéo YouTube comme contenu éducatif.</strong>{" "}
                  Le Touch #6 partage une vidéo explicative qui permet au prospect de comprendre la solution à son rythme.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Référencer le contexte COVID pour créer l’urgence.</strong>{" "}
                  Le Touch #7 utilise le contexte de changement pour relancer la conversation.
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
                  title: "Plateformes SaaS d’engagement employé",
                  desc: "Votre solution couvre le volontariat, le mécénat de compétences ou les défis durables. Cette séquence montre comment engager les décideurs RH.",
                },
                {
                  title: "Ciblage VP Human Resources",
                  desc: "Le ton professionnel et les références PwC/L’Oréal/BNP Paribas sont calibrés pour ce niveau de décision.",
                },
                {
                  title: "Cycle de décision rapide (< 3 mois)",
                  desc: "La séquence de 16 jours est adaptée aux décisions d’engagement employé qui ne nécessitent pas de longs processus d’approbation.",
                },
                {
                  title: "Solutions avec impact social mesurable",
                  desc: "Si votre solution permet de suivre l’impact des actions de citoyenneté d’entreprise avec des métriques.",
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
                  title: "Éditeurs SaaS RH et engagement",
                  desc: "Si votre plateforme couvre le volontariat, le bien-être ou l’engagement des employés.",
                },
                {
                  title: "SDRs ciblant les VP RH",
                  desc: "Le script d’appel et les références clients sont prêts à l’emploi pour ce segment.",
                },
                {
                  title: "Consultants RSE et impact social",
                  desc: "Adaptez les références clients et la proposition de valeur à vos propres cas d’usage.",
                },
                {
                  title: "Startups RH avec références enterprise",
                  desc: "Si vous avez des logos clients prestigieux, cette séquence montre comment les utiliser.",
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
