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

func createNOrder(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Order {
	items := make([]types.Order, n)
	for i := range items {
		items[i].ListingId = strconv.Itoa(i)
		items[i].BuyerId = strconv.Itoa(i)

		keeper.SetOrder(ctx, items[i])
	}
	return items
}

func TestOrderGet(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNOrder(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetOrder(ctx,
			item.ListingId,
			item.BuyerId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestOrderRemove(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNOrder(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveOrder(ctx,
			item.ListingId,
			item.BuyerId,
		)
		_, found := keeper.GetOrder(ctx,
			item.ListingId,
			item.BuyerId,
		)
		require.False(t, found)
	}
}

func TestOrderGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNOrder(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllOrder(ctx)),
	)
}
