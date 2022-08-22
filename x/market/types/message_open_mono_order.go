package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgOpenMonoOrder = "open_mono_order"

var _ sdk.Msg = &MsgOpenMonoOrder{}

func NewMsgOpenMonoOrder(buyer string, listingId string, price sdk.Coins, timeout string) *MsgOpenMonoOrder {
	return &MsgOpenMonoOrder{
		Buyer:     buyer,
		ListingId: listingId,
		Price:     price,
		Timeout:   timeout,
	}
}

func (msg *MsgOpenMonoOrder) Route() string {
	return RouterKey
}

func (msg *MsgOpenMonoOrder) Type() string {
	return TypeMsgOpenMonoOrder
}

func (msg *MsgOpenMonoOrder) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgOpenMonoOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgOpenMonoOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}
