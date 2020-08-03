import { Resolver, Field, Mutation, Ctx, InputType, Arg } from "type-graphql";
import { Empty as grpcEmpty } from "../protos/utils_pb";
import { makeRPCCall } from "../utils/handleUnaryGrpc";
import { ContextType } from ".";
import { CreateLocalPlayerRequest } from "../protos/user_pb";
import { MinLength, Min } from "class-validator";
import { Empty } from "./empty";
@InputType()
class UserCreateInput {
    @Field()
    @MinLength(1)
    name: string;

    @Field()
    @MinLength(1)
    username: string;

    @Field()
    @MinLength(1)
    college: string;

    @Field()
    @MinLength(1)
    country: string;

    @Field()
    @MinLength(1)
    phone: string;

    @Field()
    @Min(1)
    year: number;
}

@Resolver()
export class UserClass {
    @Mutation((returns) => Empty)
    async createLocalUser(
        @Arg("input") payload: UserCreateInput,
        @Ctx() { userClient, authToken }: ContextType
    ): Promise<Empty> {
        if (!authToken) throw new Error(`User is not logged in`);

        try {
            const input = new CreateLocalPlayerRequest();
            input.setName(payload.name);
            input.setCountry(payload.country);
            input.setCollege(payload.college);
            input.setPhone(payload.phone);
            input.setUsername(payload.username);
            input.setYear(payload.year);
            await makeRPCCall<grpcEmpty, CreateLocalPlayerRequest>(
                userClient,
                userClient.createLocalPlayer,
                input,
                {
                    authorization: authToken,
                }
            );
            return new Empty();
        } catch (e) {
            throw new Error(`Could not create user. Please try again`);
        }
    }
}
