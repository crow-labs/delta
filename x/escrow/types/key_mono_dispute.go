package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MonoDisputeKeyPrefix is the prefix to retrieve all MonoDispute
	MonoDisputeKeyPrefix = "MonoDispute/value/"
)

// MonoDisputeKey returns the store key to retrieve a MonoDispute from the index fields
func MonoDisputeKey(
	disputeId string,
) []byte {
	var key []byte

	disputeIdBytes := []byte(disputeId)
	key = append(key, disputeIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
