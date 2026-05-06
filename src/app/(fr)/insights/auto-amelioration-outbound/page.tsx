import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Globe,
  Layers,
  MessageSquare,
  RefreshCw,
  Target,
  Users,
} from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { WaveDivider } from "@/components/ui/wave-divider";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildHowToSchema,
} from "@/lib/seo/schema-builders";

export const metadata: Metadata = buildPageMetadata({
  title: "Auto-amélioration outbound : comment nos campagnes B2B s'optimisent en continu",
  description:
    "Découvrez comment devlo utilise une boucle d'intelligence automatique pour améliorer chaque campagne de prospection B2B. 30+ variables analysées, 5 axes statistiques, feedback loop continu.",
  path: "/insights/auto-amelioration-outbound",
  type: "article",
  datePublished: "2026-03-23",
  dateModified: "2026-03-23",
  author: "Charles Perret",
});

const breadcrumbItems = [
  { name: "Accueil", path: "/" },
  { name: "Insights", path: "/insights" },
  { name: "Auto-amélioration outbound", path: "/insights/auto-amelioration-outbound" },
];

const howToSteps = [
  {
    title: "Collecter les données de chaque interaction",
    description:
      "Chaque envoi, ouverture, réponse et objection est capturé automatiquement avec plus de 30 variables : titre de poste, industrie, taille d'entreprise, canal, jour, heure, longueur du message, signal d'achat, et plus.",
  },
  {
    title: "Analyser sur 5 axes statistiques",
    description:
      "Ciblage, contenu, séquence, timing et patterns cross-client. Chaque dimension est évaluée avec des tests de significativité statistique (z-test, p < 0.05) pour éliminer le bruit.",
  },
  {
    title: "Détecter les patterns significatifs",
    description:
      "Seuls les patterns qui dépassent les seuils statistiques sont retenus. Un taux de réponse 2x supérieur à la moyenne avec un échantillon suffisant ? C'est un pattern. En dessous ? C'est du bruit.",
  },
  {
    title: "Optimiser les campagnes suivantes",
    description:
      "Ciblage, messages, séquences et timing sont mis à jour sur la base des patterns confirmés. Le cycle recommence — chaque campagne démarre avec de meilleures données que la précédente.",
  },
];

/* ─── 5 axes d'analyse avec variables détaillées ─── */
const analysisAxes = [
  {
    axis: "Ciblage",
    icon: Target,
    color: "from-[#074f74] to-[#0a3a54]",
    description: "Quels profils répondent ? Quelles industries convertissent ? Quelle taille d'entreprise est la plus réactive ?",
    variables: [
      "Titre de poste",
      "Industrie / secteur",
      "Taille d'entreprise",
      "Pays / région",
      "Langue du prospect",
      "Signal d'achat (intent data)",
      "Ancienneté dans le poste",
    ],
  },
  {
    axis: "Contenu",
    icon: MessageSquare,
    color: "from-[#1E4D6B] to-[#0a3a54]",
    description: "Quelle longueur d'email performe le mieux ? Quel niveau de personnalisation ? Quelles formulations déclenchent une réponse ?",
    variables: [
      "Longueur email (4 brackets)",
      "Longueur objet d'email",
      "Longueur message LinkedIn",
      "Mention d'un collègue",
      "Niveau de personnalisation (L0-L4)",
      "Nombre de mots",
      "Formulations et angles d'approche",
    ],
  },
  {
    axis: "Séquence",
    icon: Layers,
    color: "from-[#2A6F97] to-[#1E4D6B]",
    description: "À quelle étape le prospect répond-il ? Quel canal génère le plus de réponses pour ce type de profil ?",
    variables: [
      "Étape qui génère la réponse",
      "Canal (email / LinkedIn / multicanal)",
      "Délai entre les étapes",
      "Nombre total d'étapes",
      "Combinaison de canaux",
    ],
  },
  {
    axis: "Timing",
    icon: Clock,
    color: "from-[#074f74] to-[#1E4D6B]",
    description: "Quel jour, quel créneau horaire ? Combien de temps entre les relances ? Y a-t-il un pattern saisonnier ?",
    variables: [
      "Jour de la semaine (lundi-dimanche)",
      "Créneau horaire (7 buckets)",
      "Temps avant ouverture",
      "Temps avant réponse",
      "Saisonnalité",
    ],
  },
  {
    axis: "Cross-client",
    icon: Globe,
    color: "from-[#1B3A4B] to-[#0a3a54]",
    description: "Certains patterns sont universels. D'autres sont spécifiques à un secteur. Notre système fait la distinction automatiquement.",
    variables: [
      "Patterns universels vs spécifiques",
      "Benchmarks par industrie",
      "Signaux d'achat par secteur",
      "Performance par taille d'entreprise",
      "Comparaison des taux de réponse",
    ],
  },
];

const objectionTypes = [
  { type: "Timing", desc: "Le prospect n'est pas prêt maintenant" },
  { type: "Concurrent", desc: "Utilise déjà un service similaire" },
  { type: "In-house", desc: "Gère en interne" },
  { type: "Budget", desc: "Pas de budget disponible" },
  { type: "Pas de besoin", desc: "Ne perçoit pas le problème" },
  { type: "Pas décisionnaire", desc: "N'a pas l'autorité" },
  { type: "Déjà client", desc: "Relation existante" },
  { type: "Objection technique", desc: "Incompatibilité perçue" },
  { type: "Positif", desc: "Intérêt confirmé" },
  { type: "Neutre", desc: "Réponse sans engagement clair" },
  { type: "Out of office", desc: "Absence temporaire" },
  { type: "Spam complaint", desc: "Rejet du format outreach" },
];

export default function AutoAmeliorationPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema(breadcrumbItems),
          buildArticleSchema({
            headline: "Auto-amélioration outbound : comment nos campagnes B2B s'optimisent en continu",
            description:
              "Découvrez comment devlo utilise une boucle d'intelligence automatique pour améliorer chaque campagne de prospection B2B.",
            path: "/insights/auto-amelioration-outbound",
            imagePath: "/images/CharlesPerretProfilePicture2025.webp",
            datePublished: "2026-03-23",
            dateModified: "2026-03-23",
            author: "Charles Perret",
            authorUrl: "https://www.linkedin.com/in/charlesperret-devlo/",
          }),
          buildHowToSchema(
            "Boucle d'auto-amélioration outbound : collecter, analyser, détecter, optimiser",
            howToSteps,
          ),
        ]}
      />

      {/* ─── Hero ─── */}
      <section className="bg-gradient-to-b from-[#074f74] to-[#0a3a54] pt-2 text-white">
        <Breadcrumb items={breadcrumbItems} variant="dark" />
        <div className="mx-auto w-full max-w-3xl px-6 pb-14 pt-10 text-center lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
            Insight — Méthodologie propriétaire
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Comment nos campagnes de prospection s&apos;améliorent automatiquement
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-relaxed text-white/85">
            Chaque email envoyé, chaque réponse reçue, chaque objection — tout nourrit notre intelligence. Vos campagnes s&apos;optimisent en continu, sans intervention manuelle.
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
              <p className="text-white/50">Mars 2026 · 8 min de lecture</p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="layered-bottom" fromBg="#0a3a54" toBg="#FFFFFF" />

      {/* ─── Body ─── */}
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-[1fr_280px] lg:px-10">
      <article>

        {/* Section 1 — Le problème */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Pourquoi la plupart des campagnes outbound ne s&apos;améliorent pas
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            La majorité des agences de prospection fonctionnent en mode linéaire : on lance une campagne, on regarde les résultats, on ajuste manuellement au feeling, on relance. Le problème ? Les ajustements sont subjectifs, lents, et rarement basés sur des données suffisantes.
          </p>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Quand un email ne fonctionne pas, on change le message. Mais était-ce vraiment le message le problème ? Ou le timing ? Ou le ciblage ? Ou la longueur ? Sans données structurées, chaque ajustement est un pari.
          </p>
          <div className="rounded-lg border border-[#074f74]/10 bg-[#074f74]/5 p-5">
            <p className="text-sm font-semibold text-[#153a54]">
              Le vrai problème n&apos;est pas le manque de données — c&apos;est l&apos;absence de boucle de feedback structurée.
            </p>
            <p className="mt-2 text-sm text-[#2a4c63]/80">
              Les données existent dans chaque campagne. Mais sans système pour les collecter, les analyser et les transformer en actions, elles disparaissent à chaque nouveau lancement.
            </p>
          </div>
        </section>

        {/* Section 2 — La boucle en 4 phases */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            La boucle d&apos;auto-amélioration en 4 phases
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Chez devlo, nous avons construit un système qui transforme chaque interaction de prospection en apprentissage. Ce n&apos;est pas un dashboard — c&apos;est un moteur d&apos;intelligence qui alimente automatiquement les campagnes suivantes.
          </p>

          {/* Loop diagram — vertical for article flow */}
          <div className="mt-6 space-y-4">
            {howToSteps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#074f74] to-[#0a3a54] text-sm font-bold text-white shadow-soft">
                    {i + 1}
                  </div>
                  {i < howToSteps.length - 1 ? (
                    <div className="mt-1 h-full w-0.5 bg-gradient-to-b from-[#074f74]/30 to-[#074f74]/10" />
                  ) : (
                    <div className="mt-2 flex items-center gap-1">
                      <RefreshCw className="h-4 w-4 text-[#074f74]/50" />
                    </div>
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold text-[#153a54]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#2a4c63]/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-[#074f74]/5 p-4">
            <RefreshCw className="h-5 w-5 shrink-0 text-[#074f74]" />
            <p className="text-sm font-semibold text-[#153a54]">
              Le cycle se répète automatiquement. Chaque campagne démarre avec les apprentissages de toutes les précédentes.
            </p>
          </div>
        </section>

        {/* Section 3 — Les 5 axes d'analyse avec variables détaillées */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            5 axes d&apos;analyse, plus de 30 variables — pas d&apos;intuition, des preuves
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Chaque email envoyé, chaque message LinkedIn, chaque réponse génère des données structurées. Notre système croise ces données sur 5 axes indépendants pour identifier des patterns que l&apos;œil humain ne verrait pas.
          </p>

          <div className="mt-6 space-y-4">
            {analysisAxes.map((axis) => {
              const Icon = axis.icon;
              return (
                <div
                  key={axis.axis}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-soft"
                >
                  <div className={`flex items-center gap-3 bg-gradient-to-r ${axis.color} px-5 py-3 text-white`}>
                    <Icon className="h-5 w-5" aria-hidden />
                    <h3 className="text-base font-semibold">{axis.axis}</h3>
                    <span className="ml-auto rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold">
                      {axis.variables.length} variables
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm leading-relaxed text-[#2a4c63]/80">{axis.description}</p>
                    <div className="mt-3 grid gap-1 sm:grid-cols-2">
                      {axis.variables.map((v) => (
                        <div key={v} className="flex items-center gap-2 text-sm text-[#2a4c63]/70">
                          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#074f74]/40" />
                          {v}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm font-semibold text-[#074f74]">
            Total : {analysisAxes.reduce((sum, a) => sum + a.variables.length, 0)} variables actives, analysées automatiquement à chaque campagne.
          </p>

          <div className="rounded-lg border border-green-200 bg-green-50/50 p-5">
            <p className="text-sm font-semibold text-green-800">Rigueur statistique</p>
            <p className="mt-1 text-sm text-green-700/80">
              Un pattern n&apos;est retenu que s&apos;il passe un test de significativité statistique (z-test, p &lt; 0.05) avec un échantillon minimum de 30 envois. Pas de faux positifs, pas de conclusions hâtives.
            </p>
          </div>
        </section>

        {/* Section 4 — Intelligence des objections */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Chaque &laquo;&nbsp;non&nbsp;&raquo; nous rend meilleurs
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Quand un prospect répond négativement, la plupart des agences passent au suivant. Chez devlo, chaque objection est une source d&apos;apprentissage. Notre système classifie automatiquement chaque réponse négative en 12 types distincts.
          </p>

          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {objectionTypes.map((obj) => (
              <div key={obj.type} className="rounded-lg border border-neutral-200 bg-white p-3 shadow-soft">
                <p className="text-sm font-semibold text-[#153a54]">{obj.type}</p>
                <p className="mt-0.5 text-xs text-[#2a4c63]/60">{obj.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-[#153a54]">Comment ça fonctionne concrètement</h3>
            <div className="space-y-2">
              {[
                { step: "1", text: "Un prospect répond avec une objection (ex : « Nous avons déjà une équipe interne »)" },
                { step: "2", text: "Notre IA classifie l'objection (type : In-house) et identifie l'argument déclencheur dans notre message" },
                { step: "3", text: "Quand 3+ prospects formulent la même objection, elle est promue en pattern confirmé" },
                { step: "4", text: "Un contre-argument est généré et intégré automatiquement dans les prochains messages" },
                { step: "5", text: "Le cycle continue — l'objection qui revenait souvent ne revient plus" },
              ].map((item) => (
                <div key={item.step} className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#074f74] text-xs font-bold text-white">
                    {item.step}
                  </div>
                  <p className="text-sm leading-relaxed text-[#2a4c63]/80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#074f74]/10 bg-[#074f74]/5 p-5">
            <p className="text-sm font-semibold text-[#153a54]">Validité des objections</p>
            <p className="mt-1 text-sm text-[#2a4c63]/80">
              Notre système distingue les objections <strong>valides</strong> (notre argument était faible — il faut l&apos;améliorer) des objections <strong>invalides</strong> (le prospect est mal informé — il faut mieux éduquer). Cette distinction change fondamentalement la stratégie de réponse.
            </p>
          </div>
        </section>

        {/* Section 5 — Évolution séquentielle */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Pourquoi on ne fait pas de A/B testing classique
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            L&apos;A/B testing traditionnel nécessite un volume élevé pour atteindre la significativité statistique. En prospection B2B, les volumes sont souvent trop faibles pour tester deux variantes en parallèle de manière fiable.
          </p>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Notre approche est différente : <strong>l&apos;évolution séquentielle</strong>. On compare le Batch N+1 au Batch N sur les mêmes métriques. Une seule variable change par hypothèse. Si le résultat s&apos;améliore, on garde. Sinon, on revient en arrière.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
                A/B testing classique
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                <li>Nécessite des milliers d&apos;envois</li>
                <li>Deux variantes en parallèle</li>
                <li>Dilue le volume par variante</li>
                <li>Résultats ambigus à faible volume</li>
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                Évolution séquentielle (devlo)
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                <li>Fonctionne à partir de 30 envois par variable</li>
                <li>Comparaison Batch N vs N+1</li>
                <li>Une variable à la fois — cause claire</li>
                <li>Seuil de rollback prédéfini</li>
              </ul>
            </div>
          </div>

          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Chaque hypothèse est documentée avant test : quelle variable change, quel résultat est attendu, et à quel seuil on annule. Pas de place pour le hasard.
          </p>
        </section>

        {/* Section 6 — Cross-client vs client-spécifique */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Ce qu&apos;on transfère d&apos;un client à l&apos;autre — et ce qu&apos;on ne mélange jamais
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Notre système analyse les patterns sur deux niveaux. Certaines découvertes sont universelles et bénéficient à tous nos clients. D&apos;autres sont spécifiques à un secteur, une audience, un produit — et restent strictement cloisonnées.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-soft">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-[#074f74]" aria-hidden />
                <h3 className="font-semibold text-[#153a54]">Transférable (cross-client)</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                <li><strong>Timing :</strong> jours et créneaux horaires optimaux</li>
                <li><strong>Longueur :</strong> nombre de mots idéal par canal</li>
                <li><strong>Structure :</strong> étapes de séquence qui performent</li>
                <li><strong>Personnalisation :</strong> niveau optimal (L0-L4)</li>
                <li><strong>Délivrabilité :</strong> pratiques de warm-up et hygiène</li>
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-soft">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#074f74]" aria-hidden />
                <h3 className="font-semibold text-[#153a54]">Isolé (client-spécifique)</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                <li><strong>Contenu :</strong> proposition de valeur, arguments</li>
                <li><strong>Objections :</strong> spécifiques à l&apos;industrie du client</li>
                <li><strong>ICP :</strong> profils cibles propres au produit</li>
                <li><strong>Données :</strong> contacts, entreprises, conversations</li>
                <li><strong>Signaux :</strong> intent data et triggers spécifiques</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-[#074f74]/10 bg-[#074f74]/5 p-5">
            <p className="text-sm font-semibold text-[#153a54]">Confidentialité garantie</p>
            <p className="mt-1 text-sm text-[#2a4c63]/80">
              Les données de prospection d&apos;un client ne sont jamais partagées avec un autre. Seuls les patterns statistiques agrégés (ex : &laquo;&nbsp;les emails de 80 mots performent mieux que ceux de 120&nbsp;&raquo;) sont transférés. Aucune donnée nominative, aucun contenu spécifique.
            </p>
          </div>
        </section>

        {/* Section 7 — Avant / Après */}
        <section className="mt-14 space-y-5">
          <h2 className="text-2xl font-semibold text-[#153a54]">
            Avant / Après : ce qui a changé
          </h2>
          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Nous avons toujours analysé nos campagnes et cherché à les améliorer. La différence ? Ce qui prenait des heures d&apos;analyse manuelle et subjective est maintenant automatique, continu et statistiquement rigoureux.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
                Avant — analyse manuelle
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                <li>Revue mensuelle des résultats</li>
                <li>Ajustements au feeling</li>
                <li>Pas de suivi des objections</li>
                <li>Impossible de croiser les variables</li>
                <li>Les apprentissages se perdent</li>
                <li>Chaque client repart de zéro</li>
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                Maintenant — boucle automatique
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#2a4c63]/80">
                <li>Collecte quotidienne automatique</li>
                <li>Analyse statistique hebdomadaire</li>
                <li>12 types d&apos;objections classifiés</li>
                <li>5 axes croisés simultanément</li>
                <li>Patterns documentés et cumulés</li>
                <li>Nouveaux clients bénéficient de l&apos;historique cross-client</li>
              </ul>
            </div>
          </div>

          <p className="text-base leading-relaxed text-[#2a4c63]/80">
            Le résultat : des campagnes qui démarrent mieux, s&apos;améliorent plus vite, et accumulent de l&apos;intelligence au lieu de la perdre.
          </p>
        </section>

        {/* Section 8 — CTA */}
        <section className="mt-14">
          <div className="rounded-xl bg-gradient-to-b from-[#074f74] to-[#0a3a54] p-8 text-center text-white md:p-12">
            <h2 className="text-2xl font-bold">
              Vos campagnes pourraient s&apos;améliorer automatiquement
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/75">
              Discutons de votre prospection B2B. Nous vous montrerons comment notre boucle d&apos;auto-amélioration peut transformer vos résultats.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/consultation"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#074f74] transition hover:bg-white/90"
              >
                Planifier une consultation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/etudes-de-cas"
                className="inline-flex h-11 items-center rounded-lg border border-white/30 px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
              >
                Voir nos résultats
              </Link>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-[#074f74] underline underline-offset-4 hover:text-[#0a3a54]"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </article>

      {/* Sticky CTA sidebar — desktop only */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-6">
          <div className="rounded-xl border border-[#074f74]/15 bg-gradient-to-b from-[#074f74]/5 to-white p-5 shadow-soft">
            <p className="text-sm font-bold text-[#153a54]">
              Envie d&apos;en bénéficier ?
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#2a4c63]/70">
              Discutons de votre prospection B2B. Nous vous montrerons comment cette méthode peut transformer vos résultats.
            </p>
            <Link
              href="/consultation"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#074f74] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#0a3a54]"
            >
              Consultation gratuite
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-wider text-[#074f74]/60">
              Également sur devlo
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/etudes-de-cas" className="text-xs font-medium text-[#153a54] underline underline-offset-2 hover:text-[#074f74]">
                  Nos études de cas
                </Link>
              </li>
              <li>
                <Link href="/services/outbound-multicanal" className="text-xs font-medium text-[#153a54] underline underline-offset-2 hover:text-[#074f74]">
                  Prospection multicanal
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-xs font-medium text-[#153a54] underline underline-offset-2 hover:text-[#074f74]">
                  Outbound Academy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      </div>
    </>
  );
}
