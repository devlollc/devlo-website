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
    "Séquence Cold Email Formation & Développement — 45% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 40 jours pour formation & développement. 275 prospects contactés. 5 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/learning-development",
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
    name: "Formation & Développement",
    path: "/insights/cold-email-templates/learning-development",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Quel est le meilleur moment pour appeler un responsable L&D ?",
    answer:
      "D’après nos campagnes, le meilleur créneau est entre 9h et 10h30, du mardi au jeudi. Les responsables formation sont souvent en sessions de formation l’après-midi et en planification le lundi. Le vendredi est à éviter. Dans cette séquence, l’appel arrive au Touch #4 après 3 emails — le prospect connaît déjà le nom de l’expéditeur.",
  },
  {
    question:
      "Comment justifier le prix d’une formation L&D ?",
    answer:
      "La séquence contourne cette objection en proposant d’abord un échange de &quot;best practices&quot; sans engagement. Le prix n’est pas discuté dans la séquence mais plutôt lors du call de découverte. La clé : le Touch #2 mentionne les case studies qui démontrent le ROI de la formation, ce qui prépare le terrain pour la conversation budgétaire.",
  },
  {
    question:
      "Comment personnaliser cette séquence pour mon secteur ?",
    answer:
      "Remplacez &quot;Top 20 in leadership training&quot; par votre propre reconnaissance sectorielle. Adaptez les case studies (Touch #6) à votre industrie. Gardez la structure et le timing identiques — ils ont été optimisés sur 275 envois. La proposition LinkedIn du Touch #7 doit venir du dirigeant de votre entreprise pour maximiser la crédibilité.",
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
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},

{{Icebreaker}}

Mes recherches m'ont permis de constater que vous gérez le développement des compétences de centaines de personnes chez {{companyname}}. Je suppose notamment que l&apos;accent est mis sur les compétences en leadership, en communication et en animation.

Des dizaines d&apos;entreprises font confiance à [ClientCompanyName] pour permettre à leurs collaborateurs de s&apos;épanouir et de se développer dans plus de 30 pays. Dans ce monde post-Covid, le monde des affaires est en constante évolution. Les collaborateurs ont besoin de se perfectionner et de se reconvertir régulièrement pour être efficaces dans leurs fonctions.

En Suisse, nous concevons et dispensons des formations en allemand, en français et en anglais depuis 2002.

Ce serait formidable de vous rencontrer à {{city}} ou par vidéoconférence pour en discuter ensemble.

Cela vous intéresse-t-il, ou suis-je à côté de la plaque ?

Cordialement,
[Client_FirstName]

{{signature}}`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "7 jours après",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},

Je vous écris à propos de mon dernier e-mail : j&apos;ai pensé que vous souhaiteriez peut-être avoir un peu plus de contexte.

Training Industry a classé [ClientCompanyName] parmi les 20 meilleures entreprises reconnues comme les meilleurs prestataires de formation au leadership.

Nos clients apprécient nos solutions car elles sont hybrides, interactives et centrées sur l&apos;apprenant. Vos collaborateurs, où qu&apos;ils se trouvent dans le monde, peuvent véritablement s&apos;épanouir grâce à notre approche pédagogique solide, qui s&apos;appuie sur des décennies d&apos;expérience et d&apos;innovation.

Parmi nos différentes solutions d&apos;apprentissage, la plupart de nos clients apprécient [ClientSolution] : https://www.youtube.com/

Ce serait formidable d&apos;en savoir plus sur vos futures initiatives visant à aider vos collaborateurs dans leur quotidien et d&apos;échanger nos meilleures pratiques.

Cela vous intéresse-t-il ?

Cordialement,
[Client_FirstName]

P.S. : Dites-moi si cette situation vous semble familière 😄



















{{signature}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "5 jours après",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},
Je comprends que vous soyez très occupé. Je ne voudrais pas passer à côté de l&apos;occasion de travailler ensemble : devrais-je contacter quelqu&apos;un d&apos;autre au sein de votre organisation ?
Peut-être votre collègue {{colleaguename1}} ou {{colleaguename2}} ?

Cordialement,
[Client_FirstName]

PS : Voici un petit café virtuel pour vous aider à passer une bonne journée :) !


{{signature}}`,
  },
  {
    number: 4,
    channel: "call",
    label: "Appel téléphonique",
    timing: "3 jours après",
    content: `Appel à froid n°1
Date d&apos;envoi : 3 jours après le dernier message
Si le prospect répond :
« Bonjour, c&apos;est John Doe. »
 
Bonjour {{firstname}}, je suis {{salesRep}} de [ClientCompanyName]. Comment allez-vous ?
 
« Je vais bien. »

Notre directeur général [Director_FirstName] vous a contacté par e-mail (au sujet de votre programme de formation et développement). Cela vous dit quelque chose ?
          ↙                                                   ↓         
« Oui »
« Non »
Voir ci-dessous
↘
Il vous a contacté car vous occupez le poste de {{JobTitle}} chez {{CompanyName}}. Nous travaillons pour [ClientCompanyName], qui figure parmi les 20 meilleures entreprises dans le domaine du développement du leadership.

Je me demandais si vous auriez une minute pour en discuter ?
          ↙                                                      ↓                                       
« Oui »
« Je n&apos;ai pas le temps pour le moment, je suis sur le point d&apos;entrer en réunion »
Voir ci-dessous


↘
Oh d&apos;accord, pourrais-je vous rappeler demain matin vers 10 h ?

« Oui, ça me convient »

D'accord, merci. Vous recevrez une invitation. Bonne réunion et à demain. [FIN]
Pour vous donner un peu de contexte,
(Si ce n&apos;est pas déjà dit : [ClientCompanyName] a été classée parmi les 20 meilleures entreprises dans le domaine du développement du leadership. Des centaines d&apos;entreprises nous font confiance pour permettre à leurs talents de s&apos;épanouir grâce à différentes solutions d&apos;apprentissage. C'est pourquoi [Client_FirstName] serait ravi de vous rencontrer et de partager les meilleures pratiques afin que vous puissiez peut-être vous inspirer de ce que nous faisons pour votre programme de formation et développement.

Cela vous intéresse-t-il ?

« Oui »
Voir ci-dessous
↘

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "0 jours après",    subject:
      "Notre conversation téléphonique",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},

Je m’appelle {{salesRep}} et je travaille avec [ClientName] chez [ClientCompanyName].

Je n’ai malheureusement pas réussi à vous joindre aujourd’hui. Je souhaitais échanger quelques mots avec vous au sujet de la proposition de notre directeur général.

L&apos;idée est de discuter de vos futures initiatives de perfectionnement et de reconversion professionnelle afin d&apos;aider vos collaborateurs dans leur quotidien. Nous pourrions échanger nos meilleures pratiques. 

Pourrions-nous en discuter ensemble dans les prochains jours lors d&apos;un bref appel téléphonique ?

Cordialement,
{{salesRep}}

{{signature}}`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "4 jours après",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},

J'espère que vous allez bien.

Nous avons essayé de vous contacter à plusieurs reprises, et si vous ne souhaitez pas en discuter, c&apos;est tout à fait compréhensible.

Vous devez être très occupé, mais je suis convaincu que vous seriez agréablement surpris de voir ce que nos clients ont mis en place. À ce propos, vous pouvez consulter ces études de cas pour vous faire une meilleure idée :

[ClientsCustomer] souhaitait doter ses 5 000 managers à travers le monde des compétences, des connaissances et des comportements nécessaires pour mieux comprendre et assumer leur rôle dans les nouveaux processus de gestion des talents

[ClientsCustomer] souhaitait accompagner ses responsables pharmaciens dans leur nouveau rôle de gestion

 Nous serions ravis de vous mettre en relation avec nos clients afin que vous puissiez entendre leur témoignage. Mais avant cela, que diriez-vous d&apos;un entretien ?

Ou devrais-je vous contacter plus tard dans l&apos;année ?

Cordialement,
{{salesRep}}`,
  },
  {
    number: 7,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "5 days after Touch#4 - Call for cold#1",
    content: `Demande de connexion LinkedIn
Date d&apos;envoi : 5 jours après le Contact n° 4 - Premier appel à froid
Contenu : message envoyé sur LinkedIn (depuis le compte du client)

{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}}, [FirstNameofClient] de [ClientCompanyName}. Je serais ravi de me connecter avec vous pour partager les meilleures pratiques concernant nos solutions d&apos;apprentissage innovantes afin de faire évoluer et de développer vos collaborateurs.`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function LearningDevelopmentPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Formation & Développement — 45% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 7 étapes sur 40 jours pour formation & développement.",
            path: "/insights/cold-email-templates/learning-development",
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
              {["FORMATION","MULTICANAL","L&D LEADERS"].map((tag) => (
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
                Séquence cold email pour formation & développement — 45% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 40 jours. 5 emails, 1 appel téléphonique, 1 message LinkedIn. 275 prospects contactés.
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
                value: "275",
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
                value: "45%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "14",
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
              5 emails, 1 appel téléphonique, 1 message LinkedIn — sur 40 jours.
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
                Avec 275 prospects contactés et un taux de réponse de 45% sur 40 jours, cette séquence est un modèle d’efficacité dans le secteur de la formation. Le taux d’ouverture de 73% confirme que les sujets d’email sont bien calibrés pour les professionnels L&D.
              </p>
              <p>
                Le positionnement &quot;Top 20 companies in leadership training&quot; apporte une crédibilité immédiate. Pour un responsable formation, cette reconnaissance par Training Industry est un signal fort. Elle est introduite au Touch #2 pour renforcer l’intérêt après le premier email qui établit le contact.
              </p>
              <p>
                Le script d’appel du Touch #4 est remarquablement détaillé, avec des arbres de décision pour chaque scénario — prospect intéressé, pas le bon interlocuteur, pas le temps. Cette préparation minutieuse explique le taux de conversion élevé : le commercial ne laisse aucune objection sans réponse.
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
                  <strong>Utiliser des reconnaissances sectorielles.</strong>{" "}
                  Le classement Top 20 de Training Industry est un argument d’autorité irréfutable pour un acheteur L&D.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Préparer un script d’appel détaillé.</strong>{" "}
                  L’arbre de décision du cold call couvre chaque scénario possible.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer le contact du collègue avec deux noms.</strong>{" "}
                  Nommer deux collègues spécifiques force une réponse plus qu’un générique &quot;quelqu’un d’autre&quot;.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Partager des case studies en fin de séquence.</strong>{" "}
                  Les études de cas au Touch #6 offrent une dernière chance de convaincre avec des preuves concrètes.
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
                  title: "Organismes de formation L&D",
                  desc: "Vous proposez du leadership development, communication skills ou management training. Le modèle est directement applicable.",
                },
                {
                  title: "Ciblage L&D leaders multinationaux",
                  desc: "Les décideurs formation dans des entreprises présentes dans 30+ pays sont votre cible idéale.",
                },
                {
                  title: "Solutions blended learning",
                  desc: "Si votre offre combine présentiel, virtuel et digital learning, cette séquence met en valeur cette flexibilité.",
                },
                {
                  title: "Vente de services en Suisse romande",
                  desc: "Le contexte multilingue (DE/FR/EN) et la présence locale sont des arguments clés dans la séquence.",
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
                  title: "Organismes de formation certifiés",
                  desc: "Si vous êtes reconnu dans le leadership development ou le management training.",
                },
                {
                  title: "SDRs ciblant les responsables L&D",
                  desc: "Le script d’appel détaillé et la gestion des objections sont directement utilisables.",
                },
                {
                  title: "Plateformes de digital learning",
                  desc: "Si votre offre combine modules digitaux et formation présentielle.",
                },
                {
                  title: "Éditeurs de contenu pédagogique",
                  desc: "Adaptez la séquence à vos propres solutions d’apprentissage en ligne.",
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
