package whitelist

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/whitelist/keeper"
	"github.com/crow-labs/delta/x/whitelist/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the user
	for _, elem := range genState.UserList {
		k.SetUser(ctx, elem)
	}
	// Set all the buyer
	for _, elem := range genState.BuyerList {
		k.SetBuyer(ctx, elem)
	}
	// Set all the producer
	for _, elem := range genState.ProducerList {
		k.SetProducer(ctx, elem)
	}
	// Set all the seller
	for _, elem := range genState.SellerList {
		k.SetSeller(ctx, elem)
	}
	// Set all the reviewer
	for _, elem := range genState.ReviewerList {
		k.SetReviewer(ctx, elem)
	}
	// Set all the voter
	for _, elem := range genState.VoterList {
		k.SetVoter(ctx, elem)
	}
	// Set all the whitelist
	for _, elem := range genState.WhitelistList {
		k.SetWhitelist(ctx, elem)
	}

	// Set whitelist count
	k.SetWhitelistCount(ctx, genState.WhitelistCount)
	// Set all the monoWhitelist
	for _, elem := range genState.MonoWhitelistList {
		k.SetMonoWhitelist(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.UserList = k.GetAllUser(ctx)
	genesis.BuyerList = k.GetAllBuyer(ctx)
	genesis.ProducerList = k.GetAllProducer(ctx)
	genesis.SellerList = k.GetAllSeller(ctx)
	genesis.ReviewerList = k.GetAllReviewer(ctx)
	genesis.VoterList = k.GetAllVoter(ctx)
	genesis.WhitelistList = k.GetAllWhitelist(ctx)
	genesis.WhitelistCount = k.GetWhitelistCount(ctx)
	genesis.MonoWhitelistList = k.GetAllMonoWhitelist(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
