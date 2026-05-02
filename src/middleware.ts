import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function resolveLocale(pathname: string): "fr" | "en" | "de" | "nl" {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/nl" || pathname.startsWith("/nl/")) return "nl";
  return "fr";
}

function normalizeHostname(host: string | null) {
  if (!host) return false;

  const normalizedHostname = host.split(":")[0]?.toLowerCase();
  return normalizedHostname === "devlosales.com" || normalizedHostname === "www.devlosales.com";
}

function isPaidHost(request: NextRequest) {
  return [
    request.headers.get("host"),
    request.headers.get("x-forwarded-host"),
    request.nextUrl.hostname,
  ].some(normalizeHostname);
}

export function middleware(request: NextRequest) {
  const locale = resolveLocale(request.nextUrl.pathname);
  const paidHost = isPaidHost(request);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-devlo-locale", locale);
  if (paidHost) {
    requestHeaders.set("x-devlo-paid-host", "1");
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (paidHost) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  response.cookies.set("devlo_locale", locale, {
    path: "/",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|images|fonts|favicon.ico|site.webmanifest|robots.txt|sitemap.xml).*)"],
};
