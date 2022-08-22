/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.market";

export interface MonoOrder {
  orderId: string;
  price: Coin[];
  timeout: string;
  status: string;
  buyer: string;
}

const baseMonoOrder: object = {
  orderId: "",
  timeout: "",
  status: "",
  buyer: "",
};

export const MonoOrder = {
  encode(message: MonoOrder, writer: Writer = Writer.create()): Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.timeout !== "") {
      writer.uint32(26).string(message.timeout);
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (message.buyer !== "") {
      writer.uint32(42).string(message.buyer);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoOrder } as MonoOrder;
    message.price = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timeout = reader.string();
          break;
        case 4:
          message.status = reader.string();
          break;
        case 5:
          message.buyer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoOrder {
    const message = { ...baseMonoOrder } as MonoOrder;
    message.price = [];
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    return message;
  },

  toJSON(message: MonoOrder): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    message.timeout !== undefined && (obj.timeout = message.timeout);
    message.status !== undefined && (obj.status = message.status);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoOrder>): MonoOrder {
    const message = { ...baseMonoOrder } as MonoOrder;
    message.price = [];
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
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
