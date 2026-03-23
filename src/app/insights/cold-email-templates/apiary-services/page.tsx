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
    "Séquence Cold Email Services Apicoles & Biodiversité — 40% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 30 jours pour services apicoles & biodiversité. 542 prospects contactés. 5 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/apiary-services",
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
    name: "Services Apicoles & Biodiversité",
    path: "/insights/cold-email-templates/apiary-services",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Est-ce que le sujet de la biodiversité fonctionne dans le cold emailing B2B ?",
    answer:
      "Oui, et remarquablement bien. Le taux de réponse de 40% sur 542 prospects démontre que les sujets à forte résonance émotionnelle performent mieux que les propositions purement techniques. La biodiversité est un sujet qui touche personnellement les décideurs, au-delà de leur rôle professionnel. La clé est de connecter ce sujet aux objectifs business (RSE, engagement employés, reporting ISO).",
  },
  {
    question:
      "Combien de touches sont nécessaires pour les responsables CSR ?",
    answer:
      "7 touches sur 30 jours avec un mix de 4 emails, 1 appel et 2 messages LinkedIn. Les responsables CSR sont généralement plus ouverts aux nouvelles propositions que les profils IT ou finance, mais leur agenda est tout aussi chargé. La connexion LinkedIn du président de l’association au Touch #7 ajoute une couche de crédibilité supplémentaire.",
  },
  {
    question:
      "Comment personnaliser l’icebreaker pour un sujet RSE ?",
    answer:
      "Consultez le rapport annuel ou la page RSE du site web du prospect. Mentionnez une initiative spécifique qu’ils ont lancée. Par exemple : &quot;J’ai lu votre rapport annuel qui présente vos actions de solidarité&quot;. Cette recherche prend 3 minutes par prospect mais multiplie par 2x le taux de réponse du premier email.",
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
      "Notre appel {{firstName}} - projet de développement durable",
    content: `Bonjour {{firstName}},

{{Icebreaker - example: I read your annual report, which presents the actions of your solidarity commitment for the last year.}}

L'engagement des employés et le développement durable sont sans doute deux sujets qui vous tiennent à cœur. Plusieurs organisations telles que l'OMC, le FEM ou Caran d'Ache collaborent avec notre association à but non lucratif. 

Ensemble, nous agissons en faveur de la biodiversité : pour protéger les abeilles, nos clients accueillent des ruches sur le site de leur entreprise ou les adoptent dans nos ruchers si leur lieu de travail ne permet pas d'accueillir de ruches.

Nous nous occupons de tout. Vous bénéficiez de nombreux avantages, tels que :
Sensibiliser, mobiliser et rassembler vos collaborateurs autour de différentes activités de team building
Renforcer/diversifier votre programme d'engagement en matière de développement durable et de solidarité
Communiquer sur votre engagement en interne et en externe (rapports annuels, ISO)

Si la protection de la biodiversité est essentielle pour {{companyName}}, seriez-vous intéressé(e) d'en discuter ensemble lors d'un premier contact téléphonique ?

Dans l'attente de votre réponse,

Meilleures salutations,
{{salesRep}} pour [ClientCompanyName]

P.S. : Aimez-vous le miel ?

{{signature}}`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "7 jours après",
    content: `Bonjour {{firstName}},

Vous vous posez certainement plusieurs questions suite à mon précédent e-mail :) Voici quelques précisions et une proposition à votre intention.

Nous sommes confrontés à la sixième extinction de masse – celle qui a entraîné la disparition des dinosaures. Les insectes sont les animaux les plus touchés, en particulier les abeilles. Or, ils constituent la clé de voûte de la biodiversité, car ils pollinisent les plantes.

[ClientCompanyName] souhaite sensibiliser le public à cette cause et collabore avec des partenaires privés pour changer les choses à grande échelle. Les employés de {{companyName}} pourraient s’impliquer localement et concrètement pour protéger les abeilles.

Si vos locaux ne se prêtent pas à l’installation de ruches, vous pouvez toujours en adopter une dans nos ruchers. Votre ruche sera alors personnalisée avec le logo de votre entreprise, et tout le miel produit vous sera envoyé dans des pots arborant votre logo ou votre motif.

Nous serions ravis de venir vous rendre visite et de vous présenter certaines de nos initiatives, comme celle de Clarins : [video link]

Auriez-vous 45 minutes à nous consacrer ? Par exemple, jeudi prochain en début de matinée ?

Dans l'attente de votre réponse.

Cordialement,
{{salesRep}}

{{signature}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "5 jours après",
    content: `Bonjour {{firstName}},
Vaut-il mieux contacter votre collègue {{colleaguename}} ? Ou peut-être quelqu'un d'autre ?
Ou est-ce parce que :
Vous préférez en discuter ensemble à un autre moment
Cette proposition ne vous intéresse pas
Vous avez déjà un partenariat en place
Ou pour une autre raison ?
Merci d'avance pour votre réponse,

Cordialement,
{{salesRep}}

PS : Ma liste de tâches avec photo ci-dessous m'a rappelé de vous écrire 😉

{{signature}}`,
  },
  {
    number: 4,
    channel: "call",
    label: "Appel téléphonique",
    timing: "3 jours après",
    content: `Premier appel à froid
Date d'envoi : 3 jours après le dernier message
Script d'appel :
Si le prospect répond :

Bonjour {{firstName}}, c'est {{salesRep}} de chez [ClientCompanyName]. Comment allez-vous ? … [« Oui, merci, et vous ? »]

Eh bien, merci. Je vous ai contacté par e-mail au sujet de notre projet sur la biodiversité et les ruches. J'ai vu que vous êtes [JobTitle] chez [ProspectCompanyName]. Je voulais vous appeler. Avez-vous une minute pour discuter ? 

Si oui :

Nous sommes une association d'utilité publique reconnue qui met en place des partenariats avec des entreprises comme la vôtre pour agir en faveur de la biodiversité et lutter contre la disparition des abeilles.

Nous installons de petites ruches sur les sites de nos clients ; nous nous occupons de tout. Nous organisons également des activités de team building, des ateliers et des cadeaux que vous pouvez offrir à vos clients. C'est pourquoi je souhaitais savoir si vous seriez intéressé(e) par une rencontre avec mon responsable [ClientFirstName] pour obtenir plus d'informations sur le projet.
—---—---—---—---—---—---—---—---—---—---—---—---—- -------__PROTÉGÉ_19____PROTÉGÉ_20____PROTÉGÉ_21____PROTÉGÉ_22____PROTÉGÉ_23____PROTÉGÉ_24____PROTÉGÉ_25____PROTÉGÉ_26____PROTÉGÉ_27____PROTÉGÉ_28____PROTÉGÉ_29__ -------------------------
S'ils sont intéressés, 
posez ces questions pour qualifier le prospect :
__________________________________________________________________________________.
__________________________________________________________________________________.
__________________________________________________________________________________.
S'ils sont qualifiés, posez ces questions afin de personnaliser la démonstration :
__________________________________________________________________________________.

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "1 jours après",
    content: `Bonjour {{firstName}},

Vous avez peut-être reçu un appel manqué de ma part hier. Seriez-vous disponible à un autre moment ?

Ce serait formidable de discuter ensemble de l'engagement de vos collaborateurs et de vos projets de RSE. Vous pouvez également nous parler de vos projets de team building ou de journées de bénévolat, et je pourrais vous expliquer comment nous aidons nos clients dans ce domaine.

Je vous souhaite une excellente journée,
{{salesRep}}

P.S. : Voici un petit café virtuel pour vous aider à passer une bonne journée :) !



{{signature}}`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "4 jours après",
    content: `Bonjour {{firstName}}, 

J'espère que vous allez bien.
 
Nous avons essayé de vous contacter à plusieurs reprises, et si notre association ne vous intéresse pas, nous le comprendrons.
 
L'un de vos collègues serait-il intéressé par le projet que nous proposons ? Peut-être {{colleaguename}} ?
 
Nous restons à votre entière disposition si vous avez des questions.
 
Je vous souhaite tout le meilleur pour l'avenir.

Cordialement,
{{salesRep}}

{{signature}}`,
  },
  {
    number: 7,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "1 jours après",
    content: `Demande de connexion sur LinkedIn
Date d'envoi : 1 jour après le dernier message
Contenu : provenant de LinkedIn
Bonjour {{firstName}}, je suis [President_FirstName], président de [ClientCompanyName]. Notre membre {{salesRep}} vous a contacté par e-mail. J'espère avoir bientôt de vos nouvelles`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ApiaryServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Services Apicoles & Biodiversité — 40% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 7 étapes sur 30 jours pour services apicoles & biodiversité.",
            path: "/insights/cold-email-templates/apiary-services",
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
              {["BIODIVERSITÉ","MULTICANAL","CSR & RH"].map((tag) => (
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
                Séquence cold email pour services apicoles & biodiversité — 40% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 30 jours. 5 emails, 1 appel téléphonique, 1 message LinkedIn. 542 prospects contactés.
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
                value: "542",
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
                value: "40%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "70",
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
                Le taux de réponse de 40% sur 542 prospects s’explique par un positionnement émotionnel fort. La protection des abeilles et la biodiversité sont des sujets qui résonnent personnellement avec les décideurs CSR et RH, bien au-delà du cadre professionnel. Cette connexion émotionnelle transforme un cold email en une conversation engageante.
              </p>
              <p>
                Les références à des organisations prestigieuses comme l’OMC, le WEF et Caran d’Ache dans le premier email établissent immédiatement la crédibilité. Pour un responsable CSR, savoir que des organisations de ce calibre participent au programme élimine le doute sur la légitimité du projet.
              </p>
              <p>
                La signature &quot;Best bee-wishes&quot; et la question &quot;Do you like honey?&quot; humanisent la communication et créent un sourire. Dans un monde de cold emails très corporate, cette touche d’humour décalé démarque le message et augmente la mémorabilité de l’expéditeur.
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
                  <strong>Exploiter l’émotion dans le B2B.</strong>{" "}
                  La biodiversité et les abeilles créent un lien émotionnel rare dans le cold emailing.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Les références institutionnelles ouvrent des portes.</strong>{" "}
                  OMC, WEF, Caran d’Ache — des noms qui valident instantanément la démarche.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Personnaliser le PS comme outil d’engagement.</strong>{" "}
                  &quot;Do you like honey?&quot; et &quot;Best bee-wishes&quot; rendent le message mémorable.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer une vidéo client comme preuve sociale.</strong>{" "}
                  La vidéo Clarins au Touch #2 permet au prospect de visualiser le projet.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Adapter l’offre aux contraintes physiques.</strong>{" "}
                  Si les bureaux ne permettent pas d’accueillir des ruches, proposer l’adoption dans un rucher partenaire.
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
                  title: "Programmes CSR et biodiversité",
                  desc: "Votre solution aide les entreprises à renforcer leur engagement environnemental. Les ruches ne sont qu’un exemple — adaptez la proposition de valeur.",
                },
                {
                  title: "Ciblage responsables RSE et RH",
                  desc: "Votre buyer persona est un VP CSR, Head of HR ou Office Manager sensible aux initiatives de team-building.",
                },
                {
                  title: "Organisations internationales et grands comptes",
                  desc: "L’approche fonctionne particulièrement bien avec les organisations qui publient des rapports RSE annuels.",
                },
                {
                  title: "Propositions de team-building éco-responsables",
                  desc: "Si vous proposez des activités de cohésion d’équipe liées à la nature ou au développement durable.",
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
                  title: "Associations et ONG environnementales",
                  desc: "Si votre mission inclut la biodiversité, l’agriculture urbaine ou le team-building nature.",
                },
                {
                  title: "SDRs ciblant les départements CSR",
                  desc: "Le vocabulaire RSE et les références institutionnelles sont calibrés pour ce public.",
                },
                {
                  title: "Entreprises de team-building",
                  desc: "Adaptez la proposition à vos propres activités de cohésion d’équipe éco-responsables.",
                },
                {
                  title: "Tout fournisseur B2B vendant aux RH/CSR",
                  desc: "Même hors biodiversité, la structure et le timing s’appliquent à tout produit CSR.",
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
