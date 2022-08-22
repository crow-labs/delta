/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

export interface MonoDispute {
  disputeId: string;
  title: string;
  desc: string;
  evidence: string;
  plaintiff: string;
}

const baseMonoDispute: object = {
  disputeId: "",
  title: "",
  desc: "",
  evidence: "",
  plaintiff: "",
};

export const MonoDispute = {
  encode(message: MonoDispute, writer: Writer = Writer.create()): Writer {
    if (message.disputeId !== "") {
      writer.uint32(10).string(message.disputeId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.evidence !== "") {
      writer.uint32(34).string(message.evidence);
    }
    if (message.plaintiff !== "") {
      writer.uint32(42).string(message.plaintiff);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoDispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoDispute } as MonoDispute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputeId = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.desc = reader.string();
          break;
        case 4:
          message.evidence = reader.string();
          break;
        case 5:
          message.plaintiff = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoDispute {
    const message = { ...baseMonoDispute } as MonoDispute;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
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
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = String(object.evidence);
    } else {
      message.evidence = "";
    }
    if (object.plaintiff !== undefined && object.plaintiff !== null) {
      message.plaintiff = String(object.plaintiff);
    } else {
      message.plaintiff = "";
    }
    return message;
  },

  toJSON(message: MonoDispute): unknown {
    const obj: any = {};
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.title !== undefined && (obj.title = message.title);
    message.desc !== undefined && (obj.desc = message.desc);
    message.evidence !== undefined && (obj.evidence = message.evidence);
    message.plaintiff !== undefined && (obj.plaintiff = message.plaintiff);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoDispute>): MonoDispute {
    const message = { ...baseMonoDispute } as MonoDispute;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
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
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = object.evidence;
    } else {
      message.evidence = "";
    }
    if (object.plaintiff !== undefined && object.plaintiff !== null) {
      message.plaintiff = object.plaintiff;
    } else {
      message.plaintiff = "";
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
