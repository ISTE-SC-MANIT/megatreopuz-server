// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');
var utils_pb = require('./utils_pb.js');

function serialize_protos_CreateLocalPlayerRequest(arg) {
  if (!(arg instanceof user_pb.CreateLocalPlayerRequest)) {
    throw new Error('Expected argument of type protos.CreateLocalPlayerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_CreateLocalPlayerRequest(buffer_arg) {
  return user_pb.CreateLocalPlayerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protos_Empty(arg) {
  if (!(arg instanceof utils_pb.Empty)) {
    throw new Error('Expected argument of type protos.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protos_Empty(buffer_arg) {
  return utils_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  createLocalPlayer: {
    path: '/protos.UserService/createLocalPlayer',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateLocalPlayerRequest,
    responseType: utils_pb.Empty,
    requestSerialize: serialize_protos_CreateLocalPlayerRequest,
    requestDeserialize: deserialize_protos_CreateLocalPlayerRequest,
    responseSerialize: serialize_protos_Empty,
    responseDeserialize: deserialize_protos_Empty,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
