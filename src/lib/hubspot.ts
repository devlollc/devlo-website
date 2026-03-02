export const HUBSPOT_PORTAL_ID = "8082524";
export const HUBSPOT_FORM_ID = "54090bd3-970d-4ad1-b3b3-1c81d54c291e";
export const HUBSPOT_FORMS_SCRIPT_SRC = "https://js.hsforms.net/forms/v2.js";

type SummaryPayload = {
  serviceInterest: string;
  configuratorData?: string;
  pageUrl?: string;
};

export function buildStrategySelections({
  serviceInterest,
  configuratorData,
  pageUrl,
}: SummaryPayload): string {
  const service = serviceInterest.trim() || "Non défini";
  const configuration = configuratorData?.trim() || "Configuration: Non défini";

  const cleanedConfiguration = configuration.startsWith("===")
    ? configuration.split("\n").slice(1).join("\n").trim()
    : configuration;

  return [
    `=== SERVICE: ${service.toUpperCase()} ===`,
    cleanedConfiguration || "Configuration: Non défini",
    `Service d'intérêt: ${service}`,
    `Page: ${pageUrl?.trim() || "Non défini"}`,
    `Date: ${new Date().toLocaleDateString("fr-CH")}`,
  ].join("\n");
}
