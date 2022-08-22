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

func TestBuyerMonoCrowMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.EscrowKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	buyer := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateBuyerMonoCrow{Buyer: buyer,
			BuyerCrowId: strconv.Itoa(i),
		}
		_, err := srv.CreateBuyerMonoCrow(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetBuyerMonoCrow(ctx,
			expected.BuyerCrowId,
		)
		require.True(t, found)
		require.Equal(t, expected.Buyer, rst.Buyer)
	}
}

func TestBuyerMonoCrowMsgServerUpdate(t *testing.T) {
	buyer := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateBuyerMonoCrow
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateBuyerMonoCrow{Buyer: buyer,
				BuyerCrowId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateBuyerMonoCrow{Buyer: "B",
				BuyerCrowId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateBuyerMonoCrow{Buyer: buyer,
				BuyerCrowId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateBuyerMonoCrow{Buyer: buyer,
				BuyerCrowId: strconv.Itoa(0),
			}
			_, err := srv.CreateBuyerMonoCrow(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateBuyerMonoCrow(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetBuyerMonoCrow(ctx,
					expected.BuyerCrowId,
				)
				require.True(t, found)
				require.Equal(t, expected.Buyer, rst.Buyer)
			}
		})
	}
}

func TestBuyerMonoCrowMsgServerDelete(t *testing.T) {
	buyer := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteBuyerMonoCrow
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteBuyerMonoCrow{Buyer: buyer,
				BuyerCrowId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteBuyerMonoCrow{Buyer: "B",
				BuyerCrowId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteBuyerMonoCrow{Buyer: buyer,
				BuyerCrowId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateBuyerMonoCrow(wctx, &types.MsgCreateBuyerMonoCrow{Buyer: buyer,
				BuyerCrowId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteBuyerMonoCrow(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetBuyerMonoCrow(ctx,
					tc.request.BuyerCrowId,
				)
				require.False(t, found)
			}
		})
	}
}
