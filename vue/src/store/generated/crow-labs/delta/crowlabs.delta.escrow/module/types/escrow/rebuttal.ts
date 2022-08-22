/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

export interface Rebuttal {
  disputeId: string;
  defendantId: string;
  rebuttalId: string;
}

const baseRebuttal: object = { disputeId: "", defendantId: "", rebuttalId: "" };

export const Rebuttal = {
  encode(message: Rebuttal, writer: Writer = Writer.create()): Writer {
    if (message.disputeId !== "") {
      writer.uint32(10).string(message.disputeId);
    }
    if (message.defendantId !== "") {
      writer.uint32(18).string(message.defendantId);
    }
    if (message.rebuttalId !== "") {
      writer.uint32(26).string(message.rebuttalId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Rebuttal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRebuttal } as Rebuttal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputeId = reader.string();
          break;
        case 2:
          message.defendantId = reader.string();
          break;
        case 3:
          message.rebuttalId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Rebuttal {
    const message = { ...baseRebuttal } as Rebuttal;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.defendantId !== undefined && object.defendantId !== null) {
      message.defendantId = String(object.defendantId);
    } else {
      message.defendantId = "";
    }
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = String(object.rebuttalId);
    } else {
      message.rebuttalId = "";
    }
    return message;
  },

  toJSON(message: Rebuttal): unknown {
    const obj: any = {};
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.defendantId !== undefined &&
      (obj.defendantId = message.defendantId);
    message.rebuttalId !== undefined && (obj.rebuttalId = message.rebuttalId);
    return obj;
  },

  fromPartial(object: DeepPartial<Rebuttal>): Rebuttal {
    const message = { ...baseRebuttal } as Rebuttal;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.defendantId !== undefined && object.defendantId !== null) {
      message.defendantId = object.defendantId;
    } else {
      message.defendantId = "";
    }
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = object.rebuttalId;
    } else {
      message.rebuttalId = "";
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
