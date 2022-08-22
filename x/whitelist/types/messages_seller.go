package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateSeller = "create_seller"
	TypeMsgUpdateSeller = "update_seller"
	TypeMsgDeleteSeller = "delete_seller"
)

var _ sdk.Msg = &MsgCreateSeller{}

func NewMsgCreateSeller(
	producer string,
	sellerId string,
	name string,
	desc string,
	contactInfo string,
	numListing uint64,
	listingId []string,
	status string,

) *MsgCreateSeller {
	return &MsgCreateSeller{
		Producer:    producer,
		SellerId:    sellerId,
		Name:        name,
		Desc:        desc,
		ContactInfo: contactInfo,
		NumListing:  numListing,
		ListingId:   listingId,
		Status:      status,
	}
}

func (msg *MsgCreateSeller) Route() string {
	return RouterKey
}

func (msg *MsgCreateSeller) Type() string {
	return TypeMsgCreateSeller
}

func (msg *MsgCreateSeller) GetSigners() []sdk.AccAddress {
	producer, err := sdk.AccAddressFromBech32(msg.Producer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{producer}
}

func (msg *MsgCreateSeller) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSeller) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Producer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid producer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSeller{}

func NewMsgUpdateSeller(
	producer string,
	sellerId string,
	name string,
	desc string,
	contactInfo string,
	numListing uint64,
	listingId []string,
	status string,

) *MsgUpdateSeller {
	return &MsgUpdateSeller{
		Producer:    producer,
		SellerId:    sellerId,
		Name:        name,
		Desc:        desc,
		ContactInfo: contactInfo,
		NumListing:  numListing,
		ListingId:   listingId,
		Status:      status,
	}
}

func (msg *MsgUpdateSeller) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSeller) Type() string {
	return TypeMsgUpdateSeller
}

func (msg *MsgUpdateSeller) GetSigners() []sdk.AccAddress {
	producer, err := sdk.AccAddressFromBech32(msg.Producer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{producer}
}

func (msg *MsgUpdateSeller) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSeller) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Producer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid producer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSeller{}

func NewMsgDeleteSeller(
	producer string,
	sellerId string,

) *MsgDeleteSeller {
	return &MsgDeleteSeller{
		Producer: producer,
		SellerId: sellerId,
	}
}
func (msg *MsgDeleteSeller) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSeller) Type() string {
	return TypeMsgDeleteSeller
}

func (msg *MsgDeleteSeller) GetSigners() []sdk.AccAddress {
	producer, err := sdk.AccAddressFromBech32(msg.Producer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{producer}
}

func (msg *MsgDeleteSeller) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSeller) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Producer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid producer address (%s)", err)
	}
	return nil
}
