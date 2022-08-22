package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ReviewerKeyPrefix is the prefix to retrieve all Reviewer
	ReviewerKeyPrefix = "Reviewer/value/"
)

// ReviewerKey returns the store key to retrieve a Reviewer from the index fields
func ReviewerKey(
	accAddr string,
) []byte {
	var key []byte

	accAddrBytes := []byte(accAddr)
	key = append(key, accAddrBytes...)
	key = append(key, []byte("/")...)

	return key
}
