package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateVoter_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateVoter
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateVoter{
				Reviewer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateVoter{
				Reviewer: sample.AccAddress(),
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

func TestMsgUpdateVoter_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateVoter
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateVoter{
				Reviewer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateVoter{
				Reviewer: sample.AccAddress(),
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

func TestMsgDeleteVoter_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteVoter
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteVoter{
				Reviewer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteVoter{
				Reviewer: sample.AccAddress(),
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
