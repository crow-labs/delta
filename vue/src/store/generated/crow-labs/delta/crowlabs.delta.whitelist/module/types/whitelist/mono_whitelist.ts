/* eslint-disable */
import { Buyer } from "../whitelist/buyer";
import { Seller } from "../whitelist/seller";
import { Voter } from "../whitelist/voter";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.whitelist";

export interface MonoWhitelist {
  whitelistId: string;
  buyer: Buyer | undefined;
  seller: Seller | undefined;
  voter: Voter | undefined;
  governor: string;
}

const baseMonoWhitelist: object = { whitelistId: "", governor: "" };

export const MonoWhitelist = {
  encode(message: MonoWhitelist, writer: Writer = Writer.create()): Writer {
    if (message.whitelistId !== "") {
      writer.uint32(10).string(message.whitelistId);
    }
    if (message.buyer !== undefined) {
      Buyer.encode(message.buyer, writer.uint32(18).fork()).ldelim();
    }
    if (message.seller !== undefined) {
      Seller.encode(message.seller, writer.uint32(26).fork()).ldelim();
    }
    if (message.voter !== undefined) {
      Voter.encode(message.voter, writer.uint32(34).fork()).ldelim();
    }
    if (message.governor !== "") {
      writer.uint32(42).string(message.governor);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoWhitelist {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoWhitelist } as MonoWhitelist;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistId = reader.string();
          break;
        case 2:
          message.buyer = Buyer.decode(reader, reader.uint32());
          break;
        case 3:
          message.seller = Seller.decode(reader, reader.uint32());
          break;
        case 4:
          message.voter = Voter.decode(reader, reader.uint32());
          break;
        case 5:
          message.governor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoWhitelist {
    const message = { ...baseMonoWhitelist } as MonoWhitelist;
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromJSON(object.buyer);
    } else {
      message.buyer = undefined;
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = Seller.fromJSON(object.seller);
    } else {
      message.seller = undefined;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = Voter.fromJSON(object.voter);
    } else {
      message.voter = undefined;
    }
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = String(object.governor);
    } else {
      message.governor = "";
    }
    return message;
  },

  toJSON(message: MonoWhitelist): unknown {
    const obj: any = {};
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    message.buyer !== undefined &&
      (obj.buyer = message.buyer ? Buyer.toJSON(message.buyer) : undefined);
    message.seller !== undefined &&
      (obj.seller = message.seller ? Seller.toJSON(message.seller) : undefined);
    message.voter !== undefined &&
      (obj.voter = message.voter ? Voter.toJSON(message.voter) : undefined);
    message.governor !== undefined && (obj.governor = message.governor);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoWhitelist>): MonoWhitelist {
    const message = { ...baseMonoWhitelist } as MonoWhitelist;
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = Buyer.fromPartial(object.buyer);
    } else {
      message.buyer = undefined;
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = Seller.fromPartial(object.seller);
    } else {
      message.seller = undefined;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = Voter.fromPartial(object.voter);
    } else {
      message.voter = undefined;
    }
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = object.governor;
    } else {
      message.governor = "";
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
