package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/testutil/nullify"
	"github.com/crow-labs/delta/x/market/keeper"
	"github.com/crow-labs/delta/x/market/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNMonoListing(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.MonoListing {
	items := make([]types.MonoListing, n)
	for i := range items {
		items[i].ListingId = strconv.Itoa(i)

		keeper.SetMonoListing(ctx, items[i])
	}
	return items
}

func TestMonoListingGet(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNMonoListing(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMonoListing(ctx,
			item.ListingId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMonoListingRemove(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNMonoListing(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMonoListing(ctx,
			item.ListingId,
		)
		_, found := keeper.GetMonoListing(ctx,
			item.ListingId,
		)
		require.False(t, found)
	}
}

func TestMonoListingGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNMonoListing(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMonoListing(ctx)),
	)
}
