import type { GeoPageData } from "@/content/geo-pages";

const swissLocalBusiness: GeoPageData["localBusiness"] = {
  name: "devlo",
  telephone: "+41-79-758-64-03",
  email: "emea@devlo.ch",
  address: {
    streetAddress: "Ruelle des Dolles 1",
    addressLocality: "Rivaz",
    postalCode: "1071",
    addressRegion: "Vaud",
    addressCountry: "CH",
  },
};

export const SWISS_REGIONAL_GEO_PAGES: Record<string, GeoPageData> = {
  "prospection-commerciale-suisse-romande": {
    country: "ch",
    slug: "prospection-commerciale-suisse-romande",
    metaTitle: "Prospection B2B Suisse romande | RDV qualifies | devlo",
    metaDescription:
      "Agence de prospection B2B en Suisse romande pour cibler Geneve, Lausanne, Vaud, Valais, Fribourg et Neuchatel avec des campagnes FR.",
    h1: "Prospection B2B en Suisse romande pour generer des rendez-vous qualifies",
    intro: [
      "La Suisse romande concentre des marches B2B tres differents : organisations internationales a Geneve, PME industrielles dans l'arc lemanique, services professionnels a Lausanne, finance, immobilier, formation et sante.",
      "devlo construit des campagnes outbound francophones qui tiennent compte du canton, du secteur, du niveau de maturite commerciale et du canal le plus acceptable pour chaque cible.",
      "L'objectif est de transformer une zone francophone dense en comptes ICP priorises, decideurs verifies et conversations commerciales utiles.",
    ],
    caseStudySlugs: [
      "biodiversite-70-rendez-vous",
      "immobilier-30-prospects",
      "immobilier-11-prospects",
      "audiovisuel-16-rendez-vous",
    ],
    faqs: [
      {
        question: "Quels cantons couvrez-vous en Suisse romande ?",
        answer:
          "Nous couvrons Geneve, Vaud, Valais, Fribourg, Neuchatel et Jura. Les campagnes sont segmentees par canton lorsque le marche, la langue ou la densite ICP le justifie.",
      },
      {
        question: "La prospection en Suisse romande ressemble-t-elle a la France ?",
        answer:
          "Non. Les messages doivent etre plus sobres, plus factuels et plus locaux qu'en France. Les references suisses, la precision du ciblage et la qualite du premier contact comptent davantage que le volume.",
      },
      {
        question: "Quels cas clients prouvent votre experience romande ?",
        answer:
          "Nous avons notamment genere 70 rendez-vous pour une campagne biodiversite en Suisse romande et qualifie des marches immobiliers romands avec plus de 1'600 societes analysees.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-suisse-alemanique": {
    country: "ch",
    slug: "prospection-commerciale-suisse-alemanique",
    metaTitle: "Prospection B2B Suisse alemanique | Deutschschweiz | devlo",
    metaDescription:
      "Campagnes de prospection B2B en Suisse alemanique : messages DE, ciblage Zurich, Bale, Berne, St-Gall et approche DACH mesuree.",
    h1: "Prospection B2B en Suisse alemanique avec messages allemands natifs",
    intro: [
      "La Suisse alemanique demande une approche plus directe, plus factuelle et plus precise que la Romandie. Un message traduit ne suffit pas : les decideurs attendent une proposition claire, contextualisee et credible.",
      "devlo separe les campagnes Deutschschweiz des campagnes romandes : ciblage, copie, preuves, objections et cadence sont adaptes avant l'envoi.",
      "Cette page s'adresse aux equipes qui veulent ouvrir Zurich, Bale, Berne, Lucerne, St-Gall ou Winterthur sans confondre le marche suisse allemand avec l'Allemagne.",
    ],
    caseStudySlugs: [
      "hr-54-rendez-vous-dach",
      "formation-14-rendez-vous",
      "cybersecurite-4500-entreprises",
      "biocarburants-52-rendez-vous",
    ],
    faqs: [
      {
        question: "Prospectez-vous en allemand natif ?",
        answer:
          "Oui. Les campagnes pour la Suisse alemanique sont redigees et adaptees en allemand, avec une logique DACH mais des preuves et formulations propres au marche suisse.",
      },
      {
        question: "Quelle difference entre Suisse alemanique et Allemagne ?",
        answer:
          "La Suisse alemanique est plus concentree, plus relationnelle et plus sensible a la precision. Les sequences doivent eviter le ton trop agressif souvent tolere sur de plus grands marches.",
      },
      {
        question: "Quels canaux fonctionnent en Suisse alemanique ?",
        answer:
          "Le cold email, LinkedIn et le calling fonctionnent si le ciblage est propre. Le telephone reste pertinent pour qualifier rapidement les bons interlocuteurs.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-geneve": {
    country: "ch",
    slug: "prospection-commerciale-geneve",
    metaTitle: "Prospection B2B Geneve | Leads & RDV qualifies | devlo",
    metaDescription:
      "Agence de prospection B2B a Geneve pour cibler finance, services, ONG, immobilier, cybersecurite et grands comptes avec campagnes FR/EN.",
    h1: "Prospection B2B a Geneve pour cibler les bons decideurs",
    intro: [
      "Geneve combine finance, organisations internationales, ONG, cabinets de services, immobilier, cybersécurite et grands comptes. La prospection y fonctionne quand le message est credible et le ciblage tres propre.",
      "devlo construit des campagnes Geneve en francais et en anglais, avec segmentation par secteur, taille d'entreprise, role decisionnaire et signal d'achat.",
      "Le but n'est pas d'envoyer une campagne genevoise generique, mais de distinguer les comptes locaux, les sieges internationaux et les filiales qui ont un vrai potentiel commercial.",
    ],
    caseStudySlugs: [
      "biodiversite-70-rendez-vous",
      "cybersecurite-4500-entreprises",
      "immobilier-30-prospects",
    ],
    faqs: [
      {
        question: "Quels secteurs ciblez-vous a Geneve ?",
        answer:
          "Finance, immobilier, ONG, services professionnels, IT, cybersecurite, formation, sante et organisations internationales lorsque le cadre B2B est pertinent.",
      },
      {
        question: "Faut-il prospecter en francais ou en anglais a Geneve ?",
        answer:
          "Les deux peuvent etre necessaires. Nous segmentons par role, entreprise et contexte : dirigeants locaux en francais, sieges internationaux ou fonctions regionales souvent en anglais.",
      },
      {
        question: "Geneve est-elle adaptee a l'ABM ?",
        answer:
          "Oui. Pour les comptes a forte valeur, nous recommandons une approche ABM avec recherche compte, plusieurs decideurs, signaux d'achat et sequence multicanale.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-lausanne": {
    country: "ch",
    slug: "prospection-commerciale-lausanne",
    metaTitle: "Prospection B2B Lausanne | Agence outbound | devlo",
    metaDescription:
      "Prospection B2B a Lausanne et dans le canton de Vaud : lead generation, cold email, LinkedIn, calling et rendez-vous qualifies.",
    h1: "Prospection B2B a Lausanne et dans le canton de Vaud",
    intro: [
      "Lausanne et le canton de Vaud combinent PME, scale-ups, EPFL, medtech, education, services, industrie et acteurs publics/para-publics. La densite est forte, mais le marche reste relationnel.",
      "Depuis notre base vaudoise, devlo aide les entreprises B2B a transformer ce marche local en segments ICP, listes qualifiees et sequences de rendez-vous.",
      "La proximite locale permet d'utiliser des references plus credibles, mais elle impose aussi plus de precision : un mauvais ciblage se remarque vite.",
    ],
    caseStudySlugs: [
      "audiovisuel-16-rendez-vous",
      "formation-14-rendez-vous",
      "immobilier-11-prospects",
      "biocarburants-52-rendez-vous",
    ],
    faqs: [
      {
        question: "devlo est-elle basee pres de Lausanne ?",
        answer:
          "Oui. devlo est basee dans le canton de Vaud, ce qui facilite la comprehension du tissu economique lausannois et romand.",
      },
      {
        question: "Quels secteurs fonctionnent a Lausanne ?",
        answer:
          "Services B2B, tech, medtech, education, industrie, immobilier, formation et fournisseurs qui ciblent PME ou grandes organisations vaudoises.",
      },
      {
        question: "Pouvez-vous cibler Vaud au lieu de toute la Suisse ?",
        answer:
          "Oui. Nous pouvons construire un TAM limite au canton de Vaud ou l'integrer comme premier batch avant une extension Romandie/Suisse.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-zurich": {
    country: "ch",
    slug: "prospection-commerciale-zurich",
    metaTitle: "B2B-Akquise Zurich | Leads & Termine | devlo",
    metaDescription:
      "Prospection B2B a Zurich pour cibler finance, tech, SaaS, industrie et grands comptes avec sequences allemandes et multicanales.",
    h1: "Prospection B2B a Zurich pour ouvrir le marche suisse alemanique",
    intro: [
      "Zurich est le marche B2B le plus dense de Suisse : finance, assurances, tech, SaaS, industrie, conseil et sieges regionaux. Il offre un fort potentiel, mais les decideurs y sont tres sollicites.",
      "devlo prepare les campagnes Zurich avec messages allemands, preuves de marche, signaux d'achat et approche multicanale adaptee au niveau de maturite du compte.",
      "La page Zurich sert de point d'entree pour les entreprises qui veulent commencer en Suisse alemanique par le bassin economique le plus actif.",
    ],
    caseStudySlugs: [
      "hr-54-rendez-vous-dach",
      "cybersecurite-4500-entreprises",
      "formation-14-rendez-vous",
    ],
    faqs: [
      {
        question: "Pourquoi commencer la Suisse alemanique par Zurich ?",
        answer:
          "Zurich concentre un grand nombre de sieges, decideurs financiers, tech et services. C'est souvent le meilleur premier batch lorsque l'ICP est suffisamment qualifie.",
      },
      {
        question: "Les messages Zurich doivent-ils etre en allemand ?",
        answer:
          "Dans la plupart des cas, oui. L'anglais peut fonctionner pour les fonctions internationales, mais l'allemand reste plus credible pour beaucoup de decideurs locaux.",
      },
      {
        question: "Pouvez-vous prospecter Zurich depuis une base romande ?",
        answer:
          "Oui, a condition de separer la strategie. Les campagnes Zurich sont traitees comme un marche distinct, avec copy DE, references adaptees et ciblage local.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
  "prospection-commerciale-dach": {
    country: "ch",
    slug: "prospection-commerciale-dach",
    metaTitle: "Prospection B2B DACH | Allemagne Autriche Suisse | devlo",
    metaDescription:
      "Prospection B2B DACH pour cibler Allemagne, Autriche et Suisse alemanique avec messages allemands, signaux d'achat et RDV qualifies.",
    h1: "Prospection B2B DACH pour developper Allemagne, Autriche et Suisse alemanique",
    intro: [
      "Le DACH n'est pas un seul marche uniforme. Allemagne, Autriche et Suisse alemanique partagent la langue allemande, mais pas les memes codes, cycles de decision ni niveaux de concurrence.",
      "devlo construit des campagnes DACH en distinguant les pays, les regions, les canaux, les preuves et les objections commerciales avant d'envoyer les sequences.",
      "Cette approche convient aux entreprises qui veulent passer d'un marche francophone a une execution germanophone sans perdre en precision commerciale.",
    ],
    caseStudySlugs: [
      "hr-54-rendez-vous-dach",
      "formation-14-rendez-vous",
      "cybersecurite-4500-entreprises",
      "biocarburants-52-rendez-vous",
    ],
    faqs: [
      {
        question: "Quelle difference entre DACH et Suisse alemanique ?",
        answer:
          "La Suisse alemanique est une partie du DACH, mais elle doit rester separee dans le ciblage et le messaging. Les references suisses ne remplacent pas les preuves allemandes ou autrichiennes.",
      },
      {
        question: "Avez-vous deja obtenu des resultats en DACH ?",
        answer:
          "Oui. Un cas client HR a genere 54 rendez-vous qualifies sur le marche DACH avec une approche germanophone structuree.",
      },
      {
        question: "Faut-il lancer Allemagne, Autriche et Suisse ensemble ?",
        answer:
          "Pas toujours. Nous recommandons souvent un premier batch par pays ou sous-region pour isoler les signaux, les objections et les taux de reponse.",
      },
    ],
    localBusiness: swissLocalBusiness,
  },
};
