// package: protos
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";
import * as utils_pb from "./utils_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createLocalPlayer: IUserServiceService_IcreateLocalPlayer;
    updateLocalPlayer: IUserServiceService_IupdateLocalPlayer;
    getPlayer: IUserServiceService_IgetPlayer;
    answerQuestion: IUserServiceService_IanswerQuestion;
    getNextQuestion: IUserServiceService_IgetNextQuestion;
    createQuestion: IUserServiceService_IcreateQuestion;
    getLeaderBoard: IUserServiceService_IgetLeaderBoard;
}

interface IUserServiceService_IcreateLocalPlayer extends grpc.MethodDefinition<user_pb.CreateLocalPlayerRequest, utils_pb.Empty> {
    path: "/protos.UserService/createLocalPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.CreateLocalPlayerRequest>;
    requestDeserialize: grpc.deserialize<user_pb.CreateLocalPlayerRequest>;
    responseSerialize: grpc.serialize<utils_pb.Empty>;
    responseDeserialize: grpc.deserialize<utils_pb.Empty>;
}
interface IUserServiceService_IupdateLocalPlayer extends grpc.MethodDefinition<user_pb.UpdateLocalPlayerRequest, utils_pb.Empty> {
    path: "/protos.UserService/updateLocalPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UpdateLocalPlayerRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UpdateLocalPlayerRequest>;
    responseSerialize: grpc.serialize<utils_pb.Empty>;
    responseDeserialize: grpc.deserialize<utils_pb.Empty>;
}
interface IUserServiceService_IgetPlayer extends grpc.MethodDefinition<utils_pb.Empty, user_pb.getPlayerResponse> {
    path: "/protos.UserService/getPlayer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<utils_pb.Empty>;
    requestDeserialize: grpc.deserialize<utils_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.getPlayerResponse>;
    responseDeserialize: grpc.deserialize<user_pb.getPlayerResponse>;
}
interface IUserServiceService_IanswerQuestion extends grpc.MethodDefinition<user_pb.AnswerQuestion, utils_pb.Empty> {
    path: "/protos.UserService/answerQuestion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.AnswerQuestion>;
    requestDeserialize: grpc.deserialize<user_pb.AnswerQuestion>;
    responseSerialize: grpc.serialize<utils_pb.Empty>;
    responseDeserialize: grpc.deserialize<utils_pb.Empty>;
}
interface IUserServiceService_IgetNextQuestion extends grpc.MethodDefinition<utils_pb.Empty, user_pb.GetNextQuestionRespone> {
    path: "/protos.UserService/getNextQuestion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<utils_pb.Empty>;
    requestDeserialize: grpc.deserialize<utils_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.GetNextQuestionRespone>;
    responseDeserialize: grpc.deserialize<user_pb.GetNextQuestionRespone>;
}
interface IUserServiceService_IcreateQuestion extends grpc.MethodDefinition<user_pb.CreateQuestionRequest, utils_pb.Empty> {
    path: "/protos.UserService/createQuestion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.CreateQuestionRequest>;
    requestDeserialize: grpc.deserialize<user_pb.CreateQuestionRequest>;
    responseSerialize: grpc.serialize<utils_pb.Empty>;
    responseDeserialize: grpc.deserialize<utils_pb.Empty>;
}
interface IUserServiceService_IgetLeaderBoard extends grpc.MethodDefinition<utils_pb.Empty, user_pb.GetLeaderBoardResponse> {
    path: "/protos.UserService/getLeaderBoard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<utils_pb.Empty>;
    requestDeserialize: grpc.deserialize<utils_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.GetLeaderBoardResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetLeaderBoardResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    createLocalPlayer: grpc.handleUnaryCall<user_pb.CreateLocalPlayerRequest, utils_pb.Empty>;
    updateLocalPlayer: grpc.handleUnaryCall<user_pb.UpdateLocalPlayerRequest, utils_pb.Empty>;
    getPlayer: grpc.handleUnaryCall<utils_pb.Empty, user_pb.getPlayerResponse>;
    answerQuestion: grpc.handleUnaryCall<user_pb.AnswerQuestion, utils_pb.Empty>;
    getNextQuestion: grpc.handleUnaryCall<utils_pb.Empty, user_pb.GetNextQuestionRespone>;
    createQuestion: grpc.handleUnaryCall<user_pb.CreateQuestionRequest, utils_pb.Empty>;
    getLeaderBoard: grpc.handleUnaryCall<utils_pb.Empty, user_pb.GetLeaderBoardResponse>;
}

export interface IUserServiceClient {
    createLocalPlayer(request: user_pb.CreateLocalPlayerRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    createLocalPlayer(request: user_pb.CreateLocalPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    createLocalPlayer(request: user_pb.CreateLocalPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    updateLocalPlayer(request: user_pb.UpdateLocalPlayerRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    updateLocalPlayer(request: user_pb.UpdateLocalPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    updateLocalPlayer(request: user_pb.UpdateLocalPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    getPlayer(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.getPlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.getPlayerResponse) => void): grpc.ClientUnaryCall;
    getPlayer(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.getPlayerResponse) => void): grpc.ClientUnaryCall;
    answerQuestion(request: user_pb.AnswerQuestion, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    answerQuestion(request: user_pb.AnswerQuestion, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    answerQuestion(request: user_pb.AnswerQuestion, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    getNextQuestion(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.GetNextQuestionRespone) => void): grpc.ClientUnaryCall;
    getNextQuestion(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetNextQuestionRespone) => void): grpc.ClientUnaryCall;
    getNextQuestion(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetNextQuestionRespone) => void): grpc.ClientUnaryCall;
    createQuestion(request: user_pb.CreateQuestionRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    createQuestion(request: user_pb.CreateQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    createQuestion(request: user_pb.CreateQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    getLeaderBoard(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.GetLeaderBoardResponse) => void): grpc.ClientUnaryCall;
    getLeaderBoard(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetLeaderBoardResponse) => void): grpc.ClientUnaryCall;
    getLeaderBoard(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetLeaderBoardResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createLocalPlayer(request: user_pb.CreateLocalPlayerRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public createLocalPlayer(request: user_pb.CreateLocalPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public createLocalPlayer(request: user_pb.CreateLocalPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateLocalPlayer(request: user_pb.UpdateLocalPlayerRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateLocalPlayer(request: user_pb.UpdateLocalPlayerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateLocalPlayer(request: user_pb.UpdateLocalPlayerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public getPlayer(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.getPlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.getPlayerResponse) => void): grpc.ClientUnaryCall;
    public getPlayer(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.getPlayerResponse) => void): grpc.ClientUnaryCall;
    public answerQuestion(request: user_pb.AnswerQuestion, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public answerQuestion(request: user_pb.AnswerQuestion, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public answerQuestion(request: user_pb.AnswerQuestion, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public getNextQuestion(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.GetNextQuestionRespone) => void): grpc.ClientUnaryCall;
    public getNextQuestion(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetNextQuestionRespone) => void): grpc.ClientUnaryCall;
    public getNextQuestion(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetNextQuestionRespone) => void): grpc.ClientUnaryCall;
    public createQuestion(request: user_pb.CreateQuestionRequest, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public createQuestion(request: user_pb.CreateQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public createQuestion(request: user_pb.CreateQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: utils_pb.Empty) => void): grpc.ClientUnaryCall;
    public getLeaderBoard(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.GetLeaderBoardResponse) => void): grpc.ClientUnaryCall;
    public getLeaderBoard(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetLeaderBoardResponse) => void): grpc.ClientUnaryCall;
    public getLeaderBoard(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetLeaderBoardResponse) => void): grpc.ClientUnaryCall;
}
