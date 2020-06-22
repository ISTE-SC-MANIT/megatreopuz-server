import "reflect-metadata";
import { Resolver, Mutation, Ctx } from "type-graphql";
import { Empty } from "./types/emtpy";
import { credentials } from "grpc";
import { AuthServiceClient } from "../megatreopuz-protos/auth_grpc_pb";
import { Empty as grpcEmpty } from "../megatreopuz-protos/auth_pb";
import { makeRPCCall, MetadataInput } from "../utils/handleUnaryGrpc";
import { ContextType } from ".";
import { normalizeError } from "../utils/others";
import extractCredentials from "../utils/extractCredentials";

@Resolver()
export class LogoutResolver {
    @Mutation((returns) => Empty)
    async logout(@Ctx() { req, res }: ContextType): Promise<Empty> {
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
            await makeRPCCall<grpcEmpty, grpcEmpty>(
                client,
                client.logout,
                logout,
                metadata
            );

            res.clearCookie("accessToken");
            res.clearCookie("refreshToken");
        } catch (e) {
            throw normalizeError(e);
        }

        return new Empty();
    }
}
