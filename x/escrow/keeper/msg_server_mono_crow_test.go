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

func TestMonoCrowMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.EscrowKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	seller := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateMonoCrow{Seller: seller,
			CrowId: strconv.Itoa(i),
		}
		_, err := srv.CreateMonoCrow(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetMonoCrow(ctx,
			expected.CrowId,
		)
		require.True(t, found)
		require.Equal(t, expected.Seller, rst.Seller)
	}
}

func TestMonoCrowMsgServerUpdate(t *testing.T) {
	seller := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateMonoCrow
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateMonoCrow{Seller: seller,
				CrowId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateMonoCrow{Seller: "B",
				CrowId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateMonoCrow{Seller: seller,
				CrowId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateMonoCrow{Seller: seller,
				CrowId: strconv.Itoa(0),
			}
			_, err := srv.CreateMonoCrow(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateMonoCrow(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetMonoCrow(ctx,
					expected.CrowId,
				)
				require.True(t, found)
				require.Equal(t, expected.Seller, rst.Seller)
			}
		})
	}
}

func TestMonoCrowMsgServerDelete(t *testing.T) {
	seller := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteMonoCrow
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteMonoCrow{Seller: seller,
				CrowId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteMonoCrow{Seller: "B",
				CrowId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteMonoCrow{Seller: seller,
				CrowId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EscrowKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateMonoCrow(wctx, &types.MsgCreateMonoCrow{Seller: seller,
				CrowId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteMonoCrow(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetMonoCrow(ctx,
					tc.request.CrowId,
				)
				require.False(t, found)
			}
		})
	}
}
