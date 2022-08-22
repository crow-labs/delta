package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BuyerKeyPrefix is the prefix to retrieve all Buyer
	BuyerKeyPrefix = "Buyer/value/"
)

// BuyerKey returns the store key to retrieve a Buyer from the index fields
func BuyerKey(
	buyerId string,
) []byte {
	var key []byte

	buyerIdBytes := []byte(buyerId)
	key = append(key, buyerIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
