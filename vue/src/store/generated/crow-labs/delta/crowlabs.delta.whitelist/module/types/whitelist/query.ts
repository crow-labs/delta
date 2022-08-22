/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../whitelist/params";
import { User } from "../whitelist/user";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Buyer } from "../whitelist/buyer";
import { Producer } from "../whitelist/producer";
import { Seller } from "../whitelist/seller";
import { Reviewer } from "../whitelist/reviewer";
import { Voter } from "../whitelist/voter";
import { Whitelist } from "../whitelist/whitelist";
import { MonoWhitelist } from "../whitelist/mono_whitelist";

export const protobufPackage = "crowlabs.delta.whitelist";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetUserRequest {
  accAddr: string;
}

export interface QueryGetUserResponse {
  user: User | undefined;
}

export interface QueryAllUserRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllUserResponse {
  user: User[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBuyerRequest {
  buyerId: string;
}

export interface QueryGetBuyerResponse {
  buyer: Buyer | undefined;
}

export interface QueryAllBuyerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBuyerResponse {
  buyer: Buyer[];
  pagination: PageResponse | undefined;
}

export interface QueryGetProducerRequest {
  accAddr: string;
}

export interface QueryGetProducerResponse {
  producer: Producer | undefined;
}

export interface QueryAllProducerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProducerResponse {
  producer: Producer[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSellerRequest {
  sellerId: string;
}

export interface QueryGetSellerResponse {
  seller: Seller | undefined;
}

export interface QueryAllSellerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSellerResponse {
  seller: Seller[];
  pagination: PageResponse | undefined;
}

export interface QueryGetReviewerRequest {
  accAddr: string;
}

export interface QueryGetReviewerResponse {
  reviewer: Reviewer | undefined;
}

export interface QueryAllReviewerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllReviewerResponse {
  reviewer: Reviewer[];
  pagination: PageResponse | undefined;
}

export interface QueryGetVoterRequest {
  voterId: string;
}

export interface QueryGetVoterResponse {
  voter: Voter | undefined;
}

export interface QueryAllVoterRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVoterResponse {
  voter: Voter[];
  pagination: PageResponse | undefined;
}

export interface QueryGetWhitelistRequest {
  id: number;
}

export interface QueryGetWhitelistResponse {
  Whitelist: Whitelist | undefined;
}

export interface QueryAllWhitelistRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWhitelistResponse {
  Whitelist: Whitelist[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMonoWhitelistRequest {
  whitelistId: string;
}

export interface QueryGetMonoWhitelistResponse {
  monoWhitelist: MonoWhitelist | undefined;
}

export interface QueryAllMonoWhitelistRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMonoWhitelistResponse {
  monoWhitelist: MonoWhitelist[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetUserRequest: object = { accAddr: "" };

export const QueryGetUserRequest = {
  encode(
    message: QueryGetUserRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accAddr !== "") {
      writer.uint32(10).string(message.accAddr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserRequest {
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = String(object.accAddr);
    } else {
      message.accAddr = "";
    }
    return message;
  },

  toJSON(message: QueryGetUserRequest): unknown {
    const obj: any = {};
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUserRequest>): QueryGetUserRequest {
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = object.accAddr;
    } else {
      message.accAddr = "";
    }
    return message;
  },
};

const baseQueryGetUserResponse: object = {};

export const QueryGetUserResponse = {
  encode(
    message: QueryGetUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserResponse {
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetUserResponse): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUserResponse>): QueryGetUserResponse {
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
};

const baseQueryAllUserRequest: object = {};

export const QueryAllUserRequest = {
  encode(
    message: QueryAllUserRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserRequest {
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUserRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUserRequest>): QueryAllUserRequest {
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllUserResponse: object = {};

export const QueryAllUserResponse = {
  encode(
    message: QueryAllUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.user) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse;
    message.user = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user.push(User.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserResponse {
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse;
    message.user = [];
    if (object.user !== undefined && object.user !== null) {
      for (const e of object.user) {
        message.user.push(User.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUserResponse): unknown {
    const obj: any = {};
    if (message.user) {
      obj.user = message.user.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.user = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUserResponse>): QueryAllUserResponse {
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse;
    message.user = [];
    if (object.user !== undefined && object.user !== null) {
      for (const e of object.user) {
        message.user.push(User.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBuyerRequest: object = { buyerId: "" };

export const QueryGetBuyerRequest = {
  encode(
    message: QueryGetBuyerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyerId !== "") {
      writer.uint32(10).string(message.buyerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBuyerRequest } as QueryGetBuyerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyerRequest {
    const message = { ...baseQueryGetBuyerRequest } as QueryGetBuyerRequest;
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    return message;
  },

  toJSON(message: QueryGetBuyerRequest): unknown {
    const obj: any = {};
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBuyerRequest>): QueryGetBuyerRequest {
    const message = { ...baseQueryGetBuyerRequest } as QueryGetBuyerRequest;
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    return message;
  },
};

const baseQueryGetBuyerResponse: object = {};

export const QueryGetBuyerResponse = {
  encode(
    message: QueryGetBuyerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyer !== undefined) {
      Buyer.encode(message.buyer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBuyerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBuyerResponse } as QueryGetBuyerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = Buyer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyerResponse {
    const message = { ...baseQueryGetBuyerResponse } as QueryGetBuyerResponse;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromJSON(object.buyer);
    } else {
      message.buyer = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBuyerResponse): unknown {
    const obj: any = {};
    message.buyer !== undefined &&
      (obj.buyer = message.buyer ? Buyer.toJSON(message.buyer) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyerResponse>
  ): QueryGetBuyerResponse {
    const message = { ...baseQueryGetBuyerResponse } as QueryGetBuyerResponse;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromPartial(object.buyer);
    } else {
      message.buyer = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyerRequest: object = {};

export const QueryAllBuyerRequest = {
  encode(
    message: QueryAllBuyerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBuyerRequest } as QueryAllBuyerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBuyerRequest {
    const message = { ...baseQueryAllBuyerRequest } as QueryAllBuyerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBuyerRequest>): QueryAllBuyerRequest {
    const message = { ...baseQueryAllBuyerRequest } as QueryAllBuyerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyerResponse: object = {};

export const QueryAllBuyerResponse = {
  encode(
    message: QueryAllBuyerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.buyer) {
      Buyer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBuyerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBuyerResponse } as QueryAllBuyerResponse;
    message.buyer = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer.push(Buyer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBuyerResponse {
    const message = { ...baseQueryAllBuyerResponse } as QueryAllBuyerResponse;
    message.buyer = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      for (const e of object.buyer) {
        message.buyer.push(Buyer.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyerResponse): unknown {
    const obj: any = {};
    if (message.buyer) {
      obj.buyer = message.buyer.map((e) => (e ? Buyer.toJSON(e) : undefined));
    } else {
      obj.buyer = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyerResponse>
  ): QueryAllBuyerResponse {
    const message = { ...baseQueryAllBuyerResponse } as QueryAllBuyerResponse;
    message.buyer = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      for (const e of object.buyer) {
        message.buyer.push(Buyer.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetProducerRequest: object = { accAddr: "" };

export const QueryGetProducerRequest = {
  encode(
    message: QueryGetProducerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accAddr !== "") {
      writer.uint32(10).string(message.accAddr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProducerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProducerRequest,
    } as QueryGetProducerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProducerRequest {
    const message = {
      ...baseQueryGetProducerRequest,
    } as QueryGetProducerRequest;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = String(object.accAddr);
    } else {
      message.accAddr = "";
    }
    return message;
  },

  toJSON(message: QueryGetProducerRequest): unknown {
    const obj: any = {};
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProducerRequest>
  ): QueryGetProducerRequest {
    const message = {
      ...baseQueryGetProducerRequest,
    } as QueryGetProducerRequest;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = object.accAddr;
    } else {
      message.accAddr = "";
    }
    return message;
  },
};

const baseQueryGetProducerResponse: object = {};

export const QueryGetProducerResponse = {
  encode(
    message: QueryGetProducerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.producer !== undefined) {
      Producer.encode(message.producer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProducerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProducerResponse,
    } as QueryGetProducerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producer = Producer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProducerResponse {
    const message = {
      ...baseQueryGetProducerResponse,
    } as QueryGetProducerResponse;
    if (object.producer !== undefined && object.producer !== null) {
      message.producer = Producer.fromJSON(object.producer);
    } else {
      message.producer = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProducerResponse): unknown {
    const obj: any = {};
    message.producer !== undefined &&
      (obj.producer = message.producer
        ? Producer.toJSON(message.producer)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProducerResponse>
  ): QueryGetProducerResponse {
    const message = {
      ...baseQueryGetProducerResponse,
    } as QueryGetProducerResponse;
    if (object.producer !== undefined && object.producer !== null) {
      message.producer = Producer.fromPartial(object.producer);
    } else {
      message.producer = undefined;
    }
    return message;
  },
};

const baseQueryAllProducerRequest: object = {};

export const QueryAllProducerRequest = {
  encode(
    message: QueryAllProducerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProducerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProducerRequest,
    } as QueryAllProducerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProducerRequest {
    const message = {
      ...baseQueryAllProducerRequest,
    } as QueryAllProducerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProducerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProducerRequest>
  ): QueryAllProducerRequest {
    const message = {
      ...baseQueryAllProducerRequest,
    } as QueryAllProducerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllProducerResponse: object = {};

export const QueryAllProducerResponse = {
  encode(
    message: QueryAllProducerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.producer) {
      Producer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllProducerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProducerResponse,
    } as QueryAllProducerResponse;
    message.producer = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producer.push(Producer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProducerResponse {
    const message = {
      ...baseQueryAllProducerResponse,
    } as QueryAllProducerResponse;
    message.producer = [];
    if (object.producer !== undefined && object.producer !== null) {
      for (const e of object.producer) {
        message.producer.push(Producer.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProducerResponse): unknown {
    const obj: any = {};
    if (message.producer) {
      obj.producer = message.producer.map((e) =>
        e ? Producer.toJSON(e) : undefined
      );
    } else {
      obj.producer = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProducerResponse>
  ): QueryAllProducerResponse {
    const message = {
      ...baseQueryAllProducerResponse,
    } as QueryAllProducerResponse;
    message.producer = [];
    if (object.producer !== undefined && object.producer !== null) {
      for (const e of object.producer) {
        message.producer.push(Producer.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetSellerRequest: object = { sellerId: "" };

export const QueryGetSellerRequest = {
  encode(
    message: QueryGetSellerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sellerId !== "") {
      writer.uint32(10).string(message.sellerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSellerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSellerRequest } as QueryGetSellerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSellerRequest {
    const message = { ...baseQueryGetSellerRequest } as QueryGetSellerRequest;
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    return message;
  },

  toJSON(message: QueryGetSellerRequest): unknown {
    const obj: any = {};
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellerRequest>
  ): QueryGetSellerRequest {
    const message = { ...baseQueryGetSellerRequest } as QueryGetSellerRequest;
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    return message;
  },
};

const baseQueryGetSellerResponse: object = {};

export const QueryGetSellerResponse = {
  encode(
    message: QueryGetSellerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.seller !== undefined) {
      Seller.encode(message.seller, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSellerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSellerResponse } as QueryGetSellerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = Seller.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSellerResponse {
    const message = { ...baseQueryGetSellerResponse } as QueryGetSellerResponse;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = Seller.fromJSON(object.seller);
    } else {
      message.seller = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSellerResponse): unknown {
    const obj: any = {};
    message.seller !== undefined &&
      (obj.seller = message.seller ? Seller.toJSON(message.seller) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellerResponse>
  ): QueryGetSellerResponse {
    const message = { ...baseQueryGetSellerResponse } as QueryGetSellerResponse;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = Seller.fromPartial(object.seller);
    } else {
      message.seller = undefined;
    }
    return message;
  },
};

const baseQueryAllSellerRequest: object = {};

export const QueryAllSellerRequest = {
  encode(
    message: QueryAllSellerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSellerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllSellerRequest } as QueryAllSellerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSellerRequest {
    const message = { ...baseQueryAllSellerRequest } as QueryAllSellerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellerRequest>
  ): QueryAllSellerRequest {
    const message = { ...baseQueryAllSellerRequest } as QueryAllSellerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSellerResponse: object = {};

export const QueryAllSellerResponse = {
  encode(
    message: QueryAllSellerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.seller) {
      Seller.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSellerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllSellerResponse } as QueryAllSellerResponse;
    message.seller = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller.push(Seller.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSellerResponse {
    const message = { ...baseQueryAllSellerResponse } as QueryAllSellerResponse;
    message.seller = [];
    if (object.seller !== undefined && object.seller !== null) {
      for (const e of object.seller) {
        message.seller.push(Seller.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellerResponse): unknown {
    const obj: any = {};
    if (message.seller) {
      obj.seller = message.seller.map((e) =>
        e ? Seller.toJSON(e) : undefined
      );
    } else {
      obj.seller = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellerResponse>
  ): QueryAllSellerResponse {
    const message = { ...baseQueryAllSellerResponse } as QueryAllSellerResponse;
    message.seller = [];
    if (object.seller !== undefined && object.seller !== null) {
      for (const e of object.seller) {
        message.seller.push(Seller.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetReviewerRequest: object = { accAddr: "" };

export const QueryGetReviewerRequest = {
  encode(
    message: QueryGetReviewerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accAddr !== "") {
      writer.uint32(10).string(message.accAddr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetReviewerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReviewerRequest,
    } as QueryGetReviewerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReviewerRequest {
    const message = {
      ...baseQueryGetReviewerRequest,
    } as QueryGetReviewerRequest;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = String(object.accAddr);
    } else {
      message.accAddr = "";
    }
    return message;
  },

  toJSON(message: QueryGetReviewerRequest): unknown {
    const obj: any = {};
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReviewerRequest>
  ): QueryGetReviewerRequest {
    const message = {
      ...baseQueryGetReviewerRequest,
    } as QueryGetReviewerRequest;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = object.accAddr;
    } else {
      message.accAddr = "";
    }
    return message;
  },
};

const baseQueryGetReviewerResponse: object = {};

export const QueryGetReviewerResponse = {
  encode(
    message: QueryGetReviewerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.reviewer !== undefined) {
      Reviewer.encode(message.reviewer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetReviewerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReviewerResponse,
    } as QueryGetReviewerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewer = Reviewer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReviewerResponse {
    const message = {
      ...baseQueryGetReviewerResponse,
    } as QueryGetReviewerResponse;
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = Reviewer.fromJSON(object.reviewer);
    } else {
      message.reviewer = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetReviewerResponse): unknown {
    const obj: any = {};
    message.reviewer !== undefined &&
      (obj.reviewer = message.reviewer
        ? Reviewer.toJSON(message.reviewer)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReviewerResponse>
  ): QueryGetReviewerResponse {
    const message = {
      ...baseQueryGetReviewerResponse,
    } as QueryGetReviewerResponse;
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = Reviewer.fromPartial(object.reviewer);
    } else {
      message.reviewer = undefined;
    }
    return message;
  },
};

const baseQueryAllReviewerRequest: object = {};

export const QueryAllReviewerRequest = {
  encode(
    message: QueryAllReviewerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllReviewerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllReviewerRequest,
    } as QueryAllReviewerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllReviewerRequest {
    const message = {
      ...baseQueryAllReviewerRequest,
    } as QueryAllReviewerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllReviewerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllReviewerRequest>
  ): QueryAllReviewerRequest {
    const message = {
      ...baseQueryAllReviewerRequest,
    } as QueryAllReviewerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllReviewerResponse: object = {};

export const QueryAllReviewerResponse = {
  encode(
    message: QueryAllReviewerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.reviewer) {
      Reviewer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllReviewerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllReviewerResponse,
    } as QueryAllReviewerResponse;
    message.reviewer = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewer.push(Reviewer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllReviewerResponse {
    const message = {
      ...baseQueryAllReviewerResponse,
    } as QueryAllReviewerResponse;
    message.reviewer = [];
    if (object.reviewer !== undefined && object.reviewer !== null) {
      for (const e of object.reviewer) {
        message.reviewer.push(Reviewer.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllReviewerResponse): unknown {
    const obj: any = {};
    if (message.reviewer) {
      obj.reviewer = message.reviewer.map((e) =>
        e ? Reviewer.toJSON(e) : undefined
      );
    } else {
      obj.reviewer = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllReviewerResponse>
  ): QueryAllReviewerResponse {
    const message = {
      ...baseQueryAllReviewerResponse,
    } as QueryAllReviewerResponse;
    message.reviewer = [];
    if (object.reviewer !== undefined && object.reviewer !== null) {
      for (const e of object.reviewer) {
        message.reviewer.push(Reviewer.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetVoterRequest: object = { voterId: "" };

export const QueryGetVoterRequest = {
  encode(
    message: QueryGetVoterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.voterId !== "") {
      writer.uint32(10).string(message.voterId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoterRequest } as QueryGetVoterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoterRequest {
    const message = { ...baseQueryGetVoterRequest } as QueryGetVoterRequest;
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    return message;
  },

  toJSON(message: QueryGetVoterRequest): unknown {
    const obj: any = {};
    message.voterId !== undefined && (obj.voterId = message.voterId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVoterRequest>): QueryGetVoterRequest {
    const message = { ...baseQueryGetVoterRequest } as QueryGetVoterRequest;
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    return message;
  },
};

const baseQueryGetVoterResponse: object = {};

export const QueryGetVoterResponse = {
  encode(
    message: QueryGetVoterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.voter !== undefined) {
      Voter.encode(message.voter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoterResponse } as QueryGetVoterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = Voter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoterResponse {
    const message = { ...baseQueryGetVoterResponse } as QueryGetVoterResponse;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = Voter.fromJSON(object.voter);
    } else {
      message.voter = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVoterResponse): unknown {
    const obj: any = {};
    message.voter !== undefined &&
      (obj.voter = message.voter ? Voter.toJSON(message.voter) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVoterResponse>
  ): QueryGetVoterResponse {
    const message = { ...baseQueryGetVoterResponse } as QueryGetVoterResponse;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = Voter.fromPartial(object.voter);
    } else {
      message.voter = undefined;
    }
    return message;
  },
};

const baseQueryAllVoterRequest: object = {};

export const QueryAllVoterRequest = {
  encode(
    message: QueryAllVoterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoterRequest } as QueryAllVoterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVoterRequest {
    const message = { ...baseQueryAllVoterRequest } as QueryAllVoterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVoterRequest>): QueryAllVoterRequest {
    const message = { ...baseQueryAllVoterRequest } as QueryAllVoterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVoterResponse: object = {};

export const QueryAllVoterResponse = {
  encode(
    message: QueryAllVoterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.voter) {
      Voter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoterResponse } as QueryAllVoterResponse;
    message.voter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter.push(Voter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllVoterResponse {
    const message = { ...baseQueryAllVoterResponse } as QueryAllVoterResponse;
    message.voter = [];
    if (object.voter !== undefined && object.voter !== null) {
      for (const e of object.voter) {
        message.voter.push(Voter.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoterResponse): unknown {
    const obj: any = {};
    if (message.voter) {
      obj.voter = message.voter.map((e) => (e ? Voter.toJSON(e) : undefined));
    } else {
      obj.voter = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVoterResponse>
  ): QueryAllVoterResponse {
    const message = { ...baseQueryAllVoterResponse } as QueryAllVoterResponse;
    message.voter = [];
    if (object.voter !== undefined && object.voter !== null) {
      for (const e of object.voter) {
        message.voter.push(Voter.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetWhitelistRequest: object = { id: 0 };

export const QueryGetWhitelistRequest = {
  encode(
    message: QueryGetWhitelistRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetWhitelistRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWhitelistRequest,
    } as QueryGetWhitelistRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhitelistRequest {
    const message = {
      ...baseQueryGetWhitelistRequest,
    } as QueryGetWhitelistRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetWhitelistRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhitelistRequest>
  ): QueryGetWhitelistRequest {
    const message = {
      ...baseQueryGetWhitelistRequest,
    } as QueryGetWhitelistRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetWhitelistResponse: object = {};

export const QueryGetWhitelistResponse = {
  encode(
    message: QueryGetWhitelistResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Whitelist !== undefined) {
      Whitelist.encode(message.Whitelist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWhitelistResponse,
    } as QueryGetWhitelistResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Whitelist = Whitelist.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhitelistResponse {
    const message = {
      ...baseQueryGetWhitelistResponse,
    } as QueryGetWhitelistResponse;
    if (object.Whitelist !== undefined && object.Whitelist !== null) {
      message.Whitelist = Whitelist.fromJSON(object.Whitelist);
    } else {
      message.Whitelist = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWhitelistResponse): unknown {
    const obj: any = {};
    message.Whitelist !== undefined &&
      (obj.Whitelist = message.Whitelist
        ? Whitelist.toJSON(message.Whitelist)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhitelistResponse>
  ): QueryGetWhitelistResponse {
    const message = {
      ...baseQueryGetWhitelistResponse,
    } as QueryGetWhitelistResponse;
    if (object.Whitelist !== undefined && object.Whitelist !== null) {
      message.Whitelist = Whitelist.fromPartial(object.Whitelist);
    } else {
      message.Whitelist = undefined;
    }
    return message;
  },
};

const baseQueryAllWhitelistRequest: object = {};

export const QueryAllWhitelistRequest = {
  encode(
    message: QueryAllWhitelistRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllWhitelistRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWhitelistRequest,
    } as QueryAllWhitelistRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhitelistRequest {
    const message = {
      ...baseQueryAllWhitelistRequest,
    } as QueryAllWhitelistRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhitelistRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhitelistRequest>
  ): QueryAllWhitelistRequest {
    const message = {
      ...baseQueryAllWhitelistRequest,
    } as QueryAllWhitelistRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWhitelistResponse: object = {};

export const QueryAllWhitelistResponse = {
  encode(
    message: QueryAllWhitelistResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Whitelist) {
      Whitelist.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWhitelistResponse,
    } as QueryAllWhitelistResponse;
    message.Whitelist = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Whitelist.push(Whitelist.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhitelistResponse {
    const message = {
      ...baseQueryAllWhitelistResponse,
    } as QueryAllWhitelistResponse;
    message.Whitelist = [];
    if (object.Whitelist !== undefined && object.Whitelist !== null) {
      for (const e of object.Whitelist) {
        message.Whitelist.push(Whitelist.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhitelistResponse): unknown {
    const obj: any = {};
    if (message.Whitelist) {
      obj.Whitelist = message.Whitelist.map((e) =>
        e ? Whitelist.toJSON(e) : undefined
      );
    } else {
      obj.Whitelist = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhitelistResponse>
  ): QueryAllWhitelistResponse {
    const message = {
      ...baseQueryAllWhitelistResponse,
    } as QueryAllWhitelistResponse;
    message.Whitelist = [];
    if (object.Whitelist !== undefined && object.Whitelist !== null) {
      for (const e of object.Whitelist) {
        message.Whitelist.push(Whitelist.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetMonoWhitelistRequest: object = { whitelistId: "" };

export const QueryGetMonoWhitelistRequest = {
  encode(
    message: QueryGetMonoWhitelistRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.whitelistId !== "") {
      writer.uint32(10).string(message.whitelistId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonoWhitelistRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoWhitelistRequest,
    } as QueryGetMonoWhitelistRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoWhitelistRequest {
    const message = {
      ...baseQueryGetMonoWhitelistRequest,
    } as QueryGetMonoWhitelistRequest;
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    return message;
  },

  toJSON(message: QueryGetMonoWhitelistRequest): unknown {
    const obj: any = {};
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoWhitelistRequest>
  ): QueryGetMonoWhitelistRequest {
    const message = {
      ...baseQueryGetMonoWhitelistRequest,
    } as QueryGetMonoWhitelistRequest;
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    return message;
  },
};

const baseQueryGetMonoWhitelistResponse: object = {};

export const QueryGetMonoWhitelistResponse = {
  encode(
    message: QueryGetMonoWhitelistResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.monoWhitelist !== undefined) {
      MonoWhitelist.encode(
        message.monoWhitelist,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonoWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoWhitelistResponse,
    } as QueryGetMonoWhitelistResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoWhitelist = MonoWhitelist.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoWhitelistResponse {
    const message = {
      ...baseQueryGetMonoWhitelistResponse,
    } as QueryGetMonoWhitelistResponse;
    if (object.monoWhitelist !== undefined && object.monoWhitelist !== null) {
      message.monoWhitelist = MonoWhitelist.fromJSON(object.monoWhitelist);
    } else {
      message.monoWhitelist = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMonoWhitelistResponse): unknown {
    const obj: any = {};
    message.monoWhitelist !== undefined &&
      (obj.monoWhitelist = message.monoWhitelist
        ? MonoWhitelist.toJSON(message.monoWhitelist)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoWhitelistResponse>
  ): QueryGetMonoWhitelistResponse {
    const message = {
      ...baseQueryGetMonoWhitelistResponse,
    } as QueryGetMonoWhitelistResponse;
    if (object.monoWhitelist !== undefined && object.monoWhitelist !== null) {
      message.monoWhitelist = MonoWhitelist.fromPartial(object.monoWhitelist);
    } else {
      message.monoWhitelist = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoWhitelistRequest: object = {};

export const QueryAllMonoWhitelistRequest = {
  encode(
    message: QueryAllMonoWhitelistRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMonoWhitelistRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoWhitelistRequest,
    } as QueryAllMonoWhitelistRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMonoWhitelistRequest {
    const message = {
      ...baseQueryAllMonoWhitelistRequest,
    } as QueryAllMonoWhitelistRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoWhitelistRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoWhitelistRequest>
  ): QueryAllMonoWhitelistRequest {
    const message = {
      ...baseQueryAllMonoWhitelistRequest,
    } as QueryAllMonoWhitelistRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoWhitelistResponse: object = {};

export const QueryAllMonoWhitelistResponse = {
  encode(
    message: QueryAllMonoWhitelistResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.monoWhitelist) {
      MonoWhitelist.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMonoWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoWhitelistResponse,
    } as QueryAllMonoWhitelistResponse;
    message.monoWhitelist = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoWhitelist.push(
            MonoWhitelist.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMonoWhitelistResponse {
    const message = {
      ...baseQueryAllMonoWhitelistResponse,
    } as QueryAllMonoWhitelistResponse;
    message.monoWhitelist = [];
    if (object.monoWhitelist !== undefined && object.monoWhitelist !== null) {
      for (const e of object.monoWhitelist) {
        message.monoWhitelist.push(MonoWhitelist.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoWhitelistResponse): unknown {
    const obj: any = {};
    if (message.monoWhitelist) {
      obj.monoWhitelist = message.monoWhitelist.map((e) =>
        e ? MonoWhitelist.toJSON(e) : undefined
      );
    } else {
      obj.monoWhitelist = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoWhitelistResponse>
  ): QueryAllMonoWhitelistResponse {
    const message = {
      ...baseQueryAllMonoWhitelistResponse,
    } as QueryAllMonoWhitelistResponse;
    message.monoWhitelist = [];
    if (object.monoWhitelist !== undefined && object.monoWhitelist !== null) {
      for (const e of object.monoWhitelist) {
        message.monoWhitelist.push(MonoWhitelist.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a User by index. */
  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
  /** Queries a list of User items. */
  UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>;
  /** Queries a Buyer by index. */
  Buyer(request: QueryGetBuyerRequest): Promise<QueryGetBuyerResponse>;
  /** Queries a list of Buyer items. */
  BuyerAll(request: QueryAllBuyerRequest): Promise<QueryAllBuyerResponse>;
  /** Queries a Producer by index. */
  Producer(request: QueryGetProducerRequest): Promise<QueryGetProducerResponse>;
  /** Queries a list of Producer items. */
  ProducerAll(
    request: QueryAllProducerRequest
  ): Promise<QueryAllProducerResponse>;
  /** Queries a Seller by index. */
  Seller(request: QueryGetSellerRequest): Promise<QueryGetSellerResponse>;
  /** Queries a list of Seller items. */
  SellerAll(request: QueryAllSellerRequest): Promise<QueryAllSellerResponse>;
  /** Queries a Reviewer by index. */
  Reviewer(request: QueryGetReviewerRequest): Promise<QueryGetReviewerResponse>;
  /** Queries a list of Reviewer items. */
  ReviewerAll(
    request: QueryAllReviewerRequest
  ): Promise<QueryAllReviewerResponse>;
  /** Queries a Voter by index. */
  Voter(request: QueryGetVoterRequest): Promise<QueryGetVoterResponse>;
  /** Queries a list of Voter items. */
  VoterAll(request: QueryAllVoterRequest): Promise<QueryAllVoterResponse>;
  /** Queries a Whitelist by id. */
  Whitelist(
    request: QueryGetWhitelistRequest
  ): Promise<QueryGetWhitelistResponse>;
  /** Queries a list of Whitelist items. */
  WhitelistAll(
    request: QueryAllWhitelistRequest
  ): Promise<QueryAllWhitelistResponse>;
  /** Queries a MonoWhitelist by index. */
  MonoWhitelist(
    request: QueryGetMonoWhitelistRequest
  ): Promise<QueryGetMonoWhitelistResponse>;
  /** Queries a list of MonoWhitelist items. */
  MonoWhitelistAll(
    request: QueryAllMonoWhitelistRequest
  ): Promise<QueryAllMonoWhitelistResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse> {
    const data = QueryGetUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "User",
      data
    );
    return promise.then((data) =>
      QueryGetUserResponse.decode(new Reader(data))
    );
  }

  UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse> {
    const data = QueryAllUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "UserAll",
      data
    );
    return promise.then((data) =>
      QueryAllUserResponse.decode(new Reader(data))
    );
  }

  Buyer(request: QueryGetBuyerRequest): Promise<QueryGetBuyerResponse> {
    const data = QueryGetBuyerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "Buyer",
      data
    );
    return promise.then((data) =>
      QueryGetBuyerResponse.decode(new Reader(data))
    );
  }

  BuyerAll(request: QueryAllBuyerRequest): Promise<QueryAllBuyerResponse> {
    const data = QueryAllBuyerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "BuyerAll",
      data
    );
    return promise.then((data) =>
      QueryAllBuyerResponse.decode(new Reader(data))
    );
  }

  Producer(
    request: QueryGetProducerRequest
  ): Promise<QueryGetProducerResponse> {
    const data = QueryGetProducerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "Producer",
      data
    );
    return promise.then((data) =>
      QueryGetProducerResponse.decode(new Reader(data))
    );
  }

  ProducerAll(
    request: QueryAllProducerRequest
  ): Promise<QueryAllProducerResponse> {
    const data = QueryAllProducerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "ProducerAll",
      data
    );
    return promise.then((data) =>
      QueryAllProducerResponse.decode(new Reader(data))
    );
  }

  Seller(request: QueryGetSellerRequest): Promise<QueryGetSellerResponse> {
    const data = QueryGetSellerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "Seller",
      data
    );
    return promise.then((data) =>
      QueryGetSellerResponse.decode(new Reader(data))
    );
  }

  SellerAll(request: QueryAllSellerRequest): Promise<QueryAllSellerResponse> {
    const data = QueryAllSellerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "SellerAll",
      data
    );
    return promise.then((data) =>
      QueryAllSellerResponse.decode(new Reader(data))
    );
  }

  Reviewer(
    request: QueryGetReviewerRequest
  ): Promise<QueryGetReviewerResponse> {
    const data = QueryGetReviewerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "Reviewer",
      data
    );
    return promise.then((data) =>
      QueryGetReviewerResponse.decode(new Reader(data))
    );
  }

  ReviewerAll(
    request: QueryAllReviewerRequest
  ): Promise<QueryAllReviewerResponse> {
    const data = QueryAllReviewerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "ReviewerAll",
      data
    );
    return promise.then((data) =>
      QueryAllReviewerResponse.decode(new Reader(data))
    );
  }

  Voter(request: QueryGetVoterRequest): Promise<QueryGetVoterResponse> {
    const data = QueryGetVoterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "Voter",
      data
    );
    return promise.then((data) =>
      QueryGetVoterResponse.decode(new Reader(data))
    );
  }

  VoterAll(request: QueryAllVoterRequest): Promise<QueryAllVoterResponse> {
    const data = QueryAllVoterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "VoterAll",
      data
    );
    return promise.then((data) =>
      QueryAllVoterResponse.decode(new Reader(data))
    );
  }

  Whitelist(
    request: QueryGetWhitelistRequest
  ): Promise<QueryGetWhitelistResponse> {
    const data = QueryGetWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "Whitelist",
      data
    );
    return promise.then((data) =>
      QueryGetWhitelistResponse.decode(new Reader(data))
    );
  }

  WhitelistAll(
    request: QueryAllWhitelistRequest
  ): Promise<QueryAllWhitelistResponse> {
    const data = QueryAllWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "WhitelistAll",
      data
    );
    return promise.then((data) =>
      QueryAllWhitelistResponse.decode(new Reader(data))
    );
  }

  MonoWhitelist(
    request: QueryGetMonoWhitelistRequest
  ): Promise<QueryGetMonoWhitelistResponse> {
    const data = QueryGetMonoWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "MonoWhitelist",
      data
    );
    return promise.then((data) =>
      QueryGetMonoWhitelistResponse.decode(new Reader(data))
    );
  }

  MonoWhitelistAll(
    request: QueryAllMonoWhitelistRequest
  ): Promise<QueryAllMonoWhitelistResponse> {
    const data = QueryAllMonoWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Query",
      "MonoWhitelistAll",
      data
    );
    return promise.then((data) =>
      QueryAllMonoWhitelistResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
