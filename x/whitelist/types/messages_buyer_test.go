package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateBuyer_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateBuyer
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateBuyer{
				Buyer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateBuyer{
				Buyer: sample.AccAddress(),
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

func TestMsgUpdateBuyer_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateBuyer
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateBuyer{
				Buyer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateBuyer{
				Buyer: sample.AccAddress(),
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

func TestMsgDeleteBuyer_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteBuyer
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteBuyer{
				Buyer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteBuyer{
				Buyer: sample.AccAddress(),
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
