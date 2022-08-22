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

func TestMonoListingMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MarketKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	seller := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateMonoListing{Seller: seller,
			ListingId: strconv.Itoa(i),
		}
		_, err := srv.CreateMonoListing(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetMonoListing(ctx,
			expected.ListingId,
		)
		require.True(t, found)
		require.Equal(t, expected.Seller, rst.Seller)
	}
}

func TestMonoListingMsgServerUpdate(t *testing.T) {
	seller := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateMonoListing
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateMonoListing{Seller: seller,
				ListingId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateMonoListing{Seller: "B",
				ListingId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateMonoListing{Seller: seller,
				ListingId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MarketKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateMonoListing{Seller: seller,
				ListingId: strconv.Itoa(0),
			}
			_, err := srv.CreateMonoListing(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateMonoListing(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetMonoListing(ctx,
					expected.ListingId,
				)
				require.True(t, found)
				require.Equal(t, expected.Seller, rst.Seller)
			}
		})
	}
}

func TestMonoListingMsgServerDelete(t *testing.T) {
	seller := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteMonoListing
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteMonoListing{Seller: seller,
				ListingId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteMonoListing{Seller: "B",
				ListingId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteMonoListing{Seller: seller,
				ListingId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MarketKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateMonoListing(wctx, &types.MsgCreateMonoListing{Seller: seller,
				ListingId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteMonoListing(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetMonoListing(ctx,
					tc.request.ListingId,
				)
				require.False(t, found)
			}
		})
	}
}
