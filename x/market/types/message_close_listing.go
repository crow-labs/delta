package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCloseListing = "close_listing"

var _ sdk.Msg = &MsgCloseListing{}

func NewMsgCloseListing(seller string, listingId string) *MsgCloseListing {
	return &MsgCloseListing{
		Seller:    seller,
		ListingId: listingId,
	}
}

func (msg *MsgCloseListing) Route() string {
	return RouterKey
}

func (msg *MsgCloseListing) Type() string {
	return TypeMsgCloseListing
}

func (msg *MsgCloseListing) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgCloseListing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCloseListing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}
