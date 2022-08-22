package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBuyerDisputeRebuttal = "buyer_dispute_rebuttal"

var _ sdk.Msg = &MsgBuyerDisputeRebuttal{}

func NewMsgBuyerDisputeRebuttal(buyer string, crowId string, desc string, evidence string) *MsgBuyerDisputeRebuttal {
	return &MsgBuyerDisputeRebuttal{
		Buyer:    buyer,
		CrowId:   crowId,
		Desc:     desc,
		Evidence: evidence,
	}
}

func (msg *MsgBuyerDisputeRebuttal) Route() string {
	return RouterKey
}

func (msg *MsgBuyerDisputeRebuttal) Type() string {
	return TypeMsgBuyerDisputeRebuttal
}

func (msg *MsgBuyerDisputeRebuttal) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgBuyerDisputeRebuttal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyerDisputeRebuttal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}
