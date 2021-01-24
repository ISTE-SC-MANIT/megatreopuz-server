import {
  Resolver,
  Field,
  Mutation,
  Ctx,
  InputType,
  Arg,
  ObjectType,
  Int,
  Query,
} from "type-graphql";
import { Empty as grpcEmpty } from "../protos/utils_pb";

import { makeRPCCall } from "../utils/handleUnaryGrpc";
import { ContextType } from ".";
import {
  CreateLocalPlayerRequest,
  UpdateLocalPlayerRequest,
  getPlayerResponse,
  AnswerQuestion,
  GetNextQuestionRespone,
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
  userName: string;

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

@InputType()
class AnswerQuestionInput {
  @Field()
  @MinLength(1)
  email: string;

  @Field()
  @MinLength(1)
  answer: string;

  @Field({ nullable: true })
  @Min(1)
  questionNo: number;
}

@ObjectType()
export class User {
  constructor(
    id: string,
    username: string,
    name: string,
    phone: string,
    year: number,
    email: string,
    college: string,
    country: string
  ) {
    this.id = id;
    this.userName = username;
    this.name = name;
    this.phone = phone;
    this.year = year;
    this.email = email;
    this.college = college;
    this.country = country;
  }

  @Field()
  id: string;

  @Field()
  userName: string;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  college: string;

  @Field()
  email: string;

  @Field()
  country: string;

  @Field((type) => Int)
  year: number;
}

@ObjectType()
export class Question {
  constructor(question: string, questionNo: number) {
    this.question = question;
    this.questionNo = questionNo;
  }

  @Field()
  question: string;

  @Field((type) => Int)
  questionNo: number;
}
@Resolver()
export class UserClass {
  @Query((returns) => User)
  async getPlayer(
    @Ctx() { userClient, authToken, req }: ContextType
  ): Promise<User> {
    try {
      const empty = new grpcEmpty();
      const result = await makeRPCCall<getPlayerResponse, grpcEmpty>(
        userClient,
        userClient.getPlayer,
        empty,
        {
          //@ts-ignore
          authorization: req.header("authorization"),
        }
      );

      return new User(
        result.getId(),
        result.getUsername(),
        result.getName(),
        result.getPhone(),
        result.getYear(),
        result.getEmail(),
        result.getCollege(),
        result.getCountry()
      );
    } catch (e) {
      throw new Error(`Could not check database`);
    }
  }

  @Query((returns) => Question)
  async getQuestion(
    @Ctx() { userClient, authToken, req }: ContextType
  ): Promise<Question> {
    try {
      const empty = new grpcEmpty();
      const result = await makeRPCCall<GetNextQuestionRespone, grpcEmpty>(
        userClient,
        userClient.getNextQuestion,
        empty,
        {
          //@ts-ignore
          authorization: req.header("authorization"),
        }
      );

      return new Question(result.getQuestion(), result.getQuestionno());
    } catch (e) {
      throw new Error(`Could not check database`);
    }
  }

  @Mutation((returns) => Empty)
  async createLocalUser(
    @Arg("input") payload: UserCreateInput,
    @Ctx() { userClient, authToken, req }: ContextType
  ): Promise<Empty> {
    //if (!authToken) throw new Error(`User is not logged in`);
    console.log("sad");
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
          //@ts-ignore
          authorization: req.header("authorization"),
        }
      );
      return new Empty();
    } catch (e) {
      console.log(e);
      throw new Error(`Could not create user. Please try again`);
    }
  }
  @Mutation((returns) => Empty)
  async updateLocalUser(
    @Arg("input") payload: UserUpdateInput,
    @Ctx() { userClient, authToken, req }: ContextType
  ): Promise<Empty> {
    // if (!authToken) throw new Error(`User is not logged in`);

    try {
      const input = new UpdateLocalPlayerRequest();

      if (payload.userName && payload.userName.length > 0)
        input.setUsername(payload.userName);
      if (payload.name && payload.name.length > 0) input.setName(payload.name);
      if (payload.country && payload.country.length > 0)
        input.setCountry(payload.country);
      if (payload.college && payload.college.length > 0)
        input.setCollege(payload.college);
      if (payload.phone && payload.phone.length > 0)
        input.setPhone(payload.phone);
      if (payload.year && payload.year > 0) input.setYear(payload.year);
      await makeRPCCall<grpcEmpty, UpdateLocalPlayerRequest>(
        userClient,
        userClient.updateLocalPlayer,
        input,
        {
          //@ts-ignore
          authorization: req.header("authorization"),
        }
      );
      return new Empty();
    } catch (e) {
      throw new Error(`Could not update user. Please try again`);
    }
  }
  @Mutation((returns) => Empty)
  async answerQuestion(
    @Arg("input") payload: AnswerQuestionInput,
    @Ctx() { userClient, authToken, req }: ContextType
  ): Promise<Empty> {
    // if (!authToken) throw new Error(`User is not logged in`);

    try {
      const input = new AnswerQuestion();

      input.setAnswer(payload.answer);
      input.setEmail(payload.email);
      input.setQuestionno(payload.questionNo);
      await makeRPCCall<grpcEmpty, AnswerQuestion>(
        userClient,
        userClient.answerQuestion,
        input,
        {
          //@ts-ignore
          authorization: req.header("authorization"),
        }
      );
      return new Empty();
    } catch (e) {
      throw new Error(`Could not update user. Please try again`);
    }
  }
}
