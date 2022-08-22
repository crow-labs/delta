package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateSeller_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateSeller
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateSeller{
				Producer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateSeller{
				Producer: sample.AccAddress(),
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

func TestMsgUpdateSeller_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateSeller
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateSeller{
				Producer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateSeller{
				Producer: sample.AccAddress(),
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

func TestMsgDeleteSeller_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteSeller
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteSeller{
				Producer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteSeller{
				Producer: sample.AccAddress(),
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
