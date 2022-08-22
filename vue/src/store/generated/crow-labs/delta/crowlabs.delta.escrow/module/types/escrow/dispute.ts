/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

export interface Dispute {
  crowId: string;
  plaintiffId: string;
  disputeId: string;
}

const baseDispute: object = { crowId: "", plaintiffId: "", disputeId: "" };

export const Dispute = {
  encode(message: Dispute, writer: Writer = Writer.create()): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    if (message.plaintiffId !== "") {
      writer.uint32(18).string(message.plaintiffId);
    }
    if (message.disputeId !== "") {
      writer.uint32(26).string(message.disputeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Dispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDispute } as Dispute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
          break;
        case 2:
          message.plaintiffId = reader.string();
          break;
        case 3:
          message.disputeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Dispute {
    const message = { ...baseDispute } as Dispute;
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
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    return message;
  },

  toJSON(message: Dispute): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.plaintiffId !== undefined &&
      (obj.plaintiffId = message.plaintiffId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(object: DeepPartial<Dispute>): Dispute {
    const message = { ...baseDispute } as Dispute;
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
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
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
