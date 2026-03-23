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
    "Séquence Cold Email Gestion des Cyber-Risques — Séquence Multicanal | devlo",
  description:
    "Séquence outreach multicanal de 5 étapes sur 28 jours pour gestion des cyber-risques. 4 emails, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/cybersecurity-risk-management",
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
    name: "Gestion des Cyber-Risques",
    path: "/insights/cold-email-templates/cybersecurity-risk-management",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment prospecter les CISO d’entreprises à +2 milliards ?",
    answer:
      "L’approche consultative (questions ouvertes, pas de pitch direct) est essentielle. Les CISO enterprise reçoivent des dizaines de sollicitations quotidiennes — une question réfléchie (&quot;what does an attacker see from the outside?&quot;) se démarque d’un pitch produit. L’A/B testing icebreaker permet d’adapter l’approche au profil LinkedIn du prospect.",
  },
  {
    question:
      "La technique de la faute de frappe est-elle risquée ?",
    answer:
      "Non, à condition de la corriger immédiatement dans un message suivant. &quot;seucrity → *security, sorry&quot; simule un échange naturel et authentique. Les CISO qui voient ce type d’erreur comprennent que le message n’est pas un template générique, ce qui augmente la probabilité de réponse.",
  },
  {
    question:
      "Pourquoi proposer un scan dark web gratuit au breakup ?",
    answer:
      "C’est le &quot;lead magnet ultime&quot; pour un CISO. Même si le prospect n’est pas intéressé par la solution, un scan gratuit de l’exposition dark web de son organisation a une valeur immédiate et tangible. Cela crée un pied dans la porte pour une conversation future.",
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
    timing: "First day of the sequence",
    content: `Demande de connexion LinkedIn
Date d&apos;envoi : premier jour de la séquence
Expéditeur : {{salesRep}}
Contenu :

---

→ Invitation à se connecter sur LinkedIn :
(Laissez ce champ vide pour contourner la limite de LinkedIn de 5 connexions personnalisées par jour et envoyer 15 invitations par jour)

---

→ Présentation (envoyée 1 jour après l&apos;acceptation de la connexion LinkedIn) :
Bonjour {{firstName}}, merci de vous être connecté.
Dans les grandes organisations, les questions relatives aux incidents impliquant des fournisseurs, à l&apos;exposition aux ransomwares ou à la conformité réglementaire surgissent souvent en dehors des revues de sécurité planifiées.
Comment ces sujets sont-ils généralement traités chez {{companyName}} ?

---

→ Message avec les noms des collègues + faute de frappe (envoyé 5 jours plus tard) :
{{firstName}}, pour ces sujets, est-ce que vous vous en occupez généralement directement, ou est-ce que c&apos;est {% if colleaguename1 != blank and colleaguename2 != blank %}{{colleaguename1}} ou {{colleaguename2}}{% elsif colleaguename1 != blank %}{{colleaguename1}}{% elsif colleaguename2 != blank %}{{colleaguename2}}{% else %}un autre membre de l&apos;équipe de sécurité ou de gestion des risques{% endif %} qui s&apos;en charge ?
Je vérifie simplement pour m'assurer que je m'adresse à la bonne personne chez {{companyName}}.

---

→ Corrections de fautes de frappe (envoyées directement après) :
*sécurité, désolé

---

→ Message de conclusion (envoyé 7 jours plus tard) :
Bonjour {{firstName}},
Je m'arrêterai là pour l&apos;instant, si ce n&apos;est pas le bon moment.
Devrions-nous reprendre contact dans 3 mois pour voir si les besoins ont évolué ?
Je vous souhaite bonne chance pour vos projets en cours.`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Jour 1",    subject:
      "Ce qui est visible de l&apos;extérieur à {{companyName}}",
    content: `Version A - avec phrase d&apos;accroche

Cher(e) {{firstName}},

{{icebreaker}}

Au sein des grandes organisations, on demande de plus en plus souvent aux équipes de sécurité de comprendre ce que les attaquants externes voient réellement lorsqu’ils évaluent l’entreprise et son écosystème.

Est-ce un sujet sur lequel {{companyName}} se penche déjà ?

Cordialement,

{{signature}}
se désabonner
Version B - sans introduction

Cher/Chère {{firstName}},

De nombreuses grandes équipes de sécurité sont récemment confrontées à une question plus difficile : que voit réellement un attaquant lorsqu’il observe l’organisation de l’extérieur ?

C’est souvent dans cet écart entre les contrôles internes et l’exposition externe que naissent les surprises.

Est-ce un sujet qui intéresse déjà {{companyName}} ?

Cordialement,

{{signature}}
se désabonner`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "7 jours après",    subject:
      "{% if colleaguename1 != blank and colleaguename2 != blank %} concerne-t-il {{colleaguename1}} ou {{colleaguename2}} ? {% elsif colleaguename1 != blank %} concerne-t-il {{colleaguename1}} ? {% elsif colleaguename2 != blank %} concerne-t-il {{colleaguename2}} ? {% else %} concerne-t-il une personne à {{companyName}} ? {% endif %}",
    content: `Bonjour {{firstName}},
Serait-il judicieux d&apos;associer à cette discussion {% if colleaguename1 != blank and colleaguename2 != blank %}{{colleaguename1}} ou {{colleaguename2}}{% elsif colleaguename1 != blank %}{{colleaguename1}}{% elsif colleaguename2 != blank %}{{colleaguename2}}{% else %}un membre de votre équipe de sécurité ou de gestion des risques{% endif %} ?
Dans des environnements similaires, les équipes de sécurité ont réduit le temps d&apos;enquête de plusieurs jours à quelques minutes en reliant directement les activités sur le dark web et les menaces aux actifs exposés et aux fournisseurs critiques, ce qui leur a permis d&apos;agir avant que les incidents ne s&apos;aggravent.
Dans l&apos;attente de votre réponse.
{{signature}}
Se désabonner`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "6 jours après",
    content: `Bonjour {{firstName}},
L&apos;un des défis fréquemment évoqués par les responsables de la sécurité est le fait de disposer d&apos;une multitude d&apos;outils, tout en manquant de visibilité sur les alertes externes qui ont réellement un impact sur leurs actifs, leurs fournisseurs ou leur marque.
C'est souvent là que les faux positifs s&apos;immiscent et que les signaux pertinents passent inaperçus, en particulier lors d&apos;incidents liés à des ransomwares ou impliquant des fournisseurs.
Votre équipe est-elle à l&apos;aise avec cette situation aujourd&apos;hui ?
Cordialement,

{{signature}}
Se désabonner`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "9 jours après",
    content: `Bonjour {{firstName}},
Je ne veux pas insister si ce n&apos;est pas le bon moment.
Si cela peut vous être utile, je serais ravi de vous proposer une ressource concise et sans engagement, comme une analyse ponctuelle de votre exposition sur le dark web, un aperçu des menaces pesant sur votre marque ou une brève liste de contrôle de conformité réglementaire pour les grandes entreprises.
Ou bien pouvons-nous reprendre contact dans quelques mois, lorsque vos priorités auront changé ?
Bonne journée.
{{signature}}
Se désabonner`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function CybersecurityRiskManagementPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Gestion des Cyber-Risques — Séquence Multicanal",
            description:
              "Séquence outreach multicanal de 5 étapes sur 28 jours pour gestion des cyber-risques.",
            path: "/insights/cold-email-templates/cybersecurity-risk-management",
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
              {["CYBER-RISQUE","LINKEDIN + EMAIL","CISO ENTERPRISE"].map((tag) => (
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
                Séquence cold email pour gestion des cyber-risques — séquence multicanal
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                5 étapes sur 28 jours. 4 emails, 1 message LinkedIn.
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
                value: "N/A",
                label: "Prospects contactés",
                bg: "#9ca3af",
                text: "#ffffff",
              },
              {
                value: "N/A",
                label: "Taux d&apos;ouverture",
                bg: "#9ca3af",
                text: "#ffffff",
              },
              {
                value: "N/A",
                label: "Taux de réponse",
                bg: "#9ca3af",
                text: "#ffffff",
              },
              {
                value: "N/A",
                label: "Prospects intéressés",
                bg: "#9ca3af",
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
              4 emails, 1 message LinkedIn — sur 28 jours.
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
                Cette séquence de 5 touches sur 28 jours combine LinkedIn et email pour atteindre les CISO d’entreprises à +2 milliards de chiffre d’affaires en Europe. Le ciblage est résolument enterprise, avec une approche consultative plutôt que transactionnelle.
              </p>
              <p>
                La technique de la &quot;faute de frappe corrigée&quot; sur LinkedIn (&quot;seucrity&quot; → &quot;*security, sorry&quot;) est une astuce de personnalisation brillante. Elle crée l’impression d’un message tapé rapidement et authentiquement, plutôt qu’un template automatisé. Cette touche d’imperfection augmente significativement le taux de réponse.
              </p>
              <p>
                L’A/B testing entre une version avec icebreaker et sans icebreaker (Touch #2) permet d’optimiser l’approche selon le segment. Pour les CISO qui n’ont pas de présence LinkedIn active, la version sans icebreaker évite le risque d’une référence forcée.
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
                  <strong>Utiliser la technique de la faute de frappe.</strong>{" "}
                  Une typo corrigée simule un message authentique et augmente le taux de réponse.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>A/B tester icebreaker vs pas d’icebreaker.</strong>{" "}
                  Pour les CISO sans présence LinkedIn, éviter l’icebreaker forcé est plus efficace.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer une ressource gratuite au breakup.</strong>{" "}
                  Scan dark web, snapshot de menaces ou checklist réglementaire — de la valeur même sans conversion.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Adopter un ton consultatif, pas transactionnel.</strong>{" "}
                  Questions ouvertes plutôt que pitch — adapté aux CISO d’entreprises à +2B€ de CA.
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
                  title: "Solutions de cyber risk management enterprise",
                  desc: "Gestion des risques cyber, threat intelligence, scoring de sécurité — pour les grandes organisations.",
                },
                {
                  title: "Ciblage CISO d’entreprises à +2B€ de CA",
                  desc: "Le ton consultatif et les questions ouvertes sont calibrés pour ce niveau de décision.",
                },
                {
                  title: "Marché européen réglementé",
                  desc: "Industries réglementées (finance, santé, énergie) où la conformité cyber est obligatoire.",
                },
                {
                  title: "Prospection LinkedIn-first",
                  desc: "Si votre stratégie repose sur LinkedIn comme canal principal, cette séquence montre comment l’exécuter.",
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
                  title: "Éditeurs de threat intelligence",
                  desc: "Si votre solution surveille le dark web, les menaces externes ou le risque fournisseurs.",
                },
                {
                  title: "SDRs ciblant les CISO enterprise",
                  desc: "L’approche consultative et les questions ouvertes sont conçues pour ce niveau de séniorité.",
                },
                {
                  title: "Plateformes de cyber risk scoring",
                  desc: "Si votre produit évalue et quantifie le risque cyber d’une organisation.",
                },
                {
                  title: "Consultants en cybersécurité enterprise",
                  desc: "Adaptez la séquence à vos propres services d’audit et de conseil sécurité.",
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
