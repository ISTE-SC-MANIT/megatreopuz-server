import { Router, json } from "express";
import cookieParser from "cookie-parser";
import { Empty } from "../megatreopuz-protos/auth_pb";
import { AuthServiceClient } from "../megatreopuz-protos/auth_grpc_pb";
import { credentials } from "grpc";
import { makeRPCCall } from "../utils/handleUnaryGrpc";
import { normalizeError } from "../utils";

const router = Router();

router.use(cookieParser(process.env.COOKIE_SECRET), json());
router.post("/logout", async (req, res) => {
    const { accessToken, refreshToken } = req.signedCookies;

    const client = new AuthServiceClient(
        process.env.AUTH_GRPC_SERVER ?? "",
        credentials.createInsecure()
    );

    const empty = new Empty();

    try {
        await makeRPCCall<Empty, Empty>(client, client.logout, empty, {
            authorization: accessToken,
            refresh: refreshToken,
        });
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        res.send({ error: null });
    } catch (e) {
        res.send({ error: normalizeError(e).message });
    }
});

export default router;
