package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/crow-labs/delta/x/whitelist/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) WhitelistAll(c context.Context, req *types.QueryAllWhitelistRequest) (*types.QueryAllWhitelistResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var whitelists []types.Whitelist
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	whitelistStore := prefix.NewStore(store, types.KeyPrefix(types.WhitelistKey))

	pageRes, err := query.Paginate(whitelistStore, req.Pagination, func(key []byte, value []byte) error {
		var whitelist types.Whitelist
		if err := k.cdc.Unmarshal(value, &whitelist); err != nil {
			return err
		}

		whitelists = append(whitelists, whitelist)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllWhitelistResponse{Whitelist: whitelists, Pagination: pageRes}, nil
}

func (k Keeper) Whitelist(c context.Context, req *types.QueryGetWhitelistRequest) (*types.QueryGetWhitelistResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	whitelist, found := k.GetWhitelist(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetWhitelistResponse{Whitelist: whitelist}, nil
}
