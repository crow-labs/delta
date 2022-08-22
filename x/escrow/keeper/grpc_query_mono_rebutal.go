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

func (k Keeper) MonoRebutalAll(c context.Context, req *types.QueryAllMonoRebutalRequest) (*types.QueryAllMonoRebutalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var monoRebutals []types.MonoRebutal
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	monoRebutalStore := prefix.NewStore(store, types.KeyPrefix(types.MonoRebutalKeyPrefix))

	pageRes, err := query.Paginate(monoRebutalStore, req.Pagination, func(key []byte, value []byte) error {
		var monoRebutal types.MonoRebutal
		if err := k.cdc.Unmarshal(value, &monoRebutal); err != nil {
			return err
		}

		monoRebutals = append(monoRebutals, monoRebutal)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMonoRebutalResponse{MonoRebutal: monoRebutals, Pagination: pageRes}, nil
}

func (k Keeper) MonoRebutal(c context.Context, req *types.QueryGetMonoRebutalRequest) (*types.QueryGetMonoRebutalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMonoRebutal(
		ctx,
		req.RebuttalId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMonoRebutalResponse{MonoRebutal: val}, nil
}
