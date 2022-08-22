package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateBuyerMonoCrow_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateBuyerMonoCrow
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateBuyerMonoCrow{
				Buyer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateBuyerMonoCrow{
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

func TestMsgUpdateBuyerMonoCrow_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateBuyerMonoCrow
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateBuyerMonoCrow{
				Buyer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateBuyerMonoCrow{
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

func TestMsgDeleteBuyerMonoCrow_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteBuyerMonoCrow
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteBuyerMonoCrow{
				Buyer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteBuyerMonoCrow{
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
