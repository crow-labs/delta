package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/testutil/nullify"
	"github.com/crow-labs/delta/x/whitelist/keeper"
	"github.com/crow-labs/delta/x/whitelist/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNMonoWhitelist(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.MonoWhitelist {
	items := make([]types.MonoWhitelist, n)
	for i := range items {
		items[i].WhitelistId = strconv.Itoa(i)

		keeper.SetMonoWhitelist(ctx, items[i])
	}
	return items
}

func TestMonoWhitelistGet(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNMonoWhitelist(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMonoWhitelist(ctx,
			item.WhitelistId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMonoWhitelistRemove(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNMonoWhitelist(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMonoWhitelist(ctx,
			item.WhitelistId,
		)
		_, found := keeper.GetMonoWhitelist(ctx,
			item.WhitelistId,
		)
		require.False(t, found)
	}
}

func TestMonoWhitelistGetAll(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	items := createNMonoWhitelist(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMonoWhitelist(ctx)),
	)
}
