import "reflect-metadata";
import { InputType, Field } from "type-graphql";
import { MinLength } from "class-validator";

@InputType()
export class LoginInput {
    @Field()
    @MinLength(1, { message: "Username cannot be empty" })
    username: string;

    @Field()
    @MinLength(1, { message: "Password cannot be empty" })
    password: string;
}
