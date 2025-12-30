import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["en", "vi"];
const LOCALE_COOKIE = "cbl_locale";

export function proxy(req: NextRequest) {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  // Skip internal and static paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return;
  }

  const firstSegment = pathname.split("/")[1];

  // If already has supported locale, continue
  if (SUPPORTED_LOCALES.includes(firstSegment)) return;

  // Check cookie
  const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) {
    const url = new URL(`/${cookieLocale}${pathname}`, req.url);
    return NextResponse.redirect(url);
  }

  // Default new visitors to English (/en)
  const detected = "en";

  const dest = new URL(`/${detected}${pathname}`, req.url);
  const res = NextResponse.redirect(dest);
  // Set cookie so future visits use the chosen locale
  res.cookies.set(LOCALE_COOKIE, detected, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}

export const config = {
  matcher: "/((?!_next|api|static|favicon.ico).*)",
};
