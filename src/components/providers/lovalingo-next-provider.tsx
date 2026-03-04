"use client";

import type { ReactNode } from "react";
import { Component, createContext, useEffect, useState } from "react";
import { LovalingoProvider } from "@lovalingo/lovalingo";

const LOVALINGO_PUBLIC_ANON_KEY = "aix_qhj0o99zw8icbj8mg4e7x04rtp1wehsw";
const LOVALINGO_CDN_HOST = "cdn.lovalingo.com";
const LOVALINGO_SESSION_HEALTH_KEY = "devlo:lovalingo:bootstrap-health";

export const LovalingoAvailabilityContext = createContext(false);

function detectLocaleFromPath(pathname: string): "fr" | "en" | "de" | "nl" {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/nl" || pathname.startsWith("/nl/")) return "nl";
  return "fr";
}

function isLovalingoRuntimeFailure(value: unknown): boolean {
  if (!value) return false;
  let text = "";
  if (typeof value === "string") {
    text = value;
  } else if (value instanceof Error) {
    text = `${value.message}\n${value.stack ?? ""}`;
  } else {
    try {
      text = JSON.stringify(value);
    } catch {
      text = String(value);
    }
  }
  return /lovalingo|cdn\.lovalingo\.com|seo-bundle|bootstrap|pageview/i.test(text);
}

type LovalingoErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
  onFailure: () => void;
};

type LovalingoErrorBoundaryState = {
  hasError: boolean;
};

class LovalingoErrorBoundary extends Component<
  LovalingoErrorBoundaryProps,
  LovalingoErrorBoundaryState
> {
  override state: LovalingoErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override componentDidCatch(error: unknown) {
    if (isLovalingoRuntimeFailure(error)) {
      this.props.onFailure();
    }
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function LovalingoNextProvider({ children }: { children: ReactNode }) {
  const [isLovalingoEnabled, setIsLovalingoEnabled] = useState(false);
  const [hasCheckedBootstrap, setHasCheckedBootstrap] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const setHealth = (isHealthy: boolean) => {
      if (cancelled) return;
      setIsLovalingoEnabled(isHealthy);
      setHasCheckedBootstrap(true);
    };

    const readSessionHealth = () => {
      try {
        return window.sessionStorage.getItem(LOVALINGO_SESSION_HEALTH_KEY);
      } catch {
        return null;
      }
    };

    const writeSessionHealth = (value: "up" | "down") => {
      try {
        window.sessionStorage.setItem(LOVALINGO_SESSION_HEALTH_KEY, value);
      } catch {
        // Ignore storage issues; runtime fallback still works.
      }
    };

    const cachedHealth = readSessionHealth();
    if (cachedHealth === "up") {
      setHealth(true);
    } else if (cachedHealth === "down") {
      setHealth(false);
    } else {
      const pathname = window.location.pathname || "/";
      const bootstrapUrl = new URL(`https://${LOVALINGO_CDN_HOST}/functions/v1/bootstrap`);
      bootstrapUrl.searchParams.set("key", LOVALINGO_PUBLIC_ANON_KEY);
      bootstrapUrl.searchParams.set("locale", detectLocaleFromPath(pathname));
      bootstrapUrl.searchParams.set("path", pathname);

      fetch(bootstrapUrl.toString(), {
        method: "GET",
        cache: "no-store",
        mode: "cors",
      })
        .then((response) => {
          const isHealthy = response.ok;
          writeSessionHealth(isHealthy ? "up" : "down");
          setHealth(isHealthy);
        })
        .catch(() => {
          writeSessionHealth("down");
          setHealth(false);
        });
    }

    const disableLovalingo = () => setIsLovalingoEnabled(false);

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (!isLovalingoRuntimeFailure(event.reason)) return;
      event.preventDefault();
      writeSessionHealth("down");
      disableLovalingo();
    };

    const onWindowError = (event: ErrorEvent) => {
      const url = event.filename ?? "";
      if (!url.includes(LOVALINGO_CDN_HOST) && !isLovalingoRuntimeFailure(event.error ?? event.message)) return;
      event.preventDefault();
      writeSessionHealth("down");
      disableLovalingo();
    };

    window.addEventListener("unhandledrejection", onUnhandledRejection);
    window.addEventListener("error", onWindowError);

    return () => {
      cancelled = true;
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
      window.removeEventListener("error", onWindowError);
    };
  }, []);

  const fallbackTree = (
    <LovalingoAvailabilityContext.Provider value={false}>
      {children}
    </LovalingoAvailabilityContext.Provider>
  );

  if (!hasCheckedBootstrap || !isLovalingoEnabled) return fallbackTree;

  return (
    <LovalingoErrorBoundary
      fallback={fallbackTree}
      onFailure={() => {
        try {
          window.sessionStorage.setItem(LOVALINGO_SESSION_HEALTH_KEY, "down");
        } catch {
          // Ignore storage issues.
        }
        setIsLovalingoEnabled(false);
      }}
    >
      <LovalingoAvailabilityContext.Provider value>
        <LovalingoProvider
          publicAnonKey={LOVALINGO_PUBLIC_ANON_KEY}
          defaultLocale="fr"
          locales={["fr", "en", "de", "nl"]}
          routing="path"
          overlayBgColor="#ffffff"
        >
          {children}
        </LovalingoProvider>
      </LovalingoAvailabilityContext.Provider>
    </LovalingoErrorBoundary>
  );
}
