package types_test

import (
	"testing"

	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated buyerCrow",
			genState: &types.GenesisState{
				BuyerCrowList: []types.BuyerCrow{
					{
						CrowId:  "0",
						BuyerId: "0",
					},
					{
						CrowId:  "0",
						BuyerId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated buyerMonoCrow",
			genState: &types.GenesisState{
				BuyerMonoCrowList: []types.BuyerMonoCrow{
					{
						BuyerCrowId: "0",
					},
					{
						BuyerCrowId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated sellerCrow",
			genState: &types.GenesisState{
				SellerCrowList: []types.SellerCrow{
					{
						CrowId:   "0",
						SellerId: "0",
					},
					{
						CrowId:   "0",
						SellerId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated sellerMonoCrow",
			genState: &types.GenesisState{
				SellerMonoCrowList: []types.SellerMonoCrow{
					{
						SellerCrowId: "0",
					},
					{
						SellerCrowId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated crow",
			genState: &types.GenesisState{
				CrowList: []types.Crow{
					{
						OrderId:   "0",
						ListingId: "0",
					},
					{
						OrderId:   "0",
						ListingId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated monoCrow",
			genState: &types.GenesisState{
				MonoCrowList: []types.MonoCrow{
					{
						CrowId: "0",
					},
					{
						CrowId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated dispute",
			genState: &types.GenesisState{
				DisputeList: []types.Dispute{
					{
						CrowId:      "0",
						PlaintiffId: "0",
					},
					{
						CrowId:      "0",
						PlaintiffId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated monoDispute",
			genState: &types.GenesisState{
				MonoDisputeList: []types.MonoDispute{
					{
						DisputeId: "0",
					},
					{
						DisputeId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated rebuttal",
			genState: &types.GenesisState{
				RebuttalList: []types.Rebuttal{
					{
						DisputeId:   "0",
						DefendantId: "0",
					},
					{
						DisputeId:   "0",
						DefendantId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated monoRebutal",
			genState: &types.GenesisState{
				MonoRebutalList: []types.MonoRebutal{
					{
						RebuttalId: "0",
					},
					{
						RebuttalId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated ballot",
			genState: &types.GenesisState{
				BallotList: []types.Ballot{
					{
						DisputeId: "0",
						VoterId:   "0",
					},
					{
						DisputeId: "0",
						VoterId:   "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated vote",
			genState: &types.GenesisState{
				VoteList: []types.Vote{
					{
						VoteId: "0",
					},
					{
						VoteId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated poll",
			genState: &types.GenesisState{
				PollList: []types.Poll{
					{
						CrowId:    "0",
						DisputeId: "0",
					},
					{
						CrowId:    "0",
						DisputeId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated verdict",
			genState: &types.GenesisState{
				VerdictList: []types.Verdict{
					{
						VerdictId: "0",
					},
					{
						VerdictId: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
