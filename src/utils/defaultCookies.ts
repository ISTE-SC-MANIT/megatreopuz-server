import { CookieOptions } from "express";

export const defaultCookieOptions: CookieOptions = {
  sameSite: "lax",
  httpOnly: true,
  domain: "https://megatreopuz.istemanit.in",
  // secure: process.env.NODE_ENV === "production",
  // path: "/",
};

export const expiresIn: number = 6.048e8;
