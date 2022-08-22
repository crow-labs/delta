package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// VoteKeyPrefix is the prefix to retrieve all Vote
	VoteKeyPrefix = "Vote/value/"
)

// VoteKey returns the store key to retrieve a Vote from the index fields
func VoteKey(
	voteId string,
) []byte {
	var key []byte

	voteIdBytes := []byte(voteId)
	key = append(key, voteIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
