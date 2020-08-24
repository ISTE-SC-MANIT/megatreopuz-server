// package: protos
// file: user.proto

import * as jspb from "google-protobuf";
import * as utils_pb from "./utils_pb";

export class CreateLocalPlayerRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getCollege(): string;
  setCollege(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getYear(): number;
  setYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocalPlayerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocalPlayerRequest): CreateLocalPlayerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocalPlayerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocalPlayerRequest;
  static deserializeBinaryFromReader(message: CreateLocalPlayerRequest, reader: jspb.BinaryReader): CreateLocalPlayerRequest;
}

export namespace CreateLocalPlayerRequest {
  export type AsObject = {
    username: string,
    name: string,
    phone: string,
    college: string,
    country: string,
    year: number,
  }
}

export class UpdateLocalPlayerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getCollege(): string;
  setCollege(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getYear(): number;
  setYear(value: number): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLocalPlayerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLocalPlayerRequest): UpdateLocalPlayerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLocalPlayerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLocalPlayerRequest;
  static deserializeBinaryFromReader(message: UpdateLocalPlayerRequest, reader: jspb.BinaryReader): UpdateLocalPlayerRequest;
}

export namespace UpdateLocalPlayerRequest {
  export type AsObject = {
    name: string,
    phone: string,
    college: string,
    country: string,
    year: number,
    username: string,
  }
}

export class getPlayerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getCollege(): string;
  setCollege(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getYear(): number;
  setYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): getPlayerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: getPlayerResponse): getPlayerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: getPlayerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): getPlayerResponse;
  static deserializeBinaryFromReader(message: getPlayerResponse, reader: jspb.BinaryReader): getPlayerResponse;
}

export namespace getPlayerResponse {
  export type AsObject = {
    id: string,
    email: string,
    username: string,
    name: string,
    phone: string,
    college: string,
    country: string,
    year: number,
  }
}

