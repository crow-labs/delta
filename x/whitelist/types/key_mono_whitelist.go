package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MonoWhitelistKeyPrefix is the prefix to retrieve all MonoWhitelist
	MonoWhitelistKeyPrefix = "MonoWhitelist/value/"
)

// MonoWhitelistKey returns the store key to retrieve a MonoWhitelist from the index fields
func MonoWhitelistKey(
	whitelistId string,
) []byte {
	var key []byte

	whitelistIdBytes := []byte(whitelistId)
	key = append(key, whitelistIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
