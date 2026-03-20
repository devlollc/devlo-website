import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { WaveDivider } from "@/components/ui/wave-divider";
import { JsonLd } from "@/components/seo/json-ld";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildHowToSchema,
} from "@/lib/seo/schema-builders";

export const metadata: Metadata = buildPageMetadata({
  title: "Dictation-Clean — Dictez, l'IA structure en moins d'une minute",
  description:
    "Transformez vos dictees vocales en contenus structures avec Wispr Flow et Claude Code. Guide etape par etape pour gagner du temps sur chaque idee.",
  path: "/insights/dictation-clean",
  type: "article",
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
  author: "Charles Perret",
});

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Insights", path: "/insights" },
  { name: "Dictation-Clean", path: "/insights/dictation-clean" },
];

const howToSteps = [
  {
    title: "Installer Wispr Flow",
    description:
      "Telechargez Wispr Flow (wispr.com). Il tourne en arriere-plan et transcrit tout ce que vous dictez — dans n'importe quelle app, n'importe quelle langue.",
  },
  {
    title: "Configurer le skill /dc dans Claude Code",
    description:
      "Ajoutez le skill /dc a vos commandes Claude Code. Il lit votre transcription brute et la restructure dans le format adapte a votre intention.",
  },
  {
    title: "Dicter vos idees",
    description:
      "Parlez naturellement. Expliquez votre reflexion, decrivez un processus, videz votre cerveau. La transcription capture tout — le desordre est normal.",
  },
  {
    title: "Lancer le skill",
    description:
      "Tapez /dc dans Claude Code. Le skill analyse votre transcription, identifie l'intention (post, brief, email, notes) et restructure le contenu avec titres, actions et prochaines etapes.",
  },
  {
    title: "Relire et publier",
    description:
      "Le resultat est structure, propre et pret a l'emploi. Editez ce qui doit l'etre, publiez ce qui est pret. 5 minutes de parole deviennent un document structure.",
  },
];

export default function DictationCleanPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline: "Dictation-Clean — Dictez, l'IA structure en moins d'une minute",
            description:
              "Transformez vos dictees vocales en contenus structures avec Wispr Flow et Claude Code. Guide etape par etape pour gagner du temps sur chaque idee.",
            path: "/insights/dictation-clean",
            imagePath: "/images/CharlesPerretProfilePicture2025.webp",
            datePublished: "2026-03-20",
            dateModified: "2026-03-20",
            author: "Charles Perret",
            authorUrl: "https://www.linkedin.com/in/charlesperret-devlo/",
          }),
          buildHowToSchema("Dictation-Clean : transformer une dictee vocale en contenu structure", howToSteps),
        ]}
      />

      {/* Hero — blue gradient matching service pages */}
      <section className="bg-gradient-to-b from-[#074f74] to-[#0a3a54] pt-2 text-white">
        <Breadcrumb items={breadcrumbItems} variant="dark" />

        <div className="mx-auto w-full max-w-3xl px-6 pb-14 pt-10 text-center lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
            Insight
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">
            Dictation-Clean
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-relaxed text-white/85">
            Tu dictes. L&apos;IA structure. En moins d&apos;une minute.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Image
              src="/images/CharlesPerretProfilePicture2025.webp"
              alt="Charles Perret, fondateur de devlo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-left text-sm">
              <p className="font-medium text-white">Par Charles Perret</p>
              <p className="text-white/50">Mars 2026 · 4 min de lecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition from hero to white body */}
      <WaveDivider variant="layered-bottom" fromBg="#0a3a54" toBg="#FFFFFF" />

      {/* Body content */}
      <article className="mx-auto w-full max-w-3xl px-6 py-14 lg:px-10">

        {/* Le probleme */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">Le probleme</h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Tu as des idees toute la journee. En voiture, entre deux meetings, en marchant.
            Mais au moment de les ecrire, la moitie a disparu. Et la dictation brute ?
            Inutilisable.
          </p>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Selon une analyse interne menee chez devlo, taper un prompt structure a un LLM
            prend en moyenne 5 fois plus de temps que de le dicter. Le probleme n&apos;est pas
            la dictee — c&apos;est que la transcription brute est un mur de texte sans
            structure, sans action, sans intention claire.
          </p>
        </section>

        {/* La solution */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Comment transformer une dictee en contenu actionnable ?
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Dictation-Clean combine deux outils pour transformer la voix brute en sortie
            structuree en moins d&apos;une minute : un transcripteur temps reel et un skill
            IA de nettoyage.
          </p>
          <div className="flex items-center gap-4 rounded-lg border border-[#074f74]/10 bg-[#074f74]/5 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#074f74] text-sm font-bold text-white">
              1
            </div>
            <div>
              <p className="font-semibold text-[#153a54]">Wispr Flow</p>
              <p className="mt-0.5 text-sm text-[#2a4c63]/80">
                Capture ta voix dans n&apos;importe quelle app, n&apos;importe quelle langue.
                Tourne silencieusement en arriere-plan.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-[#074f74]/10 bg-[#074f74]/5 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#074f74] text-sm font-bold text-white">
              2
            </div>
            <div>
              <p className="font-semibold text-[#153a54]">Claude Code + skill /dc</p>
              <p className="mt-0.5 text-sm text-[#2a4c63]/80">
                Lit la transcription brute. Identifie l&apos;intention. Restructure en sortie
                propre avec titres, actions et prochaines etapes.
              </p>
            </div>
          </div>
        </section>

        {/* Avant / Apres */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">Avant / Apres</h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            La difference est immediate. Une dictee de 3 minutes donne un document
            structure, pret a utiliser.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
                Dictation brute
              </p>
              <p className="mt-3 text-sm italic leading-relaxed text-[#2a4c63]/80">
                &laquo;&nbsp;Donc en gros ce que je veux dire c&apos;est qu&apos;on devrait
                probablement regarder euh les signaux d&apos;intention parce que je pense que
                les boites qui recrutent des commerciaux en ce moment sont probablement celles
                qui ont besoin de nous et on pourrait scraper LinkedIn pour ca
                et...&nbsp;&raquo;
              </p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                Apres /dc
              </p>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-[#2a4c63]/80">
                <p className="font-semibold text-[#153a54]">
                  Signal d&apos;intention : recrutement commercial comme indicateur d&apos;achat
                </p>
                <p>
                  Les entreprises qui recrutent activement des commerciaux signalent une
                  demande de pipeline non satisfaite — un indicateur fort pour des services
                  d&apos;outbound.
                </p>
                <p className="font-medium text-[#153a54]">Prochaines etapes :</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>Scraper LinkedIn Jobs pour les postes commerciaux en Suisse</li>
                  <li>Croiser avec la liste ICP existante</li>
                  <li>Tester une sequence outreach sur les 20 meilleurs matchs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guide etape par etape */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Guide etape par etape — 10 minutes
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Voici comment configurer Dictation-Clean de zero. Tout est gratuit ou inclus
            dans les outils que vous utilisez deja.
          </p>
          {howToSteps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#074f74] text-sm font-bold text-white">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-[#153a54]">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#2a4c63]/80">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Ce que j'en fais */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">Ce que j&apos;en fais</h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Selon mon experience avec Dictation-Clean sur les 3 derniers mois,
            chaque type de contenu qui passait par &laquo;&nbsp;je m&apos;assieds et
            j&apos;ecris&nbsp;&raquo; passe maintenant par &laquo;&nbsp;je dicte et je
            relis&nbsp;&raquo;.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Posts LinkedIn", desc: "Dicter l'idee, obtenir un brouillon structure" },
              { label: "Debriefs de meeting", desc: "Parler des points cles, obtenir les actions" },
              { label: "Briefs clients", desc: "Decrire le scope, obtenir un doc formate" },
              { label: "Emails", desc: "Dicter l'intention, obtenir un message propre" },
              { label: "Notes de strategie", desc: "Penser a voix haute, obtenir une reflexion organisee" },
              { label: "Scripts video", desc: "Decrire le narratif, obtenir un script structure" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[#074f74]/10 bg-[#074f74]/5 p-4"
              >
                <p className="text-sm font-semibold text-[#153a54]">{item.label}</p>
                <p className="mt-1 text-xs text-[#2a4c63]/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA — dark section */}
        <section className="mt-14">
          <div className="rounded-xl bg-gradient-to-b from-[#074f74] to-[#0a3a54] p-8 text-center text-white md:p-12">
            <h2 className="text-2xl font-bold">Telecharger le skill</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/75">
              Abonnez-vous ci-dessous et recevez le guide complet avec le fichier skill,
              la configuration et les astuces avancees.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/consultation"
                className="inline-flex h-11 items-center rounded-lg bg-white px-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#074f74] transition hover:bg-white/90"
              >
                Reserver une consultation
              </Link>
              <Link
                href="/services/cold-email"
                className="inline-flex h-11 items-center rounded-lg border border-white/30 px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white/50 hover:bg-white/10"
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </section>

        {/* Internal links for SEO */}
        <section className="mt-14 space-y-3">
          <h2 className="text-2xl font-semibold text-[#153a54]">Pour aller plus loin</h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Dictation-Clean s&apos;integre dans l&apos;ecosysteme d&apos;automatisation de{" "}
            <Link href="/" className="font-medium text-[#074f74] underline hover:text-[#0a3a54]">
              devlo
            </Link>
            . Decouvrez comment nous appliquons l&apos;IA a la{" "}
            <Link href="/services/cold-email" className="font-medium text-[#074f74] underline hover:text-[#0a3a54]">
              prospection par cold email
            </Link>
            , au{" "}
            <Link href="/services/linkedin-outreach" className="font-medium text-[#074f74] underline hover:text-[#0a3a54]">
              LinkedIn outreach
            </Link>{" "}
            et a la{" "}
            <Link href="/services/generation-leads" className="font-medium text-[#074f74] underline hover:text-[#0a3a54]">
              generation de leads B2B
            </Link>
            .
          </p>
        </section>

        {/* Derniere mise a jour — GEO freshness signal */}
        <p className="mt-10 text-xs text-[#2a4c63]/50">
          Derniere mise a jour : mars 2026
        </p>
      </article>

      {/* Newsletter signup */}
      <NewsletterSection />
    </>
  );
}
