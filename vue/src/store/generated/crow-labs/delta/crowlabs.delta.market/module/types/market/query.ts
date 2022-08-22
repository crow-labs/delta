/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../market/params";
import { Listing } from "../market/listing";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { MonoListing } from "../market/mono_listing";
import { Order } from "../market/order";
import { MonoOrder } from "../market/mono_order";

export const protobufPackage = "crowlabs.delta.market";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetListingRequest {
  whitelistId: string;
  sellerId: string;
}

export interface QueryGetListingResponse {
  listing: Listing | undefined;
}

export interface QueryAllListingRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllListingResponse {
  listing: Listing[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMonoListingRequest {
  listingId: string;
}

export interface QueryGetMonoListingResponse {
  monoListing: MonoListing | undefined;
}

export interface QueryAllMonoListingRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMonoListingResponse {
  monoListing: MonoListing[];
  pagination: PageResponse | undefined;
}

export interface QueryGetOrderRequest {
  listingId: string;
  buyerId: string;
}

export interface QueryGetOrderResponse {
  order: Order | undefined;
}

export interface QueryAllOrderRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllOrderResponse {
  order: Order[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMonoOrderRequest {
  orderId: string;
}

export interface QueryGetMonoOrderResponse {
  monoOrder: MonoOrder | undefined;
}

export interface QueryAllMonoOrderRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMonoOrderResponse {
  monoOrder: MonoOrder[];
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

const baseQueryGetListingRequest: object = { whitelistId: "", sellerId: "" };

export const QueryGetListingRequest = {
  encode(
    message: QueryGetListingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.whitelistId !== "") {
      writer.uint32(10).string(message.whitelistId);
    }
    if (message.sellerId !== "") {
      writer.uint32(18).string(message.sellerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetListingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetListingRequest } as QueryGetListingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistId = reader.string();
          break;
        case 2:
          message.sellerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetListingRequest {
    const message = { ...baseQueryGetListingRequest } as QueryGetListingRequest;
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    return message;
  },

  toJSON(message: QueryGetListingRequest): unknown {
    const obj: any = {};
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetListingRequest>
  ): QueryGetListingRequest {
    const message = { ...baseQueryGetListingRequest } as QueryGetListingRequest;
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    return message;
  },
};

const baseQueryGetListingResponse: object = {};

export const QueryGetListingResponse = {
  encode(
    message: QueryGetListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetListingResponse,
    } as QueryGetListingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listing = Listing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetListingResponse {
    const message = {
      ...baseQueryGetListingResponse,
    } as QueryGetListingResponse;
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromJSON(object.listing);
    } else {
      message.listing = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetListingResponse): unknown {
    const obj: any = {};
    message.listing !== undefined &&
      (obj.listing = message.listing
        ? Listing.toJSON(message.listing)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetListingResponse>
  ): QueryGetListingResponse {
    const message = {
      ...baseQueryGetListingResponse,
    } as QueryGetListingResponse;
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromPartial(object.listing);
    } else {
      message.listing = undefined;
    }
    return message;
  },
};

const baseQueryAllListingRequest: object = {};

export const QueryAllListingRequest = {
  encode(
    message: QueryAllListingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllListingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllListingRequest } as QueryAllListingRequest;
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

  fromJSON(object: any): QueryAllListingRequest {
    const message = { ...baseQueryAllListingRequest } as QueryAllListingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllListingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllListingRequest>
  ): QueryAllListingRequest {
    const message = { ...baseQueryAllListingRequest } as QueryAllListingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllListingResponse: object = {};

export const QueryAllListingResponse = {
  encode(
    message: QueryAllListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.listing) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllListingResponse,
    } as QueryAllListingResponse;
    message.listing = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listing.push(Listing.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllListingResponse {
    const message = {
      ...baseQueryAllListingResponse,
    } as QueryAllListingResponse;
    message.listing = [];
    if (object.listing !== undefined && object.listing !== null) {
      for (const e of object.listing) {
        message.listing.push(Listing.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllListingResponse): unknown {
    const obj: any = {};
    if (message.listing) {
      obj.listing = message.listing.map((e) =>
        e ? Listing.toJSON(e) : undefined
      );
    } else {
      obj.listing = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllListingResponse>
  ): QueryAllListingResponse {
    const message = {
      ...baseQueryAllListingResponse,
    } as QueryAllListingResponse;
    message.listing = [];
    if (object.listing !== undefined && object.listing !== null) {
      for (const e of object.listing) {
        message.listing.push(Listing.fromPartial(e));
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

const baseQueryGetMonoListingRequest: object = { listingId: "" };

export const QueryGetMonoListingRequest = {
  encode(
    message: QueryGetMonoListingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.listingId !== "") {
      writer.uint32(10).string(message.listingId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonoListingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoListingRequest,
    } as QueryGetMonoListingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listingId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoListingRequest {
    const message = {
      ...baseQueryGetMonoListingRequest,
    } as QueryGetMonoListingRequest;
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    return message;
  },

  toJSON(message: QueryGetMonoListingRequest): unknown {
    const obj: any = {};
    message.listingId !== undefined && (obj.listingId = message.listingId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoListingRequest>
  ): QueryGetMonoListingRequest {
    const message = {
      ...baseQueryGetMonoListingRequest,
    } as QueryGetMonoListingRequest;
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    return message;
  },
};

const baseQueryGetMonoListingResponse: object = {};

export const QueryGetMonoListingResponse = {
  encode(
    message: QueryGetMonoListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.monoListing !== undefined) {
      MonoListing.encode(
        message.monoListing,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonoListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoListingResponse,
    } as QueryGetMonoListingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoListing = MonoListing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoListingResponse {
    const message = {
      ...baseQueryGetMonoListingResponse,
    } as QueryGetMonoListingResponse;
    if (object.monoListing !== undefined && object.monoListing !== null) {
      message.monoListing = MonoListing.fromJSON(object.monoListing);
    } else {
      message.monoListing = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMonoListingResponse): unknown {
    const obj: any = {};
    message.monoListing !== undefined &&
      (obj.monoListing = message.monoListing
        ? MonoListing.toJSON(message.monoListing)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoListingResponse>
  ): QueryGetMonoListingResponse {
    const message = {
      ...baseQueryGetMonoListingResponse,
    } as QueryGetMonoListingResponse;
    if (object.monoListing !== undefined && object.monoListing !== null) {
      message.monoListing = MonoListing.fromPartial(object.monoListing);
    } else {
      message.monoListing = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoListingRequest: object = {};

export const QueryAllMonoListingRequest = {
  encode(
    message: QueryAllMonoListingRequest,
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
  ): QueryAllMonoListingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoListingRequest,
    } as QueryAllMonoListingRequest;
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

  fromJSON(object: any): QueryAllMonoListingRequest {
    const message = {
      ...baseQueryAllMonoListingRequest,
    } as QueryAllMonoListingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoListingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoListingRequest>
  ): QueryAllMonoListingRequest {
    const message = {
      ...baseQueryAllMonoListingRequest,
    } as QueryAllMonoListingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoListingResponse: object = {};

export const QueryAllMonoListingResponse = {
  encode(
    message: QueryAllMonoListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.monoListing) {
      MonoListing.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMonoListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoListingResponse,
    } as QueryAllMonoListingResponse;
    message.monoListing = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoListing.push(MonoListing.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMonoListingResponse {
    const message = {
      ...baseQueryAllMonoListingResponse,
    } as QueryAllMonoListingResponse;
    message.monoListing = [];
    if (object.monoListing !== undefined && object.monoListing !== null) {
      for (const e of object.monoListing) {
        message.monoListing.push(MonoListing.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoListingResponse): unknown {
    const obj: any = {};
    if (message.monoListing) {
      obj.monoListing = message.monoListing.map((e) =>
        e ? MonoListing.toJSON(e) : undefined
      );
    } else {
      obj.monoListing = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoListingResponse>
  ): QueryAllMonoListingResponse {
    const message = {
      ...baseQueryAllMonoListingResponse,
    } as QueryAllMonoListingResponse;
    message.monoListing = [];
    if (object.monoListing !== undefined && object.monoListing !== null) {
      for (const e of object.monoListing) {
        message.monoListing.push(MonoListing.fromPartial(e));
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

const baseQueryGetOrderRequest: object = { listingId: "", buyerId: "" };

export const QueryGetOrderRequest = {
  encode(
    message: QueryGetOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.listingId !== "") {
      writer.uint32(10).string(message.listingId);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listingId = reader.string();
          break;
        case 2:
          message.buyerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrderRequest {
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    return message;
  },

  toJSON(message: QueryGetOrderRequest): unknown {
    const obj: any = {};
    message.listingId !== undefined && (obj.listingId = message.listingId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetOrderRequest>): QueryGetOrderRequest {
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest;
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    return message;
  },
};

const baseQueryGetOrderResponse: object = {};

export const QueryGetOrderResponse = {
  encode(
    message: QueryGetOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrderResponse {
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrderResponse>
  ): QueryGetOrderResponse {
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse;
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },
};

const baseQueryAllOrderRequest: object = {};

export const QueryAllOrderRequest = {
  encode(
    message: QueryAllOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
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

  fromJSON(object: any): QueryAllOrderRequest {
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest {
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllOrderResponse: object = {};

export const QueryAllOrderResponse = {
  encode(
    message: QueryAllOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.order) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.order = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order.push(Order.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllOrderResponse {
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.order = [];
    if (object.order !== undefined && object.order !== null) {
      for (const e of object.order) {
        message.order.push(Order.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {};
    if (message.order) {
      obj.order = message.order.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.order = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOrderResponse>
  ): QueryAllOrderResponse {
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse;
    message.order = [];
    if (object.order !== undefined && object.order !== null) {
      for (const e of object.order) {
        message.order.push(Order.fromPartial(e));
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

const baseQueryGetMonoOrderRequest: object = { orderId: "" };

export const QueryGetMonoOrderRequest = {
  encode(
    message: QueryGetMonoOrderRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonoOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoOrderRequest,
    } as QueryGetMonoOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoOrderRequest {
    const message = {
      ...baseQueryGetMonoOrderRequest,
    } as QueryGetMonoOrderRequest;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    return message;
  },

  toJSON(message: QueryGetMonoOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoOrderRequest>
  ): QueryGetMonoOrderRequest {
    const message = {
      ...baseQueryGetMonoOrderRequest,
    } as QueryGetMonoOrderRequest;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    return message;
  },
};

const baseQueryGetMonoOrderResponse: object = {};

export const QueryGetMonoOrderResponse = {
  encode(
    message: QueryGetMonoOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.monoOrder !== undefined) {
      MonoOrder.encode(message.monoOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonoOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoOrderResponse,
    } as QueryGetMonoOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoOrder = MonoOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoOrderResponse {
    const message = {
      ...baseQueryGetMonoOrderResponse,
    } as QueryGetMonoOrderResponse;
    if (object.monoOrder !== undefined && object.monoOrder !== null) {
      message.monoOrder = MonoOrder.fromJSON(object.monoOrder);
    } else {
      message.monoOrder = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMonoOrderResponse): unknown {
    const obj: any = {};
    message.monoOrder !== undefined &&
      (obj.monoOrder = message.monoOrder
        ? MonoOrder.toJSON(message.monoOrder)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoOrderResponse>
  ): QueryGetMonoOrderResponse {
    const message = {
      ...baseQueryGetMonoOrderResponse,
    } as QueryGetMonoOrderResponse;
    if (object.monoOrder !== undefined && object.monoOrder !== null) {
      message.monoOrder = MonoOrder.fromPartial(object.monoOrder);
    } else {
      message.monoOrder = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoOrderRequest: object = {};

export const QueryAllMonoOrderRequest = {
  encode(
    message: QueryAllMonoOrderRequest,
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
  ): QueryAllMonoOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoOrderRequest,
    } as QueryAllMonoOrderRequest;
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

  fromJSON(object: any): QueryAllMonoOrderRequest {
    const message = {
      ...baseQueryAllMonoOrderRequest,
    } as QueryAllMonoOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoOrderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoOrderRequest>
  ): QueryAllMonoOrderRequest {
    const message = {
      ...baseQueryAllMonoOrderRequest,
    } as QueryAllMonoOrderRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoOrderResponse: object = {};

export const QueryAllMonoOrderResponse = {
  encode(
    message: QueryAllMonoOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.monoOrder) {
      MonoOrder.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMonoOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoOrderResponse,
    } as QueryAllMonoOrderResponse;
    message.monoOrder = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoOrder.push(MonoOrder.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMonoOrderResponse {
    const message = {
      ...baseQueryAllMonoOrderResponse,
    } as QueryAllMonoOrderResponse;
    message.monoOrder = [];
    if (object.monoOrder !== undefined && object.monoOrder !== null) {
      for (const e of object.monoOrder) {
        message.monoOrder.push(MonoOrder.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoOrderResponse): unknown {
    const obj: any = {};
    if (message.monoOrder) {
      obj.monoOrder = message.monoOrder.map((e) =>
        e ? MonoOrder.toJSON(e) : undefined
      );
    } else {
      obj.monoOrder = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoOrderResponse>
  ): QueryAllMonoOrderResponse {
    const message = {
      ...baseQueryAllMonoOrderResponse,
    } as QueryAllMonoOrderResponse;
    message.monoOrder = [];
    if (object.monoOrder !== undefined && object.monoOrder !== null) {
      for (const e of object.monoOrder) {
        message.monoOrder.push(MonoOrder.fromPartial(e));
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
  /** Queries a Listing by index. */
  Listing(request: QueryGetListingRequest): Promise<QueryGetListingResponse>;
  /** Queries a list of Listing items. */
  ListingAll(request: QueryAllListingRequest): Promise<QueryAllListingResponse>;
  /** Queries a MonoListing by index. */
  MonoListing(
    request: QueryGetMonoListingRequest
  ): Promise<QueryGetMonoListingResponse>;
  /** Queries a list of MonoListing items. */
  MonoListingAll(
    request: QueryAllMonoListingRequest
  ): Promise<QueryAllMonoListingResponse>;
  /** Queries a Order by index. */
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
  /** Queries a list of Order items. */
  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
  /** Queries a MonoOrder by index. */
  MonoOrder(
    request: QueryGetMonoOrderRequest
  ): Promise<QueryGetMonoOrderResponse>;
  /** Queries a list of MonoOrder items. */
  MonoOrderAll(
    request: QueryAllMonoOrderRequest
  ): Promise<QueryAllMonoOrderResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Listing(request: QueryGetListingRequest): Promise<QueryGetListingResponse> {
    const data = QueryGetListingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Query",
      "Listing",
      data
    );
    return promise.then((data) =>
      QueryGetListingResponse.decode(new Reader(data))
    );
  }

  ListingAll(
    request: QueryAllListingRequest
  ): Promise<QueryAllListingResponse> {
    const data = QueryAllListingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Query",
      "ListingAll",
      data
    );
    return promise.then((data) =>
      QueryAllListingResponse.decode(new Reader(data))
    );
  }

  MonoListing(
    request: QueryGetMonoListingRequest
  ): Promise<QueryGetMonoListingResponse> {
    const data = QueryGetMonoListingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Query",
      "MonoListing",
      data
    );
    return promise.then((data) =>
      QueryGetMonoListingResponse.decode(new Reader(data))
    );
  }

  MonoListingAll(
    request: QueryAllMonoListingRequest
  ): Promise<QueryAllMonoListingResponse> {
    const data = QueryAllMonoListingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Query",
      "MonoListingAll",
      data
    );
    return promise.then((data) =>
      QueryAllMonoListingResponse.decode(new Reader(data))
    );
  }

  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse> {
    const data = QueryGetOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Query",
      "Order",
      data
    );
    return promise.then((data) =>
      QueryGetOrderResponse.decode(new Reader(data))
    );
  }

  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse> {
    const data = QueryAllOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Query",
      "OrderAll",
      data
    );
    return promise.then((data) =>
      QueryAllOrderResponse.decode(new Reader(data))
    );
  }

  MonoOrder(
    request: QueryGetMonoOrderRequest
  ): Promise<QueryGetMonoOrderResponse> {
    const data = QueryGetMonoOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Query",
      "MonoOrder",
      data
    );
    return promise.then((data) =>
      QueryGetMonoOrderResponse.decode(new Reader(data))
    );
  }

  MonoOrderAll(
    request: QueryAllMonoOrderRequest
  ): Promise<QueryAllMonoOrderResponse> {
    const data = QueryAllMonoOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Query",
      "MonoOrderAll",
      data
    );
    return promise.then((data) =>
      QueryAllMonoOrderResponse.decode(new Reader(data))
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
