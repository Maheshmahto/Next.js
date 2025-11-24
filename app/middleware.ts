// middleware.ts
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = process.env.JWT_SECRET || "";

export async function middleware(request: any) {
  const pathname = request.nextUrl.pathname;

  // Allow public paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/unauthorized") ||
    pathname === "/"
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(SECRET));
    // payload.role expected: "SUPER_ADMIN" or "EMPLOYEE"
    const role = (payload as any).role as string | undefined;

    // Define access matrix
    const access: Record<string, string[]> = {
      SUPER_ADMIN: ["/admin", "/employee", "/dashboard"],
      EMPLOYEE: ["/employee", "/dashboard"],
    };

    const allowedRoutes = access[role || ""] || [];

    // If route is not part of protected matcher, allow:
    // (We also set matcher below to only check certain routes)
    const isAllowed = allowedRoutes.some((r) => pathname.startsWith(r));

    if (!isAllowed) {
      // You can route users to a /unauthorized page
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    // Passed checks
    return NextResponse.next();
  } catch (err) {
    // invalid token or verification failed
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Restrict middleware to these protected routes only
export const config = {
  matcher: ["/admin/:path*", "/employee/:path*", "/dashboard/:path*"],
};
