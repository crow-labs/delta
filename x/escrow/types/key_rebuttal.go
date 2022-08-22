package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// RebuttalKeyPrefix is the prefix to retrieve all Rebuttal
	RebuttalKeyPrefix = "Rebuttal/value/"
)

// RebuttalKey returns the store key to retrieve a Rebuttal from the index fields
func RebuttalKey(
	disputeId string,
	defendantId string,
) []byte {
	var key []byte

	disputeIdBytes := []byte(disputeId)
	key = append(key, disputeIdBytes...)
	key = append(key, []byte("/")...)

	defendantIdBytes := []byte(defendantId)
	key = append(key, defendantIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
