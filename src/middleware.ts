import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

// Routes that should NOT be locale-prefixed
const excludedPaths = ["/success", "/api", "/_next", "/favicon.ico"];

function getLocale(request: NextRequest): string {
  // Check cookie first
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language");
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().toLowerCase().slice(0, 2));
    for (const lang of preferred) {
      if (locales.includes(lang)) {
        return lang;
      }
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip excluded paths
  for (const excluded of excludedPaths) {
    if (pathname.startsWith(excluded)) {
      return NextResponse.next();
    }
  }

  // Skip files with extensions
  if (pathname.includes(".")) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Handle root path
  if (pathname === "/") {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  // Only match paths that are NOT static files, NOT _next, NOT success
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|success|api|images|fonts|manifest.json|robots.txt|apple-touch-icon.png|icon-192.png).*)",
  ],
};
