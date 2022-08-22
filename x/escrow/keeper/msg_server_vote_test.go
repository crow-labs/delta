package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/x/escrow/keeper"
	"github.com/crow-labs/delta/x/escrow/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestVoteMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.EscrowKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	voter := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateVote{Voter: voter,
			VoteId: strconv.Itoa(i),
		}
		_, err := srv.CreateVote(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetVote(ctx,
			expected.VoteId,
		)
		require.True(t, found)
		require.Equal(t, expected.Voter, rst.Voter)
	}
}

func TestVoteMsgServerUpdate(t *testing.T) {
	voter := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateVote
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateVote{Voter: voter,
				VoteId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateVote{Voter: "B",
				VoteId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateVote{Voter: voter,
				VoteId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateVote{Voter: voter,
				VoteId: strconv.Itoa(0),
			}
			_, err := srv.CreateVote(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateVote(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetVote(ctx,
					expected.VoteId,
				)
				require.True(t, found)
				require.Equal(t, expected.Voter, rst.Voter)
			}
		})
	}
}

func TestVoteMsgServerDelete(t *testing.T) {
	voter := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteVote
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteVote{Voter: voter,
				VoteId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteVote{Voter: "B",
				VoteId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteVote{Voter: voter,
				VoteId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateVote(wctx, &types.MsgCreateVote{Voter: voter,
				VoteId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteVote(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetVote(ctx,
					tc.request.VoteId,
				)
				require.False(t, found)
			}
		})
	}
}
