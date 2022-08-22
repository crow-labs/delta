package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MonoOrderKeyPrefix is the prefix to retrieve all MonoOrder
	MonoOrderKeyPrefix = "MonoOrder/value/"
)

// MonoOrderKey returns the store key to retrieve a MonoOrder from the index fields
func MonoOrderKey(
	orderId string,
) []byte {
	var key []byte

	orderIdBytes := []byte(orderId)
	key = append(key, orderIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
