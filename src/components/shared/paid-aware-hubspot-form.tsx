"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { HubspotForm } from "@/components/ui/hubspot-form";
import type { SupportedLocale } from "@/lib/i18n/slug-map";
import {
  buildPaidAttributionSnapshot,
  buildPaidStrategySelections,
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

    return {
      strategy_selections: buildPaidStrategySelections(attribution),
    };
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
