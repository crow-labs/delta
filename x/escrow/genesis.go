package escrow

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/keeper"
	"github.com/crow-labs/delta/x/escrow/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the buyerCrow
	for _, elem := range genState.BuyerCrowList {
		k.SetBuyerCrow(ctx, elem)
	}
	// Set all the buyerMonoCrow
	for _, elem := range genState.BuyerMonoCrowList {
		k.SetBuyerMonoCrow(ctx, elem)
	}
	// Set all the sellerCrow
	for _, elem := range genState.SellerCrowList {
		k.SetSellerCrow(ctx, elem)
	}
	// Set all the sellerMonoCrow
	for _, elem := range genState.SellerMonoCrowList {
		k.SetSellerMonoCrow(ctx, elem)
	}
	// Set all the crow
	for _, elem := range genState.CrowList {
		k.SetCrow(ctx, elem)
	}
	// Set all the monoCrow
	for _, elem := range genState.MonoCrowList {
		k.SetMonoCrow(ctx, elem)
	}
	// Set all the dispute
	for _, elem := range genState.DisputeList {
		k.SetDispute(ctx, elem)
	}
	// Set all the monoDispute
	for _, elem := range genState.MonoDisputeList {
		k.SetMonoDispute(ctx, elem)
	}
	// Set all the rebuttal
	for _, elem := range genState.RebuttalList {
		k.SetRebuttal(ctx, elem)
	}
	// Set all the monoRebutal
	for _, elem := range genState.MonoRebutalList {
		k.SetMonoRebutal(ctx, elem)
	}
	// Set all the ballot
	for _, elem := range genState.BallotList {
		k.SetBallot(ctx, elem)
	}
	// Set all the vote
	for _, elem := range genState.VoteList {
		k.SetVote(ctx, elem)
	}
	// Set all the poll
	for _, elem := range genState.PollList {
		k.SetPoll(ctx, elem)
	}
	// Set all the verdict
	for _, elem := range genState.VerdictList {
		k.SetVerdict(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.PortId = k.GetPort(ctx)
	genesis.BuyerCrowList = k.GetAllBuyerCrow(ctx)
	genesis.BuyerMonoCrowList = k.GetAllBuyerMonoCrow(ctx)
	genesis.SellerCrowList = k.GetAllSellerCrow(ctx)
	genesis.SellerMonoCrowList = k.GetAllSellerMonoCrow(ctx)
	genesis.CrowList = k.GetAllCrow(ctx)
	genesis.MonoCrowList = k.GetAllMonoCrow(ctx)
	genesis.DisputeList = k.GetAllDispute(ctx)
	genesis.MonoDisputeList = k.GetAllMonoDispute(ctx)
	genesis.RebuttalList = k.GetAllRebuttal(ctx)
	genesis.MonoRebutalList = k.GetAllMonoRebutal(ctx)
	genesis.BallotList = k.GetAllBallot(ctx)
	genesis.VoteList = k.GetAllVote(ctx)
	genesis.PollList = k.GetAllPoll(ctx)
	genesis.VerdictList = k.GetAllVerdict(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
