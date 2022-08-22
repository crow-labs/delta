package types_test

import (
	"testing"

	"github.com/crow-labs/delta/x/whitelist/types"
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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated user",
			genState: &types.GenesisState{
				UserList: []types.User{
					{
						AccAddr: "0",
					},
					{
						AccAddr: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated buyer",
			genState: &types.GenesisState{
				BuyerList: []types.Buyer{
					{
						BuyerId: "0",
					},
					{
						BuyerId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated producer",
			genState: &types.GenesisState{
				ProducerList: []types.Producer{
					{
						AccAddr: "0",
					},
					{
						AccAddr: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated seller",
			genState: &types.GenesisState{
				SellerList: []types.Seller{
					{
						SellerId: "0",
					},
					{
						SellerId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated reviewer",
			genState: &types.GenesisState{
				ReviewerList: []types.Reviewer{
					{
						AccAddr: "0",
					},
					{
						AccAddr: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated voter",
			genState: &types.GenesisState{
				VoterList: []types.Voter{
					{
						VoterId: "0",
					},
					{
						VoterId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated whitelist",
			genState: &types.GenesisState{
				WhitelistList: []types.Whitelist{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid whitelist count",
			genState: &types.GenesisState{
				WhitelistList: []types.Whitelist{
					{
						Id: 1,
					},
				},
				WhitelistCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated monoWhitelist",
			genState: &types.GenesisState{
				MonoWhitelistList: []types.MonoWhitelist{
					{
						WhitelistId: "0",
					},
					{
						WhitelistId: "0",
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
