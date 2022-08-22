package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BuyerMonoCrowKeyPrefix is the prefix to retrieve all BuyerMonoCrow
	BuyerMonoCrowKeyPrefix = "BuyerMonoCrow/value/"
)

// BuyerMonoCrowKey returns the store key to retrieve a BuyerMonoCrow from the index fields
func BuyerMonoCrowKey(
	buyerCrowId string,
) []byte {
	var key []byte

	buyerCrowIdBytes := []byte(buyerCrowId)
	key = append(key, buyerCrowIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
