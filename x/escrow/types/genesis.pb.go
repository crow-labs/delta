// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: escrow/genesis.proto

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

// GenesisState defines the escrow module's genesis state.
type GenesisState struct {
	Params             Params           `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
	PortId             string           `protobuf:"bytes,2,opt,name=port_id,json=portId,proto3" json:"port_id,omitempty"`
	BuyerCrowList      []BuyerCrow      `protobuf:"bytes,3,rep,name=buyerCrowList,proto3" json:"buyerCrowList"`
	BuyerMonoCrowList  []BuyerMonoCrow  `protobuf:"bytes,4,rep,name=buyerMonoCrowList,proto3" json:"buyerMonoCrowList"`
	SellerCrowList     []SellerCrow     `protobuf:"bytes,5,rep,name=sellerCrowList,proto3" json:"sellerCrowList"`
	SellerMonoCrowList []SellerMonoCrow `protobuf:"bytes,6,rep,name=sellerMonoCrowList,proto3" json:"sellerMonoCrowList"`
	CrowList           []Crow           `protobuf:"bytes,7,rep,name=crowList,proto3" json:"crowList"`
	MonoCrowList       []MonoCrow       `protobuf:"bytes,8,rep,name=monoCrowList,proto3" json:"monoCrowList"`
	DisputeList        []Dispute        `protobuf:"bytes,9,rep,name=disputeList,proto3" json:"disputeList"`
	MonoDisputeList    []MonoDispute    `protobuf:"bytes,10,rep,name=monoDisputeList,proto3" json:"monoDisputeList"`
	RebuttalList       []Rebuttal       `protobuf:"bytes,11,rep,name=rebuttalList,proto3" json:"rebuttalList"`
	MonoRebutalList    []MonoRebutal    `protobuf:"bytes,12,rep,name=monoRebutalList,proto3" json:"monoRebutalList"`
	BallotList         []Ballot         `protobuf:"bytes,13,rep,name=ballotList,proto3" json:"ballotList"`
	VoteList           []Vote           `protobuf:"bytes,14,rep,name=voteList,proto3" json:"voteList"`
	PollList           []Poll           `protobuf:"bytes,15,rep,name=pollList,proto3" json:"pollList"`
	VerdictList        []Verdict        `protobuf:"bytes,16,rep,name=verdictList,proto3" json:"verdictList"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_291b6ea4c40e3193, []int{0}
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

func (m *GenesisState) GetPortId() string {
	if m != nil {
		return m.PortId
	}
	return ""
}

func (m *GenesisState) GetBuyerCrowList() []BuyerCrow {
	if m != nil {
		return m.BuyerCrowList
	}
	return nil
}

func (m *GenesisState) GetBuyerMonoCrowList() []BuyerMonoCrow {
	if m != nil {
		return m.BuyerMonoCrowList
	}
	return nil
}

func (m *GenesisState) GetSellerCrowList() []SellerCrow {
	if m != nil {
		return m.SellerCrowList
	}
	return nil
}

func (m *GenesisState) GetSellerMonoCrowList() []SellerMonoCrow {
	if m != nil {
		return m.SellerMonoCrowList
	}
	return nil
}

func (m *GenesisState) GetCrowList() []Crow {
	if m != nil {
		return m.CrowList
	}
	return nil
}

func (m *GenesisState) GetMonoCrowList() []MonoCrow {
	if m != nil {
		return m.MonoCrowList
	}
	return nil
}

func (m *GenesisState) GetDisputeList() []Dispute {
	if m != nil {
		return m.DisputeList
	}
	return nil
}

func (m *GenesisState) GetMonoDisputeList() []MonoDispute {
	if m != nil {
		return m.MonoDisputeList
	}
	return nil
}

func (m *GenesisState) GetRebuttalList() []Rebuttal {
	if m != nil {
		return m.RebuttalList
	}
	return nil
}

func (m *GenesisState) GetMonoRebutalList() []MonoRebutal {
	if m != nil {
		return m.MonoRebutalList
	}
	return nil
}

func (m *GenesisState) GetBallotList() []Ballot {
	if m != nil {
		return m.BallotList
	}
	return nil
}

func (m *GenesisState) GetVoteList() []Vote {
	if m != nil {
		return m.VoteList
	}
	return nil
}

func (m *GenesisState) GetPollList() []Poll {
	if m != nil {
		return m.PollList
	}
	return nil
}

func (m *GenesisState) GetVerdictList() []Verdict {
	if m != nil {
		return m.VerdictList
	}
	return nil
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "crowlabs.delta.escrow.GenesisState")
}

func init() { proto.RegisterFile("escrow/genesis.proto", fileDescriptor_291b6ea4c40e3193) }

var fileDescriptor_291b6ea4c40e3193 = []byte{
	// 580 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x94, 0x41, 0x6f, 0xd3, 0x30,
	0x14, 0xc7, 0x1b, 0x36, 0xba, 0xd5, 0xed, 0x36, 0x66, 0x36, 0x56, 0x0a, 0xcb, 0xca, 0x04, 0x52,
	0x39, 0x90, 0x4a, 0xe3, 0x88, 0xb8, 0xb4, 0x13, 0x68, 0xd2, 0x10, 0x53, 0x27, 0x4d, 0x08, 0x0e,
	0x53, 0xd2, 0x5a, 0x25, 0x92, 0x5b, 0x47, 0x89, 0xbb, 0xb1, 0xaf, 0xc0, 0x89, 0x8f, 0xb5, 0xe3,
	0x8e, 0x9c, 0x10, 0x6a, 0xbf, 0x08, 0xf2, 0xf3, 0x73, 0xe4, 0x84, 0x26, 0xbb, 0x25, 0xef, 0xfd,
	0xff, 0x3f, 0xfd, 0xed, 0x67, 0x9b, 0xec, 0xb0, 0x64, 0x18, 0x8b, 0xeb, 0xee, 0x98, 0x4d, 0x59,
	0x12, 0x26, 0x5e, 0x14, 0x0b, 0x29, 0xe8, 0xae, 0xaa, 0x71, 0x3f, 0x48, 0xbc, 0x11, 0xe3, 0xd2,
	0xf7, 0xb4, 0xa8, 0xb5, 0x33, 0x16, 0x63, 0x01, 0x8a, 0xae, 0xfa, 0xd2, 0xe2, 0xd6, 0x63, 0x44,
	0x44, 0x7e, 0xec, 0x4f, 0x90, 0xd0, 0xda, 0xc3, 0x62, 0x30, 0xbb, 0x61, 0xf1, 0xa5, 0xfa, 0xc4,
	0xc6, 0xf3, 0x4c, 0x63, 0x22, 0xa6, 0xc2, 0xee, 0x36, 0xb1, 0x9b, 0x30, 0xce, 0xb3, 0xbe, 0xfd,
	0x6c, 0x27, 0x6f, 0xdc, 0xc6, 0xb6, 0x55, 0x7a, 0x82, 0xa5, 0xbc, 0xd4, 0x2c, 0x79, 0x14, 0x26,
	0xd1, 0x4c, 0x32, 0xac, 0x3e, 0xb5, 0xd5, 0xd9, 0xd6, 0x2e, 0xb6, 0x62, 0x16, 0xcc, 0xa4, 0xf4,
	0xf9, 0x32, 0x07, 0xf4, 0xd2, 0x96, 0xd9, 0x92, 0xc0, 0xe7, 0x5c, 0xc8, 0x5c, 0xc4, 0x2b, 0x91,
	0x92, 0x4d, 0x29, 0x12, 0x9c, 0xe7, 0xd2, 0x5d, 0xb1, 0x78, 0x14, 0x0e, 0xd1, 0x7b, 0xf8, 0xb3,
	0x46, 0x1a, 0x1f, 0xf5, 0x88, 0xce, 0xa5, 0x2f, 0x19, 0x7d, 0x47, 0xaa, 0x7a, 0xbf, 0x9b, 0x4e,
	0xdb, 0xe9, 0xd4, 0x8f, 0xf6, 0xbd, 0xa5, 0x23, 0xf3, 0xce, 0x40, 0xd4, 0x5b, 0xbd, 0xfd, 0x73,
	0x50, 0x19, 0xa0, 0x85, 0xee, 0x91, 0xb5, 0x48, 0xc4, 0xf2, 0x32, 0x1c, 0x35, 0x1f, 0xb4, 0x9d,
	0x4e, 0x6d, 0x50, 0x55, 0xbf, 0x27, 0x23, 0x7a, 0x4a, 0x36, 0x60, 0x2e, 0xfd, 0x58, 0x5c, 0x9f,
	0x86, 0x89, 0x6c, 0xae, 0xb4, 0x57, 0x3a, 0xf5, 0xa3, 0x76, 0x01, 0xbc, 0x67, 0xb4, 0xc8, 0xcf,
	0x9a, 0xe9, 0x17, 0xb2, 0x0d, 0x85, 0x4f, 0x62, 0x2a, 0x52, 0xe2, 0x2a, 0x10, 0x5f, 0x96, 0x11,
	0x8d, 0x1e, 0xa9, 0xff, 0x43, 0xe8, 0x67, 0xb2, 0xa9, 0xcf, 0x41, 0x8a, 0x7d, 0x08, 0xd8, 0x17,
	0x05, 0xd8, 0xf3, 0x54, 0x8c, 0xcc, 0x9c, 0x9d, 0x7e, 0x23, 0x54, 0x57, 0x32, 0x59, 0xab, 0x00,
	0x7d, 0x55, 0x0a, 0xcd, 0x85, 0x5d, 0x82, 0xa1, 0xef, 0xc9, 0xfa, 0xd0, 0x20, 0xd7, 0x00, 0xf9,
	0xac, 0x00, 0x69, 0x81, 0x52, 0x0b, 0x3d, 0x21, 0x8d, 0x89, 0x9d, 0x6a, 0x1d, 0x10, 0x07, 0x05,
	0x88, 0x5c, 0x9e, 0x8c, 0x95, 0x7e, 0x20, 0x75, 0x3c, 0xda, 0x40, 0xaa, 0x01, 0xc9, 0x2d, 0x20,
	0x1d, 0x6b, 0x25, 0x82, 0x6c, 0x23, 0x1d, 0x90, 0x2d, 0xc5, 0x3d, 0xb6, 0x58, 0x04, 0x58, 0x87,
	0x25, 0xa9, 0xb2, 0xbc, 0x3c, 0x40, 0x2d, 0xd3, 0x5c, 0x30, 0x00, 0xd6, 0x4b, 0x97, 0x39, 0x40,
	0xa9, 0x59, 0xa6, 0x6d, 0x35, 0xf1, 0x06, 0xfa, 0x4e, 0x02, 0xad, 0x71, 0x6f, 0x3c, 0x54, 0xdb,
	0xf1, 0x2c, 0x00, 0xed, 0x13, 0xa2, 0x6f, 0x33, 0xe0, 0x36, 0x00, 0x57, 0x74, 0xe9, 0x7a, 0x20,
	0x44, 0x92, 0x65, 0x53, 0x27, 0x41, 0xdd, 0x7e, 0x40, 0x6c, 0x96, 0x9e, 0x84, 0x0b, 0x91, 0xee,
	0x54, 0x6a, 0x51, 0x76, 0xf5, 0x52, 0x80, 0x7d, 0xab, 0xd4, 0x7e, 0x26, 0xb8, 0x59, 0x49, 0x6a,
	0x51, 0xd3, 0xc7, 0x57, 0x05, 0x08, 0x8f, 0x4a, 0xa7, 0x7f, 0xa1, 0x95, 0x66, 0xfa, 0x96, 0xb1,
	0xd7, 0xbf, 0x9d, 0xbb, 0xce, 0xdd, 0xdc, 0x75, 0xfe, 0xce, 0x5d, 0xe7, 0xd7, 0xc2, 0xad, 0xdc,
	0x2d, 0xdc, 0xca, 0xef, 0x85, 0x5b, 0xf9, 0xfa, 0x7a, 0x1c, 0xca, 0xef, 0xb3, 0xc0, 0x1b, 0x8a,
	0x09, 0xbc, 0xc4, 0x6f, 0x14, 0xb7, 0x0b, 0xdc, 0xee, 0x8f, 0x2e, 0xbe, 0x6c, 0xf2, 0x26, 0x62,
	0x49, 0x50, 0x85, 0x87, 0xed, 0xed, 0xbf, 0x00, 0x00, 0x00, 0xff, 0xff, 0xc0, 0xfa, 0xcc, 0x7a,
	0x81, 0x06, 0x00, 0x00,
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
	if len(m.VerdictList) > 0 {
		for iNdEx := len(m.VerdictList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.VerdictList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x1
			i--
			dAtA[i] = 0x82
		}
	}
	if len(m.PollList) > 0 {
		for iNdEx := len(m.PollList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PollList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x7a
		}
	}
	if len(m.VoteList) > 0 {
		for iNdEx := len(m.VoteList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.VoteList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x72
		}
	}
	if len(m.BallotList) > 0 {
		for iNdEx := len(m.BallotList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.BallotList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x6a
		}
	}
	if len(m.MonoRebutalList) > 0 {
		for iNdEx := len(m.MonoRebutalList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.MonoRebutalList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x62
		}
	}
	if len(m.RebuttalList) > 0 {
		for iNdEx := len(m.RebuttalList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.RebuttalList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x5a
		}
	}
	if len(m.MonoDisputeList) > 0 {
		for iNdEx := len(m.MonoDisputeList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.MonoDisputeList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
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
	if len(m.DisputeList) > 0 {
		for iNdEx := len(m.DisputeList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.DisputeList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x4a
		}
	}
	if len(m.MonoCrowList) > 0 {
		for iNdEx := len(m.MonoCrowList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.MonoCrowList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
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
	if len(m.CrowList) > 0 {
		for iNdEx := len(m.CrowList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.CrowList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
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
	if len(m.SellerMonoCrowList) > 0 {
		for iNdEx := len(m.SellerMonoCrowList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.SellerMonoCrowList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
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
	if len(m.SellerCrowList) > 0 {
		for iNdEx := len(m.SellerCrowList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.SellerCrowList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
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
	if len(m.BuyerMonoCrowList) > 0 {
		for iNdEx := len(m.BuyerMonoCrowList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.BuyerMonoCrowList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
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
	if len(m.BuyerCrowList) > 0 {
		for iNdEx := len(m.BuyerCrowList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.BuyerCrowList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
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
	if len(m.PortId) > 0 {
		i -= len(m.PortId)
		copy(dAtA[i:], m.PortId)
		i = encodeVarintGenesis(dAtA, i, uint64(len(m.PortId)))
		i--
		dAtA[i] = 0x12
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
	l = len(m.PortId)
	if l > 0 {
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.BuyerCrowList) > 0 {
		for _, e := range m.BuyerCrowList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.BuyerMonoCrowList) > 0 {
		for _, e := range m.BuyerMonoCrowList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.SellerCrowList) > 0 {
		for _, e := range m.SellerCrowList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.SellerMonoCrowList) > 0 {
		for _, e := range m.SellerMonoCrowList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.CrowList) > 0 {
		for _, e := range m.CrowList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.MonoCrowList) > 0 {
		for _, e := range m.MonoCrowList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.DisputeList) > 0 {
		for _, e := range m.DisputeList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.MonoDisputeList) > 0 {
		for _, e := range m.MonoDisputeList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.RebuttalList) > 0 {
		for _, e := range m.RebuttalList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.MonoRebutalList) > 0 {
		for _, e := range m.MonoRebutalList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.BallotList) > 0 {
		for _, e := range m.BallotList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.VoteList) > 0 {
		for _, e := range m.VoteList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.PollList) > 0 {
		for _, e := range m.PollList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.VerdictList) > 0 {
		for _, e := range m.VerdictList {
			l = e.Size()
			n += 2 + l + sovGenesis(uint64(l))
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
				return fmt.Errorf("proto: wrong wireType = %d for field PortId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
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
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PortId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BuyerCrowList", wireType)
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
			m.BuyerCrowList = append(m.BuyerCrowList, BuyerCrow{})
			if err := m.BuyerCrowList[len(m.BuyerCrowList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BuyerMonoCrowList", wireType)
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
			m.BuyerMonoCrowList = append(m.BuyerMonoCrowList, BuyerMonoCrow{})
			if err := m.BuyerMonoCrowList[len(m.BuyerMonoCrowList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SellerCrowList", wireType)
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
			m.SellerCrowList = append(m.SellerCrowList, SellerCrow{})
			if err := m.SellerCrowList[len(m.SellerCrowList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SellerMonoCrowList", wireType)
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
			m.SellerMonoCrowList = append(m.SellerMonoCrowList, SellerMonoCrow{})
			if err := m.SellerMonoCrowList[len(m.SellerMonoCrowList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CrowList", wireType)
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
			m.CrowList = append(m.CrowList, Crow{})
			if err := m.CrowList[len(m.CrowList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MonoCrowList", wireType)
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
			m.MonoCrowList = append(m.MonoCrowList, MonoCrow{})
			if err := m.MonoCrowList[len(m.MonoCrowList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DisputeList", wireType)
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
			m.DisputeList = append(m.DisputeList, Dispute{})
			if err := m.DisputeList[len(m.DisputeList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MonoDisputeList", wireType)
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
			m.MonoDisputeList = append(m.MonoDisputeList, MonoDispute{})
			if err := m.MonoDisputeList[len(m.MonoDisputeList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RebuttalList", wireType)
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
			m.RebuttalList = append(m.RebuttalList, Rebuttal{})
			if err := m.RebuttalList[len(m.RebuttalList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 12:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MonoRebutalList", wireType)
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
			m.MonoRebutalList = append(m.MonoRebutalList, MonoRebutal{})
			if err := m.MonoRebutalList[len(m.MonoRebutalList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 13:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BallotList", wireType)
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
			m.BallotList = append(m.BallotList, Ballot{})
			if err := m.BallotList[len(m.BallotList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 14:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field VoteList", wireType)
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
			m.VoteList = append(m.VoteList, Vote{})
			if err := m.VoteList[len(m.VoteList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 15:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PollList", wireType)
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
			m.PollList = append(m.PollList, Poll{})
			if err := m.PollList[len(m.PollList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 16:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field VerdictList", wireType)
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
			m.VerdictList = append(m.VerdictList, Verdict{})
			if err := m.VerdictList[len(m.VerdictList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
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
