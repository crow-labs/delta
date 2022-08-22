/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.market";

export interface MonoListing {
  listingId: string;
  title: string;
  desc: string;
  price: Coin[];
  orderId: string[];
  acceptedOrderId: string;
  status: string;
  seller: string;
}

const baseMonoListing: object = {
  listingId: "",
  title: "",
  desc: "",
  orderId: "",
  acceptedOrderId: "",
  status: "",
  seller: "",
};

export const MonoListing = {
  encode(message: MonoListing, writer: Writer = Writer.create()): Writer {
    if (message.listingId !== "") {
      writer.uint32(10).string(message.listingId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.orderId) {
      writer.uint32(42).string(v!);
    }
    if (message.acceptedOrderId !== "") {
      writer.uint32(50).string(message.acceptedOrderId);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    if (message.seller !== "") {
      writer.uint32(66).string(message.seller);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoListing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoListing } as MonoListing;
    message.price = [];
    message.orderId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listingId = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.desc = reader.string();
          break;
        case 4:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.orderId.push(reader.string());
          break;
        case 6:
          message.acceptedOrderId = reader.string();
          break;
        case 7:
          message.status = reader.string();
          break;
        case 8:
          message.seller = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoListing {
    const message = { ...baseMonoListing } as MonoListing;
    message.price = [];
    message.orderId = [];
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    return message;
  },

  toJSON(message: MonoListing): unknown {
    const obj: any = {};
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
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoListing>): MonoListing {
    const message = { ...baseMonoListing } as MonoListing;
    message.price = [];
    message.orderId = [];
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
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    return message;
  },
};

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
