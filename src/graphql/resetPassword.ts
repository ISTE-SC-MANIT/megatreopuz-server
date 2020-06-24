import { Resolver, Mutation, Arg, InputType, Field } from "type-graphql";
import { Empty } from "./types/basic";
import { AuthServiceClient } from "../megatreopuz-protos/auth_grpc_pb";
import { credentials } from "grpc";
import {
    SendPasswordRecoveryEmailRequest,
    Empty as grpcEmpty,
    UpdatePasswordRequest,
} from "../megatreopuz-protos/auth_pb";
import { makeRPCCall } from "../utils/handleUnaryGrpc";

@Resolver()
export class ResetPassword {
    @Mutation((returns) => Empty)
    async requestPasswordReset(@Arg("email") email: string): Promise<Empty> {
        const client = new AuthServiceClient(
            process.env.AUTH_GRPC_SERVER ?? "",
            credentials.createInsecure()
        );

        const request = new SendPasswordRecoveryEmailRequest();
        request.setEmail(email);
        await makeRPCCall<grpcEmpty, SendPasswordRecoveryEmailRequest>(
            client,
            client.sendPasswordRecoveryEmail,
            request
        );

        return new Empty();
    }

    @Mutation((returns) => Empty)
    async updatePassword(
        @Arg("code") code: string,
        @Arg("newPassword") newPassword: string
    ): Promise<Empty> {
        const client = new AuthServiceClient(
            process.env.AUTH_GRPC_SERVER ?? "",
            credentials.createInsecure()
        );

        const request = new UpdatePasswordRequest();
        request.setNewpassword(newPassword);
        request.setPasswordid(code);
        await makeRPCCall<grpcEmpty, UpdatePasswordRequest>(
            client,
            client.updatePassword,
            request
        );

        return new Empty();
    }
}
