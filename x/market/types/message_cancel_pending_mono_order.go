package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCancelPendingMonoOrder = "cancel_pending_mono_order"

var _ sdk.Msg = &MsgCancelPendingMonoOrder{}

func NewMsgCancelPendingMonoOrder(buyer string, orderId string) *MsgCancelPendingMonoOrder {
	return &MsgCancelPendingMonoOrder{
		Buyer:   buyer,
		OrderId: orderId,
	}
}

func (msg *MsgCancelPendingMonoOrder) Route() string {
	return RouterKey
}

func (msg *MsgCancelPendingMonoOrder) Type() string {
	return TypeMsgCancelPendingMonoOrder
}

func (msg *MsgCancelPendingMonoOrder) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgCancelPendingMonoOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCancelPendingMonoOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}
