/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

export interface BuyerCrow {
  crowId: string;
  buyerId: string;
  buyerCrowId: string;
}

const baseBuyerCrow: object = { crowId: "", buyerId: "", buyerCrowId: "" };

export const BuyerCrow = {
  encode(message: BuyerCrow, writer: Writer = Writer.create()): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    if (message.buyerCrowId !== "") {
      writer.uint32(26).string(message.buyerCrowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BuyerCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuyerCrow } as BuyerCrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
          break;
        case 2:
          message.buyerId = reader.string();
          break;
        case 3:
          message.buyerCrowId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuyerCrow {
    const message = { ...baseBuyerCrow } as BuyerCrow;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    if (object.buyerCrowId !== undefined && object.buyerCrowId !== null) {
      message.buyerCrowId = String(object.buyerCrowId);
    } else {
      message.buyerCrowId = "";
    }
    return message;
  },

  toJSON(message: BuyerCrow): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.buyerCrowId !== undefined &&
      (obj.buyerCrowId = message.buyerCrowId);
    return obj;
  },

  fromPartial(object: DeepPartial<BuyerCrow>): BuyerCrow {
    const message = { ...baseBuyerCrow } as BuyerCrow;
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    if (object.buyerCrowId !== undefined && object.buyerCrowId !== null) {
      message.buyerCrowId = object.buyerCrowId;
    } else {
      message.buyerCrowId = "";
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
