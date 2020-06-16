export const defaultCookieOptions = {
    signed: true,
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
};

export const normalizeError = (e: unknown): Error =>
    e instanceof Error
        ? e
        : typeof e === "string"
        ? new Error(e)
        : new Error(`Unknown error occured`);
