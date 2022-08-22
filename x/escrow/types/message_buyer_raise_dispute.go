package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBuyerRaiseDispute = "buyer_raise_dispute"

var _ sdk.Msg = &MsgBuyerRaiseDispute{}

func NewMsgBuyerRaiseDispute(buyer string, crowId string, title string, desc string, evidence string) *MsgBuyerRaiseDispute {
	return &MsgBuyerRaiseDispute{
		Buyer:    buyer,
		CrowId:   crowId,
		Title:    title,
		Desc:     desc,
		Evidence: evidence,
	}
}

func (msg *MsgBuyerRaiseDispute) Route() string {
	return RouterKey
}

func (msg *MsgBuyerRaiseDispute) Type() string {
	return TypeMsgBuyerRaiseDispute
}

func (msg *MsgBuyerRaiseDispute) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgBuyerRaiseDispute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyerRaiseDispute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}
