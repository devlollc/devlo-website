"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { SERVICE_HUB_CARDS, type ServiceSlug } from "@/content/services";

type ServiceSwitcherProps = {
  currentSlug: ServiceSlug;
};

export function ServiceSwitcher({ currentSlug }: ServiceSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentService = SERVICE_HUB_CARDS.find((item) => item.href.endsWith(`/${currentSlug}`));

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    clearCloseTimeout();
    setIsOpen(true);
  }, [clearCloseTimeout]);

  const closeMenu = useCallback(() => {
    clearCloseTimeout();
    setIsOpen(false);
  }, [clearCloseTimeout]);

  const scheduleClose = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 130);
  }, [clearCloseTimeout]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onEscape);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      clearCloseTimeout();
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [closeMenu, clearCloseTimeout]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocusCapture={openMenu}
      onBlurCapture={(event) => {
        const nextFocused = event.relatedTarget as Node | null;
        if (nextFocused && rootRef.current?.contains(nextFocused)) return;
        scheduleClose();
      }}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? closeMenu() : openMenu())}
        className="flex w-full min-h-[52px] items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-left shadow-soft transition hover:border-devlo-700/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devlo-700 focus-visible:ring-offset-2"
      >
        <span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-devlo-700">Changer de service</span>
          <span className="block text-sm font-semibold text-devlo-900">{currentService?.title ?? "Sélectionner un service"}</span>
        </span>
        <ChevronDown className={["h-4 w-4 text-devlo-700 transition-transform", isOpen ? "rotate-180" : ""].join(" ")} />
      </button>

      {isOpen ? <span aria-hidden className="pointer-events-auto absolute left-0 right-0 top-full hidden h-3 md:block" /> : null}

      <div
        className={[
          "z-40 w-full md:absolute md:left-0 md:top-full md:mt-0 md:pt-2",
          isOpen ? "block" : "hidden",
          "mt-2",
        ].join(" ")}
        role="listbox"
      >
        <div className="grid gap-1.5 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-panel md:max-h-[420px] md:overflow-y-auto">
          {SERVICE_HUB_CARDS.map((service) => {
            const selected = service.href.endsWith(`/${currentSlug}`);
            return (
              <Link
                key={service.href}
                href={service.href}
                onClick={closeMenu}
                className={[
                  "rounded-xl border px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devlo-700 focus-visible:ring-offset-2",
                  selected
                    ? "border-devlo-700 bg-devlo-700 text-white"
                    : "border-neutral-200 bg-white text-devlo-900 hover:border-devlo-700/35 hover:bg-white",
                ].join(" ")}
              >
                <span className="font-semibold">{service.title}</span>
                <span className={["mt-0.5 block text-xs", selected ? "text-white/85" : "text-neutral-500"].join(" ")}>
                  {service.subtitle}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
