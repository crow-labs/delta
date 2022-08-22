package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgVoteOnDispute = "vote_on_dispute"

var _ sdk.Msg = &MsgVoteOnDispute{}

func NewMsgVoteOnDispute(voter string, disputeId string, buyerGuilty bool, sellerGuilty bool, refundToBuyer sdk.Coins, sendToSeller sdk.Coins, buyerPunishment string, sellerPunishment string) *MsgVoteOnDispute {
	return &MsgVoteOnDispute{
		Voter:            voter,
		DisputeId:        disputeId,
		BuyerGuilty:      buyerGuilty,
		SellerGuilty:     sellerGuilty,
		RefundToBuyer:    refundToBuyer,
		SendToSeller:     sendToSeller,
		BuyerPunishment:  buyerPunishment,
		SellerPunishment: sellerPunishment,
	}
}

func (msg *MsgVoteOnDispute) Route() string {
	return RouterKey
}

func (msg *MsgVoteOnDispute) Type() string {
	return TypeMsgVoteOnDispute
}

func (msg *MsgVoteOnDispute) GetSigners() []sdk.AccAddress {
	voter, err := sdk.AccAddressFromBech32(msg.Voter)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{voter}
}

func (msg *MsgVoteOnDispute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgVoteOnDispute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Voter)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid voter address (%s)", err)
	}
	return nil
}
