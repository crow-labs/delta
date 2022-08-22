package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// OrderKeyPrefix is the prefix to retrieve all Order
	OrderKeyPrefix = "Order/value/"
)

// OrderKey returns the store key to retrieve a Order from the index fields
func OrderKey(
	listingId string,
	buyerId string,
) []byte {
	var key []byte

	listingIdBytes := []byte(listingId)
	key = append(key, listingIdBytes...)
	key = append(key, []byte("/")...)

	buyerIdBytes := []byte(buyerId)
	key = append(key, buyerIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
