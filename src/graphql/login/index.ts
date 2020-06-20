import "reflect-metadata";
import { Resolver, Arg, Query, Mutation, Ctx } from "type-graphql";
import { LoginInput } from "./input";
import { Empty } from "../types/emtpy";
import { credentials } from "grpc";
import { AuthServiceClient } from "../../megatreopuz-protos/auth_grpc_pb";
import { LoginRequest, LoginResponse } from "../../megatreopuz-protos/auth_pb";
import { makeRPCCall } from "../../utils/handleUnaryGrpc";
import { ContextType } from "..";
import { defaultCookieOptions, normalizeError } from "../../utils/others";
import { CookieOptions } from "express";
import extractCredentials from "../../utils/extractCredentials";

@Resolver()
export class LoginResolver {
    @Query()
    dummyQuery(@Ctx() { req }: ContextType): string {
        const creds = extractCredentials(req);
        console.log("\n");
        console.log("Returning: ", creds?.refreshToken ?? "hello World");
        return creds?.refreshToken ?? "hello World";
    }

    @Mutation((returns) => Empty)
    async login(
        @Arg("credentials") { username, password }: LoginInput,
        @Arg("remember", { defaultValue: false }) remember: boolean,
        @Ctx() { res }: ContextType
    ): Promise<Empty> {
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
                throw new Error(
                    `Server did not send a access token expiration.`
                );
            }

            if (!refreshExpires) {
                throw new Error(
                    `Server did not send a refresh token expiration.`
                );
            }

            res.cookie("accessToken", accessToken, {
                ...defaultCookieOptions,
                expires: accessExpires.toDate(),
            });

            const refreshOptions: CookieOptions = {
                ...defaultCookieOptions,
            };

            if (remember) refreshOptions.expires = refreshExpires.toDate();
            res.cookie("refreshToken", refreshToken, refreshOptions);
        } catch (e) {
            throw normalizeError(e);
        }

        return new Empty();
    }
}
