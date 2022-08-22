/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

export interface BuyerMonoCrow {
  buyerCrowId: string;
  deposit: Coin[];
  collateral: Coin[];
  status: string;
  buyer: string;
}

const baseBuyerMonoCrow: object = { buyerCrowId: "", status: "", buyer: "" };

export const BuyerMonoCrow = {
  encode(message: BuyerMonoCrow, writer: Writer = Writer.create()): Writer {
    if (message.buyerCrowId !== "") {
      writer.uint32(10).string(message.buyerCrowId);
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (message.buyer !== "") {
      writer.uint32(42).string(message.buyer);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BuyerMonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuyerMonoCrow } as BuyerMonoCrow;
    message.deposit = [];
    message.collateral = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerCrowId = reader.string();
          break;
        case 2:
          message.deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.collateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.status = reader.string();
          break;
        case 5:
          message.buyer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuyerMonoCrow {
    const message = { ...baseBuyerMonoCrow } as BuyerMonoCrow;
    message.deposit = [];
    message.collateral = [];
    if (object.buyerCrowId !== undefined && object.buyerCrowId !== null) {
      message.buyerCrowId = String(object.buyerCrowId);
    } else {
      message.buyerCrowId = "";
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      for (const e of object.deposit) {
        message.deposit.push(Coin.fromJSON(e));
      }
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    return message;
  },

  toJSON(message: BuyerMonoCrow): unknown {
    const obj: any = {};
    message.buyerCrowId !== undefined &&
      (obj.buyerCrowId = message.buyerCrowId);
    if (message.deposit) {
      obj.deposit = message.deposit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.deposit = [];
    }
    if (message.collateral) {
      obj.collateral = message.collateral.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.collateral = [];
    }
    message.status !== undefined && (obj.status = message.status);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<BuyerMonoCrow>): BuyerMonoCrow {
    const message = { ...baseBuyerMonoCrow } as BuyerMonoCrow;
    message.deposit = [];
    message.collateral = [];
    if (object.buyerCrowId !== undefined && object.buyerCrowId !== null) {
      message.buyerCrowId = object.buyerCrowId;
    } else {
      message.buyerCrowId = "";
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      for (const e of object.deposit) {
        message.deposit.push(Coin.fromPartial(e));
      }
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
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
