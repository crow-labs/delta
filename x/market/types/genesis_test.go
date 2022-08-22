package types_test

import (
	"testing"

	"github.com/crow-labs/delta/x/market/types"
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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated listing",
			genState: &types.GenesisState{
				ListingList: []types.Listing{
					{
						WhitelistId: "0",
						SellerId:    "0",
					},
					{
						WhitelistId: "0",
						SellerId:    "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated monoListing",
			genState: &types.GenesisState{
				MonoListingList: []types.MonoListing{
					{
						ListingId: "0",
					},
					{
						ListingId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated order",
			genState: &types.GenesisState{
				OrderList: []types.Order{
					{
						ListingId: "0",
						BuyerId:   "0",
					},
					{
						ListingId: "0",
						BuyerId:   "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated monoOrder",
			genState: &types.GenesisState{
				MonoOrderList: []types.MonoOrder{
					{
						OrderId: "0",
					},
					{
						OrderId: "0",
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
