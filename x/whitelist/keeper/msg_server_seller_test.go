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

func TestSellerMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.WhitelistKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	producer := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateSeller{Producer: producer,
			SellerId: strconv.Itoa(i),
		}
		_, err := srv.CreateSeller(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetSeller(ctx,
			expected.SellerId,
		)
		require.True(t, found)
		require.Equal(t, expected.Producer, rst.Producer)
	}
}

func TestSellerMsgServerUpdate(t *testing.T) {
	producer := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateSeller
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateSeller{Producer: producer,
				SellerId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateSeller{Producer: "B",
				SellerId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateSeller{Producer: producer,
				SellerId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateSeller{Producer: producer,
				SellerId: strconv.Itoa(0),
			}
			_, err := srv.CreateSeller(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateSeller(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetSeller(ctx,
					expected.SellerId,
				)
				require.True(t, found)
				require.Equal(t, expected.Producer, rst.Producer)
			}
		})
	}
}

func TestSellerMsgServerDelete(t *testing.T) {
	producer := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteSeller
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteSeller{Producer: producer,
				SellerId: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteSeller{Producer: "B",
				SellerId: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteSeller{Producer: producer,
				SellerId: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.WhitelistKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateSeller(wctx, &types.MsgCreateSeller{Producer: producer,
				SellerId: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteSeller(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetSeller(ctx,
					tc.request.SellerId,
				)
				require.False(t, found)
			}
		})
	}
}
