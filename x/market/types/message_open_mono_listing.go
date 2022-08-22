package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgOpenMonoListing = "open_mono_listing"

var _ sdk.Msg = &MsgOpenMonoListing{}

func NewMsgOpenMonoListing(seller string, whitelistId string, title string, desc string, price sdk.Coins) *MsgOpenMonoListing {
	return &MsgOpenMonoListing{
		Seller:      seller,
		WhitelistId: whitelistId,
		Title:       title,
		Desc:        desc,
		Price:       price,
	}
}

func (msg *MsgOpenMonoListing) Route() string {
	return RouterKey
}

func (msg *MsgOpenMonoListing) Type() string {
	return TypeMsgOpenMonoListing
}

func (msg *MsgOpenMonoListing) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgOpenMonoListing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgOpenMonoListing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}
