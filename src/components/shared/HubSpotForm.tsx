"use client";

import { useId, useMemo } from "react";

import { HubspotForm } from "@/components/ui/hubspot-form";
import { buildStrategySelections, HUBSPOT_FORM_ID, HUBSPOT_PORTAL_ID } from "@/lib/hubspot";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

type HubSpotFormProps = {
  serviceInterest: string;
  configuratorData?: string;
  onSuccess?: () => void;
};

export function HubSpotForm({ serviceInterest, configuratorData, onSuccess }: HubSpotFormProps) {
  const reactId = useId();
  const targetId = useMemo(() => `hubspot-services-${reactId.replace(/:/g, "")}`, [reactId]);

  const strategySelections = useMemo(
    () =>
      buildStrategySelections({
        serviceInterest,
        configuratorData,
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      }),
    [configuratorData, serviceInterest],
  );

  return (
    <HubspotForm
      portalId={HUBSPOT_PORTAL_ID}
      formId={HUBSPOT_FORM_ID}
      region="na2"
      targetId={targetId}
      hiddenFields={{
        strategy_selections: strategySelections,
        service_interest: serviceInterest,
      }}
      onSubmitted={() => {
        window.dataLayer?.push({ event: "lead_form_submit", service: serviceInterest });
        onSuccess?.();
      }}
    />
  );
}
