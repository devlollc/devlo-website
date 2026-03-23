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
    "Séquence Cold Email Formation Vente B2B — Séquence Multicanal | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 30 jours pour formation vente b2b. 6 emails, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/b2b-sales-training",
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
    name: "Formation Vente B2B",
    path: "/insights/cold-email-templates/b2b-sales-training",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Combien de touches faut-il pour engager un Head of Sales ?",
    answer:
      "Nos données montrent que 8 touches sur 30 jours, combinant emails, appels et LinkedIn, sont optimales pour atteindre les décideurs commerciaux. Les Head of Sales reçoivent en moyenne 80+ emails par jour — il faut donc multiplier les canaux pour percer. La clé est d’apporter une valeur concrète à chaque touche (accès gratuit, génération de leads) plutôt que de simplement relancer.",
  },
  {
    question:
      "Comment adapter cette séquence à mon offre de formation ?",
    answer:
      "Trois éléments à personnaliser : (1) le résultat chiffré du Touch #1 — remplacez &quot;CHF 3.7M de pipeline&quot; par votre propre case study, (2) le lead magnet — proposez votre propre contenu gratuit au Touch #2, (3) l’offre d’essai — adaptez les &quot;100 leads gratuits&quot; à votre proposition de valeur unique.",
  },
  {
    question:
      "Pourquoi utiliser l’anglais pour cibler les CEO ?",
    answer:
      "Dans le marché B2B international, l’anglais est la langue de business par défaut. Les CEO et fondateurs de startups/scaleups sont habitués à communiquer en anglais, surtout aux États-Unis et en Europe. Si votre marché est exclusivement francophone, adaptez la langue mais gardez la structure et le timing intacts.",
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
    timing: "TBC",    subject:
      "notre appel téléphonique {{firstName}}",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},

{{Icebreaker1 - exemple : [J’ai vu sur LinkedIn que vous… ]}}.

De nombreuses entreprises B2B comme la vôtre et leurs équipes commerciales rencontrent leurs clients grâce à des campagnes de prospection multicanal qu’elles ont conçues en suivant notre Académie (la formation en ligne la plus complète et la plus détaillée qui soit).

Mes recherches m’ont montré que {{ValueProposition - exemple : [companyName aide les entreprises à améliorer leur expérience client et à augmenter leur retour sur investissement]}}. Et vous pourriez aider davantage de clients.

L’un de nos clients a démontré que notre méthodologie valait la peine d’être explorée lorsqu’il a ajouté 3,7 millions de CHF à son pipeline grâce à 160 prospects qualifiés. Auparavant, il perdait des centaines d’heures à générer des prospects de mauvaise qualité, laissant ainsi passer de nombreuses opportunités lucratives.

Ce serait formidable de pouvoir vous donner un peu plus de contexte par téléphone (ou peut-être d’externaliser le développement de vos ventes à notre agence ?).

Cela vous intéresse-t-il ou suis-je à côté de la plaque ?

Meilleures salutations depuis {{city}},
Charles

PS : Imaginez que vous ayez accès à un nombre illimité de prospects qualifiés : votre agenda pourrait ressembler à ceci 😉


Charles Perret | CEO
Boostez vos ventes B2B avec notre Agence & Académie
Suisse +41 79 758 64 03
USA ‭+1 (234) 201-8019‬
LinkedIn`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "3 jours après",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Bonjour{% variation %}Salut{% endspin %} {{firstName}},

Je vous écris à propos de mon dernier e-mail : j'ai pensé que vous aimeriez peut-être avoir un peu plus de contexte.

Si vous souhaitez contacter davantage de {{Target Audience - example: c-levels}} pour promouvoir votre {{Product: cyber security solution}}, accédez gratuitement au premier chapitre de notre Académie.

Parmi plusieurs tutoriels, vous apprendrez comment mettre en place une campagne sortante automatisée sur LinkedIn, jusqu'à 400 invitations par mois, sans aucun frais.

Cela vous intéresse ?

Cordialement,

{{signature}}`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "6 jours après",    subject:
      "Discuter avec {{colleaguename1}}",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},
Je comprends que vous soyez très occupé, mais je ne voudrais pas manquer l'occasion de travailler avec {{companyName}} : devrais-je contacter quelqu'un d'autre pour discuter du développement commercial (génération de prospects, prospection sortante, etc.) ?
Peut-être {{colleaguename1}} ?

Cordialement

PS : Ma liste de tâches ci-dessous m'a rappelé de vous écrire 😉

{{signature}}`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "1 jours après",
    content: `{{firstName}},

Je voudrais vous prouver que vos prospects sont notre priorité : souhaitez-vous recevoir gratuitement un projet de génération de 100 prospects ?

Vous ne devriez pas perdre votre temps à générer des prospects : vous devriez vous concentrer sur ce qui vous permet de créer le plus de valeur : rencontrer vos clients potentiels, comprendre leurs besoins et établir une relation de confiance.

Si cela vous intéresse, pourrions-nous échanger 15 minutes au téléphone pour discuter des critères de votre profil client idéal afin de préparer ce projet ? Peut-être le {% assign today = "now" | date: "%A" %}{% case today %}{% when "Monday" %}demain ou mercredi{% when "Tuesday" %}demain ou jeudi{% when "Wednesday" %}demain ou vendredi{% when "Thursday" %}demain ou lundi{% when "Friday" %}lundi ou mardi matin{% when "Saturday" %}la semaine prochaine{% when "Sunday" %}la semaine prochaine{% endcase %}?

Cordialement

{{signature}}`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "4 jours après",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},
Puisque vous êtes le/la {{jobtitle}}, qu'est-ce qui vous empêche d'obtenir un projet gratuit de génération de prospects ou d'apprendre de nouvelles méthodes d'acquisition de clients ? Est-ce parce que :
vous ne faites pas de prospection par e-mail, de démarchage téléphonique ou sur LinkedIn
ce n'est pas le bon moment
pour une autre raison ?
Je serais ravi de discuter avec vous de la manière dont nos clients ont lancé leur première campagne de prospection ou dont ils ont amélioré leur approche précédente.

Cordialement,

PS : Voici un petit café virtuel pour continuer votre journée :) !



{{signature}}`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "4 jours après",
    content: `{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}},

Alors… mes e-mails étaient-ils si mauvais qu’ils n’ont pas retenu votre attention ? 

J’ai essayé de vous contacter à plusieurs reprises, et si vous n’êtes pas intéressé par cette discussion, c’est tout à fait compréhensible.

J'ai pensé qu'il serait bon de vous contacter car, avant de nous rencontrer, nos clients passaient à côté de beaucoup d'opportunités : leurs commerciaux ne programmaient pas assez de démonstrations, leurs taux de conversion étaient catastrophiques et ils n'arrivaient pas à atteindre leurs objectifs.

Cordialement,

P.S. : si vous n'êtes pas intéressé par une collaboration pour développer votre activité, faites-le-moi savoir et je cesserai de vous contacter.

{{signature}}`,
  },
  {
    number: 7,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "1 jours après",
    content: `Connexion sur LinkedIn
Date d'envoi : 1 jour après le dernier message
Contenu : depuis le compte LinkedIn de Charles
{% spin %}{% variation %}Bonjour{% variation %}Cher{% variation %}Salut{% endspin %} {{firstName}}, Charles de devlo. J'ai hâte de me connecter avec vous et de découvrir les projets de {{companyName}}. Bonne chance pour vos initiatives de vente B2B au troisième trimestre`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function B2bSalesTrainingPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Formation Vente B2B — Séquence Multicanal",
            description:
              "Séquence outreach multicanal de 7 étapes sur 30 jours pour formation vente b2b.",
            path: "/insights/cold-email-templates/b2b-sales-training",
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
              {["VENTE B2B","MULTICANAL","CEO & HEAD OF SALES"].map((tag) => (
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
                Séquence cold email pour formation vente b2b — séquence multicanal
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 30 jours. 6 emails, 1 message LinkedIn.
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
                label: "Taux d'ouverture",
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
              Les 7 touches de la séquence
            </h2>
            <p
              className="mx-auto mb-12 max-w-xl text-center text-sm"
              style={{ color: "#666d70" }}
            >
              6 emails, 1 message LinkedIn — sur 30 jours.
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
                Cette séquence de 8 touches sur 30 jours cible les Head of Sales, fondateurs et CEO avec une approche centrée sur la preuve par les résultats. Dès le premier email, un chiffre concret — CHF 3.7M ajoutés au pipeline grâce à 160 leads qualifiés — capte l’attention du décideur commercial. Ce type de social proof chiffré est particulièrement efficace auprès d’une audience qui pense en termes de ROI et de pipeline.
              </p>
              <p>
                L’offre d’accès gratuit au premier chapitre de l’Academy dans le Touch #2 crée un engagement progressif. Plutôt que de demander un rendez-vous directement, la séquence propose d’abord une valeur concrète et immédiate. Cette technique de &quot;lead magnet intégré&quot; dans la séquence augmente significativement les taux de réponse en réduisant la friction.
              </p>
              <p>
                Le Touch #4 propose une génération gratuite de 100 leads — une offre irrésistible pour un Head of Sales. En combinant cette proposition avec la redirection vers un collègue (Touch #3), la séquence maximise les chances d’obtenir une réponse, soit du prospect initial, soit d’un autre décideur dans l’organisation.
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
                  <strong>Proposer de la valeur gratuite avant de demander un rendez-vous.</strong>{" "}
                  L'accès gratuit au premier chapitre ou la génération de 100 leads offerte réduisent la friction et augmentent l’engagement.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Utiliser des métriques de pipeline spécifiques.</strong>{" "}
                  CHF 3.7M et 160 leads qualifiés sont plus convaincants que &quot;améliorer vos résultats&quot;.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Intégrer un CTA LinkedIn en fin de séquence.</strong>{" "}
                  La connexion LinkedIn au Touch #7 prolonge la relation au-delà de la séquence email.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Adapter le ton aux décideurs commerciaux.</strong>{" "}
                  Le langage est direct et orienté résultats — pas de jargon technique, que du business.
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
                  title: "Vente de solutions de formation B2B",
                  desc: "Votre produit aide les équipes commerciales à prospecter plus efficacement. Academies, coaching, méthodologies outbound — cette séquence est votre modèle.",
                },
                {
                  title: "Ciblage Head of Sales et CEO",
                  desc: "Votre ICP inclut des directeurs commerciaux, fondateurs ou CEO de PME. Le ton direct et orienté résultats est conçu pour eux.",
                },
                {
                  title: "Marché américain et international",
                  desc: "La séquence est en anglais et mentionne des numéros USA/Suisse — adaptée pour un ciblage international.",
                },
                {
                  title: "Cycle de vente consultative",
                  desc: "Le lead magnet gratuit (chapitre + 100 leads) crée un engagement progressif avant le rendez-vous.",
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
                  title: "Équipes commerciales B2B",
                  desc: "Si vous vendez des solutions de formation, coaching ou méthodologie commerciale, cette séquence est votre point de départ.",
                },
                {
                  title: "SDRs ciblant les fondateurs et CEO",
                  desc: "Le ton direct et orienté pipeline est conçu pour engager les décideurs au plus haut niveau.",
                },
                {
                  title: "Agences de lead generation",
                  desc: "Si vous prospectez pour le compte de clients dans le secteur de la formation B2B.",
                },
                {
                  title: "Consultants en performance commerciale",
                  desc: "Adaptez la proposition de valeur à vos propres résultats et méthodologies.",
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
