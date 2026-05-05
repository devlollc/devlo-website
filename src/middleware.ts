import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function resolveLocale(pathname: string): "fr" | "en" | "de" | "nl" {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/nl" || pathname.startsWith("/nl/")) return "nl";
  return "fr";
}

function isPaidMirrorHost(request: NextRequest) {
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || request.nextUrl.host;
  const hostname = host.split(":")[0]?.toLowerCase();
  return hostname === "devlosales.com" || hostname === "www.devlosales.com";
}

export function middleware(request: NextRequest) {
  const locale = resolveLocale(request.nextUrl.pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-devlo-locale", locale);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  if (isPaidMirrorHost(request)) {
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
