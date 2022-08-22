package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgJoinCrow = "join_crow"

var _ sdk.Msg = &MsgJoinCrow{}

func NewMsgJoinCrow(buyer string, crowId string, deposit sdk.Coins, collateral sdk.Coins) *MsgJoinCrow {
	return &MsgJoinCrow{
		Buyer:      buyer,
		CrowId:     crowId,
		Deposit:    deposit,
		Collateral: collateral,
	}
}

func (msg *MsgJoinCrow) Route() string {
	return RouterKey
}

func (msg *MsgJoinCrow) Type() string {
	return TypeMsgJoinCrow
}

func (msg *MsgJoinCrow) GetSigners() []sdk.AccAddress {
	buyer, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{buyer}
}

func (msg *MsgJoinCrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgJoinCrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid buyer address (%s)", err)
	}
	return nil
}
