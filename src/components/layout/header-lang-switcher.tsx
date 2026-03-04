"use client";

import type { ReactNode } from "react";
import { Component, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLovalingo } from "@lovalingo/lovalingo";

import { LovalingoAvailabilityContext } from "@/components/providers/lovalingo-next-provider";
import { buttonClassName } from "@/components/ui/button";

const SUPPORTED_LANGS = ["fr", "en", "de", "nl"] as const;

const LANG_FLAGS: Record<(typeof SUPPORTED_LANGS)[number], string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  de: "🇩🇪",
  nl: "🇳🇱",
};

const LANG_LABELS: Record<(typeof SUPPORTED_LANGS)[number], string> = {
  fr: "Français",
  en: "English",
  de: "Deutsch",
  nl: "Nederlands",
};

type HeaderLangSwitcherProps = {
  transparent?: boolean;
  mobile?: boolean;
  className?: string;
};

function detectLocaleFromPath(pathname: string): (typeof SUPPORTED_LANGS)[number] {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/nl" || pathname.startsWith("/nl/")) return "nl";
  return "fr";
}

function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en" || pathname === "/de" || pathname === "/nl") return "/";
  if (pathname.startsWith("/en/") || pathname.startsWith("/de/") || pathname.startsWith("/nl/")) {
    return pathname.replace(/^\/(en|de|nl)/, "") || "/";
  }
  return pathname;
}

function withLocale(pathname: string, locale: (typeof SUPPORTED_LANGS)[number]): string {
  const normalized = stripLocalePrefix(pathname);
  if (locale === "fr") return normalized;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

function navigateToLocale(
  pathname: string,
  locale: (typeof SUPPORTED_LANGS)[number],
) {
  const targetPath = withLocale(pathname, locale);
  const query = typeof window !== "undefined" ? window.location.search : "";
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  const targetUrl = query ? `${targetPath}${query}${hash}` : `${targetPath}${hash}`;
  window.location.assign(targetUrl);
}

function HeaderLangSwitcherUi({
  transparent = false,
  mobile = false,
  className = "",
  currentLocale,
  isLoading,
  onChangeLocale,
}: HeaderLangSwitcherProps & {
  currentLocale: (typeof SUPPORTED_LANGS)[number];
  isLoading: boolean;
  onChangeLocale: (lang: (typeof SUPPORTED_LANGS)[number]) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const baseButton = mobile
    ? buttonClassName("secondary", "w-full justify-between px-4 py-3 text-base")
    : [
        "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devlo-600 focus-visible:ring-offset-2",
        "transition-colors duration-150",
        transparent
          ? "border-white/45 bg-white/12 text-white hover:border-white/70 hover:bg-white/18"
          : "border-neutral-300 bg-white text-devlo-900 shadow-sm hover:bg-neutral-50",
      ].join(" ");

  const menuClassName = mobile
    ? "mt-2 w-full rounded-xl border border-neutral-200 bg-white p-1.5 shadow-lg"
    : [
        "absolute right-0 top-[calc(100%+8px)] z-[80] min-w-[210px] rounded-xl border p-1.5 shadow-xl",
        transparent ? "border-white/20 bg-white/95 backdrop-blur-md" : "border-neutral-200 bg-white",
      ].join(" ");

  return (
    <div ref={containerRef} className={["relative", className].filter(Boolean).join(" ")}>
      <button
        type="button"
        className={baseButton}
        aria-label="Choisir la langue"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        disabled={isLoading}
        data-no-translate="true"
      >
        <span aria-hidden="true" className="text-[2rem] leading-none">
          {LANG_FLAGS[currentLocale]}
        </span>
        {!mobile ? <span className="sr-only">{LANG_LABELS[currentLocale]}</span> : null}
        <span aria-hidden="true" className={["text-xs transition-transform", isOpen ? "rotate-180" : ""].join(" ")}>
          ▾
        </span>
      </button>

      {isOpen ? (
        <div role="menu" aria-label="Sélecteur de langue" className={menuClassName} data-no-translate="true">
          {SUPPORTED_LANGS.map((lang) => {
            const selected = lang === currentLocale;
            return (
              <button
                key={lang}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => {
                  setIsOpen(false);
                  if (!selected) onChangeLocale(lang);
                }}
                className={[
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                  selected
                    ? "bg-devlo-50 text-devlo-700"
                    : "text-devlo-900 hover:bg-neutral-100 hover:text-devlo-700",
                ].join(" ")}
              >
                <span className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-base leading-none">
                    {LANG_FLAGS[lang]}
                  </span>
                  <span className="w-6 font-semibold uppercase tracking-[0.08em]">{lang}</span>
                  <span className={selected ? "text-devlo-700/80" : "text-neutral-500"}>{LANG_LABELS[lang]}</span>
                </span>
                <span aria-hidden="true" className={selected ? "opacity-100" : "opacity-0"}>
                  ✓
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function HeaderLangSwitcherFallback(props: HeaderLangSwitcherProps) {
  const pathname = usePathname() || "/";
  const currentLocale = detectLocaleFromPath(pathname);

  return (
    <HeaderLangSwitcherUi
      {...props}
      currentLocale={currentLocale}
      isLoading={false}
      onChangeLocale={(lang) => navigateToLocale(pathname, lang)}
    />
  );
}

function HeaderLangSwitcherWithLovalingo(props: HeaderLangSwitcherProps) {
  const { locale, setLocale, isLoading } = useLovalingo();
  const pathname = usePathname() || "/";
  const pathLocale = detectLocaleFromPath(pathname);
  const currentLocale = SUPPORTED_LANGS.includes(locale as (typeof SUPPORTED_LANGS)[number])
    ? (locale as (typeof SUPPORTED_LANGS)[number])
    : pathLocale;

  return (
    <HeaderLangSwitcherUi
      {...props}
      currentLocale={currentLocale}
      isLoading={isLoading}
      onChangeLocale={(lang) => {
        try {
          setLocale(lang);
        } catch {
          navigateToLocale(pathname, lang);
        }
      }}
    />
  );
}

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class SwitcherErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  override state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function HeaderLangSwitcher(props: HeaderLangSwitcherProps) {
  const isLovalingoAvailable = useContext(LovalingoAvailabilityContext);

  if (!isLovalingoAvailable) {
    return <HeaderLangSwitcherFallback {...props} />;
  }

  return (
    <SwitcherErrorBoundary fallback={<HeaderLangSwitcherFallback {...props} />}>
      <HeaderLangSwitcherWithLovalingo {...props} />
    </SwitcherErrorBoundary>
  );
}
