package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgReleaseCrow = "release_crow"

var _ sdk.Msg = &MsgReleaseCrow{}

func NewMsgReleaseCrow(buyer string, crowId string) *MsgReleaseCrow {
	return &MsgReleaseCrow{
		Buyer:  buyer,
		CrowId: crowId,
	}
}

func (msg *MsgReleaseCrow) Route() string {
	return RouterKey
}

func (msg *MsgReleaseCrow) Type() string {
	return TypeMsgReleaseCrow
}

func (msg *MsgReleaseCrow) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgReleaseCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgReleaseCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}
