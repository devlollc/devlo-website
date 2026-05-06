import type { SupportedLocale } from "@/lib/i18n/slug-map";

const coldEmailGuideTables: Record<
  SupportedLocale,
  {
    caption: string;
    headers: [string, string, string];
    rows: [string, string, string][];
  }
> = {
  fr: {
    caption: "Elements essentiels d'une campagne cold email B2B performante",
    headers: ["Element", "Recommandation", "Pourquoi c'est important"],
    rows: [
      ["ICP", "Segmenter par marche, taille, role et signal d'achat.", "La pertinence du ciblage influence plus le taux de reponse que le volume."],
      ["Infrastructure", "Utiliser des domaines dedies, SPF, DKIM, DMARC et warm-up.", "La delivrabilite protege la reputation et la capacite d'envoi."],
      ["Message", "Personnaliser l'accroche et tester plusieurs angles.", "Les decideurs repondent mieux a un probleme concret qu'a une presentation generique."],
      ["Suivi", "Mesurer ouverture, reponse, rendez-vous et qualite pipeline.", "Les optimisations doivent viser les opportunites qualifiees, pas seulement les clics."],
    ],
  },
  en: {
    caption: "Essential elements of a high-performing B2B cold email campaign",
    headers: ["Element", "Recommendation", "Why it matters"],
    rows: [
      ["ICP", "Segment by market, size, role, and buying signal.", "Targeting relevance affects reply rate more than volume."],
      ["Infrastructure", "Use dedicated domains, SPF, DKIM, DMARC, and warm-up.", "Deliverability protects sender reputation and sending capacity."],
      ["Message", "Personalize the opener and test multiple angles.", "Decision makers respond better to a concrete problem than a generic pitch."],
      ["Follow-up", "Measure opens, replies, meetings, and pipeline quality.", "Optimization should target qualified opportunities, not only clicks."],
    ],
  },
  de: {
    caption: "Wesentliche Elemente einer starken B2B-Cold-E-Mail-Kampagne",
    headers: ["Element", "Empfehlung", "Warum es wichtig ist"],
    rows: [
      ["ICP", "Nach Markt, Groesse, Rolle und Kaufsignal segmentieren.", "Relevantes Targeting beeinflusst die Antwortquote staerker als Volumen."],
      ["Infrastruktur", "Dedizierte Domains, SPF, DKIM, DMARC und Warm-up nutzen.", "Deliverability schuetzt Reputation und Versandkapazitaet."],
      ["Nachricht", "Einstieg personalisieren und mehrere Winkel testen.", "Entscheider reagieren besser auf konkrete Probleme als auf generische Pitches."],
      ["Follow-up", "Oeffnungen, Antworten, Termine und Pipeline-Qualitaet messen.", "Optimierung sollte qualifizierte Chancen fokussieren, nicht nur Klicks."],
    ],
  },
  nl: {
    caption: "Essentiele onderdelen van een sterke B2B-cold-emailcampagne",
    headers: ["Element", "Aanbeveling", "Waarom het telt"],
    rows: [
      ["ICP", "Segmenteer op markt, grootte, rol en koopsignaal.", "Relevante targeting beinvloedt reply rate sterker dan volume."],
      ["Infrastructuur", "Gebruik dedicated domeinen, SPF, DKIM, DMARC en warm-up.", "Deliverability beschermt reputatie en verzendcapaciteit."],
      ["Bericht", "Personaliseer de opener en test meerdere invalshoeken.", "Beslissers reageren beter op een concreet probleem dan op een generieke pitch."],
      ["Follow-up", "Meet opens, replies, meetings en pipelinekwaliteit.", "Optimalisatie moet kwalificatie verbeteren, niet alleen clicks."],
    ],
  },
};

export function ColdEmailGuideTable({ locale = "fr" }: { locale?: SupportedLocale }) {
  const table = coldEmailGuideTables[locale];

  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200 bg-white">
      <table className="min-w-[720px] w-full border-collapse text-left text-sm">
        <caption className="sr-only">{table.caption}</caption>
        <thead className="bg-neutral-50 text-xs font-semibold uppercase tracking-[0.08em] text-[#074f74]">
          <tr>
            {table.headers.map((header) => (
              <th key={header} scope="col" className="px-4 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 text-neutral-700">
          {table.rows.map(([element, recommendation, reason]) => (
            <tr key={element}>
              <td className="px-4 py-3 font-semibold text-[#153a54]">{element}</td>
              <td className="px-4 py-3">{recommendation}</td>
              <td className="px-4 py-3">{reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
