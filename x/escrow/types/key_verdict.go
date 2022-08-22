package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// VerdictKeyPrefix is the prefix to retrieve all Verdict
	VerdictKeyPrefix = "Verdict/value/"
)

// VerdictKey returns the store key to retrieve a Verdict from the index fields
func VerdictKey(
	verdictId string,
) []byte {
	var key []byte

	verdictIdBytes := []byte(verdictId)
	key = append(key, verdictIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
