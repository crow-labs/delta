package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUpdatePendingMonoOrder = "update_pending_mono_order"

var _ sdk.Msg = &MsgUpdatePendingMonoOrder{}

func NewMsgUpdatePendingMonoOrder(buyer string, orderId string, price sdk.Coins, timeeout string) *MsgUpdatePendingMonoOrder {
	return &MsgUpdatePendingMonoOrder{
		Buyer:    buyer,
		OrderId:  orderId,
		Price:    price,
		Timeeout: timeeout,
	}
}

func (msg *MsgUpdatePendingMonoOrder) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePendingMonoOrder) Type() string {
	return TypeMsgUpdatePendingMonoOrder
}

func (msg *MsgUpdatePendingMonoOrder) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgUpdatePendingMonoOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePendingMonoOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}
