"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { HubspotForm } from "@/components/ui/hubspot-form";
import type { SupportedLocale } from "@/lib/i18n/slug-map";
import {
  buildPaidAttributionSnapshot,
  buildPaidStrategySelections,
  compactPaidAttribution,
  hasPaidAttribution,
  isPaidHostname,
  PAID_ATTRIBUTION_STORAGE_KEY,
  pushPaidAnalyticsEvent,
  readPaidAttributionFromSearch,
  type PaidAttribution,
} from "@/lib/paid-attribution";

type PaidAwareHubspotFormProps = {
  formId: string;
  locale?: SupportedLocale;
  portalId: string;
  region: string;
  targetId: string;
};

function readStoredAttribution() {
  try {
    const stored = window.sessionStorage.getItem(PAID_ATTRIBUTION_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as PaidAttribution) : {};
  } catch {
    return {};
  }
}

function resolveAttribution() {
  const paidHost = isPaidHostname(window.location.hostname);
  return buildPaidAttributionSnapshot({
    currentAttribution: readPaidAttributionFromSearch(new URLSearchParams(window.location.search)),
    currentUrl: window.location.href,
    paidHost,
    referrer: document.referrer,
    storedAttribution: readStoredAttribution(),
  });
}

function buildPaidHiddenFields(attribution: PaidAttribution) {
  const compact = compactPaidAttribution(attribution);

  return {
    strategy_selections: buildPaidStrategySelections(attribution),
    ...(compact.paid_host ? { paid_host: compact.paid_host } : {}),
    ...(compact.utm_source ? { paid_utm_source: compact.utm_source } : {}),
    ...(compact.utm_medium ? { paid_utm_medium: compact.utm_medium } : {}),
    ...(compact.utm_campaign ? { paid_utm_campaign: compact.utm_campaign } : {}),
    ...(compact.utm_content ? { paid_utm_content: compact.utm_content } : {}),
    ...(compact.utm_term ? { paid_utm_term: compact.utm_term } : {}),
    ...(compact.gclid ? { paid_gclid: compact.gclid } : {}),
    ...(compact.wbraid ? { paid_wbraid: compact.wbraid } : {}),
    ...(compact.gbraid ? { paid_gbraid: compact.gbraid } : {}),
    ...(compact.landing_page_url ? { paid_landing_page_url: compact.landing_page_url } : {}),
    ...(compact.current_page_url ? { paid_current_page_url: compact.current_page_url } : {}),
    ...(compact.referrer ? { paid_referrer: compact.referrer } : {}),
    ...(compact.paid_session_id ? { paid_session_id: compact.paid_session_id } : {}),
    ...(compact.paid_first_seen_at ? { paid_first_seen_at: compact.paid_first_seen_at } : {}),
    paid_qualification_status: "submitted_pending_review",
    paid_demo_status: "not_booked",
  };
}

export function PaidAwareHubspotForm({
  formId,
  locale = "fr",
  portalId,
  region,
  targetId,
}: PaidAwareHubspotFormProps) {
  const [attribution, setAttribution] = useState<PaidAttribution>({});
  const trackedFormStart = useRef(false);

  useEffect(() => {
    setAttribution(resolveAttribution());
  }, []);

  const hiddenFields = useMemo(() => {
    if (!hasPaidAttribution(attribution)) return undefined;

    return buildPaidHiddenFields(attribution);
  }, [attribution]);

  const trackFormStart = () => {
    if (trackedFormStart.current || !hasPaidAttribution(attribution)) return;
    trackedFormStart.current = true;
    pushPaidAnalyticsEvent("paid_form_start", attribution);
  };

  return (
    <div onClickCapture={trackFormStart} onFocusCapture={trackFormStart}>
      <HubspotForm
        portalId={portalId}
        formId={formId}
        region={region}
        targetId={targetId}
        locale={locale}
        hiddenFields={hiddenFields}
        onSubmitted={() => pushPaidAnalyticsEvent("paid_lead_submitted", attribution)}
      />
    </div>
  );
}
