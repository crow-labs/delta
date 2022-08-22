package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBuyerMonoCrow = "create_buyer_mono_crow"
	TypeMsgUpdateBuyerMonoCrow = "update_buyer_mono_crow"
	TypeMsgDeleteBuyerMonoCrow = "delete_buyer_mono_crow"
)

var _ sdk.Msg = &MsgCreateBuyerMonoCrow{}

func NewMsgCreateBuyerMonoCrow(
	buyer string,
	buyerCrowId string,
	deposit sdk.Coins,
	collateral sdk.Coins,
	status string,

) *MsgCreateBuyerMonoCrow {
	return &MsgCreateBuyerMonoCrow{
		Buyer:       buyer,
		BuyerCrowId: buyerCrowId,
		Deposit:     deposit,
		Collateral:  collateral,
		Status:      status,
	}
}

func (msg *MsgCreateBuyerMonoCrow) Route() string {
	return RouterKey
}

func (msg *MsgCreateBuyerMonoCrow) Type() string {
	return TypeMsgCreateBuyerMonoCrow
}

func (msg *MsgCreateBuyerMonoCrow) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgCreateBuyerMonoCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBuyerMonoCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBuyerMonoCrow{}

func NewMsgUpdateBuyerMonoCrow(
	buyer string,
	buyerCrowId string,
	deposit sdk.Coins,
	collateral sdk.Coins,
	status string,

) *MsgUpdateBuyerMonoCrow {
	return &MsgUpdateBuyerMonoCrow{
		Buyer:       buyer,
		BuyerCrowId: buyerCrowId,
		Deposit:     deposit,
		Collateral:  collateral,
		Status:      status,
	}
}

func (msg *MsgUpdateBuyerMonoCrow) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBuyerMonoCrow) Type() string {
	return TypeMsgUpdateBuyerMonoCrow
}

func (msg *MsgUpdateBuyerMonoCrow) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgUpdateBuyerMonoCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBuyerMonoCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBuyerMonoCrow{}

func NewMsgDeleteBuyerMonoCrow(
	buyer string,
	buyerCrowId string,

) *MsgDeleteBuyerMonoCrow {
	return &MsgDeleteBuyerMonoCrow{
		Buyer:       buyer,
		BuyerCrowId: buyerCrowId,
	}
}
func (msg *MsgDeleteBuyerMonoCrow) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBuyerMonoCrow) Type() string {
	return TypeMsgDeleteBuyerMonoCrow
}

func (msg *MsgDeleteBuyerMonoCrow) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgDeleteBuyerMonoCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBuyerMonoCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}
