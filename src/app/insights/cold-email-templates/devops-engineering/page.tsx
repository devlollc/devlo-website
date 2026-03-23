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
    "Séquence Cold Email DevOps & Cloud — 15% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 40 jours pour devops & cloud. 369 prospects contactés. 5 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/devops-engineering",
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
    name: "DevOps & Cloud",
    path: "/insights/cold-email-templates/devops-engineering",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment capter l’attention d’un décideur DevOps ?",
    answer:
      "Le vocabulaire technique précis est essentiel. Distinguer CDEs de DaaS et VDIs dans le premier email démontre une expertise que les DevOps leaders respectent. Mentionner des technologies spécifiques (GitHub Codespaces au Touch #6) et des clients reconnus comme Fortune 500 companies établit la crédibilité.",
  },
  {
    question:
      "Pourquoi un pilote de 45 jours ?",
    answer:
      "Les décideurs DevOps veulent tester dans leur propre environnement avant de s’engager. 45 jours permettent de voir l’impact sur l’onboarding des développeurs, la réduction des coûts de maintenance et la sécurité. C’est suffisamment long pour des résultats significatifs, assez court pour maintenir l’urgence.",
  },
  {
    question:
      "Comment personnaliser le dashboard pour chaque prospect ?",
    answer:
      "Créez un template de dashboard avec le logo et le nom de l’entreprise du prospect. Cela prend 5 minutes par prospect mais augmente le taux de réponse de 3x. Le prospect visualise immédiatement ce que la solution donnerait dans son contexte, ce qui est plus puissant qu’une démo générique.",
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
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}}, {{linkedinnote}}.

La note LinkedIn commence ainsi :
« Votre publication LinkedIn concernant…  
Votre profil LinkedIn indique que…
Votre interview OU votre article OU votre billet de blog…
Mon collègue Charles m’a parlé de…
… Je suis ravi de me connecter avec vous. [Client_Name] »
Si la demande de connexion LinkedIn est acceptée, le message suivant est envoyé 7 jours plus tard :
Bonjour {{firstName}}, mon collègue {{salesRep}}  vous a envoyé un e-mail.
Vous occupez-vous de solutions [ProductName] auto-hébergées qui pourraient intéresser {{companyName}} ?
[ClientCustomer]  et plusieurs entreprises du classement Fortune 500 utilisent notre solution, tout comme des entreprises telles que {{company name}}.
Elles accélèrent l'intégration de leurs équipes de développement logiciel sur site, à proximité ou offshore. Et elles se tournent vers notre solution car c'est la première plateforme CDE à offrir à la fois productivité et sécurité des données.
Si la demande de connexion LinkedIn est acceptée, le message suivant est envoyé 21 jours plus tard :
Bonjour {{firstName}}, vaut-il mieux contacter {{colleaguename1}} ou {{colleaguename2}} pour discuter de l'expérience développeur, de la productivité, de la gestion des ordinateurs portables et des coûts de conformité, etc. ?`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Jour 1",    subject:
      "notre appel {{firstName}}",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},
A] {{icebreaker}}.
Mes recherches montrent que vous dirigez [ProductName].
B] Mes recherches indiquent que vous, {{colleaguename1}} et {{colleaguename2}}, dirigez [ProductName].
Nos clients, des entreprises telles que [ClientCustomer], font confiance à notre solution pour améliorer la productivité et l'expérience de codage de leurs développeurs. Les équipes internes et externes travaillent sur des environnements de développement cloud auto-hébergés (CDE).
Contrairement au DaaS ou aux VDI, les CDE sont des environnements Linux de développement préconfigurés comprenant tous les outils, bibliothèques, dépendances et fonctionnalités de sécurité.
Les CDE de [ClientCompanyName] sont les premiers environnements de développement sécurisés, standardisés et prêts à l'emploi. Entre autres :
Le temps d'intégration des développeurs a été réduit de plusieurs jours à quelques minutes
Les coûts de gestion des ordinateurs portables et de mise en conformité ont été réduits de 50 %
L'ensemble de l'environnement de développement est désormais sécurisé
L'idée d'avoir un peu plus de contexte lors d'un appel vous parle-t-elle, ou suis-je à côté de la plaque ?

PS - Version A{{firstName}}, cela vous dit quelque chose ?

  {{signature}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "7 jours après",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},
Que pensez-vous de ma dernière suggestion, qui consiste à voir comment nos clients concilient productivité des développeurs et sécurité ?
L'idée est de nous rencontrer pour un premier entretien (sans engagement).
De plus, l'offre spéciale {année} permet à [ProductName] de constater par eux-mêmes, dans leur propre environnement, qu'il n'est pas nécessaire de sacrifier l'efficacité au nom de la sécurité. 
Ce projet pilote de 45 jours aide :
les équipes DevOps à garantir la productivité et le confort de leurs développeurs
les RSSI à réduire les risques liés au développement logiciel ({{colleaguename3}}?)
aux DSI de réduire les coûts tout en garantissant la conformité ({{colleaguename4}}?)
PS : L'un des avantages que nos clients apprécient le plus est l'accès à des informations en temps réel. Ils ont une vue d'ensemble de tous les aspects de leur [ProductName], comme dans le tableau de bord que j'ai créé pour {{companyname}} ci-dessous :



{{signature}}`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "5 jours après",    subject:
      "Discutez avec {{colleaguename1}} ou {{colleaguename2}}",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},
Vaut-il mieux contacter votre collègue {{colleaguename1}} ou {{colleaguename2}} pour discuter de l'infrastructure DevOps, de l'efficacité du développement de code et de la sécurité des ressources de données ?
Ou peut-être quelqu'un d'autre ?
Je comprends que vous soyez occupé, mais il serait dommage de ne pas voir s'il y a des possibilités d'amélioration chez {{companyName}} grâce à l'utilisation d'environnements de développement dans le cloud.
Merci

PS : Ma liste de tâches ci-dessous m'a rappelé de vous écrire 😉

{{signature}}`,
  },
  {
    number: 5,
    channel: "call",
    label: "Appel téléphonique",
    timing: "3 jours après",
    content: `Appel à froid n° 1
Date d'envoi : 3 jours après le dernier message
Si le prospect répond :
« John Doe à l'appareil »
 
Bonjour John, je suis {{salesRep}} de {clientCompanyName}. Comment allez-vous ?
 
« Je vais bien »

Je vous ai contacté par e-mail au sujet de 

(Si le marché était un peu plus mature)
des conteneurs en ligne pour les activités de développement de code afin de garantir la productivité et le confort des développeurs
des environnements Linux de développement préconfigurés et auto-hébergés

Nous améliorons l'efficacité, la sécurité et la gouvernance de l'ensemble de votre processus de développement d'applications tout en réduisant les coûts de gestion.

Ce qui est reconnu dans le rapport {clientRecognition} de cette année.

Avez-vous une minute pour en discuter ensemble ?
                                
« Oui »
« Je n'ai pas le temps pour l'instant, je suis sur le point d'entrer en réunion »
Voir ci-dessous


↘
Oh d'accord, pourrais-je vous rappeler demain matin vers 10 h ?

« Oui, ça me convient »

D'accord, merci. Vous recevrez une invitation. Bonne réunion et à demain. [END]
Pour vous donner un peu de contexte, 
(Si ce n'est pas déjà dit : à confirmer

Cela vous intéresse-t-il ? 

« Oui »
Voir ci-dessous
↘
« Non, je ne suis pas la bonne personne » 


à confirmer
           ↙                                                      ↓                                       
« Oui »
Voir ci-dessous
↘
à confirmer

Serait-il judicieux d'organiser une première réunion tous ensemble pour discuter et échanger sur les meilleures pratiques, sans engagement, bien sûr ? [Obtenir les coordonnées]

Et pour l'instant, quels sont les projets dont vous avez la supervision pour aider vos collègues dans leur travail ?

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "0 jours après",    subject:
      "Notre conversation téléphonique",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},

J'ai essayé de t'appeler aujourd'hui [PhoneNumber].

Vous connaissez sans doute GitHub Codespaces, alors vous serez peut-être intéressé de découvrir comment [ClientCompanyName] est l'alternative auto-hébergée la plus sécurisée pour gérer les environnements de développement.

Un café virtuel avec un peu plus de contexte vous intéresse-t-il ?



{{signature}}`,
  },
  {
    number: 7,
    channel: "email",
    label: "Email #7",
    timing: "4 jours après",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},

Serait-il judicieux de contacter {{colleaguename3}} ou {{colleaguename4}}, étant donné que notre environnement de développement cloud est la première solution axée sur la sécurité des infrastructures ?

Notre {clientRole} {clientName} et moi-même avons essayé de vous contacter à plusieurs reprises.
Nous avons pensé que vous seriez peut-être intéressé de savoir comment nos clients :
améliorent l'expérience de leurs développeurs (il ne leur faut plus qu'une minute pour les intégrer) grâce à des environnements de développement Linux prêts à l'emploi qui fonctionnent dans n'importe quel navigateur
contrôlent les risques d'exfiltration de données et l'accès aux ressources
réalisent des économies de 30 à 50 % en passant au CDE

Si cela ne vous intéresse pas, merci de me le faire savoir, c'est tout à fait compréhensible.

Ou devrais-je vous recontacter au début de l'année prochaine ?

Cordialement,
{{signature}}`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function DevopsEngineeringPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email DevOps & Cloud — 15% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 7 étapes sur 40 jours pour devops & cloud.",
            path: "/insights/cold-email-templates/devops-engineering",
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
              {["DEVOPS","MULTICANAL","CTO & CISO"].map((tag) => (
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
                Séquence cold email pour devops & cloud — 15% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 40 jours. 5 emails, 1 appel téléphonique, 1 message LinkedIn. 369 prospects contactés.
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
                value: "369",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "58%",
                label: "Taux d'ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "15%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "6",
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
                369 prospects contactés avec un taux de réponse de 15% dans le secteur DevOps. Le taux d’ouverture de 58% est typique pour ce segment technique où les décideurs sont sollicités quotidiennement. La séquence de 7 touches sur 40 jours laisse le temps aux responsables techniques de consulter leurs équipes avant de répondre.
              </p>
              <p>
                Le positionnement technique est précis : la distinction entre CDEs, DaaS et VDIs dans le premier email démontre immédiatement une expertise technique. Pour un DevOps leader, cette connaissance du vocabulaire est un signal de crédibilité qui différencie le message des centaines d’emails de vendeurs généralistes.
              </p>
              <p>
                La personnalisation du dashboard avec le nom de l’entreprise du prospect (Touch #3) est une technique de &quot;show, don’t tell&quot; remarquablement efficace. Plutôt que de décrire les bénéfices, le prospect visualise directement ce que la solution donnerait dans son contexte.
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
                  <strong>Se positionner techniquement dès le premier email.</strong>{" "}
                  Distinguer CDEs, DaaS et VDIs démontre une expertise que les décideurs DevOps respectent.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Personnaliser le dashboard avec le nom du prospect.</strong>{" "}
                  Le &quot;show, don’t tell&quot; est plus puissant qu’une liste de fonctionnalités.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer un pilote de 45 jours.</strong>{" "}
                  Pour un DevOps leader, tester dans son propre environnement est le seul argument valable.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Cibler plusieurs décideurs (DevOps + CISO + CIO).</strong>{" "}
                  La mention de 4 collègues différents augmente les chances d’atteindre le bon interlocuteur.
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
                  title: "Solutions DevOps et Cloud Development",
                  desc: "Votre produit adresse les environnements de développement, la sécurité du code ou l’infrastructure dev.",
                },
                {
                  title: "Ciblage CTO, VP Engineering et CISO",
                  desc: "La séquence cible simultanément les responsables DevOps, sécurité et infrastructure.",
                },
                {
                  title: "Entreprises avec équipes nearshore/offshore",
                  desc: "Si votre solution résout les problèmes de productivité et de sécurité des équipes distribuées.",
                },
                {
                  title: "Vente avec essai / pilote",
                  desc: "Le pilote de 45 jours est un modèle applicable à toute solution DevOps/infrastructure.",
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
                  title: "Éditeurs DevOps et cloud",
                  desc: "Si votre solution couvre les environnements de développement, la sécurité ou l’infrastructure.",
                },
                {
                  title: "SDRs ciblant les équipes d’ingénierie",
                  desc: "Le vocabulaire technique et les scripts d’appel sont calibrés pour les DevOps leaders.",
                },
                {
                  title: "Startups de developer experience",
                  desc: "Adaptez la séquence à vos propres métriques de productivité développeur.",
                },
                {
                  title: "Intégrateurs cloud et sécurité",
                  desc: "Si votre offre combine infrastructure cloud et protection des données de développement.",
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
