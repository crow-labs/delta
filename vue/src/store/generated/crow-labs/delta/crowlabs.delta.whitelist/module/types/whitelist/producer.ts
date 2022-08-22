/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.whitelist";

export interface Producer {
  accAddr: string;
  sellerId: string;
}

const baseProducer: object = { accAddr: "", sellerId: "" };

export const Producer = {
  encode(message: Producer, writer: Writer = Writer.create()): Writer {
    if (message.accAddr !== "") {
      writer.uint32(10).string(message.accAddr);
    }
    if (message.sellerId !== "") {
      writer.uint32(18).string(message.sellerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Producer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProducer } as Producer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accAddr = reader.string();
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

  fromJSON(object: any): Producer {
    const message = { ...baseProducer } as Producer;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = String(object.accAddr);
    } else {
      message.accAddr = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    return message;
  },

  toJSON(message: Producer): unknown {
    const obj: any = {};
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    return obj;
  },

  fromPartial(object: DeepPartial<Producer>): Producer {
    const message = { ...baseProducer } as Producer;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = object.accAddr;
    } else {
      message.accAddr = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
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
