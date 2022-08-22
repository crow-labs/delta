/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../whitelist/params";
import { User } from "../whitelist/user";
import { Buyer } from "../whitelist/buyer";
import { Producer } from "../whitelist/producer";
import { Seller } from "../whitelist/seller";
import { Reviewer } from "../whitelist/reviewer";
import { Voter } from "../whitelist/voter";
import { Whitelist } from "../whitelist/whitelist";
import { MonoWhitelist } from "../whitelist/mono_whitelist";

export const protobufPackage = "crowlabs.delta.whitelist";

/** GenesisState defines the whitelist module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  userList: User[];
  buyerList: Buyer[];
  producerList: Producer[];
  sellerList: Seller[];
  reviewerList: Reviewer[];
  voterList: Voter[];
  whitelistList: Whitelist[];
  whitelistCount: number;
  /** this line is used by starport scaffolding # genesis/proto/state */
  monoWhitelistList: MonoWhitelist[];
}

const baseGenesisState: object = { whitelistCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.userList) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.buyerList) {
      Buyer.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.producerList) {
      Producer.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sellerList) {
      Seller.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.reviewerList) {
      Reviewer.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.voterList) {
      Voter.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.whitelistList) {
      Whitelist.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.whitelistCount !== 0) {
      writer.uint32(72).uint64(message.whitelistCount);
    }
    for (const v of message.monoWhitelistList) {
      MonoWhitelist.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.userList = [];
    message.buyerList = [];
    message.producerList = [];
    message.sellerList = [];
    message.reviewerList = [];
    message.voterList = [];
    message.whitelistList = [];
    message.monoWhitelistList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.userList.push(User.decode(reader, reader.uint32()));
          break;
        case 3:
          message.buyerList.push(Buyer.decode(reader, reader.uint32()));
          break;
        case 4:
          message.producerList.push(Producer.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sellerList.push(Seller.decode(reader, reader.uint32()));
          break;
        case 6:
          message.reviewerList.push(Reviewer.decode(reader, reader.uint32()));
          break;
        case 7:
          message.voterList.push(Voter.decode(reader, reader.uint32()));
          break;
        case 8:
          message.whitelistList.push(Whitelist.decode(reader, reader.uint32()));
          break;
        case 9:
          message.whitelistCount = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.monoWhitelistList.push(
            MonoWhitelist.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.userList = [];
    message.buyerList = [];
    message.producerList = [];
    message.sellerList = [];
    message.reviewerList = [];
    message.voterList = [];
    message.whitelistList = [];
    message.monoWhitelistList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.userList !== undefined && object.userList !== null) {
      for (const e of object.userList) {
        message.userList.push(User.fromJSON(e));
      }
    }
    if (object.buyerList !== undefined && object.buyerList !== null) {
      for (const e of object.buyerList) {
        message.buyerList.push(Buyer.fromJSON(e));
      }
    }
    if (object.producerList !== undefined && object.producerList !== null) {
      for (const e of object.producerList) {
        message.producerList.push(Producer.fromJSON(e));
      }
    }
    if (object.sellerList !== undefined && object.sellerList !== null) {
      for (const e of object.sellerList) {
        message.sellerList.push(Seller.fromJSON(e));
      }
    }
    if (object.reviewerList !== undefined && object.reviewerList !== null) {
      for (const e of object.reviewerList) {
        message.reviewerList.push(Reviewer.fromJSON(e));
      }
    }
    if (object.voterList !== undefined && object.voterList !== null) {
      for (const e of object.voterList) {
        message.voterList.push(Voter.fromJSON(e));
      }
    }
    if (object.whitelistList !== undefined && object.whitelistList !== null) {
      for (const e of object.whitelistList) {
        message.whitelistList.push(Whitelist.fromJSON(e));
      }
    }
    if (object.whitelistCount !== undefined && object.whitelistCount !== null) {
      message.whitelistCount = Number(object.whitelistCount);
    } else {
      message.whitelistCount = 0;
    }
    if (
      object.monoWhitelistList !== undefined &&
      object.monoWhitelistList !== null
    ) {
      for (const e of object.monoWhitelistList) {
        message.monoWhitelistList.push(MonoWhitelist.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.userList) {
      obj.userList = message.userList.map((e) =>
        e ? User.toJSON(e) : undefined
      );
    } else {
      obj.userList = [];
    }
    if (message.buyerList) {
      obj.buyerList = message.buyerList.map((e) =>
        e ? Buyer.toJSON(e) : undefined
      );
    } else {
      obj.buyerList = [];
    }
    if (message.producerList) {
      obj.producerList = message.producerList.map((e) =>
        e ? Producer.toJSON(e) : undefined
      );
    } else {
      obj.producerList = [];
    }
    if (message.sellerList) {
      obj.sellerList = message.sellerList.map((e) =>
        e ? Seller.toJSON(e) : undefined
      );
    } else {
      obj.sellerList = [];
    }
    if (message.reviewerList) {
      obj.reviewerList = message.reviewerList.map((e) =>
        e ? Reviewer.toJSON(e) : undefined
      );
    } else {
      obj.reviewerList = [];
    }
    if (message.voterList) {
      obj.voterList = message.voterList.map((e) =>
        e ? Voter.toJSON(e) : undefined
      );
    } else {
      obj.voterList = [];
    }
    if (message.whitelistList) {
      obj.whitelistList = message.whitelistList.map((e) =>
        e ? Whitelist.toJSON(e) : undefined
      );
    } else {
      obj.whitelistList = [];
    }
    message.whitelistCount !== undefined &&
      (obj.whitelistCount = message.whitelistCount);
    if (message.monoWhitelistList) {
      obj.monoWhitelistList = message.monoWhitelistList.map((e) =>
        e ? MonoWhitelist.toJSON(e) : undefined
      );
    } else {
      obj.monoWhitelistList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.userList = [];
    message.buyerList = [];
    message.producerList = [];
    message.sellerList = [];
    message.reviewerList = [];
    message.voterList = [];
    message.whitelistList = [];
    message.monoWhitelistList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.userList !== undefined && object.userList !== null) {
      for (const e of object.userList) {
        message.userList.push(User.fromPartial(e));
      }
    }
    if (object.buyerList !== undefined && object.buyerList !== null) {
      for (const e of object.buyerList) {
        message.buyerList.push(Buyer.fromPartial(e));
      }
    }
    if (object.producerList !== undefined && object.producerList !== null) {
      for (const e of object.producerList) {
        message.producerList.push(Producer.fromPartial(e));
      }
    }
    if (object.sellerList !== undefined && object.sellerList !== null) {
      for (const e of object.sellerList) {
        message.sellerList.push(Seller.fromPartial(e));
      }
    }
    if (object.reviewerList !== undefined && object.reviewerList !== null) {
      for (const e of object.reviewerList) {
        message.reviewerList.push(Reviewer.fromPartial(e));
      }
    }
    if (object.voterList !== undefined && object.voterList !== null) {
      for (const e of object.voterList) {
        message.voterList.push(Voter.fromPartial(e));
      }
    }
    if (object.whitelistList !== undefined && object.whitelistList !== null) {
      for (const e of object.whitelistList) {
        message.whitelistList.push(Whitelist.fromPartial(e));
      }
    }
    if (object.whitelistCount !== undefined && object.whitelistCount !== null) {
      message.whitelistCount = object.whitelistCount;
    } else {
      message.whitelistCount = 0;
    }
    if (
      object.monoWhitelistList !== undefined &&
      object.monoWhitelistList !== null
    ) {
      for (const e of object.monoWhitelistList) {
        message.monoWhitelistList.push(MonoWhitelist.fromPartial(e));
      }
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
