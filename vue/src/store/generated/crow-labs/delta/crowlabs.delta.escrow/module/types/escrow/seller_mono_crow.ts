/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

export interface SellerMonoCrow {
  sellerCrowId: string;
  collateral: Coin[];
  status: string;
  seller: string;
}

const baseSellerMonoCrow: object = { sellerCrowId: "", status: "", seller: "" };

export const SellerMonoCrow = {
  encode(message: SellerMonoCrow, writer: Writer = Writer.create()): Writer {
    if (message.sellerCrowId !== "") {
      writer.uint32(10).string(message.sellerCrowId);
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.seller !== "") {
      writer.uint32(34).string(message.seller);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SellerMonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSellerMonoCrow } as SellerMonoCrow;
    message.collateral = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerCrowId = reader.string();
          break;
        case 2:
          message.collateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = reader.string();
          break;
        case 4:
          message.seller = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SellerMonoCrow {
    const message = { ...baseSellerMonoCrow } as SellerMonoCrow;
    message.collateral = [];
    if (object.sellerCrowId !== undefined && object.sellerCrowId !== null) {
      message.sellerCrowId = String(object.sellerCrowId);
    } else {
      message.sellerCrowId = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      for (const e of object.collateral) {
        message.collateral.push(Coin.fromJSON(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    return message;
  },

  toJSON(message: SellerMonoCrow): unknown {
    const obj: any = {};
    message.sellerCrowId !== undefined &&
      (obj.sellerCrowId = message.sellerCrowId);
    if (message.collateral) {
      obj.collateral = message.collateral.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.collateral = [];
    }
    message.status !== undefined && (obj.status = message.status);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<SellerMonoCrow>): SellerMonoCrow {
    const message = { ...baseSellerMonoCrow } as SellerMonoCrow;
    message.collateral = [];
    if (object.sellerCrowId !== undefined && object.sellerCrowId !== null) {
      message.sellerCrowId = object.sellerCrowId;
    } else {
      message.sellerCrowId = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      for (const e of object.collateral) {
        message.collateral.push(Coin.fromPartial(e));
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
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
