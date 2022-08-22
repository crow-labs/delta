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

func TestMonoRebutalMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.EscrowKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	defendant := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateMonoRebutal{Defendant: defendant,
			RebuttalId: strconv.Itoa(i),
		}
		_, err := srv.CreateMonoRebutal(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetMonoRebutal(ctx,
			expected.RebuttalId,
		)
		require.True(t, found)
		require.Equal(t, expected.Defendant, rst.Defendant)
	}
}

func TestMonoRebutalMsgServerUpdate(t *testing.T) {
	defendant := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateMonoRebutal
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateMonoRebutal{Defendant: defendant,
				RebuttalId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateMonoRebutal{Defendant: "B",
				RebuttalId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateMonoRebutal{Defendant: defendant,
				RebuttalId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateMonoRebutal{Defendant: defendant,
				RebuttalId: strconv.Itoa(0),
			}
			_, err := srv.CreateMonoRebutal(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateMonoRebutal(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetMonoRebutal(ctx,
					expected.RebuttalId,
				)
				require.True(t, found)
				require.Equal(t, expected.Defendant, rst.Defendant)
			}
		})
	}
}

func TestMonoRebutalMsgServerDelete(t *testing.T) {
	defendant := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteMonoRebutal
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteMonoRebutal{Defendant: defendant,
				RebuttalId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteMonoRebutal{Defendant: "B",
				RebuttalId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteMonoRebutal{Defendant: defendant,
				RebuttalId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateMonoRebutal(wctx, &types.MsgCreateMonoRebutal{Defendant: defendant,
				RebuttalId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteMonoRebutal(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetMonoRebutal(ctx,
					tc.request.RebuttalId,
				)
				require.False(t, found)
			}
		})
	}
}
