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

func createNSellerCrow(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SellerCrow {
	items := make([]types.SellerCrow, n)
	for i := range items {
		items[i].CrowId = strconv.Itoa(i)
		items[i].SellerId = strconv.Itoa(i)

		keeper.SetSellerCrow(ctx, items[i])
	}
	return items
}

func TestSellerCrowGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNSellerCrow(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSellerCrow(ctx,
			item.CrowId,
			item.SellerId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestSellerCrowRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNSellerCrow(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSellerCrow(ctx,
			item.CrowId,
			item.SellerId,
		)
		_, found := keeper.GetSellerCrow(ctx,
			item.CrowId,
			item.SellerId,
		)
		require.False(t, found)
	}
}

func TestSellerCrowGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNSellerCrow(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSellerCrow(ctx)),
	)
}
