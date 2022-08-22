package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MonoRebutalKeyPrefix is the prefix to retrieve all MonoRebutal
	MonoRebutalKeyPrefix = "MonoRebutal/value/"
)

// MonoRebutalKey returns the store key to retrieve a MonoRebutal from the index fields
func MonoRebutalKey(
	rebuttalId string,
) []byte {
	var key []byte

	rebuttalIdBytes := []byte(rebuttalId)
	key = append(key, rebuttalIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
