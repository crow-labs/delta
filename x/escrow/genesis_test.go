package escrow_test

import (
	"testing"

	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/testutil/nullify"
	"github.com/crow-labs/delta/x/escrow"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		BuyerCrowList: []types.BuyerCrow{
			{
				CrowId:  "0",
				BuyerId: "0",
			},
			{
				CrowId:  "1",
				BuyerId: "1",
			},
		},
		BuyerMonoCrowList: []types.BuyerMonoCrow{
			{
				BuyerCrowId: "0",
			},
			{
				BuyerCrowId: "1",
			},
		},
		SellerCrowList: []types.SellerCrow{
			{
				CrowId:   "0",
				SellerId: "0",
			},
			{
				CrowId:   "1",
				SellerId: "1",
			},
		},
		SellerMonoCrowList: []types.SellerMonoCrow{
			{
				SellerCrowId: "0",
			},
			{
				SellerCrowId: "1",
			},
		},
		CrowList: []types.Crow{
			{
				OrderId:   "0",
				ListingId: "0",
			},
			{
				OrderId:   "1",
				ListingId: "1",
			},
		},
		MonoCrowList: []types.MonoCrow{
			{
				CrowId: "0",
			},
			{
				CrowId: "1",
			},
		},
		DisputeList: []types.Dispute{
			{
				CrowId:      "0",
				PlaintiffId: "0",
			},
			{
				CrowId:      "1",
				PlaintiffId: "1",
			},
		},
		MonoDisputeList: []types.MonoDispute{
			{
				DisputeId: "0",
			},
			{
				DisputeId: "1",
			},
		},
		RebuttalList: []types.Rebuttal{
			{
				DisputeId:   "0",
				DefendantId: "0",
			},
			{
				DisputeId:   "1",
				DefendantId: "1",
			},
		},
		MonoRebutalList: []types.MonoRebutal{
			{
				RebuttalId: "0",
			},
			{
				RebuttalId: "1",
			},
		},
		BallotList: []types.Ballot{
			{
				DisputeId: "0",
				VoterId:   "0",
			},
			{
				DisputeId: "1",
				VoterId:   "1",
			},
		},
		VoteList: []types.Vote{
			{
				VoteId: "0",
			},
			{
				VoteId: "1",
			},
		},
		PollList: []types.Poll{
			{
				CrowId:    "0",
				DisputeId: "0",
			},
			{
				CrowId:    "1",
				DisputeId: "1",
			},
		},
		VerdictList: []types.Verdict{
			{
				VerdictId: "0",
			},
			{
				VerdictId: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.EscrowKeeper(t)
	escrow.InitGenesis(ctx, *k, genesisState)
	got := escrow.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.BuyerCrowList, got.BuyerCrowList)
	require.ElementsMatch(t, genesisState.BuyerMonoCrowList, got.BuyerMonoCrowList)
	require.ElementsMatch(t, genesisState.SellerCrowList, got.SellerCrowList)
	require.ElementsMatch(t, genesisState.SellerMonoCrowList, got.SellerMonoCrowList)
	require.ElementsMatch(t, genesisState.CrowList, got.CrowList)
	require.ElementsMatch(t, genesisState.MonoCrowList, got.MonoCrowList)
	require.ElementsMatch(t, genesisState.DisputeList, got.DisputeList)
	require.ElementsMatch(t, genesisState.MonoDisputeList, got.MonoDisputeList)
	require.ElementsMatch(t, genesisState.RebuttalList, got.RebuttalList)
	require.ElementsMatch(t, genesisState.MonoRebutalList, got.MonoRebutalList)
	require.ElementsMatch(t, genesisState.BallotList, got.BallotList)
	require.ElementsMatch(t, genesisState.VoteList, got.VoteList)
	require.ElementsMatch(t, genesisState.PollList, got.PollList)
	require.ElementsMatch(t, genesisState.VerdictList, got.VerdictList)
	// this line is used by starport scaffolding # genesis/test/assert
}
