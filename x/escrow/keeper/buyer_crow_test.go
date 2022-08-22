package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/testutil/nullify"
	"github.com/crow-labs/delta/x/escrow/keeper"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNBuyerCrow(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.BuyerCrow {
	items := make([]types.BuyerCrow, n)
	for i := range items {
		items[i].CrowId = strconv.Itoa(i)
		items[i].BuyerId = strconv.Itoa(i)

		keeper.SetBuyerCrow(ctx, items[i])
	}
	return items
}

func TestBuyerCrowGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNBuyerCrow(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBuyerCrow(ctx,
			item.CrowId,
			item.BuyerId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBuyerCrowRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNBuyerCrow(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBuyerCrow(ctx,
			item.CrowId,
			item.BuyerId,
		)
		_, found := keeper.GetBuyerCrow(ctx,
			item.CrowId,
			item.BuyerId,
		)
		require.False(t, found)
	}
}

func TestBuyerCrowGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNBuyerCrow(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBuyerCrow(ctx)),
	)
}
