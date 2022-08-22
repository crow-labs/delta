package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/crow-labs/delta/x/escrow/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RebuttalAll(c context.Context, req *types.QueryAllRebuttalRequest) (*types.QueryAllRebuttalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var rebuttals []types.Rebuttal
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	rebuttalStore := prefix.NewStore(store, types.KeyPrefix(types.RebuttalKeyPrefix))

	pageRes, err := query.Paginate(rebuttalStore, req.Pagination, func(key []byte, value []byte) error {
		var rebuttal types.Rebuttal
		if err := k.cdc.Unmarshal(value, &rebuttal); err != nil {
			return err
		}

		rebuttals = append(rebuttals, rebuttal)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRebuttalResponse{Rebuttal: rebuttals, Pagination: pageRes}, nil
}

func (k Keeper) Rebuttal(c context.Context, req *types.QueryGetRebuttalRequest) (*types.QueryGetRebuttalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetRebuttal(
		ctx,
		req.DisputeId,
		req.DefendantId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetRebuttalResponse{Rebuttal: val}, nil
}
