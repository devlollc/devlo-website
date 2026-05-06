"use client";

import Link from "next/link";
import type React from "react";

import { pushAnalyticsEvent } from "@/lib/analytics";
import type { SupportedLocale } from "@/lib/i18n/slug-map";

type GeoConsultationLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  locale: SupportedLocale;
  market: string;
};

export function GeoConsultationLink({
  children,
  className,
  href,
  locale,
  market,
}: GeoConsultationLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        pushAnalyticsEvent("seo_geo_cta_clicked", {
          cta_type: "consultation",
          locale,
          market,
          page_path: window.location.pathname,
        });
      }}
    >
      {children}
    </Link>
  );
}
