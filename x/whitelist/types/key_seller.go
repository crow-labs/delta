package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SellerKeyPrefix is the prefix to retrieve all Seller
	SellerKeyPrefix = "Seller/value/"
)

// SellerKey returns the store key to retrieve a Seller from the index fields
func SellerKey(
	sellerId string,
) []byte {
	var key []byte

	sellerIdBytes := []byte(sellerId)
	key = append(key, sellerIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
