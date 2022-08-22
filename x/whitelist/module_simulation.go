package whitelist

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/crow-labs/delta/testutil/sample"
	whitelistsimulation "github.com/crow-labs/delta/x/whitelist/simulation"
	"github.com/crow-labs/delta/x/whitelist/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = whitelistsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateBuyer = "op_weight_msg_buyer"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBuyer int = 100

	opWeightMsgUpdateBuyer = "op_weight_msg_buyer"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateBuyer int = 100

	opWeightMsgDeleteBuyer = "op_weight_msg_buyer"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBuyer int = 100

	opWeightMsgCreateSeller = "op_weight_msg_seller"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateSeller int = 100

	opWeightMsgUpdateSeller = "op_weight_msg_seller"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateSeller int = 100

	opWeightMsgDeleteSeller = "op_weight_msg_seller"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteSeller int = 100

	opWeightMsgCreateVoter = "op_weight_msg_voter"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateVoter int = 100

	opWeightMsgUpdateVoter = "op_weight_msg_voter"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateVoter int = 100

	opWeightMsgDeleteVoter = "op_weight_msg_voter"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteVoter int = 100

	opWeightMsgCreateWhitelist = "op_weight_msg_whitelist"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateWhitelist int = 100

	opWeightMsgUpdateWhitelist = "op_weight_msg_whitelist"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateWhitelist int = 100

	opWeightMsgDeleteWhitelist = "op_weight_msg_whitelist"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteWhitelist int = 100

	opWeightMsgCreateMonoWhitelist = "op_weight_msg_mono_whitelist"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMonoWhitelist int = 100

	opWeightMsgUpdateMonoWhitelist = "op_weight_msg_mono_whitelist"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMonoWhitelist int = 100

	opWeightMsgDeleteMonoWhitelist = "op_weight_msg_mono_whitelist"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMonoWhitelist int = 100

	opWeightMsgJoinBuyers = "op_weight_msg_join_buyers"
	// TODO: Determine the simulation weight value
	defaultWeightMsgJoinBuyers int = 100

	opWeightMsgJoinSellers = "op_weight_msg_join_sellers"
	// TODO: Determine the simulation weight value
	defaultWeightMsgJoinSellers int = 100

	opWeightMsgJoinVoters = "op_weight_msg_join_voters"
	// TODO: Determine the simulation weight value
	defaultWeightMsgJoinVoters int = 100

	opWeightMsgCreateNewWhitelist = "op_weight_msg_create_new_whitelist"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateNewWhitelist int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	whitelistGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		BuyerList: []types.Buyer{
			{
				Buyer:   sample.AccAddress(),
				BuyerId: "0",
			},
			{
				Buyer:   sample.AccAddress(),
				BuyerId: "1",
			},
		},
		SellerList: []types.Seller{
			{
				Producer: sample.AccAddress(),
				SellerId: "0",
			},
			{
				Producer: sample.AccAddress(),
				SellerId: "1",
			},
		},
		VoterList: []types.Voter{
			{
				Reviewer: sample.AccAddress(),
				VoterId:  "0",
			},
			{
				Reviewer: sample.AccAddress(),
				VoterId:  "1",
			},
		},
		WhitelistList: []types.Whitelist{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		WhitelistCount: 2,
		MonoWhitelistList: []types.MonoWhitelist{
			{
				Governor:    sample.AccAddress(),
				WhitelistId: "0",
			},
			{
				Governor:    sample.AccAddress(),
				WhitelistId: "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&whitelistGenesis)
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

	var weightMsgCreateBuyer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBuyer, &weightMsgCreateBuyer, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBuyer = defaultWeightMsgCreateBuyer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBuyer,
		whitelistsimulation.SimulateMsgCreateBuyer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateBuyer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateBuyer, &weightMsgUpdateBuyer, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateBuyer = defaultWeightMsgUpdateBuyer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateBuyer,
		whitelistsimulation.SimulateMsgUpdateBuyer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBuyer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBuyer, &weightMsgDeleteBuyer, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBuyer = defaultWeightMsgDeleteBuyer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBuyer,
		whitelistsimulation.SimulateMsgDeleteBuyer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateSeller int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateSeller, &weightMsgCreateSeller, nil,
		func(_ *rand.Rand) {
			weightMsgCreateSeller = defaultWeightMsgCreateSeller
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateSeller,
		whitelistsimulation.SimulateMsgCreateSeller(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateSeller int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateSeller, &weightMsgUpdateSeller, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateSeller = defaultWeightMsgUpdateSeller
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateSeller,
		whitelistsimulation.SimulateMsgUpdateSeller(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteSeller int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteSeller, &weightMsgDeleteSeller, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteSeller = defaultWeightMsgDeleteSeller
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteSeller,
		whitelistsimulation.SimulateMsgDeleteSeller(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateVoter int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateVoter, &weightMsgCreateVoter, nil,
		func(_ *rand.Rand) {
			weightMsgCreateVoter = defaultWeightMsgCreateVoter
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateVoter,
		whitelistsimulation.SimulateMsgCreateVoter(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateVoter int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateVoter, &weightMsgUpdateVoter, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateVoter = defaultWeightMsgUpdateVoter
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateVoter,
		whitelistsimulation.SimulateMsgUpdateVoter(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteVoter int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteVoter, &weightMsgDeleteVoter, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteVoter = defaultWeightMsgDeleteVoter
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteVoter,
		whitelistsimulation.SimulateMsgDeleteVoter(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateWhitelist int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateWhitelist, &weightMsgCreateWhitelist, nil,
		func(_ *rand.Rand) {
			weightMsgCreateWhitelist = defaultWeightMsgCreateWhitelist
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateWhitelist,
		whitelistsimulation.SimulateMsgCreateWhitelist(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateWhitelist int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateWhitelist, &weightMsgUpdateWhitelist, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateWhitelist = defaultWeightMsgUpdateWhitelist
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateWhitelist,
		whitelistsimulation.SimulateMsgUpdateWhitelist(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteWhitelist int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteWhitelist, &weightMsgDeleteWhitelist, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteWhitelist = defaultWeightMsgDeleteWhitelist
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteWhitelist,
		whitelistsimulation.SimulateMsgDeleteWhitelist(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateMonoWhitelist int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateMonoWhitelist, &weightMsgCreateMonoWhitelist, nil,
		func(_ *rand.Rand) {
			weightMsgCreateMonoWhitelist = defaultWeightMsgCreateMonoWhitelist
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateMonoWhitelist,
		whitelistsimulation.SimulateMsgCreateMonoWhitelist(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateMonoWhitelist int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateMonoWhitelist, &weightMsgUpdateMonoWhitelist, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMonoWhitelist = defaultWeightMsgUpdateMonoWhitelist
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMonoWhitelist,
		whitelistsimulation.SimulateMsgUpdateMonoWhitelist(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteMonoWhitelist int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteMonoWhitelist, &weightMsgDeleteMonoWhitelist, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteMonoWhitelist = defaultWeightMsgDeleteMonoWhitelist
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteMonoWhitelist,
		whitelistsimulation.SimulateMsgDeleteMonoWhitelist(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgJoinBuyers int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgJoinBuyers, &weightMsgJoinBuyers, nil,
		func(_ *rand.Rand) {
			weightMsgJoinBuyers = defaultWeightMsgJoinBuyers
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgJoinBuyers,
		whitelistsimulation.SimulateMsgJoinBuyers(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgJoinSellers int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgJoinSellers, &weightMsgJoinSellers, nil,
		func(_ *rand.Rand) {
			weightMsgJoinSellers = defaultWeightMsgJoinSellers
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgJoinSellers,
		whitelistsimulation.SimulateMsgJoinSellers(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgJoinVoters int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgJoinVoters, &weightMsgJoinVoters, nil,
		func(_ *rand.Rand) {
			weightMsgJoinVoters = defaultWeightMsgJoinVoters
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgJoinVoters,
		whitelistsimulation.SimulateMsgJoinVoters(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateNewWhitelist int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateNewWhitelist, &weightMsgCreateNewWhitelist, nil,
		func(_ *rand.Rand) {
			weightMsgCreateNewWhitelist = defaultWeightMsgCreateNewWhitelist
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateNewWhitelist,
		whitelistsimulation.SimulateMsgCreateNewWhitelist(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
