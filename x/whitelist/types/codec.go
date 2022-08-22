package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateBuyer{}, "whitelist/CreateBuyer", nil)
	cdc.RegisterConcrete(&MsgUpdateBuyer{}, "whitelist/UpdateBuyer", nil)
	cdc.RegisterConcrete(&MsgDeleteBuyer{}, "whitelist/DeleteBuyer", nil)
	cdc.RegisterConcrete(&MsgCreateSeller{}, "whitelist/CreateSeller", nil)
	cdc.RegisterConcrete(&MsgUpdateSeller{}, "whitelist/UpdateSeller", nil)
	cdc.RegisterConcrete(&MsgDeleteSeller{}, "whitelist/DeleteSeller", nil)
	cdc.RegisterConcrete(&MsgCreateVoter{}, "whitelist/CreateVoter", nil)
	cdc.RegisterConcrete(&MsgUpdateVoter{}, "whitelist/UpdateVoter", nil)
	cdc.RegisterConcrete(&MsgDeleteVoter{}, "whitelist/DeleteVoter", nil)
	cdc.RegisterConcrete(&MsgCreateWhitelist{}, "whitelist/CreateWhitelist", nil)
	cdc.RegisterConcrete(&MsgUpdateWhitelist{}, "whitelist/UpdateWhitelist", nil)
	cdc.RegisterConcrete(&MsgDeleteWhitelist{}, "whitelist/DeleteWhitelist", nil)
	cdc.RegisterConcrete(&MsgCreateMonoWhitelist{}, "whitelist/CreateMonoWhitelist", nil)
	cdc.RegisterConcrete(&MsgUpdateMonoWhitelist{}, "whitelist/UpdateMonoWhitelist", nil)
	cdc.RegisterConcrete(&MsgDeleteMonoWhitelist{}, "whitelist/DeleteMonoWhitelist", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBuyer{},
		&MsgUpdateBuyer{},
		&MsgDeleteBuyer{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSeller{},
		&MsgUpdateSeller{},
		&MsgDeleteSeller{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateVoter{},
		&MsgUpdateVoter{},
		&MsgDeleteVoter{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateWhitelist{},
		&MsgUpdateWhitelist{},
		&MsgDeleteWhitelist{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMonoWhitelist{},
		&MsgUpdateMonoWhitelist{},
		&MsgDeleteMonoWhitelist{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
