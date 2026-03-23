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
    "Séquence Cold Email Stationnement Vélo — 44% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 40 jours pour stationnement vélo. 286 prospects contactés. 5 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/bike-parking",
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
    name: "Stationnement Vélo",
    path: "/insights/cold-email-templates/bike-parking",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment vendre des bornes vélo aux collectivités ?",
    answer:
      "La clé est de connecter le produit aux priorités politiques : mobilité douce, sécurité des usagers, développement durable. La statistique des 600 vélos volés/jour crée l’urgence. L’approche LinkedIn du CEO suivie d’emails personnalisés contourne les filtres des administrations et atteint directement le décideur.",
  },
  {
    question:
      "Pourquoi démarrer la séquence par LinkedIn ?",
    answer:
      "Les décideurs universitaires et les responsables patrimoine utilisent activement LinkedIn. La connexion du CEO en Touch #1 avec une note personnalisée crée un lien direct et de haut niveau. L’email détaillé suit au Touch #2, quand le prospect a déjà vu le nom de l’entreprise.",
  },
  {
    question:
      "Comment créer l’urgence dans le secteur public ?",
    answer:
      "L’offre &quot;10 premiers candidats à 50%&quot; et l’installation offerte créent un effet de rareté inhabituel dans le secteur public. La mention d’un appel à projet remporté récemment renforce la crédibilité et crée un sentiment d’opportunité limitée dans le temps.",
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
    content: `Demande de connexion sur LinkedIn
Date d&apos;envoi : premier jour de la séquence
Expéditeur : [Client_Name]
Contenu : depuis LinkedIn

1. 1. Note de demande de connexion LinkedIn :
Bonjour {{salutation}} {{lastName}}, j&apos;ai lu vos différents posts sur LinkedIn en tant que responsable du patrimoine et du développement durable. Connectons-nous sur LinkedIn. Cordialement

1. 2. Si la demande de connexion LinkedIn est acceptée, envoyer le message suivant 7 jours plus tard :
Bonjour {{salutation}} {{lastName}}, mon collègue {{salesRep}}  va vous inviter par e-mail. C’est au sujet de notre offre spéciale pour cet automne afin de protéger vos {{audience}} contre le vol de vélo vu que vous êtes.

1. 3. Message vocal :
“Bonjour, c’est [Client_Name]. Nous venons de remporter l’appel à projet de {{city/region}} afin de remplir les rues de nos stations parking vélos révolutionnaires. Notre priorité est la sécurité de tous les cyclistes en proposant une solution locale et durable. Est-ce également un enjeu pour vous ?”`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "N/A",
    content: `Email n°1 - Introduction) + intitulé du poste (Touch n°7 - Email n°5 - Dernière tentative)
Appel à l&apos;action : Planifier un appel découverte pour qualifier les besoins du prospect

Touches

---

Bonjour {{salutation}} {{lastName}},

{{Icebreaker}} J'ai lu sur internet que Seneffe a installé quatre stations de réparation de vélos à différents endroits afin de promouvoir la mobilité douce et d&apos;encourager l’utilisation du vélo comme moyen de transport ou de loisir. Belle initiative

En ce sens, j&apos;imagine que de plus en plus d&apos;entre eux se déplacent en deux-roues jusque dans vos locaux. Cependant vous savez que leur utilisation n&apos;est plus sans risque. En 2022, environ 600 vélos ont été volés chaque jour en Belgique. C’est de ce constat qu’est né [Client_Name].

Nous avons développé des bornes de stationnement vélos 100% sécurisées, durables (matériaux recyclés) et autonomes (panneaux solaires). Nos utilisateurs gèrent la fixation de leur vélo à la station en quelques clics via notre app mobile gratuite. Nos bornes sécurisent la roue avant ET le cadre, rendant le vol et le démontage impossible.

Si la sécurité de vos étudiants et une mobilité plus douce sont des sujets pertinents pour vous, je serai ravi de vous donner un peu plus de contexte par téléphone.

Est-ce que ça vous intéresse ou suis-je hors sujet?

Bien cordialement,
PS:  Faisons en sorte de ne pas en arriver là!

{{signature}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "7 jours après",
    content: `Bonjour {{salutation}} {{lastName}},

Que pensez-vous de ma proposition concernant nos stations antivols pour vélos [ClientCompanyName]?

D’ailleurs, nous venons de remporter un appel à projet de la région de Bruxelles-Capitale.

C’est aussi ce qui nous pousse à contacter des {{ICP}} sensibles à la problématique du vol de vélos, certainement comme {{companyName}}.

À cet effet, j’aimerais vous présenter notre offre spéciale pour cet automne. Les 10 premiers candidats bénéficieront de remises jusqu’à 50% ainsi que des garanties élargies jusqu’à 5 ans pour certains contrats. 

En bonus, l&apos;installation qui normalement coûte €490 sera exceptionnellement offerte à l’achat de 3 stations minimum. Pour finir, nos équipes vous aideront à faire la promotion des stations [ClientCompanyName] afin d’assurer son utilité pour vos utilisateurs.

Est-ce que ça vous intéresse d’explorer cette proposition avec [CEO_Name], notre CEO?

Bien cordialement,

PS: ma liste des tâches en photo ci-dessous m'a rappelé de vous écrire 😉



{{signature}}`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "5 jours après",    subject:
      "Prise de contact avec {{ColleagueName1}} ou {{ColleagueName2}}",
    content: `Bonjour {{salutation}} {{lastName}},

Est-il mieux de contacter vos collègues {{ColleagueName1}} ou {{ColleagueName2}} concernant nos bornes antivols pour vélos?

Votre emploi du temps est certainement chargé, mais j’imagine que faciliter l&apos;accès à vos locaux en favorisant une mobilité plus douce reste d&apos;actualité. De plus, vous pourrez mettre cela en avant pour vous différencier des autres universités.

Bien cordialement,
{{signature}}`,
  },
  {
    number: 5,
    channel: "call",
    label: "Appel téléphonique",
    timing: "3 jours après",
    content: `Appel à froid n°1
Date d&apos;envoi : 3 jours après le dernier message
Script d&apos;appel :
Si le prospect répond :
Intro statement: C’est  [Client_Name] de [ClientCompanyName], je vous ai contacté par e-mail parce que vous êtes le {{jobtilte}} de la Ville de {{city}} et je vous ai écrit au sujet de la protection des vélos de vos {{audience}}. Est-ce que vous avez deux minutes pour discuter ensemble?
Objectif : à définir
CTA: C’est la raison pour laquelle j’aimerais vous rencontrer et vous présenter les résultats de nos clients. Est-ce que ça vous intéresse?
Contexte : à définir
Arguments supplémentaires selon le rôle/secteur de votre prospect :

Suivre le script d&apos;appel à froid suivant
Si oui, poser ces questions pour personnaliser la démo et qualifier le prospect
à définir
Sinon, demander pourquoi et surmonter les objections : (Courtoisie - Problème - Action)
à définir`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "0 jours après",    subject:
      "Appel manqué - bornes pour vélos",
    content: `Bonjour {{salutation}} {{lastName}},

Je n&apos;ai pas réussi à vous joindre par téléphone aujourd&apos;hui.

Comme les autres {{ICP}} de Belgique, vous souhaitez fournir un espace attrayant, sûr et durable à vos {{Audience}}.

Vous le savez, les vols de vélos augmentent année après année. C'est un vrai problème qui crée du stress auprès des cyclistes et qui freine la pratique. 

Ce n’est pas surprenant étant donné que n&apos;importe quel cadenas peut être forcé en quelques secondes avec les bons outils.

Cependant, nous garantissons que nos stations protègent à 100% contre le vol. Les stations {{salesRep}} ont été pensées dans 2 uniques buts: être incassables et durables. 

Si la mobilité douce et le bien-être de vos {{Audience}} sont des sujets pertinents pour {{companyName}}, je serais ravi d’en discuter avec vous par téléphone.

Qu’en pensez-vous?

Cordialement,
{{salesRep}}

PS : Voici un petit café virtuel pour continuer votre journée :) !

{{signature}}`,
  },
  {
    number: 7,
    channel: "email",
    label: "Email #7",
    timing: "7 jours après",
    content: `Bonjour {{salutation}} {{lastName}},

Comme vous êtes {{jobtitle}} {{companyname}}, vous avez certainement beaucoup de projets en cours et votre calendrier est très chargé.

Si ça ne vous intéresse pas, faites-le moi savoir, je comprendrai.

Ou est-ce que c’est mieux de s’écrire en début d’année prochaine?

Bien cordialement,
 
{{signature}}`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function BikeParkingPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Stationnement Vélo — 44% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 7 étapes sur 40 jours pour stationnement vélo.",
            path: "/insights/cold-email-templates/bike-parking",
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
              {["MOBILITÉ DOUCE","MULTICANAL","VILLES & UNIVERSITÉS"].map((tag) => (
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
                Séquence cold email pour stationnement vélo — 44% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 40 jours. 5 emails, 1 appel téléphonique, 1 message LinkedIn. 286 prospects contactés.
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
                value: "286",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "89%",
                label: "Taux d&apos;ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "44%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "39",
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
                286 prospects contactés avec un taux de réponse de 44% et un taux d’ouverture remarquable de 89%. Cette séquence de 7 touches sur 40 jours exploite un sujet à forte résonance émotionnelle : le vol de vélos. Avec 600 vélos volés par jour en Belgique, le problème est tangible et urgent.
              </p>
              <p>
                La stratégie de démarrer par une connexion LinkedIn personnalisée du CEO (Touch #1) suivie d’un email détaillé (Touch #2) est très efficace pour cibler les universités et collectivités. La note LinkedIn prépare le terrain, et l’email apporte la substance.
              </p>
              <p>
                L’offre spéciale avec &quot;remises jusqu’à 50% pour les 10 premiers candidats&quot; et &quot;installation offerte à l’achat de 3 stations&quot; (Touch #3) crée un effet d’urgence et de rareté qui accélère la prise de décision dans le secteur public, où les processus sont habituellement longs.
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
                  <strong>Utiliser des statistiques choquantes.</strong>{" "}
                  600 vélos volés par jour en Belgique — un chiffre qui crée l’urgence immédiate.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Démarrer par le CEO sur LinkedIn.</strong>{" "}
                  La connexion du CEO prépare le terrain pour les emails du commercial.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Offrir des remises limitées dans le temps.</strong>{" "}
                  50% pour les 10 premiers + installation offerte accélèrent la décision publique.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Garantir 100% de protection contre le vol.</strong>{" "}
                  Une garantie absolue élimine l’objection principale des acheteurs.
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
                  title: "Solutions de mobilité douce",
                  desc: "Bornes de stationnement vélo, infrastructure cyclable, solutions de micromobilité — cette séquence cible les bons décideurs.",
                },
                {
                  title: "Ciblage universités et collectivités",
                  desc: "Responsables patrimoine, développement durable et mobilité dans les institutions publiques.",
                },
                {
                  title: "Marché belge et français",
                  desc: "La séquence en français avec des références Bruxelles-Capitale est calibrée pour ce marché.",
                },
                {
                  title: "Produits éco-responsables et durables",
                  desc: "Matériaux recyclés, panneaux solaires, autonomie énergétique — la durabilité est un argument central.",
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
                  title: "Fabricants de mobilier urbain",
                  desc: "Bornes vélo, stations de recharge, casiers — toute solution d’infrastructure cyclable.",
                },
                {
                  title: "SDRs ciblant les collectivités et universités",
                  desc: "Le ton et les références sont adaptés au secteur public et éducatif.",
                },
                {
                  title: "Startups mobilité douce",
                  desc: "Si votre solution favorise le vélo, la trottinette ou la micromobilité en ville.",
                },
                {
                  title: "Entreprises de sécurité urbaine",
                  desc: "Adaptez la proposition de valeur à la sécurité des biens dans l’espace public.",
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
