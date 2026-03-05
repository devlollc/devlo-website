import type { CaseStudy } from "@/lib/case-studies";
import type { SupportedLocale } from "@/lib/i18n/slug-map";
import { normalizeLocalizedCopyDeep } from "@/lib/i18n/text-normalization";
import caseStudiesContentJson from "@/lib/i18n/case-studies-content.json";

type CaseStudiesLocalized = {
  fr: CaseStudy[];
  en: CaseStudy[];
  de: CaseStudy[];
  nl: CaseStudy[];
};

const localizedCaseStudies = caseStudiesContentJson as CaseStudiesLocalized;

function normalizeLocale(locale: SupportedLocale): SupportedLocale {
  if (locale === "en" || locale === "de" || locale === "nl") return locale;
  return "fr";
}

export function getLocalizedCaseStudies(locale: SupportedLocale): CaseStudy[] {
  const key = normalizeLocale(locale);
  return normalizeLocalizedCopyDeep(localizedCaseStudies[key] ?? localizedCaseStudies.fr, key);
}

export function getLocalizedCaseStudyBySlug(locale: SupportedLocale): Record<string, CaseStudy> {
  return Object.fromEntries(getLocalizedCaseStudies(locale).map((item) => [item.slug, item]));
}
