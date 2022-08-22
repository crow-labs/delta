/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

export interface Ballot {
  disputeId: string;
  voterId: string;
  voteId: string;
}

const baseBallot: object = { disputeId: "", voterId: "", voteId: "" };

export const Ballot = {
  encode(message: Ballot, writer: Writer = Writer.create()): Writer {
    if (message.disputeId !== "") {
      writer.uint32(10).string(message.disputeId);
    }
    if (message.voterId !== "") {
      writer.uint32(18).string(message.voterId);
    }
    if (message.voteId !== "") {
      writer.uint32(26).string(message.voteId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Ballot {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBallot } as Ballot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputeId = reader.string();
          break;
        case 2:
          message.voterId = reader.string();
          break;
        case 3:
          message.voteId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ballot {
    const message = { ...baseBallot } as Ballot;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = String(object.voteId);
    } else {
      message.voteId = "";
    }
    return message;
  },

  toJSON(message: Ballot): unknown {
    const obj: any = {};
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.voteId !== undefined && (obj.voteId = message.voteId);
    return obj;
  },

  fromPartial(object: DeepPartial<Ballot>): Ballot {
    const message = { ...baseBallot } as Ballot;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = "";
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
