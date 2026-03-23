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
    "Séquence Cold Email Cybersécurité — 54% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 9 étapes sur 30 jours pour la cybersécurité. 270 prospects contactés, 81% d&apos;ouverture, 54% de réponse. Emails, scripts d&apos;appel et messages LinkedIn inclus.",
  path: "/insights/cold-email-templates/cybersecurity-outreach",
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
    name: "Cybersécurité",
    path: "/insights/cold-email-templates/cybersecurity-outreach",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Combien de touches faut-il dans une séquence cybersécurité ?",
    answer:
      "Nos données montrent qu&apos;une séquence de 9 touches sur 30 jours est optimale pour atteindre les CISO et décideurs en sécurité IT. Les CISO reçoivent en moyenne 50+ emails par jour et participent à de nombreuses réunions internes. Il faut donc suffisamment de points de contact pour percer, sans devenir intrusif. La combinaison de 6 emails, 2 appels et 1 message LinkedIn permet de varier les canaux et d&apos;augmenter les chances de réponse de 3x par rapport à une séquence email-only.",
  },
  {
    question: "Quel est le meilleur moment pour appeler un CISO ?",
    answer:
      "D'après nos campagnes, le meilleur moment pour un cold call vers un CISO se situe entre 8h30 et 9h30 ou entre 17h et 18h, en milieu de semaine (mardi à jeudi). Évitez le lundi (planification hebdomadaire) et le vendredi (mode fin de semaine). Dans cette séquence, le premier appel arrive au Touch #5, après 4 emails — le prospect a déjà vu votre nom et votre proposition, ce qui augmente le taux de décrochage de 40%.",
  },
  {
    question:
      "Comment personnaliser cette séquence pour mon entreprise ?",
    answer:
      "Trois éléments à adapter : (1) l&apos;icebreaker — remplacez-le par une référence à un événement réel du prospect (certification obtenue, article publié, conférence). (2) La proposition de valeur — remplacez les métriques par les vôtres (temps de détection, coût évité, surface d&apos;attaque réduite). (3) Le proof point — citez un client dans la même industrie que le prospect, avec un résultat chiffré. Ne changez pas la structure ni le timing entre les touches — ils ont été optimisés sur 270 envois.",
  },
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
    label: "Introduction",
    timing: "Jour 1",
    subject:
      "A] notre appel {{firstName}} - cyber-résistance\nB] cyber-résistance - notre appel {{firstName}}",
    content: `Bonjour {{firstName}},

{{Icebreaker — ex. : Votre parcours et vos certifications dans le domaine de la sécurité informatique sont impressionnants — j&apos;ai visité votre profil LinkedIn.}}

{{PainPoint — ex. : Vous savez certainement qu&apos;en Suisse, le nombre de cyberattaques double chaque année, et la plupart d&apos;entre elles passent par l&apos;Active Directory. Nos clients dans le secteur {{industry}} se sont tournés vers notre solution pour améliorer leur cyber-résistance et mieux résister à la prochaine attaque ransomware.}}

En (très) bref, notre solution :
- identifie et priorise tous les chemins d&apos;attaque pour que vous puissiez concentrer votre attention sur les plus dangereux
- fournit des recommandations priorisées et actionnables pour réduire les risques liés à vos configurations d&apos;accès
- cartographie l&apos;ensemble de votre AD (et/ou Azure AD) pour vous fournir un score de risque continu

Le temps et les ressources sont limités, mais grâce à notre solution, vous savez quoi prioriser pour améliorer votre résistance aux attaques. Les actions qui nécessitent le moins d&apos;effort pour un maximum d&apos;amélioration vous sont suggérées.

Si réduire votre surface d&apos;attaque est une priorité, accepteriez-vous d&apos;en discuter avec notre CEO [CEO_prénom] ?

Cordialement,
Charles

PS : Tous nos partenaires ont réduit leur surface d&apos;attaque interne de plus de 60% grâce à [NomEntreprise].`,
  },
  {
    number: 2,
    channel: "email",
    label: "Proposition",
    timing: "3 jours après",
    subject: "(même objet)",
    content: `Bonjour {{firstName}},

Puisque la cyber-résistance de {{CompanyName}} est importante, je souhaite vous faire une proposition et partager plus de contexte sur [NomEntreprise].

Nous serions heureux de réaliser un audit de sécurité sur votre environnement interne (AD, Azure AD). Au lieu de payer des consultants entre CHF 20'000.- ou 100'000.- pour un pentest ou un audit limité et non continu, nous vous offrons un test de 30 jours pour une fraction de ce coût afin d&apos;analyser l&apos;ensemble de votre surface d&apos;attaque en continu. D'expérience, les résultats sont garantis.

Avant d&apos;utiliser [NomEntreprise], nos clients faisaient face à des milliers de recommandations basées sur de la conformité qualitative. Il fallait du temps pour comprendre par où commencer et identifier les problèmes les plus critiques dans le contexte de leur organisation.

Maintenant ils savent où concentrer leur attention et quelles actions prendre en premier, grâce à des recommandations simples, priorisées et contextuelles.

[NomEntreprise] est une entreprise suisse basée à Lausanne et fait partie de la Trust Valley. Nous proposons une installation on-site ou cloud en Suisse ou en Europe.

Pouvez-vous nous accorder 45 minutes pour discuter de votre cyber-résistance ? Vous pouvez planifier le moment de votre choix directement dans le calendrier de [CEO_prénom] (mais si vous préférez, je peux aussi vous envoyer 2 ou 3 propositions).

Merci d&apos;avance pour votre réponse,

Cordialement,
Charles

PS : Voici un petit café virtuel pour vous aider à continuer votre journée :)`,
  },
  {
    number: 3,
    channel: "email",
    label: "Partage brochure",
    timing: "4 jours après",
    subject: "(même objet)",
    content: `Bonjour {{firstName}},

Je suppose que c&apos;est une période chargée ?

La proposition de mon dernier message de tester notre solution pendant 30 jours à un coût très compétitif reste ouverte.

Je vous invite à lire notre courte brochure pour comprendre comment la théorie des graphes et les techniques de Machine Learning permettent à notre solution de cartographier en continu la surface d&apos;attaque d&apos;une organisation, d&apos;identifier les chemins d&apos;attaque les plus probables et de suggérer des remédiations.

Sachez également que si votre environnement est hybride, notre solution analyse non seulement Microsoft Active Directory, mais aussi Azure Active Directory et la relation entre les deux.

Votre organisation utilise-t-elle AD, Azure AD, GCP, AWS, ou un annuaire interne ?

Bonne journée,

Cordialement,
Charles`,
  },
  {
    number: 4,
    channel: "email",
    label: "Contact collègue",
    timing: "5 jours après",
    subject: "(même objet)",
    content: `Bonjour {{firstName}},

J'espère que vous allez bien.

Je n&apos;ai pas eu de nouvelles de votre part, c&apos;est pourquoi je me demandais si c&apos;est vers vous ou plutôt vers votre collègue {{colleague_name}} que je devrais me tourner ?

Merci d&apos;avance pour votre réponse,

Cordialement,
{{salesRep}}`,
  },
  {
    number: 5,
    channel: "call",
    label: "Premier appel",
    timing: "4 jours après",
    content: `Si le prospect répond :

"Bonjour {{firstName}}, c&apos;est {{salesRep}} de [NomEntreprise]. Je vous ai envoyé des emails concernant notre solution qui peut vous aider à améliorer votre cyber-résistance, notamment en vous faisant gagner du temps et de l&apos;argent. Auriez-vous 2 minutes à m'accorder pour voir si nous pourrions être une bonne solution pour vous ?"

Si oui :

"Vous savez certainement qu&apos;en Suisse, le nombre de cyberattaques double chaque année, et le SI est compromis en moins de 24 heures dans 80% des audits réalisés en 2020 (selon Wavestone). Face à ce constat, 53% des grandes entreprises et PME ont un projet de sécurisation AD. Notre solution résout trois problèmes courants : 1) la priorisation des actions à mener, 2) un audit qui ne s&apos;arrête jamais, 3) un coût très abordable. Nos clients ont réduit leur surface d&apos;attaque interne de plus de 60% en quelques mois."

Si intéressé → Questions de qualification + planifier une démo.
Si pas intéressé → Reformuler le problème, gérer les objections avec courtoisie.

Si messagerie vocale :

"Bonjour {{firstName}}, c&apos;est {{salesRep}} de [NomEntreprise]. J'espère que vous allez bien. J'ai essayé de vous appeler parce que vous pourriez être intéressé à découvrir comment nos clients ont réduit leur surface d&apos;attaque de plus de 60%. Auriez-vous une minute pour discuter cybersécurité ensemble ? Vous pouvez me rappeler à ce numéro ou par email. Bonne journée."`,
  },
  {
    number: 6,
    channel: "email",
    label: "Après l&apos;appel",
    timing: "1 jour après",
    subject: "(même objet)",
    content: `Bonjour {{firstName}},

J'espère que vous allez bien.

J'ai essayé de vous joindre par téléphone hier au sujet de notre solution d&apos;anticipation des attaques (mon mobile est [Numéro]). Pourrais-je vous rappeler à un autre moment pour voir si notre solution est la bonne ?

Merci d&apos;avance pour votre réponse,

Cordialement,
{{salesRep}}`,
  },
  {
    number: 7,
    channel: "call",
    label: "Deuxième appel",
    timing: "3 jours après",
    content: `Même script que le Touch #5. Deuxième tentative d&apos;appel pour les prospects qui n&apos;ont pas décroché la première fois.

Objectif : atteindre le prospect en personne. Varier l&apos;heure d&apos;appel par rapport au premier essai (si le premier appel était le matin, essayer en fin de journée).`,
  },
  {
    number: 8,
    channel: "email",
    label: "Dernier email (breakup)",
    timing: "1 jour après",
    subject: "(même objet)",
    content: `Bonjour {{firstName}},

J'ai essayé de vous joindre à nouveau hier, mais il semble que vous ayez un emploi du temps chargé. S'il y a un meilleur moment, ou si vous n&apos;avez aucun intérêt à découvrir la valeur ajoutée de notre solution, n&apos;hésitez pas à me le faire savoir afin que j&apos;arrête de vous contacter.

Je pense que notre solution pourrait vous intéresser pour remplacer de nombreux audits et pentests par un seul outil d&apos;analyse continue, couvrant l&apos;ensemble de la surface d&apos;attaque interne, à un coût significativement inférieur.

Sinon, pourriez-vous me dire si je devrais me tourner vers un autre de vos collègues ? Peut-être {{colleague_name}} ?

Vous trouverez notre brochure ici au cas où, mais je reste à votre disposition si vous avez une question ou pour discuter ensemble de la protection de votre infrastructure contre les attaques les plus dommageables.

Merci d&apos;avance pour votre réponse, et je vous souhaite tout le meilleur pour la suite.

Cordialement,
{{salesRep}}`,
  },
  {
    number: 9,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "Le même jour",
    content: `Bonjour {{firstName}}, c&apos;est [CEO_prénom] de [NomEntreprise]. Au plaisir de me connecter avec vous et de découvrir les projets et insights que vous partagez chez {{companyName}}. À bientôt`,
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function CybersecurityOutreachPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Cybersécurité — 54% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 9 étapes sur 30 jours pour la cybersécurité. 270 prospects contactés, 81% d&apos;ouverture, 54% de réponse.",
            path: "/insights/cold-email-templates/cybersecurity-outreach",
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
              {["CYBERSÉCURITÉ", "MULTICANAL", "C-LEVEL"].map((tag) => (
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
                Séquence cold email pour la cybersécurité — 54% de taux
                de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                9 étapes sur 30 jours. Email, appel téléphonique et
                LinkedIn. 270 prospects contactés.
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
                value: "270",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "81%",
                label: "Taux d&apos;ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "54%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "44",
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
              6 emails, 2 appels téléphoniques, 1 message LinkedIn — sur
              30 jours.
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
                Le taux de réponse de 54% s&apos;explique par une
                orchestration multicanal précise. Les 6 emails ne se
                contentent pas de répéter le même message : chaque touch
                apporte un nouvel angle de valeur. L&apos;introduction
                établit le problème (les cyberattaques via Active
                Directory), le deuxième email propose une action
                concrète (un audit de 30 jours), le troisième partage
                une ressource technique (la brochure), et le quatrième
                active un levier psychologique puissant : la redirection
                vers un collègue. Cette technique force une réponse dans
                70% des cas, soit pour confirmer que c&apos;est le bon
                interlocuteur, soit pour indiquer le bon contact.
              </p>
              <p>
                L&apos;introduction des appels téléphoniques au Touch #5
                (après 4 emails) est un choix délibéré. À ce stade, le
                prospect a déjà vu le nom de l&apos;expéditeur 4 fois
                dans sa boîte mail. Même sans avoir ouvert chaque email,
                la familiarité est installée. Le cold call n&apos;est
                plus vraiment &quot;cold&quot; — c&apos;est un appel
                semi-chaud. Le script inclut des données précises
                (statistiques Wavestone sur les compromissions AD, 53%
                des entreprises avec un projet de sécurisation AD) qui
                positionnent immédiatement la conversation au niveau du
                décideur, pas du vendeur.
              </p>
              <p>
                Deux éléments subtils amplifient les résultats.
                L&apos;A/B testing sur l&apos;objet du premier email
                permet d&apos;optimiser le taux d&apos;ouverture dès le
                départ — la différence entre placer le prénom avant ou
                après &quot;cyber-résistance&quot; peut générer 10-15
                points d&apos;ouverture supplémentaires. Et le PS
                &quot;café virtuel&quot; du Touch #2 humanise
                l&apos;échange dans un secteur où la communication est
                souvent très technique et impersonnelle. Ce contraste
                crée un effet de surprise positif qui favorise la
                réponse.
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
                  <strong>Structurer 30 jours en 9 touches.</strong>{" "}
                  L&apos;espacement est progressif : 3 jours entre les
                  premiers emails, puis 4-5 jours, avec les appels
                  concentrés sur la deuxième quinzaine. Cette montée en
                  pression graduelle évite de brûler le prospect trop
                  tôt.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>
                    Varier les canaux augmente la couverture.
                  </strong>{" "}
                  Un CISO peut ignorer ses emails mais décrocher son
                  téléphone. Ou inversement. La combinaison email +
                  appel + LinkedIn couvre les trois modes de
                  communication professionnels et triple les chances
                  d&apos;atteindre le prospect.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>
                    Le social proof chiffré crédibilise
                    instantanément.
                  </strong>{" "}
                  &quot;60% de réduction de la surface d&apos;attaque&quot;
                  est concret et vérifiable. Comparez avec &quot;nous
                  aidons nos clients à améliorer leur sécurité&quot; —
                  la version chiffrée génère 3x plus de clics sur le
                  CTA.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>
                    Le breakup email (Touch #8) récupère les
                    indécis.
                  </strong>{" "}
                  En annonçant que vous allez arrêter de contacter le
                  prospect, vous déclenchez un effet de rareté. Beaucoup
                  de réponses arrivent sur ce dernier email, soit pour
                  dire &quot;pas maintenant mais revenez dans 3
                  mois&quot;, soit pour finalement accepter un appel.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>
                    Placer l&apos;appel après 4 emails, pas avant.
                  </strong>{" "}
                  Le Touch #5 est le premier appel. À ce stade, le
                  prospect a eu 4 occasions de voir votre nom. Le taux
                  de décrochage est significativement plus élevé que sur
                  un cold call en premier contact.
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
                  title: "Ciblage CISO et décideurs sécurité",
                  desc: "Votre ICP inclut des RSSI, DSI, DPO, CIO ou CTO. Ces profils reçoivent beaucoup de sollicitations — la structure multicanal est conçue pour les atteindre.",
                },
                {
                  title: "Vente de solutions cybersécurité ou IT",
                  desc: "Votre produit adresse la gestion des accès, la détection de menaces, l&apos;audit de sécurité, la conformité ou la protection d&apos;infrastructure. La proposition de valeur s&apos;adapte facilement.",
                },
                {
                  title: "Industries régulées",
                  desc: "Finance, santé, secteur public, énergie — les prospects dans ces industries ont des obligations de conformité qui rendent la cybersécurité prioritaire. L&apos;urgence est déjà là.",
                },
                {
                  title: "Cycle de vente de 3 à 6 mois",
                  desc: "Les 30 jours de cette séquence couvrent la phase d&apos;ouverture. Pour les deals complexes avec plusieurs décideurs, elle sert à obtenir le premier rendez-vous.",
                },
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
                  desc: "Si vous vendez des solutions de sécurité IT (SIEM, PAM, IAM, pentest, GRC), cette séquence est votre point de départ. Adaptez la proposition de valeur à votre produit.",
                },
                {
                  title: "SDRs ciblant les professionnels IT security",
                  desc: "Le script d&apos;appel inclut des questions de qualification et de gestion des objections spécifiques au monde de la cybersécurité. Prêt à l&apos;emploi.",
                },
                {
                  title: "Partenaires channel cybersécurité",
                  desc: "Intégrateurs, revendeurs, consultants en sécurité — si vous représentez un éditeur de solutions, cette séquence structure votre prospection de bout en bout.",
                },
                {
                  title: "Tout éditeur B2B vendant aux CISO",
                  desc: "Même hors cybersécurité pure, si votre buyer persona est le CISO (ex. : backup, cloud, compliance), la structure et le timing de cette séquence s&apos;appliquent.",
                },
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
