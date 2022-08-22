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

func (k Keeper) MonoWhitelistAll(c context.Context, req *types.QueryAllMonoWhitelistRequest) (*types.QueryAllMonoWhitelistResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var monoWhitelists []types.MonoWhitelist
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	monoWhitelistStore := prefix.NewStore(store, types.KeyPrefix(types.MonoWhitelistKeyPrefix))

	pageRes, err := query.Paginate(monoWhitelistStore, req.Pagination, func(key []byte, value []byte) error {
		var monoWhitelist types.MonoWhitelist
		if err := k.cdc.Unmarshal(value, &monoWhitelist); err != nil {
			return err
		}

		monoWhitelists = append(monoWhitelists, monoWhitelist)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMonoWhitelistResponse{MonoWhitelist: monoWhitelists, Pagination: pageRes}, nil
}

func (k Keeper) MonoWhitelist(c context.Context, req *types.QueryGetMonoWhitelistRequest) (*types.QueryGetMonoWhitelistResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMonoWhitelist(
		ctx,
		req.WhitelistId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMonoWhitelistResponse{MonoWhitelist: val}, nil
}
