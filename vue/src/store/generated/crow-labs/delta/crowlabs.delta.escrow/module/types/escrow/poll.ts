/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

export interface Poll {
  crowId: string;
  disputeId: string;
  verdictId: string;
  voteIds: string[];
}

const basePoll: object = {
  crowId: "",
  disputeId: "",
  verdictId: "",
  voteIds: "",
};

export const Poll = {
  encode(message: Poll, writer: Writer = Writer.create()): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    if (message.disputeId !== "") {
      writer.uint32(18).string(message.disputeId);
    }
    if (message.verdictId !== "") {
      writer.uint32(26).string(message.verdictId);
    }
    for (const v of message.voteIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Poll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoll } as Poll;
    message.voteIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
          break;
        case 2:
          message.disputeId = reader.string();
          break;
        case 3:
          message.verdictId = reader.string();
          break;
        case 4:
          message.voteIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Poll {
    const message = { ...basePoll } as Poll;
    message.voteIds = [];
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = String(object.verdictId);
    } else {
      message.verdictId = "";
    }
    if (object.voteIds !== undefined && object.voteIds !== null) {
      for (const e of object.voteIds) {
        message.voteIds.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Poll): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.verdictId !== undefined && (obj.verdictId = message.verdictId);
    if (message.voteIds) {
      obj.voteIds = message.voteIds.map((e) => e);
    } else {
      obj.voteIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Poll>): Poll {
    const message = { ...basePoll } as Poll;
    message.voteIds = [];
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = object.verdictId;
    } else {
      message.verdictId = "";
    }
    if (object.voteIds !== undefined && object.voteIds !== null) {
      for (const e of object.voteIds) {
        message.voteIds.push(e);
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
