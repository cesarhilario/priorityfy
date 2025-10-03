import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("__session-priorityfy")?.value;

  // Permite acesso livre a essas rotas
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/reset-password") ||
    pathname.startsWith("/api") ||
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js)$/i)
  ) {
    // Se estiver na rota /login e tiver token, redireciona para /items
    if (pathname.startsWith("/login") && token) {
      return NextResponse.redirect(new URL("/items", req.url));
    }
    return NextResponse.next();
  }

  // Se não tiver token, redireciona para /login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/register",
    "/login",
    "/reset-password",
    "/",
  ],
};
