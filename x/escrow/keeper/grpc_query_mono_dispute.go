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

func (k Keeper) MonoDisputeAll(c context.Context, req *types.QueryAllMonoDisputeRequest) (*types.QueryAllMonoDisputeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var monoDisputes []types.MonoDispute
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	monoDisputeStore := prefix.NewStore(store, types.KeyPrefix(types.MonoDisputeKeyPrefix))

	pageRes, err := query.Paginate(monoDisputeStore, req.Pagination, func(key []byte, value []byte) error {
		var monoDispute types.MonoDispute
		if err := k.cdc.Unmarshal(value, &monoDispute); err != nil {
			return err
		}

		monoDisputes = append(monoDisputes, monoDispute)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMonoDisputeResponse{MonoDispute: monoDisputes, Pagination: pageRes}, nil
}

func (k Keeper) MonoDispute(c context.Context, req *types.QueryGetMonoDisputeRequest) (*types.QueryGetMonoDisputeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMonoDispute(
		ctx,
		req.DisputeId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMonoDisputeResponse{MonoDispute: val}, nil
}
