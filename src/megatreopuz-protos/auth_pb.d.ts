// package: auth
// file: megatreopuz-protos/auth.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getRefreshtoken(): string;
  setRefreshtoken(value: string): void;

  hasAccesstokenexpiry(): boolean;
  clearAccesstokenexpiry(): void;
  getAccesstokenexpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccesstokenexpiry(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRefreshtokenexpiry(): boolean;
  clearRefreshtokenexpiry(): void;
  getRefreshtokenexpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshtokenexpiry(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    accesstoken: string,
    refreshtoken: string,
    accesstokenexpiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    refreshtokenexpiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Status extends jspb.Message {
  getIsuserloggedin(): boolean;
  setIsuserloggedin(value: boolean): void;

  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getRefreshtoken(): string;
  setRefreshtoken(value: string): void;

  hasAccesstokenexpiry(): boolean;
  clearAccesstokenexpiry(): void;
  getAccesstokenexpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccesstokenexpiry(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRefreshtokenexpiry(): boolean;
  clearRefreshtokenexpiry(): void;
  getRefreshtokenexpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshtokenexpiry(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    isuserloggedin: boolean,
    accesstoken: string,
    refreshtoken: string,
    accesstokenexpiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    refreshtokenexpiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SendPasswordRecoveryEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPasswordRecoveryEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendPasswordRecoveryEmailRequest): SendPasswordRecoveryEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendPasswordRecoveryEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPasswordRecoveryEmailRequest;
  static deserializeBinaryFromReader(message: SendPasswordRecoveryEmailRequest, reader: jspb.BinaryReader): SendPasswordRecoveryEmailRequest;
}

export namespace SendPasswordRecoveryEmailRequest {
  export type AsObject = {
    email: string,
  }
}

export class UpdatePasswordRequest extends jspb.Message {
  getPasswordid(): string;
  setPasswordid(value: string): void;

  getNewpassword(): string;
  setNewpassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePasswordRequest): UpdatePasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePasswordRequest;
  static deserializeBinaryFromReader(message: UpdatePasswordRequest, reader: jspb.BinaryReader): UpdatePasswordRequest;
}

export namespace UpdatePasswordRequest {
  export type AsObject = {
    passwordid: string,
    newpassword: string,
  }
}

