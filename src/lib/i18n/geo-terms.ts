import { type SupportedLocale } from "@/lib/i18n/slug-map";

type ReplacementRule = {
  pattern: RegExp;
  replace: string;
};

const replacementRulesByLocale: Record<SupportedLocale, ReplacementRule[]> = {
  fr: [],
  en: [
    { pattern: /\bSuisse alémanique\b/gi, replace: "German-speaking Switzerland" },
    { pattern: /\bSuisse romande\b/gi, replace: "French-speaking Switzerland" },
    { pattern: /\bMulti-pays\b/gi, replace: "Multi-country" },
    { pattern: /\bSuisse\b/gi, replace: "Switzerland" },
    { pattern: /\bBelgique\b/gi, replace: "Belgium" },
    { pattern: /\bFrance\b/gi, replace: "France" },
  ],
  de: [
    { pattern: /\bSuisse alémanique\b/gi, replace: "Deutschschweiz" },
    { pattern: /\bSuisse romande\b/gi, replace: "Westschweiz" },
    { pattern: /\bMulti-pays\b/gi, replace: "Mehrere Länder" },
    { pattern: /\bSuisse\b/gi, replace: "Schweiz" },
    { pattern: /\bBelgique\b/gi, replace: "Belgien" },
    { pattern: /\bFrance\b/gi, replace: "Frankreich" },
  ],
  nl: [
    { pattern: /\bSuisse alémanique\b/gi, replace: "Duitstalig Zwitserland" },
    { pattern: /\bSuisse romande\b/gi, replace: "Franstalig Zwitserland" },
    { pattern: /\bMulti-pays\b/gi, replace: "Meerdere landen" },
    { pattern: /\bSuisse\b/gi, replace: "Zwitserland" },
    { pattern: /\bBelgique\b/gi, replace: "België" },
    { pattern: /\bFrance\b/gi, replace: "Frankrijk" },
  ],
};

export function localizeGeoTermsInString(value: string, locale: SupportedLocale): string {
  const rules = replacementRulesByLocale[locale];
  if (!rules || rules.length === 0) return value;

  return rules.reduce((current, rule) => current.replace(rule.pattern, rule.replace), value);
}

export function localizeGeoTermsInObject<T>(value: T, locale: SupportedLocale): T {
  if (typeof value === "string") {
    return localizeGeoTermsInString(value, locale) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => localizeGeoTermsInObject(item, locale)) as T;
  }

  if (value && typeof value === "object") {
    const transformedEntries = Object.entries(value as Record<string, unknown>).map(([key, item]) => [
      key,
      localizeGeoTermsInObject(item, locale),
    ]);
    return Object.fromEntries(transformedEntries) as T;
  }

  return value;
}
