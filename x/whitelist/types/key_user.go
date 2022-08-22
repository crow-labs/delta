package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// UserKeyPrefix is the prefix to retrieve all User
	UserKeyPrefix = "User/value/"
)

// UserKey returns the store key to retrieve a User from the index fields
func UserKey(
	accAddr string,
) []byte {
	var key []byte

	accAddrBytes := []byte(accAddr)
	key = append(key, accAddrBytes...)
	key = append(key, []byte("/")...)

	return key
}
