import type { SupportedLocale } from "@/lib/i18n/slug-map";

type RegionalGeoContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  faqs: { question: string; answer: string }[];
  directAnswer: {
    label: string;
    title: string;
    body: string;
  };
  editorialTitle: string;
  editorialParagraphs: string[];
  summaryTitle: string;
  summaryPoints: string[];
  datePublished: string;
  dateModified: string;
};

function content(params: Omit<RegionalGeoContent, "datePublished" | "dateModified">): RegionalGeoContent {
  return {
    ...params,
    datePublished: "2026-05-06",
    dateModified: "2026-05-06",
  };
}

export const regionalGeoContent: Record<string, Record<SupportedLocale, RegionalGeoContent>> = {
  "prospection-commerciale-suisse-romande": {
    fr: content({
      metaTitle: "Prospection B2B Suisse romande | RDV qualifies | devlo",
      metaDescription: "Agence de prospection B2B en Suisse romande pour cibler Geneve, Lausanne, Vaud, Valais, Fribourg et Neuchatel avec campagnes FR.",
      h1: "Prospection B2B en Suisse romande pour generer des rendez-vous qualifies",
      intro: [
        "La Suisse romande concentre des marches B2B tres differents : organisations internationales a Geneve, PME industrielles dans l'arc lemanique, services professionnels a Lausanne, finance, immobilier, formation et sante.",
        "devlo construit des campagnes outbound francophones qui tiennent compte du canton, du secteur, du niveau de maturite commerciale et du canal le plus acceptable pour chaque cible.",
        "L'objectif est de transformer une zone francophone dense en comptes ICP priorises, decideurs verifies et conversations commerciales utiles.",
      ],
      faqs: [
        { question: "Quels cantons couvrez-vous en Suisse romande ?", answer: "Geneve, Vaud, Valais, Fribourg, Neuchatel et Jura, avec segmentation par canton lorsque le marche ou la densite ICP le justifie." },
        { question: "La prospection romande ressemble-t-elle a la France ?", answer: "Non. Les messages doivent etre plus sobres, plus locaux et plus factuels. Les references suisses et le ciblage propre comptent davantage que le volume." },
        { question: "Quels cas clients prouvent votre experience romande ?", answer: "Nous avons genere 70 rendez-vous en Suisse romande pour une campagne biodiversite et qualifie plus de 1'600 societes immobilieres romandes." },
      ],
      directAnswer: {
        label: "Reponse directe",
        title: "Comment prospecter efficacement en Suisse romande ?",
        body: "Une campagne B2B romande performante commence par un TAM propre par canton, une sequence francophone sobre, des references suisses et un controle strict de la qualification avant d'activer email, LinkedIn et calling.",
      },
      editorialTitle: "Pourquoi la Romandie demande une approche locale",
      editorialParagraphs: [
        "La Romandie n'est pas une version reduite du marche francais. Les cycles sont plus relationnels, la densite de reseau est plus forte et les decideurs reperent rapidement les messages trop generiques.",
        "Geneve, Lausanne, Fribourg, Neuchatel et le Valais ne presentent pas les memes concentrations sectorielles. Une bonne campagne separe les lots de comptes avant d'optimiser les messages.",
      ],
      summaryTitle: "Points cles Romandie",
      summaryPoints: ["Segmentation par canton et secteur.", "Messages FR sobres avec preuve suisse.", "Priorite aux decideurs verifies.", "Reporting par batch pour isoler ce qui repond."],
    }),
    en: content({
      metaTitle: "B2B prospecting French-speaking Switzerland | devlo",
      metaDescription: "B2B prospecting in French-speaking Switzerland for Geneva, Lausanne, Vaud, Valais, Fribourg and Neuchatel with localized FR campaigns.",
      h1: "B2B prospecting in French-speaking Switzerland",
      intro: [
        "French-speaking Switzerland combines Geneva's international market, Lausanne's services and innovation ecosystem, and regional SMEs across Vaud, Valais, Fribourg and Neuchatel.",
        "devlo builds French-language outbound campaigns by canton, sector, decision-maker role and buying signal instead of treating Romandy as a generic French market.",
        "The goal is to turn a dense regional market into qualified accounts, verified decision-makers and useful commercial meetings.",
      ],
      faqs: [
        { question: "Which cantons do you cover?", answer: "Geneva, Vaud, Valais, Fribourg, Neuchatel and Jura, with separate batches when the ICP density or local context requires it." },
        { question: "Is Romandy the same as France for outreach?", answer: "No. Swiss proof, sober messaging and precise targeting matter more than volume." },
        { question: "Do you have proof in this region?", answer: "Yes. devlo generated 70 meetings in French-speaking Switzerland and qualified more than 1,600 real estate companies in Romandy." },
      ],
      directAnswer: {
        label: "Direct answer",
        title: "How should B2B teams prospect in French-speaking Switzerland?",
        body: "Start with a canton-level TAM, use native French messaging, add Swiss proof, verify decision-makers and coordinate email, LinkedIn and calls only once the list is qualified.",
      },
      editorialTitle: "Why Romandy needs local outbound",
      editorialParagraphs: [
        "French-speaking Switzerland is smaller than France but more network-driven. Generic French copy usually underperforms because local credibility is visible immediately.",
        "A Romandy campaign should separate Geneva, Lausanne and other cantons when ICP density and sector concentration differ.",
      ],
      summaryTitle: "Romandy takeaways",
      summaryPoints: ["Segment by canton and industry.", "Use sober French copy with Swiss proof.", "Verify decision-makers before outreach.", "Report performance by batch."],
    }),
    de: content({
      metaTitle: "B2B-Akquise Westschweiz | Romandie | devlo",
      metaDescription: "B2B-Akquise in der Westschweiz fuer Genf, Lausanne, Waadt, Wallis, Freiburg und Neuenburg mit lokalisierten FR-Kampagnen.",
      h1: "B2B-Akquise in der Westschweiz und Romandie",
      intro: [
        "Die Westschweiz kombiniert internationale Organisationen in Genf, Dienstleister in Lausanne und regionale KMU in Waadt, Wallis, Freiburg und Neuenburg.",
        "devlo baut franzoesischsprachige Outbound-Kampagnen nach Kanton, Branche, Entscheiderrolle und Kaufsignal.",
        "Ziel ist nicht mehr Volumen, sondern priorisierte Accounts, gepruefte Entscheider und qualifizierte Termine.",
      ],
      faqs: [
        { question: "Welche Kantone decken Sie ab?", answer: "Genf, Waadt, Wallis, Freiburg, Neuenburg und Jura, falls noetig mit separaten Kampagnen-Batches." },
        { question: "Ist die Romandie wie Frankreich?", answer: "Nein. Schweizer Referenzen, praezises Targeting und ein sachlicher Ton sind wichtiger als Volumen." },
        { question: "Gibt es regionale Nachweise?", answer: "Ja. devlo generierte 70 Termine in der Romandie und qualifizierte mehr als 1'600 Immobilienunternehmen." },
      ],
      directAnswer: {
        label: "Direkte Antwort",
        title: "Wie funktioniert B2B-Akquise in der Westschweiz?",
        body: "Sie funktioniert mit kantonalem TAM, nativer FR-Copy, Schweizer Referenzen, geprueften Entscheidern und koordinierten E-Mail-, LinkedIn- und Call-Sequenzen.",
      },
      editorialTitle: "Warum die Romandie lokale Akquise braucht",
      editorialParagraphs: [
        "Die Romandie ist kein kleineres Frankreich. Netzwerke sind enger, lokale Glaubwuerdigkeit ist sichtbarer und generische Texte verlieren schneller Vertrauen.",
        "Genf, Lausanne und die uebrigen Kantone sollten getrennt bewertet werden, wenn ICP-Dichte oder Branchenstruktur abweichen.",
      ],
      summaryTitle: "Kernpunkte Westschweiz",
      summaryPoints: ["Nach Kanton und Branche segmentieren.", "Sachliche FR-Copy mit Schweizer Belegen nutzen.", "Entscheider vor Outreach pruefen.", "Performance je Batch messen."],
    }),
    nl: content({
      metaTitle: "B2B prospectie Franstalig Zwitserland | devlo",
      metaDescription: "B2B prospectie in Franstalig Zwitserland voor Geneve, Lausanne, Vaud, Wallis, Fribourg en Neuchatel met lokale FR-campagnes.",
      h1: "B2B prospectie in Franstalig Zwitserland",
      intro: [
        "Franstalig Zwitserland combineert internationale organisaties in Geneve, diensten en innovatie in Lausanne en regionale kmo's in Vaud, Wallis, Fribourg en Neuchatel.",
        "devlo bouwt Franstalige outbound campagnes per kanton, sector, beslisserrol en koopsignaal.",
        "Het doel is prioritaire accounts, geverifieerde beslissers en nuttige B2B-afspraken.",
      ],
      faqs: [
        { question: "Welke kantons dekken jullie?", answer: "Geneve, Vaud, Wallis, Fribourg, Neuchatel en Jura, met aparte batches wanneer de ICP-dichtheid dat vraagt." },
        { question: "Is Romandie hetzelfde als Frankrijk?", answer: "Nee. Zwitsers bewijs, sobere messaging en nauwkeurige targeting wegen zwaarder dan volume." },
        { question: "Hebben jullie bewijs in deze regio?", answer: "Ja. devlo genereerde 70 afspraken in Franstalig Zwitserland en kwalificeerde meer dan 1.600 vastgoedbedrijven." },
      ],
      directAnswer: {
        label: "Direct antwoord",
        title: "Hoe prospecteer je B2B in Franstalig Zwitserland?",
        body: "Begin met een TAM per kanton, gebruik native Franse copy, voeg Zwitsers bewijs toe, verifieer beslissers en combineer e-mail, LinkedIn en bellen pas na kwalificatie.",
      },
      editorialTitle: "Waarom Romandie lokale outbound nodig heeft",
      editorialParagraphs: [
        "Romandie is geen kleine versie van Frankrijk. Netwerken zijn dichter, lokale geloofwaardigheid is zichtbaarder en generieke copy werkt minder goed.",
        "Geneve, Lausanne en andere kantons verdienen aparte batches wanneer sectoren of ICP-dichtheid verschillen.",
      ],
      summaryTitle: "Kernpunten Romandie",
      summaryPoints: ["Segmenteren per kanton en sector.", "Sobere Franse copy met Zwitsers bewijs.", "Beslissers verifiëren voor outreach.", "Resultaten meten per batch."],
    }),
  },
  "prospection-commerciale-suisse-alemanique": {
    fr: content({
      metaTitle: "Prospection B2B Suisse alemanique | Deutschschweiz | devlo",
      metaDescription: "Campagnes de prospection B2B en Suisse alemanique : messages DE, ciblage Zurich, Bale, Berne, St-Gall et approche DACH mesuree.",
      h1: "Prospection B2B en Suisse alemanique avec messages allemands natifs",
      intro: [
        "La Suisse alemanique demande une approche plus directe, plus factuelle et plus precise que la Romandie. Un message traduit ne suffit pas.",
        "devlo separe les campagnes Deutschschweiz des campagnes romandes : ciblage, copie, preuves, objections et cadence sont adaptes avant l'envoi.",
        "Cette page s'adresse aux equipes qui veulent ouvrir Zurich, Bale, Berne, Lucerne, St-Gall ou Winterthur sans confondre le marche suisse allemand avec l'Allemagne.",
      ],
      faqs: [
        { question: "Prospectez-vous en allemand natif ?", answer: "Oui. Les campagnes pour la Suisse alemanique sont redigees et adaptees en allemand, avec des formulations propres au marche suisse." },
        { question: "Quelle difference avec l'Allemagne ?", answer: "La Suisse alemanique est plus concentree et plus sensible a la precision. Les sequences doivent eviter le ton trop agressif." },
        { question: "Quels canaux fonctionnent ?", answer: "Cold email, LinkedIn et calling fonctionnent si le ciblage est propre et si les messages sont adaptes au contexte local." },
      ],
      directAnswer: {
        label: "Reponse directe",
        title: "Comment prospecter en Suisse alemanique ?",
        body: "Il faut traiter la Deutschschweiz comme un marche distinct : copie allemande native, preuves suisses, ciblage par region et decision-maker, puis sequence multicanale mesuree.",
      },
      editorialTitle: "Pourquoi la Deutschschweiz ne doit pas etre traduite depuis le francais",
      editorialParagraphs: [
        "Une traduction litterale donne rarement de bons resultats. Le marche suisse allemand attend une proposition claire, factuelle et credible, avec moins d'emphase commerciale.",
        "Zurich, Bale, Berne et St-Gall ne doivent pas etre melanges si les secteurs et les signaux d'achat ne sont pas comparables.",
      ],
      summaryTitle: "Points cles Deutschschweiz",
      summaryPoints: ["Copy allemande native.", "Preuves et references suisses.", "Segmentation Zurich/Bale/Berne/St-Gall.", "Calling utile pour qualifier vite."],
    }),
    en: content({
      metaTitle: "B2B prospecting German-speaking Switzerland | devlo",
      metaDescription: "B2B prospecting in German-speaking Switzerland with native DE messaging for Zurich, Basel, Bern, St. Gallen and DACH-style campaigns.",
      h1: "B2B prospecting in German-speaking Switzerland",
      intro: [
        "German-speaking Switzerland needs a more factual and precise approach than French-speaking Switzerland. Translation alone is not enough.",
        "devlo separates Deutschschweiz campaigns from Romandy campaigns: targeting, copy, proof, objections and cadence are adapted before launch.",
        "This page is for teams opening Zurich, Basel, Bern, Lucerne, St. Gallen or Winterthur without treating Swiss German markets like Germany.",
      ],
      faqs: [
        { question: "Do you prospect in native German?", answer: "Yes. Campaigns for German-speaking Switzerland are written and adapted in German with Swiss-market wording." },
        { question: "How is it different from Germany?", answer: "The market is more concentrated and precision matters more. Aggressive high-volume sequences usually underperform." },
        { question: "Which channels work?", answer: "Cold email, LinkedIn and calls work when account targeting is clean and the message fits the local context." },
      ],
      directAnswer: {
        label: "Direct answer",
        title: "How should teams prospect in German-speaking Switzerland?",
        body: "Treat Deutschschweiz as a separate market: native German copy, Swiss proof, regional targeting and measured multichannel sequences.",
      },
      editorialTitle: "Why Deutschschweiz is not a translated Romandy campaign",
      editorialParagraphs: [
        "Literal translation rarely works. German-speaking Swiss decision-makers expect clear, factual, credible outreach with less commercial exaggeration.",
        "Zurich, Basel, Bern and St. Gallen should be separated when sectors and buying signals differ.",
      ],
      summaryTitle: "Deutschschweiz takeaways",
      summaryPoints: ["Native German copy.", "Swiss proof and references.", "Segment Zurich, Basel, Bern and St. Gallen.", "Use calls for faster qualification."],
    }),
    de: content({
      metaTitle: "B2B-Akquise Deutschschweiz | Termine | devlo",
      metaDescription: "B2B-Akquise in der Deutschschweiz mit nativer DE-Copy fuer Zuerich, Basel, Bern, St. Gallen und qualifizierte Termine.",
      h1: "B2B-Akquise in der Deutschschweiz mit nativer deutscher Ansprache",
      intro: [
        "Die Deutschschweiz braucht eine sachlichere und praezisere Ansprache als die Romandie. Eine reine Uebersetzung reicht nicht.",
        "devlo trennt Deutschschweiz-Kampagnen von Romandie-Kampagnen: Targeting, Copy, Proof, Einwaende und Kadenz werden vor dem Launch angepasst.",
        "Diese Seite richtet sich an Teams, die Zuerich, Basel, Bern, Luzern, St. Gallen oder Winterthur erschliessen wollen.",
      ],
      faqs: [
        { question: "Prospektieren Sie auf nativem Deutsch?", answer: "Ja. Kampagnen fuer die Deutschschweiz werden auf Deutsch geschrieben und an Schweizer Formulierungen angepasst." },
        { question: "Was ist anders als in Deutschland?", answer: "Der Markt ist konzentrierter und praeziser. Zu aggressive Volumen-Sequenzen funktionieren meist schlechter." },
        { question: "Welche Kanaele funktionieren?", answer: "Cold E-Mail, LinkedIn und Telefon funktionieren, wenn Targeting und lokaler Kontext sauber sind." },
      ],
      directAnswer: {
        label: "Direkte Antwort",
        title: "Wie funktioniert B2B-Akquise in der Deutschschweiz?",
        body: "Die Deutschschweiz sollte separat bearbeitet werden: native deutsche Copy, Schweizer Nachweise, regionale Segmentierung und messbare Multichannel-Sequenzen.",
      },
      editorialTitle: "Warum die Deutschschweiz keine uebersetzte Romandie-Kampagne ist",
      editorialParagraphs: [
        "Woertliche Uebersetzung reicht selten. Entscheider erwarten eine klare, sachliche und glaubwuerdige Ansprache ohne uebertriebene Sales-Sprache.",
        "Zuerich, Basel, Bern und St. Gallen sollten getrennt werden, wenn Branchen oder Kaufsignale unterschiedlich sind.",
      ],
      summaryTitle: "Kernpunkte Deutschschweiz",
      summaryPoints: ["Native deutsche Copy.", "Schweizer Proof und Referenzen.", "Regionale Segmentierung.", "Telefon fuer schnelle Qualifikation nutzen."],
    }),
    nl: content({
      metaTitle: "B2B prospectie Duitstalig Zwitserland | devlo",
      metaDescription: "B2B prospectie in Duitstalig Zwitserland met native DE-copy voor Zurich, Basel, Bern, St. Gallen en gekwalificeerde afspraken.",
      h1: "B2B prospectie in Duitstalig Zwitserland",
      intro: [
        "Duitstalig Zwitserland vraagt een feitelijkere en preciezere aanpak dan Franstalig Zwitserland. Vertalen alleen is niet genoeg.",
        "devlo scheidt Deutschschweiz-campagnes van Romandie-campagnes: targeting, copy, bewijs, bezwaren en cadans worden aangepast.",
        "Deze pagina is voor teams die Zurich, Basel, Bern, Luzern, St. Gallen of Winterthur willen openen.",
      ],
      faqs: [
        { question: "Prospecteren jullie in native Duits?", answer: "Ja. Campagnes voor Duitstalig Zwitserland worden in het Duits geschreven en aangepast aan de Zwitserse markt." },
        { question: "Wat is anders dan Duitsland?", answer: "De markt is compacter en precisie telt meer. Te agressieve volumes werken meestal minder goed." },
        { question: "Welke kanalen werken?", answer: "Cold email, LinkedIn en bellen werken wanneer targeting en lokale context correct zijn." },
      ],
      directAnswer: {
        label: "Direct antwoord",
        title: "Hoe prospecteer je B2B in Duitstalig Zwitserland?",
        body: "Behandel Deutschschweiz als aparte markt: native Duitse copy, Zwitsers bewijs, regionale targeting en meetbare multichannel sequences.",
      },
      editorialTitle: "Waarom Deutschschweiz geen vertaalde Romandie-campagne is",
      editorialParagraphs: [
        "Letterlijke vertaling werkt zelden. Beslissers verwachten duidelijke, feitelijke en geloofwaardige outreach zonder overdreven sales-taal.",
        "Zurich, Basel, Bern en St. Gallen moeten apart worden bekeken wanneer sectoren of koopsignalen verschillen.",
      ],
      summaryTitle: "Kernpunten Deutschschweiz",
      summaryPoints: ["Native Duitse copy.", "Zwitsers bewijs en referenties.", "Regionale segmentatie.", "Bellen gebruiken voor snelle kwalificatie."],
    }),
  },
  "prospection-commerciale-geneve": {
    fr: content({
      metaTitle: "Prospection B2B Geneve | Leads & RDV qualifies | devlo",
      metaDescription: "Agence de prospection B2B a Geneve pour cibler finance, services, ONG, immobilier, cybersecurite et grands comptes avec campagnes FR/EN.",
      h1: "Prospection B2B a Geneve pour cibler les bons decideurs",
      intro: [
        "Geneve combine finance, organisations internationales, ONG, services, immobilier, cybersecurite et grands comptes.",
        "devlo construit des campagnes Geneve en francais et en anglais, avec segmentation par secteur, taille, role decisionnaire et signal d'achat.",
        "Le but est de distinguer comptes locaux, sieges internationaux et filiales avec un vrai potentiel commercial.",
      ],
      faqs: [
        { question: "Quels secteurs ciblez-vous a Geneve ?", answer: "Finance, immobilier, ONG, services professionnels, IT, cybersecurite, formation, sante et organisations internationales lorsque le cadre B2B est pertinent." },
        { question: "Faut-il prospecter en francais ou en anglais ?", answer: "Les deux peuvent etre necessaires. Nous segmentons par role, entreprise et contexte international." },
        { question: "Geneve est-elle adaptee a l'ABM ?", answer: "Oui. Pour les comptes a forte valeur, Geneve se prete bien a une approche ABM multidecideurs." },
      ],
      directAnswer: { label: "Reponse directe", title: "Comment prospecter a Geneve ?", body: "Une campagne genevoise doit separer les comptes locaux et internationaux, utiliser FR/EN selon le role, et prioriser les signaux qui montrent un vrai besoin commercial." },
      editorialTitle: "Pourquoi Geneve demande une segmentation fine",
      editorialParagraphs: ["Geneve est dense mais heterogene. Le meme message ne fonctionne pas pour une ONG, une banque privee, une fiduciaire ou un fournisseur cyber.", "Les campagnes performantes combinent preuves locales, contexte international et qualification stricte des decideurs."],
      summaryTitle: "Points cles Geneve",
      summaryPoints: ["FR/EN selon le compte.", "ABM pour les grands comptes.", "Finance, ONG, services et cyber a isoler.", "Preuve locale indispensable."],
    }),
    en: content({
      metaTitle: "B2B prospecting Geneva | Leads & meetings | devlo",
      metaDescription: "B2B prospecting in Geneva for finance, services, NGOs, real estate, cybersecurity and enterprise accounts with FR/EN campaigns.",
      h1: "B2B prospecting in Geneva for qualified decision-makers",
      intro: ["Geneva combines finance, international organizations, NGOs, services, real estate, cybersecurity and enterprise accounts.", "devlo builds Geneva campaigns in French and English, segmented by sector, company size, decision-maker role and buying signal.", "The goal is to separate local accounts, international headquarters and subsidiaries with real commercial potential."],
      faqs: [
        { question: "Which sectors do you target in Geneva?", answer: "Finance, real estate, NGOs, professional services, IT, cybersecurity, training, healthcare and international organizations when the B2B context is relevant." },
        { question: "Should Geneva outreach be in French or English?", answer: "Both can be needed. We segment by role, company and international context." },
        { question: "Is Geneva suitable for ABM?", answer: "Yes. High-value Geneva accounts often need multi-decision-maker ABM." },
      ],
      directAnswer: { label: "Direct answer", title: "How should teams prospect in Geneva?", body: "Separate local and international accounts, choose FR or EN by role, and prioritize buying signals that show a real commercial need." },
      editorialTitle: "Why Geneva needs precise segmentation",
      editorialParagraphs: ["Geneva is dense but heterogeneous. One message will not work for an NGO, private bank, fiduciary firm or cybersecurity buyer.", "Strong campaigns combine local proof, international context and strict decision-maker qualification."],
      summaryTitle: "Geneva takeaways",
      summaryPoints: ["Use FR/EN by account.", "Use ABM for enterprise accounts.", "Separate finance, NGOs, services and cyber.", "Local proof matters."],
    }),
    de: content({
      metaTitle: "B2B-Akquise Genf | Leads & Termine | devlo",
      metaDescription: "B2B-Akquise in Genf fuer Finance, Services, NGOs, Immobilien, Cybersecurity und Grosskunden mit FR/EN-Kampagnen.",
      h1: "B2B-Akquise in Genf fuer qualifizierte Entscheider",
      intro: ["Genf kombiniert Finanzwesen, internationale Organisationen, NGOs, Dienstleistungen, Immobilien, Cybersecurity und Grosskunden.", "devlo baut Genf-Kampagnen auf Franzoesisch und Englisch, segmentiert nach Branche, Groesse, Rolle und Kaufsignal.", "Ziel ist die Trennung lokaler Accounts, internationaler Sitze und Filialen mit echtem Potenzial."],
      faqs: [
        { question: "Welche Branchen zielen Sie in Genf an?", answer: "Finance, Immobilien, NGOs, Professional Services, IT, Cybersecurity, Training, Gesundheit und internationale Organisationen im passenden B2B-Kontext." },
        { question: "Franzoesisch oder Englisch?", answer: "Beides kann noetig sein. Wir segmentieren nach Rolle, Unternehmen und internationalem Kontext." },
        { question: "Eignet sich Genf fuer ABM?", answer: "Ja. Hochwertige Accounts in Genf brauchen oft ABM mit mehreren Entscheidern." },
      ],
      directAnswer: { label: "Direkte Antwort", title: "Wie funktioniert Akquise in Genf?", body: "Lokale und internationale Accounts trennen, FR/EN nach Rolle waehlen und Kaufsignale priorisieren, die echten Bedarf zeigen." },
      editorialTitle: "Warum Genf praezise Segmentierung braucht",
      editorialParagraphs: ["Genf ist dicht, aber heterogen. Eine Botschaft passt nicht gleichzeitig fuer NGO, Privatbank, Treuhand und Cybersecurity.", "Starke Kampagnen verbinden lokale Belege, internationalen Kontext und strikte Entscheiderqualifikation."],
      summaryTitle: "Kernpunkte Genf",
      summaryPoints: ["FR/EN nach Account.", "ABM fuer Grosskunden.", "Finance, NGOs, Services und Cyber trennen.", "Lokaler Proof zaehlt."],
    }),
    nl: content({
      metaTitle: "B2B prospectie Geneve | Leads & afspraken | devlo",
      metaDescription: "B2B prospectie in Geneve voor finance, services, NGO's, vastgoed, cybersecurity en enterprise accounts met FR/EN-campagnes.",
      h1: "B2B prospectie in Geneve voor gekwalificeerde beslissers",
      intro: ["Geneve combineert finance, internationale organisaties, NGO's, services, vastgoed, cybersecurity en enterprise accounts.", "devlo bouwt Geneve-campagnes in Frans en Engels, gesegmenteerd per sector, grootte, rol en koopsignaal.", "Het doel is lokale accounts, internationale hoofdzetels en filialen met potentieel te scheiden."],
      faqs: [
        { question: "Welke sectoren targeten jullie in Geneve?", answer: "Finance, vastgoed, NGO's, professionele diensten, IT, cybersecurity, training, zorg en internationale organisaties wanneer B2B relevant is." },
        { question: "Frans of Engels?", answer: "Beide kunnen nodig zijn. We segmenteren per rol, bedrijf en internationale context." },
        { question: "Is Geneve geschikt voor ABM?", answer: "Ja. Waardevolle Geneve-accounts vragen vaak ABM met meerdere beslissers." },
      ],
      directAnswer: { label: "Direct antwoord", title: "Hoe prospecteer je in Geneve?", body: "Scheid lokale en internationale accounts, kies FR/EN per rol en prioriteer koopsignalen die echte commerciële behoefte tonen." },
      editorialTitle: "Waarom Geneve precieze segmentatie nodig heeft",
      editorialParagraphs: ["Geneve is dicht maar heterogeen. Een boodschap werkt niet tegelijk voor NGO, private bank, fiduciary en cybersecurity.", "Sterke campagnes combineren lokaal bewijs, internationale context en strikte kwalificatie."],
      summaryTitle: "Kernpunten Geneve",
      summaryPoints: ["FR/EN per account.", "ABM voor enterprise accounts.", "Finance, NGO's, services en cyber scheiden.", "Lokaal bewijs telt."],
    }),
  },
  "prospection-commerciale-lausanne": {
    fr: content({
      metaTitle: "Prospection B2B Lausanne | Agence outbound | devlo",
      metaDescription: "Prospection B2B a Lausanne et dans le canton de Vaud : lead generation, cold email, LinkedIn, calling et rendez-vous qualifies.",
      h1: "Prospection B2B a Lausanne et dans le canton de Vaud",
      intro: ["Lausanne et Vaud combinent PME, scale-ups, EPFL, medtech, education, services, industrie et acteurs publics/para-publics.", "Depuis notre base vaudoise, devlo transforme ce marche local en segments ICP, listes qualifiees et sequences de rendez-vous.", "La proximite locale aide, mais impose plus de precision : un mauvais ciblage se remarque vite."],
      faqs: [
        { question: "devlo est-elle basee pres de Lausanne ?", answer: "Oui. devlo est basee dans le canton de Vaud et connait le tissu economique lausannois et romand." },
        { question: "Quels secteurs fonctionnent a Lausanne ?", answer: "Services B2B, tech, medtech, education, industrie, immobilier, formation et fournisseurs ciblant PME ou grandes organisations." },
        { question: "Pouvez-vous cibler Vaud uniquement ?", answer: "Oui. Vaud peut etre un premier batch avant extension Romandie ou Suisse." },
      ],
      directAnswer: { label: "Reponse directe", title: "Comment prospecter a Lausanne ?", body: "Commencez par un TAM vaudois propre, isolez EPFL/innovation, services, PME et grands comptes, puis lancez une sequence locale avec preuves suisses." },
      editorialTitle: "Pourquoi Lausanne est un bon premier batch romand",
      editorialParagraphs: ["Lausanne offre une densite B2B forte sans la dispersion d'un marche national.", "Une campagne vaudoise permet de tester le message avant d'etendre vers Geneve, Fribourg ou Neuchatel."],
      summaryTitle: "Points cles Lausanne",
      summaryPoints: ["Base locale vaudoise.", "ICP par secteur.", "Preuves romandes.", "Extension progressive vers la Suisse."],
    }),
    en: content({
      metaTitle: "B2B prospecting Lausanne | Outbound agency | devlo",
      metaDescription: "B2B prospecting in Lausanne and Vaud: lead generation, cold email, LinkedIn, calling and qualified meeting booking.",
      h1: "B2B prospecting in Lausanne and Vaud",
      intro: ["Lausanne and Vaud combine SMEs, scale-ups, EPFL, medtech, education, services, industry and public-adjacent organizations.", "From its Vaud base, devlo turns this local market into ICP segments, qualified lists and meeting sequences.", "Local proximity helps, but it also requires higher precision because weak targeting is visible quickly."],
      faqs: [
        { question: "Is devlo based near Lausanne?", answer: "Yes. devlo is based in Vaud and understands the Lausanne and Romandy business landscape." },
        { question: "Which sectors work in Lausanne?", answer: "B2B services, tech, medtech, education, industry, real estate, training and vendors targeting SMEs or large organizations." },
        { question: "Can you target only Vaud?", answer: "Yes. Vaud can be the first batch before expanding to Romandy or Switzerland." },
      ],
      directAnswer: { label: "Direct answer", title: "How should teams prospect in Lausanne?", body: "Start with a clean Vaud TAM, separate innovation, services, SMEs and larger accounts, then launch a local sequence with Swiss proof." },
      editorialTitle: "Why Lausanne is a strong first Romandy batch",
      editorialParagraphs: ["Lausanne offers strong B2B density without the dispersion of a national market.", "A Vaud campaign can test messaging before expanding to Geneva, Fribourg or Neuchatel."],
      summaryTitle: "Lausanne takeaways",
      summaryPoints: ["Local Vaud base.", "ICP by sector.", "Romandy proof.", "Progressive Swiss expansion."],
    }),
    de: content({
      metaTitle: "B2B-Akquise Lausanne | Outbound-Agentur | devlo",
      metaDescription: "B2B-Akquise in Lausanne und Waadt: Leadgenerierung, Cold E-Mail, LinkedIn, Telefon und qualifizierte Termine.",
      h1: "B2B-Akquise in Lausanne und im Kanton Waadt",
      intro: ["Lausanne und Waadt kombinieren KMU, Scale-ups, EPFL, Medtech, Bildung, Services, Industrie und staatsnahe Organisationen.", "Von Waadt aus verwandelt devlo diesen lokalen Markt in ICP-Segmente, qualifizierte Listen und Termin-Sequenzen.", "Lokale Naehe hilft, erfordert aber praezises Targeting."],
      faqs: [
        { question: "Ist devlo nahe Lausanne?", answer: "Ja. devlo sitzt im Kanton Waadt und kennt den Markt Lausanne/Romandie." },
        { question: "Welche Branchen funktionieren?", answer: "B2B-Services, Tech, Medtech, Bildung, Industrie, Immobilien, Training und Anbieter fuer KMU oder Grossorganisationen." },
        { question: "Koennen Sie nur Waadt targetieren?", answer: "Ja. Waadt kann ein erster Batch vor Romandie- oder Schweiz-Ausbau sein." },
      ],
      directAnswer: { label: "Direkte Antwort", title: "Wie funktioniert Akquise in Lausanne?", body: "Mit sauberem Waadt-TAM starten, Innovation, Services, KMU und Grosskunden trennen und eine lokale Sequenz mit Schweizer Proof testen." },
      editorialTitle: "Warum Lausanne ein guter erster Romandie-Batch ist",
      editorialParagraphs: ["Lausanne bietet starke B2B-Dichte ohne die Streuung eines nationalen Markts.", "Eine Waadt-Kampagne testet Messaging vor Genf, Freiburg oder Neuenburg."],
      summaryTitle: "Kernpunkte Lausanne",
      summaryPoints: ["Lokale Waadt-Basis.", "ICP nach Branche.", "Romandie-Proof.", "Schrittweise Expansion."],
    }),
    nl: content({
      metaTitle: "B2B prospectie Lausanne | Outbound agency | devlo",
      metaDescription: "B2B prospectie in Lausanne en Vaud: leadgeneratie, cold email, LinkedIn, bellen en gekwalificeerde afspraken.",
      h1: "B2B prospectie in Lausanne en Vaud",
      intro: ["Lausanne en Vaud combineren kmo's, scale-ups, EPFL, medtech, onderwijs, services, industrie en publieke spelers.", "Vanuit Vaud zet devlo deze lokale markt om in ICP-segmenten, gekwalificeerde lijsten en meeting sequences.", "Lokale nabijheid helpt, maar vraagt precieze targeting."],
      faqs: [
        { question: "Is devlo nabij Lausanne gevestigd?", answer: "Ja. devlo is gevestigd in Vaud en kent de markt Lausanne/Romandie." },
        { question: "Welke sectoren werken?", answer: "B2B-services, tech, medtech, onderwijs, industrie, vastgoed, training en leveranciers voor kmo's of grote organisaties." },
        { question: "Kunnen jullie alleen Vaud targeten?", answer: "Ja. Vaud kan de eerste batch zijn voor uitbreiding naar Romandie of Zwitserland." },
      ],
      directAnswer: { label: "Direct antwoord", title: "Hoe prospecteer je in Lausanne?", body: "Start met een zuivere Vaud-TAM, scheid innovatie, services, kmo's en grote accounts, en test een lokale sequence met Zwitsers bewijs." },
      editorialTitle: "Waarom Lausanne een sterke eerste Romandie-batch is",
      editorialParagraphs: ["Lausanne biedt sterke B2B-dichtheid zonder de spreiding van een nationale markt.", "Een Vaud-campagne test messaging voor uitbreiding naar Geneve, Fribourg of Neuchatel."],
      summaryTitle: "Kernpunten Lausanne",
      summaryPoints: ["Lokale Vaud-basis.", "ICP per sector.", "Romandie-bewijs.", "Stapsgewijze uitbreiding."],
    }),
  },
  "prospection-commerciale-zurich": {
    fr: content({
      metaTitle: "B2B-Akquise Zurich | Leads & Termine | devlo",
      metaDescription: "Prospection B2B a Zurich pour cibler finance, tech, SaaS, industrie et grands comptes avec sequences allemandes et multicanales.",
      h1: "Prospection B2B a Zurich pour ouvrir le marche suisse alemanique",
      intro: ["Zurich est le marche B2B le plus dense de Suisse : finance, assurances, tech, SaaS, industrie, conseil et sieges regionaux.", "devlo prepare les campagnes Zurich avec messages allemands, preuves de marche, signaux d'achat et approche multicanale.", "Zurich est souvent le premier batch logique pour ouvrir la Suisse alemanique."],
      faqs: [
        { question: "Pourquoi commencer par Zurich ?", answer: "Zurich concentre sieges, decideurs financiers, tech et services. C'est souvent le meilleur premier batch si l'ICP est qualifie." },
        { question: "Les messages doivent-ils etre en allemand ?", answer: "Dans la plupart des cas oui. L'anglais peut fonctionner pour les fonctions internationales." },
        { question: "Pouvez-vous prospecter Zurich depuis la Romandie ?", answer: "Oui, si la campagne Zurich est traitee comme un marche distinct avec copy DE et preuves adaptees." },
      ],
      directAnswer: { label: "Reponse directe", title: "Comment prospecter a Zurich ?", body: "Zurich doit etre traite comme un marche DE prioritaire : comptes a forte valeur, messages allemands, signaux d'achat et coordination email, LinkedIn et calling." },
      editorialTitle: "Pourquoi Zurich est le point d'entree de la Deutschschweiz",
      editorialParagraphs: ["Zurich concentre les sieges et les budgets, mais aussi la concurrence commerciale.", "Une campagne Zurich doit isoler finance, SaaS, industrie et conseil au lieu de melanger tout le marche."],
      summaryTitle: "Points cles Zurich",
      summaryPoints: ["Copy DE prioritaire.", "Finance, SaaS et industrie a segmenter.", "ABM pour grands comptes.", "Calling utile pour qualification."],
    }),
    en: content({
      metaTitle: "B2B prospecting Zurich | Leads & meetings | devlo",
      metaDescription: "B2B prospecting in Zurich for finance, tech, SaaS, industry and enterprise accounts with German multichannel sequences.",
      h1: "B2B prospecting in Zurich to open German-speaking Switzerland",
      intro: ["Zurich is Switzerland's densest B2B market: finance, insurance, tech, SaaS, industry, consulting and regional headquarters.", "devlo prepares Zurich campaigns with German messaging, market proof, buying signals and multichannel execution.", "Zurich is often the logical first batch for German-speaking Switzerland."],
      faqs: [
        { question: "Why start with Zurich?", answer: "Zurich concentrates headquarters and finance, tech and services decision-makers." },
        { question: "Should messages be in German?", answer: "Usually yes. English can work for international roles." },
        { question: "Can you prospect Zurich from Romandy?", answer: "Yes, if Zurich is treated as a separate market with DE copy and adapted proof." },
      ],
      directAnswer: { label: "Direct answer", title: "How should teams prospect in Zurich?", body: "Treat Zurich as a priority German-language market: high-value accounts, German copy, buying signals and coordinated email, LinkedIn and calls." },
      editorialTitle: "Why Zurich is the entry point to Deutschschweiz",
      editorialParagraphs: ["Zurich concentrates headquarters and budget, but also commercial competition.", "A Zurich campaign should separate finance, SaaS, industry and consulting instead of mixing the whole market."],
      summaryTitle: "Zurich takeaways",
      summaryPoints: ["German copy first.", "Segment finance, SaaS and industry.", "ABM for enterprise accounts.", "Use calls for qualification."],
    }),
    de: content({
      metaTitle: "B2B-Akquise Zuerich | Leads & Termine | devlo",
      metaDescription: "B2B-Akquise in Zuerich fuer Finance, Tech, SaaS, Industrie und Grosskunden mit deutschen Multichannel-Sequenzen.",
      h1: "B2B-Akquise in Zuerich fuer den Einstieg in die Deutschschweiz",
      intro: ["Zuerich ist der dichteste B2B-Markt der Schweiz: Finance, Versicherungen, Tech, SaaS, Industrie, Beratung und regionale Headquarters.", "devlo bereitet Zuerich-Kampagnen mit deutscher Copy, Marktbelegen, Kaufsignalen und Multichannel-Ausfuehrung vor.", "Zuerich ist oft der logische erste Batch fuer die Deutschschweiz."],
      faqs: [
        { question: "Warum mit Zuerich starten?", answer: "Zuerich konzentriert Headquarters sowie Finance-, Tech- und Service-Entscheider." },
        { question: "Muessen Nachrichten deutsch sein?", answer: "Meist ja. Englisch funktioniert bei internationalen Rollen." },
        { question: "Kann devlo Zuerich aus der Romandie bearbeiten?", answer: "Ja, wenn Zuerich als eigener Markt mit DE-Copy und passenden Belegen behandelt wird." },
      ],
      directAnswer: { label: "Direkte Antwort", title: "Wie funktioniert B2B-Akquise in Zuerich?", body: "Zuerich sollte als prioritaerer deutschsprachiger Markt behandelt werden: hochwertige Accounts, deutsche Copy, Kaufsignale und koordinierte E-Mail-, LinkedIn- und Telefonsequenzen." },
      editorialTitle: "Warum Zuerich der Einstieg in die Deutschschweiz ist",
      editorialParagraphs: ["Zuerich konzentriert Headquarters und Budget, aber auch kommerzielle Konkurrenz.", "Eine Zuerich-Kampagne sollte Finance, SaaS, Industrie und Beratung getrennt behandeln."],
      summaryTitle: "Kernpunkte Zuerich",
      summaryPoints: ["Deutsche Copy zuerst.", "Finance, SaaS und Industrie trennen.", "ABM fuer Grosskunden.", "Telefon fuer Qualifikation nutzen."],
    }),
    nl: content({
      metaTitle: "B2B prospectie Zurich | Leads & afspraken | devlo",
      metaDescription: "B2B prospectie in Zurich voor finance, tech, SaaS, industrie en enterprise accounts met Duitse multichannel sequences.",
      h1: "B2B prospectie in Zurich voor Duitstalig Zwitserland",
      intro: ["Zurich is de dichtste B2B-markt van Zwitserland: finance, verzekeringen, tech, SaaS, industrie, consulting en regionale hoofdzetels.", "devlo bereidt Zurich-campagnes voor met Duitse copy, marktbewijs, koopsignalen en multichannel uitvoering.", "Zurich is vaak de logische eerste batch voor Duitstalig Zwitserland."],
      faqs: [
        { question: "Waarom starten met Zurich?", answer: "Zurich concentreert hoofdzetels en beslissers in finance, tech en services." },
        { question: "Moeten berichten in het Duits?", answer: "Meestal wel. Engels kan werken voor internationale rollen." },
        { question: "Kunnen jullie Zurich vanuit Romandie prospecteren?", answer: "Ja, als Zurich als aparte markt wordt behandeld met DE-copy en aangepast bewijs." },
      ],
      directAnswer: { label: "Direct antwoord", title: "Hoe prospecteer je in Zurich?", body: "Behandel Zurich als prioritaire Duitstalige markt: waardevolle accounts, Duitse copy, koopsignalen en gecoördineerde e-mail, LinkedIn en calls." },
      editorialTitle: "Waarom Zurich de ingang naar Deutschschweiz is",
      editorialParagraphs: ["Zurich concentreert hoofdzetels en budget, maar ook commerciële concurrentie.", "Een Zurich-campagne moet finance, SaaS, industrie en consulting apart behandelen."],
      summaryTitle: "Kernpunten Zurich",
      summaryPoints: ["Duitse copy eerst.", "Finance, SaaS en industrie segmenteren.", "ABM voor enterprise accounts.", "Bellen voor kwalificatie."],
    }),
  },
  "prospection-commerciale-dach": {
    fr: content({
      metaTitle: "Prospection B2B DACH | Allemagne Autriche Suisse | devlo",
      metaDescription: "Prospection B2B DACH pour cibler Allemagne, Autriche et Suisse alemanique avec messages allemands, signaux d'achat et RDV qualifies.",
      h1: "Prospection B2B DACH pour developper Allemagne, Autriche et Suisse alemanique",
      intro: ["Le DACH n'est pas un seul marche uniforme. Allemagne, Autriche et Suisse alemanique partagent la langue allemande, pas les memes codes.", "devlo distingue pays, regions, preuves et objections commerciales avant d'envoyer les sequences.", "Cette approche aide les entreprises francophones a passer a une execution germanophone sans perdre en precision."],
      faqs: [
        { question: "Quelle difference entre DACH et Suisse alemanique ?", answer: "La Suisse alemanique fait partie du DACH, mais doit rester separee dans le ciblage et le messaging." },
        { question: "Avez-vous deja obtenu des resultats en DACH ?", answer: "Oui. Un cas client HR a genere 54 rendez-vous qualifies sur le marche DACH." },
        { question: "Faut-il lancer tous les pays ensemble ?", answer: "Pas toujours. Nous recommandons souvent un premier batch par pays ou sous-region." },
      ],
      directAnswer: { label: "Reponse directe", title: "Comment lancer une campagne DACH ?", body: "Une campagne DACH doit separer Allemagne, Autriche et Suisse alemanique, puis tester messages allemands, preuves locales et objections par pays avant de scaler." },
      editorialTitle: "Pourquoi le DACH doit etre segmente",
      editorialParagraphs: ["Le risque principal est de confondre langue commune et marche commun.", "Une bonne campagne DACH compare les signaux et taux de reponse par pays avant d'augmenter le volume."],
      summaryTitle: "Points cles DACH",
      summaryPoints: ["Pays separes.", "Copy allemande native.", "Preuves locales.", "Scaling apres validation par batch."],
    }),
    en: content({
      metaTitle: "B2B prospecting DACH | Germany Austria Switzerland",
      metaDescription: "B2B prospecting across DACH: Germany, Austria and German-speaking Switzerland with German messaging, buying signals and qualified meetings.",
      h1: "B2B prospecting across DACH for Germany, Austria and Switzerland",
      intro: ["DACH is not one uniform market. Germany, Austria and German-speaking Switzerland share German, but not the same commercial codes.", "devlo separates countries, regions, proof points and objections before launching sequences.", "This approach helps teams move into German-language outbound without losing precision."],
      faqs: [
        { question: "How is DACH different from German-speaking Switzerland?", answer: "German-speaking Switzerland is part of DACH, but it should remain separate in targeting and messaging." },
        { question: "Do you have DACH proof?", answer: "Yes. A HR client generated 54 qualified meetings across DACH." },
        { question: "Should all countries launch together?", answer: "Not always. We often recommend a first batch by country or sub-region." },
      ],
      directAnswer: { label: "Direct answer", title: "How should teams launch a DACH campaign?", body: "Separate Germany, Austria and German-speaking Switzerland, then test German messaging, local proof and objections by country before scaling." },
      editorialTitle: "Why DACH must be segmented",
      editorialParagraphs: ["The main risk is confusing a shared language with a shared market.", "A strong DACH campaign compares signals and reply rates by country before increasing volume."],
      summaryTitle: "DACH takeaways",
      summaryPoints: ["Separate countries.", "Native German copy.", "Local proof.", "Scale after batch validation."],
    }),
    de: content({
      metaTitle: "B2B-Akquise DACH | Deutschland Oesterreich Schweiz",
      metaDescription: "B2B-Akquise in DACH: Deutschland, Oesterreich und Deutschschweiz mit deutscher Copy, Kaufsignalen und qualifizierten Terminen.",
      h1: "B2B-Akquise in DACH fuer Deutschland, Oesterreich und Schweiz",
      intro: ["DACH ist kein einheitlicher Markt. Deutschland, Oesterreich und die Deutschschweiz teilen die Sprache, aber nicht dieselben kommerziellen Codes.", "devlo trennt Laender, Regionen, Proof Points und Einwaende vor dem Launch.", "So koennen Teams deutschsprachigen Outbound starten, ohne Praezision zu verlieren."],
      faqs: [
        { question: "Was ist der Unterschied zur Deutschschweiz?", answer: "Die Deutschschweiz gehoert zu DACH, muss aber in Targeting und Messaging separat bleiben." },
        { question: "Gibt es DACH-Nachweise?", answer: "Ja. Ein HR-Kunde generierte 54 qualifizierte Termine im DACH-Markt." },
        { question: "Sollten alle Laender zusammen starten?", answer: "Nicht immer. Oft empfehlen wir einen ersten Batch pro Land oder Subregion." },
      ],
      directAnswer: { label: "Direkte Antwort", title: "Wie startet man eine DACH-Kampagne?", body: "Deutschland, Oesterreich und Deutschschweiz trennen, dann deutsche Copy, lokale Belege und Einwaende pro Land testen, bevor skaliert wird." },
      editorialTitle: "Warum DACH segmentiert werden muss",
      editorialParagraphs: ["Das Hauptrisiko ist, gemeinsame Sprache mit gemeinsamem Markt zu verwechseln.", "Eine starke DACH-Kampagne vergleicht Signale und Antwortquoten pro Land vor mehr Volumen."],
      summaryTitle: "Kernpunkte DACH",
      summaryPoints: ["Laender trennen.", "Native deutsche Copy.", "Lokaler Proof.", "Skalierung nach Batch-Validierung."],
    }),
    nl: content({
      metaTitle: "B2B prospectie DACH | Duitsland Oostenrijk Zwitserland",
      metaDescription: "B2B prospectie in DACH: Duitsland, Oostenrijk en Duitstalig Zwitserland met Duitse copy, koopsignalen en afspraken.",
      h1: "B2B prospectie in DACH voor Duitsland, Oostenrijk en Zwitserland",
      intro: ["DACH is geen uniforme markt. Duitsland, Oostenrijk en Duitstalig Zwitserland delen taal, maar niet dezelfde commerciële codes.", "devlo scheidt landen, regio's, bewijs en bezwaren voor lancering.", "Zo kunnen teams Duitstalige outbound starten zonder precisie te verliezen."],
      faqs: [
        { question: "Wat is anders dan Duitstalig Zwitserland?", answer: "Duitstalig Zwitserland is deel van DACH, maar moet apart blijven in targeting en messaging." },
        { question: "Hebben jullie DACH-bewijs?", answer: "Ja. Een HR-klant genereerde 54 gekwalificeerde afspraken in DACH." },
        { question: "Moeten alle landen tegelijk starten?", answer: "Niet altijd. Vaak adviseren we een eerste batch per land of subregio." },
      ],
      directAnswer: { label: "Direct antwoord", title: "Hoe start je een DACH-campagne?", body: "Scheid Duitsland, Oostenrijk en Duitstalig Zwitserland, test Duitse copy, lokaal bewijs en bezwaren per land, en schaal pas daarna." },
      editorialTitle: "Waarom DACH segmentatie nodig heeft",
      editorialParagraphs: ["Het grootste risico is gedeelde taal verwarren met gedeelde markt.", "Een sterke DACH-campagne vergelijkt signalen en reply rates per land voor meer volume."],
      summaryTitle: "Kernpunten DACH",
      summaryPoints: ["Landen scheiden.", "Native Duitse copy.", "Lokaal bewijs.", "Schalen na batchvalidatie."],
    }),
  },
};
