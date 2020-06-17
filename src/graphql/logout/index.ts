import "reflect-metadata";
import { Resolver, Query, Mutation, Ctx } from "type-graphql";
import { Empty } from "../types/emtpy";
import { credentials } from "grpc";
import { AuthServiceClient } from "../../megatreopuz-protos/auth_grpc_pb";
import { Empty as grpcEmpty } from "../../megatreopuz-protos/auth_pb";
import { makeRPCCall } from "../../utils/handleUnaryGrpc";
import { ContextType } from "..";
import { normalizeError } from "../../utils";

@Resolver()
export class LogoutResolver {
    @Mutation(() => Empty)
    async logout(@Ctx() { res }: ContextType): Promise<Empty> {
        const client = new AuthServiceClient(
            process.env.AUTH_GRPC_SERVER ?? "",
            credentials.createInsecure()
        );
        const logout = new grpcEmpty();

        try {
            await makeRPCCall<grpcEmpty, grpcEmpty>(
                client,
                client.logout,
                logout
            );

            res.clearCookie("accessToken");
            res.clearCookie("refreshToken");
        } catch (e) {
            throw normalizeError(e);
        }

        return new Empty();
    }
}
