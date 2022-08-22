/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Buyer } from "../whitelist/buyer";
import { Seller } from "../whitelist/seller";
import { Voter } from "../whitelist/voter";

export const protobufPackage = "crowlabs.delta.whitelist";

export interface MsgCreateBuyer {
  buyer: string;
  buyerId: string;
  name: string;
  numOrder: number;
  orderId: string[];
  status: string;
}

export interface MsgCreateBuyerResponse {}

export interface MsgUpdateBuyer {
  buyer: string;
  buyerId: string;
  name: string;
  numOrder: number;
  orderId: string[];
  status: string;
}

export interface MsgUpdateBuyerResponse {}

export interface MsgDeleteBuyer {
  buyer: string;
  buyerId: string;
}

export interface MsgDeleteBuyerResponse {}

export interface MsgCreateSeller {
  producer: string;
  sellerId: string;
  name: string;
  desc: string;
  contactInfo: string;
  numListing: number;
  listingId: string[];
  status: string;
}

export interface MsgCreateSellerResponse {}

export interface MsgUpdateSeller {
  producer: string;
  sellerId: string;
  name: string;
  desc: string;
  contactInfo: string;
  numListing: number;
  listingId: string[];
  status: string;
}

export interface MsgUpdateSellerResponse {}

export interface MsgDeleteSeller {
  producer: string;
  sellerId: string;
}

export interface MsgDeleteSellerResponse {}

export interface MsgCreateVoter {
  reviewer: string;
  voterId: string;
  name: string;
  votingPower: number;
  numVotes: number;
  voteId: string[];
  status: string;
}

export interface MsgCreateVoterResponse {}

export interface MsgUpdateVoter {
  reviewer: string;
  voterId: string;
  name: string;
  votingPower: number;
  numVotes: number;
  voteId: string[];
  status: string;
}

export interface MsgUpdateVoterResponse {}

export interface MsgDeleteVoter {
  reviewer: string;
  voterId: string;
}

export interface MsgDeleteVoterResponse {}

export interface MsgCreateWhitelist {
  creator: string;
  whitelistId: string;
}

export interface MsgCreateWhitelistResponse {
  id: number;
}

export interface MsgUpdateWhitelist {
  creator: string;
  id: number;
  whitelistId: string;
}

export interface MsgUpdateWhitelistResponse {}

export interface MsgDeleteWhitelist {
  creator: string;
  id: number;
}

export interface MsgDeleteWhitelistResponse {}

export interface MsgCreateMonoWhitelist {
  governor: string;
  whitelistId: string;
  buyer: Buyer | undefined;
  seller: Seller | undefined;
  voter: Voter | undefined;
}

export interface MsgCreateMonoWhitelistResponse {}

export interface MsgUpdateMonoWhitelist {
  governor: string;
  whitelistId: string;
  buyer: Buyer | undefined;
  seller: Seller | undefined;
  voter: Voter | undefined;
}

export interface MsgUpdateMonoWhitelistResponse {}

export interface MsgDeleteMonoWhitelist {
  governor: string;
  whitelistId: string;
}

export interface MsgDeleteMonoWhitelistResponse {}

export interface MsgJoinBuyers {
  creator: string;
  whitelistId: string;
  name: string;
}

export interface MsgJoinBuyersResponse {
  buyerId: string;
}

export interface MsgJoinSellers {
  creator: string;
  whitelistId: string;
  name: string;
  desc: string;
  contactInfo: string;
}

export interface MsgJoinSellersResponse {
  sellerId: string;
}

export interface MsgJoinVoters {
  creator: string;
  whitelistId: string;
  name: string;
}

export interface MsgJoinVotersResponse {
  voterId: string;
}

export interface MsgCreateNewWhitelist {
  creator: string;
}

export interface MsgCreateNewWhitelistResponse {
  whitelistId: string;
}

const baseMsgCreateBuyer: object = {
  buyer: "",
  buyerId: "",
  name: "",
  numOrder: 0,
  orderId: "",
  status: "",
};

export const MsgCreateBuyer = {
  encode(message: MsgCreateBuyer, writer: Writer = Writer.create()): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.numOrder !== 0) {
      writer.uint32(32).uint64(message.numOrder);
    }
    for (const v of message.orderId) {
      writer.uint32(42).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBuyer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBuyer } as MsgCreateBuyer;
    message.orderId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.buyerId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.numOrder = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.orderId.push(reader.string());
          break;
        case 6:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBuyer {
    const message = { ...baseMsgCreateBuyer } as MsgCreateBuyer;
    message.orderId = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.numOrder !== undefined && object.numOrder !== null) {
      message.numOrder = Number(object.numOrder);
    } else {
      message.numOrder = 0;
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      for (const e of object.orderId) {
        message.orderId.push(String(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgCreateBuyer): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.name !== undefined && (obj.name = message.name);
    message.numOrder !== undefined && (obj.numOrder = message.numOrder);
    if (message.orderId) {
      obj.orderId = message.orderId.map((e) => e);
    } else {
      obj.orderId = [];
    }
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBuyer>): MsgCreateBuyer {
    const message = { ...baseMsgCreateBuyer } as MsgCreateBuyer;
    message.orderId = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.numOrder !== undefined && object.numOrder !== null) {
      message.numOrder = object.numOrder;
    } else {
      message.numOrder = 0;
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      for (const e of object.orderId) {
        message.orderId.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgCreateBuyerResponse: object = {};

export const MsgCreateBuyerResponse = {
  encode(_: MsgCreateBuyerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBuyerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBuyerResponse } as MsgCreateBuyerResponse;
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

  fromJSON(_: any): MsgCreateBuyerResponse {
    const message = { ...baseMsgCreateBuyerResponse } as MsgCreateBuyerResponse;
    return message;
  },

  toJSON(_: MsgCreateBuyerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateBuyerResponse>): MsgCreateBuyerResponse {
    const message = { ...baseMsgCreateBuyerResponse } as MsgCreateBuyerResponse;
    return message;
  },
};

const baseMsgUpdateBuyer: object = {
  buyer: "",
  buyerId: "",
  name: "",
  numOrder: 0,
  orderId: "",
  status: "",
};

export const MsgUpdateBuyer = {
  encode(message: MsgUpdateBuyer, writer: Writer = Writer.create()): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.numOrder !== 0) {
      writer.uint32(32).uint64(message.numOrder);
    }
    for (const v of message.orderId) {
      writer.uint32(42).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBuyer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBuyer } as MsgUpdateBuyer;
    message.orderId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.buyerId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.numOrder = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.orderId.push(reader.string());
          break;
        case 6:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBuyer {
    const message = { ...baseMsgUpdateBuyer } as MsgUpdateBuyer;
    message.orderId = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.numOrder !== undefined && object.numOrder !== null) {
      message.numOrder = Number(object.numOrder);
    } else {
      message.numOrder = 0;
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      for (const e of object.orderId) {
        message.orderId.push(String(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateBuyer): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.name !== undefined && (obj.name = message.name);
    message.numOrder !== undefined && (obj.numOrder = message.numOrder);
    if (message.orderId) {
      obj.orderId = message.orderId.map((e) => e);
    } else {
      obj.orderId = [];
    }
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBuyer>): MsgUpdateBuyer {
    const message = { ...baseMsgUpdateBuyer } as MsgUpdateBuyer;
    message.orderId = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.numOrder !== undefined && object.numOrder !== null) {
      message.numOrder = object.numOrder;
    } else {
      message.numOrder = 0;
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      for (const e of object.orderId) {
        message.orderId.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgUpdateBuyerResponse: object = {};

export const MsgUpdateBuyerResponse = {
  encode(_: MsgUpdateBuyerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBuyerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBuyerResponse } as MsgUpdateBuyerResponse;
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

  fromJSON(_: any): MsgUpdateBuyerResponse {
    const message = { ...baseMsgUpdateBuyerResponse } as MsgUpdateBuyerResponse;
    return message;
  },

  toJSON(_: MsgUpdateBuyerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateBuyerResponse>): MsgUpdateBuyerResponse {
    const message = { ...baseMsgUpdateBuyerResponse } as MsgUpdateBuyerResponse;
    return message;
  },
};

const baseMsgDeleteBuyer: object = { buyer: "", buyerId: "" };

export const MsgDeleteBuyer = {
  encode(message: MsgDeleteBuyer, writer: Writer = Writer.create()): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBuyer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBuyer } as MsgDeleteBuyer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
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

  fromJSON(object: any): MsgDeleteBuyer {
    const message = { ...baseMsgDeleteBuyer } as MsgDeleteBuyer;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteBuyer): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteBuyer>): MsgDeleteBuyer {
    const message = { ...baseMsgDeleteBuyer } as MsgDeleteBuyer;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    return message;
  },
};

const baseMsgDeleteBuyerResponse: object = {};

export const MsgDeleteBuyerResponse = {
  encode(_: MsgDeleteBuyerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBuyerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBuyerResponse } as MsgDeleteBuyerResponse;
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

  fromJSON(_: any): MsgDeleteBuyerResponse {
    const message = { ...baseMsgDeleteBuyerResponse } as MsgDeleteBuyerResponse;
    return message;
  },

  toJSON(_: MsgDeleteBuyerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteBuyerResponse>): MsgDeleteBuyerResponse {
    const message = { ...baseMsgDeleteBuyerResponse } as MsgDeleteBuyerResponse;
    return message;
  },
};

const baseMsgCreateSeller: object = {
  producer: "",
  sellerId: "",
  name: "",
  desc: "",
  contactInfo: "",
  numListing: 0,
  listingId: "",
  status: "",
};

export const MsgCreateSeller = {
  encode(message: MsgCreateSeller, writer: Writer = Writer.create()): Writer {
    if (message.producer !== "") {
      writer.uint32(10).string(message.producer);
    }
    if (message.sellerId !== "") {
      writer.uint32(18).string(message.sellerId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    if (message.contactInfo !== "") {
      writer.uint32(42).string(message.contactInfo);
    }
    if (message.numListing !== 0) {
      writer.uint32(48).uint64(message.numListing);
    }
    for (const v of message.listingId) {
      writer.uint32(58).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSeller {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSeller } as MsgCreateSeller;
    message.listingId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producer = reader.string();
          break;
        case 2:
          message.sellerId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.contactInfo = reader.string();
          break;
        case 6:
          message.numListing = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.listingId.push(reader.string());
          break;
        case 8:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSeller {
    const message = { ...baseMsgCreateSeller } as MsgCreateSeller;
    message.listingId = [];
    if (object.producer !== undefined && object.producer !== null) {
      message.producer = String(object.producer);
    } else {
      message.producer = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = String(object.contactInfo);
    } else {
      message.contactInfo = "";
    }
    if (object.numListing !== undefined && object.numListing !== null) {
      message.numListing = Number(object.numListing);
    } else {
      message.numListing = 0;
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      for (const e of object.listingId) {
        message.listingId.push(String(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgCreateSeller): unknown {
    const obj: any = {};
    message.producer !== undefined && (obj.producer = message.producer);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    message.name !== undefined && (obj.name = message.name);
    message.desc !== undefined && (obj.desc = message.desc);
    message.contactInfo !== undefined &&
      (obj.contactInfo = message.contactInfo);
    message.numListing !== undefined && (obj.numListing = message.numListing);
    if (message.listingId) {
      obj.listingId = message.listingId.map((e) => e);
    } else {
      obj.listingId = [];
    }
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSeller>): MsgCreateSeller {
    const message = { ...baseMsgCreateSeller } as MsgCreateSeller;
    message.listingId = [];
    if (object.producer !== undefined && object.producer !== null) {
      message.producer = object.producer;
    } else {
      message.producer = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = object.contactInfo;
    } else {
      message.contactInfo = "";
    }
    if (object.numListing !== undefined && object.numListing !== null) {
      message.numListing = object.numListing;
    } else {
      message.numListing = 0;
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      for (const e of object.listingId) {
        message.listingId.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgCreateSellerResponse: object = {};

export const MsgCreateSellerResponse = {
  encode(_: MsgCreateSellerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSellerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSellerResponse,
    } as MsgCreateSellerResponse;
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

  fromJSON(_: any): MsgCreateSellerResponse {
    const message = {
      ...baseMsgCreateSellerResponse,
    } as MsgCreateSellerResponse;
    return message;
  },

  toJSON(_: MsgCreateSellerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateSellerResponse>
  ): MsgCreateSellerResponse {
    const message = {
      ...baseMsgCreateSellerResponse,
    } as MsgCreateSellerResponse;
    return message;
  },
};

const baseMsgUpdateSeller: object = {
  producer: "",
  sellerId: "",
  name: "",
  desc: "",
  contactInfo: "",
  numListing: 0,
  listingId: "",
  status: "",
};

export const MsgUpdateSeller = {
  encode(message: MsgUpdateSeller, writer: Writer = Writer.create()): Writer {
    if (message.producer !== "") {
      writer.uint32(10).string(message.producer);
    }
    if (message.sellerId !== "") {
      writer.uint32(18).string(message.sellerId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    if (message.contactInfo !== "") {
      writer.uint32(42).string(message.contactInfo);
    }
    if (message.numListing !== 0) {
      writer.uint32(48).uint64(message.numListing);
    }
    for (const v of message.listingId) {
      writer.uint32(58).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSeller {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateSeller } as MsgUpdateSeller;
    message.listingId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producer = reader.string();
          break;
        case 2:
          message.sellerId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.contactInfo = reader.string();
          break;
        case 6:
          message.numListing = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.listingId.push(reader.string());
          break;
        case 8:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSeller {
    const message = { ...baseMsgUpdateSeller } as MsgUpdateSeller;
    message.listingId = [];
    if (object.producer !== undefined && object.producer !== null) {
      message.producer = String(object.producer);
    } else {
      message.producer = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = String(object.contactInfo);
    } else {
      message.contactInfo = "";
    }
    if (object.numListing !== undefined && object.numListing !== null) {
      message.numListing = Number(object.numListing);
    } else {
      message.numListing = 0;
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      for (const e of object.listingId) {
        message.listingId.push(String(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateSeller): unknown {
    const obj: any = {};
    message.producer !== undefined && (obj.producer = message.producer);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    message.name !== undefined && (obj.name = message.name);
    message.desc !== undefined && (obj.desc = message.desc);
    message.contactInfo !== undefined &&
      (obj.contactInfo = message.contactInfo);
    message.numListing !== undefined && (obj.numListing = message.numListing);
    if (message.listingId) {
      obj.listingId = message.listingId.map((e) => e);
    } else {
      obj.listingId = [];
    }
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateSeller>): MsgUpdateSeller {
    const message = { ...baseMsgUpdateSeller } as MsgUpdateSeller;
    message.listingId = [];
    if (object.producer !== undefined && object.producer !== null) {
      message.producer = object.producer;
    } else {
      message.producer = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = object.contactInfo;
    } else {
      message.contactInfo = "";
    }
    if (object.numListing !== undefined && object.numListing !== null) {
      message.numListing = object.numListing;
    } else {
      message.numListing = 0;
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      for (const e of object.listingId) {
        message.listingId.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgUpdateSellerResponse: object = {};

export const MsgUpdateSellerResponse = {
  encode(_: MsgUpdateSellerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSellerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSellerResponse,
    } as MsgUpdateSellerResponse;
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

  fromJSON(_: any): MsgUpdateSellerResponse {
    const message = {
      ...baseMsgUpdateSellerResponse,
    } as MsgUpdateSellerResponse;
    return message;
  },

  toJSON(_: MsgUpdateSellerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateSellerResponse>
  ): MsgUpdateSellerResponse {
    const message = {
      ...baseMsgUpdateSellerResponse,
    } as MsgUpdateSellerResponse;
    return message;
  },
};

const baseMsgDeleteSeller: object = { producer: "", sellerId: "" };

export const MsgDeleteSeller = {
  encode(message: MsgDeleteSeller, writer: Writer = Writer.create()): Writer {
    if (message.producer !== "") {
      writer.uint32(10).string(message.producer);
    }
    if (message.sellerId !== "") {
      writer.uint32(18).string(message.sellerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSeller {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteSeller } as MsgDeleteSeller;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producer = reader.string();
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

  fromJSON(object: any): MsgDeleteSeller {
    const message = { ...baseMsgDeleteSeller } as MsgDeleteSeller;
    if (object.producer !== undefined && object.producer !== null) {
      message.producer = String(object.producer);
    } else {
      message.producer = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteSeller): unknown {
    const obj: any = {};
    message.producer !== undefined && (obj.producer = message.producer);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteSeller>): MsgDeleteSeller {
    const message = { ...baseMsgDeleteSeller } as MsgDeleteSeller;
    if (object.producer !== undefined && object.producer !== null) {
      message.producer = object.producer;
    } else {
      message.producer = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    return message;
  },
};

const baseMsgDeleteSellerResponse: object = {};

export const MsgDeleteSellerResponse = {
  encode(_: MsgDeleteSellerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSellerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSellerResponse,
    } as MsgDeleteSellerResponse;
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

  fromJSON(_: any): MsgDeleteSellerResponse {
    const message = {
      ...baseMsgDeleteSellerResponse,
    } as MsgDeleteSellerResponse;
    return message;
  },

  toJSON(_: MsgDeleteSellerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteSellerResponse>
  ): MsgDeleteSellerResponse {
    const message = {
      ...baseMsgDeleteSellerResponse,
    } as MsgDeleteSellerResponse;
    return message;
  },
};

const baseMsgCreateVoter: object = {
  reviewer: "",
  voterId: "",
  name: "",
  votingPower: 0,
  numVotes: 0,
  voteId: "",
  status: "",
};

export const MsgCreateVoter = {
  encode(message: MsgCreateVoter, writer: Writer = Writer.create()): Writer {
    if (message.reviewer !== "") {
      writer.uint32(10).string(message.reviewer);
    }
    if (message.voterId !== "") {
      writer.uint32(18).string(message.voterId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.votingPower !== 0) {
      writer.uint32(32).uint64(message.votingPower);
    }
    if (message.numVotes !== 0) {
      writer.uint32(40).uint64(message.numVotes);
    }
    for (const v of message.voteId) {
      writer.uint32(50).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVoter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVoter } as MsgCreateVoter;
    message.voteId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewer = reader.string();
          break;
        case 2:
          message.voterId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.votingPower = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.numVotes = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.voteId.push(reader.string());
          break;
        case 7:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVoter {
    const message = { ...baseMsgCreateVoter } as MsgCreateVoter;
    message.voteId = [];
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = String(object.reviewer);
    } else {
      message.reviewer = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = Number(object.votingPower);
    } else {
      message.votingPower = 0;
    }
    if (object.numVotes !== undefined && object.numVotes !== null) {
      message.numVotes = Number(object.numVotes);
    } else {
      message.numVotes = 0;
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      for (const e of object.voteId) {
        message.voteId.push(String(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgCreateVoter): unknown {
    const obj: any = {};
    message.reviewer !== undefined && (obj.reviewer = message.reviewer);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.name !== undefined && (obj.name = message.name);
    message.votingPower !== undefined &&
      (obj.votingPower = message.votingPower);
    message.numVotes !== undefined && (obj.numVotes = message.numVotes);
    if (message.voteId) {
      obj.voteId = message.voteId.map((e) => e);
    } else {
      obj.voteId = [];
    }
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateVoter>): MsgCreateVoter {
    const message = { ...baseMsgCreateVoter } as MsgCreateVoter;
    message.voteId = [];
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = object.reviewer;
    } else {
      message.reviewer = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = object.votingPower;
    } else {
      message.votingPower = 0;
    }
    if (object.numVotes !== undefined && object.numVotes !== null) {
      message.numVotes = object.numVotes;
    } else {
      message.numVotes = 0;
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      for (const e of object.voteId) {
        message.voteId.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgCreateVoterResponse: object = {};

export const MsgCreateVoterResponse = {
  encode(_: MsgCreateVoterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVoterResponse } as MsgCreateVoterResponse;
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

  fromJSON(_: any): MsgCreateVoterResponse {
    const message = { ...baseMsgCreateVoterResponse } as MsgCreateVoterResponse;
    return message;
  },

  toJSON(_: MsgCreateVoterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateVoterResponse>): MsgCreateVoterResponse {
    const message = { ...baseMsgCreateVoterResponse } as MsgCreateVoterResponse;
    return message;
  },
};

const baseMsgUpdateVoter: object = {
  reviewer: "",
  voterId: "",
  name: "",
  votingPower: 0,
  numVotes: 0,
  voteId: "",
  status: "",
};

export const MsgUpdateVoter = {
  encode(message: MsgUpdateVoter, writer: Writer = Writer.create()): Writer {
    if (message.reviewer !== "") {
      writer.uint32(10).string(message.reviewer);
    }
    if (message.voterId !== "") {
      writer.uint32(18).string(message.voterId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.votingPower !== 0) {
      writer.uint32(32).uint64(message.votingPower);
    }
    if (message.numVotes !== 0) {
      writer.uint32(40).uint64(message.numVotes);
    }
    for (const v of message.voteId) {
      writer.uint32(50).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateVoter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateVoter } as MsgUpdateVoter;
    message.voteId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewer = reader.string();
          break;
        case 2:
          message.voterId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.votingPower = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.numVotes = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.voteId.push(reader.string());
          break;
        case 7:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateVoter {
    const message = { ...baseMsgUpdateVoter } as MsgUpdateVoter;
    message.voteId = [];
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = String(object.reviewer);
    } else {
      message.reviewer = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = Number(object.votingPower);
    } else {
      message.votingPower = 0;
    }
    if (object.numVotes !== undefined && object.numVotes !== null) {
      message.numVotes = Number(object.numVotes);
    } else {
      message.numVotes = 0;
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      for (const e of object.voteId) {
        message.voteId.push(String(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateVoter): unknown {
    const obj: any = {};
    message.reviewer !== undefined && (obj.reviewer = message.reviewer);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.name !== undefined && (obj.name = message.name);
    message.votingPower !== undefined &&
      (obj.votingPower = message.votingPower);
    message.numVotes !== undefined && (obj.numVotes = message.numVotes);
    if (message.voteId) {
      obj.voteId = message.voteId.map((e) => e);
    } else {
      obj.voteId = [];
    }
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateVoter>): MsgUpdateVoter {
    const message = { ...baseMsgUpdateVoter } as MsgUpdateVoter;
    message.voteId = [];
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = object.reviewer;
    } else {
      message.reviewer = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = object.votingPower;
    } else {
      message.votingPower = 0;
    }
    if (object.numVotes !== undefined && object.numVotes !== null) {
      message.numVotes = object.numVotes;
    } else {
      message.numVotes = 0;
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      for (const e of object.voteId) {
        message.voteId.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgUpdateVoterResponse: object = {};

export const MsgUpdateVoterResponse = {
  encode(_: MsgUpdateVoterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateVoterResponse } as MsgUpdateVoterResponse;
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

  fromJSON(_: any): MsgUpdateVoterResponse {
    const message = { ...baseMsgUpdateVoterResponse } as MsgUpdateVoterResponse;
    return message;
  },

  toJSON(_: MsgUpdateVoterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateVoterResponse>): MsgUpdateVoterResponse {
    const message = { ...baseMsgUpdateVoterResponse } as MsgUpdateVoterResponse;
    return message;
  },
};

const baseMsgDeleteVoter: object = { reviewer: "", voterId: "" };

export const MsgDeleteVoter = {
  encode(message: MsgDeleteVoter, writer: Writer = Writer.create()): Writer {
    if (message.reviewer !== "") {
      writer.uint32(10).string(message.reviewer);
    }
    if (message.voterId !== "") {
      writer.uint32(18).string(message.voterId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteVoter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteVoter } as MsgDeleteVoter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewer = reader.string();
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

  fromJSON(object: any): MsgDeleteVoter {
    const message = { ...baseMsgDeleteVoter } as MsgDeleteVoter;
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = String(object.reviewer);
    } else {
      message.reviewer = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteVoter): unknown {
    const obj: any = {};
    message.reviewer !== undefined && (obj.reviewer = message.reviewer);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteVoter>): MsgDeleteVoter {
    const message = { ...baseMsgDeleteVoter } as MsgDeleteVoter;
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = object.reviewer;
    } else {
      message.reviewer = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    return message;
  },
};

const baseMsgDeleteVoterResponse: object = {};

export const MsgDeleteVoterResponse = {
  encode(_: MsgDeleteVoterResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteVoterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteVoterResponse } as MsgDeleteVoterResponse;
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

  fromJSON(_: any): MsgDeleteVoterResponse {
    const message = { ...baseMsgDeleteVoterResponse } as MsgDeleteVoterResponse;
    return message;
  },

  toJSON(_: MsgDeleteVoterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteVoterResponse>): MsgDeleteVoterResponse {
    const message = { ...baseMsgDeleteVoterResponse } as MsgDeleteVoterResponse;
    return message;
  },
};

const baseMsgCreateWhitelist: object = { creator: "", whitelistId: "" };

export const MsgCreateWhitelist = {
  encode(
    message: MsgCreateWhitelist,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.whitelistId !== "") {
      writer.uint32(18).string(message.whitelistId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateWhitelist {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateWhitelist } as MsgCreateWhitelist;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.whitelistId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWhitelist {
    const message = { ...baseMsgCreateWhitelist } as MsgCreateWhitelist;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    return message;
  },

  toJSON(message: MsgCreateWhitelist): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateWhitelist>): MsgCreateWhitelist {
    const message = { ...baseMsgCreateWhitelist } as MsgCreateWhitelist;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    return message;
  },
};

const baseMsgCreateWhitelistResponse: object = { id: 0 };

export const MsgCreateWhitelistResponse = {
  encode(
    message: MsgCreateWhitelistResponse,
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
  ): MsgCreateWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateWhitelistResponse,
    } as MsgCreateWhitelistResponse;
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

  fromJSON(object: any): MsgCreateWhitelistResponse {
    const message = {
      ...baseMsgCreateWhitelistResponse,
    } as MsgCreateWhitelistResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateWhitelistResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateWhitelistResponse>
  ): MsgCreateWhitelistResponse {
    const message = {
      ...baseMsgCreateWhitelistResponse,
    } as MsgCreateWhitelistResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateWhitelist: object = { creator: "", id: 0, whitelistId: "" };

export const MsgUpdateWhitelist = {
  encode(
    message: MsgUpdateWhitelist,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.whitelistId !== "") {
      writer.uint32(26).string(message.whitelistId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateWhitelist {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateWhitelist } as MsgUpdateWhitelist;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.whitelistId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateWhitelist {
    const message = { ...baseMsgUpdateWhitelist } as MsgUpdateWhitelist;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateWhitelist): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateWhitelist>): MsgUpdateWhitelist {
    const message = { ...baseMsgUpdateWhitelist } as MsgUpdateWhitelist;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    return message;
  },
};

const baseMsgUpdateWhitelistResponse: object = {};

export const MsgUpdateWhitelistResponse = {
  encode(
    _: MsgUpdateWhitelistResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateWhitelistResponse,
    } as MsgUpdateWhitelistResponse;
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

  fromJSON(_: any): MsgUpdateWhitelistResponse {
    const message = {
      ...baseMsgUpdateWhitelistResponse,
    } as MsgUpdateWhitelistResponse;
    return message;
  },

  toJSON(_: MsgUpdateWhitelistResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateWhitelistResponse>
  ): MsgUpdateWhitelistResponse {
    const message = {
      ...baseMsgUpdateWhitelistResponse,
    } as MsgUpdateWhitelistResponse;
    return message;
  },
};

const baseMsgDeleteWhitelist: object = { creator: "", id: 0 };

export const MsgDeleteWhitelist = {
  encode(
    message: MsgDeleteWhitelist,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteWhitelist {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteWhitelist } as MsgDeleteWhitelist;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteWhitelist {
    const message = { ...baseMsgDeleteWhitelist } as MsgDeleteWhitelist;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteWhitelist): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteWhitelist>): MsgDeleteWhitelist {
    const message = { ...baseMsgDeleteWhitelist } as MsgDeleteWhitelist;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteWhitelistResponse: object = {};

export const MsgDeleteWhitelistResponse = {
  encode(
    _: MsgDeleteWhitelistResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteWhitelistResponse,
    } as MsgDeleteWhitelistResponse;
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

  fromJSON(_: any): MsgDeleteWhitelistResponse {
    const message = {
      ...baseMsgDeleteWhitelistResponse,
    } as MsgDeleteWhitelistResponse;
    return message;
  },

  toJSON(_: MsgDeleteWhitelistResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteWhitelistResponse>
  ): MsgDeleteWhitelistResponse {
    const message = {
      ...baseMsgDeleteWhitelistResponse,
    } as MsgDeleteWhitelistResponse;
    return message;
  },
};

const baseMsgCreateMonoWhitelist: object = { governor: "", whitelistId: "" };

export const MsgCreateMonoWhitelist = {
  encode(
    message: MsgCreateMonoWhitelist,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.governor !== "") {
      writer.uint32(10).string(message.governor);
    }
    if (message.whitelistId !== "") {
      writer.uint32(18).string(message.whitelistId);
    }
    if (message.buyer !== undefined) {
      Buyer.encode(message.buyer, writer.uint32(26).fork()).ldelim();
    }
    if (message.seller !== undefined) {
      Seller.encode(message.seller, writer.uint32(34).fork()).ldelim();
    }
    if (message.voter !== undefined) {
      Voter.encode(message.voter, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMonoWhitelist {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMonoWhitelist } as MsgCreateMonoWhitelist;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governor = reader.string();
          break;
        case 2:
          message.whitelistId = reader.string();
          break;
        case 3:
          message.buyer = Buyer.decode(reader, reader.uint32());
          break;
        case 4:
          message.seller = Seller.decode(reader, reader.uint32());
          break;
        case 5:
          message.voter = Voter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMonoWhitelist {
    const message = { ...baseMsgCreateMonoWhitelist } as MsgCreateMonoWhitelist;
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = String(object.governor);
    } else {
      message.governor = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromJSON(object.buyer);
    } else {
      message.buyer = undefined;
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = Seller.fromJSON(object.seller);
    } else {
      message.seller = undefined;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = Voter.fromJSON(object.voter);
    } else {
      message.voter = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateMonoWhitelist): unknown {
    const obj: any = {};
    message.governor !== undefined && (obj.governor = message.governor);
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    message.buyer !== undefined &&
      (obj.buyer = message.buyer ? Buyer.toJSON(message.buyer) : undefined);
    message.seller !== undefined &&
      (obj.seller = message.seller ? Seller.toJSON(message.seller) : undefined);
    message.voter !== undefined &&
      (obj.voter = message.voter ? Voter.toJSON(message.voter) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMonoWhitelist>
  ): MsgCreateMonoWhitelist {
    const message = { ...baseMsgCreateMonoWhitelist } as MsgCreateMonoWhitelist;
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = object.governor;
    } else {
      message.governor = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromPartial(object.buyer);
    } else {
      message.buyer = undefined;
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = Seller.fromPartial(object.seller);
    } else {
      message.seller = undefined;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = Voter.fromPartial(object.voter);
    } else {
      message.voter = undefined;
    }
    return message;
  },
};

const baseMsgCreateMonoWhitelistResponse: object = {};

export const MsgCreateMonoWhitelistResponse = {
  encode(
    _: MsgCreateMonoWhitelistResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMonoWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMonoWhitelistResponse,
    } as MsgCreateMonoWhitelistResponse;
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

  fromJSON(_: any): MsgCreateMonoWhitelistResponse {
    const message = {
      ...baseMsgCreateMonoWhitelistResponse,
    } as MsgCreateMonoWhitelistResponse;
    return message;
  },

  toJSON(_: MsgCreateMonoWhitelistResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateMonoWhitelistResponse>
  ): MsgCreateMonoWhitelistResponse {
    const message = {
      ...baseMsgCreateMonoWhitelistResponse,
    } as MsgCreateMonoWhitelistResponse;
    return message;
  },
};

const baseMsgUpdateMonoWhitelist: object = { governor: "", whitelistId: "" };

export const MsgUpdateMonoWhitelist = {
  encode(
    message: MsgUpdateMonoWhitelist,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.governor !== "") {
      writer.uint32(10).string(message.governor);
    }
    if (message.whitelistId !== "") {
      writer.uint32(18).string(message.whitelistId);
    }
    if (message.buyer !== undefined) {
      Buyer.encode(message.buyer, writer.uint32(26).fork()).ldelim();
    }
    if (message.seller !== undefined) {
      Seller.encode(message.seller, writer.uint32(34).fork()).ldelim();
    }
    if (message.voter !== undefined) {
      Voter.encode(message.voter, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMonoWhitelist {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMonoWhitelist } as MsgUpdateMonoWhitelist;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governor = reader.string();
          break;
        case 2:
          message.whitelistId = reader.string();
          break;
        case 3:
          message.buyer = Buyer.decode(reader, reader.uint32());
          break;
        case 4:
          message.seller = Seller.decode(reader, reader.uint32());
          break;
        case 5:
          message.voter = Voter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMonoWhitelist {
    const message = { ...baseMsgUpdateMonoWhitelist } as MsgUpdateMonoWhitelist;
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = String(object.governor);
    } else {
      message.governor = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromJSON(object.buyer);
    } else {
      message.buyer = undefined;
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = Seller.fromJSON(object.seller);
    } else {
      message.seller = undefined;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = Voter.fromJSON(object.voter);
    } else {
      message.voter = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateMonoWhitelist): unknown {
    const obj: any = {};
    message.governor !== undefined && (obj.governor = message.governor);
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    message.buyer !== undefined &&
      (obj.buyer = message.buyer ? Buyer.toJSON(message.buyer) : undefined);
    message.seller !== undefined &&
      (obj.seller = message.seller ? Seller.toJSON(message.seller) : undefined);
    message.voter !== undefined &&
      (obj.voter = message.voter ? Voter.toJSON(message.voter) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateMonoWhitelist>
  ): MsgUpdateMonoWhitelist {
    const message = { ...baseMsgUpdateMonoWhitelist } as MsgUpdateMonoWhitelist;
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = object.governor;
    } else {
      message.governor = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromPartial(object.buyer);
    } else {
      message.buyer = undefined;
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = Seller.fromPartial(object.seller);
    } else {
      message.seller = undefined;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = Voter.fromPartial(object.voter);
    } else {
      message.voter = undefined;
    }
    return message;
  },
};

const baseMsgUpdateMonoWhitelistResponse: object = {};

export const MsgUpdateMonoWhitelistResponse = {
  encode(
    _: MsgUpdateMonoWhitelistResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMonoWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMonoWhitelistResponse,
    } as MsgUpdateMonoWhitelistResponse;
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

  fromJSON(_: any): MsgUpdateMonoWhitelistResponse {
    const message = {
      ...baseMsgUpdateMonoWhitelistResponse,
    } as MsgUpdateMonoWhitelistResponse;
    return message;
  },

  toJSON(_: MsgUpdateMonoWhitelistResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMonoWhitelistResponse>
  ): MsgUpdateMonoWhitelistResponse {
    const message = {
      ...baseMsgUpdateMonoWhitelistResponse,
    } as MsgUpdateMonoWhitelistResponse;
    return message;
  },
};

const baseMsgDeleteMonoWhitelist: object = { governor: "", whitelistId: "" };

export const MsgDeleteMonoWhitelist = {
  encode(
    message: MsgDeleteMonoWhitelist,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.governor !== "") {
      writer.uint32(10).string(message.governor);
    }
    if (message.whitelistId !== "") {
      writer.uint32(18).string(message.whitelistId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMonoWhitelist {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMonoWhitelist } as MsgDeleteMonoWhitelist;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governor = reader.string();
          break;
        case 2:
          message.whitelistId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMonoWhitelist {
    const message = { ...baseMsgDeleteMonoWhitelist } as MsgDeleteMonoWhitelist;
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = String(object.governor);
    } else {
      message.governor = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteMonoWhitelist): unknown {
    const obj: any = {};
    message.governor !== undefined && (obj.governor = message.governor);
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteMonoWhitelist>
  ): MsgDeleteMonoWhitelist {
    const message = { ...baseMsgDeleteMonoWhitelist } as MsgDeleteMonoWhitelist;
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = object.governor;
    } else {
      message.governor = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    return message;
  },
};

const baseMsgDeleteMonoWhitelistResponse: object = {};

export const MsgDeleteMonoWhitelistResponse = {
  encode(
    _: MsgDeleteMonoWhitelistResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteMonoWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMonoWhitelistResponse,
    } as MsgDeleteMonoWhitelistResponse;
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

  fromJSON(_: any): MsgDeleteMonoWhitelistResponse {
    const message = {
      ...baseMsgDeleteMonoWhitelistResponse,
    } as MsgDeleteMonoWhitelistResponse;
    return message;
  },

  toJSON(_: MsgDeleteMonoWhitelistResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMonoWhitelistResponse>
  ): MsgDeleteMonoWhitelistResponse {
    const message = {
      ...baseMsgDeleteMonoWhitelistResponse,
    } as MsgDeleteMonoWhitelistResponse;
    return message;
  },
};

const baseMsgJoinBuyers: object = { creator: "", whitelistId: "", name: "" };

export const MsgJoinBuyers = {
  encode(message: MsgJoinBuyers, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.whitelistId !== "") {
      writer.uint32(18).string(message.whitelistId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgJoinBuyers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgJoinBuyers } as MsgJoinBuyers;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.whitelistId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinBuyers {
    const message = { ...baseMsgJoinBuyers } as MsgJoinBuyers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgJoinBuyers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgJoinBuyers>): MsgJoinBuyers {
    const message = { ...baseMsgJoinBuyers } as MsgJoinBuyers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgJoinBuyersResponse: object = { buyerId: "" };

export const MsgJoinBuyersResponse = {
  encode(
    message: MsgJoinBuyersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyerId !== "") {
      writer.uint32(10).string(message.buyerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgJoinBuyersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgJoinBuyersResponse } as MsgJoinBuyersResponse;
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

  fromJSON(object: any): MsgJoinBuyersResponse {
    const message = { ...baseMsgJoinBuyersResponse } as MsgJoinBuyersResponse;
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    return message;
  },

  toJSON(message: MsgJoinBuyersResponse): unknown {
    const obj: any = {};
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgJoinBuyersResponse>
  ): MsgJoinBuyersResponse {
    const message = { ...baseMsgJoinBuyersResponse } as MsgJoinBuyersResponse;
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    return message;
  },
};

const baseMsgJoinSellers: object = {
  creator: "",
  whitelistId: "",
  name: "",
  desc: "",
  contactInfo: "",
};

export const MsgJoinSellers = {
  encode(message: MsgJoinSellers, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.whitelistId !== "") {
      writer.uint32(18).string(message.whitelistId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    if (message.contactInfo !== "") {
      writer.uint32(42).string(message.contactInfo);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgJoinSellers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgJoinSellers } as MsgJoinSellers;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.whitelistId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.contactInfo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinSellers {
    const message = { ...baseMsgJoinSellers } as MsgJoinSellers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = String(object.contactInfo);
    } else {
      message.contactInfo = "";
    }
    return message;
  },

  toJSON(message: MsgJoinSellers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    message.name !== undefined && (obj.name = message.name);
    message.desc !== undefined && (obj.desc = message.desc);
    message.contactInfo !== undefined &&
      (obj.contactInfo = message.contactInfo);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgJoinSellers>): MsgJoinSellers {
    const message = { ...baseMsgJoinSellers } as MsgJoinSellers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.contactInfo !== undefined && object.contactInfo !== null) {
      message.contactInfo = object.contactInfo;
    } else {
      message.contactInfo = "";
    }
    return message;
  },
};

const baseMsgJoinSellersResponse: object = { sellerId: "" };

export const MsgJoinSellersResponse = {
  encode(
    message: MsgJoinSellersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sellerId !== "") {
      writer.uint32(10).string(message.sellerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgJoinSellersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgJoinSellersResponse } as MsgJoinSellersResponse;
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

  fromJSON(object: any): MsgJoinSellersResponse {
    const message = { ...baseMsgJoinSellersResponse } as MsgJoinSellersResponse;
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    return message;
  },

  toJSON(message: MsgJoinSellersResponse): unknown {
    const obj: any = {};
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgJoinSellersResponse>
  ): MsgJoinSellersResponse {
    const message = { ...baseMsgJoinSellersResponse } as MsgJoinSellersResponse;
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    return message;
  },
};

const baseMsgJoinVoters: object = { creator: "", whitelistId: "", name: "" };

export const MsgJoinVoters = {
  encode(message: MsgJoinVoters, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.whitelistId !== "") {
      writer.uint32(18).string(message.whitelistId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgJoinVoters {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgJoinVoters } as MsgJoinVoters;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.whitelistId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinVoters {
    const message = { ...baseMsgJoinVoters } as MsgJoinVoters;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgJoinVoters): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgJoinVoters>): MsgJoinVoters {
    const message = { ...baseMsgJoinVoters } as MsgJoinVoters;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgJoinVotersResponse: object = { voterId: "" };

export const MsgJoinVotersResponse = {
  encode(
    message: MsgJoinVotersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.voterId !== "") {
      writer.uint32(10).string(message.voterId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgJoinVotersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgJoinVotersResponse } as MsgJoinVotersResponse;
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

  fromJSON(object: any): MsgJoinVotersResponse {
    const message = { ...baseMsgJoinVotersResponse } as MsgJoinVotersResponse;
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    return message;
  },

  toJSON(message: MsgJoinVotersResponse): unknown {
    const obj: any = {};
    message.voterId !== undefined && (obj.voterId = message.voterId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgJoinVotersResponse>
  ): MsgJoinVotersResponse {
    const message = { ...baseMsgJoinVotersResponse } as MsgJoinVotersResponse;
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    return message;
  },
};

const baseMsgCreateNewWhitelist: object = { creator: "" };

export const MsgCreateNewWhitelist = {
  encode(
    message: MsgCreateNewWhitelist,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNewWhitelist {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNewWhitelist } as MsgCreateNewWhitelist;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNewWhitelist {
    const message = { ...baseMsgCreateNewWhitelist } as MsgCreateNewWhitelist;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgCreateNewWhitelist): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateNewWhitelist>
  ): MsgCreateNewWhitelist {
    const message = { ...baseMsgCreateNewWhitelist } as MsgCreateNewWhitelist;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgCreateNewWhitelistResponse: object = { whitelistId: "" };

export const MsgCreateNewWhitelistResponse = {
  encode(
    message: MsgCreateNewWhitelistResponse,
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
  ): MsgCreateNewWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateNewWhitelistResponse,
    } as MsgCreateNewWhitelistResponse;
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

  fromJSON(object: any): MsgCreateNewWhitelistResponse {
    const message = {
      ...baseMsgCreateNewWhitelistResponse,
    } as MsgCreateNewWhitelistResponse;
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    return message;
  },

  toJSON(message: MsgCreateNewWhitelistResponse): unknown {
    const obj: any = {};
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateNewWhitelistResponse>
  ): MsgCreateNewWhitelistResponse {
    const message = {
      ...baseMsgCreateNewWhitelistResponse,
    } as MsgCreateNewWhitelistResponse;
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateBuyer(request: MsgCreateBuyer): Promise<MsgCreateBuyerResponse>;
  UpdateBuyer(request: MsgUpdateBuyer): Promise<MsgUpdateBuyerResponse>;
  DeleteBuyer(request: MsgDeleteBuyer): Promise<MsgDeleteBuyerResponse>;
  CreateSeller(request: MsgCreateSeller): Promise<MsgCreateSellerResponse>;
  UpdateSeller(request: MsgUpdateSeller): Promise<MsgUpdateSellerResponse>;
  DeleteSeller(request: MsgDeleteSeller): Promise<MsgDeleteSellerResponse>;
  CreateVoter(request: MsgCreateVoter): Promise<MsgCreateVoterResponse>;
  UpdateVoter(request: MsgUpdateVoter): Promise<MsgUpdateVoterResponse>;
  DeleteVoter(request: MsgDeleteVoter): Promise<MsgDeleteVoterResponse>;
  CreateWhitelist(
    request: MsgCreateWhitelist
  ): Promise<MsgCreateWhitelistResponse>;
  UpdateWhitelist(
    request: MsgUpdateWhitelist
  ): Promise<MsgUpdateWhitelistResponse>;
  DeleteWhitelist(
    request: MsgDeleteWhitelist
  ): Promise<MsgDeleteWhitelistResponse>;
  CreateMonoWhitelist(
    request: MsgCreateMonoWhitelist
  ): Promise<MsgCreateMonoWhitelistResponse>;
  UpdateMonoWhitelist(
    request: MsgUpdateMonoWhitelist
  ): Promise<MsgUpdateMonoWhitelistResponse>;
  DeleteMonoWhitelist(
    request: MsgDeleteMonoWhitelist
  ): Promise<MsgDeleteMonoWhitelistResponse>;
  JoinBuyers(request: MsgJoinBuyers): Promise<MsgJoinBuyersResponse>;
  JoinSellers(request: MsgJoinSellers): Promise<MsgJoinSellersResponse>;
  JoinVoters(request: MsgJoinVoters): Promise<MsgJoinVotersResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateNewWhitelist(
    request: MsgCreateNewWhitelist
  ): Promise<MsgCreateNewWhitelistResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateBuyer(request: MsgCreateBuyer): Promise<MsgCreateBuyerResponse> {
    const data = MsgCreateBuyer.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "CreateBuyer",
      data
    );
    return promise.then((data) =>
      MsgCreateBuyerResponse.decode(new Reader(data))
    );
  }

  UpdateBuyer(request: MsgUpdateBuyer): Promise<MsgUpdateBuyerResponse> {
    const data = MsgUpdateBuyer.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "UpdateBuyer",
      data
    );
    return promise.then((data) =>
      MsgUpdateBuyerResponse.decode(new Reader(data))
    );
  }

  DeleteBuyer(request: MsgDeleteBuyer): Promise<MsgDeleteBuyerResponse> {
    const data = MsgDeleteBuyer.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "DeleteBuyer",
      data
    );
    return promise.then((data) =>
      MsgDeleteBuyerResponse.decode(new Reader(data))
    );
  }

  CreateSeller(request: MsgCreateSeller): Promise<MsgCreateSellerResponse> {
    const data = MsgCreateSeller.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "CreateSeller",
      data
    );
    return promise.then((data) =>
      MsgCreateSellerResponse.decode(new Reader(data))
    );
  }

  UpdateSeller(request: MsgUpdateSeller): Promise<MsgUpdateSellerResponse> {
    const data = MsgUpdateSeller.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "UpdateSeller",
      data
    );
    return promise.then((data) =>
      MsgUpdateSellerResponse.decode(new Reader(data))
    );
  }

  DeleteSeller(request: MsgDeleteSeller): Promise<MsgDeleteSellerResponse> {
    const data = MsgDeleteSeller.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "DeleteSeller",
      data
    );
    return promise.then((data) =>
      MsgDeleteSellerResponse.decode(new Reader(data))
    );
  }

  CreateVoter(request: MsgCreateVoter): Promise<MsgCreateVoterResponse> {
    const data = MsgCreateVoter.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "CreateVoter",
      data
    );
    return promise.then((data) =>
      MsgCreateVoterResponse.decode(new Reader(data))
    );
  }

  UpdateVoter(request: MsgUpdateVoter): Promise<MsgUpdateVoterResponse> {
    const data = MsgUpdateVoter.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "UpdateVoter",
      data
    );
    return promise.then((data) =>
      MsgUpdateVoterResponse.decode(new Reader(data))
    );
  }

  DeleteVoter(request: MsgDeleteVoter): Promise<MsgDeleteVoterResponse> {
    const data = MsgDeleteVoter.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "DeleteVoter",
      data
    );
    return promise.then((data) =>
      MsgDeleteVoterResponse.decode(new Reader(data))
    );
  }

  CreateWhitelist(
    request: MsgCreateWhitelist
  ): Promise<MsgCreateWhitelistResponse> {
    const data = MsgCreateWhitelist.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "CreateWhitelist",
      data
    );
    return promise.then((data) =>
      MsgCreateWhitelistResponse.decode(new Reader(data))
    );
  }

  UpdateWhitelist(
    request: MsgUpdateWhitelist
  ): Promise<MsgUpdateWhitelistResponse> {
    const data = MsgUpdateWhitelist.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "UpdateWhitelist",
      data
    );
    return promise.then((data) =>
      MsgUpdateWhitelistResponse.decode(new Reader(data))
    );
  }

  DeleteWhitelist(
    request: MsgDeleteWhitelist
  ): Promise<MsgDeleteWhitelistResponse> {
    const data = MsgDeleteWhitelist.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "DeleteWhitelist",
      data
    );
    return promise.then((data) =>
      MsgDeleteWhitelistResponse.decode(new Reader(data))
    );
  }

  CreateMonoWhitelist(
    request: MsgCreateMonoWhitelist
  ): Promise<MsgCreateMonoWhitelistResponse> {
    const data = MsgCreateMonoWhitelist.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "CreateMonoWhitelist",
      data
    );
    return promise.then((data) =>
      MsgCreateMonoWhitelistResponse.decode(new Reader(data))
    );
  }

  UpdateMonoWhitelist(
    request: MsgUpdateMonoWhitelist
  ): Promise<MsgUpdateMonoWhitelistResponse> {
    const data = MsgUpdateMonoWhitelist.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "UpdateMonoWhitelist",
      data
    );
    return promise.then((data) =>
      MsgUpdateMonoWhitelistResponse.decode(new Reader(data))
    );
  }

  DeleteMonoWhitelist(
    request: MsgDeleteMonoWhitelist
  ): Promise<MsgDeleteMonoWhitelistResponse> {
    const data = MsgDeleteMonoWhitelist.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "DeleteMonoWhitelist",
      data
    );
    return promise.then((data) =>
      MsgDeleteMonoWhitelistResponse.decode(new Reader(data))
    );
  }

  JoinBuyers(request: MsgJoinBuyers): Promise<MsgJoinBuyersResponse> {
    const data = MsgJoinBuyers.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "JoinBuyers",
      data
    );
    return promise.then((data) =>
      MsgJoinBuyersResponse.decode(new Reader(data))
    );
  }

  JoinSellers(request: MsgJoinSellers): Promise<MsgJoinSellersResponse> {
    const data = MsgJoinSellers.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "JoinSellers",
      data
    );
    return promise.then((data) =>
      MsgJoinSellersResponse.decode(new Reader(data))
    );
  }

  JoinVoters(request: MsgJoinVoters): Promise<MsgJoinVotersResponse> {
    const data = MsgJoinVoters.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "JoinVoters",
      data
    );
    return promise.then((data) =>
      MsgJoinVotersResponse.decode(new Reader(data))
    );
  }

  CreateNewWhitelist(
    request: MsgCreateNewWhitelist
  ): Promise<MsgCreateNewWhitelistResponse> {
    const data = MsgCreateNewWhitelist.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.whitelist.Msg",
      "CreateNewWhitelist",
      data
    );
    return promise.then((data) =>
      MsgCreateNewWhitelistResponse.decode(new Reader(data))
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
