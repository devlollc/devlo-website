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
    "Séquence Cold Email Recherche Clinique — Séquence Multicanal | devlo",
  description:
    "Séquence outreach multicanal de 6 étapes sur 40 jours pour recherche clinique. 5 emails, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/clinical-research",
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
    name: "Recherche Clinique",
    path: "/insights/cold-email-templates/clinical-research",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment prospecter les biotechs pour des services CRO ?",
    answer:
      "La clé est de démontrer une expertise clinique dès le premier email. La mention de 350+ sponsors et un témoignage client suisse établissent la crédibilité. Les biotechs cherchent un partenaire fiable pour leurs essais — la confiance prime sur le prix. L’offre de consulting gratuit (5h) est le différenciateur.",
  },
  {
    question:
      "Pourquoi une séquence de 40 jours pour le secteur clinique ?",
    answer:
      "Les décisions de partenariat CRO sont complexes et impliquent plusieurs décideurs (CEO, CMO, directeur médical). 40 jours laissent le temps aux informations de circuler en interne. La séquence de 9 touches maintient la présence sans être intrusive, avec des contenus éducatifs (webinars, white papers) qui apportent de la valeur.",
  },
  {
    question:
      "Comment gérer l’objection du CRO déjà en place ?",
    answer:
      "La réponse est déjà préparée : &quot;La plupart de nos clients travaillaient avec un autre CRO avant de nous rencontrer.&quot; Puis proposer une comparaison objective (&quot;unless you’re sure you’re getting the best service&quot;). Cette approche respectueuse mais challenger est efficace avec les décideurs cliniques.",
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

La note LinkedIn commence par :
« Votre publication LinkedIn concernant…  
Votre profil LinkedIn indique que…
Votre interview OU votre article OU votre billet de blog…
Mon collègue {{SalesRep}} m’a parlé de…
… Je suis ravi d’entrer en contact avec vous. »

---

→ Note audio (envoyée 6 jours après l&apos;acceptation de la demande de connexion sur LinkedIn) :
Ravi d&apos;entrer en contact avec vous. Mon collègue {{SalesRep}}  vous a envoyé un e-mail concernant nos services de biométrie. Plus de 350 promoteurs nous font confiance en tant que prestataire spécialisé dans la gestion des données et les statistiques, et je me demandais si vous supervisiez actuellement des essais cliniques ?

---

→ Message mentionnant les noms de collègues (envoyé 7 jours plus tard) :
Bonjour {{firstName}}, vaut-il mieux contacter vos collègues {{colleaguename1}} ou {{colleaguename2}} pour discuter des services biométriques liés à la mise en œuvre de vos programmes de développement clinique ?

---

→ Message de rupture (envoyé 5 jours plus tard) :
{{firstName}}, je comprends qu&apos;il n&apos;est pas certain que vous ayez besoin d&apos;aide pour la conception d&apos;essais, la gestion des données ou la biostatistique pour le moment. N'hésitez pas à me contacter si vous souhaitez savoir pourquoi les promoteurs nous préfèrent à leur ancien prestataire de services biométriques. Cordialement
Autres modèles de réponses LinkedIn
→ Envoyé manuellement si le prospect répond par un message non concluant qui interrompt la séquence
{{firstName}}, mon collègue {{SalesRep}} vous a envoyé un e-mail pour vous expliquer pourquoi les promoteurs font appel à nous pour leurs services d&apos;études cliniques, de gestion des données, de biostatistique, etc. 

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Jour 1",    subject:
      "appel téléphonique {{firstname}}",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},
{{icebreaker}}
Plus de 350 organisations nous font confiance en tant que partenaire biométrique pour la conception d&apos;essais cliniques, la gestion des données et les services de biostatistique.
Nos clients étaient déterminés à optimiser le calendrier de leurs essais cliniques et leurs processus de traitement des données afin d&apos;améliorer leur rentabilité. Ils recherchaient des conseils en matière d&apos;intégrité des données et de conformité réglementaire. Ils devaient également s&apos;assurer que leurs données étaient prêtes à être soumises.
[ClientCompanyName]  a assuré la gestion des données pour nos essais cliniques de phase I/II, et je suis très satisfait de cette collaboration, déclare le responsable de projet clinique d&apos;une entreprise suisse de biotechnologie.
Vaut-il la peine de donner un peu plus de contexte lors d’un bref appel téléphonique, ou est-ce hors sujet ? 
Cordialement,
{{signature}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "7 jours après",    subject:
      "Discutez avec {{colleaguename1}} ou {{colleaguename2}}",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},
Vaut-il mieux contacter votre collègue {{colleaguename1}} ou {{colleaguename2}} pour les questions relatives à vos programmes de développement clinique ?
Je comprends que vous soyez occupé, mais je ne voudrais pas manquer l&apos;occasion de travailler avec {{companyName}}. Nous souhaitons voir s&apos;il vaut la peine d&apos;apporter une aide précieuse et de soutenir la mission de {{company name}}.
    
Ma liste de tâches ci-dessous m'a rappelé de vous écrire 😊 Passez une bonne journée



{{signature}}`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "5 jours après",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},
Nous sommes conscients que le temps et le budget sont limités, que les obstacles réglementaires sont importants et que la conception des essais cliniques ne cesse de gagner en complexité.
Vous et vos collègues serez impressionnés de voir comment nos experts ont aidé nos clients à mener à bien leurs essais cliniques.
Auriez-vous un peu de temps cette semaine pour en discuter par téléphone ?`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "8 jours après",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},
Que pensez-vous de ma suggestion : découvrir comment des promoteurs tels que {{companyName}} ont mené à bien leurs essais cliniques en recueillant des données de la plus haute qualité ?
Nos clients ne cessent de souligner leur satisfaction de ne plus avoir à traiter avec des personnes inexpérimentées.
Pour vous le prouver, nous vous invitons à un [ProductName]  d&apos;une durée maximale de 5 heures afin de discuter du plan de développement clinique de {{companyname}}.
Cet appel de présentation avec notre équipe d&apos;experts est 100 % gratuit.
Tout d&apos;abord, seriez-vous intéressé par un café virtuel pour en savoir un peu plus ?

{{signature}}`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "6 jours après",
    content: `{% assign ampm = "now" | date: "%P" %}{% if ampm contains "am" %}Bonjour{% else %}Bonjour{% endif %} {{firstName}},

Notre directeur [Director_Name] et moi-même avons essayé de vous contacter.
Nous avons pensé que vous seriez intéressé(e) de découvrir comment nos clients ont résolu
Pourquoi tant d&apos;essais cliniques de phase III échouent-ils ? (webinaire)
Autorisations accélérées (AA) : pas si vite ! (livre blanc)
Le guide ultime de la gestion des données cliniques (eBook)

Serait-il possible d&apos;avoir un bref entretien téléphonique ?

Si cela ne vous intéresse pas, merci de me le faire savoir ; c&apos;est tout à fait compréhensible.

Cordialement,
{{signature}}


Objections :
« Nous travaillons avec une CRO offrant une gamme complète de services (à la fois une CRO clinique et une CRO biométrique) :
Travailler avec une CRO biométrique dédiée garantit la plus haute qualité pour vos programmes d&apos;essais cliniques en matière de gestion des données et de biostatistique.
Contexte : Les grandes CRO excellent dans la gestion des opérations cliniques, telles que le recrutement des patients et la surveillance des sites. Les CRO biométriques ({{clientCompanyName}}), en revanche, sont spécialisées dans l’analyse statistique, la gestion des données et le reporting des données cliniques. Un partenariat avec une CRO clinique et une CRO biométrique vous donne accès à ces deux aspects.
« Nous avons déjà un partenaire » :
« Vous bénéficiez donc déjà du soutien adéquat de votre partenaire clinique, une CRO spécialisée en biométrie, et si oui, comment se passe la collaboration avec eux ? »​
« Ne vaut-il pas la peine d&apos;explorer les autres options disponibles pour savoir ce qui existe et à quel prix ? »
« Avez-vous constaté une communication fluide entre les équipes cliniques et celles chargées de la gestion des données ? »

[...] (contenu complet disponible sur demande)`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ClinicalResearchPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Recherche Clinique — Séquence Multicanal",
            description:
              "Séquence outreach multicanal de 6 étapes sur 40 jours pour recherche clinique.",
            path: "/insights/cold-email-templates/clinical-research",
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
              {["BIOTECH","MULTICANAL","CMO & CLINICAL"].map((tag) => (
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
                Séquence cold email pour recherche clinique — séquence multicanal
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                6 étapes sur 40 jours. 5 emails, 1 message LinkedIn.
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
              Les 6 touches de la séquence
            </h2>
            <p
              className="mx-auto mb-12 max-w-xl text-center text-sm"
              style={{ color: "#666d70" }}
            >
              5 emails, 1 message LinkedIn — sur 40 jours.
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
                Cette séquence de 9 touches sur 40 jours est conçue pour le secteur très spécifique de la recherche clinique, ciblant les CEO, CMO et directeurs médicaux de biotechs. La complexité du cycle de vente CRO nécessite une approche patiente et éducative.
              </p>
              <p>
                Le témoignage d’un Clinical Project Leader d’une biotech suisse et la référence à &quot;350+ organisations qui nous font confiance&quot; établissent une crédibilité forte. Dans le monde de la recherche clinique, la confiance et le track record sont les critères de sélection principaux d’un CRO.
              </p>
              <p>
                L’offre d’un &quot;Introductory Call de 5 heures, 100% gratuit&quot; (Touch #5) est une proposition de valeur exceptionnelle. Pour une biotech qui évalue un partenaire CRO, 5 heures de consulting gratuit représentent une valeur tangible significative qui justifie l’investissement en temps du décideur.
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
                  <strong>Offrir un Introductory Call de valeur.</strong>{" "}
                  5 heures de consulting gratuit représentent une valeur tangible pour une biotech.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Utiliser des case studies spécifiques.</strong>{" "}
                  Des études de cas sur la randomisation, la supply chain médicamenteuse et les biostatistiques.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Gérer l’objection du CRO existant.</strong>{" "}
                  &quot;La plupart de nos clients travaillaient avec un autre CRO avant de nous rencontrer.&quot;
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Combiner notes audio LinkedIn et emails.</strong>{" "}
                  La note audio après acceptation de connexion est un différenciateur majeur.
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
                  title: "Services CRO et biométrie clinique",
                  desc: "Gestion de données, biostatistiques, design d’essais cliniques — cette séquence est votre modèle.",
                },
                {
                  title: "Ciblage CEO et CMO de biotechs",
                  desc: "Les décideurs d’essais cliniques dans les entreprises biotech sont le coeur de cible.",
                },
                {
                  title: "Marché international (USA + Europe)",
                  desc: "La séquence couvre les deux marchés principaux de la recherche clinique.",
                },
                {
                  title: "Vente consultative longue durée",
                  desc: "Le cycle de 40 jours est adapté aux décisions complexes du secteur pharmaceutique.",
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
                  title: "CROs et prestataires de services cliniques",
                  desc: "Si vous offrez de la gestion de données, des biostatistiques ou du design d’essais.",
                },
                {
                  title: "SDRs ciblant les biotechs",
                  desc: "Les scripts bilingues (EN/FR) et la gestion des objections sont prêts à l’emploi.",
                },
                {
                  title: "Plateformes de données cliniques",
                  desc: "Si votre solution facilite la gestion des données d’essais cliniques.",
                },
                {
                  title: "Consultants en affaires réglementaires",
                  desc: "Adaptez la séquence à vos services de conformité et soumission FDA/EMA.",
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
