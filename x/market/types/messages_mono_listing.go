package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateMonoListing = "create_mono_listing"
	TypeMsgUpdateMonoListing = "update_mono_listing"
	TypeMsgDeleteMonoListing = "delete_mono_listing"
)

var _ sdk.Msg = &MsgCreateMonoListing{}

func NewMsgCreateMonoListing(
	seller string,
	listingId string,
	title string,
	desc string,
	price sdk.Coins,
	orderId []string,
	acceptedOrderId string,
	status string,

) *MsgCreateMonoListing {
	return &MsgCreateMonoListing{
		Seller:          seller,
		ListingId:       listingId,
		Title:           title,
		Desc:            desc,
		Price:           price,
		OrderId:         orderId,
		AcceptedOrderId: acceptedOrderId,
		Status:          status,
	}
}

func (msg *MsgCreateMonoListing) Route() string {
	return RouterKey
}

func (msg *MsgCreateMonoListing) Type() string {
	return TypeMsgCreateMonoListing
}

func (msg *MsgCreateMonoListing) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgCreateMonoListing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMonoListing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMonoListing{}

func NewMsgUpdateMonoListing(
	seller string,
	listingId string,
	title string,
	desc string,
	price sdk.Coins,
	orderId []string,
	acceptedOrderId string,
	status string,

) *MsgUpdateMonoListing {
	return &MsgUpdateMonoListing{
		Seller:          seller,
		ListingId:       listingId,
		Title:           title,
		Desc:            desc,
		Price:           price,
		OrderId:         orderId,
		AcceptedOrderId: acceptedOrderId,
		Status:          status,
	}
}

func (msg *MsgUpdateMonoListing) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMonoListing) Type() string {
	return TypeMsgUpdateMonoListing
}

func (msg *MsgUpdateMonoListing) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgUpdateMonoListing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMonoListing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMonoListing{}

func NewMsgDeleteMonoListing(
	seller string,
	listingId string,

) *MsgDeleteMonoListing {
	return &MsgDeleteMonoListing{
		Seller:    seller,
		ListingId: listingId,
	}
}
func (msg *MsgDeleteMonoListing) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMonoListing) Type() string {
	return TypeMsgDeleteMonoListing
}

func (msg *MsgDeleteMonoListing) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgDeleteMonoListing) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMonoListing) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}
