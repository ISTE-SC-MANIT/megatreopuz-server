// GENERATED CODE -- DO NOT EDIT!

// package: auth
// file: auth.proto

import * as auth_pb from "./auth_pb";
import * as utils_pb from "./utils_pb";
import * as grpc from "grpc";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createLocalPlayer: grpc.MethodDefinition<auth_pb.CreateLocalPlayerRequest, utils_pb.Empty>;
  checkUsernameAvailability: grpc.MethodDefinition<auth_pb.CheckUsernameAvailabilityRequest, auth_pb.CheckUsernameAvailabilityResponse>;
  checkUserState: grpc.MethodDefinition<utils_pb.Empty, auth_pb.CheckStateResponse>;
}

export const AuthServiceService: IAuthServiceService;

export class AuthServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createLocalPlayer(argument: auth_pb.CreateLocalPlayerRequest, callback: grpc.requestCallback<utils_pb.Empty>): grpc.ClientUnaryCall;
  createLocalPlayer(argument: auth_pb.CreateLocalPlayerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<utils_pb.Empty>): grpc.ClientUnaryCall;
  createLocalPlayer(argument: auth_pb.CreateLocalPlayerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<utils_pb.Empty>): grpc.ClientUnaryCall;
  checkUsernameAvailability(argument: auth_pb.CheckUsernameAvailabilityRequest, callback: grpc.requestCallback<auth_pb.CheckUsernameAvailabilityResponse>): grpc.ClientUnaryCall;
  checkUsernameAvailability(argument: auth_pb.CheckUsernameAvailabilityRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<auth_pb.CheckUsernameAvailabilityResponse>): grpc.ClientUnaryCall;
  checkUsernameAvailability(argument: auth_pb.CheckUsernameAvailabilityRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<auth_pb.CheckUsernameAvailabilityResponse>): grpc.ClientUnaryCall;
  checkUserState(argument: utils_pb.Empty, callback: grpc.requestCallback<auth_pb.CheckStateResponse>): grpc.ClientUnaryCall;
  checkUserState(argument: utils_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<auth_pb.CheckStateResponse>): grpc.ClientUnaryCall;
  checkUserState(argument: utils_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<auth_pb.CheckStateResponse>): grpc.ClientUnaryCall;
}
