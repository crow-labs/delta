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

func createNBallot(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Ballot {
	items := make([]types.Ballot, n)
	for i := range items {
		items[i].DisputeId = strconv.Itoa(i)
		items[i].VoterId = strconv.Itoa(i)

		keeper.SetBallot(ctx, items[i])
	}
	return items
}

func TestBallotGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNBallot(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBallot(ctx,
			item.DisputeId,
			item.VoterId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBallotRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNBallot(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBallot(ctx,
			item.DisputeId,
			item.VoterId,
		)
		_, found := keeper.GetBallot(ctx,
			item.DisputeId,
			item.VoterId,
		)
		require.False(t, found)
	}
}

func TestBallotGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNBallot(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBallot(ctx)),
	)
}
