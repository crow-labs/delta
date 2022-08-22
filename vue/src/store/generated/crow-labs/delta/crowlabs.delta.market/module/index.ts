// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateMonoListing } from "./types/market/tx";
import { MsgUpdateMonoListing } from "./types/market/tx";
import { MsgDeleteMonoOrder } from "./types/market/tx";
import { MsgDeleteMonoListing } from "./types/market/tx";
import { MsgCreateMonoOrder } from "./types/market/tx";
import { MsgUpdateMonoOrder } from "./types/market/tx";


const types = [
  ["/crowlabs.delta.market.MsgCreateMonoListing", MsgCreateMonoListing],
  ["/crowlabs.delta.market.MsgUpdateMonoListing", MsgUpdateMonoListing],
  ["/crowlabs.delta.market.MsgDeleteMonoOrder", MsgDeleteMonoOrder],
  ["/crowlabs.delta.market.MsgDeleteMonoListing", MsgDeleteMonoListing],
  ["/crowlabs.delta.market.MsgCreateMonoOrder", MsgCreateMonoOrder],
  ["/crowlabs.delta.market.MsgUpdateMonoOrder", MsgUpdateMonoOrder],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateMonoListing: (data: MsgCreateMonoListing): EncodeObject => ({ typeUrl: "/crowlabs.delta.market.MsgCreateMonoListing", value: MsgCreateMonoListing.fromPartial( data ) }),
    msgUpdateMonoListing: (data: MsgUpdateMonoListing): EncodeObject => ({ typeUrl: "/crowlabs.delta.market.MsgUpdateMonoListing", value: MsgUpdateMonoListing.fromPartial( data ) }),
    msgDeleteMonoOrder: (data: MsgDeleteMonoOrder): EncodeObject => ({ typeUrl: "/crowlabs.delta.market.MsgDeleteMonoOrder", value: MsgDeleteMonoOrder.fromPartial( data ) }),
    msgDeleteMonoListing: (data: MsgDeleteMonoListing): EncodeObject => ({ typeUrl: "/crowlabs.delta.market.MsgDeleteMonoListing", value: MsgDeleteMonoListing.fromPartial( data ) }),
    msgCreateMonoOrder: (data: MsgCreateMonoOrder): EncodeObject => ({ typeUrl: "/crowlabs.delta.market.MsgCreateMonoOrder", value: MsgCreateMonoOrder.fromPartial( data ) }),
    msgUpdateMonoOrder: (data: MsgUpdateMonoOrder): EncodeObject => ({ typeUrl: "/crowlabs.delta.market.MsgUpdateMonoOrder", value: MsgUpdateMonoOrder.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
