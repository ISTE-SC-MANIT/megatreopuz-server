// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var megatreopuz$protos_auth_pb = require('../megatreopuz-protos/auth_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_auth_Empty(arg) {
  if (!(arg instanceof megatreopuz$protos_auth_pb.Empty)) {
    throw new Error('Expected argument of type auth.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_Empty(buffer_arg) {
  return megatreopuz$protos_auth_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginRequest(arg) {
  if (!(arg instanceof megatreopuz$protos_auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginRequest(buffer_arg) {
  return megatreopuz$protos_auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginResponse(arg) {
  if (!(arg instanceof megatreopuz$protos_auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type auth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginResponse(buffer_arg) {
  return megatreopuz$protos_auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  login: {
    path: '/auth.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: megatreopuz$protos_auth_pb.LoginRequest,
    responseType: megatreopuz$protos_auth_pb.LoginResponse,
    requestSerialize: serialize_auth_LoginRequest,
    requestDeserialize: deserialize_auth_LoginRequest,
    responseSerialize: serialize_auth_LoginResponse,
    responseDeserialize: deserialize_auth_LoginResponse,
  },
  logout: {
    path: '/auth.AuthService/Logout',
    requestStream: false,
    responseStream: false,
    requestType: megatreopuz$protos_auth_pb.Empty,
    responseType: megatreopuz$protos_auth_pb.Empty,
    requestSerialize: serialize_auth_Empty,
    requestDeserialize: deserialize_auth_Empty,
    responseSerialize: serialize_auth_Empty,
    responseDeserialize: deserialize_auth_Empty,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
