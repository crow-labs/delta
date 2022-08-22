package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MonoListingKeyPrefix is the prefix to retrieve all MonoListing
	MonoListingKeyPrefix = "MonoListing/value/"
)

// MonoListingKey returns the store key to retrieve a MonoListing from the index fields
func MonoListingKey(
	listingId string,
) []byte {
	var key []byte

	listingIdBytes := []byte(listingId)
	key = append(key, listingIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
