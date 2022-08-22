/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../escrow/params";
import { BuyerCrow } from "../escrow/buyer_crow";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { BuyerMonoCrow } from "../escrow/buyer_mono_crow";
import { SellerCrow } from "../escrow/seller_crow";
import { SellerMonoCrow } from "../escrow/seller_mono_crow";
import { Crow } from "../escrow/crow";
import { MonoCrow } from "../escrow/mono_crow";
import { Dispute } from "../escrow/dispute";
import { MonoDispute } from "../escrow/mono_dispute";
import { Rebuttal } from "../escrow/rebuttal";
import { MonoRebutal } from "../escrow/mono_rebutal";
import { Ballot } from "../escrow/ballot";
import { Vote } from "../escrow/vote";
import { Poll } from "../escrow/poll";
import { Verdict } from "../escrow/verdict";

export const protobufPackage = "crowlabs.delta.escrow";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetBuyerCrowRequest {
  crowId: string;
  buyerId: string;
}

export interface QueryGetBuyerCrowResponse {
  buyerCrow: BuyerCrow | undefined;
}

export interface QueryAllBuyerCrowRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBuyerCrowResponse {
  buyerCrow: BuyerCrow[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBuyerMonoCrowRequest {
  buyerCrowId: string;
}

export interface QueryGetBuyerMonoCrowResponse {
  buyerMonoCrow: BuyerMonoCrow | undefined;
}

export interface QueryAllBuyerMonoCrowRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBuyerMonoCrowResponse {
  buyerMonoCrow: BuyerMonoCrow[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSellerCrowRequest {
  crowId: string;
  sellerId: string;
}

export interface QueryGetSellerCrowResponse {
  sellerCrow: SellerCrow | undefined;
}

export interface QueryAllSellerCrowRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSellerCrowResponse {
  sellerCrow: SellerCrow[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSellerMonoCrowRequest {
  sellerCrowId: string;
}

export interface QueryGetSellerMonoCrowResponse {
  sellerMonoCrow: SellerMonoCrow | undefined;
}

export interface QueryAllSellerMonoCrowRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSellerMonoCrowResponse {
  sellerMonoCrow: SellerMonoCrow[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCrowRequest {
  orderId: string;
  listingId: string;
}

export interface QueryGetCrowResponse {
  crow: Crow | undefined;
}

export interface QueryAllCrowRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCrowResponse {
  crow: Crow[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMonoCrowRequest {
  crowId: string;
}

export interface QueryGetMonoCrowResponse {
  monoCrow: MonoCrow | undefined;
}

export interface QueryAllMonoCrowRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMonoCrowResponse {
  monoCrow: MonoCrow[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDisputeRequest {
  crowId: string;
  plaintiffId: string;
}

export interface QueryGetDisputeResponse {
  dispute: Dispute | undefined;
}

export interface QueryAllDisputeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDisputeResponse {
  dispute: Dispute[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMonoDisputeRequest {
  disputeId: string;
}

export interface QueryGetMonoDisputeResponse {
  monoDispute: MonoDispute | undefined;
}

export interface QueryAllMonoDisputeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMonoDisputeResponse {
  monoDispute: MonoDispute[];
  pagination: PageResponse | undefined;
}

export interface QueryGetRebuttalRequest {
  disputeId: string;
  defendantId: string;
}

export interface QueryGetRebuttalResponse {
  rebuttal: Rebuttal | undefined;
}

export interface QueryAllRebuttalRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRebuttalResponse {
  rebuttal: Rebuttal[];
  pagination: PageResponse | undefined;
}

export interface QueryGetMonoRebutalRequest {
  rebuttalId: string;
}

export interface QueryGetMonoRebutalResponse {
  monoRebutal: MonoRebutal | undefined;
}

export interface QueryAllMonoRebutalRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMonoRebutalResponse {
  monoRebutal: MonoRebutal[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBallotRequest {
  disputeId: string;
  voterId: string;
}

export interface QueryGetBallotResponse {
  ballot: Ballot | undefined;
}

export interface QueryAllBallotRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBallotResponse {
  ballot: Ballot[];
  pagination: PageResponse | undefined;
}

export interface QueryGetVoteRequest {
  voteId: string;
}

export interface QueryGetVoteResponse {
  vote: Vote | undefined;
}

export interface QueryAllVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVoteResponse {
  vote: Vote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPollRequest {
  crowId: string;
  disputeId: string;
}

export interface QueryGetPollResponse {
  poll: Poll | undefined;
}

export interface QueryAllPollRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPollResponse {
  poll: Poll[];
  pagination: PageResponse | undefined;
}

export interface QueryGetVerdictRequest {
  verdictId: string;
}

export interface QueryGetVerdictResponse {
  verdict: Verdict | undefined;
}

export interface QueryAllVerdictRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllVerdictResponse {
  verdict: Verdict[];
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

const baseQueryGetBuyerCrowRequest: object = { crowId: "", buyerId: "" };

export const QueryGetBuyerCrowRequest = {
  encode(
    message: QueryGetBuyerCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBuyerCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuyerCrowRequest,
    } as QueryGetBuyerCrowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
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

  fromJSON(object: any): QueryGetBuyerCrowRequest {
    const message = {
      ...baseQueryGetBuyerCrowRequest,
    } as QueryGetBuyerCrowRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    return message;
  },

  toJSON(message: QueryGetBuyerCrowRequest): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyerCrowRequest>
  ): QueryGetBuyerCrowRequest {
    const message = {
      ...baseQueryGetBuyerCrowRequest,
    } as QueryGetBuyerCrowRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    return message;
  },
};

const baseQueryGetBuyerCrowResponse: object = {};

export const QueryGetBuyerCrowResponse = {
  encode(
    message: QueryGetBuyerCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyerCrow !== undefined) {
      BuyerCrow.encode(message.buyerCrow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBuyerCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuyerCrowResponse,
    } as QueryGetBuyerCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerCrow = BuyerCrow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyerCrowResponse {
    const message = {
      ...baseQueryGetBuyerCrowResponse,
    } as QueryGetBuyerCrowResponse;
    if (object.buyerCrow !== undefined && object.buyerCrow !== null) {
      message.buyerCrow = BuyerCrow.fromJSON(object.buyerCrow);
    } else {
      message.buyerCrow = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBuyerCrowResponse): unknown {
    const obj: any = {};
    message.buyerCrow !== undefined &&
      (obj.buyerCrow = message.buyerCrow
        ? BuyerCrow.toJSON(message.buyerCrow)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyerCrowResponse>
  ): QueryGetBuyerCrowResponse {
    const message = {
      ...baseQueryGetBuyerCrowResponse,
    } as QueryGetBuyerCrowResponse;
    if (object.buyerCrow !== undefined && object.buyerCrow !== null) {
      message.buyerCrow = BuyerCrow.fromPartial(object.buyerCrow);
    } else {
      message.buyerCrow = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyerCrowRequest: object = {};

export const QueryAllBuyerCrowRequest = {
  encode(
    message: QueryAllBuyerCrowRequest,
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
  ): QueryAllBuyerCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuyerCrowRequest,
    } as QueryAllBuyerCrowRequest;
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

  fromJSON(object: any): QueryAllBuyerCrowRequest {
    const message = {
      ...baseQueryAllBuyerCrowRequest,
    } as QueryAllBuyerCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyerCrowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyerCrowRequest>
  ): QueryAllBuyerCrowRequest {
    const message = {
      ...baseQueryAllBuyerCrowRequest,
    } as QueryAllBuyerCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyerCrowResponse: object = {};

export const QueryAllBuyerCrowResponse = {
  encode(
    message: QueryAllBuyerCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.buyerCrow) {
      BuyerCrow.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllBuyerCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuyerCrowResponse,
    } as QueryAllBuyerCrowResponse;
    message.buyerCrow = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerCrow.push(BuyerCrow.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBuyerCrowResponse {
    const message = {
      ...baseQueryAllBuyerCrowResponse,
    } as QueryAllBuyerCrowResponse;
    message.buyerCrow = [];
    if (object.buyerCrow !== undefined && object.buyerCrow !== null) {
      for (const e of object.buyerCrow) {
        message.buyerCrow.push(BuyerCrow.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyerCrowResponse): unknown {
    const obj: any = {};
    if (message.buyerCrow) {
      obj.buyerCrow = message.buyerCrow.map((e) =>
        e ? BuyerCrow.toJSON(e) : undefined
      );
    } else {
      obj.buyerCrow = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyerCrowResponse>
  ): QueryAllBuyerCrowResponse {
    const message = {
      ...baseQueryAllBuyerCrowResponse,
    } as QueryAllBuyerCrowResponse;
    message.buyerCrow = [];
    if (object.buyerCrow !== undefined && object.buyerCrow !== null) {
      for (const e of object.buyerCrow) {
        message.buyerCrow.push(BuyerCrow.fromPartial(e));
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

const baseQueryGetBuyerMonoCrowRequest: object = { buyerCrowId: "" };

export const QueryGetBuyerMonoCrowRequest = {
  encode(
    message: QueryGetBuyerMonoCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyerCrowId !== "") {
      writer.uint32(10).string(message.buyerCrowId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBuyerMonoCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuyerMonoCrowRequest,
    } as QueryGetBuyerMonoCrowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerCrowId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyerMonoCrowRequest {
    const message = {
      ...baseQueryGetBuyerMonoCrowRequest,
    } as QueryGetBuyerMonoCrowRequest;
    if (object.buyerCrowId !== undefined && object.buyerCrowId !== null) {
      message.buyerCrowId = String(object.buyerCrowId);
    } else {
      message.buyerCrowId = "";
    }
    return message;
  },

  toJSON(message: QueryGetBuyerMonoCrowRequest): unknown {
    const obj: any = {};
    message.buyerCrowId !== undefined &&
      (obj.buyerCrowId = message.buyerCrowId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyerMonoCrowRequest>
  ): QueryGetBuyerMonoCrowRequest {
    const message = {
      ...baseQueryGetBuyerMonoCrowRequest,
    } as QueryGetBuyerMonoCrowRequest;
    if (object.buyerCrowId !== undefined && object.buyerCrowId !== null) {
      message.buyerCrowId = object.buyerCrowId;
    } else {
      message.buyerCrowId = "";
    }
    return message;
  },
};

const baseQueryGetBuyerMonoCrowResponse: object = {};

export const QueryGetBuyerMonoCrowResponse = {
  encode(
    message: QueryGetBuyerMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyerMonoCrow !== undefined) {
      BuyerMonoCrow.encode(
        message.buyerMonoCrow,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBuyerMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBuyerMonoCrowResponse,
    } as QueryGetBuyerMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerMonoCrow = BuyerMonoCrow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBuyerMonoCrowResponse {
    const message = {
      ...baseQueryGetBuyerMonoCrowResponse,
    } as QueryGetBuyerMonoCrowResponse;
    if (object.buyerMonoCrow !== undefined && object.buyerMonoCrow !== null) {
      message.buyerMonoCrow = BuyerMonoCrow.fromJSON(object.buyerMonoCrow);
    } else {
      message.buyerMonoCrow = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBuyerMonoCrowResponse): unknown {
    const obj: any = {};
    message.buyerMonoCrow !== undefined &&
      (obj.buyerMonoCrow = message.buyerMonoCrow
        ? BuyerMonoCrow.toJSON(message.buyerMonoCrow)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBuyerMonoCrowResponse>
  ): QueryGetBuyerMonoCrowResponse {
    const message = {
      ...baseQueryGetBuyerMonoCrowResponse,
    } as QueryGetBuyerMonoCrowResponse;
    if (object.buyerMonoCrow !== undefined && object.buyerMonoCrow !== null) {
      message.buyerMonoCrow = BuyerMonoCrow.fromPartial(object.buyerMonoCrow);
    } else {
      message.buyerMonoCrow = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyerMonoCrowRequest: object = {};

export const QueryAllBuyerMonoCrowRequest = {
  encode(
    message: QueryAllBuyerMonoCrowRequest,
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
  ): QueryAllBuyerMonoCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuyerMonoCrowRequest,
    } as QueryAllBuyerMonoCrowRequest;
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

  fromJSON(object: any): QueryAllBuyerMonoCrowRequest {
    const message = {
      ...baseQueryAllBuyerMonoCrowRequest,
    } as QueryAllBuyerMonoCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyerMonoCrowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyerMonoCrowRequest>
  ): QueryAllBuyerMonoCrowRequest {
    const message = {
      ...baseQueryAllBuyerMonoCrowRequest,
    } as QueryAllBuyerMonoCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBuyerMonoCrowResponse: object = {};

export const QueryAllBuyerMonoCrowResponse = {
  encode(
    message: QueryAllBuyerMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.buyerMonoCrow) {
      BuyerMonoCrow.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllBuyerMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBuyerMonoCrowResponse,
    } as QueryAllBuyerMonoCrowResponse;
    message.buyerMonoCrow = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerMonoCrow.push(
            BuyerMonoCrow.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllBuyerMonoCrowResponse {
    const message = {
      ...baseQueryAllBuyerMonoCrowResponse,
    } as QueryAllBuyerMonoCrowResponse;
    message.buyerMonoCrow = [];
    if (object.buyerMonoCrow !== undefined && object.buyerMonoCrow !== null) {
      for (const e of object.buyerMonoCrow) {
        message.buyerMonoCrow.push(BuyerMonoCrow.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBuyerMonoCrowResponse): unknown {
    const obj: any = {};
    if (message.buyerMonoCrow) {
      obj.buyerMonoCrow = message.buyerMonoCrow.map((e) =>
        e ? BuyerMonoCrow.toJSON(e) : undefined
      );
    } else {
      obj.buyerMonoCrow = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBuyerMonoCrowResponse>
  ): QueryAllBuyerMonoCrowResponse {
    const message = {
      ...baseQueryAllBuyerMonoCrowResponse,
    } as QueryAllBuyerMonoCrowResponse;
    message.buyerMonoCrow = [];
    if (object.buyerMonoCrow !== undefined && object.buyerMonoCrow !== null) {
      for (const e of object.buyerMonoCrow) {
        message.buyerMonoCrow.push(BuyerMonoCrow.fromPartial(e));
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

const baseQueryGetSellerCrowRequest: object = { crowId: "", sellerId: "" };

export const QueryGetSellerCrowRequest = {
  encode(
    message: QueryGetSellerCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    if (message.sellerId !== "") {
      writer.uint32(18).string(message.sellerId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSellerCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSellerCrowRequest,
    } as QueryGetSellerCrowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
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

  fromJSON(object: any): QueryGetSellerCrowRequest {
    const message = {
      ...baseQueryGetSellerCrowRequest,
    } as QueryGetSellerCrowRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    return message;
  },

  toJSON(message: QueryGetSellerCrowRequest): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellerCrowRequest>
  ): QueryGetSellerCrowRequest {
    const message = {
      ...baseQueryGetSellerCrowRequest,
    } as QueryGetSellerCrowRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    return message;
  },
};

const baseQueryGetSellerCrowResponse: object = {};

export const QueryGetSellerCrowResponse = {
  encode(
    message: QueryGetSellerCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sellerCrow !== undefined) {
      SellerCrow.encode(message.sellerCrow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSellerCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSellerCrowResponse,
    } as QueryGetSellerCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerCrow = SellerCrow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSellerCrowResponse {
    const message = {
      ...baseQueryGetSellerCrowResponse,
    } as QueryGetSellerCrowResponse;
    if (object.sellerCrow !== undefined && object.sellerCrow !== null) {
      message.sellerCrow = SellerCrow.fromJSON(object.sellerCrow);
    } else {
      message.sellerCrow = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSellerCrowResponse): unknown {
    const obj: any = {};
    message.sellerCrow !== undefined &&
      (obj.sellerCrow = message.sellerCrow
        ? SellerCrow.toJSON(message.sellerCrow)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellerCrowResponse>
  ): QueryGetSellerCrowResponse {
    const message = {
      ...baseQueryGetSellerCrowResponse,
    } as QueryGetSellerCrowResponse;
    if (object.sellerCrow !== undefined && object.sellerCrow !== null) {
      message.sellerCrow = SellerCrow.fromPartial(object.sellerCrow);
    } else {
      message.sellerCrow = undefined;
    }
    return message;
  },
};

const baseQueryAllSellerCrowRequest: object = {};

export const QueryAllSellerCrowRequest = {
  encode(
    message: QueryAllSellerCrowRequest,
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
  ): QueryAllSellerCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSellerCrowRequest,
    } as QueryAllSellerCrowRequest;
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

  fromJSON(object: any): QueryAllSellerCrowRequest {
    const message = {
      ...baseQueryAllSellerCrowRequest,
    } as QueryAllSellerCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellerCrowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellerCrowRequest>
  ): QueryAllSellerCrowRequest {
    const message = {
      ...baseQueryAllSellerCrowRequest,
    } as QueryAllSellerCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSellerCrowResponse: object = {};

export const QueryAllSellerCrowResponse = {
  encode(
    message: QueryAllSellerCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.sellerCrow) {
      SellerCrow.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllSellerCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSellerCrowResponse,
    } as QueryAllSellerCrowResponse;
    message.sellerCrow = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerCrow.push(SellerCrow.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllSellerCrowResponse {
    const message = {
      ...baseQueryAllSellerCrowResponse,
    } as QueryAllSellerCrowResponse;
    message.sellerCrow = [];
    if (object.sellerCrow !== undefined && object.sellerCrow !== null) {
      for (const e of object.sellerCrow) {
        message.sellerCrow.push(SellerCrow.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellerCrowResponse): unknown {
    const obj: any = {};
    if (message.sellerCrow) {
      obj.sellerCrow = message.sellerCrow.map((e) =>
        e ? SellerCrow.toJSON(e) : undefined
      );
    } else {
      obj.sellerCrow = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellerCrowResponse>
  ): QueryAllSellerCrowResponse {
    const message = {
      ...baseQueryAllSellerCrowResponse,
    } as QueryAllSellerCrowResponse;
    message.sellerCrow = [];
    if (object.sellerCrow !== undefined && object.sellerCrow !== null) {
      for (const e of object.sellerCrow) {
        message.sellerCrow.push(SellerCrow.fromPartial(e));
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

const baseQueryGetSellerMonoCrowRequest: object = { sellerCrowId: "" };

export const QueryGetSellerMonoCrowRequest = {
  encode(
    message: QueryGetSellerMonoCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sellerCrowId !== "") {
      writer.uint32(10).string(message.sellerCrowId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSellerMonoCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSellerMonoCrowRequest,
    } as QueryGetSellerMonoCrowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerCrowId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSellerMonoCrowRequest {
    const message = {
      ...baseQueryGetSellerMonoCrowRequest,
    } as QueryGetSellerMonoCrowRequest;
    if (object.sellerCrowId !== undefined && object.sellerCrowId !== null) {
      message.sellerCrowId = String(object.sellerCrowId);
    } else {
      message.sellerCrowId = "";
    }
    return message;
  },

  toJSON(message: QueryGetSellerMonoCrowRequest): unknown {
    const obj: any = {};
    message.sellerCrowId !== undefined &&
      (obj.sellerCrowId = message.sellerCrowId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellerMonoCrowRequest>
  ): QueryGetSellerMonoCrowRequest {
    const message = {
      ...baseQueryGetSellerMonoCrowRequest,
    } as QueryGetSellerMonoCrowRequest;
    if (object.sellerCrowId !== undefined && object.sellerCrowId !== null) {
      message.sellerCrowId = object.sellerCrowId;
    } else {
      message.sellerCrowId = "";
    }
    return message;
  },
};

const baseQueryGetSellerMonoCrowResponse: object = {};

export const QueryGetSellerMonoCrowResponse = {
  encode(
    message: QueryGetSellerMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sellerMonoCrow !== undefined) {
      SellerMonoCrow.encode(
        message.sellerMonoCrow,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSellerMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSellerMonoCrowResponse,
    } as QueryGetSellerMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerMonoCrow = SellerMonoCrow.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSellerMonoCrowResponse {
    const message = {
      ...baseQueryGetSellerMonoCrowResponse,
    } as QueryGetSellerMonoCrowResponse;
    if (object.sellerMonoCrow !== undefined && object.sellerMonoCrow !== null) {
      message.sellerMonoCrow = SellerMonoCrow.fromJSON(object.sellerMonoCrow);
    } else {
      message.sellerMonoCrow = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSellerMonoCrowResponse): unknown {
    const obj: any = {};
    message.sellerMonoCrow !== undefined &&
      (obj.sellerMonoCrow = message.sellerMonoCrow
        ? SellerMonoCrow.toJSON(message.sellerMonoCrow)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSellerMonoCrowResponse>
  ): QueryGetSellerMonoCrowResponse {
    const message = {
      ...baseQueryGetSellerMonoCrowResponse,
    } as QueryGetSellerMonoCrowResponse;
    if (object.sellerMonoCrow !== undefined && object.sellerMonoCrow !== null) {
      message.sellerMonoCrow = SellerMonoCrow.fromPartial(
        object.sellerMonoCrow
      );
    } else {
      message.sellerMonoCrow = undefined;
    }
    return message;
  },
};

const baseQueryAllSellerMonoCrowRequest: object = {};

export const QueryAllSellerMonoCrowRequest = {
  encode(
    message: QueryAllSellerMonoCrowRequest,
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
  ): QueryAllSellerMonoCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSellerMonoCrowRequest,
    } as QueryAllSellerMonoCrowRequest;
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

  fromJSON(object: any): QueryAllSellerMonoCrowRequest {
    const message = {
      ...baseQueryAllSellerMonoCrowRequest,
    } as QueryAllSellerMonoCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellerMonoCrowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellerMonoCrowRequest>
  ): QueryAllSellerMonoCrowRequest {
    const message = {
      ...baseQueryAllSellerMonoCrowRequest,
    } as QueryAllSellerMonoCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSellerMonoCrowResponse: object = {};

export const QueryAllSellerMonoCrowResponse = {
  encode(
    message: QueryAllSellerMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.sellerMonoCrow) {
      SellerMonoCrow.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllSellerMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSellerMonoCrowResponse,
    } as QueryAllSellerMonoCrowResponse;
    message.sellerMonoCrow = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerMonoCrow.push(
            SellerMonoCrow.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllSellerMonoCrowResponse {
    const message = {
      ...baseQueryAllSellerMonoCrowResponse,
    } as QueryAllSellerMonoCrowResponse;
    message.sellerMonoCrow = [];
    if (object.sellerMonoCrow !== undefined && object.sellerMonoCrow !== null) {
      for (const e of object.sellerMonoCrow) {
        message.sellerMonoCrow.push(SellerMonoCrow.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSellerMonoCrowResponse): unknown {
    const obj: any = {};
    if (message.sellerMonoCrow) {
      obj.sellerMonoCrow = message.sellerMonoCrow.map((e) =>
        e ? SellerMonoCrow.toJSON(e) : undefined
      );
    } else {
      obj.sellerMonoCrow = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSellerMonoCrowResponse>
  ): QueryAllSellerMonoCrowResponse {
    const message = {
      ...baseQueryAllSellerMonoCrowResponse,
    } as QueryAllSellerMonoCrowResponse;
    message.sellerMonoCrow = [];
    if (object.sellerMonoCrow !== undefined && object.sellerMonoCrow !== null) {
      for (const e of object.sellerMonoCrow) {
        message.sellerMonoCrow.push(SellerMonoCrow.fromPartial(e));
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

const baseQueryGetCrowRequest: object = { orderId: "", listingId: "" };

export const QueryGetCrowRequest = {
  encode(
    message: QueryGetCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.listingId !== "") {
      writer.uint32(18).string(message.listingId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCrowRequest } as QueryGetCrowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.listingId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCrowRequest {
    const message = { ...baseQueryGetCrowRequest } as QueryGetCrowRequest;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    return message;
  },

  toJSON(message: QueryGetCrowRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.listingId !== undefined && (obj.listingId = message.listingId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCrowRequest>): QueryGetCrowRequest {
    const message = { ...baseQueryGetCrowRequest } as QueryGetCrowRequest;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    return message;
  },
};

const baseQueryGetCrowResponse: object = {};

export const QueryGetCrowResponse = {
  encode(
    message: QueryGetCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crow !== undefined) {
      Crow.encode(message.crow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCrowResponse } as QueryGetCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crow = Crow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCrowResponse {
    const message = { ...baseQueryGetCrowResponse } as QueryGetCrowResponse;
    if (object.crow !== undefined && object.crow !== null) {
      message.crow = Crow.fromJSON(object.crow);
    } else {
      message.crow = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCrowResponse): unknown {
    const obj: any = {};
    message.crow !== undefined &&
      (obj.crow = message.crow ? Crow.toJSON(message.crow) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCrowResponse>): QueryGetCrowResponse {
    const message = { ...baseQueryGetCrowResponse } as QueryGetCrowResponse;
    if (object.crow !== undefined && object.crow !== null) {
      message.crow = Crow.fromPartial(object.crow);
    } else {
      message.crow = undefined;
    }
    return message;
  },
};

const baseQueryAllCrowRequest: object = {};

export const QueryAllCrowRequest = {
  encode(
    message: QueryAllCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCrowRequest } as QueryAllCrowRequest;
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

  fromJSON(object: any): QueryAllCrowRequest {
    const message = { ...baseQueryAllCrowRequest } as QueryAllCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCrowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllCrowRequest>): QueryAllCrowRequest {
    const message = { ...baseQueryAllCrowRequest } as QueryAllCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCrowResponse: object = {};

export const QueryAllCrowResponse = {
  encode(
    message: QueryAllCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.crow) {
      Crow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCrowResponse } as QueryAllCrowResponse;
    message.crow = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crow.push(Crow.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllCrowResponse {
    const message = { ...baseQueryAllCrowResponse } as QueryAllCrowResponse;
    message.crow = [];
    if (object.crow !== undefined && object.crow !== null) {
      for (const e of object.crow) {
        message.crow.push(Crow.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCrowResponse): unknown {
    const obj: any = {};
    if (message.crow) {
      obj.crow = message.crow.map((e) => (e ? Crow.toJSON(e) : undefined));
    } else {
      obj.crow = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllCrowResponse>): QueryAllCrowResponse {
    const message = { ...baseQueryAllCrowResponse } as QueryAllCrowResponse;
    message.crow = [];
    if (object.crow !== undefined && object.crow !== null) {
      for (const e of object.crow) {
        message.crow.push(Crow.fromPartial(e));
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

const baseQueryGetMonoCrowRequest: object = { crowId: "" };

export const QueryGetMonoCrowRequest = {
  encode(
    message: QueryGetMonoCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMonoCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoCrowRequest,
    } as QueryGetMonoCrowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoCrowRequest {
    const message = {
      ...baseQueryGetMonoCrowRequest,
    } as QueryGetMonoCrowRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    return message;
  },

  toJSON(message: QueryGetMonoCrowRequest): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoCrowRequest>
  ): QueryGetMonoCrowRequest {
    const message = {
      ...baseQueryGetMonoCrowRequest,
    } as QueryGetMonoCrowRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    return message;
  },
};

const baseQueryGetMonoCrowResponse: object = {};

export const QueryGetMonoCrowResponse = {
  encode(
    message: QueryGetMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.monoCrow !== undefined) {
      MonoCrow.encode(message.monoCrow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoCrowResponse,
    } as QueryGetMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoCrow = MonoCrow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoCrowResponse {
    const message = {
      ...baseQueryGetMonoCrowResponse,
    } as QueryGetMonoCrowResponse;
    if (object.monoCrow !== undefined && object.monoCrow !== null) {
      message.monoCrow = MonoCrow.fromJSON(object.monoCrow);
    } else {
      message.monoCrow = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMonoCrowResponse): unknown {
    const obj: any = {};
    message.monoCrow !== undefined &&
      (obj.monoCrow = message.monoCrow
        ? MonoCrow.toJSON(message.monoCrow)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoCrowResponse>
  ): QueryGetMonoCrowResponse {
    const message = {
      ...baseQueryGetMonoCrowResponse,
    } as QueryGetMonoCrowResponse;
    if (object.monoCrow !== undefined && object.monoCrow !== null) {
      message.monoCrow = MonoCrow.fromPartial(object.monoCrow);
    } else {
      message.monoCrow = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoCrowRequest: object = {};

export const QueryAllMonoCrowRequest = {
  encode(
    message: QueryAllMonoCrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMonoCrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoCrowRequest,
    } as QueryAllMonoCrowRequest;
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

  fromJSON(object: any): QueryAllMonoCrowRequest {
    const message = {
      ...baseQueryAllMonoCrowRequest,
    } as QueryAllMonoCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoCrowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoCrowRequest>
  ): QueryAllMonoCrowRequest {
    const message = {
      ...baseQueryAllMonoCrowRequest,
    } as QueryAllMonoCrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoCrowResponse: object = {};

export const QueryAllMonoCrowResponse = {
  encode(
    message: QueryAllMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.monoCrow) {
      MonoCrow.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoCrowResponse,
    } as QueryAllMonoCrowResponse;
    message.monoCrow = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoCrow.push(MonoCrow.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMonoCrowResponse {
    const message = {
      ...baseQueryAllMonoCrowResponse,
    } as QueryAllMonoCrowResponse;
    message.monoCrow = [];
    if (object.monoCrow !== undefined && object.monoCrow !== null) {
      for (const e of object.monoCrow) {
        message.monoCrow.push(MonoCrow.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoCrowResponse): unknown {
    const obj: any = {};
    if (message.monoCrow) {
      obj.monoCrow = message.monoCrow.map((e) =>
        e ? MonoCrow.toJSON(e) : undefined
      );
    } else {
      obj.monoCrow = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoCrowResponse>
  ): QueryAllMonoCrowResponse {
    const message = {
      ...baseQueryAllMonoCrowResponse,
    } as QueryAllMonoCrowResponse;
    message.monoCrow = [];
    if (object.monoCrow !== undefined && object.monoCrow !== null) {
      for (const e of object.monoCrow) {
        message.monoCrow.push(MonoCrow.fromPartial(e));
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

const baseQueryGetDisputeRequest: object = { crowId: "", plaintiffId: "" };

export const QueryGetDisputeRequest = {
  encode(
    message: QueryGetDisputeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    if (message.plaintiffId !== "") {
      writer.uint32(18).string(message.plaintiffId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDisputeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDisputeRequest } as QueryGetDisputeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
          break;
        case 2:
          message.plaintiffId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDisputeRequest {
    const message = { ...baseQueryGetDisputeRequest } as QueryGetDisputeRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    if (object.plaintiffId !== undefined && object.plaintiffId !== null) {
      message.plaintiffId = String(object.plaintiffId);
    } else {
      message.plaintiffId = "";
    }
    return message;
  },

  toJSON(message: QueryGetDisputeRequest): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.plaintiffId !== undefined &&
      (obj.plaintiffId = message.plaintiffId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDisputeRequest>
  ): QueryGetDisputeRequest {
    const message = { ...baseQueryGetDisputeRequest } as QueryGetDisputeRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    if (object.plaintiffId !== undefined && object.plaintiffId !== null) {
      message.plaintiffId = object.plaintiffId;
    } else {
      message.plaintiffId = "";
    }
    return message;
  },
};

const baseQueryGetDisputeResponse: object = {};

export const QueryGetDisputeResponse = {
  encode(
    message: QueryGetDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dispute !== undefined) {
      Dispute.encode(message.dispute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDisputeResponse,
    } as QueryGetDisputeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dispute = Dispute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDisputeResponse {
    const message = {
      ...baseQueryGetDisputeResponse,
    } as QueryGetDisputeResponse;
    if (object.dispute !== undefined && object.dispute !== null) {
      message.dispute = Dispute.fromJSON(object.dispute);
    } else {
      message.dispute = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDisputeResponse): unknown {
    const obj: any = {};
    message.dispute !== undefined &&
      (obj.dispute = message.dispute
        ? Dispute.toJSON(message.dispute)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDisputeResponse>
  ): QueryGetDisputeResponse {
    const message = {
      ...baseQueryGetDisputeResponse,
    } as QueryGetDisputeResponse;
    if (object.dispute !== undefined && object.dispute !== null) {
      message.dispute = Dispute.fromPartial(object.dispute);
    } else {
      message.dispute = undefined;
    }
    return message;
  },
};

const baseQueryAllDisputeRequest: object = {};

export const QueryAllDisputeRequest = {
  encode(
    message: QueryAllDisputeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDisputeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDisputeRequest } as QueryAllDisputeRequest;
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

  fromJSON(object: any): QueryAllDisputeRequest {
    const message = { ...baseQueryAllDisputeRequest } as QueryAllDisputeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDisputeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDisputeRequest>
  ): QueryAllDisputeRequest {
    const message = { ...baseQueryAllDisputeRequest } as QueryAllDisputeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDisputeResponse: object = {};

export const QueryAllDisputeResponse = {
  encode(
    message: QueryAllDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.dispute) {
      Dispute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDisputeResponse,
    } as QueryAllDisputeResponse;
    message.dispute = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dispute.push(Dispute.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllDisputeResponse {
    const message = {
      ...baseQueryAllDisputeResponse,
    } as QueryAllDisputeResponse;
    message.dispute = [];
    if (object.dispute !== undefined && object.dispute !== null) {
      for (const e of object.dispute) {
        message.dispute.push(Dispute.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDisputeResponse): unknown {
    const obj: any = {};
    if (message.dispute) {
      obj.dispute = message.dispute.map((e) =>
        e ? Dispute.toJSON(e) : undefined
      );
    } else {
      obj.dispute = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDisputeResponse>
  ): QueryAllDisputeResponse {
    const message = {
      ...baseQueryAllDisputeResponse,
    } as QueryAllDisputeResponse;
    message.dispute = [];
    if (object.dispute !== undefined && object.dispute !== null) {
      for (const e of object.dispute) {
        message.dispute.push(Dispute.fromPartial(e));
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

const baseQueryGetMonoDisputeRequest: object = { disputeId: "" };

export const QueryGetMonoDisputeRequest = {
  encode(
    message: QueryGetMonoDisputeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.disputeId !== "") {
      writer.uint32(10).string(message.disputeId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonoDisputeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoDisputeRequest,
    } as QueryGetMonoDisputeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoDisputeRequest {
    const message = {
      ...baseQueryGetMonoDisputeRequest,
    } as QueryGetMonoDisputeRequest;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    return message;
  },

  toJSON(message: QueryGetMonoDisputeRequest): unknown {
    const obj: any = {};
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoDisputeRequest>
  ): QueryGetMonoDisputeRequest {
    const message = {
      ...baseQueryGetMonoDisputeRequest,
    } as QueryGetMonoDisputeRequest;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    return message;
  },
};

const baseQueryGetMonoDisputeResponse: object = {};

export const QueryGetMonoDisputeResponse = {
  encode(
    message: QueryGetMonoDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.monoDispute !== undefined) {
      MonoDispute.encode(
        message.monoDispute,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonoDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoDisputeResponse,
    } as QueryGetMonoDisputeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoDispute = MonoDispute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoDisputeResponse {
    const message = {
      ...baseQueryGetMonoDisputeResponse,
    } as QueryGetMonoDisputeResponse;
    if (object.monoDispute !== undefined && object.monoDispute !== null) {
      message.monoDispute = MonoDispute.fromJSON(object.monoDispute);
    } else {
      message.monoDispute = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMonoDisputeResponse): unknown {
    const obj: any = {};
    message.monoDispute !== undefined &&
      (obj.monoDispute = message.monoDispute
        ? MonoDispute.toJSON(message.monoDispute)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoDisputeResponse>
  ): QueryGetMonoDisputeResponse {
    const message = {
      ...baseQueryGetMonoDisputeResponse,
    } as QueryGetMonoDisputeResponse;
    if (object.monoDispute !== undefined && object.monoDispute !== null) {
      message.monoDispute = MonoDispute.fromPartial(object.monoDispute);
    } else {
      message.monoDispute = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoDisputeRequest: object = {};

export const QueryAllMonoDisputeRequest = {
  encode(
    message: QueryAllMonoDisputeRequest,
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
  ): QueryAllMonoDisputeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoDisputeRequest,
    } as QueryAllMonoDisputeRequest;
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

  fromJSON(object: any): QueryAllMonoDisputeRequest {
    const message = {
      ...baseQueryAllMonoDisputeRequest,
    } as QueryAllMonoDisputeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoDisputeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoDisputeRequest>
  ): QueryAllMonoDisputeRequest {
    const message = {
      ...baseQueryAllMonoDisputeRequest,
    } as QueryAllMonoDisputeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoDisputeResponse: object = {};

export const QueryAllMonoDisputeResponse = {
  encode(
    message: QueryAllMonoDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.monoDispute) {
      MonoDispute.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMonoDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoDisputeResponse,
    } as QueryAllMonoDisputeResponse;
    message.monoDispute = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoDispute.push(MonoDispute.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMonoDisputeResponse {
    const message = {
      ...baseQueryAllMonoDisputeResponse,
    } as QueryAllMonoDisputeResponse;
    message.monoDispute = [];
    if (object.monoDispute !== undefined && object.monoDispute !== null) {
      for (const e of object.monoDispute) {
        message.monoDispute.push(MonoDispute.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoDisputeResponse): unknown {
    const obj: any = {};
    if (message.monoDispute) {
      obj.monoDispute = message.monoDispute.map((e) =>
        e ? MonoDispute.toJSON(e) : undefined
      );
    } else {
      obj.monoDispute = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoDisputeResponse>
  ): QueryAllMonoDisputeResponse {
    const message = {
      ...baseQueryAllMonoDisputeResponse,
    } as QueryAllMonoDisputeResponse;
    message.monoDispute = [];
    if (object.monoDispute !== undefined && object.monoDispute !== null) {
      for (const e of object.monoDispute) {
        message.monoDispute.push(MonoDispute.fromPartial(e));
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

const baseQueryGetRebuttalRequest: object = { disputeId: "", defendantId: "" };

export const QueryGetRebuttalRequest = {
  encode(
    message: QueryGetRebuttalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.disputeId !== "") {
      writer.uint32(10).string(message.disputeId);
    }
    if (message.defendantId !== "") {
      writer.uint32(18).string(message.defendantId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRebuttalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRebuttalRequest,
    } as QueryGetRebuttalRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputeId = reader.string();
          break;
        case 2:
          message.defendantId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRebuttalRequest {
    const message = {
      ...baseQueryGetRebuttalRequest,
    } as QueryGetRebuttalRequest;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.defendantId !== undefined && object.defendantId !== null) {
      message.defendantId = String(object.defendantId);
    } else {
      message.defendantId = "";
    }
    return message;
  },

  toJSON(message: QueryGetRebuttalRequest): unknown {
    const obj: any = {};
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.defendantId !== undefined &&
      (obj.defendantId = message.defendantId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRebuttalRequest>
  ): QueryGetRebuttalRequest {
    const message = {
      ...baseQueryGetRebuttalRequest,
    } as QueryGetRebuttalRequest;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.defendantId !== undefined && object.defendantId !== null) {
      message.defendantId = object.defendantId;
    } else {
      message.defendantId = "";
    }
    return message;
  },
};

const baseQueryGetRebuttalResponse: object = {};

export const QueryGetRebuttalResponse = {
  encode(
    message: QueryGetRebuttalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.rebuttal !== undefined) {
      Rebuttal.encode(message.rebuttal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRebuttalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRebuttalResponse,
    } as QueryGetRebuttalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rebuttal = Rebuttal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRebuttalResponse {
    const message = {
      ...baseQueryGetRebuttalResponse,
    } as QueryGetRebuttalResponse;
    if (object.rebuttal !== undefined && object.rebuttal !== null) {
      message.rebuttal = Rebuttal.fromJSON(object.rebuttal);
    } else {
      message.rebuttal = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRebuttalResponse): unknown {
    const obj: any = {};
    message.rebuttal !== undefined &&
      (obj.rebuttal = message.rebuttal
        ? Rebuttal.toJSON(message.rebuttal)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRebuttalResponse>
  ): QueryGetRebuttalResponse {
    const message = {
      ...baseQueryGetRebuttalResponse,
    } as QueryGetRebuttalResponse;
    if (object.rebuttal !== undefined && object.rebuttal !== null) {
      message.rebuttal = Rebuttal.fromPartial(object.rebuttal);
    } else {
      message.rebuttal = undefined;
    }
    return message;
  },
};

const baseQueryAllRebuttalRequest: object = {};

export const QueryAllRebuttalRequest = {
  encode(
    message: QueryAllRebuttalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRebuttalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRebuttalRequest,
    } as QueryAllRebuttalRequest;
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

  fromJSON(object: any): QueryAllRebuttalRequest {
    const message = {
      ...baseQueryAllRebuttalRequest,
    } as QueryAllRebuttalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRebuttalRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRebuttalRequest>
  ): QueryAllRebuttalRequest {
    const message = {
      ...baseQueryAllRebuttalRequest,
    } as QueryAllRebuttalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllRebuttalResponse: object = {};

export const QueryAllRebuttalResponse = {
  encode(
    message: QueryAllRebuttalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.rebuttal) {
      Rebuttal.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllRebuttalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRebuttalResponse,
    } as QueryAllRebuttalResponse;
    message.rebuttal = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rebuttal.push(Rebuttal.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllRebuttalResponse {
    const message = {
      ...baseQueryAllRebuttalResponse,
    } as QueryAllRebuttalResponse;
    message.rebuttal = [];
    if (object.rebuttal !== undefined && object.rebuttal !== null) {
      for (const e of object.rebuttal) {
        message.rebuttal.push(Rebuttal.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRebuttalResponse): unknown {
    const obj: any = {};
    if (message.rebuttal) {
      obj.rebuttal = message.rebuttal.map((e) =>
        e ? Rebuttal.toJSON(e) : undefined
      );
    } else {
      obj.rebuttal = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRebuttalResponse>
  ): QueryAllRebuttalResponse {
    const message = {
      ...baseQueryAllRebuttalResponse,
    } as QueryAllRebuttalResponse;
    message.rebuttal = [];
    if (object.rebuttal !== undefined && object.rebuttal !== null) {
      for (const e of object.rebuttal) {
        message.rebuttal.push(Rebuttal.fromPartial(e));
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

const baseQueryGetMonoRebutalRequest: object = { rebuttalId: "" };

export const QueryGetMonoRebutalRequest = {
  encode(
    message: QueryGetMonoRebutalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.rebuttalId !== "") {
      writer.uint32(10).string(message.rebuttalId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonoRebutalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoRebutalRequest,
    } as QueryGetMonoRebutalRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rebuttalId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoRebutalRequest {
    const message = {
      ...baseQueryGetMonoRebutalRequest,
    } as QueryGetMonoRebutalRequest;
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = String(object.rebuttalId);
    } else {
      message.rebuttalId = "";
    }
    return message;
  },

  toJSON(message: QueryGetMonoRebutalRequest): unknown {
    const obj: any = {};
    message.rebuttalId !== undefined && (obj.rebuttalId = message.rebuttalId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoRebutalRequest>
  ): QueryGetMonoRebutalRequest {
    const message = {
      ...baseQueryGetMonoRebutalRequest,
    } as QueryGetMonoRebutalRequest;
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = object.rebuttalId;
    } else {
      message.rebuttalId = "";
    }
    return message;
  },
};

const baseQueryGetMonoRebutalResponse: object = {};

export const QueryGetMonoRebutalResponse = {
  encode(
    message: QueryGetMonoRebutalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.monoRebutal !== undefined) {
      MonoRebutal.encode(
        message.monoRebutal,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMonoRebutalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMonoRebutalResponse,
    } as QueryGetMonoRebutalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoRebutal = MonoRebutal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMonoRebutalResponse {
    const message = {
      ...baseQueryGetMonoRebutalResponse,
    } as QueryGetMonoRebutalResponse;
    if (object.monoRebutal !== undefined && object.monoRebutal !== null) {
      message.monoRebutal = MonoRebutal.fromJSON(object.monoRebutal);
    } else {
      message.monoRebutal = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMonoRebutalResponse): unknown {
    const obj: any = {};
    message.monoRebutal !== undefined &&
      (obj.monoRebutal = message.monoRebutal
        ? MonoRebutal.toJSON(message.monoRebutal)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMonoRebutalResponse>
  ): QueryGetMonoRebutalResponse {
    const message = {
      ...baseQueryGetMonoRebutalResponse,
    } as QueryGetMonoRebutalResponse;
    if (object.monoRebutal !== undefined && object.monoRebutal !== null) {
      message.monoRebutal = MonoRebutal.fromPartial(object.monoRebutal);
    } else {
      message.monoRebutal = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoRebutalRequest: object = {};

export const QueryAllMonoRebutalRequest = {
  encode(
    message: QueryAllMonoRebutalRequest,
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
  ): QueryAllMonoRebutalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoRebutalRequest,
    } as QueryAllMonoRebutalRequest;
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

  fromJSON(object: any): QueryAllMonoRebutalRequest {
    const message = {
      ...baseQueryAllMonoRebutalRequest,
    } as QueryAllMonoRebutalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoRebutalRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoRebutalRequest>
  ): QueryAllMonoRebutalRequest {
    const message = {
      ...baseQueryAllMonoRebutalRequest,
    } as QueryAllMonoRebutalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMonoRebutalResponse: object = {};

export const QueryAllMonoRebutalResponse = {
  encode(
    message: QueryAllMonoRebutalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.monoRebutal) {
      MonoRebutal.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllMonoRebutalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMonoRebutalResponse,
    } as QueryAllMonoRebutalResponse;
    message.monoRebutal = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monoRebutal.push(MonoRebutal.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMonoRebutalResponse {
    const message = {
      ...baseQueryAllMonoRebutalResponse,
    } as QueryAllMonoRebutalResponse;
    message.monoRebutal = [];
    if (object.monoRebutal !== undefined && object.monoRebutal !== null) {
      for (const e of object.monoRebutal) {
        message.monoRebutal.push(MonoRebutal.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMonoRebutalResponse): unknown {
    const obj: any = {};
    if (message.monoRebutal) {
      obj.monoRebutal = message.monoRebutal.map((e) =>
        e ? MonoRebutal.toJSON(e) : undefined
      );
    } else {
      obj.monoRebutal = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMonoRebutalResponse>
  ): QueryAllMonoRebutalResponse {
    const message = {
      ...baseQueryAllMonoRebutalResponse,
    } as QueryAllMonoRebutalResponse;
    message.monoRebutal = [];
    if (object.monoRebutal !== undefined && object.monoRebutal !== null) {
      for (const e of object.monoRebutal) {
        message.monoRebutal.push(MonoRebutal.fromPartial(e));
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

const baseQueryGetBallotRequest: object = { disputeId: "", voterId: "" };

export const QueryGetBallotRequest = {
  encode(
    message: QueryGetBallotRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.disputeId !== "") {
      writer.uint32(10).string(message.disputeId);
    }
    if (message.voterId !== "") {
      writer.uint32(18).string(message.voterId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBallotRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBallotRequest } as QueryGetBallotRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputeId = reader.string();
          break;
        case 2:
          message.voterId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBallotRequest {
    const message = { ...baseQueryGetBallotRequest } as QueryGetBallotRequest;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    return message;
  },

  toJSON(message: QueryGetBallotRequest): unknown {
    const obj: any = {};
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBallotRequest>
  ): QueryGetBallotRequest {
    const message = { ...baseQueryGetBallotRequest } as QueryGetBallotRequest;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    return message;
  },
};

const baseQueryGetBallotResponse: object = {};

export const QueryGetBallotResponse = {
  encode(
    message: QueryGetBallotResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ballot !== undefined) {
      Ballot.encode(message.ballot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBallotResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBallotResponse } as QueryGetBallotResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ballot = Ballot.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBallotResponse {
    const message = { ...baseQueryGetBallotResponse } as QueryGetBallotResponse;
    if (object.ballot !== undefined && object.ballot !== null) {
      message.ballot = Ballot.fromJSON(object.ballot);
    } else {
      message.ballot = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBallotResponse): unknown {
    const obj: any = {};
    message.ballot !== undefined &&
      (obj.ballot = message.ballot ? Ballot.toJSON(message.ballot) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBallotResponse>
  ): QueryGetBallotResponse {
    const message = { ...baseQueryGetBallotResponse } as QueryGetBallotResponse;
    if (object.ballot !== undefined && object.ballot !== null) {
      message.ballot = Ballot.fromPartial(object.ballot);
    } else {
      message.ballot = undefined;
    }
    return message;
  },
};

const baseQueryAllBallotRequest: object = {};

export const QueryAllBallotRequest = {
  encode(
    message: QueryAllBallotRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBallotRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBallotRequest } as QueryAllBallotRequest;
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

  fromJSON(object: any): QueryAllBallotRequest {
    const message = { ...baseQueryAllBallotRequest } as QueryAllBallotRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBallotRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBallotRequest>
  ): QueryAllBallotRequest {
    const message = { ...baseQueryAllBallotRequest } as QueryAllBallotRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBallotResponse: object = {};

export const QueryAllBallotResponse = {
  encode(
    message: QueryAllBallotResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.ballot) {
      Ballot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBallotResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBallotResponse } as QueryAllBallotResponse;
    message.ballot = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ballot.push(Ballot.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBallotResponse {
    const message = { ...baseQueryAllBallotResponse } as QueryAllBallotResponse;
    message.ballot = [];
    if (object.ballot !== undefined && object.ballot !== null) {
      for (const e of object.ballot) {
        message.ballot.push(Ballot.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBallotResponse): unknown {
    const obj: any = {};
    if (message.ballot) {
      obj.ballot = message.ballot.map((e) =>
        e ? Ballot.toJSON(e) : undefined
      );
    } else {
      obj.ballot = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBallotResponse>
  ): QueryAllBallotResponse {
    const message = { ...baseQueryAllBallotResponse } as QueryAllBallotResponse;
    message.ballot = [];
    if (object.ballot !== undefined && object.ballot !== null) {
      for (const e of object.ballot) {
        message.ballot.push(Ballot.fromPartial(e));
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

const baseQueryGetVoteRequest: object = { voteId: "" };

export const QueryGetVoteRequest = {
  encode(
    message: QueryGetVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.voteId !== "") {
      writer.uint32(10).string(message.voteId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoteRequest {
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = String(object.voteId);
    } else {
      message.voteId = "";
    }
    return message;
  },

  toJSON(message: QueryGetVoteRequest): unknown {
    const obj: any = {};
    message.voteId !== undefined && (obj.voteId = message.voteId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVoteRequest>): QueryGetVoteRequest {
    const message = { ...baseQueryGetVoteRequest } as QueryGetVoteRequest;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = "";
    }
    return message;
  },
};

const baseQueryGetVoteResponse: object = {};

export const QueryGetVoteResponse = {
  encode(
    message: QueryGetVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVoteResponse {
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromJSON(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVoteResponse): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetVoteResponse>): QueryGetVoteResponse {
    const message = { ...baseQueryGetVoteResponse } as QueryGetVoteResponse;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },
};

const baseQueryAllVoteRequest: object = {};

export const QueryAllVoteRequest = {
  encode(
    message: QueryAllVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
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

  fromJSON(object: any): QueryAllVoteRequest {
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVoteRequest>): QueryAllVoteRequest {
    const message = { ...baseQueryAllVoteRequest } as QueryAllVoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVoteResponse: object = {};

export const QueryAllVoteResponse = {
  encode(
    message: QueryAllVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.vote) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.vote = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote.push(Vote.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllVoteResponse {
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.vote = [];
    if (object.vote !== undefined && object.vote !== null) {
      for (const e of object.vote) {
        message.vote.push(Vote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVoteResponse): unknown {
    const obj: any = {};
    if (message.vote) {
      obj.vote = message.vote.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.vote = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllVoteResponse>): QueryAllVoteResponse {
    const message = { ...baseQueryAllVoteResponse } as QueryAllVoteResponse;
    message.vote = [];
    if (object.vote !== undefined && object.vote !== null) {
      for (const e of object.vote) {
        message.vote.push(Vote.fromPartial(e));
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

const baseQueryGetPollRequest: object = { crowId: "", disputeId: "" };

export const QueryGetPollRequest = {
  encode(
    message: QueryGetPollRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    if (message.disputeId !== "") {
      writer.uint32(18).string(message.disputeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPollRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPollRequest } as QueryGetPollRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
          break;
        case 2:
          message.disputeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPollRequest {
    const message = { ...baseQueryGetPollRequest } as QueryGetPollRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    return message;
  },

  toJSON(message: QueryGetPollRequest): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPollRequest>): QueryGetPollRequest {
    const message = { ...baseQueryGetPollRequest } as QueryGetPollRequest;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    return message;
  },
};

const baseQueryGetPollResponse: object = {};

export const QueryGetPollResponse = {
  encode(
    message: QueryGetPollResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.poll !== undefined) {
      Poll.encode(message.poll, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPollResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPollResponse } as QueryGetPollResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poll = Poll.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPollResponse {
    const message = { ...baseQueryGetPollResponse } as QueryGetPollResponse;
    if (object.poll !== undefined && object.poll !== null) {
      message.poll = Poll.fromJSON(object.poll);
    } else {
      message.poll = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPollResponse): unknown {
    const obj: any = {};
    message.poll !== undefined &&
      (obj.poll = message.poll ? Poll.toJSON(message.poll) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPollResponse>): QueryGetPollResponse {
    const message = { ...baseQueryGetPollResponse } as QueryGetPollResponse;
    if (object.poll !== undefined && object.poll !== null) {
      message.poll = Poll.fromPartial(object.poll);
    } else {
      message.poll = undefined;
    }
    return message;
  },
};

const baseQueryAllPollRequest: object = {};

export const QueryAllPollRequest = {
  encode(
    message: QueryAllPollRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPollRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPollRequest } as QueryAllPollRequest;
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

  fromJSON(object: any): QueryAllPollRequest {
    const message = { ...baseQueryAllPollRequest } as QueryAllPollRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPollRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPollRequest>): QueryAllPollRequest {
    const message = { ...baseQueryAllPollRequest } as QueryAllPollRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPollResponse: object = {};

export const QueryAllPollResponse = {
  encode(
    message: QueryAllPollResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.poll) {
      Poll.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPollResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPollResponse } as QueryAllPollResponse;
    message.poll = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poll.push(Poll.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPollResponse {
    const message = { ...baseQueryAllPollResponse } as QueryAllPollResponse;
    message.poll = [];
    if (object.poll !== undefined && object.poll !== null) {
      for (const e of object.poll) {
        message.poll.push(Poll.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPollResponse): unknown {
    const obj: any = {};
    if (message.poll) {
      obj.poll = message.poll.map((e) => (e ? Poll.toJSON(e) : undefined));
    } else {
      obj.poll = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPollResponse>): QueryAllPollResponse {
    const message = { ...baseQueryAllPollResponse } as QueryAllPollResponse;
    message.poll = [];
    if (object.poll !== undefined && object.poll !== null) {
      for (const e of object.poll) {
        message.poll.push(Poll.fromPartial(e));
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

const baseQueryGetVerdictRequest: object = { verdictId: "" };

export const QueryGetVerdictRequest = {
  encode(
    message: QueryGetVerdictRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verdictId !== "") {
      writer.uint32(10).string(message.verdictId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVerdictRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetVerdictRequest } as QueryGetVerdictRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verdictId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVerdictRequest {
    const message = { ...baseQueryGetVerdictRequest } as QueryGetVerdictRequest;
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = String(object.verdictId);
    } else {
      message.verdictId = "";
    }
    return message;
  },

  toJSON(message: QueryGetVerdictRequest): unknown {
    const obj: any = {};
    message.verdictId !== undefined && (obj.verdictId = message.verdictId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVerdictRequest>
  ): QueryGetVerdictRequest {
    const message = { ...baseQueryGetVerdictRequest } as QueryGetVerdictRequest;
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = object.verdictId;
    } else {
      message.verdictId = "";
    }
    return message;
  },
};

const baseQueryGetVerdictResponse: object = {};

export const QueryGetVerdictResponse = {
  encode(
    message: QueryGetVerdictResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verdict !== undefined) {
      Verdict.encode(message.verdict, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetVerdictResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetVerdictResponse,
    } as QueryGetVerdictResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verdict = Verdict.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetVerdictResponse {
    const message = {
      ...baseQueryGetVerdictResponse,
    } as QueryGetVerdictResponse;
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = Verdict.fromJSON(object.verdict);
    } else {
      message.verdict = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetVerdictResponse): unknown {
    const obj: any = {};
    message.verdict !== undefined &&
      (obj.verdict = message.verdict
        ? Verdict.toJSON(message.verdict)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetVerdictResponse>
  ): QueryGetVerdictResponse {
    const message = {
      ...baseQueryGetVerdictResponse,
    } as QueryGetVerdictResponse;
    if (object.verdict !== undefined && object.verdict !== null) {
      message.verdict = Verdict.fromPartial(object.verdict);
    } else {
      message.verdict = undefined;
    }
    return message;
  },
};

const baseQueryAllVerdictRequest: object = {};

export const QueryAllVerdictRequest = {
  encode(
    message: QueryAllVerdictRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVerdictRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllVerdictRequest } as QueryAllVerdictRequest;
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

  fromJSON(object: any): QueryAllVerdictRequest {
    const message = { ...baseQueryAllVerdictRequest } as QueryAllVerdictRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVerdictRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVerdictRequest>
  ): QueryAllVerdictRequest {
    const message = { ...baseQueryAllVerdictRequest } as QueryAllVerdictRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllVerdictResponse: object = {};

export const QueryAllVerdictResponse = {
  encode(
    message: QueryAllVerdictResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.verdict) {
      Verdict.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllVerdictResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllVerdictResponse,
    } as QueryAllVerdictResponse;
    message.verdict = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verdict.push(Verdict.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllVerdictResponse {
    const message = {
      ...baseQueryAllVerdictResponse,
    } as QueryAllVerdictResponse;
    message.verdict = [];
    if (object.verdict !== undefined && object.verdict !== null) {
      for (const e of object.verdict) {
        message.verdict.push(Verdict.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllVerdictResponse): unknown {
    const obj: any = {};
    if (message.verdict) {
      obj.verdict = message.verdict.map((e) =>
        e ? Verdict.toJSON(e) : undefined
      );
    } else {
      obj.verdict = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllVerdictResponse>
  ): QueryAllVerdictResponse {
    const message = {
      ...baseQueryAllVerdictResponse,
    } as QueryAllVerdictResponse;
    message.verdict = [];
    if (object.verdict !== undefined && object.verdict !== null) {
      for (const e of object.verdict) {
        message.verdict.push(Verdict.fromPartial(e));
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
  /** Queries a BuyerCrow by index. */
  BuyerCrow(
    request: QueryGetBuyerCrowRequest
  ): Promise<QueryGetBuyerCrowResponse>;
  /** Queries a list of BuyerCrow items. */
  BuyerCrowAll(
    request: QueryAllBuyerCrowRequest
  ): Promise<QueryAllBuyerCrowResponse>;
  /** Queries a BuyerMonoCrow by index. */
  BuyerMonoCrow(
    request: QueryGetBuyerMonoCrowRequest
  ): Promise<QueryGetBuyerMonoCrowResponse>;
  /** Queries a list of BuyerMonoCrow items. */
  BuyerMonoCrowAll(
    request: QueryAllBuyerMonoCrowRequest
  ): Promise<QueryAllBuyerMonoCrowResponse>;
  /** Queries a SellerCrow by index. */
  SellerCrow(
    request: QueryGetSellerCrowRequest
  ): Promise<QueryGetSellerCrowResponse>;
  /** Queries a list of SellerCrow items. */
  SellerCrowAll(
    request: QueryAllSellerCrowRequest
  ): Promise<QueryAllSellerCrowResponse>;
  /** Queries a SellerMonoCrow by index. */
  SellerMonoCrow(
    request: QueryGetSellerMonoCrowRequest
  ): Promise<QueryGetSellerMonoCrowResponse>;
  /** Queries a list of SellerMonoCrow items. */
  SellerMonoCrowAll(
    request: QueryAllSellerMonoCrowRequest
  ): Promise<QueryAllSellerMonoCrowResponse>;
  /** Queries a Crow by index. */
  Crow(request: QueryGetCrowRequest): Promise<QueryGetCrowResponse>;
  /** Queries a list of Crow items. */
  CrowAll(request: QueryAllCrowRequest): Promise<QueryAllCrowResponse>;
  /** Queries a MonoCrow by index. */
  MonoCrow(request: QueryGetMonoCrowRequest): Promise<QueryGetMonoCrowResponse>;
  /** Queries a list of MonoCrow items. */
  MonoCrowAll(
    request: QueryAllMonoCrowRequest
  ): Promise<QueryAllMonoCrowResponse>;
  /** Queries a Dispute by index. */
  Dispute(request: QueryGetDisputeRequest): Promise<QueryGetDisputeResponse>;
  /** Queries a list of Dispute items. */
  DisputeAll(request: QueryAllDisputeRequest): Promise<QueryAllDisputeResponse>;
  /** Queries a MonoDispute by index. */
  MonoDispute(
    request: QueryGetMonoDisputeRequest
  ): Promise<QueryGetMonoDisputeResponse>;
  /** Queries a list of MonoDispute items. */
  MonoDisputeAll(
    request: QueryAllMonoDisputeRequest
  ): Promise<QueryAllMonoDisputeResponse>;
  /** Queries a Rebuttal by index. */
  Rebuttal(request: QueryGetRebuttalRequest): Promise<QueryGetRebuttalResponse>;
  /** Queries a list of Rebuttal items. */
  RebuttalAll(
    request: QueryAllRebuttalRequest
  ): Promise<QueryAllRebuttalResponse>;
  /** Queries a MonoRebutal by index. */
  MonoRebutal(
    request: QueryGetMonoRebutalRequest
  ): Promise<QueryGetMonoRebutalResponse>;
  /** Queries a list of MonoRebutal items. */
  MonoRebutalAll(
    request: QueryAllMonoRebutalRequest
  ): Promise<QueryAllMonoRebutalResponse>;
  /** Queries a Ballot by index. */
  Ballot(request: QueryGetBallotRequest): Promise<QueryGetBallotResponse>;
  /** Queries a list of Ballot items. */
  BallotAll(request: QueryAllBallotRequest): Promise<QueryAllBallotResponse>;
  /** Queries a Vote by index. */
  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse>;
  /** Queries a list of Vote items. */
  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse>;
  /** Queries a Poll by index. */
  Poll(request: QueryGetPollRequest): Promise<QueryGetPollResponse>;
  /** Queries a list of Poll items. */
  PollAll(request: QueryAllPollRequest): Promise<QueryAllPollResponse>;
  /** Queries a Verdict by index. */
  Verdict(request: QueryGetVerdictRequest): Promise<QueryGetVerdictResponse>;
  /** Queries a list of Verdict items. */
  VerdictAll(request: QueryAllVerdictRequest): Promise<QueryAllVerdictResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  BuyerCrow(
    request: QueryGetBuyerCrowRequest
  ): Promise<QueryGetBuyerCrowResponse> {
    const data = QueryGetBuyerCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "BuyerCrow",
      data
    );
    return promise.then((data) =>
      QueryGetBuyerCrowResponse.decode(new Reader(data))
    );
  }

  BuyerCrowAll(
    request: QueryAllBuyerCrowRequest
  ): Promise<QueryAllBuyerCrowResponse> {
    const data = QueryAllBuyerCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "BuyerCrowAll",
      data
    );
    return promise.then((data) =>
      QueryAllBuyerCrowResponse.decode(new Reader(data))
    );
  }

  BuyerMonoCrow(
    request: QueryGetBuyerMonoCrowRequest
  ): Promise<QueryGetBuyerMonoCrowResponse> {
    const data = QueryGetBuyerMonoCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "BuyerMonoCrow",
      data
    );
    return promise.then((data) =>
      QueryGetBuyerMonoCrowResponse.decode(new Reader(data))
    );
  }

  BuyerMonoCrowAll(
    request: QueryAllBuyerMonoCrowRequest
  ): Promise<QueryAllBuyerMonoCrowResponse> {
    const data = QueryAllBuyerMonoCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "BuyerMonoCrowAll",
      data
    );
    return promise.then((data) =>
      QueryAllBuyerMonoCrowResponse.decode(new Reader(data))
    );
  }

  SellerCrow(
    request: QueryGetSellerCrowRequest
  ): Promise<QueryGetSellerCrowResponse> {
    const data = QueryGetSellerCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "SellerCrow",
      data
    );
    return promise.then((data) =>
      QueryGetSellerCrowResponse.decode(new Reader(data))
    );
  }

  SellerCrowAll(
    request: QueryAllSellerCrowRequest
  ): Promise<QueryAllSellerCrowResponse> {
    const data = QueryAllSellerCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "SellerCrowAll",
      data
    );
    return promise.then((data) =>
      QueryAllSellerCrowResponse.decode(new Reader(data))
    );
  }

  SellerMonoCrow(
    request: QueryGetSellerMonoCrowRequest
  ): Promise<QueryGetSellerMonoCrowResponse> {
    const data = QueryGetSellerMonoCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "SellerMonoCrow",
      data
    );
    return promise.then((data) =>
      QueryGetSellerMonoCrowResponse.decode(new Reader(data))
    );
  }

  SellerMonoCrowAll(
    request: QueryAllSellerMonoCrowRequest
  ): Promise<QueryAllSellerMonoCrowResponse> {
    const data = QueryAllSellerMonoCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "SellerMonoCrowAll",
      data
    );
    return promise.then((data) =>
      QueryAllSellerMonoCrowResponse.decode(new Reader(data))
    );
  }

  Crow(request: QueryGetCrowRequest): Promise<QueryGetCrowResponse> {
    const data = QueryGetCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "Crow",
      data
    );
    return promise.then((data) =>
      QueryGetCrowResponse.decode(new Reader(data))
    );
  }

  CrowAll(request: QueryAllCrowRequest): Promise<QueryAllCrowResponse> {
    const data = QueryAllCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "CrowAll",
      data
    );
    return promise.then((data) =>
      QueryAllCrowResponse.decode(new Reader(data))
    );
  }

  MonoCrow(
    request: QueryGetMonoCrowRequest
  ): Promise<QueryGetMonoCrowResponse> {
    const data = QueryGetMonoCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "MonoCrow",
      data
    );
    return promise.then((data) =>
      QueryGetMonoCrowResponse.decode(new Reader(data))
    );
  }

  MonoCrowAll(
    request: QueryAllMonoCrowRequest
  ): Promise<QueryAllMonoCrowResponse> {
    const data = QueryAllMonoCrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "MonoCrowAll",
      data
    );
    return promise.then((data) =>
      QueryAllMonoCrowResponse.decode(new Reader(data))
    );
  }

  Dispute(request: QueryGetDisputeRequest): Promise<QueryGetDisputeResponse> {
    const data = QueryGetDisputeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "Dispute",
      data
    );
    return promise.then((data) =>
      QueryGetDisputeResponse.decode(new Reader(data))
    );
  }

  DisputeAll(
    request: QueryAllDisputeRequest
  ): Promise<QueryAllDisputeResponse> {
    const data = QueryAllDisputeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "DisputeAll",
      data
    );
    return promise.then((data) =>
      QueryAllDisputeResponse.decode(new Reader(data))
    );
  }

  MonoDispute(
    request: QueryGetMonoDisputeRequest
  ): Promise<QueryGetMonoDisputeResponse> {
    const data = QueryGetMonoDisputeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "MonoDispute",
      data
    );
    return promise.then((data) =>
      QueryGetMonoDisputeResponse.decode(new Reader(data))
    );
  }

  MonoDisputeAll(
    request: QueryAllMonoDisputeRequest
  ): Promise<QueryAllMonoDisputeResponse> {
    const data = QueryAllMonoDisputeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "MonoDisputeAll",
      data
    );
    return promise.then((data) =>
      QueryAllMonoDisputeResponse.decode(new Reader(data))
    );
  }

  Rebuttal(
    request: QueryGetRebuttalRequest
  ): Promise<QueryGetRebuttalResponse> {
    const data = QueryGetRebuttalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "Rebuttal",
      data
    );
    return promise.then((data) =>
      QueryGetRebuttalResponse.decode(new Reader(data))
    );
  }

  RebuttalAll(
    request: QueryAllRebuttalRequest
  ): Promise<QueryAllRebuttalResponse> {
    const data = QueryAllRebuttalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "RebuttalAll",
      data
    );
    return promise.then((data) =>
      QueryAllRebuttalResponse.decode(new Reader(data))
    );
  }

  MonoRebutal(
    request: QueryGetMonoRebutalRequest
  ): Promise<QueryGetMonoRebutalResponse> {
    const data = QueryGetMonoRebutalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "MonoRebutal",
      data
    );
    return promise.then((data) =>
      QueryGetMonoRebutalResponse.decode(new Reader(data))
    );
  }

  MonoRebutalAll(
    request: QueryAllMonoRebutalRequest
  ): Promise<QueryAllMonoRebutalResponse> {
    const data = QueryAllMonoRebutalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "MonoRebutalAll",
      data
    );
    return promise.then((data) =>
      QueryAllMonoRebutalResponse.decode(new Reader(data))
    );
  }

  Ballot(request: QueryGetBallotRequest): Promise<QueryGetBallotResponse> {
    const data = QueryGetBallotRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "Ballot",
      data
    );
    return promise.then((data) =>
      QueryGetBallotResponse.decode(new Reader(data))
    );
  }

  BallotAll(request: QueryAllBallotRequest): Promise<QueryAllBallotResponse> {
    const data = QueryAllBallotRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "BallotAll",
      data
    );
    return promise.then((data) =>
      QueryAllBallotResponse.decode(new Reader(data))
    );
  }

  Vote(request: QueryGetVoteRequest): Promise<QueryGetVoteResponse> {
    const data = QueryGetVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "Vote",
      data
    );
    return promise.then((data) =>
      QueryGetVoteResponse.decode(new Reader(data))
    );
  }

  VoteAll(request: QueryAllVoteRequest): Promise<QueryAllVoteResponse> {
    const data = QueryAllVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "VoteAll",
      data
    );
    return promise.then((data) =>
      QueryAllVoteResponse.decode(new Reader(data))
    );
  }

  Poll(request: QueryGetPollRequest): Promise<QueryGetPollResponse> {
    const data = QueryGetPollRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "Poll",
      data
    );
    return promise.then((data) =>
      QueryGetPollResponse.decode(new Reader(data))
    );
  }

  PollAll(request: QueryAllPollRequest): Promise<QueryAllPollResponse> {
    const data = QueryAllPollRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "PollAll",
      data
    );
    return promise.then((data) =>
      QueryAllPollResponse.decode(new Reader(data))
    );
  }

  Verdict(request: QueryGetVerdictRequest): Promise<QueryGetVerdictResponse> {
    const data = QueryGetVerdictRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "Verdict",
      data
    );
    return promise.then((data) =>
      QueryGetVerdictResponse.decode(new Reader(data))
    );
  }

  VerdictAll(
    request: QueryAllVerdictRequest
  ): Promise<QueryAllVerdictResponse> {
    const data = QueryAllVerdictRequest.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Query",
      "VerdictAll",
      data
    );
    return promise.then((data) =>
      QueryAllVerdictResponse.decode(new Reader(data))
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
