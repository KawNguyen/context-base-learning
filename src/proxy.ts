import type { NextRequest } from "next/server";

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
}

export const config = {
  matcher: "/((?!_next|api|static|favicon.ico).*)",
};
