package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/x/whitelist/keeper"
	"github.com/crow-labs/delta/x/whitelist/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestVoterMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.WhitelistKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	reviewer := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateVoter{Reviewer: reviewer,
			VoterId: strconv.Itoa(i),
		}
		_, err := srv.CreateVoter(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetVoter(ctx,
			expected.VoterId,
		)
		require.True(t, found)
		require.Equal(t, expected.Reviewer, rst.Reviewer)
	}
}

func TestVoterMsgServerUpdate(t *testing.T) {
	reviewer := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateVoter
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateVoter{Reviewer: reviewer,
				VoterId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateVoter{Reviewer: "B",
				VoterId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateVoter{Reviewer: reviewer,
				VoterId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateVoter{Reviewer: reviewer,
				VoterId: strconv.Itoa(0),
			}
			_, err := srv.CreateVoter(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateVoter(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetVoter(ctx,
					expected.VoterId,
				)
				require.True(t, found)
				require.Equal(t, expected.Reviewer, rst.Reviewer)
			}
		})
	}
}

func TestVoterMsgServerDelete(t *testing.T) {
	reviewer := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteVoter
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteVoter{Reviewer: reviewer,
				VoterId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteVoter{Reviewer: "B",
				VoterId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteVoter{Reviewer: reviewer,
				VoterId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateVoter(wctx, &types.MsgCreateVoter{Reviewer: reviewer,
				VoterId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteVoter(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetVoter(ctx,
					tc.request.VoterId,
				)
				require.False(t, found)
			}
		})
	}
}
