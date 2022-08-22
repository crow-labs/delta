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
	"github.com/crow-labs/delta/x/whitelist/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestProducerQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNProducer(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetProducerRequest
		response *types.QueryGetProducerResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetProducerRequest{
				AccAddr: msgs[0].AccAddr,
			},
			response: &types.QueryGetProducerResponse{Producer: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetProducerRequest{
				AccAddr: msgs[1].AccAddr,
			},
			response: &types.QueryGetProducerResponse{Producer: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetProducerRequest{
				AccAddr: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Producer(wctx, tc.request)
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

func TestProducerQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNProducer(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllProducerRequest {
		return &types.QueryAllProducerRequest{
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
			resp, err := keeper.ProducerAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Producer), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Producer),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ProducerAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Producer), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Producer),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ProducerAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Producer),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ProducerAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
