package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SellerCrowKeyPrefix is the prefix to retrieve all SellerCrow
	SellerCrowKeyPrefix = "SellerCrow/value/"
)

// SellerCrowKey returns the store key to retrieve a SellerCrow from the index fields
func SellerCrowKey(
	crowId string,
	sellerId string,
) []byte {
	var key []byte

	crowIdBytes := []byte(crowId)
	key = append(key, crowIdBytes...)
	key = append(key, []byte("/")...)

	sellerIdBytes := []byte(sellerId)
	key = append(key, sellerIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
