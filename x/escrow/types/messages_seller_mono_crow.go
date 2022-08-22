package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateSellerMonoCrow = "create_seller_mono_crow"
	TypeMsgUpdateSellerMonoCrow = "update_seller_mono_crow"
	TypeMsgDeleteSellerMonoCrow = "delete_seller_mono_crow"
)

var _ sdk.Msg = &MsgCreateSellerMonoCrow{}

func NewMsgCreateSellerMonoCrow(
	seller string,
	sellerCrowId string,
	collateral sdk.Coins,
	status string,

) *MsgCreateSellerMonoCrow {
	return &MsgCreateSellerMonoCrow{
		Seller:       seller,
		SellerCrowId: sellerCrowId,
		Collateral:   collateral,
		Status:       status,
	}
}

func (msg *MsgCreateSellerMonoCrow) Route() string {
	return RouterKey
}

func (msg *MsgCreateSellerMonoCrow) Type() string {
	return TypeMsgCreateSellerMonoCrow
}

func (msg *MsgCreateSellerMonoCrow) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgCreateSellerMonoCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSellerMonoCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSellerMonoCrow{}

func NewMsgUpdateSellerMonoCrow(
	seller string,
	sellerCrowId string,
	collateral sdk.Coins,
	status string,

) *MsgUpdateSellerMonoCrow {
	return &MsgUpdateSellerMonoCrow{
		Seller:       seller,
		SellerCrowId: sellerCrowId,
		Collateral:   collateral,
		Status:       status,
	}
}

func (msg *MsgUpdateSellerMonoCrow) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSellerMonoCrow) Type() string {
	return TypeMsgUpdateSellerMonoCrow
}

func (msg *MsgUpdateSellerMonoCrow) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgUpdateSellerMonoCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSellerMonoCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSellerMonoCrow{}

func NewMsgDeleteSellerMonoCrow(
	seller string,
	sellerCrowId string,

) *MsgDeleteSellerMonoCrow {
	return &MsgDeleteSellerMonoCrow{
		Seller:       seller,
		SellerCrowId: sellerCrowId,
	}
}
func (msg *MsgDeleteSellerMonoCrow) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSellerMonoCrow) Type() string {
	return TypeMsgDeleteSellerMonoCrow
}

func (msg *MsgDeleteSellerMonoCrow) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgDeleteSellerMonoCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSellerMonoCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}
