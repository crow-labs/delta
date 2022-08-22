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

func createNVerdict(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Verdict {
	items := make([]types.Verdict, n)
	for i := range items {
		items[i].VerdictId = strconv.Itoa(i)

		keeper.SetVerdict(ctx, items[i])
	}
	return items
}

func TestVerdictGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNVerdict(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetVerdict(ctx,
			item.VerdictId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestVerdictRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNVerdict(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveVerdict(ctx,
			item.VerdictId,
		)
		_, found := keeper.GetVerdict(ctx,
			item.VerdictId,
		)
		require.False(t, found)
	}
}

func TestVerdictGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNVerdict(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllVerdict(ctx)),
	)
}
