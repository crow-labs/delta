package market

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/keeper"
	"github.com/crow-labs/delta/x/market/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the listing
	for _, elem := range genState.ListingList {
		k.SetListing(ctx, elem)
	}
	// Set all the monoListing
	for _, elem := range genState.MonoListingList {
		k.SetMonoListing(ctx, elem)
	}
	// Set all the order
	for _, elem := range genState.OrderList {
		k.SetOrder(ctx, elem)
	}
	// Set all the monoOrder
	for _, elem := range genState.MonoOrderList {
		k.SetMonoOrder(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ListingList = k.GetAllListing(ctx)
	genesis.MonoListingList = k.GetAllMonoListing(ctx)
	genesis.OrderList = k.GetAllOrder(ctx)
	genesis.MonoOrderList = k.GetAllMonoOrder(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
