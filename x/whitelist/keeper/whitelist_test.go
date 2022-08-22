package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/testutil/nullify"
	"github.com/crow-labs/delta/x/whitelist/keeper"
	"github.com/crow-labs/delta/x/whitelist/types"
	"github.com/stretchr/testify/require"
)

func createNWhitelist(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Whitelist {
	items := make([]types.Whitelist, n)
	for i := range items {
		items[i].Id = keeper.AppendWhitelist(ctx, items[i])
	}
	return items
}

func TestWhitelistGet(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNWhitelist(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetWhitelist(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestWhitelistRemove(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNWhitelist(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveWhitelist(ctx, item.Id)
		_, found := keeper.GetWhitelist(ctx, item.Id)
		require.False(t, found)
	}
}

func TestWhitelistGetAll(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNWhitelist(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllWhitelist(ctx)),
	)
}

func TestWhitelistCount(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNWhitelist(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetWhitelistCount(ctx))
}
