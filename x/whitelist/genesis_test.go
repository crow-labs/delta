package whitelist_test

import (
	"testing"

	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/testutil/nullify"
	"github.com/crow-labs/delta/x/whitelist"
	"github.com/crow-labs/delta/x/whitelist/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		UserList: []types.User{
			{
				AccAddr: "0",
			},
			{
				AccAddr: "1",
			},
		},
		BuyerList: []types.Buyer{
			{
				BuyerId: "0",
			},
			{
				BuyerId: "1",
			},
		},
		ProducerList: []types.Producer{
			{
				AccAddr: "0",
			},
			{
				AccAddr: "1",
			},
		},
		SellerList: []types.Seller{
			{
				SellerId: "0",
			},
			{
				SellerId: "1",
			},
		},
		ReviewerList: []types.Reviewer{
			{
				AccAddr: "0",
			},
			{
				AccAddr: "1",
			},
		},
		VoterList: []types.Voter{
			{
				VoterId: "0",
			},
			{
				VoterId: "1",
			},
		},
		WhitelistList: []types.Whitelist{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		WhitelistCount: 2,
		MonoWhitelistList: []types.MonoWhitelist{
			{
				WhitelistId: "0",
			},
			{
				WhitelistId: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.WhitelistKeeper(t)
	whitelist.InitGenesis(ctx, *k, genesisState)
	got := whitelist.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.UserList, got.UserList)
	require.ElementsMatch(t, genesisState.BuyerList, got.BuyerList)
	require.ElementsMatch(t, genesisState.ProducerList, got.ProducerList)
	require.ElementsMatch(t, genesisState.SellerList, got.SellerList)
	require.ElementsMatch(t, genesisState.ReviewerList, got.ReviewerList)
	require.ElementsMatch(t, genesisState.VoterList, got.VoterList)
	require.ElementsMatch(t, genesisState.WhitelistList, got.WhitelistList)
	require.Equal(t, genesisState.WhitelistCount, got.WhitelistCount)
	require.ElementsMatch(t, genesisState.MonoWhitelistList, got.MonoWhitelistList)
	// this line is used by starport scaffolding # genesis/test/assert
}
