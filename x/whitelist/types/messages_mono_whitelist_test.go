package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateMonoWhitelist_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateMonoWhitelist
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateMonoWhitelist{
				Governor: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateMonoWhitelist{
				Governor: sample.AccAddress(),
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

func TestMsgUpdateMonoWhitelist_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateMonoWhitelist
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateMonoWhitelist{
				Governor: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateMonoWhitelist{
				Governor: sample.AccAddress(),
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

func TestMsgDeleteMonoWhitelist_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteMonoWhitelist
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteMonoWhitelist{
				Governor: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteMonoWhitelist{
				Governor: sample.AccAddress(),
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
