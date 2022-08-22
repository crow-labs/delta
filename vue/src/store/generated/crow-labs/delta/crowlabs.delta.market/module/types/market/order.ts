/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.market";

export interface Order {
  listingId: string;
  buyerId: string;
  orderId: string[];
}

const baseOrder: object = { listingId: "", buyerId: "", orderId: "" };

export const Order = {
  encode(message: Order, writer: Writer = Writer.create()): Writer {
    if (message.listingId !== "") {
      writer.uint32(10).string(message.listingId);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    for (const v of message.orderId) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrder } as Order;
    message.orderId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listingId = reader.string();
          break;
        case 2:
          message.buyerId = reader.string();
          break;
        case 3:
          message.orderId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    const message = { ...baseOrder } as Order;
    message.orderId = [];
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
    if (object.orderId !== undefined && object.orderId !== null) {
      for (const e of object.orderId) {
        message.orderId.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.listingId !== undefined && (obj.listingId = message.listingId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    if (message.orderId) {
      obj.orderId = message.orderId.map((e) => e);
    } else {
      obj.orderId = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = { ...baseOrder } as Order;
    message.orderId = [];
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
    if (object.orderId !== undefined && object.orderId !== null) {
      for (const e of object.orderId) {
        message.orderId.push(e);
      }
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
