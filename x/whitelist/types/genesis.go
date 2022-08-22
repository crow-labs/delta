package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		UserList:          []User{},
		BuyerList:         []Buyer{},
		ProducerList:      []Producer{},
		SellerList:        []Seller{},
		ReviewerList:      []Reviewer{},
		VoterList:         []Voter{},
		WhitelistList:     []Whitelist{},
		MonoWhitelistList: []MonoWhitelist{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in user
	userIndexMap := make(map[string]struct{})

	for _, elem := range gs.UserList {
		index := string(UserKey(elem.AccAddr))
		if _, ok := userIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for user")
		}
		userIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in buyer
	buyerIndexMap := make(map[string]struct{})

	for _, elem := range gs.BuyerList {
		index := string(BuyerKey(elem.BuyerId))
		if _, ok := buyerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for buyer")
		}
		buyerIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in producer
	producerIndexMap := make(map[string]struct{})

	for _, elem := range gs.ProducerList {
		index := string(ProducerKey(elem.AccAddr))
		if _, ok := producerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for producer")
		}
		producerIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in seller
	sellerIndexMap := make(map[string]struct{})

	for _, elem := range gs.SellerList {
		index := string(SellerKey(elem.SellerId))
		if _, ok := sellerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for seller")
		}
		sellerIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in reviewer
	reviewerIndexMap := make(map[string]struct{})

	for _, elem := range gs.ReviewerList {
		index := string(ReviewerKey(elem.AccAddr))
		if _, ok := reviewerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for reviewer")
		}
		reviewerIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in voter
	voterIndexMap := make(map[string]struct{})

	for _, elem := range gs.VoterList {
		index := string(VoterKey(elem.VoterId))
		if _, ok := voterIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for voter")
		}
		voterIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in whitelist
	whitelistIdMap := make(map[uint64]bool)
	whitelistCount := gs.GetWhitelistCount()
	for _, elem := range gs.WhitelistList {
		if _, ok := whitelistIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for whitelist")
		}
		if elem.Id >= whitelistCount {
			return fmt.Errorf("whitelist id should be lower or equal than the last id")
		}
		whitelistIdMap[elem.Id] = true
	}
	// Check for duplicated index in monoWhitelist
	monoWhitelistIndexMap := make(map[string]struct{})

	for _, elem := range gs.MonoWhitelistList {
		index := string(MonoWhitelistKey(elem.WhitelistId))
		if _, ok := monoWhitelistIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for monoWhitelist")
		}
		monoWhitelistIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
