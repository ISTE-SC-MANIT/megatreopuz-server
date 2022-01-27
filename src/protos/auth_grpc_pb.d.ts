// package: protos
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_pb from "./auth_pb";
import * as utils_pb from "./utils_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    checkUsernameAvailability: IAuthServiceService_IcheckUsernameAvailability;
    checkUserState: IAuthServiceService_IcheckUserState;
}

interface IAuthServiceService_IcheckUsernameAvailability extends grpc.MethodDefinition<auth_pb.CheckUsernameAvailabilityRequest, auth_pb.CheckUsernameAvailabilityResponse> {
    path: "/protos.AuthService/checkUsernameAvailability";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.CheckUsernameAvailabilityRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.CheckUsernameAvailabilityRequest>;
    responseSerialize: grpc.serialize<auth_pb.CheckUsernameAvailabilityResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.CheckUsernameAvailabilityResponse>;
}
interface IAuthServiceService_IcheckUserState extends grpc.MethodDefinition<utils_pb.Empty, auth_pb.CheckStateResponse> {
    path: "/protos.AuthService/checkUserState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<utils_pb.Empty>;
    requestDeserialize: grpc.deserialize<utils_pb.Empty>;
    responseSerialize: grpc.serialize<auth_pb.CheckStateResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.CheckStateResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer extends grpc.UntypedServiceImplementation {
    checkUsernameAvailability: grpc.handleUnaryCall<auth_pb.CheckUsernameAvailabilityRequest, auth_pb.CheckUsernameAvailabilityResponse>;
    checkUserState: grpc.handleUnaryCall<utils_pb.Empty, auth_pb.CheckStateResponse>;
}

export interface IAuthServiceClient {
    checkUsernameAvailability(request: auth_pb.CheckUsernameAvailabilityRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckUsernameAvailabilityResponse) => void): grpc.ClientUnaryCall;
    checkUsernameAvailability(request: auth_pb.CheckUsernameAvailabilityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckUsernameAvailabilityResponse) => void): grpc.ClientUnaryCall;
    checkUsernameAvailability(request: auth_pb.CheckUsernameAvailabilityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckUsernameAvailabilityResponse) => void): grpc.ClientUnaryCall;
    checkUserState(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckStateResponse) => void): grpc.ClientUnaryCall;
    checkUserState(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckStateResponse) => void): grpc.ClientUnaryCall;
    checkUserState(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckStateResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public checkUsernameAvailability(request: auth_pb.CheckUsernameAvailabilityRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckUsernameAvailabilityResponse) => void): grpc.ClientUnaryCall;
    public checkUsernameAvailability(request: auth_pb.CheckUsernameAvailabilityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckUsernameAvailabilityResponse) => void): grpc.ClientUnaryCall;
    public checkUsernameAvailability(request: auth_pb.CheckUsernameAvailabilityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckUsernameAvailabilityResponse) => void): grpc.ClientUnaryCall;
    public checkUserState(request: utils_pb.Empty, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckStateResponse) => void): grpc.ClientUnaryCall;
    public checkUserState(request: utils_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckStateResponse) => void): grpc.ClientUnaryCall;
    public checkUserState(request: utils_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.CheckStateResponse) => void): grpc.ClientUnaryCall;
}
