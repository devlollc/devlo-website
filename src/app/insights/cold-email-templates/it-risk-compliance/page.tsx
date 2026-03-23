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
    "Séquence Cold Email Risque IT & Conformité — 11% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 5 étapes sur 30 jours pour risque it & conformité. 378 prospects contactés. 4 emails, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/it-risk-compliance",
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
    name: "Risque IT & Conformité",
    path: "/insights/cold-email-templates/it-risk-compliance",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment remplir un événement via le cold emailing ?",
    answer:
      "La clé est de transformer l’invitation en opportunité de networking, pas en pitch commercial. Mentionner &quot;60 professionnels invités&quot; crée l’exclusivité. Les sujets réglementaires (DORA, EU AI Act) attirent les professionnels compliance par intérêt génuine, pas par obligation. Et la gratuité élimine la barrière financière.",
  },
  {
    question:
      "Pourquoi seulement 5 touches pour un événement ?",
    answer:
      "5 touches sur 30 jours suffisent car la décision est simple : y aller ou non. Pas besoin de 9 touches comme pour une vente complexe. L’objectif est de rappeler l’existence de l’événement sans être intrusif. Les professionnels IT compliance répondent généralement aux 2-3 premiers emails ou pas du tout.",
  },
  {
    question:
      "Comment mesurer le succès d’une campagne événementielle ?",
    answer:
      "Le KPI principal est le nombre d’inscrits, pas le taux de réponse. Avec 4 prospects intéressés sur 378, le taux semble faible mais chaque inscription représente un contact ultra-qualifié qui participera à l’événement et deviendra un lead chaud pour le suivi post-événement.",
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
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Cher{% endif %} {{gender}} {{lastName}},

Le message LinkedIn commence ainsi :

« Je tenais à nouveau à vous féliciter pour… »
Et il se termine par « Je suis ravi d&apos;entrer en contact avec vous. »

---

→ Message audio (envoyé 1 jour après l’acceptation de la demande de connexion sur LinkedIn) :
Je vous ai envoyé un e-mail pour vous inviter à notre conférence début décembre à Bâle, qui portera sur la gestion des risques informatiques et de la conformité
→ SMS (envoyé directement après le message audio) :
Souhaitez-vous recevoir un peu plus d’informations ?

---

→ Message mentionnant les noms de collègues (envoyé 1 jour plus tard) :
Seriez-vous intéressé(e) de vous joindre à nous ainsi qu’à d’autres responsables des risques informatiques et de la conformité de la région ?

---

→ Message de relance (envoyé 5 jours plus tard) :
{{gender}} {{lastName}}, j’ai pensé que vous seriez intéressé(e) de nous rejoindre à Bâle pour rencontrer d’autres professionnels de l’informatique et discuter des risques et de la conformité dans les projets de livraison agile. Mon invitation reste valable. Prenez soin de vous

Autres modèles de réponses LinkedIn
→ Envoyé manuellement si le prospect répond par un message non concluant qui interrompt la séquence
{{salutation}} {{lastName}} Je vous ai envoyé un e-mail à {{email}}. Je me demandais si vous seriez intéressé(e) par notre conférence du 3 décembre à Bâle ?
→ Envoyé manuellement si le prospect répond qu’il n’est PAS la bonne personne à contacter ou qu’il a quitté l’entreprise
{{salutation}} {{lastName}}, merci de m'avoir répondu, j&apos;en ai pris note.
Connaissez-vous quelqu&apos;un chez {{companyName}} qui pourrait être intéressé par une participation ?
→ Envoyé manuellement si le prospect répond qu&apos;il n&apos;est PAS intéressé
{{salutation}} {{lastName}} merci pour votre réponse. Nous restons à votre disposition si vous changez d&apos;avis.
→ À envoyer manuellement si le prospect a discuté du message ou l&apos;a transféré à un collègue
{{salutation}} {{lastName}}, merci pour votre réponse et pour avoir transmis l&apos;information à votre collègue X.
Dans l&apos;attente d&apos;un retour de {{him/her}} pour en discuter plus en détail.`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Jour 1",    subject:
      "Invitation à une conférence à Bâle / décembre",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Cher{% endif %} {{gender}} {{lastName}},
{{icebreaker; Congrats for…}}
60 professionnels occupant un poste de {{jobtitleresponsability}} sont invités à notre conférence sur le thème « Gestion des risques informatiques et de la conformité à l&apos;ère du cloud ».
{{jobtitleresponsability}}
Elle se tiendra dans la région {{region}} le {{date}}, et l&apos;entrée est gratuite.
J'ai vu que vous êtes basé(e) à {{city}} et que vous travaillez pour {{companyName}}. Je me demandais si cela vous intéresserait d&apos;y participer ? Ou suis-je à côté de la plaque ?
Cordialement,
{{signature}}

PS : La conférence commence à 15h30 et se termine à 20h par un moment de réseautage [ProductName] (et voici le programme)`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "4 jours après",    subject:
      "discussion avec {{colleaguename1}} ou {{colleaguename2}}",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Cher{% endif %} {{gender}} {{lastName}},
L&apos;une des sessions de la conférence aborde la question de savoir pourquoi la gestion de la conformité informatique favorise l&apos;innovation plutôt que d&apos;être perçue comme un fardeau par certains.
Serait-il préférable d&apos;inviter votre collègue {{colleaguename1}} ou {{colleaguename2}} pour discuter de la conformité DevOps et de l&apos;auditabilité dans le cloud ?

Bonne journée
{{signature}}`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "5 jours après",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Cher{% endif %} {{gender}} {{lastName}},
Je sais que vous êtes très occupé, mais je tenais simplement à vous rappeler la conférence qui se tiendra à {{region}} le {{date}}. Elle s&apos;annonce comme un formidable mélange d&apos;idées et de rencontres, toutes axées sur les risques informatiques, la conformité et l&apos;innovation dans le cloud.
Nous aborderons des sujets tels que la gestion de la conformité DevOps, les tests de résilience DORA de l&apos;UE et la loi européenne sur l&apos;IA, et vous aurez l&apos;occasion d&apos;échanger avec d&apos;autres personnes confrontées aux mêmes défis.
Nous serions ravis de vous compter parmi nous (c&apos;est gratuit) ! Serez-vous des nôtres ?`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "5 jours après",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Cher{% endif %} {{gender}} {{lastName}},
Juste un dernier rappel au cas où le moment ne vous convenait pas auparavant.
Notre conférence à Bâle, le 3 décembre, réunira les meilleurs experts en risques informatiques et en conformité — une occasion unique de rencontrer des pairs du secteur confrontés aux mêmes défis.
Faites-moi savoir si vous souhaitez que nous vous réservions une place.
Cordialement,
{{signature}}`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ItRiskCompliancePage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Risque IT & Conformité — 11% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 5 étapes sur 30 jours pour risque it & conformité.",
            path: "/insights/cold-email-templates/it-risk-compliance",
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
              {["CONFORMITÉ IT","LINKEDIN + EMAIL","AUDIT & RISK"].map((tag) => (
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
                Séquence cold email pour risque it & conformité — 11% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                5 étapes sur 30 jours. 4 emails, 1 message LinkedIn. 378 prospects contactés.
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
                value: "378",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "48%",
                label: "Taux d&apos;ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "11%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "4",
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
              Les 5 touches de la séquence
            </h2>
            <p
              className="mx-auto mb-12 max-w-xl text-center text-sm"
              style={{ color: "#666d70" }}
            >
              4 emails, 1 message LinkedIn — sur 30 jours.
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
                378 prospects et un taux de réponse de 11% avec un taux de clic de 39% — cette séquence de 5 touches sur 30 jours cible les leaders IT Audit, Compliance et Risk Management pour un événement spécifique. Le format &quot;invitation à une conférence&quot; diffère des séquences de vente classiques.
              </p>
              <p>
                L’approche &quot;événement gratuit avec 60 professionnels invités&quot; crée un effet d’exclusivité et de communauté. Pour un professionnel de la conformité IT, l’opportunité de rencontrer des pairs qui font face aux mêmes défis (DORA, EU AI Act) est plus attrayante qu’une démo produit.
              </p>
              <p>
                Les emails sont concis et focalisés sur un seul CTA : accepter ou décliner l’invitation. Cette simplicité augmente le taux de réponse — le prospect n’a pas à réfléchir à une proposition complexe, juste à vérifier sa disponibilité.
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
                  <strong>Prospecter pour un événement, pas un produit.</strong>{" "}
                  L’invitation à une conférence gratuite génère moins de résistance qu’un pitch commercial.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Créer un effet d’exclusivité.</strong>{" "}
                  60 professionnels invités — le prospect se sent sélectionné, pas spammé.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Mentionner des sujets réglementaires actuels.</strong>{" "}
                  DORA, EU AI Act — des thèmes brûlants pour les professionnels compliance.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Garder les emails courts et focalisés.</strong>{" "}
                  Un seul CTA par email : &quot;venez ou ne venez pas&quot;.
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
                  title: "Organisation d’événements professionnels",
                  desc: "Conférences, meetups, tables rondes pour les professionnels IT, compliance ou audit.",
                },
                {
                  title: "Ciblage IT Audit et Compliance",
                  desc: "Les leaders en audit IT, conformité et gestion des risques dans les grandes entreprises (+500 employés).",
                },
                {
                  title: "Région Bâle et Suisse alémanique",
                  desc: "La séquence cible spécifiquement Bâle, Argovie, Soleure et Berne.",
                },
                {
                  title: "Événements gratuits avec networking",
                  desc: "Si votre événement combine contenu expert et opportunités de networking.",
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
                  title: "Organisateurs d’événements IT",
                  desc: "Conférences, meetups et tables rondes pour les professionnels de la technologie.",
                },
                {
                  title: "SDRs ciblant les auditeurs IT",
                  desc: "Le vocabulaire compliance et risk management est calibré pour ce public.",
                },
                {
                  title: "Éditeurs de solutions GRC",
                  desc: "Si votre produit adresse la gouvernance, le risque et la conformité IT.",
                },
                {
                  title: "Cabinets d’audit et de conseil",
                  desc: "Adaptez la séquence pour inviter des prospects à vos propres événements thought leadership.",
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
