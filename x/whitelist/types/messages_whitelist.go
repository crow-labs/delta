package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateWhitelist = "create_whitelist"
	TypeMsgUpdateWhitelist = "update_whitelist"
	TypeMsgDeleteWhitelist = "delete_whitelist"
)

var _ sdk.Msg = &MsgCreateWhitelist{}

func NewMsgCreateWhitelist(creator string, whitelistId string) *MsgCreateWhitelist {
	return &MsgCreateWhitelist{
		Creator:     creator,
		WhitelistId: whitelistId,
	}
}

func (msg *MsgCreateWhitelist) Route() string {
	return RouterKey
}

func (msg *MsgCreateWhitelist) Type() string {
	return TypeMsgCreateWhitelist
}

func (msg *MsgCreateWhitelist) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateWhitelist) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateWhitelist) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateWhitelist{}

func NewMsgUpdateWhitelist(creator string, id uint64, whitelistId string) *MsgUpdateWhitelist {
	return &MsgUpdateWhitelist{
		Id:          id,
		Creator:     creator,
		WhitelistId: whitelistId,
	}
}

func (msg *MsgUpdateWhitelist) Route() string {
	return RouterKey
}

func (msg *MsgUpdateWhitelist) Type() string {
	return TypeMsgUpdateWhitelist
}

func (msg *MsgUpdateWhitelist) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateWhitelist) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateWhitelist) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteWhitelist{}

func NewMsgDeleteWhitelist(creator string, id uint64) *MsgDeleteWhitelist {
	return &MsgDeleteWhitelist{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteWhitelist) Route() string {
	return RouterKey
}

func (msg *MsgDeleteWhitelist) Type() string {
	return TypeMsgDeleteWhitelist
}

func (msg *MsgDeleteWhitelist) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteWhitelist) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteWhitelist) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
