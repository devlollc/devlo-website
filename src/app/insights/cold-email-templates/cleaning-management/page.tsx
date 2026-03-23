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
    "Séquence Cold Email Gestion de la Propreté Urbaine — 38% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 30 jours pour gestion de la propreté urbaine. 708 prospects contactés. 4 emails, 2 appels téléphoniques, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/cleaning-management",
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
    name: "Gestion de la Propreté Urbaine",
    path: "/insights/cold-email-templates/cleaning-management",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Est-ce que le cold emailing fonctionne avec les élus locaux ?",
    answer:
      "Oui, avec un taux de réponse de 38% sur 708 prospects. La clé est la personnalisation : mentionner le nom de la ville et le rôle spécifique du prospect. Les élus sont sensibles aux problèmes concrets de leurs administrés. La structure de la séquence (LinkedIn d’abord, puis email personnalisé) contourne les filtres email des administrations.",
  },
  {
    question:
      "Comment gérer les processus d’achat public dans la prospection ?",
    answer:
      "Cette séquence souligne que &quot;no RFP is required as our solution is unique&quot;. Si votre solution nécessite un appel d’offres, adaptez le CTA — plutôt qu’un rendez-vous de vente, proposez une présentation d’information ou un essai pilote qui peut être lancé sans procédure formelle.",
  },
  {
    question:
      "Quelle langue utiliser pour cibler les municipalités suisses ?",
    answer:
      "En Suisse, utilisez la langue de la région : français en Suisse romande, allemand en Suisse alémanique. Cette séquence est bilingue DE/FR pour couvrir les deux marchés. Ne mélangez jamais les langues dans un même email — chaque prospect reçoit la séquence dans sa langue.",
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
    timing: "1 jours après",
    content: `Demande de mise en relation sur LinkedIn
Date d&apos;envoi : 1 jour après le dernier message
Expéditeur : Client
Contenu : provenant de LinkedIn
Option A] Entièrement personnalisée
Option B) Bonjour M. {{last name}}, mon collègue {{salesRep}} vous contactera au sujet de la propreté urbaine à {{city}}. L&apos;adresse e-mail {{email}} est-elle la bonne pour vous écrire ?`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "first day of the sequence",    subject:
      "Notre conversation - {{firstName}} & {{salesRep}}",
    content: `Cher(e) {{salutation}} {{lastName}},

{{icebreaker}}.

Mes recherches ont également montré que vous êtes politiquement responsable de la propreté de {{city}}.

Aujourd&apos;hui, nous accompagnons plus de 50 villes et communes qui ont choisi notre solution pour contrôler leur niveau de propreté, optimiser l&apos;utilisation de leurs ressources et réduire leur empreinte environnementale, notamment leur consommation d&apos;eau et leurs émissions de gaz à effet de serre.

La ville de Bâle, par exemple, a pu réduire de 15 % le nombre de ses balayeurs. Le responsable de la propreté peut démontrer objectivement que sa ville est devenue plus propre.

Pour y parvenir, la ville est cartographiée à l&apos;aide de notre système de reconnaissance d&apos;images installé sur les véhicules. Ces mesures de propreté permettent également d&apos;impliquer les équipes dans une démarche d&apos;amélioration continue et de rendre leurs conditions de travail plus attractives.

Ce serait formidable de pouvoir vous donner plus de détails par téléphone.

Cela vous intéresse-t-il, ou suis-je à côté de la plaque ?

Cordialement,
{{salesRep}}

PS : Cette vidéo montre comment fonctionne le système de vision intelligent sur les véhicules

{{signature}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "7 jours après",
    content: `Cher(e) {{salutation}} {{lastName}},

Que pensez-vous de ma proposition ?

De plus, nous vous invitons à mener un test à grande échelle au cours des trois prochains mois, en vous concentrant sur un ou plusieurs objectifs opérationnels concrets (c&apos;est en effet la période de l&apos;année où la production de déchets atteint son pic !).

Vous pouvez tester notre solution à {{city}} afin d&apos;évaluer vous-même les résultats. 

Les cinq premières villes de {{CountrySequence}} bénéficieront d&apos;un tarif préférentiel. En prime, vous recevrez également l&apos;accompagnement personnalisé d&apos;un de nos experts qui pourra vous aider à résoudre les problèmes opérationnels liés à la propreté de votre ville.

Pour votre information, toutes les villes et communes qui ont déployé notre solution en 2022 ont étendu leur couverture à des territoires plus vastes. La mise en œuvre est simple et aucun appel d&apos;offres n&apos;est nécessaire, car notre solution est unique et il n&apos;y a pas de concurrents.

Seriez-vous intéressé(e) par un entretien avec notre PDG ?

Cordialement,
{{salesRep}}

{{signature}}

PS : Ma liste de tâches dans l&apos;image ci-dessous m'a rappelé de vous écrire 😉`,
  },
  {
    number: 4,
    channel: "call",
    label: "Appel téléphonique",
    timing: "N/A",
    content: `Appel à l&apos;action : Planifiez un entretien de prise de contact pour cerner les besoins du client potentiel

Points de contact

---

Cher(e) {{salutation}} {{lastname}},

Serait-il préférable de contacter vos collègues {{colleaguename1}} ou {{colleaguename2}} ?

J'imagine que votre emploi du temps est chargé. Cependant, vos collègues en charge de la propreté, de la pollution ou du nettoyage des rues pourraient être intéressés.

Une petite anecdote : l&apos;un de nos clients (responsable de la voirie) pensait avoir besoin de plus de ressources internes pour lancer le projet. Or, il n&apos;a fallu que deux mois pour obtenir les premiers résultats. Non seulement il a compris que lui et ses équipes avaient gagné un temps précieux, mais ils ont même éliminé plusieurs « points noirs » de déchets inconnus (grâce au tableau de bord clair).

Cordialement,
{{salesRep}}

P.S. : Vous trouverez ci-dessous un exemple de rapport hebdomadaire. Il s&apos;agit d&apos;un outil essentiel pour vous aider à prendre des décisions aujourd&apos;hui et à obtenir des résultats concrets demain`,
  },
  {
    number: 5,
    channel: "call",
    label: "Appel téléphonique",
    timing: "3 jours après",
    content: `Premier appel à froid
Date d&apos;envoi : 3 jours après le message précédent
Script d&apos;appel :
Si le prospect répond :
Phrase d&apos;introduction : Bonjour, je m'appelle {{salesRep}} et je travaille pour [ClientCompanyName]. Je vous ai contacté par e-mail car vous êtes le {{jobtitle}} de la ville de {{City}} et je vous ai écrit au sujet de la propreté urbaine. Avez-vous quelques minutes pour discuter ?
Objectif : Comme vous pouvez le constater, plus de 50 communes ont adopté notre solution pour contrôler leur propreté, optimiser leurs ressources et réduire leur empreinte environnementale. C'est pourquoi nous aimerions vous rencontrer et vous présenter les résultats obtenus par nos clients. Cela vous intéresse-t-il ?
Appel à l&apos;action : C'est pourquoi notre directeur général [Director_FirstName] aimerait vous rencontrer et vous présenter les résultats obtenus par nos clients. Cela vous intéresse-t-il ?
Contexte : 50 municipalités ont adopté notre solution pour contrôler leur niveau de propreté, optimiser l&apos;utilisation de leurs ressources et réduire leur empreinte environnementale, notamment leur consommation d&apos;eau et leurs émissions de gaz à effet de serre. Pour ce faire, elles cartographient la propreté de leur ville à l&apos;aide de nos systèmes de reconnaissance d&apos;images installés sur leurs véhicules. Ces mesures de propreté nous permettent également d&apos;impliquer nos équipes dans une démarche d&apos;amélioration continue et de rendre leurs conditions de travail plus attractives.

Suivez le script de démarchage téléphonique suivant
Si oui, posez ces questions pour personnaliser la démonstration et qualifier le prospect

Si non, demandez pourquoi et surmontez les objections : (Courtoisie - Problème - Action)
_____
_____
_____`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "1 jours après",    subject:
      "Appel manqué - Propreté urbaine",
    content: `Cher(e) {{salutation}} {{lastname}},

Je n&apos;ai pas réussi à vous joindre par téléphone aujourd&apos;hui.

Comme tous les autres élus avec lesquels nous travaillons, vous vous souciez de l&apos;attractivité, de la sécurité et de la durabilité de {{city}}. De plus, la qualité de vie de vos habitants va de pair avec la propreté de la ville. 

C'est pourquoi nous aimerions vous rencontrer pour vous présenter les résultats auxquels vos habitants peuvent s&apos;attendre.

Pourrions-nous en discuter par téléphone ?

Cordialement,
{{salesRep}}

P.S. : Voici un petit café virtuel pour vous aider à poursuivre votre journée :) !`,
  },
  {
    number: 7,
    channel: "email",
    label: "Email #7",
    timing: "4 jours après",
    content: `Cher(e) {{salutation}} {{lastname}},

Dois-je vous recontacter plus tard dans l&apos;année ?

Le site web de {{city}} indique que vous êtes chargé(e) d&apos;améliorer la propreté de la ville.

Vous savez aussi bien que moi qu&apos;on ne peut pas améliorer ce qu&apos;on ne peut pas mesurer. Ce n&apos;est qu&apos;en mesurant les moyens mis en œuvre qu&apos;il est possible d&apos;évaluer leur efficacité et de les améliorer.

C'est pourquoi nous pouvons vous aider à innover dans ce domaine afin de garantir la qualité de vie de vos habitants.

Une étude de cas récente porte sur un quartier d&apos;affaires à Utrecht, aux Pays-Bas, où de nombreux habitants se plaignaient de la propreté. Notre solution a redéfini les zones de nettoyage sur la base de mesures effectuées pendant deux mois. Résultat : plus aucune plainte, et quatre agents de voirie ont pu être affectés à des tâches moins pénibles.

Souhaitez-vous en savoir plus sur le contexte ? Ou souhaitez-vous contacter nos clients pour échanger des idées et leur poser directement des questions ?

Cordialement,
{{salesRep}}

P.S. : Tout comme vous, nous pensons que {{city}} est l’une des villes les plus propres de la région {{CountrySequence}}. Ensemble, nous pouvons le prouver et faire encore mieux sans investir davantage de ressources.

{{signature}}`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function CleaningManagementPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Gestion de la Propreté Urbaine — 38% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 7 étapes sur 30 jours pour gestion de la propreté urbaine.",
            path: "/insights/cold-email-templates/cleaning-management",
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
              {["SMART CITY","MULTICANAL","ÉLUS LOCAUX"].map((tag) => (
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
                Séquence cold email pour gestion de la propreté urbaine — 38% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 30 jours. 4 emails, 2 appels téléphoniques, 1 message LinkedIn. 708 prospects contactés.
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
                value: "708",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "79%",
                label: "Taux d&apos;ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "38%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "79",
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
              4 emails, 2 appels téléphoniques, 1 message LinkedIn — sur 30 jours.
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
                708 prospects contactés pour un taux de réponse de 38% et 79 prospects intéressés — cette séquence démontre qu’il est possible de prospecter efficacement le secteur public. La clé : un taux d’ouverture de 79% obtenu grâce à des objets d’email personnalisés mentionnant le nom de la ville du prospect.
              </p>
              <p>
                La stratégie de démarrer par LinkedIn (Touch #1) avant le premier email (Touch #2) est particulièrement adaptée aux élus locaux. Ces décideurs ont souvent des assistants qui filtrent leurs emails, mais gèrent personnellement leur LinkedIn. La connexion préalable augmente le taux d’ouverture du premier email de 20-30%.
              </p>
              <p>
                L’anecdote du &quot;street commissioner&quot; qui a obtenu ses premiers résultats en seulement deux mois (Touch #4) est un levier psychologique puissant. Pour un élu local, la peur de ne pas avoir assez de ressources est la principale objection — cette success story la démonte directement.
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
                  <strong>Démarrer par LinkedIn pour le secteur public.</strong>{" "}
                  Les élus gèrent souvent leur LinkedIn personnellement, contrairement à leur email professionnel.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Personnaliser avec le nom de la ville.</strong>{" "}
                  Mentionner la ville du prospect dans l’objet et le corps de l’email booste l’ouverture.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Utiliser des anecdotes clients pour démonter les objections.</strong>{" "}
                  Le &quot;street commissioner&quot; qui a obtenu des résultats en 2 mois démonte l’objection des ressources.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer un essai pilote avec avantage premier arrivé.</strong>{" "}
                  Les 5 premières villes bénéficiant d’un prix préférentiel créent l’urgence.
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
                  title: "Solutions Smart City et propreté urbaine",
                  desc: "Votre produit utilise l’IA, l’IoT ou l’analyse d’images pour améliorer la gestion urbaine. Le modèle cible les bons décideurs.",
                },
                {
                  title: "Ciblage élus et responsables municipaux",
                  desc: "Maires, directeurs de services techniques, responsables propreté — la séquence est conçue pour le secteur public.",
                },
                {
                  title: "Prospection en Suisse et Benelux",
                  desc: "La séquence bilingue DE/FR est adaptée au marché suisse et belge.",
                },
                {
                  title: "Solutions sans appel d’offres",
                  desc: "Si votre solution est unique et ne nécessite pas de RFP, la séquence met en avant cet avantage.",
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
                  title: "Startups Smart City et civic tech",
                  desc: "Si votre solution améliore la gestion urbaine avec la technologie.",
                },
                {
                  title: "SDRs ciblant le secteur public",
                  desc: "La séquence est conçue pour naviguer les spécificités de la prospection publique.",
                },
                {
                  title: "Équipes commerciales dans l’environnement",
                  desc: "Si votre produit réduit l’empreinte environnementale des collectivités.",
                },
                {
                  title: "Intégrateurs de solutions IoT urbaines",
                  desc: "Adapté à toute solution de capteurs, IA ou analyse d’images pour les villes.",
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
