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

func createNPoll(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Poll {
	items := make([]types.Poll, n)
	for i := range items {
		items[i].CrowId = strconv.Itoa(i)
		items[i].DisputeId = strconv.Itoa(i)

		keeper.SetPoll(ctx, items[i])
	}
	return items
}

func TestPollGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetPoll(ctx,
			item.CrowId,
			item.DisputeId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestPollRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePoll(ctx,
			item.CrowId,
			item.DisputeId,
		)
		_, found := keeper.GetPoll(ctx,
			item.CrowId,
			item.DisputeId,
		)
		require.False(t, found)
	}
}

func TestPollGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNPoll(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPoll(ctx)),
	)
}
