package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateVoter = "create_voter"
	TypeMsgUpdateVoter = "update_voter"
	TypeMsgDeleteVoter = "delete_voter"
)

var _ sdk.Msg = &MsgCreateVoter{}

func NewMsgCreateVoter(
	reviewer string,
	voterId string,
	name string,
	votingPower uint64,
	numVotes uint64,
	voteId []string,
	status string,

) *MsgCreateVoter {
	return &MsgCreateVoter{
		Reviewer:    reviewer,
		VoterId:     voterId,
		Name:        name,
		VotingPower: votingPower,
		NumVotes:    numVotes,
		VoteId:      voteId,
		Status:      status,
	}
}

func (msg *MsgCreateVoter) Route() string {
	return RouterKey
}

func (msg *MsgCreateVoter) Type() string {
	return TypeMsgCreateVoter
}

func (msg *MsgCreateVoter) GetSigners() []sdk.AccAddress {
	reviewer, err := sdk.AccAddressFromBech32(msg.Reviewer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{reviewer}
}

func (msg *MsgCreateVoter) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateVoter) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Reviewer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid reviewer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateVoter{}

func NewMsgUpdateVoter(
	reviewer string,
	voterId string,
	name string,
	votingPower uint64,
	numVotes uint64,
	voteId []string,
	status string,

) *MsgUpdateVoter {
	return &MsgUpdateVoter{
		Reviewer:    reviewer,
		VoterId:     voterId,
		Name:        name,
		VotingPower: votingPower,
		NumVotes:    numVotes,
		VoteId:      voteId,
		Status:      status,
	}
}

func (msg *MsgUpdateVoter) Route() string {
	return RouterKey
}

func (msg *MsgUpdateVoter) Type() string {
	return TypeMsgUpdateVoter
}

func (msg *MsgUpdateVoter) GetSigners() []sdk.AccAddress {
	reviewer, err := sdk.AccAddressFromBech32(msg.Reviewer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{reviewer}
}

func (msg *MsgUpdateVoter) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateVoter) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Reviewer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid reviewer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteVoter{}

func NewMsgDeleteVoter(
	reviewer string,
	voterId string,

) *MsgDeleteVoter {
	return &MsgDeleteVoter{
		Reviewer: reviewer,
		VoterId:  voterId,
	}
}
func (msg *MsgDeleteVoter) Route() string {
	return RouterKey
}

func (msg *MsgDeleteVoter) Type() string {
	return TypeMsgDeleteVoter
}

func (msg *MsgDeleteVoter) GetSigners() []sdk.AccAddress {
	reviewer, err := sdk.AccAddressFromBech32(msg.Reviewer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{reviewer}
}

func (msg *MsgDeleteVoter) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteVoter) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Reviewer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid reviewer address (%s)", err)
	}
	return nil
}
