/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "crowlabs.delta.market";

export interface MsgCreateMonoListing {
  seller: string;
  listingId: string;
  title: string;
  desc: string;
  price: Coin[];
  orderId: string[];
  acceptedOrderId: string;
  status: string;
}

export interface MsgCreateMonoListingResponse {}

export interface MsgUpdateMonoListing {
  seller: string;
  listingId: string;
  title: string;
  desc: string;
  price: Coin[];
  orderId: string[];
  acceptedOrderId: string;
  status: string;
}

export interface MsgUpdateMonoListingResponse {}

export interface MsgDeleteMonoListing {
  seller: string;
  listingId: string;
}

export interface MsgDeleteMonoListingResponse {}

export interface MsgCreateMonoOrder {
  buyer: string;
  orderId: string;
  price: Coin[];
  timeout: string;
  status: string;
}

export interface MsgCreateMonoOrderResponse {}

export interface MsgUpdateMonoOrder {
  buyer: string;
  orderId: string;
  price: Coin[];
  timeout: string;
  status: string;
}

export interface MsgUpdateMonoOrderResponse {}

export interface MsgDeleteMonoOrder {
  buyer: string;
  orderId: string;
}

export interface MsgDeleteMonoOrderResponse {}

export interface MsgOpenMonoListing {
  seller: string;
  whitelistId: string;
  title: string;
  desc: string;
  price: Coin[];
}

export interface MsgOpenMonoListingResponse {
  listingId: string;
}

export interface MsgCloseListing {
  seller: string;
  listingId: string;
}

export interface MsgCloseListingResponse {
  listingId: string;
  status: string;
}

export interface MsgOpenMonoOrder {
  buyer: string;
  listingId: string;
  price: Coin[];
  timeout: string;
}

export interface MsgOpenMonoOrderResponse {
  orderId: string;
}

export interface MsgCancelPendingMonoOrder {
  buyer: string;
  orderId: string;
}

export interface MsgCancelPendingMonoOrderResponse {
  orderId: string;
  status: string;
}

export interface MsgUpdatePendingMonoOrder {
  buyer: string;
  orderId: string;
  price: Coin[];
  timeeout: string;
}

export interface MsgUpdatePendingMonoOrderResponse {
  orderId: string;
  status: string;
}

export interface MsgAcceptMonoOrder {
  seller: string;
  orderId: string;
}

export interface MsgAcceptMonoOrderResponse {
  crowId: string;
}

const baseMsgCreateMonoListing: object = {
  seller: "",
  listingId: "",
  title: "",
  desc: "",
  orderId: "",
  acceptedOrderId: "",
  status: "",
};

export const MsgCreateMonoListing = {
  encode(
    message: MsgCreateMonoListing,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.listingId !== "") {
      writer.uint32(18).string(message.listingId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.orderId) {
      writer.uint32(50).string(v!);
    }
    if (message.acceptedOrderId !== "") {
      writer.uint32(58).string(message.acceptedOrderId);
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMonoListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMonoListing } as MsgCreateMonoListing;
    message.price = [];
    message.orderId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.listingId = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.orderId.push(reader.string());
          break;
        case 7:
          message.acceptedOrderId = reader.string();
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

  fromJSON(object: any): MsgCreateMonoListing {
    const message = { ...baseMsgCreateMonoListing } as MsgCreateMonoListing;
    message.price = [];
    message.orderId = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      for (const e of object.orderId) {
        message.orderId.push(String(e));
      }
    }
    if (
      object.acceptedOrderId !== undefined &&
      object.acceptedOrderId !== null
    ) {
      message.acceptedOrderId = String(object.acceptedOrderId);
    } else {
      message.acceptedOrderId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMonoListing): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.listingId !== undefined && (obj.listingId = message.listingId);
    message.title !== undefined && (obj.title = message.title);
    message.desc !== undefined && (obj.desc = message.desc);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    if (message.orderId) {
      obj.orderId = message.orderId.map((e) => e);
    } else {
      obj.orderId = [];
    }
    message.acceptedOrderId !== undefined &&
      (obj.acceptedOrderId = message.acceptedOrderId);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMonoListing>): MsgCreateMonoListing {
    const message = { ...baseMsgCreateMonoListing } as MsgCreateMonoListing;
    message.price = [];
    message.orderId = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      for (const e of object.orderId) {
        message.orderId.push(e);
      }
    }
    if (
      object.acceptedOrderId !== undefined &&
      object.acceptedOrderId !== null
    ) {
      message.acceptedOrderId = object.acceptedOrderId;
    } else {
      message.acceptedOrderId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgCreateMonoListingResponse: object = {};

export const MsgCreateMonoListingResponse = {
  encode(
    _: MsgCreateMonoListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMonoListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMonoListingResponse,
    } as MsgCreateMonoListingResponse;
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

  fromJSON(_: any): MsgCreateMonoListingResponse {
    const message = {
      ...baseMsgCreateMonoListingResponse,
    } as MsgCreateMonoListingResponse;
    return message;
  },

  toJSON(_: MsgCreateMonoListingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateMonoListingResponse>
  ): MsgCreateMonoListingResponse {
    const message = {
      ...baseMsgCreateMonoListingResponse,
    } as MsgCreateMonoListingResponse;
    return message;
  },
};

const baseMsgUpdateMonoListing: object = {
  seller: "",
  listingId: "",
  title: "",
  desc: "",
  orderId: "",
  acceptedOrderId: "",
  status: "",
};

export const MsgUpdateMonoListing = {
  encode(
    message: MsgUpdateMonoListing,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.listingId !== "") {
      writer.uint32(18).string(message.listingId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.orderId) {
      writer.uint32(50).string(v!);
    }
    if (message.acceptedOrderId !== "") {
      writer.uint32(58).string(message.acceptedOrderId);
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMonoListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMonoListing } as MsgUpdateMonoListing;
    message.price = [];
    message.orderId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.listingId = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.orderId.push(reader.string());
          break;
        case 7:
          message.acceptedOrderId = reader.string();
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

  fromJSON(object: any): MsgUpdateMonoListing {
    const message = { ...baseMsgUpdateMonoListing } as MsgUpdateMonoListing;
    message.price = [];
    message.orderId = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      for (const e of object.orderId) {
        message.orderId.push(String(e));
      }
    }
    if (
      object.acceptedOrderId !== undefined &&
      object.acceptedOrderId !== null
    ) {
      message.acceptedOrderId = String(object.acceptedOrderId);
    } else {
      message.acceptedOrderId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateMonoListing): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.listingId !== undefined && (obj.listingId = message.listingId);
    message.title !== undefined && (obj.title = message.title);
    message.desc !== undefined && (obj.desc = message.desc);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    if (message.orderId) {
      obj.orderId = message.orderId.map((e) => e);
    } else {
      obj.orderId = [];
    }
    message.acceptedOrderId !== undefined &&
      (obj.acceptedOrderId = message.acceptedOrderId);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMonoListing>): MsgUpdateMonoListing {
    const message = { ...baseMsgUpdateMonoListing } as MsgUpdateMonoListing;
    message.price = [];
    message.orderId = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      for (const e of object.orderId) {
        message.orderId.push(e);
      }
    }
    if (
      object.acceptedOrderId !== undefined &&
      object.acceptedOrderId !== null
    ) {
      message.acceptedOrderId = object.acceptedOrderId;
    } else {
      message.acceptedOrderId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgUpdateMonoListingResponse: object = {};

export const MsgUpdateMonoListingResponse = {
  encode(
    _: MsgUpdateMonoListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMonoListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMonoListingResponse,
    } as MsgUpdateMonoListingResponse;
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

  fromJSON(_: any): MsgUpdateMonoListingResponse {
    const message = {
      ...baseMsgUpdateMonoListingResponse,
    } as MsgUpdateMonoListingResponse;
    return message;
  },

  toJSON(_: MsgUpdateMonoListingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMonoListingResponse>
  ): MsgUpdateMonoListingResponse {
    const message = {
      ...baseMsgUpdateMonoListingResponse,
    } as MsgUpdateMonoListingResponse;
    return message;
  },
};

const baseMsgDeleteMonoListing: object = { seller: "", listingId: "" };

export const MsgDeleteMonoListing = {
  encode(
    message: MsgDeleteMonoListing,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.listingId !== "") {
      writer.uint32(18).string(message.listingId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMonoListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMonoListing } as MsgDeleteMonoListing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
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

  fromJSON(object: any): MsgDeleteMonoListing {
    const message = { ...baseMsgDeleteMonoListing } as MsgDeleteMonoListing;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteMonoListing): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.listingId !== undefined && (obj.listingId = message.listingId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMonoListing>): MsgDeleteMonoListing {
    const message = { ...baseMsgDeleteMonoListing } as MsgDeleteMonoListing;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    return message;
  },
};

const baseMsgDeleteMonoListingResponse: object = {};

export const MsgDeleteMonoListingResponse = {
  encode(
    _: MsgDeleteMonoListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteMonoListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMonoListingResponse,
    } as MsgDeleteMonoListingResponse;
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

  fromJSON(_: any): MsgDeleteMonoListingResponse {
    const message = {
      ...baseMsgDeleteMonoListingResponse,
    } as MsgDeleteMonoListingResponse;
    return message;
  },

  toJSON(_: MsgDeleteMonoListingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMonoListingResponse>
  ): MsgDeleteMonoListingResponse {
    const message = {
      ...baseMsgDeleteMonoListingResponse,
    } as MsgDeleteMonoListingResponse;
    return message;
  },
};

const baseMsgCreateMonoOrder: object = {
  buyer: "",
  orderId: "",
  timeout: "",
  status: "",
};

export const MsgCreateMonoOrder = {
  encode(
    message: MsgCreateMonoOrder,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.timeout !== "") {
      writer.uint32(34).string(message.timeout);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMonoOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMonoOrder } as MsgCreateMonoOrder;
    message.price = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        case 3:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.timeout = reader.string();
          break;
        case 5:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMonoOrder {
    const message = { ...baseMsgCreateMonoOrder } as MsgCreateMonoOrder;
    message.price = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = String(object.timeout);
    } else {
      message.timeout = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMonoOrder): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    message.timeout !== undefined && (obj.timeout = message.timeout);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMonoOrder>): MsgCreateMonoOrder {
    const message = { ...baseMsgCreateMonoOrder } as MsgCreateMonoOrder;
    message.price = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = object.timeout;
    } else {
      message.timeout = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgCreateMonoOrderResponse: object = {};

export const MsgCreateMonoOrderResponse = {
  encode(
    _: MsgCreateMonoOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMonoOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMonoOrderResponse,
    } as MsgCreateMonoOrderResponse;
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

  fromJSON(_: any): MsgCreateMonoOrderResponse {
    const message = {
      ...baseMsgCreateMonoOrderResponse,
    } as MsgCreateMonoOrderResponse;
    return message;
  },

  toJSON(_: MsgCreateMonoOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateMonoOrderResponse>
  ): MsgCreateMonoOrderResponse {
    const message = {
      ...baseMsgCreateMonoOrderResponse,
    } as MsgCreateMonoOrderResponse;
    return message;
  },
};

const baseMsgUpdateMonoOrder: object = {
  buyer: "",
  orderId: "",
  timeout: "",
  status: "",
};

export const MsgUpdateMonoOrder = {
  encode(
    message: MsgUpdateMonoOrder,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.timeout !== "") {
      writer.uint32(34).string(message.timeout);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMonoOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMonoOrder } as MsgUpdateMonoOrder;
    message.price = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        case 3:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.timeout = reader.string();
          break;
        case 5:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMonoOrder {
    const message = { ...baseMsgUpdateMonoOrder } as MsgUpdateMonoOrder;
    message.price = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = String(object.timeout);
    } else {
      message.timeout = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateMonoOrder): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    message.timeout !== undefined && (obj.timeout = message.timeout);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMonoOrder>): MsgUpdateMonoOrder {
    const message = { ...baseMsgUpdateMonoOrder } as MsgUpdateMonoOrder;
    message.price = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = object.timeout;
    } else {
      message.timeout = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgUpdateMonoOrderResponse: object = {};

export const MsgUpdateMonoOrderResponse = {
  encode(
    _: MsgUpdateMonoOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMonoOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMonoOrderResponse,
    } as MsgUpdateMonoOrderResponse;
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

  fromJSON(_: any): MsgUpdateMonoOrderResponse {
    const message = {
      ...baseMsgUpdateMonoOrderResponse,
    } as MsgUpdateMonoOrderResponse;
    return message;
  },

  toJSON(_: MsgUpdateMonoOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMonoOrderResponse>
  ): MsgUpdateMonoOrderResponse {
    const message = {
      ...baseMsgUpdateMonoOrderResponse,
    } as MsgUpdateMonoOrderResponse;
    return message;
  },
};

const baseMsgDeleteMonoOrder: object = { buyer: "", orderId: "" };

export const MsgDeleteMonoOrder = {
  encode(
    message: MsgDeleteMonoOrder,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMonoOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMonoOrder } as MsgDeleteMonoOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMonoOrder {
    const message = { ...baseMsgDeleteMonoOrder } as MsgDeleteMonoOrder;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteMonoOrder): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMonoOrder>): MsgDeleteMonoOrder {
    const message = { ...baseMsgDeleteMonoOrder } as MsgDeleteMonoOrder;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    return message;
  },
};

const baseMsgDeleteMonoOrderResponse: object = {};

export const MsgDeleteMonoOrderResponse = {
  encode(
    _: MsgDeleteMonoOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteMonoOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMonoOrderResponse,
    } as MsgDeleteMonoOrderResponse;
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

  fromJSON(_: any): MsgDeleteMonoOrderResponse {
    const message = {
      ...baseMsgDeleteMonoOrderResponse,
    } as MsgDeleteMonoOrderResponse;
    return message;
  },

  toJSON(_: MsgDeleteMonoOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMonoOrderResponse>
  ): MsgDeleteMonoOrderResponse {
    const message = {
      ...baseMsgDeleteMonoOrderResponse,
    } as MsgDeleteMonoOrderResponse;
    return message;
  },
};

const baseMsgOpenMonoListing: object = {
  seller: "",
  whitelistId: "",
  title: "",
  desc: "",
};

export const MsgOpenMonoListing = {
  encode(
    message: MsgOpenMonoListing,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.whitelistId !== "") {
      writer.uint32(18).string(message.whitelistId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOpenMonoListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgOpenMonoListing } as MsgOpenMonoListing;
    message.price = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.whitelistId = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenMonoListing {
    const message = { ...baseMsgOpenMonoListing } as MsgOpenMonoListing;
    message.price = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgOpenMonoListing): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    message.title !== undefined && (obj.title = message.title);
    message.desc !== undefined && (obj.desc = message.desc);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgOpenMonoListing>): MsgOpenMonoListing {
    const message = { ...baseMsgOpenMonoListing } as MsgOpenMonoListing;
    message.price = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgOpenMonoListingResponse: object = { listingId: "" };

export const MsgOpenMonoListingResponse = {
  encode(
    message: MsgOpenMonoListingResponse,
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
  ): MsgOpenMonoListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgOpenMonoListingResponse,
    } as MsgOpenMonoListingResponse;
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

  fromJSON(object: any): MsgOpenMonoListingResponse {
    const message = {
      ...baseMsgOpenMonoListingResponse,
    } as MsgOpenMonoListingResponse;
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    return message;
  },

  toJSON(message: MsgOpenMonoListingResponse): unknown {
    const obj: any = {};
    message.listingId !== undefined && (obj.listingId = message.listingId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgOpenMonoListingResponse>
  ): MsgOpenMonoListingResponse {
    const message = {
      ...baseMsgOpenMonoListingResponse,
    } as MsgOpenMonoListingResponse;
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    return message;
  },
};

const baseMsgCloseListing: object = { seller: "", listingId: "" };

export const MsgCloseListing = {
  encode(message: MsgCloseListing, writer: Writer = Writer.create()): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.listingId !== "") {
      writer.uint32(18).string(message.listingId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCloseListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCloseListing } as MsgCloseListing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
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

  fromJSON(object: any): MsgCloseListing {
    const message = { ...baseMsgCloseListing } as MsgCloseListing;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    return message;
  },

  toJSON(message: MsgCloseListing): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.listingId !== undefined && (obj.listingId = message.listingId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseListing>): MsgCloseListing {
    const message = { ...baseMsgCloseListing } as MsgCloseListing;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    return message;
  },
};

const baseMsgCloseListingResponse: object = { listingId: "", status: "" };

export const MsgCloseListingResponse = {
  encode(
    message: MsgCloseListingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.listingId !== "") {
      writer.uint32(10).string(message.listingId);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCloseListingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCloseListingResponse,
    } as MsgCloseListingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listingId = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseListingResponse {
    const message = {
      ...baseMsgCloseListingResponse,
    } as MsgCloseListingResponse;
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgCloseListingResponse): unknown {
    const obj: any = {};
    message.listingId !== undefined && (obj.listingId = message.listingId);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCloseListingResponse>
  ): MsgCloseListingResponse {
    const message = {
      ...baseMsgCloseListingResponse,
    } as MsgCloseListingResponse;
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgOpenMonoOrder: object = { buyer: "", listingId: "", timeout: "" };

export const MsgOpenMonoOrder = {
  encode(message: MsgOpenMonoOrder, writer: Writer = Writer.create()): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.listingId !== "") {
      writer.uint32(18).string(message.listingId);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.timeout !== "") {
      writer.uint32(34).string(message.timeout);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOpenMonoOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgOpenMonoOrder } as MsgOpenMonoOrder;
    message.price = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.listingId = reader.string();
          break;
        case 3:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.timeout = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenMonoOrder {
    const message = { ...baseMsgOpenMonoOrder } as MsgOpenMonoOrder;
    message.price = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = String(object.listingId);
    } else {
      message.listingId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = String(object.timeout);
    } else {
      message.timeout = "";
    }
    return message;
  },

  toJSON(message: MsgOpenMonoOrder): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.listingId !== undefined && (obj.listingId = message.listingId);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    message.timeout !== undefined && (obj.timeout = message.timeout);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgOpenMonoOrder>): MsgOpenMonoOrder {
    const message = { ...baseMsgOpenMonoOrder } as MsgOpenMonoOrder;
    message.price = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      message.listingId = object.listingId;
    } else {
      message.listingId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = object.timeout;
    } else {
      message.timeout = "";
    }
    return message;
  },
};

const baseMsgOpenMonoOrderResponse: object = { orderId: "" };

export const MsgOpenMonoOrderResponse = {
  encode(
    message: MsgOpenMonoOrderResponse,
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
  ): MsgOpenMonoOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgOpenMonoOrderResponse,
    } as MsgOpenMonoOrderResponse;
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

  fromJSON(object: any): MsgOpenMonoOrderResponse {
    const message = {
      ...baseMsgOpenMonoOrderResponse,
    } as MsgOpenMonoOrderResponse;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    return message;
  },

  toJSON(message: MsgOpenMonoOrderResponse): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgOpenMonoOrderResponse>
  ): MsgOpenMonoOrderResponse {
    const message = {
      ...baseMsgOpenMonoOrderResponse,
    } as MsgOpenMonoOrderResponse;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    return message;
  },
};

const baseMsgCancelPendingMonoOrder: object = { buyer: "", orderId: "" };

export const MsgCancelPendingMonoOrder = {
  encode(
    message: MsgCancelPendingMonoOrder,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelPendingMonoOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelPendingMonoOrder,
    } as MsgCancelPendingMonoOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelPendingMonoOrder {
    const message = {
      ...baseMsgCancelPendingMonoOrder,
    } as MsgCancelPendingMonoOrder;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    return message;
  },

  toJSON(message: MsgCancelPendingMonoOrder): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCancelPendingMonoOrder>
  ): MsgCancelPendingMonoOrder {
    const message = {
      ...baseMsgCancelPendingMonoOrder,
    } as MsgCancelPendingMonoOrder;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    return message;
  },
};

const baseMsgCancelPendingMonoOrderResponse: object = {
  orderId: "",
  status: "",
};

export const MsgCancelPendingMonoOrderResponse = {
  encode(
    message: MsgCancelPendingMonoOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelPendingMonoOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelPendingMonoOrderResponse,
    } as MsgCancelPendingMonoOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelPendingMonoOrderResponse {
    const message = {
      ...baseMsgCancelPendingMonoOrderResponse,
    } as MsgCancelPendingMonoOrderResponse;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgCancelPendingMonoOrderResponse): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCancelPendingMonoOrderResponse>
  ): MsgCancelPendingMonoOrderResponse {
    const message = {
      ...baseMsgCancelPendingMonoOrderResponse,
    } as MsgCancelPendingMonoOrderResponse;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgUpdatePendingMonoOrder: object = {
  buyer: "",
  orderId: "",
  timeeout: "",
};

export const MsgUpdatePendingMonoOrder = {
  encode(
    message: MsgUpdatePendingMonoOrder,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.timeeout !== "") {
      writer.uint32(34).string(message.timeeout);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePendingMonoOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePendingMonoOrder,
    } as MsgUpdatePendingMonoOrder;
    message.price = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        case 3:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.timeeout = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePendingMonoOrder {
    const message = {
      ...baseMsgUpdatePendingMonoOrder,
    } as MsgUpdatePendingMonoOrder;
    message.price = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (object.timeeout !== undefined && object.timeeout !== null) {
      message.timeeout = String(object.timeeout);
    } else {
      message.timeeout = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePendingMonoOrder): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    message.timeeout !== undefined && (obj.timeeout = message.timeeout);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePendingMonoOrder>
  ): MsgUpdatePendingMonoOrder {
    const message = {
      ...baseMsgUpdatePendingMonoOrder,
    } as MsgUpdatePendingMonoOrder;
    message.price = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (object.timeeout !== undefined && object.timeeout !== null) {
      message.timeeout = object.timeeout;
    } else {
      message.timeeout = "";
    }
    return message;
  },
};

const baseMsgUpdatePendingMonoOrderResponse: object = {
  orderId: "",
  status: "",
};

export const MsgUpdatePendingMonoOrderResponse = {
  encode(
    message: MsgUpdatePendingMonoOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePendingMonoOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePendingMonoOrderResponse,
    } as MsgUpdatePendingMonoOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePendingMonoOrderResponse {
    const message = {
      ...baseMsgUpdatePendingMonoOrderResponse,
    } as MsgUpdatePendingMonoOrderResponse;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePendingMonoOrderResponse): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePendingMonoOrderResponse>
  ): MsgUpdatePendingMonoOrderResponse {
    const message = {
      ...baseMsgUpdatePendingMonoOrderResponse,
    } as MsgUpdatePendingMonoOrderResponse;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgAcceptMonoOrder: object = { seller: "", orderId: "" };

export const MsgAcceptMonoOrder = {
  encode(
    message: MsgAcceptMonoOrder,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptMonoOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcceptMonoOrder } as MsgAcceptMonoOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcceptMonoOrder {
    const message = { ...baseMsgAcceptMonoOrder } as MsgAcceptMonoOrder;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = String(object.orderId);
    } else {
      message.orderId = "";
    }
    return message;
  },

  toJSON(message: MsgAcceptMonoOrder): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAcceptMonoOrder>): MsgAcceptMonoOrder {
    const message = { ...baseMsgAcceptMonoOrder } as MsgAcceptMonoOrder;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId;
    } else {
      message.orderId = "";
    }
    return message;
  },
};

const baseMsgAcceptMonoOrderResponse: object = { crowId: "" };

export const MsgAcceptMonoOrderResponse = {
  encode(
    message: MsgAcceptMonoOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAcceptMonoOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAcceptMonoOrderResponse,
    } as MsgAcceptMonoOrderResponse;
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

  fromJSON(object: any): MsgAcceptMonoOrderResponse {
    const message = {
      ...baseMsgAcceptMonoOrderResponse,
    } as MsgAcceptMonoOrderResponse;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    return message;
  },

  toJSON(message: MsgAcceptMonoOrderResponse): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAcceptMonoOrderResponse>
  ): MsgAcceptMonoOrderResponse {
    const message = {
      ...baseMsgAcceptMonoOrderResponse,
    } as MsgAcceptMonoOrderResponse;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateMonoListing(
    request: MsgCreateMonoListing
  ): Promise<MsgCreateMonoListingResponse>;
  UpdateMonoListing(
    request: MsgUpdateMonoListing
  ): Promise<MsgUpdateMonoListingResponse>;
  DeleteMonoListing(
    request: MsgDeleteMonoListing
  ): Promise<MsgDeleteMonoListingResponse>;
  CreateMonoOrder(
    request: MsgCreateMonoOrder
  ): Promise<MsgCreateMonoOrderResponse>;
  UpdateMonoOrder(
    request: MsgUpdateMonoOrder
  ): Promise<MsgUpdateMonoOrderResponse>;
  DeleteMonoOrder(
    request: MsgDeleteMonoOrder
  ): Promise<MsgDeleteMonoOrderResponse>;
  OpenMonoListing(
    request: MsgOpenMonoListing
  ): Promise<MsgOpenMonoListingResponse>;
  CloseListing(request: MsgCloseListing): Promise<MsgCloseListingResponse>;
  OpenMonoOrder(request: MsgOpenMonoOrder): Promise<MsgOpenMonoOrderResponse>;
  CancelPendingMonoOrder(
    request: MsgCancelPendingMonoOrder
  ): Promise<MsgCancelPendingMonoOrderResponse>;
  UpdatePendingMonoOrder(
    request: MsgUpdatePendingMonoOrder
  ): Promise<MsgUpdatePendingMonoOrderResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AcceptMonoOrder(
    request: MsgAcceptMonoOrder
  ): Promise<MsgAcceptMonoOrderResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateMonoListing(
    request: MsgCreateMonoListing
  ): Promise<MsgCreateMonoListingResponse> {
    const data = MsgCreateMonoListing.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "CreateMonoListing",
      data
    );
    return promise.then((data) =>
      MsgCreateMonoListingResponse.decode(new Reader(data))
    );
  }

  UpdateMonoListing(
    request: MsgUpdateMonoListing
  ): Promise<MsgUpdateMonoListingResponse> {
    const data = MsgUpdateMonoListing.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "UpdateMonoListing",
      data
    );
    return promise.then((data) =>
      MsgUpdateMonoListingResponse.decode(new Reader(data))
    );
  }

  DeleteMonoListing(
    request: MsgDeleteMonoListing
  ): Promise<MsgDeleteMonoListingResponse> {
    const data = MsgDeleteMonoListing.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "DeleteMonoListing",
      data
    );
    return promise.then((data) =>
      MsgDeleteMonoListingResponse.decode(new Reader(data))
    );
  }

  CreateMonoOrder(
    request: MsgCreateMonoOrder
  ): Promise<MsgCreateMonoOrderResponse> {
    const data = MsgCreateMonoOrder.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "CreateMonoOrder",
      data
    );
    return promise.then((data) =>
      MsgCreateMonoOrderResponse.decode(new Reader(data))
    );
  }

  UpdateMonoOrder(
    request: MsgUpdateMonoOrder
  ): Promise<MsgUpdateMonoOrderResponse> {
    const data = MsgUpdateMonoOrder.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "UpdateMonoOrder",
      data
    );
    return promise.then((data) =>
      MsgUpdateMonoOrderResponse.decode(new Reader(data))
    );
  }

  DeleteMonoOrder(
    request: MsgDeleteMonoOrder
  ): Promise<MsgDeleteMonoOrderResponse> {
    const data = MsgDeleteMonoOrder.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "DeleteMonoOrder",
      data
    );
    return promise.then((data) =>
      MsgDeleteMonoOrderResponse.decode(new Reader(data))
    );
  }

  OpenMonoListing(
    request: MsgOpenMonoListing
  ): Promise<MsgOpenMonoListingResponse> {
    const data = MsgOpenMonoListing.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "OpenMonoListing",
      data
    );
    return promise.then((data) =>
      MsgOpenMonoListingResponse.decode(new Reader(data))
    );
  }

  CloseListing(request: MsgCloseListing): Promise<MsgCloseListingResponse> {
    const data = MsgCloseListing.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "CloseListing",
      data
    );
    return promise.then((data) =>
      MsgCloseListingResponse.decode(new Reader(data))
    );
  }

  OpenMonoOrder(request: MsgOpenMonoOrder): Promise<MsgOpenMonoOrderResponse> {
    const data = MsgOpenMonoOrder.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "OpenMonoOrder",
      data
    );
    return promise.then((data) =>
      MsgOpenMonoOrderResponse.decode(new Reader(data))
    );
  }

  CancelPendingMonoOrder(
    request: MsgCancelPendingMonoOrder
  ): Promise<MsgCancelPendingMonoOrderResponse> {
    const data = MsgCancelPendingMonoOrder.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "CancelPendingMonoOrder",
      data
    );
    return promise.then((data) =>
      MsgCancelPendingMonoOrderResponse.decode(new Reader(data))
    );
  }

  UpdatePendingMonoOrder(
    request: MsgUpdatePendingMonoOrder
  ): Promise<MsgUpdatePendingMonoOrderResponse> {
    const data = MsgUpdatePendingMonoOrder.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "UpdatePendingMonoOrder",
      data
    );
    return promise.then((data) =>
      MsgUpdatePendingMonoOrderResponse.decode(new Reader(data))
    );
  }

  AcceptMonoOrder(
    request: MsgAcceptMonoOrder
  ): Promise<MsgAcceptMonoOrderResponse> {
    const data = MsgAcceptMonoOrder.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.market.Msg",
      "AcceptMonoOrder",
      data
    );
    return promise.then((data) =>
      MsgAcceptMonoOrderResponse.decode(new Reader(data))
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
