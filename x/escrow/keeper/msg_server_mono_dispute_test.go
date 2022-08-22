package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/x/escrow/keeper"
	"github.com/crow-labs/delta/x/escrow/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestMonoDisputeMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.EscrowKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	plaintiff := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateMonoDispute{Plaintiff: plaintiff,
			DisputeId: strconv.Itoa(i),
		}
		_, err := srv.CreateMonoDispute(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetMonoDispute(ctx,
			expected.DisputeId,
		)
		require.True(t, found)
		require.Equal(t, expected.Plaintiff, rst.Plaintiff)
	}
}

func TestMonoDisputeMsgServerUpdate(t *testing.T) {
	plaintiff := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateMonoDispute
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateMonoDispute{Plaintiff: plaintiff,
				DisputeId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateMonoDispute{Plaintiff: "B",
				DisputeId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateMonoDispute{Plaintiff: plaintiff,
				DisputeId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateMonoDispute{Plaintiff: plaintiff,
				DisputeId: strconv.Itoa(0),
			}
			_, err := srv.CreateMonoDispute(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateMonoDispute(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetMonoDispute(ctx,
					expected.DisputeId,
				)
				require.True(t, found)
				require.Equal(t, expected.Plaintiff, rst.Plaintiff)
			}
		})
	}
}

func TestMonoDisputeMsgServerDelete(t *testing.T) {
	plaintiff := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteMonoDispute
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteMonoDispute{Plaintiff: plaintiff,
				DisputeId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteMonoDispute{Plaintiff: "B",
				DisputeId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteMonoDispute{Plaintiff: plaintiff,
				DisputeId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateMonoDispute(wctx, &types.MsgCreateMonoDispute{Plaintiff: plaintiff,
				DisputeId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteMonoDispute(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetMonoDispute(ctx,
					tc.request.DisputeId,
				)
				require.False(t, found)
			}
		})
	}
}
