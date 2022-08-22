package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ListingKeyPrefix is the prefix to retrieve all Listing
	ListingKeyPrefix = "Listing/value/"
)

// ListingKey returns the store key to retrieve a Listing from the index fields
func ListingKey(
	whitelistId string,
	sellerId string,
) []byte {
	var key []byte

	whitelistIdBytes := []byte(whitelistId)
	key = append(key, whitelistIdBytes...)
	key = append(key, []byte("/")...)

	sellerIdBytes := []byte(sellerId)
	key = append(key, sellerIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
