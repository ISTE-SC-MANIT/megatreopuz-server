import { CookieOptions } from "express";

export const defaultCookieOptions: CookieOptions = {
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
};
