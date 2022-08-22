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

func TestBuyerMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.WhitelistKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	buyer := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateBuyer{Buyer: buyer,
			BuyerId: strconv.Itoa(i),
		}
		_, err := srv.CreateBuyer(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetBuyer(ctx,
			expected.BuyerId,
		)
		require.True(t, found)
		require.Equal(t, expected.Buyer, rst.Buyer)
	}
}

func TestBuyerMsgServerUpdate(t *testing.T) {
	buyer := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateBuyer
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateBuyer{Buyer: buyer,
				BuyerId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateBuyer{Buyer: "B",
				BuyerId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateBuyer{Buyer: buyer,
				BuyerId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateBuyer{Buyer: buyer,
				BuyerId: strconv.Itoa(0),
			}
			_, err := srv.CreateBuyer(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateBuyer(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetBuyer(ctx,
					expected.BuyerId,
				)
				require.True(t, found)
				require.Equal(t, expected.Buyer, rst.Buyer)
			}
		})
	}
}

func TestBuyerMsgServerDelete(t *testing.T) {
	buyer := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteBuyer
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteBuyer{Buyer: buyer,
				BuyerId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteBuyer{Buyer: "B",
				BuyerId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteBuyer{Buyer: buyer,
				BuyerId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateBuyer(wctx, &types.MsgCreateBuyer{Buyer: buyer,
				BuyerId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteBuyer(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetBuyer(ctx,
					tc.request.BuyerId,
				)
				require.False(t, found)
			}
		})
	}
}
