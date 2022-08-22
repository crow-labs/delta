/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.whitelist";

export interface Reviewer {
  accAddr: string;
  voterId: string;
}

const baseReviewer: object = { accAddr: "", voterId: "" };

export const Reviewer = {
  encode(message: Reviewer, writer: Writer = Writer.create()): Writer {
    if (message.accAddr !== "") {
      writer.uint32(10).string(message.accAddr);
    }
    if (message.voterId !== "") {
      writer.uint32(18).string(message.voterId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Reviewer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReviewer } as Reviewer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accAddr = reader.string();
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

  fromJSON(object: any): Reviewer {
    const message = { ...baseReviewer } as Reviewer;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = String(object.accAddr);
    } else {
      message.accAddr = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    return message;
  },

  toJSON(message: Reviewer): unknown {
    const obj: any = {};
    message.accAddr !== undefined && (obj.accAddr = message.accAddr);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    return obj;
  },

  fromPartial(object: DeepPartial<Reviewer>): Reviewer {
    const message = { ...baseReviewer } as Reviewer;
    if (object.accAddr !== undefined && object.accAddr !== null) {
      message.accAddr = object.accAddr;
    } else {
      message.accAddr = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
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
