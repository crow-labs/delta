/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.whitelist";

export interface Voter {
  voterId: string;
  name: string;
  votingPower: number;
  numVotes: number;
  voteId: string[];
  status: string;
  reviewer: string;
}

const baseVoter: object = {
  voterId: "",
  name: "",
  votingPower: 0,
  numVotes: 0,
  voteId: "",
  status: "",
  reviewer: "",
};

export const Voter = {
  encode(message: Voter, writer: Writer = Writer.create()): Writer {
    if (message.voterId !== "") {
      writer.uint32(10).string(message.voterId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.votingPower !== 0) {
      writer.uint32(24).uint64(message.votingPower);
    }
    if (message.numVotes !== 0) {
      writer.uint32(32).uint64(message.numVotes);
    }
    for (const v of message.voteId) {
      writer.uint32(42).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.reviewer !== "") {
      writer.uint32(58).string(message.reviewer);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Voter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoter } as Voter;
    message.voteId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voterId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.votingPower = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.numVotes = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.voteId.push(reader.string());
          break;
        case 6:
          message.status = reader.string();
          break;
        case 7:
          message.reviewer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Voter {
    const message = { ...baseVoter } as Voter;
    message.voteId = [];
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = Number(object.votingPower);
    } else {
      message.votingPower = 0;
    }
    if (object.numVotes !== undefined && object.numVotes !== null) {
      message.numVotes = Number(object.numVotes);
    } else {
      message.numVotes = 0;
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      for (const e of object.voteId) {
        message.voteId.push(String(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = String(object.reviewer);
    } else {
      message.reviewer = "";
    }
    return message;
  },

  toJSON(message: Voter): unknown {
    const obj: any = {};
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.name !== undefined && (obj.name = message.name);
    message.votingPower !== undefined &&
      (obj.votingPower = message.votingPower);
    message.numVotes !== undefined && (obj.numVotes = message.numVotes);
    if (message.voteId) {
      obj.voteId = message.voteId.map((e) => e);
    } else {
      obj.voteId = [];
    }
    message.status !== undefined && (obj.status = message.status);
    message.reviewer !== undefined && (obj.reviewer = message.reviewer);
    return obj;
  },

  fromPartial(object: DeepPartial<Voter>): Voter {
    const message = { ...baseVoter } as Voter;
    message.voteId = [];
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = object.votingPower;
    } else {
      message.votingPower = 0;
    }
    if (object.numVotes !== undefined && object.numVotes !== null) {
      message.numVotes = object.numVotes;
    } else {
      message.numVotes = 0;
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      for (const e of object.voteId) {
        message.voteId.push(e);
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = object.reviewer;
    } else {
      message.reviewer = "";
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
