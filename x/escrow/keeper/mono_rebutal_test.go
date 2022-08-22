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

func createNMonoRebutal(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.MonoRebutal {
	items := make([]types.MonoRebutal, n)
	for i := range items {
		items[i].RebuttalId = strconv.Itoa(i)

		keeper.SetMonoRebutal(ctx, items[i])
	}
	return items
}

func TestMonoRebutalGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNMonoRebutal(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMonoRebutal(ctx,
			item.RebuttalId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMonoRebutalRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNMonoRebutal(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMonoRebutal(ctx,
			item.RebuttalId,
		)
		_, found := keeper.GetMonoRebutal(ctx,
			item.RebuttalId,
		)
		require.False(t, found)
	}
}

func TestMonoRebutalGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNMonoRebutal(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMonoRebutal(ctx)),
	)
}
