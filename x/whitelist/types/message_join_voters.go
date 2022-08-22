package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgJoinVoters = "join_voters"

var _ sdk.Msg = &MsgJoinVoters{}

func NewMsgJoinVoters(creator string, whitelistId string, name string) *MsgJoinVoters {
	return &MsgJoinVoters{
		Creator:     creator,
		WhitelistId: whitelistId,
		Name:        name,
	}
}

func (msg *MsgJoinVoters) Route() string {
	return RouterKey
}

func (msg *MsgJoinVoters) Type() string {
	return TypeMsgJoinVoters
}

func (msg *MsgJoinVoters) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgJoinVoters) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgJoinVoters) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
