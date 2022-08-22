package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BallotKeyPrefix is the prefix to retrieve all Ballot
	BallotKeyPrefix = "Ballot/value/"
)

// BallotKey returns the store key to retrieve a Ballot from the index fields
func BallotKey(
	disputeId string,
	voterId string,
) []byte {
	var key []byte

	disputeIdBytes := []byte(disputeId)
	key = append(key, disputeIdBytes...)
	key = append(key, []byte("/")...)

	voterIdBytes := []byte(voterId)
	key = append(key, voterIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
