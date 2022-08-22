package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSellerRaiseDispute = "seller_raise_dispute"

var _ sdk.Msg = &MsgSellerRaiseDispute{}

func NewMsgSellerRaiseDispute(seller string, crowId string, title string, desc string, evidence string) *MsgSellerRaiseDispute {
	return &MsgSellerRaiseDispute{
		Seller:   seller,
		CrowId:   crowId,
		Title:    title,
		Desc:     desc,
		Evidence: evidence,
	}
}

func (msg *MsgSellerRaiseDispute) Route() string {
	return RouterKey
}

func (msg *MsgSellerRaiseDispute) Type() string {
	return TypeMsgSellerRaiseDispute
}

func (msg *MsgSellerRaiseDispute) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgSellerRaiseDispute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSellerRaiseDispute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}
