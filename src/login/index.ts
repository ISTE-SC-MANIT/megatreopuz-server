import { Router, json } from "express";
import cookieParser from "cookie-parser";

const router = Router();

router.post(
    "/login",
    json(),
    cookieParser(process.env.COOKIE_SECRET ?? ""),
    (req, res) => {
        console.log(req.cookies);
        res.sendStatus(200);
    }
);

export default router;
