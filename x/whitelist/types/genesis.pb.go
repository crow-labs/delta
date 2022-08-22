// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: whitelist/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
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

// GenesisState defines the whitelist module's genesis state.
type GenesisState struct {
	Params            Params          `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	UserList          []User          `protobuf:"bytes,2,rep,name=userList,proto3" json:"userList"`
	BuyerList         []Buyer         `protobuf:"bytes,3,rep,name=buyerList,proto3" json:"buyerList"`
	ProducerList      []Producer      `protobuf:"bytes,4,rep,name=producerList,proto3" json:"producerList"`
	SellerList        []Seller        `protobuf:"bytes,5,rep,name=sellerList,proto3" json:"sellerList"`
	ReviewerList      []Reviewer      `protobuf:"bytes,6,rep,name=reviewerList,proto3" json:"reviewerList"`
	VoterList         []Voter         `protobuf:"bytes,7,rep,name=voterList,proto3" json:"voterList"`
	WhitelistList     []Whitelist     `protobuf:"bytes,8,rep,name=whitelistList,proto3" json:"whitelistList"`
	WhitelistCount    uint64          `protobuf:"varint,9,opt,name=whitelistCount,proto3" json:"whitelistCount,omitempty"`
	MonoWhitelistList []MonoWhitelist `protobuf:"bytes,10,rep,name=monoWhitelistList,proto3" json:"monoWhitelistList"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_fe7960dc26008e79, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

func (m *GenesisState) GetUserList() []User {
	if m != nil {
		return m.UserList
	}
	return nil
}

func (m *GenesisState) GetBuyerList() []Buyer {
	if m != nil {
		return m.BuyerList
	}
	return nil
}

func (m *GenesisState) GetProducerList() []Producer {
	if m != nil {
		return m.ProducerList
	}
	return nil
}

func (m *GenesisState) GetSellerList() []Seller {
	if m != nil {
		return m.SellerList
	}
	return nil
}

func (m *GenesisState) GetReviewerList() []Reviewer {
	if m != nil {
		return m.ReviewerList
	}
	return nil
}

func (m *GenesisState) GetVoterList() []Voter {
	if m != nil {
		return m.VoterList
	}
	return nil
}

func (m *GenesisState) GetWhitelistList() []Whitelist {
	if m != nil {
		return m.WhitelistList
	}
	return nil
}

func (m *GenesisState) GetWhitelistCount() uint64 {
	if m != nil {
		return m.WhitelistCount
	}
	return 0
}

func (m *GenesisState) GetMonoWhitelistList() []MonoWhitelist {
	if m != nil {
		return m.MonoWhitelistList
	}
	return nil
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "crowlabs.delta.whitelist.GenesisState")
}

func init() { proto.RegisterFile("whitelist/genesis.proto", fileDescriptor_fe7960dc26008e79) }

var fileDescriptor_fe7960dc26008e79 = []byte{
	// 449 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x93, 0x41, 0x8f, 0xd2, 0x40,
	0x1c, 0xc5, 0x5b, 0x97, 0xc5, 0xdd, 0xd9, 0xd5, 0xc4, 0xc9, 0xaa, 0x95, 0xc3, 0xd0, 0x60, 0xa2,
	0x1c, 0xb4, 0x4d, 0xf0, 0x6e, 0x0c, 0x24, 0x78, 0xc1, 0x68, 0x20, 0x4a, 0xa2, 0x07, 0xd3, 0xc2,
	0xa4, 0x34, 0x29, 0x0c, 0xe9, 0x4c, 0x41, 0xbe, 0x85, 0x1f, 0x8b, 0x23, 0x07, 0x0f, 0x9e, 0x8c,
	0x81, 0x2f, 0x62, 0xe6, 0xdf, 0xe9, 0xb4, 0x20, 0x85, 0xdb, 0xe4, 0xcd, 0x7b, 0xbf, 0xff, 0xbf,
	0xaf, 0x2d, 0x7a, 0xba, 0x9c, 0x84, 0x82, 0x46, 0x21, 0x17, 0x6e, 0x40, 0x67, 0x94, 0x87, 0xdc,
	0x99, 0xc7, 0x4c, 0x30, 0x6c, 0x8d, 0x62, 0xb6, 0x8c, 0x3c, 0x9f, 0x3b, 0x63, 0x1a, 0x09, 0xcf,
	0xd1, 0xbe, 0xda, 0x5d, 0xc0, 0x02, 0x06, 0x26, 0x57, 0x9e, 0x52, 0x7f, 0xed, 0x49, 0x0e, 0x9a,
	0x7b, 0xb1, 0x37, 0x55, 0x9c, 0xda, 0x5d, 0xae, 0x27, 0x9c, 0xc6, 0x4a, 0x7d, 0x9c, 0xab, 0x7e,
	0xb2, 0xd2, 0xb2, 0x55, 0x80, 0xc4, 0x6c, 0x9c, 0x8c, 0xf4, 0x4d, 0x01, 0xcf, 0x69, 0x14, 0x1d,
	0x4b, 0xc4, 0x74, 0x11, 0xd2, 0xe5, 0xb1, 0x11, 0x0b, 0x26, 0xb4, 0xfc, 0x2c, 0x97, 0xf5, 0x49,
	0x5d, 0x91, 0xfc, 0x6a, 0xca, 0x66, 0xec, 0xfb, 0xc1, 0x7d, 0xe3, 0xd7, 0x25, 0xba, 0x7d, 0x9f,
	0x96, 0x34, 0x10, 0x9e, 0xa0, 0xf8, 0x2d, 0xaa, 0xa6, 0xcf, 0x6a, 0x99, 0xb6, 0xd9, 0xbc, 0x69,
	0xd9, 0x4e, 0x59, 0x69, 0xce, 0x27, 0xf0, 0xb5, 0x2b, 0xeb, 0x3f, 0x75, 0xa3, 0xaf, 0x52, 0xf8,
	0x1d, 0xba, 0x92, 0x9d, 0xf4, 0x42, 0x2e, 0xac, 0x7b, 0xf6, 0x45, 0xf3, 0xa6, 0x45, 0xca, 0x09,
	0x9f, 0x39, 0x8d, 0x55, 0x5e, 0xa7, 0x70, 0x07, 0x5d, 0x43, 0x7f, 0x80, 0xb8, 0x00, 0x44, 0xbd,
	0x1c, 0xd1, 0x96, 0x56, 0xc5, 0xc8, 0x73, 0xb8, 0x87, 0x6e, 0xb3, 0xb6, 0x81, 0x53, 0x01, 0x4e,
	0xe3, 0xc4, 0xc3, 0x28, 0xb7, 0x42, 0xed, 0xa5, 0x71, 0x17, 0xa1, 0xf4, 0x0d, 0x01, 0xeb, 0x12,
	0x58, 0x27, 0x8a, 0x19, 0x80, 0x57, 0x91, 0x0a, 0x49, 0xb9, 0x55, 0xf6, 0x46, 0x81, 0x54, 0x3d,
	0xb7, 0x55, 0x5f, 0xb9, 0xb3, 0xad, 0x8a, 0x69, 0x59, 0x14, 0x7c, 0x05, 0x80, 0xba, 0x7f, 0xae,
	0xa8, 0x2f, 0xd2, 0x9a, 0x15, 0xa5, 0x73, 0xf8, 0x23, 0x7a, 0xa0, 0x3d, 0x00, 0xba, 0x02, 0xd0,
	0xf3, 0x72, 0xd0, 0x30, 0x3b, 0x29, 0xd8, 0x7e, 0x1e, 0xbf, 0x40, 0x0f, 0xb5, 0xd0, 0x61, 0xc9,
	0x4c, 0x58, 0xd7, 0xb6, 0xd9, 0xac, 0xf4, 0x0f, 0x54, 0xfc, 0x0d, 0x3d, 0x92, 0x5f, 0xe4, 0x70,
	0x6f, 0x38, 0x82, 0xe1, 0x2f, 0xcb, 0x87, 0x7f, 0x28, 0x46, 0xd4, 0x02, 0xff, 0x73, 0xda, 0xdd,
	0xf5, 0x96, 0x98, 0x9b, 0x2d, 0x31, 0xff, 0x6e, 0x89, 0xf9, 0x73, 0x47, 0x8c, 0xcd, 0x8e, 0x18,
	0xbf, 0x77, 0xc4, 0xf8, 0xfa, 0x2a, 0x08, 0xc5, 0x24, 0xf1, 0x9d, 0x11, 0x9b, 0xba, 0x72, 0xca,
	0x6b, 0x39, 0xc6, 0x85, 0x31, 0xee, 0x8f, 0xfc, 0xf7, 0x71, 0xc5, 0x6a, 0x4e, 0xb9, 0x5f, 0x85,
	0xbf, 0xe4, 0xcd, 0xbf, 0x00, 0x00, 0x00, 0xff, 0xff, 0xe0, 0x08, 0xd2, 0x9c, 0x53, 0x04, 0x00,
	0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.MonoWhitelistList) > 0 {
		for iNdEx := len(m.MonoWhitelistList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.MonoWhitelistList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x52
		}
	}
	if m.WhitelistCount != 0 {
		i = encodeVarintGenesis(dAtA, i, uint64(m.WhitelistCount))
		i--
		dAtA[i] = 0x48
	}
	if len(m.WhitelistList) > 0 {
		for iNdEx := len(m.WhitelistList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.WhitelistList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x42
		}
	}
	if len(m.VoterList) > 0 {
		for iNdEx := len(m.VoterList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.VoterList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x3a
		}
	}
	if len(m.ReviewerList) > 0 {
		for iNdEx := len(m.ReviewerList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ReviewerList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x32
		}
	}
	if len(m.SellerList) > 0 {
		for iNdEx := len(m.SellerList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.SellerList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
	}
	if len(m.ProducerList) > 0 {
		for iNdEx := len(m.ProducerList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ProducerList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.BuyerList) > 0 {
		for iNdEx := len(m.BuyerList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.BuyerList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x1a
		}
	}
	if len(m.UserList) > 0 {
		for iNdEx := len(m.UserList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.UserList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintGenesis(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovGenesis(uint64(l))
	if len(m.UserList) > 0 {
		for _, e := range m.UserList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.BuyerList) > 0 {
		for _, e := range m.BuyerList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.ProducerList) > 0 {
		for _, e := range m.ProducerList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.SellerList) > 0 {
		for _, e := range m.SellerList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.ReviewerList) > 0 {
		for _, e := range m.ReviewerList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.VoterList) > 0 {
		for _, e := range m.VoterList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.WhitelistList) > 0 {
		for _, e := range m.WhitelistList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.WhitelistCount != 0 {
		n += 1 + sovGenesis(uint64(m.WhitelistCount))
	}
	if len(m.MonoWhitelistList) > 0 {
		for _, e := range m.MonoWhitelistList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
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
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field UserList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.UserList = append(m.UserList, User{})
			if err := m.UserList[len(m.UserList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BuyerList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BuyerList = append(m.BuyerList, Buyer{})
			if err := m.BuyerList[len(m.BuyerList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ProducerList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ProducerList = append(m.ProducerList, Producer{})
			if err := m.ProducerList[len(m.ProducerList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SellerList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SellerList = append(m.SellerList, Seller{})
			if err := m.SellerList[len(m.SellerList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReviewerList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ReviewerList = append(m.ReviewerList, Reviewer{})
			if err := m.ReviewerList[len(m.ReviewerList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field VoterList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.VoterList = append(m.VoterList, Voter{})
			if err := m.VoterList[len(m.VoterList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field WhitelistList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.WhitelistList = append(m.WhitelistList, Whitelist{})
			if err := m.WhitelistList[len(m.WhitelistList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 9:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field WhitelistCount", wireType)
			}
			m.WhitelistCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.WhitelistCount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MonoWhitelistList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.MonoWhitelistList = append(m.MonoWhitelistList, MonoWhitelist{})
			if err := m.MonoWhitelistList[len(m.MonoWhitelistList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
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
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
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
					return 0, ErrIntOverflowGenesis
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
					return 0, ErrIntOverflowGenesis
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
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
