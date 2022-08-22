/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.whitelist";

export interface Seller {
  sellerId: string;
  name: string;
  desc: string;
  contactInfo: string;
  numListing: number;
  listingId: string[];
  status: string;
  producer: string;
}

const baseSeller: object = {
  sellerId: "",
  name: "",
  desc: "",
  contactInfo: "",
  numListing: 0,
  listingId: "",
  status: "",
  producer: "",
};

export const Seller = {
  encode(message: Seller, writer: Writer = Writer.create()): Writer {
    if (message.sellerId !== "") {
      writer.uint32(10).string(message.sellerId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.contactInfo !== "") {
      writer.uint32(34).string(message.contactInfo);
    }
    if (message.numListing !== 0) {
      writer.uint32(40).uint64(message.numListing);
    }
    for (const v of message.listingId) {
      writer.uint32(50).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    if (message.producer !== "") {
      writer.uint32(66).string(message.producer);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Seller {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSeller } as Seller;
    message.listingId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.desc = reader.string();
          break;
        case 4:
          message.contactInfo = reader.string();
          break;
        case 5:
          message.numListing = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.listingId.push(reader.string());
          break;
        case 7:
          message.status = reader.string();
          break;
        case 8:
          message.producer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Seller {
    const message = { ...baseSeller } as Seller;
    message.listingId = [];
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
    if (object.producer !== undefined && object.producer !== null) {
      message.producer = String(object.producer);
    } else {
      message.producer = "";
    }
    return message;
  },

  toJSON(message: Seller): unknown {
    const obj: any = {};
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
    message.producer !== undefined && (obj.producer = message.producer);
    return obj;
  },

  fromPartial(object: DeepPartial<Seller>): Seller {
    const message = { ...baseSeller } as Seller;
    message.listingId = [];
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
    if (object.producer !== undefined && object.producer !== null) {
      message.producer = object.producer;
    } else {
      message.producer = "";
    }
    return message;
  },
};

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
