/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.market";

export interface Listing {
  whitelistId: string;
  sellerId: string;
  listingId: string[];
}

const baseListing: object = { whitelistId: "", sellerId: "", listingId: "" };

export const Listing = {
  encode(message: Listing, writer: Writer = Writer.create()): Writer {
    if (message.whitelistId !== "") {
      writer.uint32(10).string(message.whitelistId);
    }
    if (message.sellerId !== "") {
      writer.uint32(18).string(message.sellerId);
    }
    for (const v of message.listingId) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Listing {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListing } as Listing;
    message.listingId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistId = reader.string();
          break;
        case 2:
          message.sellerId = reader.string();
          break;
        case 3:
          message.listingId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Listing {
    const message = { ...baseListing } as Listing;
    message.listingId = [];
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      for (const e of object.listingId) {
        message.listingId.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Listing): unknown {
    const obj: any = {};
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    if (message.listingId) {
      obj.listingId = message.listingId.map((e) => e);
    } else {
      obj.listingId = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Listing>): Listing {
    const message = { ...baseListing } as Listing;
    message.listingId = [];
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    if (object.listingId !== undefined && object.listingId !== null) {
      for (const e of object.listingId) {
        message.listingId.push(e);
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
