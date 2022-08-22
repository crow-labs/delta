package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/crow-labs/delta/x/whitelist/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ReviewerAll(c context.Context, req *types.QueryAllReviewerRequest) (*types.QueryAllReviewerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var reviewers []types.Reviewer
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	reviewerStore := prefix.NewStore(store, types.KeyPrefix(types.ReviewerKeyPrefix))

	pageRes, err := query.Paginate(reviewerStore, req.Pagination, func(key []byte, value []byte) error {
		var reviewer types.Reviewer
		if err := k.cdc.Unmarshal(value, &reviewer); err != nil {
			return err
		}

		reviewers = append(reviewers, reviewer)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllReviewerResponse{Reviewer: reviewers, Pagination: pageRes}, nil
}

func (k Keeper) Reviewer(c context.Context, req *types.QueryGetReviewerRequest) (*types.QueryGetReviewerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetReviewer(
		ctx,
		req.AccAddr,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetReviewerResponse{Reviewer: val}, nil
}
