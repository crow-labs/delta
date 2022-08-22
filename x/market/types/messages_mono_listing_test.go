package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateMonoListing_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateMonoListing
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateMonoListing{
				Seller: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateMonoListing{
				Seller: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateMonoListing_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateMonoListing
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateMonoListing{
				Seller: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateMonoListing{
				Seller: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteMonoListing_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteMonoListing
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteMonoListing{
				Seller: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteMonoListing{
				Seller: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
