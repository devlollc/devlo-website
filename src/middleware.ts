import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function resolveLocale(pathname: string): "fr" | "en" | "de" | "nl" {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/nl" || pathname.startsWith("/nl/")) return "nl";
  return "fr";
}

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-devlo-locale", resolveLocale(request.nextUrl.pathname));
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next|api|images|fonts|favicon.ico|site.webmanifest|robots.txt|sitemap.xml).*)"],
};
