package market

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/crow-labs/delta/testutil/sample"
	marketsimulation "github.com/crow-labs/delta/x/market/simulation"
	"github.com/crow-labs/delta/x/market/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = marketsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateMonoListing = "op_weight_msg_mono_listing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMonoListing int = 100

	opWeightMsgUpdateMonoListing = "op_weight_msg_mono_listing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMonoListing int = 100

	opWeightMsgDeleteMonoListing = "op_weight_msg_mono_listing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMonoListing int = 100

	opWeightMsgCreateMonoOrder = "op_weight_msg_mono_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMonoOrder int = 100

	opWeightMsgUpdateMonoOrder = "op_weight_msg_mono_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMonoOrder int = 100

	opWeightMsgDeleteMonoOrder = "op_weight_msg_mono_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMonoOrder int = 100

	opWeightMsgOpenMonoListing = "op_weight_msg_open_mono_listing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgOpenMonoListing int = 100

	opWeightMsgCloseListing = "op_weight_msg_close_listing"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCloseListing int = 100

	opWeightMsgOpenMonoOrder = "op_weight_msg_open_mono_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgOpenMonoOrder int = 100

	opWeightMsgCancelPendingMonoOrder = "op_weight_msg_cancel_pending_mono_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCancelPendingMonoOrder int = 100

	opWeightMsgUpdatePendingMonoOrder = "op_weight_msg_update_pending_mono_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePendingMonoOrder int = 100

	opWeightMsgAcceptMonoOrder = "op_weight_msg_accept_mono_order"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAcceptMonoOrder int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	marketGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		MonoListingList: []types.MonoListing{
			{
				Seller:    sample.AccAddress(),
				ListingId: "0",
			},
			{
				Seller:    sample.AccAddress(),
				ListingId: "1",
			},
		},
		MonoOrderList: []types.MonoOrder{
			{
				Buyer:   sample.AccAddress(),
				OrderId: "0",
			},
			{
				Buyer:   sample.AccAddress(),
				OrderId: "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&marketGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateMonoListing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateMonoListing, &weightMsgCreateMonoListing, nil,
		func(_ *rand.Rand) {
			weightMsgCreateMonoListing = defaultWeightMsgCreateMonoListing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateMonoListing,
		marketsimulation.SimulateMsgCreateMonoListing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateMonoListing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateMonoListing, &weightMsgUpdateMonoListing, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMonoListing = defaultWeightMsgUpdateMonoListing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMonoListing,
		marketsimulation.SimulateMsgUpdateMonoListing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteMonoListing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteMonoListing, &weightMsgDeleteMonoListing, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteMonoListing = defaultWeightMsgDeleteMonoListing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteMonoListing,
		marketsimulation.SimulateMsgDeleteMonoListing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateMonoOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateMonoOrder, &weightMsgCreateMonoOrder, nil,
		func(_ *rand.Rand) {
			weightMsgCreateMonoOrder = defaultWeightMsgCreateMonoOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateMonoOrder,
		marketsimulation.SimulateMsgCreateMonoOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateMonoOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateMonoOrder, &weightMsgUpdateMonoOrder, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMonoOrder = defaultWeightMsgUpdateMonoOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMonoOrder,
		marketsimulation.SimulateMsgUpdateMonoOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteMonoOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteMonoOrder, &weightMsgDeleteMonoOrder, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteMonoOrder = defaultWeightMsgDeleteMonoOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteMonoOrder,
		marketsimulation.SimulateMsgDeleteMonoOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgOpenMonoListing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgOpenMonoListing, &weightMsgOpenMonoListing, nil,
		func(_ *rand.Rand) {
			weightMsgOpenMonoListing = defaultWeightMsgOpenMonoListing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgOpenMonoListing,
		marketsimulation.SimulateMsgOpenMonoListing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCloseListing int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCloseListing, &weightMsgCloseListing, nil,
		func(_ *rand.Rand) {
			weightMsgCloseListing = defaultWeightMsgCloseListing
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCloseListing,
		marketsimulation.SimulateMsgCloseListing(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgOpenMonoOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgOpenMonoOrder, &weightMsgOpenMonoOrder, nil,
		func(_ *rand.Rand) {
			weightMsgOpenMonoOrder = defaultWeightMsgOpenMonoOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgOpenMonoOrder,
		marketsimulation.SimulateMsgOpenMonoOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCancelPendingMonoOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCancelPendingMonoOrder, &weightMsgCancelPendingMonoOrder, nil,
		func(_ *rand.Rand) {
			weightMsgCancelPendingMonoOrder = defaultWeightMsgCancelPendingMonoOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCancelPendingMonoOrder,
		marketsimulation.SimulateMsgCancelPendingMonoOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePendingMonoOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePendingMonoOrder, &weightMsgUpdatePendingMonoOrder, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePendingMonoOrder = defaultWeightMsgUpdatePendingMonoOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePendingMonoOrder,
		marketsimulation.SimulateMsgUpdatePendingMonoOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAcceptMonoOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAcceptMonoOrder, &weightMsgAcceptMonoOrder, nil,
		func(_ *rand.Rand) {
			weightMsgAcceptMonoOrder = defaultWeightMsgAcceptMonoOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAcceptMonoOrder,
		marketsimulation.SimulateMsgAcceptMonoOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
