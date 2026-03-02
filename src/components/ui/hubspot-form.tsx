"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
          onFormReady?: (form: unknown) => void;
          onFormSubmit?: (form: unknown) => void;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

type HubspotFormProps = {
  portalId: string;
  formId: string;
  region: string;
  targetId: string;
  hiddenFields?: Record<string, string>;
  onSubmitted?: () => void;
};

let hubspotScriptPromise: Promise<void> | null = null;

function loadHubspotScript(): Promise<void> {
  if (typeof window === "undefined" || window.hbspt) {
    return Promise.resolve();
  }

  if (hubspotScriptPromise) {
    return hubspotScriptPromise;
  }

  hubspotScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-hubspot-forms="true"]');
    if (existingScript) {
      if (window.hbspt) {
        resolve();
        return;
      }

      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("HubSpot script failed to load")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.dataset.hubspotForms = "true";
    script.onload = () => resolve();
    script.onerror = () => {
      hubspotScriptPromise = null;
      reject(new Error("HubSpot script failed to load"));
    };

    document.body.appendChild(script);
  });

  return hubspotScriptPromise;
}

function resolveFormElement(formRef: unknown, targetId: string): HTMLFormElement | null {
  if (formRef instanceof HTMLFormElement) return formRef;
  if (Array.isArray(formRef) && formRef[0] instanceof HTMLFormElement) return formRef[0];

  if (typeof formRef === "object" && formRef && "get" in formRef) {
    const get = (formRef as { get?: (index: number) => unknown }).get;
    const maybe = typeof get === "function" ? get(0) : null;
    if (maybe instanceof HTMLFormElement) return maybe;
  }

  const container = document.getElementById(targetId);
  return container?.querySelector("form") ?? null;
}

function syncHiddenFields(form: HTMLFormElement, hiddenFields?: Record<string, string>) {
  if (!hiddenFields) return;

  Object.entries(hiddenFields).forEach(([name, value]) => {
    const input = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
    if (input) {
      input.value = value;
      return;
    }

    const textarea = form.querySelector<HTMLTextAreaElement>(`textarea[name="${name}"]`);
    if (textarea) {
      textarea.value = value;
      return;
    }

    const hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.name = name;
    hidden.value = value;
    form.appendChild(hidden);
  });
}

export function HubspotForm({ portalId, formId, region, targetId, hiddenFields, onSubmitted }: HubspotFormProps) {
  const initialized = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  useEffect(() => {
    initialized.current = false;
    setLoaded(false);
    setSubmitted(false);
    setLoadError(false);
    setSubmissionError(null);
  }, [formId, portalId, region, targetId]);

  useEffect(() => {
    if (isNearViewport) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isNearViewport]);

  useEffect(() => {
    if (!isNearViewport) return;

    let cancelled = false;

    const render = () => {
      if (cancelled || !window.hbspt || initialized.current) return;
      const hiddenSnapshot = hiddenFields;
      initialized.current = true;
      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#${targetId}`,
        onFormReady: (formRef: unknown) => {
          const form = resolveFormElement(formRef, targetId);
          if (!form) return;
          syncHiddenFields(form, hiddenSnapshot);
        },
        onFormSubmit: (formRef: unknown) => {
          const form = resolveFormElement(formRef, targetId);
          if (!form) return;
          syncHiddenFields(form, hiddenSnapshot);
          setSubmissionError(null);
        },
        onFormSubmitted: () => {
          setSubmitted(true);
          onSubmitted?.();
        },
      });
      setLoaded(true);
      setLoadError(false);
    };

    if (window.hbspt) {
      render();
      return;
    }

    loadHubspotScript()
      .then(render)
      .catch(() => {
        if (!cancelled) {
          setLoadError(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [formId, hiddenFields, isNearViewport, onSubmitted, portalId, region, targetId]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== "object" || !event.data) return;

      const payload = event.data as { type?: string; eventName?: string; data?: unknown };
      if (payload.type !== "hsFormCallback") return;

      if (payload.eventName === "onFormSubmitFailed" || payload.eventName === "onFormError") {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.error("[HubSpot] Form submission failed", payload.data);
        }
        setSubmissionError("La soumission HubSpot a échoué. Merci de vérifier les champs requis.");
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {!loaded && !submitted && (
        <div className="flex min-h-[320px] items-center justify-center rounded-xl bg-neutral-50">
          <div className="flex flex-col items-center gap-3 text-neutral-400">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-devlo-600" />
            <span className="text-sm">
              {loadError ? "Impossible de charger le formulaire." : "Chargement du formulaire…"}
            </span>
          </div>
        </div>
      )}
      <div id={targetId} className={loaded && !submitted ? "" : "hidden"} />
      {submissionError ? (
        <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{submissionError}</p>
      ) : null}
      <div className={submitted ? "" : "hidden"}>
        <div className="flex min-h-[320px] items-center rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <p className="text-sm font-medium leading-6 text-emerald-900">
            Merci pour votre prise de contact. Nous reviendrons vers vous sous 24 heures.
          </p>
        </div>
      </div>
    </div>
  );
}
