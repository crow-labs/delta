package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBuyer = "create_buyer"
	TypeMsgUpdateBuyer = "update_buyer"
	TypeMsgDeleteBuyer = "delete_buyer"
)

var _ sdk.Msg = &MsgCreateBuyer{}

func NewMsgCreateBuyer(
	buyer string,
	buyerId string,
	name string,
	numOrder uint64,
	orderId []string,
	status string,

) *MsgCreateBuyer {
	return &MsgCreateBuyer{
		Buyer:    buyer,
		BuyerId:  buyerId,
		Name:     name,
		NumOrder: numOrder,
		OrderId:  orderId,
		Status:   status,
	}
}

func (msg *MsgCreateBuyer) Route() string {
	return RouterKey
}

func (msg *MsgCreateBuyer) Type() string {
	return TypeMsgCreateBuyer
}

func (msg *MsgCreateBuyer) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgCreateBuyer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBuyer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBuyer{}

func NewMsgUpdateBuyer(
	buyer string,
	buyerId string,
	name string,
	numOrder uint64,
	orderId []string,
	status string,

) *MsgUpdateBuyer {
	return &MsgUpdateBuyer{
		Buyer:    buyer,
		BuyerId:  buyerId,
		Name:     name,
		NumOrder: numOrder,
		OrderId:  orderId,
		Status:   status,
	}
}

func (msg *MsgUpdateBuyer) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBuyer) Type() string {
	return TypeMsgUpdateBuyer
}

func (msg *MsgUpdateBuyer) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgUpdateBuyer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBuyer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBuyer{}

func NewMsgDeleteBuyer(
	buyer string,
	buyerId string,

) *MsgDeleteBuyer {
	return &MsgDeleteBuyer{
		Buyer:   buyer,
		BuyerId: buyerId,
	}
}
func (msg *MsgDeleteBuyer) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBuyer) Type() string {
	return TypeMsgDeleteBuyer
}

func (msg *MsgDeleteBuyer) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgDeleteBuyer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBuyer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}
