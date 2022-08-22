package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateBuyerMonoCrow{}, "escrow/CreateBuyerMonoCrow", nil)
	cdc.RegisterConcrete(&MsgUpdateBuyerMonoCrow{}, "escrow/UpdateBuyerMonoCrow", nil)
	cdc.RegisterConcrete(&MsgDeleteBuyerMonoCrow{}, "escrow/DeleteBuyerMonoCrow", nil)
	cdc.RegisterConcrete(&MsgCreateSellerMonoCrow{}, "escrow/CreateSellerMonoCrow", nil)
	cdc.RegisterConcrete(&MsgUpdateSellerMonoCrow{}, "escrow/UpdateSellerMonoCrow", nil)
	cdc.RegisterConcrete(&MsgDeleteSellerMonoCrow{}, "escrow/DeleteSellerMonoCrow", nil)
	cdc.RegisterConcrete(&MsgCreateMonoCrow{}, "escrow/CreateMonoCrow", nil)
	cdc.RegisterConcrete(&MsgUpdateMonoCrow{}, "escrow/UpdateMonoCrow", nil)
	cdc.RegisterConcrete(&MsgDeleteMonoCrow{}, "escrow/DeleteMonoCrow", nil)
	cdc.RegisterConcrete(&MsgCreateMonoDispute{}, "escrow/CreateMonoDispute", nil)
	cdc.RegisterConcrete(&MsgUpdateMonoDispute{}, "escrow/UpdateMonoDispute", nil)
	cdc.RegisterConcrete(&MsgDeleteMonoDispute{}, "escrow/DeleteMonoDispute", nil)
	cdc.RegisterConcrete(&MsgCreateMonoRebutal{}, "escrow/CreateMonoRebutal", nil)
	cdc.RegisterConcrete(&MsgUpdateMonoRebutal{}, "escrow/UpdateMonoRebutal", nil)
	cdc.RegisterConcrete(&MsgDeleteMonoRebutal{}, "escrow/DeleteMonoRebutal", nil)
	cdc.RegisterConcrete(&MsgCreateVote{}, "escrow/CreateVote", nil)
	cdc.RegisterConcrete(&MsgUpdateVote{}, "escrow/UpdateVote", nil)
	cdc.RegisterConcrete(&MsgDeleteVote{}, "escrow/DeleteVote", nil)
	cdc.RegisterConcrete(&MsgCreateVerdict{}, "escrow/CreateVerdict", nil)
	cdc.RegisterConcrete(&MsgUpdateVerdict{}, "escrow/UpdateVerdict", nil)
	cdc.RegisterConcrete(&MsgDeleteVerdict{}, "escrow/DeleteVerdict", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBuyerMonoCrow{},
		&MsgUpdateBuyerMonoCrow{},
		&MsgDeleteBuyerMonoCrow{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSellerMonoCrow{},
		&MsgUpdateSellerMonoCrow{},
		&MsgDeleteSellerMonoCrow{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMonoCrow{},
		&MsgUpdateMonoCrow{},
		&MsgDeleteMonoCrow{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMonoDispute{},
		&MsgUpdateMonoDispute{},
		&MsgDeleteMonoDispute{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMonoRebutal{},
		&MsgUpdateMonoRebutal{},
		&MsgDeleteMonoRebutal{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateVote{},
		&MsgUpdateVote{},
		&MsgDeleteVote{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateVerdict{},
		&MsgUpdateVerdict{},
		&MsgDeleteVerdict{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
