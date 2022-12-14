// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: whitelist/reviewer.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Reviewer struct {
	AccAddr string `protobuf:"bytes,1,opt,name=accAddr,proto3" json:"accAddr,omitempty"`
	VoterId string `protobuf:"bytes,2,opt,name=voterId,proto3" json:"voterId,omitempty"`
}

func (m *Reviewer) Reset()         { *m = Reviewer{} }
func (m *Reviewer) String() string { return proto.CompactTextString(m) }
func (*Reviewer) ProtoMessage()    {}
func (*Reviewer) Descriptor() ([]byte, []int) {
	return fileDescriptor_b54c9ee4b4a0f16a, []int{0}
}
func (m *Reviewer) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Reviewer) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Reviewer.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Reviewer) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Reviewer.Merge(m, src)
}
func (m *Reviewer) XXX_Size() int {
	return m.Size()
}
func (m *Reviewer) XXX_DiscardUnknown() {
	xxx_messageInfo_Reviewer.DiscardUnknown(m)
}

var xxx_messageInfo_Reviewer proto.InternalMessageInfo

func (m *Reviewer) GetAccAddr() string {
	if m != nil {
		return m.AccAddr
	}
	return ""
}

func (m *Reviewer) GetVoterId() string {
	if m != nil {
		return m.VoterId
	}
	return ""
}

func init() {
	proto.RegisterType((*Reviewer)(nil), "crowlabs.delta.whitelist.Reviewer")
}

func init() { proto.RegisterFile("whitelist/reviewer.proto", fileDescriptor_b54c9ee4b4a0f16a) }

var fileDescriptor_b54c9ee4b4a0f16a = []byte{
	// 175 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x28, 0xcf, 0xc8, 0x2c,
	0x49, 0xcd, 0xc9, 0x2c, 0x2e, 0xd1, 0x2f, 0x4a, 0x2d, 0xcb, 0x4c, 0x2d, 0x4f, 0x2d, 0xd2, 0x2b,
	0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92, 0x48, 0x2e, 0xca, 0x2f, 0xcf, 0x49, 0x4c, 0x2a, 0xd6, 0x4b,
	0x49, 0xcd, 0x29, 0x49, 0xd4, 0x83, 0x2b, 0x54, 0xb2, 0xe3, 0xe2, 0x08, 0x82, 0xaa, 0x15, 0x92,
	0xe0, 0x62, 0x4f, 0x4c, 0x4e, 0x76, 0x4c, 0x49, 0x29, 0x92, 0x60, 0x54, 0x60, 0xd4, 0xe0, 0x0c,
	0x82, 0x71, 0x41, 0x32, 0x65, 0xf9, 0x25, 0xa9, 0x45, 0x9e, 0x29, 0x12, 0x4c, 0x10, 0x19, 0x28,
	0xd7, 0xc9, 0xed, 0xc4, 0x23, 0x39, 0xc6, 0x0b, 0x8f, 0xe4, 0x18, 0x1f, 0x3c, 0x92, 0x63, 0x9c,
	0xf0, 0x58, 0x8e, 0xe1, 0xc2, 0x63, 0x39, 0x86, 0x1b, 0x8f, 0xe5, 0x18, 0xa2, 0x74, 0xd2, 0x33,
	0x4b, 0x32, 0x4a, 0x93, 0xf4, 0x92, 0xf3, 0x73, 0xf5, 0x41, 0xd6, 0xeb, 0x82, 0xec, 0xd7, 0x07,
	0xdb, 0xaf, 0x5f, 0xa1, 0x8f, 0x70, 0x6a, 0x49, 0x65, 0x41, 0x6a, 0x71, 0x12, 0x1b, 0xd8, 0xa1,
	0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x88, 0xc9, 0x78, 0x15, 0xc4, 0x00, 0x00, 0x00,
}

func (m *Reviewer) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Reviewer) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Reviewer) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.VoterId) > 0 {
		i -= len(m.VoterId)
		copy(dAtA[i:], m.VoterId)
		i = encodeVarintReviewer(dAtA, i, uint64(len(m.VoterId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.AccAddr) > 0 {
		i -= len(m.AccAddr)
		copy(dAtA[i:], m.AccAddr)
		i = encodeVarintReviewer(dAtA, i, uint64(len(m.AccAddr)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintReviewer(dAtA []byte, offset int, v uint64) int {
	offset -= sovReviewer(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Reviewer) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.AccAddr)
	if l > 0 {
		n += 1 + l + sovReviewer(uint64(l))
	}
	l = len(m.VoterId)
	if l > 0 {
		n += 1 + l + sovReviewer(uint64(l))
	}
	return n
}

func sovReviewer(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozReviewer(x uint64) (n int) {
	return sovReviewer(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Reviewer) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowReviewer
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Reviewer: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Reviewer: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AccAddr", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReviewer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReviewer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReviewer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AccAddr = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field VoterId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReviewer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReviewer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReviewer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.VoterId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipReviewer(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthReviewer
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipReviewer(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowReviewer
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowReviewer
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowReviewer
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthReviewer
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupReviewer
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthReviewer
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthReviewer        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowReviewer          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupReviewer = fmt.Errorf("proto: unexpected end of group")
)
