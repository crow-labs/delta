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

func TestSellerMonoCrowMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.EscrowKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	seller := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateSellerMonoCrow{Seller: seller,
			SellerCrowId: strconv.Itoa(i),
		}
		_, err := srv.CreateSellerMonoCrow(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetSellerMonoCrow(ctx,
			expected.SellerCrowId,
		)
		require.True(t, found)
		require.Equal(t, expected.Seller, rst.Seller)
	}
}

func TestSellerMonoCrowMsgServerUpdate(t *testing.T) {
	seller := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateSellerMonoCrow
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateSellerMonoCrow{Seller: seller,
				SellerCrowId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateSellerMonoCrow{Seller: "B",
				SellerCrowId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateSellerMonoCrow{Seller: seller,
				SellerCrowId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateSellerMonoCrow{Seller: seller,
				SellerCrowId: strconv.Itoa(0),
			}
			_, err := srv.CreateSellerMonoCrow(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateSellerMonoCrow(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetSellerMonoCrow(ctx,
					expected.SellerCrowId,
				)
				require.True(t, found)
				require.Equal(t, expected.Seller, rst.Seller)
			}
		})
	}
}

func TestSellerMonoCrowMsgServerDelete(t *testing.T) {
	seller := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteSellerMonoCrow
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteSellerMonoCrow{Seller: seller,
				SellerCrowId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteSellerMonoCrow{Seller: "B",
				SellerCrowId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteSellerMonoCrow{Seller: seller,
				SellerCrowId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateSellerMonoCrow(wctx, &types.MsgCreateSellerMonoCrow{Seller: seller,
				SellerCrowId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteSellerMonoCrow(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetSellerMonoCrow(ctx,
					tc.request.SellerCrowId,
				)
				require.False(t, found)
			}
		})
	}
}
