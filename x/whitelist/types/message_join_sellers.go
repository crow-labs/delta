package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgJoinSellers = "join_sellers"

var _ sdk.Msg = &MsgJoinSellers{}

func NewMsgJoinSellers(creator string, whitelistId string, name string, desc string, contactInfo string) *MsgJoinSellers {
	return &MsgJoinSellers{
		Creator:     creator,
		WhitelistId: whitelistId,
		Name:        name,
		Desc:        desc,
		ContactInfo: contactInfo,
	}
}

func (msg *MsgJoinSellers) Route() string {
	return RouterKey
}

func (msg *MsgJoinSellers) Type() string {
	return TypeMsgJoinSellers
}

func (msg *MsgJoinSellers) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgJoinSellers) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgJoinSellers) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
