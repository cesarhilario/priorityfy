import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { token } = body;

  if (!token) {
    return new NextResponse("Missing token", { status: 400 });
  }

  const cookie = serialize("__session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // só true em produção HTTPS
    path: "/",
    maxAge: 60 * 60 * 24 * 5, // 5 dias
    sameSite: "lax", // evita problemas de CSRF
  });

  const response = new NextResponse("Session set", { status: 200 });
  response.headers.set("Set-Cookie", cookie);
  return response;
}
