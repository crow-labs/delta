/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Vote } from "../escrow/vote";

export const protobufPackage = "crowlabs.delta.escrow";

export interface MsgCreateBuyerMonoCrow {
  buyer: string;
  buyerCrowId: string;
  deposit: Coin[];
  collateral: Coin[];
  status: string;
}

export interface MsgCreateBuyerMonoCrowResponse {}

export interface MsgUpdateBuyerMonoCrow {
  buyer: string;
  buyerCrowId: string;
  deposit: Coin[];
  collateral: Coin[];
  status: string;
}

export interface MsgUpdateBuyerMonoCrowResponse {}

export interface MsgDeleteBuyerMonoCrow {
  buyer: string;
  buyerCrowId: string;
}

export interface MsgDeleteBuyerMonoCrowResponse {}

export interface MsgCreateSellerMonoCrow {
  seller: string;
  sellerCrowId: string;
  collateral: Coin[];
  status: string;
}

export interface MsgCreateSellerMonoCrowResponse {}

export interface MsgUpdateSellerMonoCrow {
  seller: string;
  sellerCrowId: string;
  collateral: Coin[];
  status: string;
}

export interface MsgUpdateSellerMonoCrowResponse {}

export interface MsgDeleteSellerMonoCrow {
  seller: string;
  sellerCrowId: string;
}

export interface MsgDeleteSellerMonoCrowResponse {}

export interface MsgCreateMonoCrow {
  seller: string;
  crowId: string;
  whitelistId: string;
  sellerCrowId: string;
  buyerCrowId: string;
  disputeId: string[];
  timeout: string[];
  status: string;
}

export interface MsgCreateMonoCrowResponse {}

export interface MsgUpdateMonoCrow {
  seller: string;
  crowId: string;
  whitelistId: string;
  sellerCrowId: string;
  buyerCrowId: string;
  disputeId: string[];
  timeout: string[];
  status: string;
}

export interface MsgUpdateMonoCrowResponse {}

export interface MsgDeleteMonoCrow {
  seller: string;
  crowId: string;
}

export interface MsgDeleteMonoCrowResponse {}

export interface MsgCreateMonoDispute {
  plaintiff: string;
  disputeId: string;
  title: string;
  desc: string;
  evidence: string;
}

export interface MsgCreateMonoDisputeResponse {}

export interface MsgUpdateMonoDispute {
  plaintiff: string;
  disputeId: string;
  title: string;
  desc: string;
  evidence: string;
}

export interface MsgUpdateMonoDisputeResponse {}

export interface MsgDeleteMonoDispute {
  plaintiff: string;
  disputeId: string;
}

export interface MsgDeleteMonoDisputeResponse {}

export interface MsgCreateMonoRebutal {
  defendant: string;
  rebuttalId: string;
  desc: string;
  evidence: string;
}

export interface MsgCreateMonoRebutalResponse {}

export interface MsgUpdateMonoRebutal {
  defendant: string;
  rebuttalId: string;
  desc: string;
  evidence: string;
}

export interface MsgUpdateMonoRebutalResponse {}

export interface MsgDeleteMonoRebutal {
  defendant: string;
  rebuttalId: string;
}

export interface MsgDeleteMonoRebutalResponse {}

export interface MsgCreateVote {
  voter: string;
  voteId: string;
  buyerGuilty: boolean;
  sellerGuilty: boolean;
  refundToBuyer: Coin[];
  sendToSeller: Coin[];
  buyerPunishment: string;
  sellerPunishment: string;
}

export interface MsgCreateVoteResponse {}

export interface MsgUpdateVote {
  voter: string;
  voteId: string;
  buyerGuilty: boolean;
  sellerGuilty: boolean;
  refundToBuyer: Coin[];
  sendToSeller: Coin[];
  buyerPunishment: string;
  sellerPunishment: string;
}

export interface MsgUpdateVoteResponse {}

export interface MsgDeleteVote {
  voter: string;
  voteId: string;
}

export interface MsgDeleteVoteResponse {}

export interface MsgCreateVerdict {
  creator: string;
  verdictId: string;
  voteIds: string[];
  resultingVote: Vote | undefined;
}

export interface MsgCreateVerdictResponse {}

export interface MsgUpdateVerdict {
  creator: string;
  verdictId: string;
  voteIds: string[];
  resultingVote: Vote | undefined;
}

export interface MsgUpdateVerdictResponse {}

export interface MsgDeleteVerdict {
  creator: string;
  verdictId: string;
}

export interface MsgDeleteVerdictResponse {}

const baseMsgCreateBuyerMonoCrow: object = {
  buyer: "",
  buyerCrowId: "",
  status: "",
};

export const MsgCreateBuyerMonoCrow = {
  encode(
    message: MsgCreateBuyerMonoCrow,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.buyerCrowId !== "") {
      writer.uint32(18).string(message.buyerCrowId);
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBuyerMonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBuyerMonoCrow } as MsgCreateBuyerMonoCrow;
    message.deposit = [];
    message.collateral = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.buyerCrowId = reader.string();
          break;
        case 3:
          message.deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.collateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBuyerMonoCrow {
    const message = { ...baseMsgCreateBuyerMonoCrow } as MsgCreateBuyerMonoCrow;
    message.deposit = [];
    message.collateral = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateBuyerMonoCrow): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateBuyerMonoCrow>
  ): MsgCreateBuyerMonoCrow {
    const message = { ...baseMsgCreateBuyerMonoCrow } as MsgCreateBuyerMonoCrow;
    message.deposit = [];
    message.collateral = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
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
    return message;
  },
};

const baseMsgCreateBuyerMonoCrowResponse: object = {};

export const MsgCreateBuyerMonoCrowResponse = {
  encode(
    _: MsgCreateBuyerMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateBuyerMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateBuyerMonoCrowResponse,
    } as MsgCreateBuyerMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateBuyerMonoCrowResponse {
    const message = {
      ...baseMsgCreateBuyerMonoCrowResponse,
    } as MsgCreateBuyerMonoCrowResponse;
    return message;
  },

  toJSON(_: MsgCreateBuyerMonoCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateBuyerMonoCrowResponse>
  ): MsgCreateBuyerMonoCrowResponse {
    const message = {
      ...baseMsgCreateBuyerMonoCrowResponse,
    } as MsgCreateBuyerMonoCrowResponse;
    return message;
  },
};

const baseMsgUpdateBuyerMonoCrow: object = {
  buyer: "",
  buyerCrowId: "",
  status: "",
};

export const MsgUpdateBuyerMonoCrow = {
  encode(
    message: MsgUpdateBuyerMonoCrow,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.buyerCrowId !== "") {
      writer.uint32(18).string(message.buyerCrowId);
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBuyerMonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBuyerMonoCrow } as MsgUpdateBuyerMonoCrow;
    message.deposit = [];
    message.collateral = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.buyerCrowId = reader.string();
          break;
        case 3:
          message.deposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.collateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBuyerMonoCrow {
    const message = { ...baseMsgUpdateBuyerMonoCrow } as MsgUpdateBuyerMonoCrow;
    message.deposit = [];
    message.collateral = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateBuyerMonoCrow): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateBuyerMonoCrow>
  ): MsgUpdateBuyerMonoCrow {
    const message = { ...baseMsgUpdateBuyerMonoCrow } as MsgUpdateBuyerMonoCrow;
    message.deposit = [];
    message.collateral = [];
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
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
    return message;
  },
};

const baseMsgUpdateBuyerMonoCrowResponse: object = {};

export const MsgUpdateBuyerMonoCrowResponse = {
  encode(
    _: MsgUpdateBuyerMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateBuyerMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBuyerMonoCrowResponse,
    } as MsgUpdateBuyerMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateBuyerMonoCrowResponse {
    const message = {
      ...baseMsgUpdateBuyerMonoCrowResponse,
    } as MsgUpdateBuyerMonoCrowResponse;
    return message;
  },

  toJSON(_: MsgUpdateBuyerMonoCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateBuyerMonoCrowResponse>
  ): MsgUpdateBuyerMonoCrowResponse {
    const message = {
      ...baseMsgUpdateBuyerMonoCrowResponse,
    } as MsgUpdateBuyerMonoCrowResponse;
    return message;
  },
};

const baseMsgDeleteBuyerMonoCrow: object = { buyer: "", buyerCrowId: "" };

export const MsgDeleteBuyerMonoCrow = {
  encode(
    message: MsgDeleteBuyerMonoCrow,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.buyer !== "") {
      writer.uint32(10).string(message.buyer);
    }
    if (message.buyerCrowId !== "") {
      writer.uint32(18).string(message.buyerCrowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBuyerMonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBuyerMonoCrow } as MsgDeleteBuyerMonoCrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string();
          break;
        case 2:
          message.buyerCrowId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBuyerMonoCrow {
    const message = { ...baseMsgDeleteBuyerMonoCrow } as MsgDeleteBuyerMonoCrow;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.buyerCrowId !== undefined && object.buyerCrowId !== null) {
      message.buyerCrowId = String(object.buyerCrowId);
    } else {
      message.buyerCrowId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteBuyerMonoCrow): unknown {
    const obj: any = {};
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.buyerCrowId !== undefined &&
      (obj.buyerCrowId = message.buyerCrowId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteBuyerMonoCrow>
  ): MsgDeleteBuyerMonoCrow {
    const message = { ...baseMsgDeleteBuyerMonoCrow } as MsgDeleteBuyerMonoCrow;
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.buyerCrowId !== undefined && object.buyerCrowId !== null) {
      message.buyerCrowId = object.buyerCrowId;
    } else {
      message.buyerCrowId = "";
    }
    return message;
  },
};

const baseMsgDeleteBuyerMonoCrowResponse: object = {};

export const MsgDeleteBuyerMonoCrowResponse = {
  encode(
    _: MsgDeleteBuyerMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteBuyerMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteBuyerMonoCrowResponse,
    } as MsgDeleteBuyerMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteBuyerMonoCrowResponse {
    const message = {
      ...baseMsgDeleteBuyerMonoCrowResponse,
    } as MsgDeleteBuyerMonoCrowResponse;
    return message;
  },

  toJSON(_: MsgDeleteBuyerMonoCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteBuyerMonoCrowResponse>
  ): MsgDeleteBuyerMonoCrowResponse {
    const message = {
      ...baseMsgDeleteBuyerMonoCrowResponse,
    } as MsgDeleteBuyerMonoCrowResponse;
    return message;
  },
};

const baseMsgCreateSellerMonoCrow: object = {
  seller: "",
  sellerCrowId: "",
  status: "",
};

export const MsgCreateSellerMonoCrow = {
  encode(
    message: MsgCreateSellerMonoCrow,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.sellerCrowId !== "") {
      writer.uint32(18).string(message.sellerCrowId);
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSellerMonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSellerMonoCrow,
    } as MsgCreateSellerMonoCrow;
    message.collateral = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.sellerCrowId = reader.string();
          break;
        case 3:
          message.collateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSellerMonoCrow {
    const message = {
      ...baseMsgCreateSellerMonoCrow,
    } as MsgCreateSellerMonoCrow;
    message.collateral = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateSellerMonoCrow): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSellerMonoCrow>
  ): MsgCreateSellerMonoCrow {
    const message = {
      ...baseMsgCreateSellerMonoCrow,
    } as MsgCreateSellerMonoCrow;
    message.collateral = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
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
    return message;
  },
};

const baseMsgCreateSellerMonoCrowResponse: object = {};

export const MsgCreateSellerMonoCrowResponse = {
  encode(
    _: MsgCreateSellerMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSellerMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSellerMonoCrowResponse,
    } as MsgCreateSellerMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateSellerMonoCrowResponse {
    const message = {
      ...baseMsgCreateSellerMonoCrowResponse,
    } as MsgCreateSellerMonoCrowResponse;
    return message;
  },

  toJSON(_: MsgCreateSellerMonoCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateSellerMonoCrowResponse>
  ): MsgCreateSellerMonoCrowResponse {
    const message = {
      ...baseMsgCreateSellerMonoCrowResponse,
    } as MsgCreateSellerMonoCrowResponse;
    return message;
  },
};

const baseMsgUpdateSellerMonoCrow: object = {
  seller: "",
  sellerCrowId: "",
  status: "",
};

export const MsgUpdateSellerMonoCrow = {
  encode(
    message: MsgUpdateSellerMonoCrow,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.sellerCrowId !== "") {
      writer.uint32(18).string(message.sellerCrowId);
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSellerMonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSellerMonoCrow,
    } as MsgUpdateSellerMonoCrow;
    message.collateral = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.sellerCrowId = reader.string();
          break;
        case 3:
          message.collateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSellerMonoCrow {
    const message = {
      ...baseMsgUpdateSellerMonoCrow,
    } as MsgUpdateSellerMonoCrow;
    message.collateral = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateSellerMonoCrow): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
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
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateSellerMonoCrow>
  ): MsgUpdateSellerMonoCrow {
    const message = {
      ...baseMsgUpdateSellerMonoCrow,
    } as MsgUpdateSellerMonoCrow;
    message.collateral = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
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
    return message;
  },
};

const baseMsgUpdateSellerMonoCrowResponse: object = {};

export const MsgUpdateSellerMonoCrowResponse = {
  encode(
    _: MsgUpdateSellerMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateSellerMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSellerMonoCrowResponse,
    } as MsgUpdateSellerMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateSellerMonoCrowResponse {
    const message = {
      ...baseMsgUpdateSellerMonoCrowResponse,
    } as MsgUpdateSellerMonoCrowResponse;
    return message;
  },

  toJSON(_: MsgUpdateSellerMonoCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateSellerMonoCrowResponse>
  ): MsgUpdateSellerMonoCrowResponse {
    const message = {
      ...baseMsgUpdateSellerMonoCrowResponse,
    } as MsgUpdateSellerMonoCrowResponse;
    return message;
  },
};

const baseMsgDeleteSellerMonoCrow: object = { seller: "", sellerCrowId: "" };

export const MsgDeleteSellerMonoCrow = {
  encode(
    message: MsgDeleteSellerMonoCrow,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.sellerCrowId !== "") {
      writer.uint32(18).string(message.sellerCrowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSellerMonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSellerMonoCrow,
    } as MsgDeleteSellerMonoCrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.sellerCrowId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSellerMonoCrow {
    const message = {
      ...baseMsgDeleteSellerMonoCrow,
    } as MsgDeleteSellerMonoCrow;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.sellerCrowId !== undefined && object.sellerCrowId !== null) {
      message.sellerCrowId = String(object.sellerCrowId);
    } else {
      message.sellerCrowId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteSellerMonoCrow): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.sellerCrowId !== undefined &&
      (obj.sellerCrowId = message.sellerCrowId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteSellerMonoCrow>
  ): MsgDeleteSellerMonoCrow {
    const message = {
      ...baseMsgDeleteSellerMonoCrow,
    } as MsgDeleteSellerMonoCrow;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.sellerCrowId !== undefined && object.sellerCrowId !== null) {
      message.sellerCrowId = object.sellerCrowId;
    } else {
      message.sellerCrowId = "";
    }
    return message;
  },
};

const baseMsgDeleteSellerMonoCrowResponse: object = {};

export const MsgDeleteSellerMonoCrowResponse = {
  encode(
    _: MsgDeleteSellerMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteSellerMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSellerMonoCrowResponse,
    } as MsgDeleteSellerMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteSellerMonoCrowResponse {
    const message = {
      ...baseMsgDeleteSellerMonoCrowResponse,
    } as MsgDeleteSellerMonoCrowResponse;
    return message;
  },

  toJSON(_: MsgDeleteSellerMonoCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteSellerMonoCrowResponse>
  ): MsgDeleteSellerMonoCrowResponse {
    const message = {
      ...baseMsgDeleteSellerMonoCrowResponse,
    } as MsgDeleteSellerMonoCrowResponse;
    return message;
  },
};

const baseMsgCreateMonoCrow: object = {
  seller: "",
  crowId: "",
  whitelistId: "",
  sellerCrowId: "",
  buyerCrowId: "",
  disputeId: "",
  timeout: "",
  status: "",
};

export const MsgCreateMonoCrow = {
  encode(message: MsgCreateMonoCrow, writer: Writer = Writer.create()): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.crowId !== "") {
      writer.uint32(18).string(message.crowId);
    }
    if (message.whitelistId !== "") {
      writer.uint32(26).string(message.whitelistId);
    }
    if (message.sellerCrowId !== "") {
      writer.uint32(34).string(message.sellerCrowId);
    }
    if (message.buyerCrowId !== "") {
      writer.uint32(42).string(message.buyerCrowId);
    }
    for (const v of message.disputeId) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.timeout) {
      writer.uint32(58).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMonoCrow } as MsgCreateMonoCrow;
    message.disputeId = [];
    message.timeout = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.crowId = reader.string();
          break;
        case 3:
          message.whitelistId = reader.string();
          break;
        case 4:
          message.sellerCrowId = reader.string();
          break;
        case 5:
          message.buyerCrowId = reader.string();
          break;
        case 6:
          message.disputeId.push(reader.string());
          break;
        case 7:
          message.timeout.push(reader.string());
          break;
        case 8:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMonoCrow {
    const message = { ...baseMsgCreateMonoCrow } as MsgCreateMonoCrow;
    message.disputeId = [];
    message.timeout = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateMonoCrow): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
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
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMonoCrow>): MsgCreateMonoCrow {
    const message = { ...baseMsgCreateMonoCrow } as MsgCreateMonoCrow;
    message.disputeId = [];
    message.timeout = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
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
    return message;
  },
};

const baseMsgCreateMonoCrowResponse: object = {};

export const MsgCreateMonoCrowResponse = {
  encode(
    _: MsgCreateMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMonoCrowResponse,
    } as MsgCreateMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateMonoCrowResponse {
    const message = {
      ...baseMsgCreateMonoCrowResponse,
    } as MsgCreateMonoCrowResponse;
    return message;
  },

  toJSON(_: MsgCreateMonoCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateMonoCrowResponse>
  ): MsgCreateMonoCrowResponse {
    const message = {
      ...baseMsgCreateMonoCrowResponse,
    } as MsgCreateMonoCrowResponse;
    return message;
  },
};

const baseMsgUpdateMonoCrow: object = {
  seller: "",
  crowId: "",
  whitelistId: "",
  sellerCrowId: "",
  buyerCrowId: "",
  disputeId: "",
  timeout: "",
  status: "",
};

export const MsgUpdateMonoCrow = {
  encode(message: MsgUpdateMonoCrow, writer: Writer = Writer.create()): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.crowId !== "") {
      writer.uint32(18).string(message.crowId);
    }
    if (message.whitelistId !== "") {
      writer.uint32(26).string(message.whitelistId);
    }
    if (message.sellerCrowId !== "") {
      writer.uint32(34).string(message.sellerCrowId);
    }
    if (message.buyerCrowId !== "") {
      writer.uint32(42).string(message.buyerCrowId);
    }
    for (const v of message.disputeId) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.timeout) {
      writer.uint32(58).string(v!);
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMonoCrow } as MsgUpdateMonoCrow;
    message.disputeId = [];
    message.timeout = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.crowId = reader.string();
          break;
        case 3:
          message.whitelistId = reader.string();
          break;
        case 4:
          message.sellerCrowId = reader.string();
          break;
        case 5:
          message.buyerCrowId = reader.string();
          break;
        case 6:
          message.disputeId.push(reader.string());
          break;
        case 7:
          message.timeout.push(reader.string());
          break;
        case 8:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMonoCrow {
    const message = { ...baseMsgUpdateMonoCrow } as MsgUpdateMonoCrow;
    message.disputeId = [];
    message.timeout = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateMonoCrow): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
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
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMonoCrow>): MsgUpdateMonoCrow {
    const message = { ...baseMsgUpdateMonoCrow } as MsgUpdateMonoCrow;
    message.disputeId = [];
    message.timeout = [];
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
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
    return message;
  },
};

const baseMsgUpdateMonoCrowResponse: object = {};

export const MsgUpdateMonoCrowResponse = {
  encode(
    _: MsgUpdateMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMonoCrowResponse,
    } as MsgUpdateMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMonoCrowResponse {
    const message = {
      ...baseMsgUpdateMonoCrowResponse,
    } as MsgUpdateMonoCrowResponse;
    return message;
  },

  toJSON(_: MsgUpdateMonoCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMonoCrowResponse>
  ): MsgUpdateMonoCrowResponse {
    const message = {
      ...baseMsgUpdateMonoCrowResponse,
    } as MsgUpdateMonoCrowResponse;
    return message;
  },
};

const baseMsgDeleteMonoCrow: object = { seller: "", crowId: "" };

export const MsgDeleteMonoCrow = {
  encode(message: MsgDeleteMonoCrow, writer: Writer = Writer.create()): Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.crowId !== "") {
      writer.uint32(18).string(message.crowId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMonoCrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMonoCrow } as MsgDeleteMonoCrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
          break;
        case 2:
          message.crowId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMonoCrow {
    const message = { ...baseMsgDeleteMonoCrow } as MsgDeleteMonoCrow;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = String(object.crowId);
    } else {
      message.crowId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteMonoCrow): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.crowId !== undefined && (obj.crowId = message.crowId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMonoCrow>): MsgDeleteMonoCrow {
    const message = { ...baseMsgDeleteMonoCrow } as MsgDeleteMonoCrow;
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.crowId !== undefined && object.crowId !== null) {
      message.crowId = object.crowId;
    } else {
      message.crowId = "";
    }
    return message;
  },
};

const baseMsgDeleteMonoCrowResponse: object = {};

export const MsgDeleteMonoCrowResponse = {
  encode(
    _: MsgDeleteMonoCrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteMonoCrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMonoCrowResponse,
    } as MsgDeleteMonoCrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteMonoCrowResponse {
    const message = {
      ...baseMsgDeleteMonoCrowResponse,
    } as MsgDeleteMonoCrowResponse;
    return message;
  },

  toJSON(_: MsgDeleteMonoCrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMonoCrowResponse>
  ): MsgDeleteMonoCrowResponse {
    const message = {
      ...baseMsgDeleteMonoCrowResponse,
    } as MsgDeleteMonoCrowResponse;
    return message;
  },
};

const baseMsgCreateMonoDispute: object = {
  plaintiff: "",
  disputeId: "",
  title: "",
  desc: "",
  evidence: "",
};

export const MsgCreateMonoDispute = {
  encode(
    message: MsgCreateMonoDispute,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.plaintiff !== "") {
      writer.uint32(10).string(message.plaintiff);
    }
    if (message.disputeId !== "") {
      writer.uint32(18).string(message.disputeId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    if (message.evidence !== "") {
      writer.uint32(42).string(message.evidence);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMonoDispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMonoDispute } as MsgCreateMonoDispute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plaintiff = reader.string();
          break;
        case 2:
          message.disputeId = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.evidence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMonoDispute {
    const message = { ...baseMsgCreateMonoDispute } as MsgCreateMonoDispute;
    if (object.plaintiff !== undefined && object.plaintiff !== null) {
      message.plaintiff = String(object.plaintiff);
    } else {
      message.plaintiff = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = String(object.evidence);
    } else {
      message.evidence = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMonoDispute): unknown {
    const obj: any = {};
    message.plaintiff !== undefined && (obj.plaintiff = message.plaintiff);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.title !== undefined && (obj.title = message.title);
    message.desc !== undefined && (obj.desc = message.desc);
    message.evidence !== undefined && (obj.evidence = message.evidence);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMonoDispute>): MsgCreateMonoDispute {
    const message = { ...baseMsgCreateMonoDispute } as MsgCreateMonoDispute;
    if (object.plaintiff !== undefined && object.plaintiff !== null) {
      message.plaintiff = object.plaintiff;
    } else {
      message.plaintiff = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = object.evidence;
    } else {
      message.evidence = "";
    }
    return message;
  },
};

const baseMsgCreateMonoDisputeResponse: object = {};

export const MsgCreateMonoDisputeResponse = {
  encode(
    _: MsgCreateMonoDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMonoDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMonoDisputeResponse,
    } as MsgCreateMonoDisputeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateMonoDisputeResponse {
    const message = {
      ...baseMsgCreateMonoDisputeResponse,
    } as MsgCreateMonoDisputeResponse;
    return message;
  },

  toJSON(_: MsgCreateMonoDisputeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateMonoDisputeResponse>
  ): MsgCreateMonoDisputeResponse {
    const message = {
      ...baseMsgCreateMonoDisputeResponse,
    } as MsgCreateMonoDisputeResponse;
    return message;
  },
};

const baseMsgUpdateMonoDispute: object = {
  plaintiff: "",
  disputeId: "",
  title: "",
  desc: "",
  evidence: "",
};

export const MsgUpdateMonoDispute = {
  encode(
    message: MsgUpdateMonoDispute,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.plaintiff !== "") {
      writer.uint32(10).string(message.plaintiff);
    }
    if (message.disputeId !== "") {
      writer.uint32(18).string(message.disputeId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    if (message.evidence !== "") {
      writer.uint32(42).string(message.evidence);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMonoDispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMonoDispute } as MsgUpdateMonoDispute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plaintiff = reader.string();
          break;
        case 2:
          message.disputeId = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.evidence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMonoDispute {
    const message = { ...baseMsgUpdateMonoDispute } as MsgUpdateMonoDispute;
    if (object.plaintiff !== undefined && object.plaintiff !== null) {
      message.plaintiff = String(object.plaintiff);
    } else {
      message.plaintiff = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = String(object.evidence);
    } else {
      message.evidence = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateMonoDispute): unknown {
    const obj: any = {};
    message.plaintiff !== undefined && (obj.plaintiff = message.plaintiff);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.title !== undefined && (obj.title = message.title);
    message.desc !== undefined && (obj.desc = message.desc);
    message.evidence !== undefined && (obj.evidence = message.evidence);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMonoDispute>): MsgUpdateMonoDispute {
    const message = { ...baseMsgUpdateMonoDispute } as MsgUpdateMonoDispute;
    if (object.plaintiff !== undefined && object.plaintiff !== null) {
      message.plaintiff = object.plaintiff;
    } else {
      message.plaintiff = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = object.evidence;
    } else {
      message.evidence = "";
    }
    return message;
  },
};

const baseMsgUpdateMonoDisputeResponse: object = {};

export const MsgUpdateMonoDisputeResponse = {
  encode(
    _: MsgUpdateMonoDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMonoDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMonoDisputeResponse,
    } as MsgUpdateMonoDisputeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMonoDisputeResponse {
    const message = {
      ...baseMsgUpdateMonoDisputeResponse,
    } as MsgUpdateMonoDisputeResponse;
    return message;
  },

  toJSON(_: MsgUpdateMonoDisputeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMonoDisputeResponse>
  ): MsgUpdateMonoDisputeResponse {
    const message = {
      ...baseMsgUpdateMonoDisputeResponse,
    } as MsgUpdateMonoDisputeResponse;
    return message;
  },
};

const baseMsgDeleteMonoDispute: object = { plaintiff: "", disputeId: "" };

export const MsgDeleteMonoDispute = {
  encode(
    message: MsgDeleteMonoDispute,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.plaintiff !== "") {
      writer.uint32(10).string(message.plaintiff);
    }
    if (message.disputeId !== "") {
      writer.uint32(18).string(message.disputeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMonoDispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMonoDispute } as MsgDeleteMonoDispute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plaintiff = reader.string();
          break;
        case 2:
          message.disputeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMonoDispute {
    const message = { ...baseMsgDeleteMonoDispute } as MsgDeleteMonoDispute;
    if (object.plaintiff !== undefined && object.plaintiff !== null) {
      message.plaintiff = String(object.plaintiff);
    } else {
      message.plaintiff = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteMonoDispute): unknown {
    const obj: any = {};
    message.plaintiff !== undefined && (obj.plaintiff = message.plaintiff);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMonoDispute>): MsgDeleteMonoDispute {
    const message = { ...baseMsgDeleteMonoDispute } as MsgDeleteMonoDispute;
    if (object.plaintiff !== undefined && object.plaintiff !== null) {
      message.plaintiff = object.plaintiff;
    } else {
      message.plaintiff = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    return message;
  },
};

const baseMsgDeleteMonoDisputeResponse: object = {};

export const MsgDeleteMonoDisputeResponse = {
  encode(
    _: MsgDeleteMonoDisputeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteMonoDisputeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMonoDisputeResponse,
    } as MsgDeleteMonoDisputeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteMonoDisputeResponse {
    const message = {
      ...baseMsgDeleteMonoDisputeResponse,
    } as MsgDeleteMonoDisputeResponse;
    return message;
  },

  toJSON(_: MsgDeleteMonoDisputeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMonoDisputeResponse>
  ): MsgDeleteMonoDisputeResponse {
    const message = {
      ...baseMsgDeleteMonoDisputeResponse,
    } as MsgDeleteMonoDisputeResponse;
    return message;
  },
};

const baseMsgCreateMonoRebutal: object = {
  defendant: "",
  rebuttalId: "",
  desc: "",
  evidence: "",
};

export const MsgCreateMonoRebutal = {
  encode(
    message: MsgCreateMonoRebutal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.defendant !== "") {
      writer.uint32(10).string(message.defendant);
    }
    if (message.rebuttalId !== "") {
      writer.uint32(18).string(message.rebuttalId);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.evidence !== "") {
      writer.uint32(34).string(message.evidence);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMonoRebutal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMonoRebutal } as MsgCreateMonoRebutal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defendant = reader.string();
          break;
        case 2:
          message.rebuttalId = reader.string();
          break;
        case 3:
          message.desc = reader.string();
          break;
        case 4:
          message.evidence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMonoRebutal {
    const message = { ...baseMsgCreateMonoRebutal } as MsgCreateMonoRebutal;
    if (object.defendant !== undefined && object.defendant !== null) {
      message.defendant = String(object.defendant);
    } else {
      message.defendant = "";
    }
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = String(object.rebuttalId);
    } else {
      message.rebuttalId = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = String(object.evidence);
    } else {
      message.evidence = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMonoRebutal): unknown {
    const obj: any = {};
    message.defendant !== undefined && (obj.defendant = message.defendant);
    message.rebuttalId !== undefined && (obj.rebuttalId = message.rebuttalId);
    message.desc !== undefined && (obj.desc = message.desc);
    message.evidence !== undefined && (obj.evidence = message.evidence);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMonoRebutal>): MsgCreateMonoRebutal {
    const message = { ...baseMsgCreateMonoRebutal } as MsgCreateMonoRebutal;
    if (object.defendant !== undefined && object.defendant !== null) {
      message.defendant = object.defendant;
    } else {
      message.defendant = "";
    }
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = object.rebuttalId;
    } else {
      message.rebuttalId = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = object.evidence;
    } else {
      message.evidence = "";
    }
    return message;
  },
};

const baseMsgCreateMonoRebutalResponse: object = {};

export const MsgCreateMonoRebutalResponse = {
  encode(
    _: MsgCreateMonoRebutalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMonoRebutalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMonoRebutalResponse,
    } as MsgCreateMonoRebutalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateMonoRebutalResponse {
    const message = {
      ...baseMsgCreateMonoRebutalResponse,
    } as MsgCreateMonoRebutalResponse;
    return message;
  },

  toJSON(_: MsgCreateMonoRebutalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateMonoRebutalResponse>
  ): MsgCreateMonoRebutalResponse {
    const message = {
      ...baseMsgCreateMonoRebutalResponse,
    } as MsgCreateMonoRebutalResponse;
    return message;
  },
};

const baseMsgUpdateMonoRebutal: object = {
  defendant: "",
  rebuttalId: "",
  desc: "",
  evidence: "",
};

export const MsgUpdateMonoRebutal = {
  encode(
    message: MsgUpdateMonoRebutal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.defendant !== "") {
      writer.uint32(10).string(message.defendant);
    }
    if (message.rebuttalId !== "") {
      writer.uint32(18).string(message.rebuttalId);
    }
    if (message.desc !== "") {
      writer.uint32(26).string(message.desc);
    }
    if (message.evidence !== "") {
      writer.uint32(34).string(message.evidence);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMonoRebutal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMonoRebutal } as MsgUpdateMonoRebutal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defendant = reader.string();
          break;
        case 2:
          message.rebuttalId = reader.string();
          break;
        case 3:
          message.desc = reader.string();
          break;
        case 4:
          message.evidence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMonoRebutal {
    const message = { ...baseMsgUpdateMonoRebutal } as MsgUpdateMonoRebutal;
    if (object.defendant !== undefined && object.defendant !== null) {
      message.defendant = String(object.defendant);
    } else {
      message.defendant = "";
    }
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = String(object.rebuttalId);
    } else {
      message.rebuttalId = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = String(object.desc);
    } else {
      message.desc = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = String(object.evidence);
    } else {
      message.evidence = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateMonoRebutal): unknown {
    const obj: any = {};
    message.defendant !== undefined && (obj.defendant = message.defendant);
    message.rebuttalId !== undefined && (obj.rebuttalId = message.rebuttalId);
    message.desc !== undefined && (obj.desc = message.desc);
    message.evidence !== undefined && (obj.evidence = message.evidence);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMonoRebutal>): MsgUpdateMonoRebutal {
    const message = { ...baseMsgUpdateMonoRebutal } as MsgUpdateMonoRebutal;
    if (object.defendant !== undefined && object.defendant !== null) {
      message.defendant = object.defendant;
    } else {
      message.defendant = "";
    }
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = object.rebuttalId;
    } else {
      message.rebuttalId = "";
    }
    if (object.desc !== undefined && object.desc !== null) {
      message.desc = object.desc;
    } else {
      message.desc = "";
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = object.evidence;
    } else {
      message.evidence = "";
    }
    return message;
  },
};

const baseMsgUpdateMonoRebutalResponse: object = {};

export const MsgUpdateMonoRebutalResponse = {
  encode(
    _: MsgUpdateMonoRebutalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMonoRebutalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMonoRebutalResponse,
    } as MsgUpdateMonoRebutalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMonoRebutalResponse {
    const message = {
      ...baseMsgUpdateMonoRebutalResponse,
    } as MsgUpdateMonoRebutalResponse;
    return message;
  },

  toJSON(_: MsgUpdateMonoRebutalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMonoRebutalResponse>
  ): MsgUpdateMonoRebutalResponse {
    const message = {
      ...baseMsgUpdateMonoRebutalResponse,
    } as MsgUpdateMonoRebutalResponse;
    return message;
  },
};

const baseMsgDeleteMonoRebutal: object = { defendant: "", rebuttalId: "" };

export const MsgDeleteMonoRebutal = {
  encode(
    message: MsgDeleteMonoRebutal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.defendant !== "") {
      writer.uint32(10).string(message.defendant);
    }
    if (message.rebuttalId !== "") {
      writer.uint32(18).string(message.rebuttalId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMonoRebutal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMonoRebutal } as MsgDeleteMonoRebutal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defendant = reader.string();
          break;
        case 2:
          message.rebuttalId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMonoRebutal {
    const message = { ...baseMsgDeleteMonoRebutal } as MsgDeleteMonoRebutal;
    if (object.defendant !== undefined && object.defendant !== null) {
      message.defendant = String(object.defendant);
    } else {
      message.defendant = "";
    }
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = String(object.rebuttalId);
    } else {
      message.rebuttalId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteMonoRebutal): unknown {
    const obj: any = {};
    message.defendant !== undefined && (obj.defendant = message.defendant);
    message.rebuttalId !== undefined && (obj.rebuttalId = message.rebuttalId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMonoRebutal>): MsgDeleteMonoRebutal {
    const message = { ...baseMsgDeleteMonoRebutal } as MsgDeleteMonoRebutal;
    if (object.defendant !== undefined && object.defendant !== null) {
      message.defendant = object.defendant;
    } else {
      message.defendant = "";
    }
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = object.rebuttalId;
    } else {
      message.rebuttalId = "";
    }
    return message;
  },
};

const baseMsgDeleteMonoRebutalResponse: object = {};

export const MsgDeleteMonoRebutalResponse = {
  encode(
    _: MsgDeleteMonoRebutalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteMonoRebutalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMonoRebutalResponse,
    } as MsgDeleteMonoRebutalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteMonoRebutalResponse {
    const message = {
      ...baseMsgDeleteMonoRebutalResponse,
    } as MsgDeleteMonoRebutalResponse;
    return message;
  },

  toJSON(_: MsgDeleteMonoRebutalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMonoRebutalResponse>
  ): MsgDeleteMonoRebutalResponse {
    const message = {
      ...baseMsgDeleteMonoRebutalResponse,
    } as MsgDeleteMonoRebutalResponse;
    return message;
  },
};

const baseMsgCreateVote: object = {
  voter: "",
  voteId: "",
  buyerGuilty: false,
  sellerGuilty: false,
  buyerPunishment: "",
  sellerPunishment: "",
};

export const MsgCreateVote = {
  encode(message: MsgCreateVote, writer: Writer = Writer.create()): Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.voteId !== "") {
      writer.uint32(18).string(message.voteId);
    }
    if (message.buyerGuilty === true) {
      writer.uint32(24).bool(message.buyerGuilty);
    }
    if (message.sellerGuilty === true) {
      writer.uint32(32).bool(message.sellerGuilty);
    }
    for (const v of message.refundToBuyer) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.sendToSeller) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.buyerPunishment !== "") {
      writer.uint32(58).string(message.buyerPunishment);
    }
    if (message.sellerPunishment !== "") {
      writer.uint32(66).string(message.sellerPunishment);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.voteId = reader.string();
          break;
        case 3:
          message.buyerGuilty = reader.bool();
          break;
        case 4:
          message.sellerGuilty = reader.bool();
          break;
        case 5:
          message.refundToBuyer.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.sendToSeller.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.buyerPunishment = reader.string();
          break;
        case 8:
          message.sellerPunishment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVote {
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = String(object.voteId);
    } else {
      message.voteId = "";
    }
    if (object.buyerGuilty !== undefined && object.buyerGuilty !== null) {
      message.buyerGuilty = Boolean(object.buyerGuilty);
    } else {
      message.buyerGuilty = false;
    }
    if (object.sellerGuilty !== undefined && object.sellerGuilty !== null) {
      message.sellerGuilty = Boolean(object.sellerGuilty);
    } else {
      message.sellerGuilty = false;
    }
    if (object.refundToBuyer !== undefined && object.refundToBuyer !== null) {
      for (const e of object.refundToBuyer) {
        message.refundToBuyer.push(Coin.fromJSON(e));
      }
    }
    if (object.sendToSeller !== undefined && object.sendToSeller !== null) {
      for (const e of object.sendToSeller) {
        message.sendToSeller.push(Coin.fromJSON(e));
      }
    }
    if (
      object.buyerPunishment !== undefined &&
      object.buyerPunishment !== null
    ) {
      message.buyerPunishment = String(object.buyerPunishment);
    } else {
      message.buyerPunishment = "";
    }
    if (
      object.sellerPunishment !== undefined &&
      object.sellerPunishment !== null
    ) {
      message.sellerPunishment = String(object.sellerPunishment);
    } else {
      message.sellerPunishment = "";
    }
    return message;
  },

  toJSON(message: MsgCreateVote): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.voteId !== undefined && (obj.voteId = message.voteId);
    message.buyerGuilty !== undefined &&
      (obj.buyerGuilty = message.buyerGuilty);
    message.sellerGuilty !== undefined &&
      (obj.sellerGuilty = message.sellerGuilty);
    if (message.refundToBuyer) {
      obj.refundToBuyer = message.refundToBuyer.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.refundToBuyer = [];
    }
    if (message.sendToSeller) {
      obj.sendToSeller = message.sendToSeller.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.sendToSeller = [];
    }
    message.buyerPunishment !== undefined &&
      (obj.buyerPunishment = message.buyerPunishment);
    message.sellerPunishment !== undefined &&
      (obj.sellerPunishment = message.sellerPunishment);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateVote>): MsgCreateVote {
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = "";
    }
    if (object.buyerGuilty !== undefined && object.buyerGuilty !== null) {
      message.buyerGuilty = object.buyerGuilty;
    } else {
      message.buyerGuilty = false;
    }
    if (object.sellerGuilty !== undefined && object.sellerGuilty !== null) {
      message.sellerGuilty = object.sellerGuilty;
    } else {
      message.sellerGuilty = false;
    }
    if (object.refundToBuyer !== undefined && object.refundToBuyer !== null) {
      for (const e of object.refundToBuyer) {
        message.refundToBuyer.push(Coin.fromPartial(e));
      }
    }
    if (object.sendToSeller !== undefined && object.sendToSeller !== null) {
      for (const e of object.sendToSeller) {
        message.sendToSeller.push(Coin.fromPartial(e));
      }
    }
    if (
      object.buyerPunishment !== undefined &&
      object.buyerPunishment !== null
    ) {
      message.buyerPunishment = object.buyerPunishment;
    } else {
      message.buyerPunishment = "";
    }
    if (
      object.sellerPunishment !== undefined &&
      object.sellerPunishment !== null
    ) {
      message.sellerPunishment = object.sellerPunishment;
    } else {
      message.sellerPunishment = "";
    }
    return message;
  },
};

const baseMsgCreateVoteResponse: object = {};

export const MsgCreateVoteResponse = {
  encode(_: MsgCreateVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateVoteResponse {
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    return message;
  },

  toJSON(_: MsgCreateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateVoteResponse>): MsgCreateVoteResponse {
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    return message;
  },
};

const baseMsgUpdateVote: object = {
  voter: "",
  voteId: "",
  buyerGuilty: false,
  sellerGuilty: false,
  buyerPunishment: "",
  sellerPunishment: "",
};

export const MsgUpdateVote = {
  encode(message: MsgUpdateVote, writer: Writer = Writer.create()): Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.voteId !== "") {
      writer.uint32(18).string(message.voteId);
    }
    if (message.buyerGuilty === true) {
      writer.uint32(24).bool(message.buyerGuilty);
    }
    if (message.sellerGuilty === true) {
      writer.uint32(32).bool(message.sellerGuilty);
    }
    for (const v of message.refundToBuyer) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.sendToSeller) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.buyerPunishment !== "") {
      writer.uint32(58).string(message.buyerPunishment);
    }
    if (message.sellerPunishment !== "") {
      writer.uint32(66).string(message.sellerPunishment);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateVote } as MsgUpdateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.voteId = reader.string();
          break;
        case 3:
          message.buyerGuilty = reader.bool();
          break;
        case 4:
          message.sellerGuilty = reader.bool();
          break;
        case 5:
          message.refundToBuyer.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.sendToSeller.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.buyerPunishment = reader.string();
          break;
        case 8:
          message.sellerPunishment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateVote {
    const message = { ...baseMsgUpdateVote } as MsgUpdateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = String(object.voteId);
    } else {
      message.voteId = "";
    }
    if (object.buyerGuilty !== undefined && object.buyerGuilty !== null) {
      message.buyerGuilty = Boolean(object.buyerGuilty);
    } else {
      message.buyerGuilty = false;
    }
    if (object.sellerGuilty !== undefined && object.sellerGuilty !== null) {
      message.sellerGuilty = Boolean(object.sellerGuilty);
    } else {
      message.sellerGuilty = false;
    }
    if (object.refundToBuyer !== undefined && object.refundToBuyer !== null) {
      for (const e of object.refundToBuyer) {
        message.refundToBuyer.push(Coin.fromJSON(e));
      }
    }
    if (object.sendToSeller !== undefined && object.sendToSeller !== null) {
      for (const e of object.sendToSeller) {
        message.sendToSeller.push(Coin.fromJSON(e));
      }
    }
    if (
      object.buyerPunishment !== undefined &&
      object.buyerPunishment !== null
    ) {
      message.buyerPunishment = String(object.buyerPunishment);
    } else {
      message.buyerPunishment = "";
    }
    if (
      object.sellerPunishment !== undefined &&
      object.sellerPunishment !== null
    ) {
      message.sellerPunishment = String(object.sellerPunishment);
    } else {
      message.sellerPunishment = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateVote): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.voteId !== undefined && (obj.voteId = message.voteId);
    message.buyerGuilty !== undefined &&
      (obj.buyerGuilty = message.buyerGuilty);
    message.sellerGuilty !== undefined &&
      (obj.sellerGuilty = message.sellerGuilty);
    if (message.refundToBuyer) {
      obj.refundToBuyer = message.refundToBuyer.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.refundToBuyer = [];
    }
    if (message.sendToSeller) {
      obj.sendToSeller = message.sendToSeller.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.sendToSeller = [];
    }
    message.buyerPunishment !== undefined &&
      (obj.buyerPunishment = message.buyerPunishment);
    message.sellerPunishment !== undefined &&
      (obj.sellerPunishment = message.sellerPunishment);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateVote>): MsgUpdateVote {
    const message = { ...baseMsgUpdateVote } as MsgUpdateVote;
    message.refundToBuyer = [];
    message.sendToSeller = [];
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = "";
    }
    if (object.buyerGuilty !== undefined && object.buyerGuilty !== null) {
      message.buyerGuilty = object.buyerGuilty;
    } else {
      message.buyerGuilty = false;
    }
    if (object.sellerGuilty !== undefined && object.sellerGuilty !== null) {
      message.sellerGuilty = object.sellerGuilty;
    } else {
      message.sellerGuilty = false;
    }
    if (object.refundToBuyer !== undefined && object.refundToBuyer !== null) {
      for (const e of object.refundToBuyer) {
        message.refundToBuyer.push(Coin.fromPartial(e));
      }
    }
    if (object.sendToSeller !== undefined && object.sendToSeller !== null) {
      for (const e of object.sendToSeller) {
        message.sendToSeller.push(Coin.fromPartial(e));
      }
    }
    if (
      object.buyerPunishment !== undefined &&
      object.buyerPunishment !== null
    ) {
      message.buyerPunishment = object.buyerPunishment;
    } else {
      message.buyerPunishment = "";
    }
    if (
      object.sellerPunishment !== undefined &&
      object.sellerPunishment !== null
    ) {
      message.sellerPunishment = object.sellerPunishment;
    } else {
      message.sellerPunishment = "";
    }
    return message;
  },
};

const baseMsgUpdateVoteResponse: object = {};

export const MsgUpdateVoteResponse = {
  encode(_: MsgUpdateVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateVoteResponse } as MsgUpdateVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateVoteResponse {
    const message = { ...baseMsgUpdateVoteResponse } as MsgUpdateVoteResponse;
    return message;
  },

  toJSON(_: MsgUpdateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateVoteResponse>): MsgUpdateVoteResponse {
    const message = { ...baseMsgUpdateVoteResponse } as MsgUpdateVoteResponse;
    return message;
  },
};

const baseMsgDeleteVote: object = { voter: "", voteId: "" };

export const MsgDeleteVote = {
  encode(message: MsgDeleteVote, writer: Writer = Writer.create()): Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.voteId !== "") {
      writer.uint32(18).string(message.voteId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteVote } as MsgDeleteVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.voteId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteVote {
    const message = { ...baseMsgDeleteVote } as MsgDeleteVote;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = String(object.voteId);
    } else {
      message.voteId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteVote): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.voteId !== undefined && (obj.voteId = message.voteId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteVote>): MsgDeleteVote {
    const message = { ...baseMsgDeleteVote } as MsgDeleteVote;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = "";
    }
    return message;
  },
};

const baseMsgDeleteVoteResponse: object = {};

export const MsgDeleteVoteResponse = {
  encode(_: MsgDeleteVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteVoteResponse } as MsgDeleteVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteVoteResponse {
    const message = { ...baseMsgDeleteVoteResponse } as MsgDeleteVoteResponse;
    return message;
  },

  toJSON(_: MsgDeleteVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteVoteResponse>): MsgDeleteVoteResponse {
    const message = { ...baseMsgDeleteVoteResponse } as MsgDeleteVoteResponse;
    return message;
  },
};

const baseMsgCreateVerdict: object = {
  creator: "",
  verdictId: "",
  voteIds: "",
};

export const MsgCreateVerdict = {
  encode(message: MsgCreateVerdict, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.verdictId !== "") {
      writer.uint32(18).string(message.verdictId);
    }
    for (const v of message.voteIds) {
      writer.uint32(26).string(v!);
    }
    if (message.resultingVote !== undefined) {
      Vote.encode(message.resultingVote, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVerdict {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVerdict } as MsgCreateVerdict;
    message.voteIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.verdictId = reader.string();
          break;
        case 3:
          message.voteIds.push(reader.string());
          break;
        case 4:
          message.resultingVote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVerdict {
    const message = { ...baseMsgCreateVerdict } as MsgCreateVerdict;
    message.voteIds = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = String(object.verdictId);
    } else {
      message.verdictId = "";
    }
    if (object.voteIds !== undefined && object.voteIds !== null) {
      for (const e of object.voteIds) {
        message.voteIds.push(String(e));
      }
    }
    if (object.resultingVote !== undefined && object.resultingVote !== null) {
      message.resultingVote = Vote.fromJSON(object.resultingVote);
    } else {
      message.resultingVote = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateVerdict): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.verdictId !== undefined && (obj.verdictId = message.verdictId);
    if (message.voteIds) {
      obj.voteIds = message.voteIds.map((e) => e);
    } else {
      obj.voteIds = [];
    }
    message.resultingVote !== undefined &&
      (obj.resultingVote = message.resultingVote
        ? Vote.toJSON(message.resultingVote)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateVerdict>): MsgCreateVerdict {
    const message = { ...baseMsgCreateVerdict } as MsgCreateVerdict;
    message.voteIds = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = object.verdictId;
    } else {
      message.verdictId = "";
    }
    if (object.voteIds !== undefined && object.voteIds !== null) {
      for (const e of object.voteIds) {
        message.voteIds.push(e);
      }
    }
    if (object.resultingVote !== undefined && object.resultingVote !== null) {
      message.resultingVote = Vote.fromPartial(object.resultingVote);
    } else {
      message.resultingVote = undefined;
    }
    return message;
  },
};

const baseMsgCreateVerdictResponse: object = {};

export const MsgCreateVerdictResponse = {
  encode(
    _: MsgCreateVerdictResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateVerdictResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateVerdictResponse,
    } as MsgCreateVerdictResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateVerdictResponse {
    const message = {
      ...baseMsgCreateVerdictResponse,
    } as MsgCreateVerdictResponse;
    return message;
  },

  toJSON(_: MsgCreateVerdictResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateVerdictResponse>
  ): MsgCreateVerdictResponse {
    const message = {
      ...baseMsgCreateVerdictResponse,
    } as MsgCreateVerdictResponse;
    return message;
  },
};

const baseMsgUpdateVerdict: object = {
  creator: "",
  verdictId: "",
  voteIds: "",
};

export const MsgUpdateVerdict = {
  encode(message: MsgUpdateVerdict, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.verdictId !== "") {
      writer.uint32(18).string(message.verdictId);
    }
    for (const v of message.voteIds) {
      writer.uint32(26).string(v!);
    }
    if (message.resultingVote !== undefined) {
      Vote.encode(message.resultingVote, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateVerdict {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateVerdict } as MsgUpdateVerdict;
    message.voteIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.verdictId = reader.string();
          break;
        case 3:
          message.voteIds.push(reader.string());
          break;
        case 4:
          message.resultingVote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateVerdict {
    const message = { ...baseMsgUpdateVerdict } as MsgUpdateVerdict;
    message.voteIds = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = String(object.verdictId);
    } else {
      message.verdictId = "";
    }
    if (object.voteIds !== undefined && object.voteIds !== null) {
      for (const e of object.voteIds) {
        message.voteIds.push(String(e));
      }
    }
    if (object.resultingVote !== undefined && object.resultingVote !== null) {
      message.resultingVote = Vote.fromJSON(object.resultingVote);
    } else {
      message.resultingVote = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateVerdict): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.verdictId !== undefined && (obj.verdictId = message.verdictId);
    if (message.voteIds) {
      obj.voteIds = message.voteIds.map((e) => e);
    } else {
      obj.voteIds = [];
    }
    message.resultingVote !== undefined &&
      (obj.resultingVote = message.resultingVote
        ? Vote.toJSON(message.resultingVote)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateVerdict>): MsgUpdateVerdict {
    const message = { ...baseMsgUpdateVerdict } as MsgUpdateVerdict;
    message.voteIds = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = object.verdictId;
    } else {
      message.verdictId = "";
    }
    if (object.voteIds !== undefined && object.voteIds !== null) {
      for (const e of object.voteIds) {
        message.voteIds.push(e);
      }
    }
    if (object.resultingVote !== undefined && object.resultingVote !== null) {
      message.resultingVote = Vote.fromPartial(object.resultingVote);
    } else {
      message.resultingVote = undefined;
    }
    return message;
  },
};

const baseMsgUpdateVerdictResponse: object = {};

export const MsgUpdateVerdictResponse = {
  encode(
    _: MsgUpdateVerdictResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateVerdictResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateVerdictResponse,
    } as MsgUpdateVerdictResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateVerdictResponse {
    const message = {
      ...baseMsgUpdateVerdictResponse,
    } as MsgUpdateVerdictResponse;
    return message;
  },

  toJSON(_: MsgUpdateVerdictResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateVerdictResponse>
  ): MsgUpdateVerdictResponse {
    const message = {
      ...baseMsgUpdateVerdictResponse,
    } as MsgUpdateVerdictResponse;
    return message;
  },
};

const baseMsgDeleteVerdict: object = { creator: "", verdictId: "" };

export const MsgDeleteVerdict = {
  encode(message: MsgDeleteVerdict, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.verdictId !== "") {
      writer.uint32(18).string(message.verdictId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteVerdict {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteVerdict } as MsgDeleteVerdict;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.verdictId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteVerdict {
    const message = { ...baseMsgDeleteVerdict } as MsgDeleteVerdict;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = String(object.verdictId);
    } else {
      message.verdictId = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteVerdict): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.verdictId !== undefined && (obj.verdictId = message.verdictId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteVerdict>): MsgDeleteVerdict {
    const message = { ...baseMsgDeleteVerdict } as MsgDeleteVerdict;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.verdictId !== undefined && object.verdictId !== null) {
      message.verdictId = object.verdictId;
    } else {
      message.verdictId = "";
    }
    return message;
  },
};

const baseMsgDeleteVerdictResponse: object = {};

export const MsgDeleteVerdictResponse = {
  encode(
    _: MsgDeleteVerdictResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteVerdictResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteVerdictResponse,
    } as MsgDeleteVerdictResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteVerdictResponse {
    const message = {
      ...baseMsgDeleteVerdictResponse,
    } as MsgDeleteVerdictResponse;
    return message;
  },

  toJSON(_: MsgDeleteVerdictResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteVerdictResponse>
  ): MsgDeleteVerdictResponse {
    const message = {
      ...baseMsgDeleteVerdictResponse,
    } as MsgDeleteVerdictResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateBuyerMonoCrow(
    request: MsgCreateBuyerMonoCrow
  ): Promise<MsgCreateBuyerMonoCrowResponse>;
  UpdateBuyerMonoCrow(
    request: MsgUpdateBuyerMonoCrow
  ): Promise<MsgUpdateBuyerMonoCrowResponse>;
  DeleteBuyerMonoCrow(
    request: MsgDeleteBuyerMonoCrow
  ): Promise<MsgDeleteBuyerMonoCrowResponse>;
  CreateSellerMonoCrow(
    request: MsgCreateSellerMonoCrow
  ): Promise<MsgCreateSellerMonoCrowResponse>;
  UpdateSellerMonoCrow(
    request: MsgUpdateSellerMonoCrow
  ): Promise<MsgUpdateSellerMonoCrowResponse>;
  DeleteSellerMonoCrow(
    request: MsgDeleteSellerMonoCrow
  ): Promise<MsgDeleteSellerMonoCrowResponse>;
  CreateMonoCrow(
    request: MsgCreateMonoCrow
  ): Promise<MsgCreateMonoCrowResponse>;
  UpdateMonoCrow(
    request: MsgUpdateMonoCrow
  ): Promise<MsgUpdateMonoCrowResponse>;
  DeleteMonoCrow(
    request: MsgDeleteMonoCrow
  ): Promise<MsgDeleteMonoCrowResponse>;
  CreateMonoDispute(
    request: MsgCreateMonoDispute
  ): Promise<MsgCreateMonoDisputeResponse>;
  UpdateMonoDispute(
    request: MsgUpdateMonoDispute
  ): Promise<MsgUpdateMonoDisputeResponse>;
  DeleteMonoDispute(
    request: MsgDeleteMonoDispute
  ): Promise<MsgDeleteMonoDisputeResponse>;
  CreateMonoRebutal(
    request: MsgCreateMonoRebutal
  ): Promise<MsgCreateMonoRebutalResponse>;
  UpdateMonoRebutal(
    request: MsgUpdateMonoRebutal
  ): Promise<MsgUpdateMonoRebutalResponse>;
  DeleteMonoRebutal(
    request: MsgDeleteMonoRebutal
  ): Promise<MsgDeleteMonoRebutalResponse>;
  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
  UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse>;
  DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse>;
  CreateVerdict(request: MsgCreateVerdict): Promise<MsgCreateVerdictResponse>;
  UpdateVerdict(request: MsgUpdateVerdict): Promise<MsgUpdateVerdictResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteVerdict(request: MsgDeleteVerdict): Promise<MsgDeleteVerdictResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateBuyerMonoCrow(
    request: MsgCreateBuyerMonoCrow
  ): Promise<MsgCreateBuyerMonoCrowResponse> {
    const data = MsgCreateBuyerMonoCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "CreateBuyerMonoCrow",
      data
    );
    return promise.then((data) =>
      MsgCreateBuyerMonoCrowResponse.decode(new Reader(data))
    );
  }

  UpdateBuyerMonoCrow(
    request: MsgUpdateBuyerMonoCrow
  ): Promise<MsgUpdateBuyerMonoCrowResponse> {
    const data = MsgUpdateBuyerMonoCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "UpdateBuyerMonoCrow",
      data
    );
    return promise.then((data) =>
      MsgUpdateBuyerMonoCrowResponse.decode(new Reader(data))
    );
  }

  DeleteBuyerMonoCrow(
    request: MsgDeleteBuyerMonoCrow
  ): Promise<MsgDeleteBuyerMonoCrowResponse> {
    const data = MsgDeleteBuyerMonoCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "DeleteBuyerMonoCrow",
      data
    );
    return promise.then((data) =>
      MsgDeleteBuyerMonoCrowResponse.decode(new Reader(data))
    );
  }

  CreateSellerMonoCrow(
    request: MsgCreateSellerMonoCrow
  ): Promise<MsgCreateSellerMonoCrowResponse> {
    const data = MsgCreateSellerMonoCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "CreateSellerMonoCrow",
      data
    );
    return promise.then((data) =>
      MsgCreateSellerMonoCrowResponse.decode(new Reader(data))
    );
  }

  UpdateSellerMonoCrow(
    request: MsgUpdateSellerMonoCrow
  ): Promise<MsgUpdateSellerMonoCrowResponse> {
    const data = MsgUpdateSellerMonoCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "UpdateSellerMonoCrow",
      data
    );
    return promise.then((data) =>
      MsgUpdateSellerMonoCrowResponse.decode(new Reader(data))
    );
  }

  DeleteSellerMonoCrow(
    request: MsgDeleteSellerMonoCrow
  ): Promise<MsgDeleteSellerMonoCrowResponse> {
    const data = MsgDeleteSellerMonoCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "DeleteSellerMonoCrow",
      data
    );
    return promise.then((data) =>
      MsgDeleteSellerMonoCrowResponse.decode(new Reader(data))
    );
  }

  CreateMonoCrow(
    request: MsgCreateMonoCrow
  ): Promise<MsgCreateMonoCrowResponse> {
    const data = MsgCreateMonoCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "CreateMonoCrow",
      data
    );
    return promise.then((data) =>
      MsgCreateMonoCrowResponse.decode(new Reader(data))
    );
  }

  UpdateMonoCrow(
    request: MsgUpdateMonoCrow
  ): Promise<MsgUpdateMonoCrowResponse> {
    const data = MsgUpdateMonoCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "UpdateMonoCrow",
      data
    );
    return promise.then((data) =>
      MsgUpdateMonoCrowResponse.decode(new Reader(data))
    );
  }

  DeleteMonoCrow(
    request: MsgDeleteMonoCrow
  ): Promise<MsgDeleteMonoCrowResponse> {
    const data = MsgDeleteMonoCrow.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "DeleteMonoCrow",
      data
    );
    return promise.then((data) =>
      MsgDeleteMonoCrowResponse.decode(new Reader(data))
    );
  }

  CreateMonoDispute(
    request: MsgCreateMonoDispute
  ): Promise<MsgCreateMonoDisputeResponse> {
    const data = MsgCreateMonoDispute.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "CreateMonoDispute",
      data
    );
    return promise.then((data) =>
      MsgCreateMonoDisputeResponse.decode(new Reader(data))
    );
  }

  UpdateMonoDispute(
    request: MsgUpdateMonoDispute
  ): Promise<MsgUpdateMonoDisputeResponse> {
    const data = MsgUpdateMonoDispute.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "UpdateMonoDispute",
      data
    );
    return promise.then((data) =>
      MsgUpdateMonoDisputeResponse.decode(new Reader(data))
    );
  }

  DeleteMonoDispute(
    request: MsgDeleteMonoDispute
  ): Promise<MsgDeleteMonoDisputeResponse> {
    const data = MsgDeleteMonoDispute.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "DeleteMonoDispute",
      data
    );
    return promise.then((data) =>
      MsgDeleteMonoDisputeResponse.decode(new Reader(data))
    );
  }

  CreateMonoRebutal(
    request: MsgCreateMonoRebutal
  ): Promise<MsgCreateMonoRebutalResponse> {
    const data = MsgCreateMonoRebutal.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "CreateMonoRebutal",
      data
    );
    return promise.then((data) =>
      MsgCreateMonoRebutalResponse.decode(new Reader(data))
    );
  }

  UpdateMonoRebutal(
    request: MsgUpdateMonoRebutal
  ): Promise<MsgUpdateMonoRebutalResponse> {
    const data = MsgUpdateMonoRebutal.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "UpdateMonoRebutal",
      data
    );
    return promise.then((data) =>
      MsgUpdateMonoRebutalResponse.decode(new Reader(data))
    );
  }

  DeleteMonoRebutal(
    request: MsgDeleteMonoRebutal
  ): Promise<MsgDeleteMonoRebutalResponse> {
    const data = MsgDeleteMonoRebutal.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "DeleteMonoRebutal",
      data
    );
    return promise.then((data) =>
      MsgDeleteMonoRebutalResponse.decode(new Reader(data))
    );
  }

  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse> {
    const data = MsgCreateVote.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "CreateVote",
      data
    );
    return promise.then((data) =>
      MsgCreateVoteResponse.decode(new Reader(data))
    );
  }

  UpdateVote(request: MsgUpdateVote): Promise<MsgUpdateVoteResponse> {
    const data = MsgUpdateVote.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "UpdateVote",
      data
    );
    return promise.then((data) =>
      MsgUpdateVoteResponse.decode(new Reader(data))
    );
  }

  DeleteVote(request: MsgDeleteVote): Promise<MsgDeleteVoteResponse> {
    const data = MsgDeleteVote.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "DeleteVote",
      data
    );
    return promise.then((data) =>
      MsgDeleteVoteResponse.decode(new Reader(data))
    );
  }

  CreateVerdict(request: MsgCreateVerdict): Promise<MsgCreateVerdictResponse> {
    const data = MsgCreateVerdict.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "CreateVerdict",
      data
    );
    return promise.then((data) =>
      MsgCreateVerdictResponse.decode(new Reader(data))
    );
  }

  UpdateVerdict(request: MsgUpdateVerdict): Promise<MsgUpdateVerdictResponse> {
    const data = MsgUpdateVerdict.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "UpdateVerdict",
      data
    );
    return promise.then((data) =>
      MsgUpdateVerdictResponse.decode(new Reader(data))
    );
  }

  DeleteVerdict(request: MsgDeleteVerdict): Promise<MsgDeleteVerdictResponse> {
    const data = MsgDeleteVerdict.encode(request).finish();
    const promise = this.rpc.request(
      "crowlabs.delta.escrow.Msg",
      "DeleteVerdict",
      data
    );
    return promise.then((data) =>
      MsgDeleteVerdictResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
