package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SellerMonoCrowKeyPrefix is the prefix to retrieve all SellerMonoCrow
	SellerMonoCrowKeyPrefix = "SellerMonoCrow/value/"
)

// SellerMonoCrowKey returns the store key to retrieve a SellerMonoCrow from the index fields
func SellerMonoCrowKey(
	sellerCrowId string,
) []byte {
	var key []byte

	sellerCrowIdBytes := []byte(sellerCrowId)
	key = append(key, sellerCrowIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
