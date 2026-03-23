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
    "Séquence Cold Email Restauration d&apos;Entreprise — 35% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 8 étapes sur 19 jours pour restauration d&apos;entreprise. 260 prospects contactés. 6 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/corporate-catering",
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
    name: "Restauration d&apos;Entreprise",
    path: "/insights/cold-email-templates/corporate-catering",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Quel est le cycle de décision pour la restauration d’entreprise ?",
    answer:
      "Généralement 2 à 4 semaines, d’où la séquence de 19 jours. La décision est souvent prise par le DRH ou l’office manager, avec un budget relativement faible par rapport aux achats IT. La clé est de proposer un essai (livraison test) pour que le décideur et ses équipes puissent goüter les repas.",
  },
  {
    question:
      "Pourquoi l’A/B testing est-il important pour la restauration ?",
    answer:
      "Les deux versions du Touch #1 testent &quot;cantine 2.0&quot; versus &quot;traiteur d’entreprise&quot;. Selon le profil du prospect (startup vs entreprise traditionnelle), un positionnement résonne mieux que l’autre. Tester les deux permet d’identifier quel langage génère le plus de réponses dans votre segment.",
  },
  {
    question:
      "Comment se différencier des concurrents dans la restauration ?",
    answer:
      "La triple proposition de valeur (bien-être, coût inférieur au restaurant d’entreprise, emballages recyclés) couvre les trois angles décisionnels. La photo du collègue livrant les plats humanise la communication. Et la mention de &quot;menu personnalisé selon les souhaits de vos employés&quot; ajoute une dimension de service unique.",
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
      "Notre appel - {{FirstName}} & {{salesRep}}",
    content: `Bonjour {{firstName}},

Vous pouvez voir ici mon collègue {{salesRep2}} en train de livrer nos petits plats faits maison à nos clients.



Que diriez-vous de profiter de nos préparations équilibrées et variées, à base de produits locaux, pour votre pause déjeuner ?

Je vous écris car nous sommes une entreprise genevoise qui propose une cantine 2.0 pour les entreprises. Dois-je vous contacter, vous, ou votre collègue {{colleaguename}} ?
Via notre site web, vos employés peuvent facilement commander leur déjeuner, qui sera livré le jour même à midi, le tout dans des emballages recyclés ou recyclables.

En tant qu'employeur, cela présente également des avantages pour vous. Tout d'abord, vous investissez directement dans le bien-être de vos employés. Ensuite, ce service est financièrement abordable – bien plus qu'un restaurant d'entreprise, par exemple. Enfin, nous pourrions créer un menu personnalisé en fonction des souhaits de vos employés.

Souhaiteriez-vous en savoir plus ? Je serais ravi de vous en parler au téléphone pour vous donner plus de détails. Je vous remercie d'avance pour votre réponse,

Bonne journée, 
{{salesRep}}

{{signature}}

---

Bonjour {{firstName}},

Vous pouvez voir ici mon collègue {{salesRep2}}  livrer nos petits plats faits maison à nos clients.



Que diriez-vous de profiter de nos préparations équilibrées et variées, à base de produits locaux, pour votre pause déjeuner ?

Je vous écris car nous sommes une entreprise genevoise qui propose un service de restauration d'entreprise. Je me demandais si c'est à vous ou à votre collègue {{colleaguename}} que je devrais m'adresser ?


[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "3 jours après",
    content: `Bonjour {{firstName}}.

J'imagine que vous avez sans doute un emploi du temps chargé – ma liste de tâches à accomplir ci-dessous m'a rappelé de vous écrire 😉



J'aimerais savoir si nous pouvons vous aider à améliorer les avantages sociaux de votre personnel.
 
Si vous souhaitez en savoir plus sur la manière dont nous aidons nos partenaires, seriez-vous disponible dans les prochains jours pour un appel afin que je vous donne plus de détails ? Si oui, je vous invite à prendre rendez-vous dans mon agenda.
 
Passez une excellente journée,
{{salesRep}}

{{signature}}`,
  },
  {
    number: 3,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "4 jours après",
    content: `[Message envoyé depuis le profil LinkedIn de notre client]
Bonjour {{firstName}}, j'espère que vous allez bien. Mon collègue {{salesRep}} vous a envoyé un e-mail il y a quelques jours au sujet de nos services de restauration d'entreprise. Je me réjouis de faire votre connaissance et de suivre l'actualité de {{companyName}}. Cordialement, [Client_FirstName]`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "3 jours après",
    content: `Bonjour {{firstName}},

J'espère que vous allez bien.

Je me permets de vous écrire à la suite de mon e-mail concernant [ClientCompanyName], la cantine 2.0. Je me demandais si vous aviez déjà mis en place un service similaire ?

Je vous pose cette question car nous proposons à nos partenaires de contribuer financièrement à la mise en place de repas sains, frais et gastronomiques. De plus, nous les déchargeons de toute la logistique. En fonction des avantages que vous souhaitez mettre en place, c'est une piste que nous pourrions explorer ensemble.

Si tel est le cas, je vous propose d'en discuter par téléphone dès que possible. Je vous transmets mon agenda dans lequel vous pouvez directement réserver un créneau qui vous convient.

Passez une excellente journée,

Cordialement,
{{salesRep}}

{{signature}}`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "3 jours après",
    content: `Bonjour {{firstName}},

J'espère que vous allez bien.

Seriez-vous disponible pour un bref entretien téléphonique afin de discuter de nos services proposant des repas raffinés pour vos employés ?

Si cela vous convient, voici mon agenda où vous pouvez directement réserver le créneau horaire de votre choix.

Je vous remercie d'avance pour votre réponse.

Cordialement,
{{salesRep}}

{{signature}}`,
  },
  {
    number: 6,
    channel: "call",
    label: "Appel téléphonique",
    timing: "4 jours après",
    content: `Appel à froid
Date d'envoi : 4 jours après le dernier message
Script d'appel :
Si le prospect répond :
Bonjour {{firstName}}, ici {{salesRep}} de [ClientCompanyName]. 
Je vous ai contacté par e-mail au sujet de nos services de restauration d'entreprise pour vos employés. Seriez-vous intéressé(e) pour discuter de la manière dont nos services pourraient profiter à votre entreprise ? [...]
—---—---—---—---—---—---—---—---—---—---—---— -------------—---—---—---—---—---—---—-----—---—--- —---—- -------------------------
Si oui :
En tant qu'employeur, le bien-être de vos employés est une priorité. Notre entreprise propose des services de cantine quotidiens avec des produits frais et sains qui seront livrés à vos bureaux à l'heure du déjeuner selon vos commandes. De plus, comme pour de nombreuses entreprises, le développement durable doit être l'une de vos préoccupations. En effet, tous nos produits sont emballés dans des matériaux recyclés et recyclables. Cette initiative peut vous intéresser car vous investissez directement dans le bien-être de vos employés, la pause déjeuner sera mieux encadrée et, enfin, vous pourrez réduire vos coûts. 

S'ils sont intéressés, 
posez ces questions pour qualifier le prospect :
__________________________________________________________________________________.
__________________________________________________________________________________.
__________________________________________________________________________________.
S'il est qualifié, posez ces questions afin de personnaliser la démonstration :

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 7,
    channel: "email",
    label: "Email #7",
    timing: "1 jours après",
    content: `Bonjour {{firstName}},

J'espère que vous allez bien. 

J'ai essayé de vous contacter pour discuter de notre offre proposant des repas raffinés à nos employés. Seriez-vous disponible à un autre moment pour un bref entretien téléphonique ?

Je vous remercie d'avance pour votre réponse.

{{salesRep}}

{{signature}}`,
  },
  {
    number: 8,
    channel: "email",
    label: "Email #8",
    timing: "day after the last message",
    content: `Bonjour {{firstName}},
Même si j'aurais aimé avoir de vos nouvelles, je comprends que vous ayez un emploi du temps très chargé. 
Si vous disposez d'un peu de temps libre et que vous souhaitez discuter ensemble de la manière dont nous pourrions vous aider, n'hésitez pas à me le faire savoir :) 
Cet e-mail est ma dernière tentative pour vous contacter, et je serais ravi d'avoir de vos nouvelles.
Je vous souhaite tout le meilleur pour l'avenir.
Passez une excellente journée,
Cordialement,
{{salesRep}}

{{signature}}`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function CorporateCateringPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Restauration d&apos;Entreprise — 35% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 8 étapes sur 19 jours pour restauration d&apos;entreprise.",
            path: "/insights/cold-email-templates/corporate-catering",
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
              {["RESTAURATION","MULTICANAL","RH & OFFICE"].map((tag) => (
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
                Séquence cold email pour restauration d'entreprise — 35% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                8 étapes sur 19 jours. 6 emails, 1 appel téléphonique, 1 message LinkedIn. 260 prospects contactés.
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
                value: "260",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "76%",
                label: "Taux d'ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "35%",
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
              Les 8 touches de la séquence
            </h2>
            <p
              className="mx-auto mb-12 max-w-xl text-center text-sm"
              style={{ color: "#666d70" }}
            >
              6 emails, 1 appel téléphonique, 1 message LinkedIn — sur 19 jours.
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
                260 prospects et un taux de réponse de 35% sur 19 jours — cette séquence rapide de 8 touches est adaptée au cycle de décision court du secteur de la restauration d’entreprise. La photo d’un collègue livrant les plats dans le premier email humanise immédiatement la communication.
              </p>
              <p>
                Les deux versions A/B du premier email testent des angles différents : &quot;cantine 2.0&quot; versus &quot;service traiteur pour entreprises&quot;. Cette approche d’A/B testing sur le positionnement, et non juste sur l’objet, permet d’identifier quel langage résonne le mieux avec les décideurs RH de PME genevoises.
              </p>
              <p>
                La proposition de valeur triple — bien-être des employés, coût inférieur au restaurant d’entreprise, et emballages recyclés — répond aux trois préoccupations principales d’un DRH : engagement, budget et RSE. Cette couverture complète des angles décisionnels maximise les chances de réponse.
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
                  <strong>Humaniser avec des photos de l’équipe en action.</strong>{" "}
                  La photo de livraison dans le Touch #1 rend le service tangible.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>A/B tester le positionnement, pas juste l’objet.</strong>{" "}
                  &quot;Cantine 2.0&quot; vs &quot;service traiteur&quot; teste des angles complètement différents.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Triple proposition de valeur.</strong>{" "}
                  Bien-être, coût réduit et RSE couvrent les trois angles décisionnels d’un DRH.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Cycle court de 19 jours.</strong>{" "}
                  La restauration d’entreprise est une décision rapide — inutile d’étirer la séquence.
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
                  title: "Services de restauration d’entreprise",
                  desc: "Livraison de repas, cantine 2.0, traiteur corporate — cette séquence cible les décideurs RH des PME.",
                },
                {
                  title: "Ciblage PME en région lémanique",
                  desc: "Entreprises de 9 à 249 employés dans les cantons de Genève et Vaud sont le sweet spot.",
                },
                {
                  title: "Solutions de bien-être au travail",
                  desc: "Si votre offre améliore la qualité de vie au bureau — nutrition, santé, équilibre — le modèle s’applique.",
                },
                {
                  title: "Services avec livraison quotidienne",
                  desc: "L’aspect opérationnel quotidien (commande + livraison le même jour) est un argument clé.",
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
                  title: "Traiteurs d’entreprise",
                  desc: "Si vous livrez des repas quotidiens aux entreprises avec des produits frais et locaux.",
                },
                {
                  title: "SDRs ciblant les DRH de PME",
                  desc: "Le ton et l’approche sont calibrés pour les décideurs RH d’entreprises de 9 à 249 employés.",
                },
                {
                  title: "Solutions de well-being au travail",
                  desc: "Nutrition, santé, équilibre au bureau — adaptez la proposition de valeur.",
                },
                {
                  title: "Startups FoodTech B2B",
                  desc: "Si votre modèle combine technologie (commande en ligne) et service alimentaire.",
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
