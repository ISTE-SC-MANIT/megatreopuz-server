import { Router, json } from "express";
import cookieParser from "cookie-parser";
import { LoginRequest, LoginResponse } from "../megatreopuz-protos/auth_pb";
import { AuthServiceClient } from "../megatreopuz-protos/auth_grpc_pb";
import { credentials } from "grpc";
import { defaultCookieOptions, normalizeError } from "../utils";
import { makeRPCCall } from "../utils/handleUnaryGrpc";

const router = Router();

router.use(cookieParser(process.env.COOKIE_SECRET), json());
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (!username) {
        res.send({ error: "Username is required" });
        return;
    }

    if (!password) {
        res.send({ error: "Password is required" });
        return;
    }

    const client = new AuthServiceClient(
        process.env.AUTH_GRPC_SERVER ?? "",
        credentials.createInsecure()
    );
    const login = new LoginRequest();
    login.setUsername(username);
    login.setPassword(password);

    try {
        const value = await makeRPCCall<LoginResponse, LoginRequest>(
            client,
            client.login,
            login
        );
        const accessToken = value.getAcesstoken();
        const refreshToken = value.getRefreshtoken();
        const accessExpires = value.getAccesstokenexpiry();
        const refreshExpires = value.getRefreshtokenexpiry();

        if (!accessExpires) {
            res.send({
                error: `Server did not send a access token expiration.`,
            });
            return;
        }

        if (!refreshExpires) {
            res.send({
                error: `Server did not send a refresh token expiration.`,
            });
            return;
        }

        res.cookie("accessToken", accessToken, {
            ...defaultCookieOptions,
            expires: accessExpires.toDate(),
        });

        res.cookie("refreshToken", refreshToken, {
            ...defaultCookieOptions,
            expires: refreshExpires.toDate(),
        });

        res.send({ error: null });
    } catch (e) {
        res.send({ error: normalizeError(e).message });
    }
});

export default router;
