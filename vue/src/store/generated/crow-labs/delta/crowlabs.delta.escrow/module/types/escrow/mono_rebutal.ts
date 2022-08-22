/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

export interface MonoRebutal {
  rebuttalId: string;
  desc: string;
  evidence: string;
  defendant: string;
}

const baseMonoRebutal: object = {
  rebuttalId: "",
  desc: "",
  evidence: "",
  defendant: "",
};

export const MonoRebutal = {
  encode(message: MonoRebutal, writer: Writer = Writer.create()): Writer {
    if (message.rebuttalId !== "") {
      writer.uint32(10).string(message.rebuttalId);
    }
    if (message.desc !== "") {
      writer.uint32(18).string(message.desc);
    }
    if (message.evidence !== "") {
      writer.uint32(26).string(message.evidence);
    }
    if (message.defendant !== "") {
      writer.uint32(34).string(message.defendant);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoRebutal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoRebutal } as MonoRebutal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rebuttalId = reader.string();
          break;
        case 2:
          message.desc = reader.string();
          break;
        case 3:
          message.evidence = reader.string();
          break;
        case 4:
          message.defendant = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoRebutal {
    const message = { ...baseMonoRebutal } as MonoRebutal;
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = String(object.rebuttalId);
    } else {
      message.rebuttalId = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = String(object.evidence);
    } else {
      message.evidence = "";
    }
    if (object.defendant !== undefined && object.defendant !== null) {
      message.defendant = String(object.defendant);
    } else {
      message.defendant = "";
    }
    return message;
  },

  toJSON(message: MonoRebutal): unknown {
    const obj: any = {};
    message.rebuttalId !== undefined && (obj.rebuttalId = message.rebuttalId);
    message.desc !== undefined && (obj.desc = message.desc);
    message.evidence !== undefined && (obj.evidence = message.evidence);
    message.defendant !== undefined && (obj.defendant = message.defendant);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoRebutal>): MonoRebutal {
    const message = { ...baseMonoRebutal } as MonoRebutal;
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = object.rebuttalId;
    } else {
      message.rebuttalId = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = object.evidence;
    } else {
      message.evidence = "";
    }
    if (object.defendant !== undefined && object.defendant !== null) {
      message.defendant = object.defendant;
    } else {
      message.defendant = "";
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
