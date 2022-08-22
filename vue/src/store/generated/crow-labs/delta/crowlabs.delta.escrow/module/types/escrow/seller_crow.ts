/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

export interface SellerCrow {
  crowId: string;
  sellerId: string;
  sellerCrowId: string;
}

const baseSellerCrow: object = { crowId: "", sellerId: "", sellerCrowId: "" };

export const SellerCrow = {
  encode(message: SellerCrow, writer: Writer = Writer.create()): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    if (message.sellerId !== "") {
      writer.uint32(18).string(message.sellerId);
    }
    if (message.sellerCrowId !== "") {
      writer.uint32(26).string(message.sellerCrowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SellerCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSellerCrow } as SellerCrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
          break;
        case 2:
          message.sellerId = reader.string();
          break;
        case 3:
          message.sellerCrowId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SellerCrow {
    const message = { ...baseSellerCrow } as SellerCrow;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    if (object.sellerCrowId !== undefined && object.sellerCrowId !== null) {
      message.sellerCrowId = String(object.sellerCrowId);
    } else {
      message.sellerCrowId = "";
    }
    return message;
  },

  toJSON(message: SellerCrow): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    message.sellerCrowId !== undefined &&
      (obj.sellerCrowId = message.sellerCrowId);
    return obj;
  },

  fromPartial(object: DeepPartial<SellerCrow>): SellerCrow {
    const message = { ...baseSellerCrow } as SellerCrow;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    if (object.sellerCrowId !== undefined && object.sellerCrowId !== null) {
      message.sellerCrowId = object.sellerCrowId;
    } else {
      message.sellerCrowId = "";
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
