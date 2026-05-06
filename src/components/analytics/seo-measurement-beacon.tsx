"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { pushAnalyticsEvent } from "@/lib/analytics";
import type { SupportedLocale } from "@/lib/i18n/slug-map";

type SeoMeasurementBeaconProps = {
  locale: SupportedLocale;
  market: string;
  pageType: "geo" | "regional_geo";
};

export function SeoMeasurementBeacon({
  locale,
  market,
  pageType,
}: SeoMeasurementBeaconProps) {
  const pathname = usePathname();

  useEffect(() => {
    pushAnalyticsEvent("seo_geo_page_view", {
      locale,
      market,
      page_path: pathname,
      page_type: pageType,
    });
  }, [locale, market, pageType, pathname]);

  return null;
}
