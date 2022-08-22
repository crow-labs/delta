package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateMonoCrow = "create_mono_crow"
	TypeMsgUpdateMonoCrow = "update_mono_crow"
	TypeMsgDeleteMonoCrow = "delete_mono_crow"
)

var _ sdk.Msg = &MsgCreateMonoCrow{}

func NewMsgCreateMonoCrow(
	seller string,
	crowId string,
	whitelistId string,
	sellerCrowId string,
	buyerCrowId string,
	disputeId []string,
	timeout []string,
	status string,

) *MsgCreateMonoCrow {
	return &MsgCreateMonoCrow{
		Seller:       seller,
		CrowId:       crowId,
		WhitelistId:  whitelistId,
		SellerCrowId: sellerCrowId,
		BuyerCrowId:  buyerCrowId,
		DisputeId:    disputeId,
		Timeout:      timeout,
		Status:       status,
	}
}

func (msg *MsgCreateMonoCrow) Route() string {
	return RouterKey
}

func (msg *MsgCreateMonoCrow) Type() string {
	return TypeMsgCreateMonoCrow
}

func (msg *MsgCreateMonoCrow) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgCreateMonoCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMonoCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMonoCrow{}

func NewMsgUpdateMonoCrow(
	seller string,
	crowId string,
	whitelistId string,
	sellerCrowId string,
	buyerCrowId string,
	disputeId []string,
	timeout []string,
	status string,

) *MsgUpdateMonoCrow {
	return &MsgUpdateMonoCrow{
		Seller:       seller,
		CrowId:       crowId,
		WhitelistId:  whitelistId,
		SellerCrowId: sellerCrowId,
		BuyerCrowId:  buyerCrowId,
		DisputeId:    disputeId,
		Timeout:      timeout,
		Status:       status,
	}
}

func (msg *MsgUpdateMonoCrow) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMonoCrow) Type() string {
	return TypeMsgUpdateMonoCrow
}

func (msg *MsgUpdateMonoCrow) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgUpdateMonoCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMonoCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMonoCrow{}

func NewMsgDeleteMonoCrow(
	seller string,
	crowId string,

) *MsgDeleteMonoCrow {
	return &MsgDeleteMonoCrow{
		Seller: seller,
		CrowId: crowId,
	}
}
func (msg *MsgDeleteMonoCrow) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMonoCrow) Type() string {
	return TypeMsgDeleteMonoCrow
}

func (msg *MsgDeleteMonoCrow) GetSigners() []sdk.AccAddress {
	seller, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{seller}
}

func (msg *MsgDeleteMonoCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMonoCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Seller)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid seller address (%s)", err)
	}
	return nil
}
