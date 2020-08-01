import { CookieOptions } from "express";

export const defaultCookieOptions: CookieOptions = {
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
};

export const expiresIn: number = 6.048e8;
