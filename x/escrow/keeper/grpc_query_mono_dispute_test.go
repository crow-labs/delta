package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/crow-labs/delta/testutil/keeper"
	"github.com/crow-labs/delta/testutil/nullify"
	"github.com/crow-labs/delta/x/escrow/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestMonoDisputeQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMonoDispute(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetMonoDisputeRequest
		response *types.QueryGetMonoDisputeResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetMonoDisputeRequest{
				DisputeId: msgs[0].DisputeId,
			},
			response: &types.QueryGetMonoDisputeResponse{MonoDispute: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetMonoDisputeRequest{
				DisputeId: msgs[1].DisputeId,
			},
			response: &types.QueryGetMonoDisputeResponse{MonoDispute: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetMonoDisputeRequest{
				DisputeId: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.MonoDispute(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestMonoDisputeQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.EscrowKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMonoDispute(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllMonoDisputeRequest {
		return &types.QueryAllMonoDisputeRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.MonoDisputeAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.MonoDispute), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.MonoDispute),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.MonoDisputeAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.MonoDispute), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.MonoDispute),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.MonoDisputeAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.MonoDispute),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.MonoDisputeAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
