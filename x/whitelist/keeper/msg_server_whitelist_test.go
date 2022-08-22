package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/crow-labs/delta/x/whitelist/types"
)

func TestWhitelistMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateWhitelist(ctx, &types.MsgCreateWhitelist{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestWhitelistMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateWhitelist
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateWhitelist{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateWhitelist{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateWhitelist{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateWhitelist(ctx, &types.MsgCreateWhitelist{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateWhitelist(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestWhitelistMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteWhitelist
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteWhitelist{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteWhitelist{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteWhitelist{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateWhitelist(ctx, &types.MsgCreateWhitelist{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteWhitelist(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
