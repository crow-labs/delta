package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAcceptMonoOrder = "accept_mono_order"

var _ sdk.Msg = &MsgAcceptMonoOrder{}

func NewMsgAcceptMonoOrder(seller string, orderId string) *MsgAcceptMonoOrder {
	return &MsgAcceptMonoOrder{
		Seller:  seller,
		OrderId: orderId,
	}
}

func (msg *MsgAcceptMonoOrder) Route() string {
	return RouterKey
}

func (msg *MsgAcceptMonoOrder) Type() string {
	return TypeMsgAcceptMonoOrder
}

func (msg *MsgAcceptMonoOrder) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgAcceptMonoOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAcceptMonoOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}
