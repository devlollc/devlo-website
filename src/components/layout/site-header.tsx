"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { buttonClassName } from "@/components/ui/button";
import { mainNav } from "@/content/masterfile.fr";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { getLocalizedServicesContent } from "@/lib/i18n/services-content";
import { resolvePathForLocale, splitLocalePath, type SupportedLocale } from "@/lib/i18n/slug-map";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navCopyByLocale: Record<
  SupportedLocale,
  {
    navigationAria: string;
    homeAria: string;
    agency: string;
    caseStudies: string;
    services: string;
    academy: string;
    cta: string;
    allServices: string;
    seeAllServices: string;
    openServicesMenu: string;
    showServices: string;
    openMenu: string;
    closeMenu: string;
  }
> = {
  fr: {
    navigationAria: "Navigation principale",
    homeAria: "Accueil devlo",
    agency: "Agence",
    caseStudies: "Études de cas",
    services: "Services",
    academy: "Outbound Academy",
    cta: "Consultation gratuite",
    allServices: "Tous les services",
    seeAllServices: "Voir tous les services →",
    openServicesMenu: "Ouvrir le menu services",
    showServices: "Afficher les services",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  en: {
    navigationAria: "Main navigation",
    homeAria: "devlo homepage",
    agency: "Agency",
    caseStudies: "Case studies",
    services: "Services",
    academy: "Outbound Academy",
    cta: "Free consultation",
    allServices: "All services",
    seeAllServices: "See all services →",
    openServicesMenu: "Open services menu",
    showServices: "Show services",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  de: {
    navigationAria: "Hauptnavigation",
    homeAria: "devlo Startseite",
    agency: "Agentur",
    caseStudies: "Fallstudien",
    services: "Dienstleistungen",
    academy: "Outbound Academy",
    cta: "Kostenlose Beratung",
    allServices: "Alle Leistungen",
    seeAllServices: "Alle Leistungen ansehen →",
    openServicesMenu: "Service-Menü öffnen",
    showServices: "Leistungen anzeigen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
  nl: {
    navigationAria: "Hoofdnavigatie",
    homeAria: "devlo homepage",
    agency: "Agentschap",
    caseStudies: "Praktijkvoorbeelden",
    services: "Diensten",
    academy: "Outbound Academy",
    cta: "Gratis consultatie",
    allServices: "Alle diensten",
    seeAllServices: "Alle diensten bekijken →",
    openServicesMenu: "Servicemenu openen",
    showServices: "Diensten tonen",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
  },
};

export function SiteHeader() {
  const pathname = usePathname();
  const safePathname = pathname ?? "/";
  const { locale: currentLocale, path: localePath } = splitLocalePath(safePathname);
  const navCopy = navCopyByLocale[currentLocale];

  const toCurrentLocalePath = (frPath: string) => resolvePathForLocale(frPath, currentLocale).path;
  const navItems = [
    { key: "agency", href: toCurrentLocalePath("/") as string, label: navCopy.agency },
    { key: "caseStudies", href: toCurrentLocalePath("/etudes-de-cas") as string, label: navCopy.caseStudies },
    { key: "services", href: toCurrentLocalePath("/services") as string, label: navCopy.services },
    { key: "academy", href: toCurrentLocalePath("/academy") as string, label: navCopy.academy },
  ] as const;
  const consultationHref = toCurrentLocalePath("/consultation");
  const localizedServicesCards = getLocalizedServicesContent(currentLocale).SERVICE_HUB_CARDS.map((service) => ({
    ...service,
    href: toCurrentLocalePath(service.href),
  }));

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileStickyCta, setShowMobileStickyCta] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      setShowMobileStickyCta(y > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesMenuOpen(false);
    setIsMobileServicesOpen(localePath.startsWith("/services"));
  }, [safePathname, localePath]);

  useEffect(() => {
    if (!isServicesMenuOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setIsServicesMenuOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsServicesMenuOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [isServicesMenuOpen]);

  const transparentMode = safePathname === "/" && !isScrolled;
  const servicesActive = localePath === "/services" || localePath.startsWith("/services/");

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-200",
          transparentMode
            ? "border-b border-white/20 bg-transparent"
            : "border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur-md",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1260px] items-center justify-between px-6 md:h-20 md:px-10">
          <Link href={toCurrentLocalePath("/")} className="inline-flex min-h-[44px] items-center" aria-label={navCopy.homeAria}>
            <Image src={mainNav.logo} alt="devlo logo" width={240} height={80} className="h-14 w-auto md:h-16" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label={navCopy.navigationAria}>
            {navItems.map((item) => {
              if (item.key === "services") {
                return (
                  <div
                    key={item.key}
                    ref={servicesMenuRef}
                    className="relative"
                    onMouseEnter={() => setIsServicesMenuOpen(true)}
                    onMouseLeave={() => setIsServicesMenuOpen(false)}
                    onFocusCapture={() => setIsServicesMenuOpen(true)}
                  >
                    <div
                      className={[
                        "group flex items-center gap-1 rounded-full border px-2 py-0.5 transition-colors",
                        isServicesMenuOpen
                          ? "border-devlo-700 bg-devlo-700 text-white"
                          : "border-transparent bg-transparent text-devlo-900 hover:border-devlo-700 hover:bg-devlo-700",
                      ].join(" ")}
                    >
                      <Link
                        href={item.href}
                        className={[
                          "inline-flex min-h-[44px] items-center rounded-full px-2 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devlo-700 focus-visible:ring-offset-2",
                          servicesActive
                            ? (isServicesMenuOpen ? "text-white" : "text-devlo-700")
                            : isServicesMenuOpen
                              ? "text-white"
                              : "text-devlo-900 hover:text-white group-hover:text-white",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={navCopy.openServicesMenu}
                        aria-expanded={isServicesMenuOpen}
                        onClick={() => setIsServicesMenuOpen((prev) => !prev)}
                        className={[
                          "inline-flex h-8 w-8 items-center justify-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devlo-700 focus-visible:ring-offset-2",
                          isServicesMenuOpen
                            ? "text-white hover:bg-white/15"
                            : "text-devlo-700 group-hover:text-white hover:bg-white/15",
                        ].join(" ")}
                      >
                        <ChevronDown className={["h-4 w-4 transition-transform", isServicesMenuOpen ? "rotate-180" : ""].join(" ")} />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isServicesMenuOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          className="absolute right-0 top-[calc(100%+8px)] z-[70] w-[760px] overflow-hidden rounded-2xl border border-devlo-700 bg-devlo-700 p-4 text-white shadow-panel"
                        >
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/80">
                              {navCopy.allServices}
                            </p>
                            <div className="mt-3 grid gap-2 sm:grid-cols-2">
                              {localizedServicesCards.map((service) => (
                                <Link
                                  key={`desktop-menu-${service.href}`}
                                  href={service.href}
                                  className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 transition hover:border-white/40 hover:bg-white/15"
                                >
                                  <p className="text-sm font-semibold text-white">{service.title}</p>
                                  <p className="mt-1 text-xs leading-5 text-white/75">{service.subtitle}</p>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-4 border-t border-white/20 pt-3">
                              <Link
                                href={toCurrentLocalePath("/services")}
                                className="inline-flex rounded-full border border-white/30 bg-white px-3 py-1.5 text-xs font-semibold text-devlo-700 transition hover:bg-devlo-50"
                              >
                                {navCopy.seeAllServices}
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              }

              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "inline-flex min-h-[44px] items-center border-b-2 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors",
                    active ? "border-devlo-600 text-devlo-700" : "border-transparent text-devlo-900 hover:text-devlo-600",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <Link href={consultationHref} className={buttonClassName("outline", "px-5 py-2.5 text-sm")}>
                {navCopy.cta}
              </Link>
            </div>
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? navCopy.closeMenu : navCopy.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-devlo-900 md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <Image src={mainNav.logo} alt="devlo logo" width={120} height={40} className="h-7 w-auto" />
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200"
                aria-label={navCopy.closeMenu}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 space-y-2">
              <LanguageSwitcher mobile />
              {navItems.map((item) => {
                if (item.key === "services") {
                  return (
                    <div key={`mobile-${item.key}`} className="rounded-xl border border-neutral-200 p-2">
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={item.href}
                          className={[
                            "flex min-h-[44px] flex-1 items-center rounded-lg px-3 py-2 text-xl font-semibold",
                            servicesActive ? "bg-devlo-50 text-devlo-700" : "text-devlo-900",
                          ].join(" ")}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-devlo-700"
                          aria-label={navCopy.showServices}
                        >
                          <ChevronDown className={["h-4 w-4 transition-transform", isMobileServicesOpen ? "rotate-180" : ""].join(" ")} />
                        </button>
                      </div>

                      <AnimatePresence>
                        {isMobileServicesOpen ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 overflow-hidden"
                          >
                            <div className="grid gap-1.5">
                              {localizedServicesCards.map((service) => (
                                <Link
                                  key={`mobile-service-${service.href}`}
                                  href={service.href}
                                  className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 transition hover:border-devlo-700/30"
                                >
                                  <p className="text-sm font-semibold text-devlo-900">{service.title}</p>
                                  <p className="text-xs text-neutral-500">{service.subtitle}</p>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 border-t border-neutral-200 pt-2">
                              <Link
                                href={toCurrentLocalePath("/services")}
                                className="inline-flex min-h-[40px] items-center rounded-lg border border-neutral-200 bg-white px-3 text-sm font-semibold text-devlo-700"
                              >
                                {navCopy.seeAllServices}
                              </Link>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "flex min-h-[44px] items-center rounded-lg px-4 py-3 text-xl font-semibold",
                      isActive(pathname, item.href) ? "bg-devlo-50 text-devlo-700" : "text-devlo-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <Link href={consultationHref} className={buttonClassName("primary", "mt-8 w-full py-4 text-base")}>
              {navCopy.cta}
            </Link>
          </motion.aside>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showMobileStickyCta ? (
          <motion.div
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            exit={{ y: 120 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-200 bg-white px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden"
          >
            <Link href={consultationHref} className={buttonClassName("primary", "w-full py-4 text-base")}>
              {navCopy.cta}
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
