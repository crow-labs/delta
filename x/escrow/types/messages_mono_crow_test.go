package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateMonoCrow_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateMonoCrow
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateMonoCrow{
				Seller: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateMonoCrow{
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

func TestMsgUpdateMonoCrow_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateMonoCrow
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateMonoCrow{
				Seller: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateMonoCrow{
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

func TestMsgDeleteMonoCrow_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteMonoCrow
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteMonoCrow{
				Seller: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteMonoCrow{
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
