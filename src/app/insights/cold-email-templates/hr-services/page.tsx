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
    "Séquence Cold Email Avantages Employés & RH — 38% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 7 étapes sur 27 jours pour avantages employés & rh. 795 prospects contactés. 5 emails, 1 appel téléphonique, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/hr-services",
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
    name: "Avantages Employés & RH",
    path: "/insights/cold-email-templates/hr-services",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Comment prospecter les responsables RH sur les avantages extra-légaux ?",
    answer:
      "L’ancrage dans la réglementation des commissions paritaires est la clé. Les RH managers belges connaissent ces obligations et sont sensibles aux évolutions législatives. La vidéo courte (1min13) au Touch #3 et les actualités sur les chèques repas (augmentation à 10-12€) créent des raisons légitimes de reprendre contact.",
  },
  {
    question:
      "Comment déplacer un fournisseur historique ?",
    answer:
      "La séquence utilise une approche &quot;challenger&quot; : &quot;90% de nos clients sont d’anciens clients historiques de [concurrent]&quot;. Proposer une comparaison en 15 minutes élimine la barrière du changement. Le coût fixe par employé est le différenciateur technique clé qui justifie la comparaison.",
  },
  {
    question:
      "Pourquoi la séquence inclut-elle un cold call optionnel ?",
    answer:
      "Dans le secteur RH belge, le cold call est parfois mal perçu. Le rendre optionnel permet au commercial de l’utiliser quand il a un signal d’intérêt (ouvertures multiples, clics sur les liens) plutôt que systématiquement. Cette approche sélective augmente le taux de succès de l’appel.",
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
    content: `[Blank]

---

→ LinkedIn message (sent 1 day after the LinkedIn connection is accepted):
	Version A (Client reference + Pain cost efficient + CTC)
{% if lastName == blank %}Bonjour {{salutation}} {{firstName}}{% else %}Bonjour {{salutation}} {{lastName}} {% endif %}
En tant que membre de la commission paritaire 200, j'imagine que vos employés bénéficient déjà d'éco-chèques.
{% if gender == "Male" %}Seriez-vous intéressé de découvrir les différences entre [ClientCompanyName]  et votre fournisseur actuel ?{% else %}Seriez-vous intéressée de découvrir les différences entre [ClientCompanyName] et votre fournisseur actuel ? {% endif %}
	Version B (3 last novelties)
{% if lastName == blank %}Bonjour {{salutation}} {{firstName}}{% else %}Bonjour {{salutation}} {{lastName}} {% endif %}
Vous avez peut-être reçu un e-mail de mon collègue {{salesRep}}  au sujet de nos 3 innovations de 2025, notamment notre nouvelle plateforme [ProductName] et celle concernant le budget de mobilité. 
Les employés peuvent maintenant profiter de toutes nos promotions même sans utiliser de chèques [ClientCompanyName].

---

→ LinkedIn message (sent 5 days after the previous message):

Comme vous le savez peut-être, l’Arizona a confirmé sa volonté d’augmenter la valeur des chèques repas à 10 puis 12€. 

Nous sommes les seuls du marché a proposé un coût fixe par employé pour nos chèques. 

Conséquence ? L’augmentation de la valeur faciale n’impliquera aucune augmentation de vos frais chez[ClientCompanyName].


[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Jour 1",    subject:
      "Version A : {{companyName}} et [ClientCompanyName] ?",
    content: `Version A (Client reference + Pain + CTC)
Bonjour {{salutation}} {{lastName}},

70’000 sociétés et leurs employés font appel à [ClientCompanyName] pour optimiser leurs avantages extralégaux.

{% spin %}{% variation %}Sans amélioration des avantages actuels, les entreprises risquent de perdre leurs talents au profit d’acteurs qui investissent plus dans le bien-être dans leurs employés.{% variation %}Vous le savez sans doute, investir dans le bien-être des collaborateurs est essentiel pour attirer et fidéliser les talents. {% variation %}On observe que les entreprises qui valorisent le bien-être de leurs équipes se démarquent de plus en plus sur le marché du travail. {% endspin %}

Proposez-vous déjà des chèques-repas, cadeaux et éco-chèques ?

Bien cordialement,

P.S. : Je peux vous envoyer une vidéo qui reprend nos [ProductName]  si vous voulez

{{signature}}
unsubscribe

Version B (old school - very direct)

{% if lastName == blank %}Bonjour {{salutation}} {{firstName}}{% else %}Bonjour {{salutation}} {{lastName}} {% endif %}

En étant membre de la commission paritaire 200, j'imagine que vos employés bénéficient déjà d'éco-chèques.

En plus de notre rapport qualité prix imbattable, nous venons de sortir notre plateforme [ProductName] qui permet à vos employés de profiter de toutes nos promotions, même sans utiliser la carte [ClientCompanyName].

{% if gender == "Male" %}Seriez-vous intéressé de prendre 15 minutes et comparer nos offres ?{% else %}Seriez-vous intéressée de prendre 15 minutes et comparer nos offres ? {% endif %}

Bien cordialement,

P.S. : Je peux vous envoyer une vidéo qui reprend nos [ProductName] si vous voulez

{{signature}}
Unsubscribe link`,
  },
  {
    number: 3,
    channel: "email",
    label: "Email #3",
    timing: "5 jours après",
    content: `Version A
Bonjour {{salutation}} {{lastName}},

{% spin %}{% variation %}Mon premier mail n’a malheureusement pas fait 🪰, vous offrez donc peut-être déjà des chèques repas à vos employés ? {% variation %}N’ayant pas eu de retour à mon premier mail, je suppose que vous proposez déjà des chèques-repas à vos employés ? {% variation %}Sans réponse à mon premier mail, j’imagine que vous offrez déjà des chèques-repas à vos employés ?{% endspin %} 

J’aimerais vous montrer une courte vidéo (1’13) qui présente nos [ProductName].

Peut-être que l’une d’elles, notamment sur le budget mobilité, est pertinente pour vous ?

VIDEO SENDSPARK type https://sendspark.com/ 
	
Qu'en avez-vous pensé ?

Au plaisir d'avoir votre retour,

{% if gender == “Male” %}P.S. : Si vous êtes déjà pleinement satisfait de votre partenaire actuel, n’hésitez pas à me le faire savoir 🙂{% else %}P.S. : Si vous êtes déjà pleinement satisfaite de votre partenaire actuel, n’hésitez pas à me le faire savoir 🙂{% endif %}

{{signature}}
unsubscribe


Version B

{% if lastName == blank %}Bonjour {{salutation}} {{firstName}}{% else %}Bonjour {{salutation}} {{lastName}} {% endif %}

Comme vous le savez, tous les membres de la commission paritaire sont tenus de proposer des éco-chèques à leurs employés. 

Je me demandais donc si vous offriez déjà d'autres avantages ?

Au plaisir d'avoir votre retour,

{% if gender == "Male" %}P.S. : Si vous êtes déjà pleinement satisfait de votre partenaire actuel, n’hésitez pas à me le faire savoir 🙂{% else %}P.S. : Si vous êtes déjà pleinement satisfaite de votre partenaire actuel, n’hésitez pas à me le faire savoir 🙂{% endif %}`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "6 jours après",    subject:
      "{% if colleaguename1 == blank %}discussion avec autre collègue ?{% else %}discussion avec {{colleaguename1}} ?{% endif %}{% if colleaguename2 == blank %}{% else %} Ou {{colleaguename2}} ?{% endif %}",
    content: `Bonjour {{salutation}} {{lastName}},

{% spin %}{% variation %}Vous avez certainement un emploi du temps très chargé. {% variation %}Je me doute que votre emploi du temps est bien rempli. {% variation %}J’imagine que vous avez beaucoup à gérer au quotidien. {% endspin %} 

{% if colleaguename1 == blank %}Est-ce que je devrais plutôt contacter un.e autre collègue concernant nos[ProductName] ?{% else %}Est-ce que je devrais plutôt contacter votre collègue {{colleaguename1}} concernant nos[ProductName] ?{% endif %}{% if colleaguename2 == blank %}{% else %}Ou peut-être {{colleaguename2}} ?{% endif %}

Merci d'avance pour votre aide,
{{signature}}
Unsubscribe link 






Objection management
On n’a pas de chèques et on ne veut pas en donner
Merci de votre réponse. J’en prends bien note. 
Pouvez-vous juste m’expliquer pourquoi faites-vous ce choix? Cela nous aidera grandement pour nos prochains développements 🙂
Si néanmoins vous souhaitez donner quelque chose en plus à vos collaborateurs en cette fin d’année, il est toujours possible d’opter pour la solution éco-chèques et chèques-cadeaux, qui représente au maximum un pouvoir d’achat supplémentaire de[ProductName].
Bien cordialement,

{{signature}}

On est heureux avec notre fournisseur actuel
Merci de votre réponse. J’en prends bien note. 
En tant que dernier arrivant sur le marché, 90% de nos clients sont des anciens clients historiques d’{{client_ref}}
Aucune entreprise (même celles qui n’ont pas signé) a regretté de prendre ces 15 minutes afin de comparer nos services. C’est toujours pertinent de se tenir au courant des nouvelles innovations du marché 🙂
Qu’en pensez-vous?
Bien cordialement,

{{signature}}`,
  },
  {
    number: 5,
    channel: "email",
    label: "Email #5",
    timing: "6 jours après",    subject:
      "{{firstName}}, appel manqué",
    content: `Bonjour {{salutation}} {{lastName}},

{% if phone== blank %}J’ai tenté de vous joindre sur votre téléphone aujourd’hui afin de vous présenter notre toute dernière nouveauté, le plan cafétéria ainsi que le budget mobilité.{% else %}J’ai tenté de vous joindre au {{phone}} afin de vous présenter notre toute dernière nouveauté, le plan cafétéria ainsi que le budget mobilité. {% endif %}

Si vous commencez avec nous ce mois-ci c’est :





Avez-vous déjà implémenté ces deux avantages au sein de votre entreprise ?

Bien cordialement,

PS : Voici un petit café virtuel pour continuer votre journée 😀



{{signature}}
Unsubscribe link`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "7 jours après",    subject:
      "ce sera mon dernier mail, bonne continuation 🙂",
    content: `Version A (FUN)
Bonjour {{salutation}} {{lastName}},
{% spin %}{% variation %}C'est donc le moment de se dire au revoir 😢{% variation %}Il est donc temps de se dire au revoir 😢{% variation %}C'est donc l'heure de nous dire au revoir 😢{% endspin %}
{% spin %}{% variation %}Chez [ClientCompanyName], nous sommes très friands de feedback afin de nous améliorer.
Si vous avez 5 petites secondes, pourriez-vous m'indiquer pourquoi vous préférez en rester là ? Nous avons besoin que d’une seule lettre! {% variation %}Chez [ClientCompanyName], nous apprécions chaque retour pour nous améliorer.
Si vous avez 5 secondes, pourriez-vous m'indiquer pourquoi vous préférez en rester là ? Une seule lettre suffit ! {% variation %}Chez [ClientCompanyName], chaque retour nous aide à progresser.
En 5 secondes, pourriez-vous me dire en une lettre pourquoi vous préférez ne pas donner suite ? 😊 {% endspin %}
    A. "Non merci, absolument pas besoin"
    B. "Pas le bon moment, un petit mail dans 3 mois ?"
    C. "Intéressant, mais j’ai besoin de plus d’infos... On s'appelle semaine prochaine ?"
    D. "J’ai atterri sur une île déserte et Rio ne répond plus ! 🏝️"
En tout cas, j'espère vous avoir fait sourire🙂
Excellente continuation à toute votre équipe,

{{signature}}
Unsubscribe link 

Version B  (No fun, 3 months later relaunch?)

Bonjour {{salutation}} {{lastName}},	

{% if gender == “Male” %}Je vous ai contacté à plusieurs reprises et je ne veux pas continuer à vous écrire si l’optimisation de vos coûts n’est pas une priorité pour l'instant.{% else %}Je vous ai contactée à plusieurs reprises et je ne veux pas continuer à vous écrire si l’optimisation de vos coûts n’est pas une priorité pour l’instant.{% endif %}

Serait-il judicieux de se recontacter dans quelques mois ?

Bien cordialement,
{{signature}}
Unsubscribe link`,
  },
  {
    number: 7,
    channel: "call",
    label: "Appel téléphonique",
    timing: "N/A",
    content: `Call - OPTIONAL

Objections management:
Vous me confirmez que dans nos commissions paritaires on peut remplacer la Prime de Fin d'année par ce plan cafetaria (CP200 & CP 207)
Malheureusement non, la commission paritaire 207 ne permet pas de convertir la primer de fin d’année par le plan cafétaria`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function HrServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Avantages Employés & RH — 38% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 7 étapes sur 27 jours pour avantages employés & rh.",
            path: "/insights/cold-email-templates/hr-services",
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
              {["RH & AVANTAGES","LINKEDIN + EMAIL","RH MANAGERS"].map((tag) => (
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
                Séquence cold email pour avantages employés & rh — 38% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                7 étapes sur 27 jours. 5 emails, 1 appel téléphonique, 1 message LinkedIn. 795 prospects contactés.
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
                value: "795",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "85%",
                label: "Taux d'ouverture",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "38%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "41",
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
              5 emails, 1 appel téléphonique, 1 message LinkedIn — sur 27 jours.
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
                795 prospects contactés avec un taux de réponse de 38% et un taux d’ouverture impressionnant de 85%. Cette séquence de 5 touches ciblant les responsables RH en Belgique est remarquablement efficace grâce à un ciblage précis sur les commissions paritaires.
              </p>
              <p>
                Le démarrage par LinkedIn (Touch #1) avec une série de messages programmés (introduction, actualité chèques repas, noms de collègues, breakup) crée une présence continue sur la plateforme préférée des professionnels RH.
              </p>
              <p>
                L’utilisation de l’actualité législative (Arizona confirmant l’augmentation de la valeur des chèques repas à 10 puis 12€) comme levier de conversation est brillante. Elle transforme un message commercial en information utile et crée un sentiment d’urgence naturel.
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
                  <strong>Ancrer la conversation dans la réglementation.</strong>{" "}
                  Les commissions paritaires et l’augmentation des chèques repas créent un contexte légitime.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Proposer une vidéo courte (1min13).</strong>{" "}
                  Le format vidéo Sendspark au Touch #3 engage différemment qu’un email texte.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Gérer les objections dans la séquence.</strong>{" "}
                  Templates de réponse pour &quot;pas de chèques&quot; et &quot;déjà un fournisseur&quot;.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Citer un taux fixe comme différenciateur.</strong>{" "}
                  &quot;Seuls sur le marché à proposer un coût fixe par employé&quot; est un argument décisif.
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
                  title: "Solutions d’avantages extra-légaux",
                  desc: "Chèques repas, chèques cadeaux, éco-chèques, budget mobilité — cette séquence est votre modèle.",
                },
                {
                  title: "Ciblage responsables RH de PME",
                  desc: "HR managers dans des entreprises de 10 à 100 employés en Belgique sont le coeur de cible.",
                },
                {
                  title: "Marché belge (commissions paritaires)",
                  desc: "La séquence utilise le vocabulaire spécifique des commissions paritaires 200 et 207.",
                },
                {
                  title: "Challenger le fournisseur en place",
                  desc: "Si votre positionnement est de déplacer un fournisseur historique avec une meilleure offre.",
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
                  title: "Fournisseurs d’avantages extra-légaux",
                  desc: "Chèques repas, éco-chèques, chèques cadeaux, budget mobilité — tout fournisseur dans ce domaine.",
                },
                {
                  title: "SDRs ciblant les responsables RH belges",
                  desc: "Le vocabulaire des commissions paritaires et la législation belge sont intégrés.",
                },
                {
                  title: "Solutions de plan cafétéria",
                  desc: "Si votre offre inclut la flexibilisation de la rémunération.",
                },
                {
                  title: "Challenger dans un marché établi",
                  desc: "La stratégie de comparaison avec le fournisseur actuel est un modèle reproductible.",
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
