// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSeller } from "./types/whitelist/tx";
import { MsgCreateVoter } from "./types/whitelist/tx";
import { MsgCreateMonoWhitelist } from "./types/whitelist/tx";
import { MsgUpdateVoter } from "./types/whitelist/tx";
import { MsgCreateWhitelist } from "./types/whitelist/tx";
import { MsgUpdateWhitelist } from "./types/whitelist/tx";
import { MsgDeleteMonoWhitelist } from "./types/whitelist/tx";
import { MsgCreateBuyer } from "./types/whitelist/tx";
import { MsgUpdateMonoWhitelist } from "./types/whitelist/tx";
import { MsgDeleteSeller } from "./types/whitelist/tx";
import { MsgDeleteVoter } from "./types/whitelist/tx";
import { MsgDeleteWhitelist } from "./types/whitelist/tx";
import { MsgDeleteBuyer } from "./types/whitelist/tx";
import { MsgUpdateSeller } from "./types/whitelist/tx";
import { MsgUpdateBuyer } from "./types/whitelist/tx";


const types = [
  ["/crowlabs.delta.whitelist.MsgCreateSeller", MsgCreateSeller],
  ["/crowlabs.delta.whitelist.MsgCreateVoter", MsgCreateVoter],
  ["/crowlabs.delta.whitelist.MsgCreateMonoWhitelist", MsgCreateMonoWhitelist],
  ["/crowlabs.delta.whitelist.MsgUpdateVoter", MsgUpdateVoter],
  ["/crowlabs.delta.whitelist.MsgCreateWhitelist", MsgCreateWhitelist],
  ["/crowlabs.delta.whitelist.MsgUpdateWhitelist", MsgUpdateWhitelist],
  ["/crowlabs.delta.whitelist.MsgDeleteMonoWhitelist", MsgDeleteMonoWhitelist],
  ["/crowlabs.delta.whitelist.MsgCreateBuyer", MsgCreateBuyer],
  ["/crowlabs.delta.whitelist.MsgUpdateMonoWhitelist", MsgUpdateMonoWhitelist],
  ["/crowlabs.delta.whitelist.MsgDeleteSeller", MsgDeleteSeller],
  ["/crowlabs.delta.whitelist.MsgDeleteVoter", MsgDeleteVoter],
  ["/crowlabs.delta.whitelist.MsgDeleteWhitelist", MsgDeleteWhitelist],
  ["/crowlabs.delta.whitelist.MsgDeleteBuyer", MsgDeleteBuyer],
  ["/crowlabs.delta.whitelist.MsgUpdateSeller", MsgUpdateSeller],
  ["/crowlabs.delta.whitelist.MsgUpdateBuyer", MsgUpdateBuyer],
  
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
    msgCreateSeller: (data: MsgCreateSeller): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgCreateSeller", value: MsgCreateSeller.fromPartial( data ) }),
    msgCreateVoter: (data: MsgCreateVoter): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgCreateVoter", value: MsgCreateVoter.fromPartial( data ) }),
    msgCreateMonoWhitelist: (data: MsgCreateMonoWhitelist): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgCreateMonoWhitelist", value: MsgCreateMonoWhitelist.fromPartial( data ) }),
    msgUpdateVoter: (data: MsgUpdateVoter): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgUpdateVoter", value: MsgUpdateVoter.fromPartial( data ) }),
    msgCreateWhitelist: (data: MsgCreateWhitelist): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgCreateWhitelist", value: MsgCreateWhitelist.fromPartial( data ) }),
    msgUpdateWhitelist: (data: MsgUpdateWhitelist): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgUpdateWhitelist", value: MsgUpdateWhitelist.fromPartial( data ) }),
    msgDeleteMonoWhitelist: (data: MsgDeleteMonoWhitelist): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgDeleteMonoWhitelist", value: MsgDeleteMonoWhitelist.fromPartial( data ) }),
    msgCreateBuyer: (data: MsgCreateBuyer): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgCreateBuyer", value: MsgCreateBuyer.fromPartial( data ) }),
    msgUpdateMonoWhitelist: (data: MsgUpdateMonoWhitelist): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgUpdateMonoWhitelist", value: MsgUpdateMonoWhitelist.fromPartial( data ) }),
    msgDeleteSeller: (data: MsgDeleteSeller): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgDeleteSeller", value: MsgDeleteSeller.fromPartial( data ) }),
    msgDeleteVoter: (data: MsgDeleteVoter): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgDeleteVoter", value: MsgDeleteVoter.fromPartial( data ) }),
    msgDeleteWhitelist: (data: MsgDeleteWhitelist): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgDeleteWhitelist", value: MsgDeleteWhitelist.fromPartial( data ) }),
    msgDeleteBuyer: (data: MsgDeleteBuyer): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgDeleteBuyer", value: MsgDeleteBuyer.fromPartial( data ) }),
    msgUpdateSeller: (data: MsgUpdateSeller): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgUpdateSeller", value: MsgUpdateSeller.fromPartial( data ) }),
    msgUpdateBuyer: (data: MsgUpdateBuyer): EncodeObject => ({ typeUrl: "/crowlabs.delta.whitelist.MsgUpdateBuyer", value: MsgUpdateBuyer.fromPartial( data ) }),
    
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
