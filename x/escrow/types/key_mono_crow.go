package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MonoCrowKeyPrefix is the prefix to retrieve all MonoCrow
	MonoCrowKeyPrefix = "MonoCrow/value/"
)

// MonoCrowKey returns the store key to retrieve a MonoCrow from the index fields
func MonoCrowKey(
	crowId string,
) []byte {
	var key []byte

	crowIdBytes := []byte(crowId)
	key = append(key, crowIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
