package market_test

import (
	"testing"

	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/testutil/nullify"
	"github.com/crow-labs/delta/x/market"
	"github.com/crow-labs/delta/x/market/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ListingList: []types.Listing{
			{
				WhitelistId: "0",
				SellerId:    "0",
			},
			{
				WhitelistId: "1",
				SellerId:    "1",
			},
		},
		MonoListingList: []types.MonoListing{
			{
				ListingId: "0",
			},
			{
				ListingId: "1",
			},
		},
		OrderList: []types.Order{
			{
				ListingId: "0",
				BuyerId:   "0",
			},
			{
				ListingId: "1",
				BuyerId:   "1",
			},
		},
		MonoOrderList: []types.MonoOrder{
			{
				OrderId: "0",
			},
			{
				OrderId: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MarketKeeper(t)
	market.InitGenesis(ctx, *k, genesisState)
	got := market.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ListingList, got.ListingList)
	require.ElementsMatch(t, genesisState.MonoListingList, got.MonoListingList)
	require.ElementsMatch(t, genesisState.OrderList, got.OrderList)
	require.ElementsMatch(t, genesisState.MonoOrderList, got.MonoOrderList)
	// this line is used by starport scaffolding # genesis/test/assert
}
