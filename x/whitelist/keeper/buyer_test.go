package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/testutil/nullify"
	"github.com/crow-labs/delta/x/whitelist/keeper"
	"github.com/crow-labs/delta/x/whitelist/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNBuyer(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Buyer {
	items := make([]types.Buyer, n)
	for i := range items {
		items[i].BuyerId = strconv.Itoa(i)

		keeper.SetBuyer(ctx, items[i])
	}
	return items
}

func TestBuyerGet(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyer(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBuyer(ctx,
			item.BuyerId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBuyerRemove(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyer(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBuyer(ctx,
			item.BuyerId,
		)
		_, found := keeper.GetBuyer(ctx,
			item.BuyerId,
		)
		require.False(t, found)
	}
}

func TestBuyerGetAll(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNBuyer(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBuyer(ctx)),
	)
}
