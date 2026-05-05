"use client";

import { useEffect, useState } from "react";

type ConsentChoice = "granted" | "denied";
type Locale = "fr" | "en" | "de" | "nl";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "devlo_consent_mode_v2";

const copy: Record<
  Locale,
  {
    body: string;
    accept: string;
    reject: string;
    privacy: string;
  }
> = {
  fr: {
    body: "Nous utilisons des cookies de mesure et de publicité pour comprendre les campagnes et améliorer le site.",
    accept: "Accepter",
    reject: "Refuser",
    privacy: "Confidentialité",
  },
  en: {
    body: "We use measurement and advertising cookies to understand campaign performance and improve the site.",
    accept: "Accept",
    reject: "Reject",
    privacy: "Privacy",
  },
  de: {
    body: "Wir verwenden Mess- und Werbe-Cookies, um Kampagnen zu verstehen und die Website zu verbessern.",
    accept: "Akzeptieren",
    reject: "Ablehnen",
    privacy: "Datenschutz",
  },
  nl: {
    body: "We gebruiken meet- en advertentiecookies om campagnes te begrijpen en de site te verbeteren.",
    accept: "Accepteren",
    reject: "Weigeren",
    privacy: "Privacy",
  },
};

function getLocale(): Locale {
  const lang = document.documentElement.lang;
  if (lang === "en" || lang === "de" || lang === "nl") {
    return lang;
  }
  return "fr";
}

function updateConsent(choice: ConsentChoice) {
  const consent = {
    ad_storage: choice,
    analytics_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  };

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  window.gtag("consent", "update", consent);
}

export function ConsentMode() {
  const [isVisible, setIsVisible] = useState(false);
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    setLocale(getLocale());
    const storedChoice = window.localStorage.getItem(STORAGE_KEY);

    if (storedChoice === "granted" || storedChoice === "denied") {
      updateConsent(storedChoice);
      return;
    }

    setIsVisible(true);
  }, []);

  function choose(choice: ConsentChoice) {
    window.localStorage.setItem(STORAGE_KEY, choice);
    updateConsent(choice);
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  const labels = copy[locale];

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120] border-t border-neutral-200 bg-white shadow-[0_-12px_40px_rgba(15,23,42,0.12)]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="max-w-3xl text-sm leading-6 text-neutral-700">{labels.body}</p>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <a
            href="/politique-confidentialite"
            className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 underline-offset-4 hover:underline"
          >
            {labels.privacy}
          </a>
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50"
          >
            {labels.reject}
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-md bg-devlo-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-devlo-800"
          >
            {labels.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
