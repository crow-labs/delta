package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/x/whitelist/keeper"
	"github.com/crow-labs/delta/x/whitelist/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestMonoWhitelistMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.WhitelistKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	governor := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateMonoWhitelist{Governor: governor,
			WhitelistId: strconv.Itoa(i),
		}
		_, err := srv.CreateMonoWhitelist(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetMonoWhitelist(ctx,
			expected.WhitelistId,
		)
		require.True(t, found)
		require.Equal(t, expected.Governor, rst.Governor)
	}
}

func TestMonoWhitelistMsgServerUpdate(t *testing.T) {
	governor := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateMonoWhitelist
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateMonoWhitelist{Governor: governor,
				WhitelistId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateMonoWhitelist{Governor: "B",
				WhitelistId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateMonoWhitelist{Governor: governor,
				WhitelistId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateMonoWhitelist{Governor: governor,
				WhitelistId: strconv.Itoa(0),
			}
			_, err := srv.CreateMonoWhitelist(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateMonoWhitelist(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetMonoWhitelist(ctx,
					expected.WhitelistId,
				)
				require.True(t, found)
				require.Equal(t, expected.Governor, rst.Governor)
			}
		})
	}
}

func TestMonoWhitelistMsgServerDelete(t *testing.T) {
	governor := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteMonoWhitelist
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteMonoWhitelist{Governor: governor,
				WhitelistId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteMonoWhitelist{Governor: "B",
				WhitelistId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteMonoWhitelist{Governor: governor,
				WhitelistId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateMonoWhitelist(wctx, &types.MsgCreateMonoWhitelist{Governor: governor,
				WhitelistId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteMonoWhitelist(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetMonoWhitelist(ctx,
					tc.request.WhitelistId,
				)
				require.False(t, found)
			}
		})
	}
}
