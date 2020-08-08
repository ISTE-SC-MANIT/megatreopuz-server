import { Resolver, Field, Mutation, Ctx, InputType, Arg } from "type-graphql";
import { Empty as grpcEmpty } from "../protos/utils_pb";
import { makeRPCCall } from "../utils/handleUnaryGrpc";
import { ContextType } from ".";
import {
  CreateLocalPlayerRequest,
  UpdateLocalPlayerRequest,
} from "../protos/user_pb";
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

@InputType()
class UserUpdateInput {
  @Field({ nullable: true })
  @MinLength(1)
  name: string;

  @Field({ nullable: true })
  @MinLength(1)
  college: string;

  @Field({ nullable: true })
  @MinLength(1)
  country: string;

  @Field({ nullable: true })
  @MinLength(1)
  phone: string;

  @Field({ nullable: true })
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
  @Mutation((returns) => Empty)
  async updateLocalUser(
    @Arg("input") payload: UserUpdateInput,
    @Ctx() { userClient, authToken }: ContextType
  ): Promise<Empty> {
    if (!authToken) throw new Error(`User is not logged in`);

    try {
      const input = new UpdateLocalPlayerRequest();
      if (payload.name.length > 0) input.setName(payload.name);
      if (payload.country.length > 0) input.setCountry(payload.country);
      if (payload.college.length > 0) input.setCollege(payload.college);
      if (payload.phone.length > 0) input.setPhone(payload.phone);
      if (payload.year > 0) input.setYear(payload.year);
      await makeRPCCall<grpcEmpty, UpdateLocalPlayerRequest>(
        userClient,
        userClient.updateLocalPlayer,
        input,
        {
          authorization: authToken,
        }
      );
      return new Empty();
    } catch (e) {
      throw new Error(`Could not update user. Please try again`);
    }
  }
}
