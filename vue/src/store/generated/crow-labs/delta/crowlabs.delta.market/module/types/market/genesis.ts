/* eslint-disable */
import { Params } from "../market/params";
import { Listing } from "../market/listing";
import { MonoListing } from "../market/mono_listing";
import { Order } from "../market/order";
import { MonoOrder } from "../market/mono_order";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.delta.market";

/** GenesisState defines the market module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  listingList: Listing[];
  monoListingList: MonoListing[];
  orderList: Order[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  monoOrderList: MonoOrder[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.listingList) {
      Listing.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.monoListingList) {
      MonoListing.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.orderList) {
      Order.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.monoOrderList) {
      MonoOrder.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.listingList = [];
    message.monoListingList = [];
    message.orderList = [];
    message.monoOrderList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.listingList.push(Listing.decode(reader, reader.uint32()));
          break;
        case 3:
          message.monoListingList.push(
            MonoListing.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.orderList.push(Order.decode(reader, reader.uint32()));
          break;
        case 5:
          message.monoOrderList.push(MonoOrder.decode(reader, reader.uint32()));
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
    message.listingList = [];
    message.monoListingList = [];
    message.orderList = [];
    message.monoOrderList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.listingList !== undefined && object.listingList !== null) {
      for (const e of object.listingList) {
        message.listingList.push(Listing.fromJSON(e));
      }
    }
    if (
      object.monoListingList !== undefined &&
      object.monoListingList !== null
    ) {
      for (const e of object.monoListingList) {
        message.monoListingList.push(MonoListing.fromJSON(e));
      }
    }
    if (object.orderList !== undefined && object.orderList !== null) {
      for (const e of object.orderList) {
        message.orderList.push(Order.fromJSON(e));
      }
    }
    if (object.monoOrderList !== undefined && object.monoOrderList !== null) {
      for (const e of object.monoOrderList) {
        message.monoOrderList.push(MonoOrder.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.listingList) {
      obj.listingList = message.listingList.map((e) =>
        e ? Listing.toJSON(e) : undefined
      );
    } else {
      obj.listingList = [];
    }
    if (message.monoListingList) {
      obj.monoListingList = message.monoListingList.map((e) =>
        e ? MonoListing.toJSON(e) : undefined
      );
    } else {
      obj.monoListingList = [];
    }
    if (message.orderList) {
      obj.orderList = message.orderList.map((e) =>
        e ? Order.toJSON(e) : undefined
      );
    } else {
      obj.orderList = [];
    }
    if (message.monoOrderList) {
      obj.monoOrderList = message.monoOrderList.map((e) =>
        e ? MonoOrder.toJSON(e) : undefined
      );
    } else {
      obj.monoOrderList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.listingList = [];
    message.monoListingList = [];
    message.orderList = [];
    message.monoOrderList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.listingList !== undefined && object.listingList !== null) {
      for (const e of object.listingList) {
        message.listingList.push(Listing.fromPartial(e));
      }
    }
    if (
      object.monoListingList !== undefined &&
      object.monoListingList !== null
    ) {
      for (const e of object.monoListingList) {
        message.monoListingList.push(MonoListing.fromPartial(e));
      }
    }
    if (object.orderList !== undefined && object.orderList !== null) {
      for (const e of object.orderList) {
        message.orderList.push(Order.fromPartial(e));
      }
    }
    if (object.monoOrderList !== undefined && object.monoOrderList !== null) {
      for (const e of object.monoOrderList) {
        message.monoOrderList.push(MonoOrder.fromPartial(e));
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
