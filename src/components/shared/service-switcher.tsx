"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { SERVICE_HUB_CARDS, type ServiceSlug } from "@/content/services";

type ServiceSwitcherProps = {
  currentSlug: ServiceSlug;
};

export function ServiceSwitcher({ currentSlug }: ServiceSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const currentService = SERVICE_HUB_CARDS.find((item) => item.href.endsWith(`/${currentSlug}`));

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onEscape);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocusCapture={() => setIsOpen(true)}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full min-h-[52px] items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-left shadow-soft transition hover:border-devlo-700/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devlo-700 focus-visible:ring-offset-2"
      >
        <span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-devlo-700">Changer de service</span>
          <span className="block text-sm font-semibold text-devlo-900">{currentService?.title ?? "Sélectionner un service"}</span>
        </span>
        <ChevronDown className={["h-4 w-4 text-devlo-700 transition-transform", isOpen ? "rotate-180" : ""].join(" ")} />
      </button>

      <div
        className={[
          "z-40 mt-2 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-panel",
          isOpen ? "block" : "hidden",
          "md:absolute md:left-0 md:top-full",
          "md:max-h-[420px] md:overflow-y-auto",
        ].join(" ")}
        role="listbox"
      >
        <div className="grid gap-1.5">
          {SERVICE_HUB_CARDS.map((service) => {
            const selected = service.href.endsWith(`/${currentSlug}`);
            return (
              <Link
                key={service.href}
                href={service.href}
                onClick={() => setIsOpen(false)}
                className={[
                  "rounded-xl border px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devlo-700 focus-visible:ring-offset-2",
                  selected
                    ? "border-devlo-700 bg-devlo-700 text-white"
                    : "border-neutral-200 bg-white text-devlo-900 hover:border-devlo-700/35 hover:bg-devlo-50/60",
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
