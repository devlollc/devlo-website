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
    "Séquence Cold Email Supply Chain & Logistique — 13% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 30 jours pour supply chain & logistique. 696 prospects contactés. 5 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/supply-chain",
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
    name: "Supply Chain & Logistique",
    path: "/insights/cold-email-templates/supply-chain",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment vendre une plateforme de gestion de livraison ?",
    answer:
      "Les métriques opérationnelles sont les meilleurs arguments : 35% de réduction du temps de planification, 30% de baisse des plaintes clients, 15% d’amélioration des livraisons à temps. Les directeurs supply chain pensent en KPIs — parlez leur langage. La proposition de calculer le ROI en 30 minutes (Touch #6) est un CTA puissant.",
  },
  {
    question:
      "Pourquoi combiner LinkedIn et email en supply chain ?",
    answer:
      "Les directeurs logistique sont souvent sur le terrain et consultent LinkedIn sur mobile plus facilement que leur email professionnel. La connexion LinkedIn du VP Sales (Touch #1) crée un signal de haut niveau, tandis que les emails du SDR apportent la substance. Cette combinaison couvre les deux modes de communication.",
  },
  {
    question:
      "Comment le breakup email humoristique fonctionne-t-il en logistique ?",
    answer:
      "Les options A/B/C/D avec &quot;île déserte&quot; fonctionnent dans tous les secteurs car elles dédramatisent le rejet. Les directeurs supply chain apprécient l’humour qui rompt avec les emails corporate habituels. L’option B (&quot;rappelez-moi dans 3 mois&quot;) est particulièrement utile pour les cycles d’achat longs en logistique.",
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
    content: `Demande de connexion LinkedIn
Date d&apos;envoi : le premier jour de la séquence
Expéditeurs : profil LinkedIn du client
Contenu : laisser vide pour contourner la limite de 5 demandes de connexion LinkedIn personnalisées par jour et par profil

---

→ Message LinkedIn (envoyé 1 jour après l&apos;acceptation de la demande de connexion LinkedIn) - 59 mots :
Bonjour {{firstName}},
Vous avez peut-être reçu un e-mail de notre vice-présidente des ventes, {{salesRep}}, ou de sa collègue {{salesRep2}} concernant notre solution d&apos;optimisation de vos opérations logistiques.
Faites-moi savoir si vous avez eu l&apos;occasion de l&apos;examiner ou si vous souhaitez un bref aperçu.

---

→ Message LinkedIn (envoyé 5 jours après le message précédent) :
Seriez-vous disposé(e) à échanger rapidement par téléphone cette semaine pour voir si notre solution pourrait vous convenir ?

---

→ Message LinkedIn (envoyé 6 jours après le message précédent) :
?

---

→ Message LinkedIn (envoyé 7 jours plus tard) - Nom du collègue
Dernier message, promis ! 🙂
{% if colleaguename1 == blank %}Serait-il judicieux de m'entretenir avec un autre responsable de la gestion des livraisons au sein de votre entreprise ?{% else %}Serait-il judicieux de contacter votre collègue {{colleaguename1}} au sujet de notre plateforme de livraison du dernier kilomètre ?{% endif %}{% if colleaguename2 == blank %}{% else %}Ou peut-être {{colleaguename2}} ?{% endif %}`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Jour 1",    subject:
      "Version A : Vos opérations de livraison ?",
    content: `Bonjour {{firstName}},

Nous avons développé une plateforme de gestion de la livraison du dernier kilomètre spécialement conçue pour les entreprises comme la vôtre, qui gèrent des milliers de livraisons chaque année.

De grands acteurs tels que [ClientCostumer] utilisent [ClientCompanyName] pour réduire leurs coûts de livraison, améliorer l&apos;expérience client et réduire de 35 % le temps consacré à la planification des itinéraires.

Ils ont tous constaté une baisse de 35 % des réclamations clients ! 

Utilisez-vous actuellement un outil pour vous aider à gérer vos livraisons ? Ou bien vous servez-vous d&apos;un système entièrement interne ?

Cordialement,

{{signature}}
Se désabonner`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "6 jours après",    subject:
      "A/ Pourquoi [ClientCustomer] nous fait confiance pour ses livraisons",
    content: `Bonjour {{firstName}},

Je vous contacte car des entreprises telles que {{client_ref}} se sont tournées vers nous pour faire face à des défis tels que des frais de livraison élevés, un faible taux de livraison dès la première tentative et une augmentation des réclamations clients — autant de facteurs qui nuisent à la satisfaction et à la croissance.

Après avoir mis en place [ClientCompanyName], elles ont constaté une baisse de 30 % des réclamations et une amélioration de 15 % du taux de livraisons dans les délais.

Seriez-vous la personne idéale pour discuter de la manière dont nous pourrions faire de même pour {{companyName}} ?

Dans l&apos;attente de votre réponse.

P.S. N'hésitez pas à me faire savoir si vos outils actuels répondent déjà à vos besoins.

{{signature}}
Se désabonner`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "5 jours après",    subject:
      "{% if colleaguename2 == blank %} a-t-il discuté avec {{colleaguename}} ?{% else %} a-t-il discuté avec {{colleaguename}} ou {{colleaguename2}} ?{% endif %}",
    content: `Bonjour {{firstName}},

{% if colleaguename1 == blank %}Je sais que vous avez un emploi du temps chargé. Serait-il plus judicieux que je contacte un autre collègue au sujet de notre plateforme de livraison du dernier kilomètre ?{% else %}Je sais que vous avez un emploi du temps chargé. Serait-il plus judicieux que je contacte votre collègue {{colleaguename1} au sujet de notre plateforme de livraison du dernier kilomètre ?{% endif %}{% if colleaguename2 == blank %}{% else %}Ou peut-être {{colleaguename2}} ?{% endif %}

Merci d&apos;avance pour votre aide.
{{signature}}
Lien de désabonnement`,
  },
  {
    number: 5,
    channel: "call",
    label: "Appel téléphonique",
    timing: "6 jours après",
    content: `Appel n° 1 - Tentatives de rappel + message vocal
Date d&apos;envoi : 6 jours après le dernier message
Expéditeur : E-mails de {{salesRep}}


Gestion des objections (sera intégrée tout au long de la séquence)
À déterminer`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "Le même jour the last call",    subject:
      "{{firstName}}, je suis le [PhoneNumber]",
    content: `Bonjour {{firstName}},

{% if phone == blank %}J'ai essayé de vous appeler aujourd&apos;hui pour discuter de la manière dont nous pourrions calculer votre retour sur investissement avec et sans [ClientCompanyName].{% else %}J'ai essayé de vous contacter au {{phone}} pour discuter de la manière dont nous pourrions calculer votre retour sur investissement avec et sans [ClientCompanyName].{% endif %}

{% spin %}{% variation %}Cela ne prendra pas plus de 30 minutes et ne vous engage à rien.

Au pire, vous confirmerez que votre processus actuel est déjà optimal, et au mieux, vous découvrirez une nouvelle alternative intéressante.{% variation %}En seulement 30 minutes, vous pourrez soit confirmer que votre processus actuel fonctionne bien, soit explorer une solution qui pourrait l&apos;optimiser davantage.{% variation %}En moins de 30 minutes, vous aurez l&apos;occasion de vérifier que votre processus est déjà pleinement optimisé ou de découvrir une amélioration potentielle.{% endspin %}

Qu'en pensez-vous ?

Cordialement,

P.S. : Voici un petit café virtuel pour égayer votre journée 😀



{{signature}}
Lien de désabonnement`,
  },
  {
    number: 7,
    channel: "email",
    label: "Email #7",
    timing: "Le même jour the last call",    subject:
      "Ce sera mon dernier e-mail — je vous souhaite tout le meilleur pour la suite. 🙂",
    content: `Bonjour {{firstName}},
{% spin %}{% variation %}Il est donc temps de se dire au revoir 😢{% variation %}On dirait que nos chemins se séparent ici 😢{% variation %}Il est temps pour nous de nous dire adieu 😢{% endspin %}
 {% spin %}{% variation %}Chez [ClientCompanyName], nous accordons une grande importance aux retours d&apos;expérience pour continuer à nous améliorer.
Si vous avez 5 secondes, pourriez-vous m'indiquer pourquoi vous préférez en rester là ? Il vous suffit de répondre par une seule lettre !{% variation %}Chez [ClientCompanyName], nous apprécions sincèrement tout retour d&apos;expérience qui nous aide à nous améliorer.
Si vous avez 5 secondes, pourriez-vous nous dire pourquoi vous préférez ne pas continuer ? Une seule lettre suffit !{% variation %}Chez [ClientCompanyName], chaque commentaire nous aide à progresser.
En seulement 5 secondes, pourriez-vous me dire, en une seule lettre, pourquoi vous préférez ne pas continuer ? 😊{% endspin %}
A. « Non merci, je n&apos;en ai absolument pas besoin. »
B. « Ce n&apos;est pas le bon moment ; peut-être un e-mail de suivi dans 3 mois ? »
C. « Intéressant, mais j&apos;ai besoin de plus de détails… Peut-on programmer un appel la semaine prochaine ? »
D. « Je me suis échoué sur une île déserte, et personne ne répond ! 🏝️ »
Quoi qu’il en soit, j’espère que nos e-mails vous ont fait sourire 🙂
Je vous souhaite, à vous et à votre équipe, beaucoup de succès pour la suite !

{{signature}}
Lien de désabonnement`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function SupplyChainPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Supply Chain & Logistique — 13% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 7 étapes sur 30 jours pour supply chain & logistique.",
            path: "/insights/cold-email-templates/supply-chain",
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
              {["LOGISTIQUE","LINKEDIN + EMAIL","SUPPLY CHAIN"].map((tag) => (
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
                Séquence cold email pour supply chain & logistique — 13% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 30 jours. 5 emails, 1 appel téléphonique, 1 message LinkedIn. 696 prospects contactés.
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
                value: "696",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "14%",
                label: "Taux d&apos;ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "13%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "20",
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
                696 prospects contactés avec un taux de réponse de 13% et 20 prospects intéressés dans le secteur supply chain & logistique. La séquence de 5 touches combine LinkedIn et email pour atteindre les décideurs logistiques d’entreprises gérant des milliers de livraisons annuelles.
              </p>
              <p>
                Les métriques clés — réduction de 35% du temps de planification, baisse de 30% des plaintes clients — parlent directement aux KPIs des responsables supply chain. Ces chiffres sont suffisamment spécifiques pour être crédibles et suffisamment impressionnants pour justifier une conversation.
              </p>
              <p>
                Le Touch #7 (breakup email) avec les options A/B/C/D est la même technique que la séquence digital marketing (#27), confirmant son efficacité cross-industrie pour récupérer les prospects inactifs avec humour.
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
                  <strong>Utiliser des métriques opérationnelles concrètes.</strong>{" "}
                  35% de réduction du temps de planification et 30% de baisse des plaintes.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer un calcul de ROI personnalisé.</strong>{" "}
                  Le Touch #6 propose de calculer le ROI avec et sans la solution en 30 minutes.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Le breakup email humoristique cross-industrie.</strong>{" "}
                  Les options A/B/C/D fonctionnent aussi bien en supply chain qu’en marketing digital.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Varier les canaux avec LinkedIn en premier.</strong>{" "}
                  Les connexions LinkedIn du VP Sales préparent le terrain pour les emails du commercial.
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
                  title: "Plateformes de gestion de livraison",
                  desc: "Last-mile delivery, planification d’itinéraires, expérience client logistique — votre solution est concernée.",
                },
                {
                  title: "Ciblage directeurs supply chain",
                  desc: "Responsables logistique, delivery managers et VP Operations sont vos prospects idéaux.",
                },
                {
                  title: "Entreprises à fort volume de livraisons",
                  desc: "Si votre client idéal gère des milliers de livraisons annuelles, cette séquence est adaptée.",
                },
                {
                  title: "Vente avec calcul de ROI intégré",
                  desc: "La proposition de calculer le ROI en 30 minutes est un framework reproductible.",
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
                  title: "Plateformes de gestion de livraison",
                  desc: "Last-mile delivery, optimisation d’itinéraires, expérience client logistique.",
                },
                {
                  title: "SDRs ciblant les directeurs logistique",
                  desc: "Les métriques opérationnelles (35% planification, 30% plaintes) sont directement utilisables.",
                },
                {
                  title: "Startups LogisTech",
                  desc: "Si votre solution améliore la performance de la livraison du dernier kilomètre.",
                },
                {
                  title: "Équipes commerciales transport et logistique",
                  desc: "Adaptez la séquence à vos propres KPIs et case studies de clients.",
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
