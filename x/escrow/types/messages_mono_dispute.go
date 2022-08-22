package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateMonoDispute = "create_mono_dispute"
	TypeMsgUpdateMonoDispute = "update_mono_dispute"
	TypeMsgDeleteMonoDispute = "delete_mono_dispute"
)

var _ sdk.Msg = &MsgCreateMonoDispute{}

func NewMsgCreateMonoDispute(
	plaintiff string,
	disputeId string,
	title string,
	desc string,
	evidence string,

) *MsgCreateMonoDispute {
	return &MsgCreateMonoDispute{
		Plaintiff: plaintiff,
		DisputeId: disputeId,
		Title:     title,
		Desc:      desc,
		Evidence:  evidence,
	}
}

func (msg *MsgCreateMonoDispute) Route() string {
	return RouterKey
}

func (msg *MsgCreateMonoDispute) Type() string {
	return TypeMsgCreateMonoDispute
}

func (msg *MsgCreateMonoDispute) GetSigners() []sdk.AccAddress {
	plaintiff, err := sdk.AccAddressFromBech32(msg.Plaintiff)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{plaintiff}
}

func (msg *MsgCreateMonoDispute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMonoDispute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Plaintiff)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid plaintiff address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMonoDispute{}

func NewMsgUpdateMonoDispute(
	plaintiff string,
	disputeId string,
	title string,
	desc string,
	evidence string,

) *MsgUpdateMonoDispute {
	return &MsgUpdateMonoDispute{
		Plaintiff: plaintiff,
		DisputeId: disputeId,
		Title:     title,
		Desc:      desc,
		Evidence:  evidence,
	}
}

func (msg *MsgUpdateMonoDispute) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMonoDispute) Type() string {
	return TypeMsgUpdateMonoDispute
}

func (msg *MsgUpdateMonoDispute) GetSigners() []sdk.AccAddress {
	plaintiff, err := sdk.AccAddressFromBech32(msg.Plaintiff)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{plaintiff}
}

func (msg *MsgUpdateMonoDispute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMonoDispute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Plaintiff)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid plaintiff address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMonoDispute{}

func NewMsgDeleteMonoDispute(
	plaintiff string,
	disputeId string,

) *MsgDeleteMonoDispute {
	return &MsgDeleteMonoDispute{
		Plaintiff: plaintiff,
		DisputeId: disputeId,
	}
}
func (msg *MsgDeleteMonoDispute) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMonoDispute) Type() string {
	return TypeMsgDeleteMonoDispute
}

func (msg *MsgDeleteMonoDispute) GetSigners() []sdk.AccAddress {
	plaintiff, err := sdk.AccAddressFromBech32(msg.Plaintiff)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{plaintiff}
}

func (msg *MsgDeleteMonoDispute) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMonoDispute) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Plaintiff)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid plaintiff address (%s)", err)
	}
	return nil
}
