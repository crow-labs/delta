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

func createNVote(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Vote {
	items := make([]types.Vote, n)
	for i := range items {
		items[i].VoteId = strconv.Itoa(i)

		keeper.SetVote(ctx, items[i])
	}
	return items
}

func TestVoteGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNVote(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetVote(ctx,
			item.VoteId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestVoteRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNVote(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveVote(ctx,
			item.VoteId,
		)
		_, found := keeper.GetVote(ctx,
			item.VoteId,
		)
		require.False(t, found)
	}
}

func TestVoteGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNVote(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllVote(ctx)),
	)
}
