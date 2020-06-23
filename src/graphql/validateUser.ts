import "reflect-metadata";
import { Resolver, Ctx, Query, ObjectType, Field } from "type-graphql";
import { credentials } from "grpc";
import { AuthServiceClient } from "../megatreopuz-protos/auth_grpc_pb";
import { Empty as grpcEmpty, Status } from "../megatreopuz-protos/auth_pb";
import { makeRPCCall, MetadataInput } from "../utils/handleUnaryGrpc";
import { ContextType } from ".";
import { normalizeError, defaultCookieOptions } from "../utils/others";
import extractCredentials from "../utils/extractCredentials";

@Resolver()
export class SessionResolver {
    @Query((returns) => Boolean)
    async isUserLoggedIn(@Ctx() { req, res }: ContextType): Promise<boolean> {
        const client = new AuthServiceClient(
            process.env.AUTH_GRPC_SERVER ?? "",
            credentials.createInsecure()
        );
        const logout = new grpcEmpty();
        const reqCreds = extractCredentials(req);

        const metadata: MetadataInput = {};

        if (reqCreds?.refreshToken) metadata.refresh = reqCreds.refreshToken;
        if (reqCreds?.accessToken)
            metadata.authorization = reqCreds.accessToken;
        try {
            const response = await makeRPCCall<Status, grpcEmpty>(
                client,
                client.validateUser,
                logout,
                metadata
            );

            let x = response.getAccesstoken();
            let y = response.getAccesstokenexpiry();

            if (x && y) {
                res.cookie("accessToken", x, {
                    ...defaultCookieOptions,
                    expires: y.toDate(),
                });
            }

            x = response.getRefreshtoken();
            y = response.getAccesstokenexpiry();

            if (x && y) {
                res.cookie("refreshToken", x, {
                    ...defaultCookieOptions,
                    expires: y.toDate(),
                });
            }
            return response.getIsuserloggedin();
        } catch (e) {
            throw normalizeError(e);
        }
    }
}
