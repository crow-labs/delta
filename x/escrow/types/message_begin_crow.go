package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBeginCrow = "begin_crow"

var _ sdk.Msg = &MsgBeginCrow{}

func NewMsgBeginCrow(seller string, crowId string, collateral sdk.Coins) *MsgBeginCrow {
	return &MsgBeginCrow{
		Seller:     seller,
		CrowId:     crowId,
		Collateral: collateral,
	}
}

func (msg *MsgBeginCrow) Route() string {
	return RouterKey
}

func (msg *MsgBeginCrow) Type() string {
	return TypeMsgBeginCrow
}

func (msg *MsgBeginCrow) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgBeginCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBeginCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}
