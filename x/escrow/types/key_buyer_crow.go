package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BuyerCrowKeyPrefix is the prefix to retrieve all BuyerCrow
	BuyerCrowKeyPrefix = "BuyerCrow/value/"
)

// BuyerCrowKey returns the store key to retrieve a BuyerCrow from the index fields
func BuyerCrowKey(
	crowId string,
	buyerId string,
) []byte {
	var key []byte

	crowIdBytes := []byte(crowId)
	key = append(key, crowIdBytes...)
	key = append(key, []byte("/")...)

	buyerIdBytes := []byte(buyerId)
	key = append(key, buyerIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
