package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateVerdict = "create_verdict"
	TypeMsgUpdateVerdict = "update_verdict"
	TypeMsgDeleteVerdict = "delete_verdict"
)

var _ sdk.Msg = &MsgCreateVerdict{}

func NewMsgCreateVerdict(
	creator string,
	verdictId string,
	voteIds []string,
	resultingVote *Vote,

) *MsgCreateVerdict {
	return &MsgCreateVerdict{
		Creator:       creator,
		VerdictId:     verdictId,
		VoteIds:       voteIds,
		ResultingVote: resultingVote,
	}
}

func (msg *MsgCreateVerdict) Route() string {
	return RouterKey
}

func (msg *MsgCreateVerdict) Type() string {
	return TypeMsgCreateVerdict
}

func (msg *MsgCreateVerdict) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateVerdict) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateVerdict) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateVerdict{}

func NewMsgUpdateVerdict(
	creator string,
	verdictId string,
	voteIds []string,
	resultingVote *Vote,

) *MsgUpdateVerdict {
	return &MsgUpdateVerdict{
		Creator:       creator,
		VerdictId:     verdictId,
		VoteIds:       voteIds,
		ResultingVote: resultingVote,
	}
}

func (msg *MsgUpdateVerdict) Route() string {
	return RouterKey
}

func (msg *MsgUpdateVerdict) Type() string {
	return TypeMsgUpdateVerdict
}

func (msg *MsgUpdateVerdict) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateVerdict) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateVerdict) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteVerdict{}

func NewMsgDeleteVerdict(
	creator string,
	verdictId string,

) *MsgDeleteVerdict {
	return &MsgDeleteVerdict{
		Creator:   creator,
		VerdictId: verdictId,
	}
}
func (msg *MsgDeleteVerdict) Route() string {
	return RouterKey
}

func (msg *MsgDeleteVerdict) Type() string {
	return TypeMsgDeleteVerdict
}

func (msg *MsgDeleteVerdict) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteVerdict) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteVerdict) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
