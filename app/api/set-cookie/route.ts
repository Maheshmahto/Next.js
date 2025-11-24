// app/api/set-cookie/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const token: string | undefined = body?.token;

  if (!token) {
    return NextResponse.json(
      { success: false, message: "Missing token" },
      { status: 400 }
    );
  }

  // Create response
  const res = NextResponse.json({ success: true });

  // Set httpOnly cookie (NO ENV USED)
  res.cookies.set("token", token, {
    httpOnly: true,
    secure: true,        // Always secure for production safety
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return res;
}
