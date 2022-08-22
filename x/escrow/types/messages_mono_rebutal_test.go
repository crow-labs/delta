package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateMonoRebutal_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateMonoRebutal
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateMonoRebutal{
				Defendant: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateMonoRebutal{
				Defendant: sample.AccAddress(),
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

func TestMsgUpdateMonoRebutal_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateMonoRebutal
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateMonoRebutal{
				Defendant: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateMonoRebutal{
				Defendant: sample.AccAddress(),
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

func TestMsgDeleteMonoRebutal_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteMonoRebutal
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteMonoRebutal{
				Defendant: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteMonoRebutal{
				Defendant: sample.AccAddress(),
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
