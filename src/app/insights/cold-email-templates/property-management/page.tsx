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
    "Séquence Cold Email Gestion Immobilière — 84% de Taux de Réponse | devlo",
  description:
    "Séquence outreach multicanal de 8 étapes sur 40 jours pour gestion immobilière. 257 prospects contactés. 4 emails, 3 appels téléphoniques, 1 message LinkedIn. Emails, scripts et messages inclus.",
  path: "/insights/cold-email-templates/property-management",
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
    name: "Gestion Immobilière",
    path: "/insights/cold-email-templates/property-management",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question:
      "Pourquoi débuter par un cold call dans l’immobilier ?",
    answer:
      "Les directeurs de régies en Suisse romande sont accessibles par téléphone et préfèrent souvent un échange direct. Le cold call en Touch #1 permet de qualifier rapidement le prospect : quel logiciel utilise-t-il ? A-t-il un projet de changement ? Combien d’objets gère-t-il ? Ces informations orientent la suite de la séquence.",
  },
  {
    question:
      "Comment gérer les objections sur la migration de données ?",
    answer:
      "La migration est la principale objection des régies. La séquence y répond de plusieurs manières : mentionner la croissance (300 à 400 régies migrées), proposer un consulting gratuit de 2h, et offrir un accompagnement personnalisé. Les arguments spécifiques contre Quorum et Immob 8 préparent le commercial à chaque scénario.",
  },
  {
    question:
      "Quel est le ROI d’une campagne ciblant les régies immobilières ?",
    answer:
      "Avec un taux de réponse de 84% et 17 prospects intéressés sur 257, le coût d’acquisition par lead qualifié est très compétitif. Un seul contrat de logiciel immobilier (25k€+ d’investissement initial) rentabilise l’ensemble de la campagne. Le marché suisse romand est suffisamment petit pour un ciblage exhaustif.",
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
    channel: "call",
    label: "Appel téléphonique",
    timing: "Le même jour as the previous follow-up",
    content: `Successfully getting past the switchboard
Your objective is to be transferred to your prospect: there’s no point in presenting your solution to the wrong person. Be assertive and get straight to the point, as if you know very well the person you’re trying to reach. Here’s an example:

"Bonjour, c&apos;est la société X"

“Bonjour, c&apos;est {{salesRep}} de chez [ClientCompanyName], pourais-je parler à {{FirstName}}”

"De quoi s&apos;agit-il ?" 

“C'est à propos d&apos;un logiciel de gestion immobilière”

“Est-ce qu&apos;il/elle vous connaît?”​​

“Je l&apos;espère" OU “Nous sommes en contact par email


↙                                   ↓                                             ↓                                              ↘


Introduce the reason for our call to the prospect
"John Doe"
 
Bonjour Monsieur, c’est {{salesRep}}, représentant commercial de chez [ClientCompanyName]. Auriez-vous une minute pour discuter ensemble ?
     ↙                                       ↓                                       

(Si déjà contacté )
Mon collègue {{salesRep}} vous a contacté début {{year}} concernant  votre logiciel de gestion immobilière. 
Et je me suis dit qu’il serait intéressant de rerentrer en contacte car  les choses ont pas mal évolué depuis.

Puis-je vous demander comment vous êtes organisé aujourd’hui pour gérer ces opérations ?

(Si pas contacté )

[...] (contenu complet disponible sur demande)`,
  },
  {
    number: 2,
    channel: "email",
    label: "Email #2",
    timing: "Après l&apos;appel",    subject:
      "Notre service d&apos;assistance téléphonique / gestion locative",
    content: `Bonjour {{salutation}} {{lastName}},
J’ai essayé de vous joindre au [PhoneNumber] car {{icebreaker}}
J’ai fait quelques recherches et je me demandais si vous et {{colleaguename1}} êtes responsables de votre logiciel de gestion immobilière chez {{companyName}}?
Depuis un année{{C1_Addon}}, nous sommes  passés de 300 à 400 régies: elles se sont tournées vers notre solution[ClientCompanyName] pour gérer et centraliser au même endroit toute leur gestion administrative, financière, technique et juridique.
Signature numérique, états des lieux sur iPad, interface avec les applications tierces (PropTech), voilà les sujets qui intéressent le plus nos clients dernièrement.
Voudriez-vous recevoir un peu plus de détails lors d&apos;un bref appel d&apos;introduction ?
Cordialement

{signature}`,
  },
  {
    number: 3,
    channel: "linkedin",
    label: "Connexion LinkedIn",
    timing: "June 4, 2024",
    content: `Bonjour {{salutation}} {{lastName}}, {{linkedinnote}}
Exemple: la note Linkedin commence par
Votre post LinkedIn sur... 
Votre profil LinkedIn indique que...
Votre interview OU article OU billet de blog...
Mon collègue {salesRep}  m'a parlé de...
... C'est un plaisir de connecter avec vous".

---

→ Note audio (envoyée 6 jours après l&apos;acceptation de la connexion LinkedIn) :
Merci d&apos;avoir accepté ma demande. Mon collègue {salesRep} vous a envoyé un email concernant votre gestion locative. 400 régies utilisent notre solution AbaImmo pour gérer leurs 960’000 objets, et je me demandais si vous voulez en découvrir un peu plus lors d’une première rencontre d’introduction ensemble?

---

message envoyé 7 jours plus tard
Version A→ avec les noms des collègues:
Bonjour {{salutation}} {{lastName}}, est-il préférable de contacter vos collègues {{colleaguename1}} ou {{colleaguename2}} pour discuter de votre logiciel de gestion immobilière?
Version B→ sans les noms des collègues:
Bonjour {{salutation}} {{lastName}}, Y a-t-il quelqu&apos;un d&apos;autre que je puisse contacter pour discuter de votre logiciel de gestion immobilière ?

---

→ Message de fin (envoyé 5 jours plus tard):
Bonjour {{salutation}} {{lastName}}, je comprends que votre agenda du temps est chargé. N'hésitez pas à nous contacter si vous souhaitez savoir comment nos clients s’organisent avec notre solution. Cordialement
→ Envoyé manuellement si le prospect répond par un message non concluant qui interrompt la séquence
tbc
→ Envoyé manuellement si le prospect répond qu&apos;il est la bonne personne à contacter
tbc
→ Envoyé manuellement si le prospect répond qu&apos;il n&apos;est pas intéressé
tbc
→ Envoyé manuellement si le prospect a discuté/transmis le message à un collègue
tbc`,
  },
  {
    number: 4,
    channel: "email",
    label: "Email #4",
    timing: "5 jours après",    subject:
      "Même sujet que le message précédent",
    content: `Bonjour {{salutation}} {{lastName}},
Que pensez-vous de ma proposition, de voir comment d’autres régies en Suisse romande organisent leur gestion locative, notamment [ProductName]?
Nos clients ont souligné à plusieurs reprises leur satisfaction à travailler avec une solution robuste et des personnes expérimentées.
Pour le prouver, nous vous invitons à une première discussion avec [Client_Name] (Directeur [clientCompanyName]) pour discuter de vos besoins. Si une analyse plus détaillée est nécessaire, nous offrons 2h de consulting.
Est-ce que ça vous intéresse?
Cordialement`,
  },
  {
    number: 5,
    channel: "call",
    label: "Appel téléphonique",
    timing: "5 days after previous following up",
    content: `Appel n° 2
Date d&apos;envoi : 5 jours après le dernier rappel`,
  },
  {
    number: 6,
    channel: "email",
    label: "Email #6",
    timing: "6 jours après",    subject:
      "Même sujet que le message précédent",
    content: `Bonjour {{gender}} {{lastName}},
Est-il préférable de contacter votre collègue {{colleaguename2}} pour les questions liées à votre gestion locative?
Merci d’avance pour votre aide,
Bonne journée`,
  },
  {
    number: 7,
    channel: "call",
    label: "Appel téléphonique",
    timing: "5 days after the previous following up",
    content: `Appel n° 3
Date d&apos;envoi : 5 jours après le dernier rappel`,
  },
  {
    number: 8,
    channel: "email",
    label: "Email #8",
    timing: "Object: the same object with the previous follow-up",
    content: `Bonjour {{salutation}} {{lastName}},

Mon collègue {{salesRep}} et moi-même avons essayé de vous contacter.

Nous avons pensé que vous intéresserait de découvrir comment clients ont résolu les problèmes suivants
gestion des honoraires
versement des disponibles
les portails (locataires, propriétaires, collaborateurs)

Un bref appel d&apos;introduction est-il hors de question? Faites-le moi savoir, je comprendrais parfaitement.

Je vous prie d&apos;agréer, {{salutation}} {{lastName}}, l&apos;expression de mes salutations distinguées.


"Ok, je vous transfère"
“Je suis désolé mais il n&apos;est pas disponible pour le moment. Puis-je prendre un message?"
"Je suis désolé mais je n&apos;ai pas le droit de vous transférer"
“Je ne trouve pas cette personne dans notre répertoire”
[Aller à la page suivante]
“Je rappellerai plus tard, pouvez-vous me donner sa ligne directe?”

"Non, je suis désolé, 
nous ne sommes pas autorisés." 

“D'accord, je vais lui envoyer un petit e-mail.  Pouvez-vous simplement confirmer son adresse e-mail, est-ce {{email}}?”
↘
“D'accord, je vais lui envoyer un petit mail”

[Facultatif]

“Pourriez-vous simplement confirmer son adresse e-mail, {{email}}? Merci”
 ↓
Vérifiez que vous appelez la bonne entreprise + le bon bureau/office 

"Est-ce que j&apos;appelle bien {{companyName}} à Zurich?”

Vérifiez le profil LinkedIn du prospect pour voir s&apos;il y travaille toujours.
↙
[Aller à la page suivante]
[Fin de l&apos;appel : mettre à jour HubSpot et Lemlist]

[...] (contenu complet disponible sur demande)`,
  }
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function PropertyManagementPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline:
              "Séquence Cold Email Gestion Immobilière — 84% de Taux de Réponse",
            description:
              "Séquence outreach multicanal de 8 étapes sur 40 jours pour gestion immobilière.",
            path: "/insights/cold-email-templates/property-management",
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
              {["IMMOBILIER","MULTICANAL","DIRECTEURS DE RÉGIES"].map((tag) => (
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
                Séquence cold email pour gestion immobilière — 84% de taux de réponse
              </h1>
              <p
                className="mx-auto max-w-xl text-white/80"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                  lineHeight: 1.625,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                8 étapes sur 40 jours. 4 emails, 3 appels téléphoniques, 1 message LinkedIn. 257 prospects contactés.
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
                value: "257",
                label: "Prospects contactés",
                bg: "#074f74",
                text: "#ffffff",
              },
              {
                value: "N/A",
                label: "Taux d&apos;ouverture",
                bg: "#9ca3af",
                text: "#ffffff",
              },
              {
                value: "84%",
                label: "Taux de réponse",
                bg: "#059669",
                text: "#ffffff",
              },
              {
                value: "17",
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
              4 emails, 3 appels téléphoniques, 1 message LinkedIn — sur 40 jours.
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
                257 prospects et un taux de réponse remarquable de 84% sur 40 jours — cette séquence de 8 touches est la plus performante en taux de réponse brut. Le secteur de la gestion immobilière en Suisse romande est un marché fermé où tout le monde se connaît, et cette séquence exploite cette dynamique.
              </p>
              <p>
                Le cold call placé en premier (Touch #1) est une stratégie inhabituelle mais efficace dans l’immobilier suisse. Les directeurs de régies sont accessibles par téléphone et préfèrent souvent un échange direct. Le script détaillé avec gestion des objections spécifiques (Quorum, Immob 8) montre une connaissance approfondie du marché.
              </p>
              <p>
                La progression de 300 à 400 régies clientes et de 500k à 1 million d’objets gérés est un argument de traction puissant. Pour un directeur de régie, ces chiffres prouvent que la migration est sûre et que le produit est en croissance active.
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
                  <strong>Débuter par un cold call dans l’immobilier.</strong>{" "}
                  Les directeurs de régies sont accessibles par téléphone et préfèrent un échange direct.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Connaître les solutions concurrentes.</strong>{" "}
                  Les objections spécifiques sur Quorum et Immob 8 démontrent une maîtrise du marché.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Montrer la traction avec des chiffres de croissance.</strong>{" "}
                  De 300 à 400 régies et de 500k à 1M d’objets prouve la dynamique du produit.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "#074f74" }}
                  aria-hidden="true"
                />
                <span>
                  <strong>Offrir du consulting gratuit.</strong>{" "}
                  2 heures de consulting offertes si une analyse détaillée est nécessaire (Touch #4).
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
                  title: "Logiciels de gestion immobilière",
                  desc: "ERP, gestion locative, PPE, comptabilité immobilière — cette séquence est votre guide de prospection.",
                },
                {
                  title: "Ciblage directeurs de régies",
                  desc: "Les décideurs de régies immobilières en Suisse romande sont des profils accessibles par téléphone.",
                },
                {
                  title: "Marché immobilier suisse",
                  desc: "La connaissance du marché local (Quorum, Immob 8) est essentielle pour crédibiliser la démarche.",
                },
                {
                  title: "Migration depuis un ERP existant",
                  desc: "Si votre proposition de valeur inclut la migration depuis une solution concurrente.",
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
                  title: "Éditeurs de logiciels immobiliers",
                  desc: "ERP, gestion locative, comptabilité immobilière, PPE — cette séquence est votre modèle.",
                },
                {
                  title: "SDRs ciblant les régies immobilières",
                  desc: "Le script téléphonique détaillé avec gestion des objections est directement utilisable.",
                },
                {
                  title: "Fournisseurs PropTech",
                  desc: "Si votre solution s’intègre aux ERP immobiliers existants.",
                },
                {
                  title: "Consultants en digitalisation immobilière",
                  desc: "Adaptez la séquence à vos propres services de transformation digitale.",
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
