package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:             PortID,
		BuyerCrowList:      []BuyerCrow{},
		BuyerMonoCrowList:  []BuyerMonoCrow{},
		SellerCrowList:     []SellerCrow{},
		SellerMonoCrowList: []SellerMonoCrow{},
		CrowList:           []Crow{},
		MonoCrowList:       []MonoCrow{},
		DisputeList:        []Dispute{},
		MonoDisputeList:    []MonoDispute{},
		RebuttalList:       []Rebuttal{},
		MonoRebutalList:    []MonoRebutal{},
		BallotList:         []Ballot{},
		VoteList:           []Vote{},
		PollList:           []Poll{},
		VerdictList:        []Verdict{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated index in buyerCrow
	buyerCrowIndexMap := make(map[string]struct{})

	for _, elem := range gs.BuyerCrowList {
		index := string(BuyerCrowKey(elem.CrowId, elem.BuyerId))
		if _, ok := buyerCrowIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for buyerCrow")
		}
		buyerCrowIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in buyerMonoCrow
	buyerMonoCrowIndexMap := make(map[string]struct{})

	for _, elem := range gs.BuyerMonoCrowList {
		index := string(BuyerMonoCrowKey(elem.BuyerCrowId))
		if _, ok := buyerMonoCrowIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for buyerMonoCrow")
		}
		buyerMonoCrowIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in sellerCrow
	sellerCrowIndexMap := make(map[string]struct{})

	for _, elem := range gs.SellerCrowList {
		index := string(SellerCrowKey(elem.CrowId, elem.SellerId))
		if _, ok := sellerCrowIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for sellerCrow")
		}
		sellerCrowIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in sellerMonoCrow
	sellerMonoCrowIndexMap := make(map[string]struct{})

	for _, elem := range gs.SellerMonoCrowList {
		index := string(SellerMonoCrowKey(elem.SellerCrowId))
		if _, ok := sellerMonoCrowIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for sellerMonoCrow")
		}
		sellerMonoCrowIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in crow
	crowIndexMap := make(map[string]struct{})

	for _, elem := range gs.CrowList {
		index := string(CrowKey(elem.OrderId, elem.ListingId))
		if _, ok := crowIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for crow")
		}
		crowIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in monoCrow
	monoCrowIndexMap := make(map[string]struct{})

	for _, elem := range gs.MonoCrowList {
		index := string(MonoCrowKey(elem.CrowId))
		if _, ok := monoCrowIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for monoCrow")
		}
		monoCrowIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in dispute
	disputeIndexMap := make(map[string]struct{})

	for _, elem := range gs.DisputeList {
		index := string(DisputeKey(elem.CrowId, elem.PlaintiffId))
		if _, ok := disputeIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for dispute")
		}
		disputeIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in monoDispute
	monoDisputeIndexMap := make(map[string]struct{})

	for _, elem := range gs.MonoDisputeList {
		index := string(MonoDisputeKey(elem.DisputeId))
		if _, ok := monoDisputeIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for monoDispute")
		}
		monoDisputeIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in rebuttal
	rebuttalIndexMap := make(map[string]struct{})

	for _, elem := range gs.RebuttalList {
		index := string(RebuttalKey(elem.DisputeId, elem.DefendantId))
		if _, ok := rebuttalIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for rebuttal")
		}
		rebuttalIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in monoRebutal
	monoRebutalIndexMap := make(map[string]struct{})

	for _, elem := range gs.MonoRebutalList {
		index := string(MonoRebutalKey(elem.RebuttalId))
		if _, ok := monoRebutalIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for monoRebutal")
		}
		monoRebutalIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in ballot
	ballotIndexMap := make(map[string]struct{})

	for _, elem := range gs.BallotList {
		index := string(BallotKey(elem.DisputeId, elem.VoterId))
		if _, ok := ballotIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for ballot")
		}
		ballotIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in vote
	voteIndexMap := make(map[string]struct{})

	for _, elem := range gs.VoteList {
		index := string(VoteKey(elem.VoteId))
		if _, ok := voteIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for vote")
		}
		voteIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in poll
	pollIndexMap := make(map[string]struct{})

	for _, elem := range gs.PollList {
		index := string(PollKey(elem.CrowId, elem.DisputeId))
		if _, ok := pollIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for poll")
		}
		pollIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in verdict
	verdictIndexMap := make(map[string]struct{})

	for _, elem := range gs.VerdictList {
		index := string(VerdictKey(elem.VerdictId))
		if _, ok := verdictIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for verdict")
		}
		verdictIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
