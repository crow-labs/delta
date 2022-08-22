package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgJoinBuyers = "join_buyers"

var _ sdk.Msg = &MsgJoinBuyers{}

func NewMsgJoinBuyers(creator string, whitelistId string, name string) *MsgJoinBuyers {
	return &MsgJoinBuyers{
		Creator:     creator,
		WhitelistId: whitelistId,
		Name:        name,
	}
}

func (msg *MsgJoinBuyers) Route() string {
	return RouterKey
}

func (msg *MsgJoinBuyers) Type() string {
	return TypeMsgJoinBuyers
}

func (msg *MsgJoinBuyers) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgJoinBuyers) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgJoinBuyers) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
