package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgUpdatePendingMonoOrder_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdatePendingMonoOrder
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdatePendingMonoOrder{
				Buyer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdatePendingMonoOrder{
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
