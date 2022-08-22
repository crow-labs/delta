// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateVerdict } from "./types/escrow/tx";
import { MsgUpdateBuyerMonoCrow } from "./types/escrow/tx";
import { MsgUpdateVote } from "./types/escrow/tx";
import { MsgCreateBuyerMonoCrow } from "./types/escrow/tx";
import { MsgCreateSellerMonoCrow } from "./types/escrow/tx";
import { MsgDeleteMonoDispute } from "./types/escrow/tx";
import { MsgDeleteMonoCrow } from "./types/escrow/tx";
import { MsgDeleteBuyerMonoCrow } from "./types/escrow/tx";
import { MsgCreateMonoRebutal } from "./types/escrow/tx";
import { MsgSellerRaiseDispute } from "./types/escrow/tx";
import { MsgBeginCrow } from "./types/escrow/tx";
import { MsgUpdateMonoDispute } from "./types/escrow/tx";
import { MsgUpdateVerdict } from "./types/escrow/tx";
import { MsgDeleteSellerMonoCrow } from "./types/escrow/tx";
import { MsgBuyerDisputeRebuttal } from "./types/escrow/tx";
import { MsgDeleteMonoRebutal } from "./types/escrow/tx";
import { MsgUpdateMonoCrow } from "./types/escrow/tx";
import { MsgJoinCrow } from "./types/escrow/tx";
import { MsgCreateMonoCrow } from "./types/escrow/tx";
import { MsgUpdateSellerMonoCrow } from "./types/escrow/tx";
import { MsgCreateMonoDispute } from "./types/escrow/tx";
import { MsgSellerDisputeRebuttal } from "./types/escrow/tx";
import { MsgUpdateMonoRebutal } from "./types/escrow/tx";
import { MsgDeleteVerdict } from "./types/escrow/tx";
import { MsgReleaseCrow } from "./types/escrow/tx";
import { MsgBuyerRaiseDispute } from "./types/escrow/tx";
import { MsgDeleteVote } from "./types/escrow/tx";
import { MsgVoteOnDispute } from "./types/escrow/tx";
import { MsgCreateVote } from "./types/escrow/tx";


const types = [
  ["/crowlabs.delta.escrow.MsgCreateVerdict", MsgCreateVerdict],
  ["/crowlabs.delta.escrow.MsgUpdateBuyerMonoCrow", MsgUpdateBuyerMonoCrow],
  ["/crowlabs.delta.escrow.MsgUpdateVote", MsgUpdateVote],
  ["/crowlabs.delta.escrow.MsgCreateBuyerMonoCrow", MsgCreateBuyerMonoCrow],
  ["/crowlabs.delta.escrow.MsgCreateSellerMonoCrow", MsgCreateSellerMonoCrow],
  ["/crowlabs.delta.escrow.MsgDeleteMonoDispute", MsgDeleteMonoDispute],
  ["/crowlabs.delta.escrow.MsgDeleteMonoCrow", MsgDeleteMonoCrow],
  ["/crowlabs.delta.escrow.MsgDeleteBuyerMonoCrow", MsgDeleteBuyerMonoCrow],
  ["/crowlabs.delta.escrow.MsgCreateMonoRebutal", MsgCreateMonoRebutal],
  ["/crowlabs.delta.escrow.MsgSellerRaiseDispute", MsgSellerRaiseDispute],
  ["/crowlabs.delta.escrow.MsgBeginCrow", MsgBeginCrow],
  ["/crowlabs.delta.escrow.MsgUpdateMonoDispute", MsgUpdateMonoDispute],
  ["/crowlabs.delta.escrow.MsgUpdateVerdict", MsgUpdateVerdict],
  ["/crowlabs.delta.escrow.MsgDeleteSellerMonoCrow", MsgDeleteSellerMonoCrow],
  ["/crowlabs.delta.escrow.MsgBuyerDisputeRebuttal", MsgBuyerDisputeRebuttal],
  ["/crowlabs.delta.escrow.MsgDeleteMonoRebutal", MsgDeleteMonoRebutal],
  ["/crowlabs.delta.escrow.MsgUpdateMonoCrow", MsgUpdateMonoCrow],
  ["/crowlabs.delta.escrow.MsgJoinCrow", MsgJoinCrow],
  ["/crowlabs.delta.escrow.MsgCreateMonoCrow", MsgCreateMonoCrow],
  ["/crowlabs.delta.escrow.MsgUpdateSellerMonoCrow", MsgUpdateSellerMonoCrow],
  ["/crowlabs.delta.escrow.MsgCreateMonoDispute", MsgCreateMonoDispute],
  ["/crowlabs.delta.escrow.MsgSellerDisputeRebuttal", MsgSellerDisputeRebuttal],
  ["/crowlabs.delta.escrow.MsgUpdateMonoRebutal", MsgUpdateMonoRebutal],
  ["/crowlabs.delta.escrow.MsgDeleteVerdict", MsgDeleteVerdict],
  ["/crowlabs.delta.escrow.MsgReleaseCrow", MsgReleaseCrow],
  ["/crowlabs.delta.escrow.MsgBuyerRaiseDispute", MsgBuyerRaiseDispute],
  ["/crowlabs.delta.escrow.MsgDeleteVote", MsgDeleteVote],
  ["/crowlabs.delta.escrow.MsgVoteOnDispute", MsgVoteOnDispute],
  ["/crowlabs.delta.escrow.MsgCreateVote", MsgCreateVote],
  
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
    msgCreateVerdict: (data: MsgCreateVerdict): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgCreateVerdict", value: MsgCreateVerdict.fromPartial( data ) }),
    msgUpdateBuyerMonoCrow: (data: MsgUpdateBuyerMonoCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgUpdateBuyerMonoCrow", value: MsgUpdateBuyerMonoCrow.fromPartial( data ) }),
    msgUpdateVote: (data: MsgUpdateVote): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgUpdateVote", value: MsgUpdateVote.fromPartial( data ) }),
    msgCreateBuyerMonoCrow: (data: MsgCreateBuyerMonoCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgCreateBuyerMonoCrow", value: MsgCreateBuyerMonoCrow.fromPartial( data ) }),
    msgCreateSellerMonoCrow: (data: MsgCreateSellerMonoCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgCreateSellerMonoCrow", value: MsgCreateSellerMonoCrow.fromPartial( data ) }),
    msgDeleteMonoDispute: (data: MsgDeleteMonoDispute): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgDeleteMonoDispute", value: MsgDeleteMonoDispute.fromPartial( data ) }),
    msgDeleteMonoCrow: (data: MsgDeleteMonoCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgDeleteMonoCrow", value: MsgDeleteMonoCrow.fromPartial( data ) }),
    msgDeleteBuyerMonoCrow: (data: MsgDeleteBuyerMonoCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgDeleteBuyerMonoCrow", value: MsgDeleteBuyerMonoCrow.fromPartial( data ) }),
    msgCreateMonoRebutal: (data: MsgCreateMonoRebutal): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgCreateMonoRebutal", value: MsgCreateMonoRebutal.fromPartial( data ) }),
    msgSellerRaiseDispute: (data: MsgSellerRaiseDispute): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgSellerRaiseDispute", value: MsgSellerRaiseDispute.fromPartial( data ) }),
    msgBeginCrow: (data: MsgBeginCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgBeginCrow", value: MsgBeginCrow.fromPartial( data ) }),
    msgUpdateMonoDispute: (data: MsgUpdateMonoDispute): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgUpdateMonoDispute", value: MsgUpdateMonoDispute.fromPartial( data ) }),
    msgUpdateVerdict: (data: MsgUpdateVerdict): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgUpdateVerdict", value: MsgUpdateVerdict.fromPartial( data ) }),
    msgDeleteSellerMonoCrow: (data: MsgDeleteSellerMonoCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgDeleteSellerMonoCrow", value: MsgDeleteSellerMonoCrow.fromPartial( data ) }),
    msgBuyerDisputeRebuttal: (data: MsgBuyerDisputeRebuttal): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgBuyerDisputeRebuttal", value: MsgBuyerDisputeRebuttal.fromPartial( data ) }),
    msgDeleteMonoRebutal: (data: MsgDeleteMonoRebutal): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgDeleteMonoRebutal", value: MsgDeleteMonoRebutal.fromPartial( data ) }),
    msgUpdateMonoCrow: (data: MsgUpdateMonoCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgUpdateMonoCrow", value: MsgUpdateMonoCrow.fromPartial( data ) }),
    msgJoinCrow: (data: MsgJoinCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgJoinCrow", value: MsgJoinCrow.fromPartial( data ) }),
    msgCreateMonoCrow: (data: MsgCreateMonoCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgCreateMonoCrow", value: MsgCreateMonoCrow.fromPartial( data ) }),
    msgUpdateSellerMonoCrow: (data: MsgUpdateSellerMonoCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgUpdateSellerMonoCrow", value: MsgUpdateSellerMonoCrow.fromPartial( data ) }),
    msgCreateMonoDispute: (data: MsgCreateMonoDispute): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgCreateMonoDispute", value: MsgCreateMonoDispute.fromPartial( data ) }),
    msgSellerDisputeRebuttal: (data: MsgSellerDisputeRebuttal): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgSellerDisputeRebuttal", value: MsgSellerDisputeRebuttal.fromPartial( data ) }),
    msgUpdateMonoRebutal: (data: MsgUpdateMonoRebutal): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgUpdateMonoRebutal", value: MsgUpdateMonoRebutal.fromPartial( data ) }),
    msgDeleteVerdict: (data: MsgDeleteVerdict): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgDeleteVerdict", value: MsgDeleteVerdict.fromPartial( data ) }),
    msgReleaseCrow: (data: MsgReleaseCrow): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgReleaseCrow", value: MsgReleaseCrow.fromPartial( data ) }),
    msgBuyerRaiseDispute: (data: MsgBuyerRaiseDispute): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgBuyerRaiseDispute", value: MsgBuyerRaiseDispute.fromPartial( data ) }),
    msgDeleteVote: (data: MsgDeleteVote): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgDeleteVote", value: MsgDeleteVote.fromPartial( data ) }),
    msgVoteOnDispute: (data: MsgVoteOnDispute): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgVoteOnDispute", value: MsgVoteOnDispute.fromPartial( data ) }),
    msgCreateVote: (data: MsgCreateVote): EncodeObject => ({ typeUrl: "/crowlabs.delta.escrow.MsgCreateVote", value: MsgCreateVote.fromPartial( data ) }),
    
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
