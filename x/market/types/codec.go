package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateMonoListing{}, "market/CreateMonoListing", nil)
	cdc.RegisterConcrete(&MsgUpdateMonoListing{}, "market/UpdateMonoListing", nil)
	cdc.RegisterConcrete(&MsgDeleteMonoListing{}, "market/DeleteMonoListing", nil)
	cdc.RegisterConcrete(&MsgCreateMonoOrder{}, "market/CreateMonoOrder", nil)
	cdc.RegisterConcrete(&MsgUpdateMonoOrder{}, "market/UpdateMonoOrder", nil)
	cdc.RegisterConcrete(&MsgDeleteMonoOrder{}, "market/DeleteMonoOrder", nil)
	cdc.RegisterConcrete(&MsgOpenMonoListing{}, "market/OpenMonoListing", nil)
	cdc.RegisterConcrete(&MsgCloseListing{}, "market/CloseListing", nil)
	cdc.RegisterConcrete(&MsgOpenMonoOrder{}, "market/OpenMonoOrder", nil)
	cdc.RegisterConcrete(&MsgCancelPendingMonoOrder{}, "market/CancelPendingMonoOrder", nil)
	cdc.RegisterConcrete(&MsgUpdatePendingMonoOrder{}, "market/UpdatePendingMonoOrder", nil)
	cdc.RegisterConcrete(&MsgAcceptMonoOrder{}, "market/AcceptMonoOrder", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMonoListing{},
		&MsgUpdateMonoListing{},
		&MsgDeleteMonoListing{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMonoOrder{},
		&MsgUpdateMonoOrder{},
		&MsgDeleteMonoOrder{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgOpenMonoListing{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCloseListing{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgOpenMonoOrder{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCancelPendingMonoOrder{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdatePendingMonoOrder{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAcceptMonoOrder{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
