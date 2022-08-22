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

func (k Keeper) SellerMonoCrowAll(c context.Context, req *types.QueryAllSellerMonoCrowRequest) (*types.QueryAllSellerMonoCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sellerMonoCrows []types.SellerMonoCrow
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sellerMonoCrowStore := prefix.NewStore(store, types.KeyPrefix(types.SellerMonoCrowKeyPrefix))

	pageRes, err := query.Paginate(sellerMonoCrowStore, req.Pagination, func(key []byte, value []byte) error {
		var sellerMonoCrow types.SellerMonoCrow
		if err := k.cdc.Unmarshal(value, &sellerMonoCrow); err != nil {
			return err
		}

		sellerMonoCrows = append(sellerMonoCrows, sellerMonoCrow)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSellerMonoCrowResponse{SellerMonoCrow: sellerMonoCrows, Pagination: pageRes}, nil
}

func (k Keeper) SellerMonoCrow(c context.Context, req *types.QueryGetSellerMonoCrowRequest) (*types.QueryGetSellerMonoCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSellerMonoCrow(
		ctx,
		req.SellerCrowId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetSellerMonoCrowResponse{SellerMonoCrow: val}, nil
}
