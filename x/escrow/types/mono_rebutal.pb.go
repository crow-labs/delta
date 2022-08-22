// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: escrow/mono_rebutal.proto

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

type MonoRebutal struct {
	RebuttalId string `protobuf:"bytes,1,opt,name=rebuttalId,proto3" json:"rebuttalId,omitempty"`
	Desc       string `protobuf:"bytes,2,opt,name=desc,proto3" json:"desc,omitempty"`
	Evidence   string `protobuf:"bytes,3,opt,name=evidence,proto3" json:"evidence,omitempty"`
	Defendant  string `protobuf:"bytes,4,opt,name=defendant,proto3" json:"defendant,omitempty"`
}

func (m *MonoRebutal) Reset()         { *m = MonoRebutal{} }
func (m *MonoRebutal) String() string { return proto.CompactTextString(m) }
func (*MonoRebutal) ProtoMessage()    {}
func (*MonoRebutal) Descriptor() ([]byte, []int) {
	return fileDescriptor_e016f2b26222593a, []int{0}
}
func (m *MonoRebutal) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MonoRebutal) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MonoRebutal.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MonoRebutal) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MonoRebutal.Merge(m, src)
}
func (m *MonoRebutal) XXX_Size() int {
	return m.Size()
}
func (m *MonoRebutal) XXX_DiscardUnknown() {
	xxx_messageInfo_MonoRebutal.DiscardUnknown(m)
}

var xxx_messageInfo_MonoRebutal proto.InternalMessageInfo

func (m *MonoRebutal) GetRebuttalId() string {
	if m != nil {
		return m.RebuttalId
	}
	return ""
}

func (m *MonoRebutal) GetDesc() string {
	if m != nil {
		return m.Desc
	}
	return ""
}

func (m *MonoRebutal) GetEvidence() string {
	if m != nil {
		return m.Evidence
	}
	return ""
}

func (m *MonoRebutal) GetDefendant() string {
	if m != nil {
		return m.Defendant
	}
	return ""
}

func init() {
	proto.RegisterType((*MonoRebutal)(nil), "crowlabs.delta.escrow.MonoRebutal")
}

func init() { proto.RegisterFile("escrow/mono_rebutal.proto", fileDescriptor_e016f2b26222593a) }

var fileDescriptor_e016f2b26222593a = []byte{
	// 214 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4c, 0x2d, 0x4e, 0x2e,
	0xca, 0x2f, 0xd7, 0xcf, 0xcd, 0xcf, 0xcb, 0x8f, 0x2f, 0x4a, 0x4d, 0x2a, 0x2d, 0x49, 0xcc, 0xd1,
	0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x05, 0x49, 0xe4, 0x24, 0x26, 0x15, 0xeb, 0xa5, 0xa4,
	0xe6, 0x94, 0x24, 0xea, 0x41, 0x54, 0x2a, 0x55, 0x73, 0x71, 0xfb, 0xe6, 0xe7, 0xe5, 0x07, 0x41,
	0xd4, 0x0a, 0xc9, 0x71, 0x71, 0x81, 0xb5, 0x95, 0x24, 0xe6, 0x78, 0xa6, 0x48, 0x30, 0x2a, 0x30,
	0x6a, 0x70, 0x06, 0x21, 0x89, 0x08, 0x09, 0x71, 0xb1, 0xa4, 0xa4, 0x16, 0x27, 0x4b, 0x30, 0x81,
	0x65, 0xc0, 0x6c, 0x21, 0x29, 0x2e, 0x8e, 0xd4, 0xb2, 0xcc, 0x94, 0xd4, 0xbc, 0xe4, 0x54, 0x09,
	0x66, 0xb0, 0x38, 0x9c, 0x2f, 0x24, 0xc3, 0xc5, 0x99, 0x92, 0x9a, 0x96, 0x9a, 0x97, 0x92, 0x98,
	0x57, 0x22, 0xc1, 0x02, 0x96, 0x44, 0x08, 0x38, 0x39, 0x9f, 0x78, 0x24, 0xc7, 0x78, 0xe1, 0x91,
	0x1c, 0xe3, 0x83, 0x47, 0x72, 0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78, 0x2c, 0xc7, 0x70, 0xe3,
	0xb1, 0x1c, 0x43, 0x94, 0x66, 0x7a, 0x66, 0x49, 0x46, 0x69, 0x92, 0x5e, 0x72, 0x7e, 0xae, 0x3e,
	0xc8, 0x9d, 0xba, 0x20, 0x97, 0xeb, 0x83, 0x5d, 0xae, 0x5f, 0xa1, 0x0f, 0xf5, 0x65, 0x49, 0x65,
	0x41, 0x6a, 0x71, 0x12, 0x1b, 0xd8, 0x7f, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x65, 0x94,
	0xa8, 0x22, 0xfc, 0x00, 0x00, 0x00,
}

func (m *MonoRebutal) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MonoRebutal) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MonoRebutal) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Defendant) > 0 {
		i -= len(m.Defendant)
		copy(dAtA[i:], m.Defendant)
		i = encodeVarintMonoRebutal(dAtA, i, uint64(len(m.Defendant)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Evidence) > 0 {
		i -= len(m.Evidence)
		copy(dAtA[i:], m.Evidence)
		i = encodeVarintMonoRebutal(dAtA, i, uint64(len(m.Evidence)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Desc) > 0 {
		i -= len(m.Desc)
		copy(dAtA[i:], m.Desc)
		i = encodeVarintMonoRebutal(dAtA, i, uint64(len(m.Desc)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.RebuttalId) > 0 {
		i -= len(m.RebuttalId)
		copy(dAtA[i:], m.RebuttalId)
		i = encodeVarintMonoRebutal(dAtA, i, uint64(len(m.RebuttalId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintMonoRebutal(dAtA []byte, offset int, v uint64) int {
	offset -= sovMonoRebutal(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MonoRebutal) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.RebuttalId)
	if l > 0 {
		n += 1 + l + sovMonoRebutal(uint64(l))
	}
	l = len(m.Desc)
	if l > 0 {
		n += 1 + l + sovMonoRebutal(uint64(l))
	}
	l = len(m.Evidence)
	if l > 0 {
		n += 1 + l + sovMonoRebutal(uint64(l))
	}
	l = len(m.Defendant)
	if l > 0 {
		n += 1 + l + sovMonoRebutal(uint64(l))
	}
	return n
}

func sovMonoRebutal(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozMonoRebutal(x uint64) (n int) {
	return sovMonoRebutal(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MonoRebutal) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMonoRebutal
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
			return fmt.Errorf("proto: MonoRebutal: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MonoRebutal: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RebuttalId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoRebutal
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
				return ErrInvalidLengthMonoRebutal
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoRebutal
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RebuttalId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Desc", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoRebutal
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
				return ErrInvalidLengthMonoRebutal
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoRebutal
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Desc = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Evidence", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoRebutal
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
				return ErrInvalidLengthMonoRebutal
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoRebutal
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Evidence = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Defendant", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMonoRebutal
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
				return ErrInvalidLengthMonoRebutal
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMonoRebutal
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Defendant = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMonoRebutal(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthMonoRebutal
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
func skipMonoRebutal(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowMonoRebutal
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
					return 0, ErrIntOverflowMonoRebutal
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
					return 0, ErrIntOverflowMonoRebutal
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
				return 0, ErrInvalidLengthMonoRebutal
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupMonoRebutal
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthMonoRebutal
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthMonoRebutal        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowMonoRebutal          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupMonoRebutal = fmt.Errorf("proto: unexpected end of group")
)