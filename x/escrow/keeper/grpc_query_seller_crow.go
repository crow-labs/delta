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

func (k Keeper) SellerCrowAll(c context.Context, req *types.QueryAllSellerCrowRequest) (*types.QueryAllSellerCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sellerCrows []types.SellerCrow
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sellerCrowStore := prefix.NewStore(store, types.KeyPrefix(types.SellerCrowKeyPrefix))

	pageRes, err := query.Paginate(sellerCrowStore, req.Pagination, func(key []byte, value []byte) error {
		var sellerCrow types.SellerCrow
		if err := k.cdc.Unmarshal(value, &sellerCrow); err != nil {
			return err
		}

		sellerCrows = append(sellerCrows, sellerCrow)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSellerCrowResponse{SellerCrow: sellerCrows, Pagination: pageRes}, nil
}

func (k Keeper) SellerCrow(c context.Context, req *types.QueryGetSellerCrowRequest) (*types.QueryGetSellerCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSellerCrow(
		ctx,
		req.CrowId,
		req.SellerId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetSellerCrowResponse{SellerCrow: val}, nil
}
