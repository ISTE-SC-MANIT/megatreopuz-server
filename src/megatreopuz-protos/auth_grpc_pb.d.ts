// GENERATED CODE -- DO NOT EDIT!

// package: auth
// file: megatreopuz-protos/auth.proto

import * as megatreopuz_protos_auth_pb from "../megatreopuz-protos/auth_pb";
import * as grpc from "grpc";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  login: grpc.MethodDefinition<megatreopuz_protos_auth_pb.LoginRequest, megatreopuz_protos_auth_pb.LoginResponse>;
  logout: grpc.MethodDefinition<megatreopuz_protos_auth_pb.Empty, megatreopuz_protos_auth_pb.Empty>;
  validateUser: grpc.MethodDefinition<megatreopuz_protos_auth_pb.Empty, megatreopuz_protos_auth_pb.Status>;
  sendPasswordRecoveryEmail: grpc.MethodDefinition<megatreopuz_protos_auth_pb.SendPasswordRecoveryEmailRequest, megatreopuz_protos_auth_pb.Empty>;
  updatePassword: grpc.MethodDefinition<megatreopuz_protos_auth_pb.UpdatePasswordRequest, megatreopuz_protos_auth_pb.Empty>;
}

export const AuthServiceService: IAuthServiceService;

export class AuthServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  login(argument: megatreopuz_protos_auth_pb.LoginRequest, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: megatreopuz_protos_auth_pb.LoginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: megatreopuz_protos_auth_pb.LoginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.LoginResponse>): grpc.ClientUnaryCall;
  logout(argument: megatreopuz_protos_auth_pb.Empty, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Empty>): grpc.ClientUnaryCall;
  logout(argument: megatreopuz_protos_auth_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Empty>): grpc.ClientUnaryCall;
  logout(argument: megatreopuz_protos_auth_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Empty>): grpc.ClientUnaryCall;
  validateUser(argument: megatreopuz_protos_auth_pb.Empty, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Status>): grpc.ClientUnaryCall;
  validateUser(argument: megatreopuz_protos_auth_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Status>): grpc.ClientUnaryCall;
  validateUser(argument: megatreopuz_protos_auth_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Status>): grpc.ClientUnaryCall;
  sendPasswordRecoveryEmail(argument: megatreopuz_protos_auth_pb.SendPasswordRecoveryEmailRequest, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Empty>): grpc.ClientUnaryCall;
  sendPasswordRecoveryEmail(argument: megatreopuz_protos_auth_pb.SendPasswordRecoveryEmailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Empty>): grpc.ClientUnaryCall;
  sendPasswordRecoveryEmail(argument: megatreopuz_protos_auth_pb.SendPasswordRecoveryEmailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Empty>): grpc.ClientUnaryCall;
  updatePassword(argument: megatreopuz_protos_auth_pb.UpdatePasswordRequest, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Empty>): grpc.ClientUnaryCall;
  updatePassword(argument: megatreopuz_protos_auth_pb.UpdatePasswordRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Empty>): grpc.ClientUnaryCall;
  updatePassword(argument: megatreopuz_protos_auth_pb.UpdatePasswordRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<megatreopuz_protos_auth_pb.Empty>): grpc.ClientUnaryCall;
}
