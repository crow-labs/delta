package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CrowKeyPrefix is the prefix to retrieve all Crow
	CrowKeyPrefix = "Crow/value/"
)

// CrowKey returns the store key to retrieve a Crow from the index fields
func CrowKey(
	orderId string,
	listingId string,
) []byte {
	var key []byte

	orderIdBytes := []byte(orderId)
	key = append(key, orderIdBytes...)
	key = append(key, []byte("/")...)

	listingIdBytes := []byte(listingId)
	key = append(key, listingIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
