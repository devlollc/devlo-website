import servicesContentJson from "@/lib/i18n/services-content.json";
import type {
  CaseStudyCard,
  ServiceHubCard,
  ServicePageData,
  ServiceSlug,
} from "@/content/services";
import type { SupportedLocale } from "@/lib/i18n/slug-map";
import { normalizeLocalizedCopyDeep } from "@/lib/i18n/text-normalization";

type ServicesBundle = {
  SERVICE_HUB_CARDS: ServiceHubCard[];
  SERVICE_PAGE_DATA: Record<ServiceSlug, ServicePageData>;
  ALL_CASE_STUDIES: CaseStudyCard[];
  hubCopy: {
    eyebrow: string;
    title: string;
    description: string;
    intro: string;
    ctaDiscover: string;
    ctaConsultation: string;
    ctaResults: string;
    trustedTitle: string;
    trustedDescription: string;
  };
};

type LocalizedServicesContent = {
  fr: ServicesBundle;
  en: ServicesBundle;
  de: ServicesBundle;
  nl: ServicesBundle;
  meta: {
    generatedAt: string;
    translatedStringCount: number;
  };
};

const servicesContent = servicesContentJson as LocalizedServicesContent;

function normalizeLocale(locale: SupportedLocale): SupportedLocale {
  if (locale === "en" || locale === "de" || locale === "nl") return locale;
  return "fr";
}

export function getLocalizedServicesContent(locale: SupportedLocale): ServicesBundle {
  const key = normalizeLocale(locale);
  return normalizeLocalizedCopyDeep(servicesContent[key] ?? servicesContent.fr, key);
}
