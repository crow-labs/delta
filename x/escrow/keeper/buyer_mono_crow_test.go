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

func createNBuyerMonoCrow(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.BuyerMonoCrow {
	items := make([]types.BuyerMonoCrow, n)
	for i := range items {
		items[i].BuyerCrowId = strconv.Itoa(i)

		keeper.SetBuyerMonoCrow(ctx, items[i])
	}
	return items
}

func TestBuyerMonoCrowGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNBuyerMonoCrow(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBuyerMonoCrow(ctx,
			item.BuyerCrowId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBuyerMonoCrowRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNBuyerMonoCrow(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBuyerMonoCrow(ctx,
			item.BuyerCrowId,
		)
		_, found := keeper.GetBuyerMonoCrow(ctx,
			item.BuyerCrowId,
		)
		require.False(t, found)
	}
}

func TestBuyerMonoCrowGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNBuyerMonoCrow(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBuyerMonoCrow(ctx)),
	)
}
