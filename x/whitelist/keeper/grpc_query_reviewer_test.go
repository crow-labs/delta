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

func TestReviewerQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNReviewer(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetReviewerRequest
		response *types.QueryGetReviewerResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetReviewerRequest{
				AccAddr: msgs[0].AccAddr,
			},
			response: &types.QueryGetReviewerResponse{Reviewer: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetReviewerRequest{
				AccAddr: msgs[1].AccAddr,
			},
			response: &types.QueryGetReviewerResponse{Reviewer: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetReviewerRequest{
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
			response, err := keeper.Reviewer(wctx, tc.request)
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

func TestReviewerQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.WhitelistKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNReviewer(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllReviewerRequest {
		return &types.QueryAllReviewerRequest{
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
			resp, err := keeper.ReviewerAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Reviewer), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Reviewer),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ReviewerAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Reviewer), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Reviewer),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ReviewerAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Reviewer),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ReviewerAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
