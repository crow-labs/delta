package escrow

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/crow-labs/delta/testutil/sample"
	escrowsimulation "github.com/crow-labs/delta/x/escrow/simulation"
	"github.com/crow-labs/delta/x/escrow/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = escrowsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateBuyerMonoCrow = "op_weight_msg_buyer_mono_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBuyerMonoCrow int = 100

	opWeightMsgUpdateBuyerMonoCrow = "op_weight_msg_buyer_mono_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateBuyerMonoCrow int = 100

	opWeightMsgDeleteBuyerMonoCrow = "op_weight_msg_buyer_mono_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBuyerMonoCrow int = 100

	opWeightMsgCreateSellerMonoCrow = "op_weight_msg_seller_mono_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateSellerMonoCrow int = 100

	opWeightMsgUpdateSellerMonoCrow = "op_weight_msg_seller_mono_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateSellerMonoCrow int = 100

	opWeightMsgDeleteSellerMonoCrow = "op_weight_msg_seller_mono_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteSellerMonoCrow int = 100

	opWeightMsgCreateMonoCrow = "op_weight_msg_mono_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMonoCrow int = 100

	opWeightMsgUpdateMonoCrow = "op_weight_msg_mono_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMonoCrow int = 100

	opWeightMsgDeleteMonoCrow = "op_weight_msg_mono_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMonoCrow int = 100

	opWeightMsgCreateMonoDispute = "op_weight_msg_mono_dispute"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMonoDispute int = 100

	opWeightMsgUpdateMonoDispute = "op_weight_msg_mono_dispute"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMonoDispute int = 100

	opWeightMsgDeleteMonoDispute = "op_weight_msg_mono_dispute"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMonoDispute int = 100

	opWeightMsgCreateMonoRebutal = "op_weight_msg_mono_rebutal"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMonoRebutal int = 100

	opWeightMsgUpdateMonoRebutal = "op_weight_msg_mono_rebutal"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMonoRebutal int = 100

	opWeightMsgDeleteMonoRebutal = "op_weight_msg_mono_rebutal"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMonoRebutal int = 100

	opWeightMsgCreateVote = "op_weight_msg_vote"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateVote int = 100

	opWeightMsgUpdateVote = "op_weight_msg_vote"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateVote int = 100

	opWeightMsgDeleteVote = "op_weight_msg_vote"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteVote int = 100

	opWeightMsgCreateVerdict = "op_weight_msg_verdict"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateVerdict int = 100

	opWeightMsgUpdateVerdict = "op_weight_msg_verdict"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateVerdict int = 100

	opWeightMsgDeleteVerdict = "op_weight_msg_verdict"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteVerdict int = 100

	opWeightMsgBeginCrow = "op_weight_msg_begin_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBeginCrow int = 100

	opWeightMsgJoinCrow = "op_weight_msg_join_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgJoinCrow int = 100

	opWeightMsgSellerRaiseDispute = "op_weight_msg_seller_raise_dispute"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSellerRaiseDispute int = 100

	opWeightMsgBuyerRaiseDispute = "op_weight_msg_buyer_raise_dispute"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBuyerRaiseDispute int = 100

	opWeightMsgSellerDisputeRebuttal = "op_weight_msg_seller_dispute_rebuttal"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSellerDisputeRebuttal int = 100

	opWeightMsgBuyerDisputeRebuttal = "op_weight_msg_buyer_dispute_rebuttal"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBuyerDisputeRebuttal int = 100

	opWeightMsgVoteOnDispute = "op_weight_msg_vote_on_dispute"
	// TODO: Determine the simulation weight value
	defaultWeightMsgVoteOnDispute int = 100

	opWeightMsgReleaseCrow = "op_weight_msg_release_crow"
	// TODO: Determine the simulation weight value
	defaultWeightMsgReleaseCrow int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	escrowGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		BuyerMonoCrowList: []types.BuyerMonoCrow{
			{
				Buyer:       sample.AccAddress(),
				BuyerCrowId: "0",
			},
			{
				Buyer:       sample.AccAddress(),
				BuyerCrowId: "1",
			},
		},
		SellerMonoCrowList: []types.SellerMonoCrow{
			{
				Seller:       sample.AccAddress(),
				SellerCrowId: "0",
			},
			{
				Seller:       sample.AccAddress(),
				SellerCrowId: "1",
			},
		},
		MonoCrowList: []types.MonoCrow{
			{
				Seller: sample.AccAddress(),
				CrowId: "0",
			},
			{
				Seller: sample.AccAddress(),
				CrowId: "1",
			},
		},
		MonoDisputeList: []types.MonoDispute{
			{
				Plaintiff: sample.AccAddress(),
				DisputeId: "0",
			},
			{
				Plaintiff: sample.AccAddress(),
				DisputeId: "1",
			},
		},
		MonoRebutalList: []types.MonoRebutal{
			{
				Defendant:  sample.AccAddress(),
				RebuttalId: "0",
			},
			{
				Defendant:  sample.AccAddress(),
				RebuttalId: "1",
			},
		},
		VoteList: []types.Vote{
			{
				Voter:  sample.AccAddress(),
				VoteId: "0",
			},
			{
				Voter:  sample.AccAddress(),
				VoteId: "1",
			},
		},
		VerdictList: []types.Verdict{
			{
				Creator:   sample.AccAddress(),
				VerdictId: "0",
			},
			{
				Creator:   sample.AccAddress(),
				VerdictId: "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&escrowGenesis)
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

	var weightMsgCreateBuyerMonoCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBuyerMonoCrow, &weightMsgCreateBuyerMonoCrow, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBuyerMonoCrow = defaultWeightMsgCreateBuyerMonoCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBuyerMonoCrow,
		escrowsimulation.SimulateMsgCreateBuyerMonoCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateBuyerMonoCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateBuyerMonoCrow, &weightMsgUpdateBuyerMonoCrow, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateBuyerMonoCrow = defaultWeightMsgUpdateBuyerMonoCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateBuyerMonoCrow,
		escrowsimulation.SimulateMsgUpdateBuyerMonoCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBuyerMonoCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBuyerMonoCrow, &weightMsgDeleteBuyerMonoCrow, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBuyerMonoCrow = defaultWeightMsgDeleteBuyerMonoCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBuyerMonoCrow,
		escrowsimulation.SimulateMsgDeleteBuyerMonoCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateSellerMonoCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateSellerMonoCrow, &weightMsgCreateSellerMonoCrow, nil,
		func(_ *rand.Rand) {
			weightMsgCreateSellerMonoCrow = defaultWeightMsgCreateSellerMonoCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateSellerMonoCrow,
		escrowsimulation.SimulateMsgCreateSellerMonoCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateSellerMonoCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateSellerMonoCrow, &weightMsgUpdateSellerMonoCrow, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateSellerMonoCrow = defaultWeightMsgUpdateSellerMonoCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateSellerMonoCrow,
		escrowsimulation.SimulateMsgUpdateSellerMonoCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteSellerMonoCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteSellerMonoCrow, &weightMsgDeleteSellerMonoCrow, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteSellerMonoCrow = defaultWeightMsgDeleteSellerMonoCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteSellerMonoCrow,
		escrowsimulation.SimulateMsgDeleteSellerMonoCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateMonoCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateMonoCrow, &weightMsgCreateMonoCrow, nil,
		func(_ *rand.Rand) {
			weightMsgCreateMonoCrow = defaultWeightMsgCreateMonoCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateMonoCrow,
		escrowsimulation.SimulateMsgCreateMonoCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateMonoCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateMonoCrow, &weightMsgUpdateMonoCrow, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMonoCrow = defaultWeightMsgUpdateMonoCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMonoCrow,
		escrowsimulation.SimulateMsgUpdateMonoCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteMonoCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteMonoCrow, &weightMsgDeleteMonoCrow, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteMonoCrow = defaultWeightMsgDeleteMonoCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteMonoCrow,
		escrowsimulation.SimulateMsgDeleteMonoCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateMonoDispute int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateMonoDispute, &weightMsgCreateMonoDispute, nil,
		func(_ *rand.Rand) {
			weightMsgCreateMonoDispute = defaultWeightMsgCreateMonoDispute
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateMonoDispute,
		escrowsimulation.SimulateMsgCreateMonoDispute(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateMonoDispute int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateMonoDispute, &weightMsgUpdateMonoDispute, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMonoDispute = defaultWeightMsgUpdateMonoDispute
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMonoDispute,
		escrowsimulation.SimulateMsgUpdateMonoDispute(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteMonoDispute int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteMonoDispute, &weightMsgDeleteMonoDispute, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteMonoDispute = defaultWeightMsgDeleteMonoDispute
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteMonoDispute,
		escrowsimulation.SimulateMsgDeleteMonoDispute(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateMonoRebutal int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateMonoRebutal, &weightMsgCreateMonoRebutal, nil,
		func(_ *rand.Rand) {
			weightMsgCreateMonoRebutal = defaultWeightMsgCreateMonoRebutal
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateMonoRebutal,
		escrowsimulation.SimulateMsgCreateMonoRebutal(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateMonoRebutal int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateMonoRebutal, &weightMsgUpdateMonoRebutal, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMonoRebutal = defaultWeightMsgUpdateMonoRebutal
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMonoRebutal,
		escrowsimulation.SimulateMsgUpdateMonoRebutal(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteMonoRebutal int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteMonoRebutal, &weightMsgDeleteMonoRebutal, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteMonoRebutal = defaultWeightMsgDeleteMonoRebutal
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteMonoRebutal,
		escrowsimulation.SimulateMsgDeleteMonoRebutal(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateVote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateVote, &weightMsgCreateVote, nil,
		func(_ *rand.Rand) {
			weightMsgCreateVote = defaultWeightMsgCreateVote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateVote,
		escrowsimulation.SimulateMsgCreateVote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateVote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateVote, &weightMsgUpdateVote, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateVote = defaultWeightMsgUpdateVote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateVote,
		escrowsimulation.SimulateMsgUpdateVote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteVote int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteVote, &weightMsgDeleteVote, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteVote = defaultWeightMsgDeleteVote
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteVote,
		escrowsimulation.SimulateMsgDeleteVote(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateVerdict int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateVerdict, &weightMsgCreateVerdict, nil,
		func(_ *rand.Rand) {
			weightMsgCreateVerdict = defaultWeightMsgCreateVerdict
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateVerdict,
		escrowsimulation.SimulateMsgCreateVerdict(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateVerdict int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateVerdict, &weightMsgUpdateVerdict, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateVerdict = defaultWeightMsgUpdateVerdict
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateVerdict,
		escrowsimulation.SimulateMsgUpdateVerdict(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteVerdict int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteVerdict, &weightMsgDeleteVerdict, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteVerdict = defaultWeightMsgDeleteVerdict
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteVerdict,
		escrowsimulation.SimulateMsgDeleteVerdict(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBeginCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBeginCrow, &weightMsgBeginCrow, nil,
		func(_ *rand.Rand) {
			weightMsgBeginCrow = defaultWeightMsgBeginCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBeginCrow,
		escrowsimulation.SimulateMsgBeginCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgJoinCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgJoinCrow, &weightMsgJoinCrow, nil,
		func(_ *rand.Rand) {
			weightMsgJoinCrow = defaultWeightMsgJoinCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgJoinCrow,
		escrowsimulation.SimulateMsgJoinCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSellerRaiseDispute int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSellerRaiseDispute, &weightMsgSellerRaiseDispute, nil,
		func(_ *rand.Rand) {
			weightMsgSellerRaiseDispute = defaultWeightMsgSellerRaiseDispute
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSellerRaiseDispute,
		escrowsimulation.SimulateMsgSellerRaiseDispute(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBuyerRaiseDispute int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBuyerRaiseDispute, &weightMsgBuyerRaiseDispute, nil,
		func(_ *rand.Rand) {
			weightMsgBuyerRaiseDispute = defaultWeightMsgBuyerRaiseDispute
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBuyerRaiseDispute,
		escrowsimulation.SimulateMsgBuyerRaiseDispute(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSellerDisputeRebuttal int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSellerDisputeRebuttal, &weightMsgSellerDisputeRebuttal, nil,
		func(_ *rand.Rand) {
			weightMsgSellerDisputeRebuttal = defaultWeightMsgSellerDisputeRebuttal
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSellerDisputeRebuttal,
		escrowsimulation.SimulateMsgSellerDisputeRebuttal(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBuyerDisputeRebuttal int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBuyerDisputeRebuttal, &weightMsgBuyerDisputeRebuttal, nil,
		func(_ *rand.Rand) {
			weightMsgBuyerDisputeRebuttal = defaultWeightMsgBuyerDisputeRebuttal
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBuyerDisputeRebuttal,
		escrowsimulation.SimulateMsgBuyerDisputeRebuttal(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgVoteOnDispute int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgVoteOnDispute, &weightMsgVoteOnDispute, nil,
		func(_ *rand.Rand) {
			weightMsgVoteOnDispute = defaultWeightMsgVoteOnDispute
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgVoteOnDispute,
		escrowsimulation.SimulateMsgVoteOnDispute(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgReleaseCrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgReleaseCrow, &weightMsgReleaseCrow, nil,
		func(_ *rand.Rand) {
			weightMsgReleaseCrow = defaultWeightMsgReleaseCrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgReleaseCrow,
		escrowsimulation.SimulateMsgReleaseCrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
