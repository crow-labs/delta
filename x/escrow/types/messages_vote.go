package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateVote = "create_vote"
	TypeMsgUpdateVote = "update_vote"
	TypeMsgDeleteVote = "delete_vote"
)

var _ sdk.Msg = &MsgCreateVote{}

func NewMsgCreateVote(
	voter string,
	voteId string,
	buyerGuilty bool,
	sellerGuilty bool,
	refundToBuyer sdk.Coins,
	sendToSeller sdk.Coins,
	buyerPunishment string,
	sellerPunishment string,

) *MsgCreateVote {
	return &MsgCreateVote{
		Voter:            voter,
		VoteId:           voteId,
		BuyerGuilty:      buyerGuilty,
		SellerGuilty:     sellerGuilty,
		RefundToBuyer:    refundToBuyer,
		SendToSeller:     sendToSeller,
		BuyerPunishment:  buyerPunishment,
		SellerPunishment: sellerPunishment,
	}
}

func (msg *MsgCreateVote) Route() string {
	return RouterKey
}

func (msg *MsgCreateVote) Type() string {
	return TypeMsgCreateVote
}

func (msg *MsgCreateVote) GetSigners() []sdk.AccAddress {
	voter, err := sdk.AccAddressFromBech32(msg.Voter)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{voter}
}

func (msg *MsgCreateVote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateVote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Voter)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid voter address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateVote{}

func NewMsgUpdateVote(
	voter string,
	voteId string,
	buyerGuilty bool,
	sellerGuilty bool,
	refundToBuyer sdk.Coins,
	sendToSeller sdk.Coins,
	buyerPunishment string,
	sellerPunishment string,

) *MsgUpdateVote {
	return &MsgUpdateVote{
		Voter:            voter,
		VoteId:           voteId,
		BuyerGuilty:      buyerGuilty,
		SellerGuilty:     sellerGuilty,
		RefundToBuyer:    refundToBuyer,
		SendToSeller:     sendToSeller,
		BuyerPunishment:  buyerPunishment,
		SellerPunishment: sellerPunishment,
	}
}

func (msg *MsgUpdateVote) Route() string {
	return RouterKey
}

func (msg *MsgUpdateVote) Type() string {
	return TypeMsgUpdateVote
}

func (msg *MsgUpdateVote) GetSigners() []sdk.AccAddress {
	voter, err := sdk.AccAddressFromBech32(msg.Voter)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{voter}
}

func (msg *MsgUpdateVote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateVote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Voter)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid voter address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteVote{}

func NewMsgDeleteVote(
	voter string,
	voteId string,

) *MsgDeleteVote {
	return &MsgDeleteVote{
		Voter:  voter,
		VoteId: voteId,
	}
}
func (msg *MsgDeleteVote) Route() string {
	return RouterKey
}

func (msg *MsgDeleteVote) Type() string {
	return TypeMsgDeleteVote
}

func (msg *MsgDeleteVote) GetSigners() []sdk.AccAddress {
	voter, err := sdk.AccAddressFromBech32(msg.Voter)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{voter}
}

func (msg *MsgDeleteVote) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteVote) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Voter)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid voter address (%s)", err)
	}
	return nil
}
