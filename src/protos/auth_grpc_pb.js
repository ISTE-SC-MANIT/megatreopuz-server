// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_pb = require('./auth_pb.js');
var utils_pb = require('./utils_pb.js');

function serialize_auth_CheckStateResponse(arg) {
  if (!(arg instanceof auth_pb.CheckStateResponse)) {
    throw new Error('Expected argument of type auth.CheckStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_CheckStateResponse(buffer_arg) {
  return auth_pb.CheckStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_CheckUsernameAvailabilityRequest(arg) {
  if (!(arg instanceof auth_pb.CheckUsernameAvailabilityRequest)) {
    throw new Error('Expected argument of type auth.CheckUsernameAvailabilityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_CheckUsernameAvailabilityRequest(buffer_arg) {
  return auth_pb.CheckUsernameAvailabilityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_CheckUsernameAvailabilityResponse(arg) {
  if (!(arg instanceof auth_pb.CheckUsernameAvailabilityResponse)) {
    throw new Error('Expected argument of type auth.CheckUsernameAvailabilityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_CheckUsernameAvailabilityResponse(buffer_arg) {
  return auth_pb.CheckUsernameAvailabilityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_CreateLocalPlayerRequest(arg) {
  if (!(arg instanceof auth_pb.CreateLocalPlayerRequest)) {
    throw new Error('Expected argument of type auth.CreateLocalPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_CreateLocalPlayerRequest(buffer_arg) {
  return auth_pb.CreateLocalPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_Empty(arg) {
  if (!(arg instanceof utils_pb.Empty)) {
    throw new Error('Expected argument of type auth.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_Empty(buffer_arg) {
  return utils_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  createLocalPlayer: {
    path: '/auth.AuthService/createLocalPlayer',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.CreateLocalPlayerRequest,
    responseType: utils_pb.Empty,
    requestSerialize: serialize_auth_CreateLocalPlayerRequest,
    requestDeserialize: deserialize_auth_CreateLocalPlayerRequest,
    responseSerialize: serialize_auth_Empty,
    responseDeserialize: deserialize_auth_Empty,
  },
  checkUsernameAvailability: {
    path: '/auth.AuthService/checkUsernameAvailability',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.CheckUsernameAvailabilityRequest,
    responseType: auth_pb.CheckUsernameAvailabilityResponse,
    requestSerialize: serialize_auth_CheckUsernameAvailabilityRequest,
    requestDeserialize: deserialize_auth_CheckUsernameAvailabilityRequest,
    responseSerialize: serialize_auth_CheckUsernameAvailabilityResponse,
    responseDeserialize: deserialize_auth_CheckUsernameAvailabilityResponse,
  },
  checkUserState: {
    path: '/auth.AuthService/checkUserState',
    requestStream: false,
    responseStream: false,
    requestType: utils_pb.Empty,
    responseType: auth_pb.CheckStateResponse,
    requestSerialize: serialize_auth_Empty,
    requestDeserialize: deserialize_auth_Empty,
    responseSerialize: serialize_auth_CheckStateResponse,
    responseDeserialize: deserialize_auth_CheckStateResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
