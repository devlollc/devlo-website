import { localizedPageByIdQuery } from "@/lib/sanity/queries";
import { sanityClient } from "@/lib/sanity/client";
import type { SupportedLocale } from "@/lib/i18n/slug-map";
import localizedContentJson from "@/lib/i18n/localized-content.json";

type LocalizedValue = Partial<Record<SupportedLocale, string | null>>;
type LocalizedField = LocalizedValue | string | null | undefined;
type LocalizedImageField = Partial<Record<SupportedLocale, string | null>> | string | null | undefined;

type SanityLocalizedDoc = {
  seoTitle?: LocalizedField;
  seoDescription?: LocalizedField;
  title?: LocalizedField;
  description?: LocalizedField;
  ogImage?: LocalizedImageField;
  body?: LocalizedField;
};

const localizedContentMap = localizedContentJson as Record<string, SanityLocalizedDoc>;

function isLocalizedObject(value: LocalizedField): value is LocalizedValue {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function pickExactLocale(value: LocalizedField, locale: SupportedLocale): string | undefined {
  if (typeof value === "string") {
    return locale === "fr" ? value || undefined : undefined;
  }
  if (!isLocalizedObject(value)) return undefined;
  return value[locale] || undefined;
}

function pickFrLocale(value: LocalizedField): string | undefined {
  if (typeof value === "string") return value || undefined;
  if (!isLocalizedObject(value)) return undefined;
  return value.fr || undefined;
}

function pickMergedValue(
  primaryValue: LocalizedField,
  fallbackValue: LocalizedField,
  locale: SupportedLocale,
): string | undefined {
  return (
    pickExactLocale(primaryValue, locale) ||
    pickExactLocale(fallbackValue, locale) ||
    pickFrLocale(primaryValue) ||
    pickFrLocale(fallbackValue)
  );
}

function pickMergedImage(
  primaryValue: LocalizedImageField,
  fallbackValue: LocalizedImageField,
  locale: SupportedLocale,
): string | undefined {
  const fromPrimaryExact =
    typeof primaryValue === "string"
      ? locale === "fr"
        ? primaryValue || undefined
        : undefined
      : primaryValue?.[locale] || undefined;
  const fromFallbackExact =
    typeof fallbackValue === "string"
      ? locale === "fr"
        ? fallbackValue || undefined
        : undefined
      : fallbackValue?.[locale] || undefined;
  const fromPrimaryFr = typeof primaryValue === "string" ? primaryValue || undefined : primaryValue?.fr || undefined;
  const fromFallbackFr =
    typeof fallbackValue === "string" ? fallbackValue || undefined : fallbackValue?.fr || undefined;

  return fromPrimaryExact || fromFallbackExact || fromPrimaryFr || fromFallbackFr;
}

export async function getSanityLocalizedPageData(
  pageId: string,
  locale: SupportedLocale,
): Promise<{ title?: string; description?: string; body?: string; ogImage?: string } | null> {
  const fallbackDoc = localizedContentMap[pageId] ?? null;
  let sanityDoc: SanityLocalizedDoc | null = null;
  if (sanityClient) {
    sanityDoc = await sanityClient.fetch<SanityLocalizedDoc | null>(localizedPageByIdQuery, { pageId }).catch(() => null);
  }

  const primaryDoc = sanityDoc ?? fallbackDoc;
  if (!primaryDoc) return null;
  const secondaryDoc = fallbackDoc && fallbackDoc !== primaryDoc ? fallbackDoc : null;

  return {
    title: pickMergedValue(primaryDoc.seoTitle || primaryDoc.title, secondaryDoc?.seoTitle || secondaryDoc?.title, locale),
    description: pickMergedValue(
      primaryDoc.seoDescription || primaryDoc.description,
      secondaryDoc?.seoDescription || secondaryDoc?.description,
      locale,
    ),
    body: pickMergedValue(primaryDoc.body, secondaryDoc?.body, locale),
    ogImage: pickMergedImage(primaryDoc.ogImage, secondaryDoc?.ogImage, locale),
  };
}

export async function getSanityLocalizedSeo(
  pageId: string,
  locale: SupportedLocale,
): Promise<{ title?: string; description?: string; ogImage?: string } | null> {
  const data = await getSanityLocalizedPageData(pageId, locale);
  if (!data) return null;

  return {
    title: data.title,
    description: data.description,
    ogImage: data.ogImage,
  };
}
