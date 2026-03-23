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
    "Séquence Cold Email Biotech & Données Cliniques — 1% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 5 étapes sur 28 jours pour biotech & données cliniques. 925 prospects contactés. 4 emails, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/biotech-rwe",
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
    name: "Biotech & Données Cliniques",
    path: "/insights/cold-email-templates/biotech-rwe",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment vendre des solutions de données fédérées aux biotechs ?",
    answer:
      "La clé est d’illustrer avec des projets concrets : Roche/DebioPharm/NAIPO pour l’oncologie, 6 hôpitaux universitaires suisses et 600k dossiers patients. Les VP R&D veulent des preuves que la technologie fonctionne à échelle réelle, pas juste en théorie. Le case study partagé au Touch #4 est le point de bascule.",
  },
  {
    question:
      "Pourquoi le taux de conversion est-il si faible (1%) ?",
    answer:
      "Le marché des données cliniques fédérées est un marché émergent où la plupart des biotechs n’ont pas encore identifié ce besoin. Le taux de 1% est normal pour une technologie nouvelle. Les campagnes suivantes bénéficient de l’éducation marché réalisée par la première vague — les taux augmentent avec le temps.",
  },
  {
    question:
      "Comment la conformité privacy impacte-t-elle la prospection ?",
    answer:
      "Paradoxalement, la conformité privacy est un argument DE VENTE, pas une barrière. La séquence met en avant la conformité comme avantage (&quot;full compliance, data stays local&quot;). Les biotechs européennes qui luttent avec le RGPD pour accéder aux données cliniques voient immédiatement la valeur d’une solution fédérée.",
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
    content: `Demande de mise en relation sur LinkedIn
Date d'envoi : premier jour de la séquence
Expéditeur : {{salesRep}}
Contenu :

---

→ Invitation à se connecter sur LinkedIn :
(Laissez ce champ vide pour contourner la limite de LinkedIn de 5 invitations personnalisées par jour et envoyer 20 invitations par jour)

---

→ Présentation (envoyée 1 jour après l'acceptation de la demande de mise en relation sur LinkedIn) :
Bonjour {{firstName}}, ravi de me connecter avec vous.
Je vous ai écrit à l'adresse {{email}} au sujet des défis récents auxquels sont confrontées les équipes biotechnologiques lorsqu'elles collaborent sur des données du monde réel. Avez-vous reçu mon e-mail ?
Vous et moi savons que l'accès aux informations cliniques est crucial pour éviter de ralentir les progrès.
Est-ce quelque chose qui pose problème à {{companyName}} ou pas du tout ?

---

→ Message mentionnant les noms de collègues (envoyé 5 jours plus tard) :
{{firstName}}, vaut-il mieux discuter des données du monde réel avec {% if colleaguename1 != blank and colleaguename2 != blank %}{{colleaguename1}} ou {{colleaguename2}}{% elsif colleaguename1 != blank %}{{colleaguename1}}{% elsif colleaguename2 != blank %}{{colleaguename2}}{% else %}un membre de votre équipe de R&D ou de développement clinique{% endif %} ?
Je suis curieux de savoir comment {{companyName}} exploite les données cliniques provenant d'hôpitaux à l'échelle nationale pour faciliter les études de faisabilité et réduire les délais de mise sur le marché (plutôt que d'attendre des mois pour obtenir les autorisations d'accès et de manquer des sources de données nécessaires)

---

→ Message mentionnant les noms des collègues (envoyé immédiatement après) :
*données issues de la pratique clinique, désolé

---

→ Message de prise de distance (envoyé 7 jours plus tard) :
Cher {{firstName}},
Pourrions-nous reprendre contact dans quelques mois, une fois que les données cliniques de {{ region}} auront davantage d'importance chez {{companyName}} ?
Bonne journée`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Jour 1",    subject:
      "analyses des données de santé/données réelles {{firstName}}",
    content: `Version A – version abrégée avec activité brise-glace

Cher(e) {{firstName}},

{{icebreaker}}

Vous savez à quel point il est compliqué d'accéder à des données de santé sensibles en toute sécurité et dans le respect de la réglementation européenne en matière de protection de la vie privée.

Chaque jour, cela ralentit les prises de décision, les retarde et empêche l'accès à de précieuses informations concrètes.

Roche et DebioPharm ont choisi notre solution fédérée pour transformer leur recherche en oncologie dans le cadre du projet NAIPO.

Souhaitez-vous recevoir un document succinct expliquant comment cette solution soutient leur équipe ?

Cordialement,
{{signature}}
se désabonner
Version B - version plus courte sans introduction

Cher/Chère {{firstName}},

Vous savez à quel point il est compliqué d'accéder à des données de santé sensibles en toute sécurité et dans le respect des réglementations européennes en matière de confidentialité.

Chaque jour, cela ralentit les décisions, les retarde et empêche l'accès à de précieuses informations issues du monde réel.

Roche et DebioPharm ont choisi notre solution fédérée pour transformer leur recherche en oncologie dans le cadre du projet NAIPO.

Souhaitez-vous recevoir un petit document expliquant comment cette solution aide leur équipe ?

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
Vaut-il mieux contacter {% if Colleaguename1 != blank and Colleaguename2 != blank %} vos collègues {{Colleaguename1}} ou {{Colleaguename2}}, votre collègue {% elsif Colleaguename1 != blank %}, votre collègue {{Colleaguename1}}, votre collègue {% elsif Colleaguename2 != blank %}, un autre membre de votre équipe {% endif %} ?
Nous serions ravis de vous présenter, à vous et à vos collègues, comment {{companyName}} pourrait également bénéficier de collaborations similaires autour de données réelles.
Six grands hôpitaux universitaires suisses ont mis en place un réseau fédéré reliant plus de 600 000 dossiers de patients. Ils effectuent des requêtes inter-sites en quelques minutes et conçoivent des études basées sur des groupes de patients plus larges et plus diversifiés, le tout en totale conformité.
Bonne journée !
PS : Ma liste de tâches ci-dessous m'a rappelé de vous écrire 😊

{{accountSignature}}
Se désabonner`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "6 jours après",
    content: `Bonjour {{firstName}},
Voici le lien vers la brève étude de cas dont je vous ai parlé, qui présente comment {{testimony company}} transforme la recherche en oncologie grâce à l'IA dans le cadre du projet NAIPO en Suisse.
J'ai pensé que cela pourrait vous intéresser de voir comment :
1/les modèles d'IA fonctionnent sur des ensembles de données cliniques fédérés issus du monde réel
2/la sécurité des données n'est pas compromise
3/la conformité est simplifiée entre les partenaires
Est-ce un sujet qui vous intéresse, ou pas du tout ?
Cordialement,
{{signature}}
se désabonner`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "9 jours après",
    content: `Bonjour {{firstName}},
Ce n'est peut-être pas le moment idéal pour examiner comment les données issues de la pratique clinique peuvent soutenir vos travaux de recherche.
Puis-je vous recontacter dans environ trois mois pour voir si vos priorités ont changé ?
P.S. : En attendant, voici un café virtuel pour vous en attendant notre prochaine rencontre ☕️

{{accountSignature}}

Se désabonner`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function BiotechRwePage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Biotech & Données Cliniques — 1% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 5 étapes sur 28 jours pour biotech & données cliniques.",
            path: "/insights/cold-email-templates/biotech-rwe",
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
              {["BIOTECH RWE","LINKEDIN + EMAIL","R&D LEADERS"].map((tag) => (
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
                Séquence cold email pour biotech & données cliniques — 1% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                5 étapes sur 28 jours. 4 emails, 1 message LinkedIn. 925 prospects contactés.
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
                value: "925",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "49%",
                label: "Taux d'ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "1%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "1",
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
                925 prospects contactés avec 5 touches sur 28 jours dans le secteur biotech/RWE. Le taux d’ouverture de 49% montre que le sujet des données cliniques réelles intéresse les décideurs R&D, même si le taux de conversion est faible (1%) — typique d’un marché très spécialisé.
              </p>
              <p>
                Les références à Roche, DebioPharm et au projet NAIPO établissent une crédibilité immédiate dans le monde biotech suisse. Pour un VP R&D, ces noms sont des validations puissantes qui justifient au minimum une lecture approfondie du message.
              </p>
              <p>
                La même technique de &quot;typo intentionnelle&quot; que la séquence #25 est utilisée sur LinkedIn (&quot;rael-world evidence&quot; → &quot;*real-world evidence, sorry&quot;), confirmant son efficacité comme signal d’authenticité dans les messages automatisés.
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
                  <strong>Référencer des projets de recherche concrets.</strong>{" "}
                  Roche, DebioPharm et le projet NAIPO sont des validations puissantes.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Utiliser la typo intentionnelle sur LinkedIn.</strong>{" "}
                  Confirmé efficace dans le secteur biotech aussi.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Partager un case study au Touch #4.</strong>{" "}
                  Le lien vers l’étude de cas NAIPO donne un contenu tangible à évaluer.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer un café virtuel au breakup.</strong>{" "}
                  Une touche d’humour pour terminer la séquence sur une note positive.
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
                  title: "Solutions de données cliniques et RWE",
                  desc: "Accès aux données de santé réelles, analyse fédérée, IA sur données cliniques distribuées.",
                },
                {
                  title: "Ciblage VP R&D et Clinical Development",
                  desc: "Les décideurs en recherche et développement de biotechs innovantes sont votre coeur de cible.",
                },
                {
                  title: "Marché biotech européen",
                  desc: "La séquence utilise des références suisses (CHUV, NAIPO) valorisées en Europe.",
                },
                {
                  title: "Solutions respectant la privacy",
                  desc: "Si votre offre résout le défi de l’accès aux données sensibles en conformité RGPD.",
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
                  title: "Éditeurs de solutions de données fédérées",
                  desc: "Si votre plateforme permet l’analyse de données distribuées en conformité avec la privacy.",
                },
                {
                  title: "SDRs ciblant les VP R&D biotech",
                  desc: "Le vocabulaire RWE, essais cliniques et fédérated learning est calibré.",
                },
                {
                  title: "Startups HealthTech européennes",
                  desc: "Si votre solution résout le problème de l’accès aux données de santé en Europe.",
                },
                {
                  title: "Plateformes de clinical data management",
                  desc: "Adaptez la séquence à vos propres capacités de gestion de données cliniques.",
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
