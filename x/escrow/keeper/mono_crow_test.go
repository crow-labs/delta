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

func createNMonoCrow(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.MonoCrow {
	items := make([]types.MonoCrow, n)
	for i := range items {
		items[i].CrowId = strconv.Itoa(i)

		keeper.SetMonoCrow(ctx, items[i])
	}
	return items
}

func TestMonoCrowGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNMonoCrow(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMonoCrow(ctx,
			item.CrowId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMonoCrowRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNMonoCrow(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMonoCrow(ctx,
			item.CrowId,
		)
		_, found := keeper.GetMonoCrow(ctx,
			item.CrowId,
		)
		require.False(t, found)
	}
}

func TestMonoCrowGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNMonoCrow(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMonoCrow(ctx)),
	)
}
