package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSellerDisputeRebuttal = "seller_dispute_rebuttal"

var _ sdk.Msg = &MsgSellerDisputeRebuttal{}

func NewMsgSellerDisputeRebuttal(seller string, crowId string, desc string, evidence string) *MsgSellerDisputeRebuttal {
	return &MsgSellerDisputeRebuttal{
		Seller:   seller,
		CrowId:   crowId,
		Desc:     desc,
		Evidence: evidence,
	}
}

func (msg *MsgSellerDisputeRebuttal) Route() string {
	return RouterKey
}

func (msg *MsgSellerDisputeRebuttal) Type() string {
	return TypeMsgSellerDisputeRebuttal
}

func (msg *MsgSellerDisputeRebuttal) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgSellerDisputeRebuttal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSellerDisputeRebuttal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}
