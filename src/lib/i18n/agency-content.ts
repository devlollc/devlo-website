import type { SupportedLocale } from "@/lib/i18n/slug-map";
import agencyContentJson from "@/lib/i18n/agency-content.json";

type AgencyBundle = (typeof agencyContentJson)["fr"];

export function getLocalizedAgencyContent(locale: SupportedLocale): AgencyBundle {
  const key = locale === "en" || locale === "de" || locale === "nl" ? locale : "fr";
  return (agencyContentJson as Record<string, AgencyBundle>)[key] ?? agencyContentJson.fr;
}
