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
    "Séquence Cold Email Énergie Solaire — 47% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 5 étapes sur 28 jours pour énergie solaire. 1025 prospects contactés. 3 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/solar-energy",
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
    name: "Énergie Solaire",
    path: "/insights/cold-email-templates/solar-energy",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment vendre du solaire sans investissement initial ?",
    answer:
      "La formulation &quot;Best-case: you cut costs. Worst-case: you get a free benchmark&quot; élimine tout risque perçu. Le propriétaire n’a rien à perdre. L’adresse exacte du bâtiment dans l’email prouve que l’offre est sérieuse et personnalisée. Le rapport d’impact gratuit ajoute de la valeur même sans conversion.",
  },
  {
    question:
      "Pourquoi personnaliser avec l’adresse du bâtiment ?",
    answer:
      "C’est le signal le plus fort que le message n’est pas générique. Le propriétaire voit immédiatement que quelqu’un a identifié son bâtiment spécifique. Cette recherche prend du temps mais génère un taux de réponse de 47% — bien supérieur aux campagnes solaires génériques (5-10%).",
  },
  {
    question:
      "Comment adapter cette séquence au marché francophone ?",
    answer:
      "Traduisez les emails en français et adaptez les références législatives (Energiewende → transition énergétique, subventions fédérales). La structure LinkedIn + email + appel reste identique. Les références clients doivent être locales pour maximiser la crédibilité (maisons de retraite suisses, par exemple).",
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
    content: `Laissez ce champ vide pour contourner la limite de LinkedIn de 5 demandes de connexion personnalisées par jour et envoyer 20 invitations par jour

---

→ Présentation (envoyée 6 jours après l&apos;acceptation de la demande de connexion sur LinkedIn) :
Bonjour {{salutation}} {{lastName}}, mon collègue {{SalesRep}} vous a récemment envoyé un e-mail.
Nous avons remarqué que {{companyName}} pourrait avoir une consommation d&apos;électricité importante et disposer d&apos;un espace disponible sur son toit. Avez-vous déjà envisagé d&apos;utiliser l&apos;énergie solaire pour réduire vos factures d&apos;électricité et bénéficier de prix stables ?
De nombreuses entreprises installent désormais des centrales solaires sur site pour réduire leurs coûts, qu&apos;elles investissent ou gèrent ou non l&apos;installation, tout en soutenant la transition énergétique. J'ai pensé que cela pourrait également intéresser {{companyName}}.

---

→ Message avec les noms des collègues (envoyé 7 jours plus tard) :
Bonjour {{salutation}} {{lastName}}, la gestion des coûts d&apos;électricité ou des infrastructures énergétiques relève-t-elle de vos attributions, ou travaillez-vous avec quelqu&apos;un d&apos;autre sur ce sujet ?{% if colleaguename1 != blank and colleaguename2 != blank %} Peut-être {{colleaguename1}} ou {{colleaguename2}} ?{% elsif colleaguename1 != blank %} Peut-être {{colleaguename1}} ?{% elsif colleaguename2 != blank %} Peut-être {{colleaguename2}} ?{% endif %}

---

→ Message de rupture (envoyé 8 jours plus tard) :
{{salutation}} {{lastName}},
Si la réduction des coûts énergétiques et la garantie de prix de l&apos;électricité à long terme sont des priorités pour {{companyName}} en {{year}}  et au-delà, {{SalesRep}} et moi-même serions ravis de vous montrer comment {{client_ref}} et d&apos;autres y parviennent sans aucun investissement initial.

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Jour 1",    subject:
      "bâtiment / {{companyname}} à {{buildingcity}}",
    content: `Version A (Exemple : maison de retraite)

Cher(e) {{salutation}} {{lastName}},

J'ai remarqué que {{companyName}} est propriétaire du bâtiment situé à {{buildingaddress}}.

Des entreprises travaillent avec nous pour réduire leurs factures d&apos;électricité et éviter les pics de prix en installant des centrales solaires sur leurs sites. Il n&apos;y a aucun coût initial, et vous pouvez continuer à vous concentrer sur votre activité pendant que nous nous occupons du reste.


Cela pourrait-il intéresser {{companyName}} ? Ou suis-je à côté de la plaque ?

Dans le meilleur des cas : vous réduisez vos coûts. Dans le pire des cas : vous obtenez une analyse comparative gratuite.

Cordialement,
{{salesRep}}

P.S. : L&apos;un de nos clients, une maison de retraite, a réduit sa facture énergétique globale de 15 % avec un taux d&apos;autoconsommation de 97 %. Et nous avons versé une somme à cinq chiffres à un autre client simplement pour louer son toit.

{{signature}}

---

Cher{{salutation}} {{lastName}},
Serait-il préférable de contacter {% if colleaguename1 != blank %}{{colleaguename1}}{% endif %}{% if colleaguename1 != blank and colleaguename2 != blank %} {% endif %}{% if colleaguename2 != blank %}{{colleaguename2}}{% endif %} ? {% if colleaguename1 == blank and colleaguename2 == blank %} Serait-il préférable de contacter quelqu&apos;un d&apos;autre ?{% endif %}
En attendant, voici un document d&apos;une page résumant comment nos clients ont finalement rejoint l&apos;Energiewende sans avoir à se débrouiller seuls.
Faites-moi savoir ce que vous en pensez.
Cordialement,
{{signature}}`,
  },
  {
    number: 3,
    channel: "call",
    label: "Appel téléphonique",
    timing: "5 jours après",
    content: `En cours de réalisation, à valider ultérieurement`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "7 jours après",
    content: `Cher(e) {{salutation}} {{lastName}},

Je viens d&apos;essayer de vous appeler au {{phonenumber}}.

Plusieurs entreprises suisses, comme {{companyName}}, nous ont récemment contactés pour savoir comment une installation solaire sur toiture pourrait réduire les coûts énergétiques ou générer des revenus locatifs grâce à l&apos;espace inutilisé sur le toit.

Nous proposons un rapport d&apos;impact gratuit adapté à votre bâtiment, qu&apos;il s&apos;agisse d&apos;économies grâce à l&apos;autoconsommation ou d&apos;une injection totale avec location de toiture. Aucun investissement ni gestion n&apos;est nécessaire.



Seriez-vous disposé(e) à un bref entretien téléphonique de 10 à 15 minutes pour voir si cela correspond à {{companyName}} ?

Cordialement,

{{signature}}`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "7 jours après",
    content: `Cher(e) {{salutation}} {{lastName}},

Je vous ai contacté(e) à plusieurs reprises et je ne voudrais pas continuer à vous déranger si ce n&apos;est pas une priorité pour le moment.

Serait-il possible de vous envoyer une mise à jour dans quelques mois ?

S'il s&apos;agit simplement d&apos;une question de timing, ou si quelqu&apos;un d&apos;autre chez {{companyName}} s&apos;occupe de ce dossier, merci de m'en faire part.

Cordialement,

{{signature}}`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function SolarEnergyPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Énergie Solaire — 47% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 5 étapes sur 28 jours pour énergie solaire.",
            path: "/insights/cold-email-templates/solar-energy",
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
              {["ÉNERGIE SOLAIRE","MULTICANAL","PROPRIÉTAIRES"].map((tag) => (
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
                Séquence cold email pour énergie solaire — 47% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                5 étapes sur 28 jours. 3 emails, 1 appel téléphonique, 1 message LinkedIn. 1025 prospects contactés.
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
                value: "1025",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "13%",
                label: "Taux d&apos;ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "47%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "19",
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
              3 emails, 1 appel téléphonique, 1 message LinkedIn — sur 28 jours.
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
                1’025 prospects contactés avec un taux de réponse de 47% et 19 prospects intéressés. Cette séquence cible les propriétaires de bâtiments en Suisse alémanique avec une proposition d’énergie solaire sans investissement initial — un argument qui élimine la barrière financière.
              </p>
              <p>
                La personnalisation avec l’adresse exacte du bâtiment du prospect dans le premier email (Touch #2) est un niveau de recherche qui impressionne. Le prospect comprend immédiatement que le message n’est pas générique — quelqu’un a pris le temps d’identifier son bâtiment spécifique.
              </p>
              <p>
                La combinaison &quot;Best-case: you cut costs. Worst-case: you get a free benchmark&quot; élimine le risque perçu. Pour un propriétaire immobilier, cette formulation transforme l’engagement d’un risque en une opportunité sans désavantage.
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
                  <strong>Personnaliser avec l’adresse du bâtiment.</strong>{" "}
                  Mentionner l’adresse exacte du prospect montre un niveau de recherche impressionnant.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Éliminer la barrière financière.</strong>{" "}
                  &quot;Sans investissement initial&quot; transforme la proposition en opportunité sans risque.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer un rapport d’impact gratuit.</strong>{" "}
                  Un diagnostic personnalisé du bâtiment ajoute de la valeur même sans conversion.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Combiner autoconsommation et location de toiture.</strong>{" "}
                  Deux modèles économiques pour couvrir tous les profils de propriétaires.
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
                  title: "Solutions d’énergie solaire",
                  desc: "Installation, exploitation et maintenance de panneaux solaires sur les toits d’entreprises.",
                },
                {
                  title: "Ciblage propriétaires de bâtiments",
                  desc: "Propriétaires immobiliers, facility managers et directeurs d’exploitation sont vos prospects.",
                },
                {
                  title: "Marché suisse alémanique",
                  desc: "La séquence en allemand cible spécifiquement la Suisse germanophone.",
                },
                {
                  title: "Modèle sans investissement initial",
                  desc: "Si votre offre élimine la barrière financière (PPA, location de toiture), cette approche fonctionne.",
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
                  title: "Installateurs de panneaux solaires",
                  desc: "Si vous proposez l’installation et l’exploitation de centrales photovoltaïques.",
                },
                {
                  title: "SDRs ciblant les propriétaires immobiliers",
                  desc: "Le ton professionnel et la personnalisation par adresse de bâtiment sont adaptés.",
                },
                {
                  title: "Fournisseurs d’énergie renouvelable",
                  desc: "Si votre modèle inclut le PPA, la location de toiture ou l’autoconsommation.",
                },
                {
                  title: "Consultants en transition énergétique",
                  desc: "Adaptez la séquence à vos propres services de conseil énergétique.",
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
