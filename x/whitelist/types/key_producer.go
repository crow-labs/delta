package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ProducerKeyPrefix is the prefix to retrieve all Producer
	ProducerKeyPrefix = "Producer/value/"
)

// ProducerKey returns the store key to retrieve a Producer from the index fields
func ProducerKey(
	accAddr string,
) []byte {
	var key []byte

	accAddrBytes := []byte(accAddr)
	key = append(key, accAddrBytes...)
	key = append(key, []byte("/")...)

	return key
}
