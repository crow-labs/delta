package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateMonoWhitelist = "create_mono_whitelist"
	TypeMsgUpdateMonoWhitelist = "update_mono_whitelist"
	TypeMsgDeleteMonoWhitelist = "delete_mono_whitelist"
)

var _ sdk.Msg = &MsgCreateMonoWhitelist{}

func NewMsgCreateMonoWhitelist(
	governor string,
	whitelistId string,
	buyer *Buyer,
	seller *Seller,
	voter *Voter,

) *MsgCreateMonoWhitelist {
	return &MsgCreateMonoWhitelist{
		Governor:    governor,
		WhitelistId: whitelistId,
		Buyer:       buyer,
		Seller:      seller,
		Voter:       voter,
	}
}

func (msg *MsgCreateMonoWhitelist) Route() string {
	return RouterKey
}

func (msg *MsgCreateMonoWhitelist) Type() string {
	return TypeMsgCreateMonoWhitelist
}

func (msg *MsgCreateMonoWhitelist) GetSigners() []sdk.AccAddress {
	governor, err := sdk.AccAddressFromBech32(msg.Governor)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{governor}
}

func (msg *MsgCreateMonoWhitelist) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMonoWhitelist) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Governor)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid governor address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMonoWhitelist{}

func NewMsgUpdateMonoWhitelist(
	governor string,
	whitelistId string,
	buyer *Buyer,
	seller *Seller,
	voter *Voter,

) *MsgUpdateMonoWhitelist {
	return &MsgUpdateMonoWhitelist{
		Governor:    governor,
		WhitelistId: whitelistId,
		Buyer:       buyer,
		Seller:      seller,
		Voter:       voter,
	}
}

func (msg *MsgUpdateMonoWhitelist) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMonoWhitelist) Type() string {
	return TypeMsgUpdateMonoWhitelist
}

func (msg *MsgUpdateMonoWhitelist) GetSigners() []sdk.AccAddress {
	governor, err := sdk.AccAddressFromBech32(msg.Governor)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{governor}
}

func (msg *MsgUpdateMonoWhitelist) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMonoWhitelist) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Governor)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid governor address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMonoWhitelist{}

func NewMsgDeleteMonoWhitelist(
	governor string,
	whitelistId string,

) *MsgDeleteMonoWhitelist {
	return &MsgDeleteMonoWhitelist{
		Governor:    governor,
		WhitelistId: whitelistId,
	}
}
func (msg *MsgDeleteMonoWhitelist) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMonoWhitelist) Type() string {
	return TypeMsgDeleteMonoWhitelist
}

func (msg *MsgDeleteMonoWhitelist) GetSigners() []sdk.AccAddress {
	governor, err := sdk.AccAddressFromBech32(msg.Governor)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{governor}
}

func (msg *MsgDeleteMonoWhitelist) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMonoWhitelist) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Governor)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid governor address (%s)", err)
	}
	return nil
}
