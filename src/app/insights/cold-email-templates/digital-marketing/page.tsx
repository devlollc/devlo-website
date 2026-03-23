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
    "Séquence Cold Email Marketing Digital — 21% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 30 jours pour marketing digital. 255 prospects contactés. 5 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/digital-marketing",
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
    name: "Marketing Digital",
    path: "/insights/cold-email-templates/digital-marketing",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment montrer le classement Google d’un prospect dans un email ?",
    answer:
      "Recherchez manuellement le classement du prospect pour les mots-clés pertinents (&quot;bureau d’architecte + ville&quot;). Indiquez sa position exacte dans l’email. Cette personnalisation data-driven prend 2 minutes par prospect mais crée un effet de surprise qui booste significativement le taux d’ouverture et de réponse.",
  },
  {
    question:
      "Pourquoi le breakup email humoristique est-il efficace ?",
    answer:
      "Les options A/B/C/D avec &quot;île déserte&quot; dédramatisent le rejet et transforment le dernier email en moment positif. Le prospect peut répondre sans s’engager (option B : &quot;rappelez-moi dans 3 mois&quot;) ou se laisser convaincre de passer un appel (option C). Cette technique génère un taux de réponse 2x plus élevé qu’un breakup email classique.",
  },
  {
    question:
      "Comment adapter cette séquence à un autre secteur de PME ?",
    answer:
      "Gardez la structure de 8 touches et le ton léger (emojis, humour dans le PS). Remplacez le diagnostic Google par un équivalent dans votre domaine (audit gratuit, diagnostic, benchmark). L’offre d’été ou saisonnière (Touch #6) peut être adaptée à n’importe quelle période de l’année.",
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
    content: `Version A (caractères: 190) - CTA 1

Bonjour {{firstName}},
Nous avons permis au {{client_ref}} d’occuper la première place du référencement naturel sur Google à La Louvière. Est-ce une priorité pour {{companyName}} ? 

{{salesRep}}
Version B (caractères: 187) - CTA 2

Bonjour {{firstName}},
Nous avons permis au {{client_ref}}  d’occuper la première place du référencement naturel sur Google à La Louvière. Est-ce pertinent pour {{companyName}}? 

{{salesRep}}

---

Bonjour et enchanté! Je voulais juste savoir si ça vous intéresse d’attirer plus de clients grâce à un site internet plus performant. En effet, nous aidons au quotidien plusieurs bureaux d’architectes à atteindre les sommets du référencement Google.  Est-ce pertinent pour vous?

---

Qu’avez-vous pensé de ma proposition? 🙂`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Jour 1",    subject:
      "A\\ prise de contact {{firstName}} x {{salesRep}}",
    content: `Examples of {{shortpain}}:
pas de prise de rdv en ligne
pas de commande en ligne
23ème en recherche Google
Examples of {{pain}}:
De plus, il apparaît que vous ne disposez pas de la prise de rdv en ligne sur votre site.
De plus, il apparaît que vous ne disposez pas d'un système de vente en ligne.
De plus, vous n’avez pas publié de contenu sur votre page Facebook depuis 7 mois, avec moins de 500 followers sur FB.
De plus, vous êtes actuellement le 15e   bureau référencé en tapant “bureau d’architecte Wavre”.
Examples de {{painproof}}:
Des études sectorielles montrent que plus de 50 % des utilisateurs s’attendent à pouvoir prendre un rendez-vous en ligne.
Des analyses marketing indiquent que plus de 50 % du trafic d’un site web provient du référencement naturel.
Des études montrent que les entreprises investissant dans le SEO enregistrent une croissance significative de leurs revenus.
Des études récentes montrent qu’une part importante de la population effectue ses démarches uniquement en ligne.
Des données de marché indiquent qu’une majorité des consommateurs achète en ligne.
Examples of {{SEO}}: bureaux d’architectes Namur, bureaux d’assurance Bruxelles, cabinets vétérinaires Liège









Version A

Bonjour {{firstName}},

Avez-vous déjà pensé à améliorer le référencement Google de votre bureau d’architecture ? Je vois que vous arrivez {{Google_rank}} en tapant {{Google_search}} {{city}}.

 {{painproof}}


[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "6 jours après",    subject:
      "A/ comme précédemment",
    content: `Version A (inclut l’USP stats)

Bonjour {{firstName}},

Comme vous, nos clients comme {{client_ref}} étaient perplexes quant au potentiel d’un meilleur référencement Google et d’un agenda connecté.

Un an plus tard, ce sont des milliers de nouveaux inscrits qui arrivent chaque année sans qu’ils dépensent un euro en publicité (Google Ads).

Pour ce faire, nous avons mis en place une stratégie {{productname}} : refonte du site internet, mise en place d’un agenda connecté et développement du référencement naturel sur Google.

Nos clients peuvent également garder un œil très attentif à toutes les statistiques du trafic de leur site internet, ce qui leur permet d’essayer de nouvelles offres en temps réel pour satisfaire leur clientèle.

En images, voici ce que nous pouvons réaliser pour {{companyName}}:

Est-ce qu’un peu plus de contexte par téléphone vous intéresse?

Belle journée espérons ensoleillée, 

{{signature}}









Version B (inclut les formules + paiements mensuels)

Bonjour {{firstName}},

Comme vous, nos clients comme le {{client_ref}} étaient perplexes quant au potentiel d’un meilleur référencement Google et d’un agenda connecté.

Un an plus tard, ce sont des milliers de nouveaux inscrits qui arrivent chaque année sans qu’ils dépensent un euro en publicité (Google Ads).

Pour ce faire, nous avons mis en place une stratégie {{productname}}: refonte du site internet, mise en place d’agenda connecté et développement du référencement naturel sur Google.

Nos formules flexibles avec paiements mensuels permettent à n’importe quelle PME de s'offrir les talents d’experts dans le domaine!

En images, voici ce que nous pouvons réaliser pour {{companyName}}:


Est-ce qu’un peu plus de contexte par téléphone vous intéresse?

Belle journée espérons ensoleillée, 

{{signature}}`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "5 jours après",    subject:
      "discussion avec {{colleaguename1}} ou {{colleaguename2}}",
    content: `Bonjour {{firstName}},

Est-il préférable de contacter vos collègues {{ColleagueName1}} ou {{ColleagueName2}} au sujet de notre proposition pour mieux rentabiliser votre site internet?

Votre emploi du temps est certainement chargé, mais j’imagine que générer plus de trafic et plus de revenus via votre site internet reste d’actualité pour {{companyName}}.

Une excellente journée à toute l’équipe,

PS: Notre {{productname}} et abonnements modulables pourront s'aligner sur tous les budgets!
{{signature}}`,
  },
  {
    number: 5,
    channel: "call",
    label: "Appel téléphonique",
    timing: "5 jours après",
    content: `Appel n°1 - Prise de rendez-vous
Date d'envoi : 5 jours après le dernier message
Appelant : {{salesRep}}
Contenu/Script :
“Bonjour {{Gender}} {{LastName}} OR {{FirstName}}, c’est {{salesRep}} de l’entreprise {{clientCompanyName}}. Je vous ai envoyé un mail la semaine passée concernant notre expertise marketing pour les cabinets vétérinaires. Cela vous dit quelque chose?”
OR 
“Je vous contacte car vous êtes le gérant du cabinet {{companyName}} et j’aurais aimé discuter avec vous du potentiel de votre site internet afin de voir comment vous pourriez aider davantage d’animaux patients. Est-ce que vous auriez 2 petites minutes à m’accorder?”
 YES
“Génial! En quelques mots, nous sommes une entreprise spécialisée dans l’accompagnement marketing et l’amélioration des sites internet pour les cabinets vétérinaires. Nous implémentons des outils tels qu’une prise de rendez-vous en ligne et un {{productname}} afin de vendre en ligne du matériel animalier ou de la nourriture. Est-ce que ce sont des choses auxquelles vous avez déjà pensé pour votre cabinet?”
Notre objectif est d’offrir aux plus petites entités un service aussi performant et rentable que celui dont disposent les plus grandes entreprises. Nos formules {{productname}} et abonnements modulables permettent de satisfaire toute PME en fonction de ses objectifs et de son budget”
Début de la qualification. Le but est de récolter un max d’infos, puis d’attaquer et de chercher un meeting si les réponses sont positives.
Qualification:
Faites-vous les gros ou les petits animaux ?
Outre les soins généraux, avez-vous des spécialisations particulières,
Comme la dermatologie animale ?
Est-ce que vous traitez les urgences et les gardes vétérinaires ?
Faites-vous quelques ventes additionnelles ? Croquettes ?
Pratiquez-vous la chirurgie au sein du cabinet ?`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "0 jours après le dernier message",
    content: `Version A 

Bonjour {{firstName}},

J’ai tenté de vous joindre aujourd’hui au {{phonenumbersequence}}.

L’idée était de  vous présenter l’offre d’été que nous lançons cette semaine pour toutes les PME de {{province}}. Pourquoi ne pas profiter du calme de l’été pour refaire votre stratégie marketing et exploser les chiffres de fin d’année?

Pour ce faire, nous aimerions vous proposer un rendez-vous avec un de nos experts marketing. Le but sera de faire le bilan de santé de votre site internet et de vos réseaux sociaux.

L’expert vous proposera différentes pistes d’amélioration et les classera pour vous par ordre de priorité. 

Aucun contrat ni proposition Webforce ne sera envoyé à la suite de ce meeting. L’unique but étant de vous aider à y voir plus clair sur votre potentiel digital. 

Voici l'agenda d'un de nos experts, si cela vous parle (+5 ans d'expérience, quand même).

Bien cordialement,

PS : Voici un petit café virtuel pour continuer votre journée :) !





Version B (different text in bold)

Bonjour {{firstName}},

J’ai tenté de vous joindre aujourd’hui au {{phonenumbersequence}}.

L’idée était de  vous présenter l’offre d’été que nous lançons cette semaine pour toutes les PME de {{province}}. Pourquoi ne pas profiter du calme de l’été pour refaire votre stratégie marketing et exploser les chiffres de fin d’année?

Pour ce faire, nous aimerions vous proposer un rendez-vous avec un de nos experts marketing. Le but sera de faire le bilan de santé de votre site internet et de vos réseaux sociaux.

L’expert vous proposera différentes pistes d’amélioration et les classera pour vous par ordre de priorité. 

Aucun contrat ni proposition Webforce ne sera envoyé à la suite de ce meeting. L’unique but est de vous aider à y voir plus clair sur votre potentiel digital.

Voici l'agenda d'un de nos experts, si cela vous parle (+5 ans d'expérience, quand même).

Bien cordialement,

PS : Voici un petit café virtuel pour continuer votre journée :) !`,
  },
  {
    number: 7,
    channel: "email",
    label: "Email #7",
    timing: "7 jours après",
    content: `Bonjour {{firstName}},

Il est donc temps de nous dire au revoir.

Chez Webforce, nous valorisons le feedback afin de nous améliorer.

Si vous avez quelques secondes, pourriez-vous me dire pourquoi vous ne souhaitez pas aller plus loin?

Je n’ai absolument pas besoin de tout ce que vous me racontez, merci
Pas le bon moment mais potentiellement intéressé, rappelez-moi dans 3 mois svp
C’est intéressant, mais pas sûr d’avoir tout compris. On s’appelle cette semaine?
Je suis sur une île déserte et Rio ne répond plus

En espérant vous avoir diverti 🙂

Fabuleuse continuation à vous,



{{signature}}`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function DigitalMarketingPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Marketing Digital — 21% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 7 étapes sur 30 jours pour marketing digital.",
            path: "/insights/cold-email-templates/digital-marketing",
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
              {["MARKETING DIGITAL","MULTICANAL","CEO & PME"].map((tag) => (
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
                Séquence cold email pour marketing digital — 21% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 30 jours. 5 emails, 1 appel téléphonique, 1 message LinkedIn. 255 prospects contactés.
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
                value: "255",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "59%",
                label: "Taux d'ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "21%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "10",
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
                255 prospects et un taux de réponse de 21% pour cette séquence de 8 touches sur 30 jours ciblant les PME et bureaux d’architectes en Belgique. L’approche est data-driven : le premier email inclut le classement Google réel du prospect, créant un effet de surprise.
              </p>
              <p>
                La stratégie de montrer au prospect sa position actuelle sur Google (&quot;vous arrivez 23ème en tapant bureau d’architecte Wavre&quot;) est un déclencheur émotionnel puissant. Le décideur visualise immédiatement le manque à gagner et la possibilité d’amélioration.
              </p>
              <p>
                Le Touch #8 (breakup email) avec les options de réponse humoristiques (A/B/C/D incluant &quot;J’ai atterri sur une île déserte et Rio ne répond plus&quot;) dédramatise le rejet et génère un dernier sourire — et souvent une réponse.
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
                  <strong>Montrer le classement Google réel du prospect.</strong>{" "}
                  Personnalisation data-driven qui crée un effet de surprise et d’urgence.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Utiliser des images avant/après.</strong>{" "}
                  Montrer visuellement ce que le service peut accomplir est plus puissant que du texte.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer des formules avec paiements mensuels.</strong>{" "}
                  Rend le service accessible aux plus petites PME.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Le breakup email humoristique fonctionne.</strong>{" "}
                  L’option &quot;île déserte&quot; génère un sourire et souvent une réponse.
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
                  title: "Agences de marketing digital",
                  desc: "SEO, Google Ads, refonte de site, social media — cette séquence cible les PME locales.",
                },
                {
                  title: "Ciblage gérants de PME et indépendants",
                  desc: "CEO, gérants et fondateurs d’entreprises de 1 à 20 employés sont votre audience idéale.",
                },
                {
                  title: "Marché belge et français",
                  desc: "La séquence en français avec des références locales est optimisée pour ces marchés.",
                },
                {
                  title: "Offre avec recherche personnalisée",
                  desc: "Si vous faites une analyse SEO préalable de chaque prospect, cette approche data-driven fonctionne.",
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
                  title: "Agences de marketing digital locales",
                  desc: "Si vous ciblez des PME avec des services SEO, social media et refonte de site.",
                },
                {
                  title: "SDRs ciblant les gérants de PME",
                  desc: "L’approche data-driven (classement Google réel) est directement applicable.",
                },
                {
                  title: "Freelances en marketing web",
                  desc: "Adaptez la séquence à vos propres services et portfolio de clients.",
                },
                {
                  title: "Plateformes SaaS de SEO et analytics",
                  desc: "Si votre outil aide les PME à améliorer leur présence en ligne.",
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
