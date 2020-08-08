// GENERATED CODE -- DO NOT EDIT!

// package: protos
// file: user.proto

import * as user_pb from "./user_pb";
import * as utils_pb from "./utils_pb";
import * as grpc from "grpc";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createLocalPlayer: grpc.MethodDefinition<user_pb.CreateLocalPlayerRequest, utils_pb.Empty>;
  updateLocalPlayer: grpc.MethodDefinition<user_pb.UpdateLocalPlayerRequest, utils_pb.Empty>;
}

export const UserServiceService: IUserServiceService;

export class UserServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createLocalPlayer(argument: user_pb.CreateLocalPlayerRequest, callback: grpc.requestCallback<utils_pb.Empty>): grpc.ClientUnaryCall;
  createLocalPlayer(argument: user_pb.CreateLocalPlayerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<utils_pb.Empty>): grpc.ClientUnaryCall;
  createLocalPlayer(argument: user_pb.CreateLocalPlayerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<utils_pb.Empty>): grpc.ClientUnaryCall;
  updateLocalPlayer(argument: user_pb.UpdateLocalPlayerRequest, callback: grpc.requestCallback<utils_pb.Empty>): grpc.ClientUnaryCall;
  updateLocalPlayer(argument: user_pb.UpdateLocalPlayerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<utils_pb.Empty>): grpc.ClientUnaryCall;
  updateLocalPlayer(argument: user_pb.UpdateLocalPlayerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<utils_pb.Empty>): grpc.ClientUnaryCall;
}
