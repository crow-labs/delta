package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/x/market/keeper"
	"github.com/crow-labs/delta/x/market/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestMonoOrderMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MarketKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	buyer := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateMonoOrder{Buyer: buyer,
			OrderId: strconv.Itoa(i),
		}
		_, err := srv.CreateMonoOrder(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetMonoOrder(ctx,
			expected.OrderId,
		)
		require.True(t, found)
		require.Equal(t, expected.Buyer, rst.Buyer)
	}
}

func TestMonoOrderMsgServerUpdate(t *testing.T) {
	buyer := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateMonoOrder
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateMonoOrder{Buyer: buyer,
				OrderId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateMonoOrder{Buyer: "B",
				OrderId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateMonoOrder{Buyer: buyer,
				OrderId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MarketKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateMonoOrder{Buyer: buyer,
				OrderId: strconv.Itoa(0),
			}
			_, err := srv.CreateMonoOrder(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateMonoOrder(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetMonoOrder(ctx,
					expected.OrderId,
				)
				require.True(t, found)
				require.Equal(t, expected.Buyer, rst.Buyer)
			}
		})
	}
}

func TestMonoOrderMsgServerDelete(t *testing.T) {
	buyer := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteMonoOrder
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteMonoOrder{Buyer: buyer,
				OrderId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteMonoOrder{Buyer: "B",
				OrderId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteMonoOrder{Buyer: buyer,
				OrderId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MarketKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateMonoOrder(wctx, &types.MsgCreateMonoOrder{Buyer: buyer,
				OrderId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteMonoOrder(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetMonoOrder(ctx,
					tc.request.OrderId,
				)
				require.False(t, found)
			}
		})
	}
}
