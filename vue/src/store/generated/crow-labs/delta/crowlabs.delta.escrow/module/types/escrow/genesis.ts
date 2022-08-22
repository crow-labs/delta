/* eslint-disable */
import { Params } from "../escrow/params";
import { BuyerCrow } from "../escrow/buyer_crow";
import { BuyerMonoCrow } from "../escrow/buyer_mono_crow";
import { SellerCrow } from "../escrow/seller_crow";
import { SellerMonoCrow } from "../escrow/seller_mono_crow";
import { Crow } from "../escrow/crow";
import { MonoCrow } from "../escrow/mono_crow";
import { Dispute } from "../escrow/dispute";
import { MonoDispute } from "../escrow/mono_dispute";
import { Rebuttal } from "../escrow/rebuttal";
import { MonoRebutal } from "../escrow/mono_rebutal";
import { Ballot } from "../escrow/ballot";
import { Vote } from "../escrow/vote";
import { Poll } from "../escrow/poll";
import { Verdict } from "../escrow/verdict";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.escrow";

/** GenesisState defines the escrow module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  port_id: string;
  buyerCrowList: BuyerCrow[];
  buyerMonoCrowList: BuyerMonoCrow[];
  sellerCrowList: SellerCrow[];
  sellerMonoCrowList: SellerMonoCrow[];
  crowList: Crow[];
  monoCrowList: MonoCrow[];
  disputeList: Dispute[];
  monoDisputeList: MonoDispute[];
  rebuttalList: Rebuttal[];
  monoRebutalList: MonoRebutal[];
  ballotList: Ballot[];
  voteList: Vote[];
  pollList: Poll[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  verdictList: Verdict[];
}

const baseGenesisState: object = { port_id: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    for (const v of message.buyerCrowList) {
      BuyerCrow.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.buyerMonoCrowList) {
      BuyerMonoCrow.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sellerCrowList) {
      SellerCrow.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.sellerMonoCrowList) {
      SellerMonoCrow.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.crowList) {
      Crow.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.monoCrowList) {
      MonoCrow.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.disputeList) {
      Dispute.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.monoDisputeList) {
      MonoDispute.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.rebuttalList) {
      Rebuttal.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.monoRebutalList) {
      MonoRebutal.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.ballotList) {
      Ballot.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.voteList) {
      Vote.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.pollList) {
      Poll.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.verdictList) {
      Verdict.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.buyerCrowList = [];
    message.buyerMonoCrowList = [];
    message.sellerCrowList = [];
    message.sellerMonoCrowList = [];
    message.crowList = [];
    message.monoCrowList = [];
    message.disputeList = [];
    message.monoDisputeList = [];
    message.rebuttalList = [];
    message.monoRebutalList = [];
    message.ballotList = [];
    message.voteList = [];
    message.pollList = [];
    message.verdictList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.buyerCrowList.push(BuyerCrow.decode(reader, reader.uint32()));
          break;
        case 4:
          message.buyerMonoCrowList.push(
            BuyerMonoCrow.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.sellerCrowList.push(
            SellerCrow.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.sellerMonoCrowList.push(
            SellerMonoCrow.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.crowList.push(Crow.decode(reader, reader.uint32()));
          break;
        case 8:
          message.monoCrowList.push(MonoCrow.decode(reader, reader.uint32()));
          break;
        case 9:
          message.disputeList.push(Dispute.decode(reader, reader.uint32()));
          break;
        case 10:
          message.monoDisputeList.push(
            MonoDispute.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.rebuttalList.push(Rebuttal.decode(reader, reader.uint32()));
          break;
        case 12:
          message.monoRebutalList.push(
            MonoRebutal.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.ballotList.push(Ballot.decode(reader, reader.uint32()));
          break;
        case 14:
          message.voteList.push(Vote.decode(reader, reader.uint32()));
          break;
        case 15:
          message.pollList.push(Poll.decode(reader, reader.uint32()));
          break;
        case 16:
          message.verdictList.push(Verdict.decode(reader, reader.uint32()));
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
    message.buyerCrowList = [];
    message.buyerMonoCrowList = [];
    message.sellerCrowList = [];
    message.sellerMonoCrowList = [];
    message.crowList = [];
    message.monoCrowList = [];
    message.disputeList = [];
    message.monoDisputeList = [];
    message.rebuttalList = [];
    message.monoRebutalList = [];
    message.ballotList = [];
    message.voteList = [];
    message.pollList = [];
    message.verdictList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = String(object.port_id);
    } else {
      message.port_id = "";
    }
    if (object.buyerCrowList !== undefined && object.buyerCrowList !== null) {
      for (const e of object.buyerCrowList) {
        message.buyerCrowList.push(BuyerCrow.fromJSON(e));
      }
    }
    if (
      object.buyerMonoCrowList !== undefined &&
      object.buyerMonoCrowList !== null
    ) {
      for (const e of object.buyerMonoCrowList) {
        message.buyerMonoCrowList.push(BuyerMonoCrow.fromJSON(e));
      }
    }
    if (object.sellerCrowList !== undefined && object.sellerCrowList !== null) {
      for (const e of object.sellerCrowList) {
        message.sellerCrowList.push(SellerCrow.fromJSON(e));
      }
    }
    if (
      object.sellerMonoCrowList !== undefined &&
      object.sellerMonoCrowList !== null
    ) {
      for (const e of object.sellerMonoCrowList) {
        message.sellerMonoCrowList.push(SellerMonoCrow.fromJSON(e));
      }
    }
    if (object.crowList !== undefined && object.crowList !== null) {
      for (const e of object.crowList) {
        message.crowList.push(Crow.fromJSON(e));
      }
    }
    if (object.monoCrowList !== undefined && object.monoCrowList !== null) {
      for (const e of object.monoCrowList) {
        message.monoCrowList.push(MonoCrow.fromJSON(e));
      }
    }
    if (object.disputeList !== undefined && object.disputeList !== null) {
      for (const e of object.disputeList) {
        message.disputeList.push(Dispute.fromJSON(e));
      }
    }
    if (
      object.monoDisputeList !== undefined &&
      object.monoDisputeList !== null
    ) {
      for (const e of object.monoDisputeList) {
        message.monoDisputeList.push(MonoDispute.fromJSON(e));
      }
    }
    if (object.rebuttalList !== undefined && object.rebuttalList !== null) {
      for (const e of object.rebuttalList) {
        message.rebuttalList.push(Rebuttal.fromJSON(e));
      }
    }
    if (
      object.monoRebutalList !== undefined &&
      object.monoRebutalList !== null
    ) {
      for (const e of object.monoRebutalList) {
        message.monoRebutalList.push(MonoRebutal.fromJSON(e));
      }
    }
    if (object.ballotList !== undefined && object.ballotList !== null) {
      for (const e of object.ballotList) {
        message.ballotList.push(Ballot.fromJSON(e));
      }
    }
    if (object.voteList !== undefined && object.voteList !== null) {
      for (const e of object.voteList) {
        message.voteList.push(Vote.fromJSON(e));
      }
    }
    if (object.pollList !== undefined && object.pollList !== null) {
      for (const e of object.pollList) {
        message.pollList.push(Poll.fromJSON(e));
      }
    }
    if (object.verdictList !== undefined && object.verdictList !== null) {
      for (const e of object.verdictList) {
        message.verdictList.push(Verdict.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    if (message.buyerCrowList) {
      obj.buyerCrowList = message.buyerCrowList.map((e) =>
        e ? BuyerCrow.toJSON(e) : undefined
      );
    } else {
      obj.buyerCrowList = [];
    }
    if (message.buyerMonoCrowList) {
      obj.buyerMonoCrowList = message.buyerMonoCrowList.map((e) =>
        e ? BuyerMonoCrow.toJSON(e) : undefined
      );
    } else {
      obj.buyerMonoCrowList = [];
    }
    if (message.sellerCrowList) {
      obj.sellerCrowList = message.sellerCrowList.map((e) =>
        e ? SellerCrow.toJSON(e) : undefined
      );
    } else {
      obj.sellerCrowList = [];
    }
    if (message.sellerMonoCrowList) {
      obj.sellerMonoCrowList = message.sellerMonoCrowList.map((e) =>
        e ? SellerMonoCrow.toJSON(e) : undefined
      );
    } else {
      obj.sellerMonoCrowList = [];
    }
    if (message.crowList) {
      obj.crowList = message.crowList.map((e) =>
        e ? Crow.toJSON(e) : undefined
      );
    } else {
      obj.crowList = [];
    }
    if (message.monoCrowList) {
      obj.monoCrowList = message.monoCrowList.map((e) =>
        e ? MonoCrow.toJSON(e) : undefined
      );
    } else {
      obj.monoCrowList = [];
    }
    if (message.disputeList) {
      obj.disputeList = message.disputeList.map((e) =>
        e ? Dispute.toJSON(e) : undefined
      );
    } else {
      obj.disputeList = [];
    }
    if (message.monoDisputeList) {
      obj.monoDisputeList = message.monoDisputeList.map((e) =>
        e ? MonoDispute.toJSON(e) : undefined
      );
    } else {
      obj.monoDisputeList = [];
    }
    if (message.rebuttalList) {
      obj.rebuttalList = message.rebuttalList.map((e) =>
        e ? Rebuttal.toJSON(e) : undefined
      );
    } else {
      obj.rebuttalList = [];
    }
    if (message.monoRebutalList) {
      obj.monoRebutalList = message.monoRebutalList.map((e) =>
        e ? MonoRebutal.toJSON(e) : undefined
      );
    } else {
      obj.monoRebutalList = [];
    }
    if (message.ballotList) {
      obj.ballotList = message.ballotList.map((e) =>
        e ? Ballot.toJSON(e) : undefined
      );
    } else {
      obj.ballotList = [];
    }
    if (message.voteList) {
      obj.voteList = message.voteList.map((e) =>
        e ? Vote.toJSON(e) : undefined
      );
    } else {
      obj.voteList = [];
    }
    if (message.pollList) {
      obj.pollList = message.pollList.map((e) =>
        e ? Poll.toJSON(e) : undefined
      );
    } else {
      obj.pollList = [];
    }
    if (message.verdictList) {
      obj.verdictList = message.verdictList.map((e) =>
        e ? Verdict.toJSON(e) : undefined
      );
    } else {
      obj.verdictList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.buyerCrowList = [];
    message.buyerMonoCrowList = [];
    message.sellerCrowList = [];
    message.sellerMonoCrowList = [];
    message.crowList = [];
    message.monoCrowList = [];
    message.disputeList = [];
    message.monoDisputeList = [];
    message.rebuttalList = [];
    message.monoRebutalList = [];
    message.ballotList = [];
    message.voteList = [];
    message.pollList = [];
    message.verdictList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    } else {
      message.port_id = "";
    }
    if (object.buyerCrowList !== undefined && object.buyerCrowList !== null) {
      for (const e of object.buyerCrowList) {
        message.buyerCrowList.push(BuyerCrow.fromPartial(e));
      }
    }
    if (
      object.buyerMonoCrowList !== undefined &&
      object.buyerMonoCrowList !== null
    ) {
      for (const e of object.buyerMonoCrowList) {
        message.buyerMonoCrowList.push(BuyerMonoCrow.fromPartial(e));
      }
    }
    if (object.sellerCrowList !== undefined && object.sellerCrowList !== null) {
      for (const e of object.sellerCrowList) {
        message.sellerCrowList.push(SellerCrow.fromPartial(e));
      }
    }
    if (
      object.sellerMonoCrowList !== undefined &&
      object.sellerMonoCrowList !== null
    ) {
      for (const e of object.sellerMonoCrowList) {
        message.sellerMonoCrowList.push(SellerMonoCrow.fromPartial(e));
      }
    }
    if (object.crowList !== undefined && object.crowList !== null) {
      for (const e of object.crowList) {
        message.crowList.push(Crow.fromPartial(e));
      }
    }
    if (object.monoCrowList !== undefined && object.monoCrowList !== null) {
      for (const e of object.monoCrowList) {
        message.monoCrowList.push(MonoCrow.fromPartial(e));
      }
    }
    if (object.disputeList !== undefined && object.disputeList !== null) {
      for (const e of object.disputeList) {
        message.disputeList.push(Dispute.fromPartial(e));
      }
    }
    if (
      object.monoDisputeList !== undefined &&
      object.monoDisputeList !== null
    ) {
      for (const e of object.monoDisputeList) {
        message.monoDisputeList.push(MonoDispute.fromPartial(e));
      }
    }
    if (object.rebuttalList !== undefined && object.rebuttalList !== null) {
      for (const e of object.rebuttalList) {
        message.rebuttalList.push(Rebuttal.fromPartial(e));
      }
    }
    if (
      object.monoRebutalList !== undefined &&
      object.monoRebutalList !== null
    ) {
      for (const e of object.monoRebutalList) {
        message.monoRebutalList.push(MonoRebutal.fromPartial(e));
      }
    }
    if (object.ballotList !== undefined && object.ballotList !== null) {
      for (const e of object.ballotList) {
        message.ballotList.push(Ballot.fromPartial(e));
      }
    }
    if (object.voteList !== undefined && object.voteList !== null) {
      for (const e of object.voteList) {
        message.voteList.push(Vote.fromPartial(e));
      }
    }
    if (object.pollList !== undefined && object.pollList !== null) {
      for (const e of object.pollList) {
        message.pollList.push(Poll.fromPartial(e));
      }
    }
    if (object.verdictList !== undefined && object.verdictList !== null) {
      for (const e of object.verdictList) {
        message.verdictList.push(Verdict.fromPartial(e));
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
