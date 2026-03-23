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
    "Séquence Cold Email Technologie Santé — 4% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 8 étapes sur 36 jours pour technologie santé. 808 prospects contactés. 6 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/healthcare-technology",
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
    name: "Technologie Santé",
    path: "/insights/cold-email-templates/healthcare-technology",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment prospecter les health plans américains ?",
    answer:
      "Les volumes sont élevés (808 prospects) car les décideurs de health plans sont très sollicités. La clé est le positionnement d’autorité (&quot;5 of the 7 largest MCOs&quot;) et les preuves de ROI chiffrées (242%). Les notes audio LinkedIn ajoutent une touche personnelle dans un flux de messages automatisés.",
  },
  {
    question:
      "Pourquoi le taux de réponse est-il de 4% seulement ?",
    answer:
      "Le marché HealthTech américain est l’un des plus compétitifs au monde. Un taux de 4% sur 808 prospects génère 32 réponses, dont 2 prospects qualifiés. Le LTV d’un contrat health plan (6-7 chiffres/an) justifie largement le volume de prospection nécessaire.",
  },
  {
    question:
      "Comment adapter cette séquence au marché européen ?",
    answer:
      "Remplacez le vocabulaire américain (STAR ratings, MCO, CAHPS) par les équivalents européens (indicateurs qualité, mutuelles, satisfaction patient). La structure LinkedIn + email reste identique. Les références clients doivent être locales pour crédibiliser la démarche.",
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
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}}, {{linkedinnote}}

Le message LinkedIn commence ainsi :
« Votre publication LinkedIn concernant…
Votre profil LinkedIn indique que…
Votre interview OU votre article OU votre billet de blog…
Mon collègue {{salesRep}}  m'a parlé de…
… Je suis ravi d'entrer en contact avec vous. »

---

→ Note audio (envoyée 6 jours après l'acceptation de la demande de connexion sur LinkedIn) :
Merci de m'avoir ajouté à votre réseau.
Mon collègue {{salesRep}} m'a envoyé un e-mail pour expliquer pourquoi les régimes de santé s'associent à nous pour combler les lacunes en matière de soins et améliorer leur qualité ainsi que leurs performances STAR. Seriez-vous intéressé(e) pour en discuter davantage ?

---

→ Message mentionnant les noms de collègues (envoyé 7 jours plus tard) :
Bonjour {{firstName}}, serait-il plus approprié que je contacte vos collègues {{colleaguename1}} ou {{colleaguename2}} ?

---

→ Message de clôture (envoyé 5 jours plus tard) :
{{firstName}}, je suis désolé que nous n'ayons pas eu l'occasion de nous parler directement. 
Je vous tiendrai au courant à mesure que nous publierons de nouveaux résultats concernant la réduction des lacunes en matière de soins de nos clients et l'amélioration de leur qualité et de leurs notes STAR.   
Cordialement.
Autres modèles de réponses LinkedIn
→ Envoyé manuellement si le prospect répond par un message non concluant qui interrompt la séquence
{{firstName}}, mon collègue {{salesRep}}  vous a envoyé un e-mail pour vous expliquer pourquoi les clients s'associent à nous pour améliorer leur qualité et leurs notes STAR grâce à des soins préventifs, à la réduction des lacunes en matière de soins et à une meilleure expérience des membres.

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Jour 1",    subject:
      "Une brève conversation, {{firstname}} ?",
    content: `Introduction - A
{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},
{{icebreaker}}
Tous les régimes de santé s'efforcent d'améliorer la qualité et les performances STAR en comblant les lacunes en matière de soins et en améliorant l'expérience des adhérents. 
Pour atteindre ces objectifs, de nombreux régimes de santé s'associent à [clientCompanyName], garantissant ainsi à leurs adhérents de recevoir les soins dont ils ont besoin tout en bénéficiant d'une expérience exceptionnelle. 
Vaut-il la peine de donner un peu plus de contexte lors d'un bref appel téléphonique ? Ou est-ce hors sujet ? 
Cordialement,

{{signature}}

Intro - B
Heure d'envoi : premier jour de la séquence
Objet : Brève conversation, {{firstname}} ?
Contenu :
{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},
5 des 7 plus grandes organisations de soins intégrés (MCO) se sont associées à nous pour offrir à leurs membres les soins dont ils ont besoin et une expérience exceptionnelle.
Chaque régime de santé s'efforce d'améliorer la qualité et les performances STAR en comblant les lacunes en matière de soins et en améliorant l'expérience des membres. 
Vaut-il la peine de donner un peu plus de contexte lors d'un bref appel téléphonique ? 
Cordialement

{{signature}}Contact n° 3 - E-mail n° 2 → Contacter des collègues
Date d'envoi : 7 jours après le dernier message
Objet : discussion avec {{colleaguename1}} ou {{colleaguename2}}
Contenu :
{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},
Vaut-il mieux contacter {{colleague1}} ou {{colleague2}} concernant la qualité et l'amélioration des performances STARs chez {{companyName}} ?

Cordialement,
{{signature}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "4 jours après",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},
Je sais que tu es très occupé, mais peut-être que tes collègues seraient intéressés par une étude de cas démontrant notre capacité à combler les lacunes en matière de soins et à générer un retour sur investissement de 242 % ?
PS : Ma liste de tâches, illustrée ci-dessous, m'a rappelé de vous contacter, 😊.



{{signature}}`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "5 jours après",    subject:
      "On se retrouve à [ProductName] ?",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},
Allez-vous assister à la prochaine conférence [ProductName] à {{country}} ?  Notre vice-président aimerait vous inviter à prendre un café à [lieu] pour faire une pause pendant la conférence.
Cela vous intéresse-t-il ?
En parlant de café, je vous en préparerai une tasse bien fraîche à votre nom à {{event region}} : )`,
  },
  {
    number: 5,
    channel: "call",
    label: "Appel téléphonique",
    timing: "3 jours après",
    content: `[Géré par l'équipe du client]`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "Le même jour an unsuccessful cold call",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},

Mon collègue {{salesRep}} n'a pas réussi à vous joindre aujourd'hui.

Il souhaitait vous parler d'une rencontre avec notre vice-président autour d'un café lors d'un événement professionnel consacré au programme Medicare STARs aux États-Unis.

Avez-vous quelques minutes pour nous joindre et en discuter ?

Cordialement`,
  },
  {
    number: 7,
    channel: "email",
    label: "Email #7",
    timing: "8 jours après",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}}, 
Qu'avez-vous pensé de ma proposition de vous montrer pourquoi des régimes de santé similaires à {{companyName}} collaborent avec nous pour combler les lacunes en matière de soins et améliorer l'expérience des assurés ?
Nos clients soulignent régulièrement leur satisfaction quant à notre capacité à générer un retour sur investissement, à programmer immédiatement des soins pour leurs membres et à offrir une expérience exceptionnelle.  
Ils comptent également sur nous pour répondre aux questions de leurs membres, remplir les évaluations de santé (HRA), expliquer les avantages ou les récompenses, et orienter les membres vers les ressources appropriées (ressources cliniques, CBO, ressources internes du régime de santé, etc.).
Y a-t-il un jour et une heure en particulier qui vous conviendraient le mieux pour que nous puissions nous contacter ?
{{signature}}`,
  },
  {
    number: 8,
    channel: "email",
    label: "Email #8",
    timing: "6 jours après",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},

Étant donné que vous êtes responsable de {{responsibilityfromjobtitle}} chez {{companyName}}, {{salesRep}}, j'ai essayé de vous contacter à plusieurs reprises.
Nous avons pensé que vous seriez intéressé(e) de découvrir comment nos clients ont tiré parti de notre solution :
Tirer parti de la programmation pour propulser leur régime de santé vers une note de 4 étoiles ou plus
Étude de cas démontrant un retour sur investissement de 242 % sur le marché Medicare Advantage
Amélioration de leurs scores CAHPS grâce à une communication et une prise de rendez-vous évolutives

Vous pourriez également être intéressé par notre solution complète de bout en bout visant à améliorer l'expérience des membres, à optimiser les résultats de santé et à maximiser le retour sur investissement : Care Access Complete

Serait-il possible de vous joindre pour un bref appel téléphonique ?

Si cela ne vous intéresse pas, je comprends tout à fait et vous souhaite bonne chance !

Cordialement,
{{signature}}`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function HealthcareTechnologyPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Technologie Santé — 4% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 8 étapes sur 36 jours pour technologie santé.",
            path: "/insights/cold-email-templates/healthcare-technology",
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
              {["HEALTHTECH","EMAIL","HEALTH PLANS"].map((tag) => (
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
                Séquence cold email pour technologie santé — 4% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                8 étapes sur 36 jours. 6 emails, 1 appel téléphonique, 1 message LinkedIn. 808 prospects contactés.
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
                value: "808",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "22%",
                label: "Taux d'ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "4%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "2",
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
              6 emails, 1 appel téléphonique, 1 message LinkedIn — sur 36 jours.
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
                808 prospects contactés avec un taux de réponse de 4% — typique du marché américain des health plans où les volumes de prospection sont élevés et les décideurs très sollicités. La séquence de 7 touches combine LinkedIn et emails pour maximiser la couverture.
              </p>
              <p>
                Le positionnement &quot;5 of the 7 largest MCOs partner with us&quot; est un argument d’autorité extrêmement puissant dans le secteur HealthTech. Pour un décideur de health plan, cette statistique élimine le doute sur la capacité de la solution à fonctionner à grande échelle.
              </p>
              <p>
                Le ROI de 242% dans une étude de cas Medicare Advantage (Touch #4) est un chiffre concret qui résonne avec les décideurs financiers des health plans. Dans un secteur où chaque décision est mesurée en termes de ROI, cette preuve chiffrée est déterminante.
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
                  <strong>Utiliser des stats de pénétration marché.</strong>{" "}
                  &quot;5 des 7 plus grands MCOs nous font confiance&quot; est un argument d’autorité décisif.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer des case studies avec ROI chiffré.</strong>{" "}
                  242% de ROI dans Medicare Advantage résonne avec les décideurs financiers.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Inclure des notes audio LinkedIn.</strong>{" "}
                  Dans un marché saturé, la voix humaine démarque le message.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer une rencontre lors d’un événement.</strong>{" "}
                  Le Touch #5 propose un café lors d’une conférence, créant une occasion naturelle.
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
                  title: "Solutions HealthTech et quality improvement",
                  desc: "Votre produit améliore les STAR ratings, la fermeture des care gaps ou l’expérience patient.",
                },
                {
                  title: "Ciblage health plans et MCOs",
                  desc: "Les décideurs de plans de santé aux États-Unis sont votre audience cible.",
                },
                {
                  title: "Marché Medicare Advantage",
                  desc: "La séquence utilise le vocabulaire spécifique du marché Medicare (STAR, CAHPS, HRA).",
                },
                {
                  title: "Vente avec preuves de ROI",
                  desc: "Si votre solution peut démontrer un ROI chiffré (242% dans cette séquence), le modèle s’applique.",
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
                  title: "Éditeurs HealthTech",
                  desc: "Si votre solution améliore les STAR ratings, la qualité des soins ou l’expérience patient.",
                },
                {
                  title: "SDRs ciblant les health plans américains",
                  desc: "Le vocabulaire Medicare, MCO et CAHPS est intégré dans la séquence.",
                },
                {
                  title: "Solutions de care management",
                  desc: "Si votre produit ferme les care gaps ou améliore l’accès aux soins.",
                },
                {
                  title: "Consultants en quality improvement",
                  desc: "Adaptez la séquence à vos propres services d’amélioration de la qualité.",
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
