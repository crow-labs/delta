package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateMonoOrder = "create_mono_order"
	TypeMsgUpdateMonoOrder = "update_mono_order"
	TypeMsgDeleteMonoOrder = "delete_mono_order"
)

var _ sdk.Msg = &MsgCreateMonoOrder{}

func NewMsgCreateMonoOrder(
	buyer string,
	orderId string,
	price sdk.Coins,
	timeout string,
	status string,

) *MsgCreateMonoOrder {
	return &MsgCreateMonoOrder{
		Buyer:   buyer,
		OrderId: orderId,
		Price:   price,
		Timeout: timeout,
		Status:  status,
	}
}

func (msg *MsgCreateMonoOrder) Route() string {
	return RouterKey
}

func (msg *MsgCreateMonoOrder) Type() string {
	return TypeMsgCreateMonoOrder
}

func (msg *MsgCreateMonoOrder) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgCreateMonoOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMonoOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMonoOrder{}

func NewMsgUpdateMonoOrder(
	buyer string,
	orderId string,
	price sdk.Coins,
	timeout string,
	status string,

) *MsgUpdateMonoOrder {
	return &MsgUpdateMonoOrder{
		Buyer:   buyer,
		OrderId: orderId,
		Price:   price,
		Timeout: timeout,
		Status:  status,
	}
}

func (msg *MsgUpdateMonoOrder) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMonoOrder) Type() string {
	return TypeMsgUpdateMonoOrder
}

func (msg *MsgUpdateMonoOrder) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgUpdateMonoOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMonoOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMonoOrder{}

func NewMsgDeleteMonoOrder(
	buyer string,
	orderId string,

) *MsgDeleteMonoOrder {
	return &MsgDeleteMonoOrder{
		Buyer:   buyer,
		OrderId: orderId,
	}
}
func (msg *MsgDeleteMonoOrder) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMonoOrder) Type() string {
	return TypeMsgDeleteMonoOrder
}

func (msg *MsgDeleteMonoOrder) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgDeleteMonoOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMonoOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}
