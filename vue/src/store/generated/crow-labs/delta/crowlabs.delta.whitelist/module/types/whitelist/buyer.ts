/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.whitelist";

export interface Buyer {
  buyerId: string;
  name: string;
  numOrder: number;
  orderId: string[];
  status: string;
  buyer: string;
}

const baseBuyer: object = {
  buyerId: "",
  name: "",
  numOrder: 0,
  orderId: "",
  status: "",
  buyer: "",
};

export const Buyer = {
  encode(message: Buyer, writer: Writer = Writer.create()): Writer {
    if (message.buyerId !== "") {
      writer.uint32(10).string(message.buyerId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.numOrder !== 0) {
      writer.uint32(24).uint64(message.numOrder);
    }
    for (const v of message.orderId) {
      writer.uint32(34).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.buyer !== "") {
      writer.uint32(50).string(message.buyer);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Buyer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuyer } as Buyer;
    message.orderId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.numOrder = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.orderId.push(reader.string());
          break;
        case 5:
          message.status = reader.string();
          break;
        case 6:
          message.buyer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Buyer {
    const message = { ...baseBuyer } as Buyer;
    message.orderId = [];
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    return message;
  },

  toJSON(message: Buyer): unknown {
    const obj: any = {};
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.name !== undefined && (obj.name = message.name);
    message.numOrder !== undefined && (obj.numOrder = message.numOrder);
    if (message.orderId) {
      obj.orderId = message.orderId.map((e) => e);
    } else {
      obj.orderId = [];
    }
    message.status !== undefined && (obj.status = message.status);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<Buyer>): Buyer {
    const message = { ...baseBuyer } as Buyer;
    message.orderId = [];
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
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
