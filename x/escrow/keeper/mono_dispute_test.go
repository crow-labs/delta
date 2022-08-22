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

func createNMonoDispute(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.MonoDispute {
	items := make([]types.MonoDispute, n)
	for i := range items {
		items[i].DisputeId = strconv.Itoa(i)

		keeper.SetMonoDispute(ctx, items[i])
	}
	return items
}

func TestMonoDisputeGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNMonoDispute(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMonoDispute(ctx,
			item.DisputeId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMonoDisputeRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNMonoDispute(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMonoDispute(ctx,
			item.DisputeId,
		)
		_, found := keeper.GetMonoDispute(ctx,
			item.DisputeId,
		)
		require.False(t, found)
	}
}

func TestMonoDisputeGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNMonoDispute(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMonoDispute(ctx)),
	)
}
