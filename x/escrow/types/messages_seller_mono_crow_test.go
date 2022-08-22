package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateSellerMonoCrow_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateSellerMonoCrow
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateSellerMonoCrow{
				Seller: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateSellerMonoCrow{
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

func TestMsgUpdateSellerMonoCrow_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateSellerMonoCrow
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateSellerMonoCrow{
				Seller: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateSellerMonoCrow{
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

func TestMsgDeleteSellerMonoCrow_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteSellerMonoCrow
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteSellerMonoCrow{
				Seller: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteSellerMonoCrow{
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
