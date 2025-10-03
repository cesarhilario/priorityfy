import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST() {
  const cookie = serialize("__session-priorityfy", "", {
    path: "/",
    expires: new Date(0),
    httpOnly: true,
    sameSite: "lax",
  });

  const response = NextResponse.json({ message: "Logout realizado" });
  response.headers.set("Set-Cookie", cookie);
  return response;
}
