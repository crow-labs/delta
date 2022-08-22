package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateNewWhitelist = "create_new_whitelist"

var _ sdk.Msg = &MsgCreateNewWhitelist{}

func NewMsgCreateNewWhitelist(creator string) *MsgCreateNewWhitelist {
	return &MsgCreateNewWhitelist{
		Creator: creator,
	}
}

func (msg *MsgCreateNewWhitelist) Route() string {
	return RouterKey
}

func (msg *MsgCreateNewWhitelist) Type() string {
	return TypeMsgCreateNewWhitelist
}

func (msg *MsgCreateNewWhitelist) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateNewWhitelist) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateNewWhitelist) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
