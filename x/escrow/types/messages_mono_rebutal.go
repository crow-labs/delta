package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateMonoRebutal = "create_mono_rebutal"
	TypeMsgUpdateMonoRebutal = "update_mono_rebutal"
	TypeMsgDeleteMonoRebutal = "delete_mono_rebutal"
)

var _ sdk.Msg = &MsgCreateMonoRebutal{}

func NewMsgCreateMonoRebutal(
	defendant string,
	rebuttalId string,
	desc string,
	evidence string,

) *MsgCreateMonoRebutal {
	return &MsgCreateMonoRebutal{
		Defendant:  defendant,
		RebuttalId: rebuttalId,
		Desc:       desc,
		Evidence:   evidence,
	}
}

func (msg *MsgCreateMonoRebutal) Route() string {
	return RouterKey
}

func (msg *MsgCreateMonoRebutal) Type() string {
	return TypeMsgCreateMonoRebutal
}

func (msg *MsgCreateMonoRebutal) GetSigners() []sdk.AccAddress {
	defendant, err := sdk.AccAddressFromBech32(msg.Defendant)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{defendant}
}

func (msg *MsgCreateMonoRebutal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMonoRebutal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Defendant)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid defendant address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMonoRebutal{}

func NewMsgUpdateMonoRebutal(
	defendant string,
	rebuttalId string,
	desc string,
	evidence string,

) *MsgUpdateMonoRebutal {
	return &MsgUpdateMonoRebutal{
		Defendant:  defendant,
		RebuttalId: rebuttalId,
		Desc:       desc,
		Evidence:   evidence,
	}
}

func (msg *MsgUpdateMonoRebutal) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMonoRebutal) Type() string {
	return TypeMsgUpdateMonoRebutal
}

func (msg *MsgUpdateMonoRebutal) GetSigners() []sdk.AccAddress {
	defendant, err := sdk.AccAddressFromBech32(msg.Defendant)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{defendant}
}

func (msg *MsgUpdateMonoRebutal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMonoRebutal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Defendant)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid defendant address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMonoRebutal{}

func NewMsgDeleteMonoRebutal(
	defendant string,
	rebuttalId string,

) *MsgDeleteMonoRebutal {
	return &MsgDeleteMonoRebutal{
		Defendant:  defendant,
		RebuttalId: rebuttalId,
	}
}
func (msg *MsgDeleteMonoRebutal) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMonoRebutal) Type() string {
	return TypeMsgDeleteMonoRebutal
}

func (msg *MsgDeleteMonoRebutal) GetSigners() []sdk.AccAddress {
	defendant, err := sdk.AccAddressFromBech32(msg.Defendant)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{defendant}
}

func (msg *MsgDeleteMonoRebutal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMonoRebutal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Defendant)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid defendant address (%s)", err)
	}
	return nil
}
