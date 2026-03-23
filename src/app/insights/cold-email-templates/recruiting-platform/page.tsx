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
    "Séquence Cold Email Plateforme de Recrutement — 24% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 8 étapes sur 25 jours pour plateforme de recrutement. 538 prospects contactés. 5 emails, 1 appel téléphonique, 2 messages LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/recruiting-platform",
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
    name: "Plateforme de Recrutement",
    path: "/insights/cold-email-templates/recruiting-platform",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment se démarquer dans un marché RH saturé de messages ?",
    answer:
      "L’utilisation de photos humoristiques (to-do list, photo montage), de deux profils LinkedIn différents et d’emojis réfléchis crée une personnalité de marque que les recruteurs apprécient. Les DRH sont habitués aux emails corporate — un ton légèrement décalé attire l’attention sans perdre le professionnalisme.",
  },
  {
    question:
      "Pourquoi intégrer une visite de profil LinkedIn dans la séquence ?",
    answer:
      "Le Touch #3 (visite de profil sans message) est une technique subtile : le prospect voit que quelqu’un de l’entreprise a visité son profil, ce qui augmente la curiosité et la familiarité. Combiné avec la connexion LinkedIn du Touch #5 par un autre membre de l’équipe, cela crée un effet de &quot;presence&quot; multi-profils.",
  },
  {
    question:
      "Comment l’A/B testing améliore-t-il la séquence de recrutement ?",
    answer:
      "Les deux versions du Touch #2 testent des angles différents : le premier met l’accent sur la simplicité de l’approche, le second sur les résultats concrets. En mesurant quel angle génère plus de réponses, vous optimisez le messaging pour les envois suivants. Nous recommandons toujours un échantillon de 100+ prospects par variant pour obtenir des résultats significatifs.",
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
      "Notre appel {{firstName}} - plateforme de recrutement",
    content: `Bonjour {{firstName}},

Notre plateforme de recrutement peut vous aider, vous et {{companyName}}, à rencontrer de nouveaux talents.

Je me demandais si c'est à vous ou plutôt à votre collègue {{colleaguename}} que je devrais m'adresser ?




Nos clients, tels que {{client_ref}}, utilisent déjà avec succès notre solution pour rencontrer des candidats lors d'un déjeuner informel, que ce soit en ligne ou en personne (comme vous l'avez peut-être deviné en voyant mon montage photo ci-dessus 😊).

Le principe est simple : des étudiants ou de jeunes diplômés postulent via notre plateforme pour demander un déjeuner avec un employé. Si leur candidature est retenue, ils rencontrent l’employé du service choisi pour une discussion informelle autour d’un déjeuner.

Chaque jour, notre plateforme s’enrichit de nouveaux profils d’étudiants, de diplômés et de jeunes professionnels issus de nombreuses universités et écoles supérieures. {{icebreaker}}

Que diriez-vous de nous contacter la semaine prochaine pour voir si notre solution numérique peut vous aider à recruter davantage de talents ? Autour d'un café virtuel, peut-être ?

Merci d'avance pour vos commentaires,

Cordialement,
{{salesRep}}

PS : Voici un exemple de  {{ClientCompanyName}} avec {{client_ref}} 😃

{{signature}}`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "4 jours après",
    content: `Bonjour {{firstName}},

J'imagine que votre emploi du temps est très chargé – ma liste de tâches ci-dessous m'a rappelé de vous écrire 😉





Blague à part, je suis convaincu que vos candidats actuels et potentiels sont au cœur de toutes les activités de {{companyName}}. Aujourd'hui, le recrutement est crucial, mais un peu plus complexe qu'auparavant.

C'est pourquoi vous et votre équipe serez agréablement surpris de voir à quel point notre solution soutient nos clients et vous aide à atteindre vos objectifs de recrutement.

Comment abordez-vous actuellement le recrutement ? Les résultats sont-ils à la hauteur de vos attentes ?

Cordialement,
{{salesRep}}

PS : J'espère que la photo ci-dessus vous a fait sourire ! Passez une excellente journée


{{signature}}

---

Bonjour {{firstName}},

J'imagine que votre emploi du temps est très chargé – ma liste de tâches ci-dessous m'a rappelé de vous écrire 😉





Blague à part, je pense que vos employés actuels et potentiels sont au cœur de tout ce que fait {{companyName}}. Aujourd'hui, le recrutement est crucial, mais un peu plus complexe qu'auparavant.

C'est pourquoi vous et votre équipe serez agréablement surpris de voir à quel point notre solution soutient nos clients et vous aide à atteindre vos objectifs de recrutement.

Comment abordez-vous actuellement le recrutement ? Les résultats sont-ils à la hauteur de vos attentes ?

Que diriez-vous d'explorer ensemble cette nouvelle approche par téléphone dans les prochains jours ?

Cordialement,
{{salesRep}}

PS : J'espère que la photo ci-dessus vous a fait sourire ! Passez une excellente journée


{{signature}}`,
  },
  {
    number: 3,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "N/A",
    content: `Visite du profil LinkedIn
Date de la visite : le jour même du dernier contact
Objet : identique au précédent
Contenu : Aucun
Visite du profil LinkedIn de {{ClientCompanyName}}`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "4 jours après",
    content: `Bonjour {{firstName}},
J'espère que vous allez bien.
Je n'ai pas eu de vos nouvelles, je suppose donc que vous êtes très occupé en ce moment, ou bien quelqu'un d'autre s'occupe-t-il du recrutement ?
Mon collègue {{salesRep}} et moi-même serions ravis de rencontrer un représentant de {{companyName}} 😃
Merci d'avance pour votre réponse,
Cordialement,
{{salesRep}}
P.S. : J'ai pensé à vous car nos partenaires les plus performants ont déjà enrichi leur vivier de talents de plus de 100 profils grâce à notre solution !
{{signature}}`,
  },
  {
    number: 5,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "Sent from another team member 2 jours après",
    content: `Bonjour {{firstName}}, c'est {{salesRep2}} de chez {{ClientCompanyName}}. Je suis le collègue de {{salesRep}}, qui vous a contacté par e-mail. Ce serait formidable de se connecter et d'échanger des nouvelles concernant {{companyName}} sur LinkedIn. Prenez soin de vous`,
  },
  {
    number: 6,
    channel: "call",
    label: "Appel téléphonique",
    timing: "3 jours après",
    content: `Démarchage téléphonique
Réalisation : 3 jours après le dernier contact
Script d'appel :
Si le prospect décroche :
Bonjour {{firstName}}, je m'appelle {{salesRep}} et je travaille chez {{ClientCompanyName}}. 
Je vous ai envoyé un e-mail concernant notre plateforme de recrutement : nous aidons des entreprises comme {{client_ref}} à renforcer la notoriété de leur marque employeur. Seriez-vous intéressé(e) pour discuter des résultats obtenus ? [...]
Si oui : 
Parfait, très bien. Je vous propose d'organiser une démonstration lorsque vous serez disponible. Auriez-vous 2 minutes maintenant pour répondre à quelques questions afin de mieux cerner votre situation et nous permettre de préparer une présentation personnalisée, incluant des exemples de réussite d'entreprises au profil similaire ?
S'il est intéressé, 
posez ces questions pour qualifier le prospect :
__________________________________________________________________________________.
__________________________________________________________________________________.
__________________________________________________________________________________.
S'ils sont qualifiés, posez ces questions afin de personnaliser la démonstration :
__________________________________________________________________________________.
__________________________________________________________________________________.
__________________________________________________________________________________.
Appel à l'action → Planifiez une démonstration avec notre cofondateur/dirigeant directement dans son agenda.

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 7,
    channel: "email",
    label: "Email #7",
    timing: "4 jours après",
    content: `Bonjour {{firstName}},

J'espère que vous allez bien.

Je souhaitais vous donner un peu plus de détails sur notre solution, qui facilitera votre processus de recrutement.

Notre plateforme permet non seulement de créer de véritables liens entre les meilleurs employeurs et les meilleurs talents, mais elle se charge également de toute la coordination.

En d'autres termes, votre équipe RH reçoit les candidatures, ce qui vous permet de présélectionner les profils qui vous intéressent le plus. Notre outil les met ensuite automatiquement en relation avec un collaborateur disponible du service concerné pour un déjeuner ou un café.

Si vous n'avez pas encore reçu de retour, le recrutement n'est-il pas à l'ordre du jour ? Ou souhaitez-vous d'abord recevoir plus d'informations ?

Merci d'avance pour votre réponse,
{{salesRep}}

PS : Voici un café pour bien terminer votre journée 🙂




{{signature}}`,
  },
  {
    number: 8,
    channel: "email",
    label: "Email #8",
    timing: "4 jours après",
    content: `Bonjour {{firstName}},
 
Il semble que vous ayez un emploi du temps chargé et j'espère ne pas vous déranger.
 
Cet e-mail est ma dernière tentative pour vous contacter. Je reste toutefois à votre disposition si vous trouvez le temps de discuter.
 
Ou devrais-je m'adresser à ton collègue {{colleaguename}} ?
 
Je te souhaite une excellente journée et te remercie d'avance pour ta réponse.
 
Cordialement,
{{salesRep}}
 
PS : Une dernière jolie image pour la route !






{{signature}}`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function RecruitingPlatformPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Plateforme de Recrutement — 24% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 8 étapes sur 25 jours pour plateforme de recrutement.",
            path: "/insights/cold-email-templates/recruiting-platform",
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
              {["RECRUTEMENT","MULTICANAL","RH & TALENT"].map((tag) => (
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
                Séquence cold email pour plateforme de recrutement — 24% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                8 étapes sur 25 jours. 5 emails, 1 appel téléphonique, 2 messages LinkedIn. 538 prospects contactés.
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
                value: "538",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "71%",
                label: "Taux d'ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "24%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "33",
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
              Les 8 touches de la séquence
            </h2>
            <p
              className="mx-auto mb-12 max-w-xl text-center text-sm"
              style={{ color: "#666d70" }}
            >
              5 emails, 1 appel téléphonique, 2 messages LinkedIn — sur 25 jours.
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
                538 prospects et un taux de réponse de 24% sur 25 jours — cette séquence de 8 touches est optimisée pour le monde du recrutement. La proposition de valeur est immédiatement compréhensible : connecter des talents avec des entreprises autour d’un déjeuner informel, virtuel ou en personne.
              </p>
              <p>
                L’intégration de deux profils LinkedIn différents (Touch #3 et #5) dans la séquence est une technique avancée. Le prospect reçoit des messages de deux personnes différentes, ce qui crée une impression d’équipe investie et renforce la crédibilité de l’entreprise.
              </p>
              <p>
                Le PS du Touch #4 — &quot;nos partenaires les plus performants ont déjà augmenté leur pool de talents de plus de 100 profils&quot; — est un accélérateur de décision. Pour un recruteur sous pression, l’idée de 100 profils supplémentaires est un argument irrésistible.
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
                  <strong>Utiliser deux profils LinkedIn différents.</strong>{" "}
                  Des messages de deux personnes de l’équipe renforcent la crédibilité et la visibilité.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Chiffrer le bénéfice en termes de pool de talents.</strong>{" "}
                  &quot;+100 profils supplémentaires&quot; est un argument concret pour un recruteur.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>A/B tester les emails de suivi.</strong>{" "}
                  Deux versions du Touch #2 permettent d’optimiser l’angle le plus performant.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Le breakup email récupère les indécis.</strong>{" "}
                  &quot;Cet email est ma dernière tentative&quot; déclenche un effet de rareté.
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
                  title: "Plateformes de recrutement innovantes",
                  desc: "Votre solution connecte candidats et entreprises de manière informelle. Déjeuners, cafés, networking — cette séquence est votre guide.",
                },
                {
                  title: "Ciblage RH et talent acquisition",
                  desc: "HR managers, talent acquisition leads et employer branding specialists sont les cibles idéales.",
                },
                {
                  title: "Marché suisse francophone",
                  desc: "La séquence combine français et anglais, adaptée au marché suisse romand.",
                },
                {
                  title: "Solutions d’employer branding",
                  desc: "Si votre produit améliore la marque employeur et l’attractivité des entreprises auprès des jeunes talents.",
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
                  title: "Plateformes de recrutement",
                  desc: "Si votre solution connecte candidats et entreprises de manière innovante.",
                },
                {
                  title: "SDRs ciblant les RH et talent acquisition",
                  desc: "Les scripts et templates sont prêts pour le secteur du recrutement.",
                },
                {
                  title: "Solutions d’employer branding",
                  desc: "Adaptez la séquence à votre propre proposition de marque employeur.",
                },
                {
                  title: "Équipes commerciales HR Tech",
                  desc: "Toute solution qui améliore le processus de recrutement des entreprises.",
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
