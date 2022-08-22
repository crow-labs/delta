/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

export interface MonoCrow {
  crowId: string;
  whitelistId: string;
  sellerCrowId: string;
  buyerCrowId: string;
  disputeId: string[];
  timeout: string[];
  status: string;
  seller: string;
}

const baseMonoCrow: object = {
  crowId: "",
  whitelistId: "",
  sellerCrowId: "",
  buyerCrowId: "",
  disputeId: "",
  timeout: "",
  status: "",
  seller: "",
};

export const MonoCrow = {
  encode(message: MonoCrow, writer: Writer = Writer.create()): Writer {
    if (message.crowId !== "") {
      writer.uint32(10).string(message.crowId);
    }
    if (message.whitelistId !== "") {
      writer.uint32(18).string(message.whitelistId);
    }
    if (message.sellerCrowId !== "") {
      writer.uint32(26).string(message.sellerCrowId);
    }
    if (message.buyerCrowId !== "") {
      writer.uint32(34).string(message.buyerCrowId);
    }
    for (const v of message.disputeId) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.timeout) {
      writer.uint32(50).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    if (message.seller !== "") {
      writer.uint32(66).string(message.seller);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoCrow } as MonoCrow;
    message.disputeId = [];
    message.timeout = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = reader.string();
          break;
        case 2:
          message.whitelistId = reader.string();
          break;
        case 3:
          message.sellerCrowId = reader.string();
          break;
        case 4:
          message.buyerCrowId = reader.string();
          break;
        case 5:
          message.disputeId.push(reader.string());
          break;
        case 6:
          message.timeout.push(reader.string());
          break;
        case 7:
          message.status = reader.string();
          break;
        case 8:
          message.seller = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoCrow {
    const message = { ...baseMonoCrow } as MonoCrow;
    message.disputeId = [];
    message.timeout = [];
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = String(object.whitelistId);
    } else {
      message.whitelistId = "";
    }
    if (object.sellerCrowId !== undefined && object.sellerCrowId !== null) {
      message.sellerCrowId = String(object.sellerCrowId);
    } else {
      message.sellerCrowId = "";
    }
    if (object.buyerCrowId !== undefined && object.buyerCrowId !== null) {
      message.buyerCrowId = String(object.buyerCrowId);
    } else {
      message.buyerCrowId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      for (const e of object.disputeId) {
        message.disputeId.push(String(e));
      }
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      for (const e of object.timeout) {
        message.timeout.push(String(e));
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

  toJSON(message: MonoCrow): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = message.crowId);
    message.whitelistId !== undefined &&
      (obj.whitelistId = message.whitelistId);
    message.sellerCrowId !== undefined &&
      (obj.sellerCrowId = message.sellerCrowId);
    message.buyerCrowId !== undefined &&
      (obj.buyerCrowId = message.buyerCrowId);
    if (message.disputeId) {
      obj.disputeId = message.disputeId.map((e) => e);
    } else {
      obj.disputeId = [];
    }
    if (message.timeout) {
      obj.timeout = message.timeout.map((e) => e);
    } else {
      obj.timeout = [];
    }
    message.status !== undefined && (obj.status = message.status);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoCrow>): MonoCrow {
    const message = { ...baseMonoCrow } as MonoCrow;
    message.disputeId = [];
    message.timeout = [];
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    if (object.whitelistId !== undefined && object.whitelistId !== null) {
      message.whitelistId = object.whitelistId;
    } else {
      message.whitelistId = "";
    }
    if (object.sellerCrowId !== undefined && object.sellerCrowId !== null) {
      message.sellerCrowId = object.sellerCrowId;
    } else {
      message.sellerCrowId = "";
    }
    if (object.buyerCrowId !== undefined && object.buyerCrowId !== null) {
      message.buyerCrowId = object.buyerCrowId;
    } else {
      message.buyerCrowId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      for (const e of object.disputeId) {
        message.disputeId.push(e);
      }
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      for (const e of object.timeout) {
        message.timeout.push(e);
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
