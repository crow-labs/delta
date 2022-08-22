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
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
