package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/crow-labs/delta/x/market/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) MonoListingAll(c context.Context, req *types.QueryAllMonoListingRequest) (*types.QueryAllMonoListingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var monoListings []types.MonoListing
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	monoListingStore := prefix.NewStore(store, types.KeyPrefix(types.MonoListingKeyPrefix))

	pageRes, err := query.Paginate(monoListingStore, req.Pagination, func(key []byte, value []byte) error {
		var monoListing types.MonoListing
		if err := k.cdc.Unmarshal(value, &monoListing); err != nil {
			return err
		}

		monoListings = append(monoListings, monoListing)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMonoListingResponse{MonoListing: monoListings, Pagination: pageRes}, nil
}

func (k Keeper) MonoListing(c context.Context, req *types.QueryGetMonoListingRequest) (*types.QueryGetMonoListingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMonoListing(
		ctx,
		req.ListingId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMonoListingResponse{MonoListing: val}, nil
}
