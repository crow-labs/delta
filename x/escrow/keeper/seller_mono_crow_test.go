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

func createNSellerMonoCrow(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SellerMonoCrow {
	items := make([]types.SellerMonoCrow, n)
	for i := range items {
		items[i].SellerCrowId = strconv.Itoa(i)

		keeper.SetSellerMonoCrow(ctx, items[i])
	}
	return items
}

func TestSellerMonoCrowGet(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNSellerMonoCrow(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSellerMonoCrow(ctx,
			item.SellerCrowId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestSellerMonoCrowRemove(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNSellerMonoCrow(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSellerMonoCrow(ctx,
			item.SellerCrowId,
		)
		_, found := keeper.GetSellerMonoCrow(ctx,
			item.SellerCrowId,
		)
		require.False(t, found)
	}
}

func TestSellerMonoCrowGetAll(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	items := createNSellerMonoCrow(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSellerMonoCrow(ctx)),
	)
}
