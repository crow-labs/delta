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

func createNMonoOrder(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.MonoOrder {
	items := make([]types.MonoOrder, n)
	for i := range items {
		items[i].OrderId = strconv.Itoa(i)

		keeper.SetMonoOrder(ctx, items[i])
	}
	return items
}

func TestMonoOrderGet(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNMonoOrder(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMonoOrder(ctx,
			item.OrderId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMonoOrderRemove(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNMonoOrder(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMonoOrder(ctx,
			item.OrderId,
		)
		_, found := keeper.GetMonoOrder(ctx,
			item.OrderId,
		)
		require.False(t, found)
	}
}

func TestMonoOrderGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNMonoOrder(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMonoOrder(ctx)),
	)
}
