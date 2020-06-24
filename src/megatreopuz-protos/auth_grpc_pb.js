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

function serialize_auth_SendPasswordRecoveryEmailRequest(arg) {
  if (!(arg instanceof megatreopuz$protos_auth_pb.SendPasswordRecoveryEmailRequest)) {
    throw new Error('Expected argument of type auth.SendPasswordRecoveryEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_SendPasswordRecoveryEmailRequest(buffer_arg) {
  return megatreopuz$protos_auth_pb.SendPasswordRecoveryEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_Status(arg) {
  if (!(arg instanceof megatreopuz$protos_auth_pb.Status)) {
    throw new Error('Expected argument of type auth.Status');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_Status(buffer_arg) {
  return megatreopuz$protos_auth_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_UpdatePasswordRequest(arg) {
  if (!(arg instanceof megatreopuz$protos_auth_pb.UpdatePasswordRequest)) {
    throw new Error('Expected argument of type auth.UpdatePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_UpdatePasswordRequest(buffer_arg) {
  return megatreopuz$protos_auth_pb.UpdatePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  validateUser: {
    path: '/auth.AuthService/validateUser',
    requestStream: false,
    responseStream: false,
    requestType: megatreopuz$protos_auth_pb.Empty,
    responseType: megatreopuz$protos_auth_pb.Status,
    requestSerialize: serialize_auth_Empty,
    requestDeserialize: deserialize_auth_Empty,
    responseSerialize: serialize_auth_Status,
    responseDeserialize: deserialize_auth_Status,
  },
  sendPasswordRecoveryEmail: {
    path: '/auth.AuthService/SendPasswordRecoveryEmail',
    requestStream: false,
    responseStream: false,
    requestType: megatreopuz$protos_auth_pb.SendPasswordRecoveryEmailRequest,
    responseType: megatreopuz$protos_auth_pb.Empty,
    requestSerialize: serialize_auth_SendPasswordRecoveryEmailRequest,
    requestDeserialize: deserialize_auth_SendPasswordRecoveryEmailRequest,
    responseSerialize: serialize_auth_Empty,
    responseDeserialize: deserialize_auth_Empty,
  },
  updatePassword: {
    path: '/auth.AuthService/UpdatePassword',
    requestStream: false,
    responseStream: false,
    requestType: megatreopuz$protos_auth_pb.UpdatePasswordRequest,
    responseType: megatreopuz$protos_auth_pb.Empty,
    requestSerialize: serialize_auth_UpdatePasswordRequest,
    requestDeserialize: deserialize_auth_UpdatePasswordRequest,
    responseSerialize: serialize_auth_Empty,
    responseDeserialize: deserialize_auth_Empty,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
