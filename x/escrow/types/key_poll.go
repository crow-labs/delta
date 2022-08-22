package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// PollKeyPrefix is the prefix to retrieve all Poll
	PollKeyPrefix = "Poll/value/"
)

// PollKey returns the store key to retrieve a Poll from the index fields
func PollKey(
	crowId string,
	disputeId string,
) []byte {
	var key []byte

	crowIdBytes := []byte(crowId)
	key = append(key, crowIdBytes...)
	key = append(key, []byte("/")...)

	disputeIdBytes := []byte(disputeId)
	key = append(key, disputeIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
