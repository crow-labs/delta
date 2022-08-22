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

func (k Keeper) BuyerCrowAll(c context.Context, req *types.QueryAllBuyerCrowRequest) (*types.QueryAllBuyerCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var buyerCrows []types.BuyerCrow
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	buyerCrowStore := prefix.NewStore(store, types.KeyPrefix(types.BuyerCrowKeyPrefix))

	pageRes, err := query.Paginate(buyerCrowStore, req.Pagination, func(key []byte, value []byte) error {
		var buyerCrow types.BuyerCrow
		if err := k.cdc.Unmarshal(value, &buyerCrow); err != nil {
			return err
		}

		buyerCrows = append(buyerCrows, buyerCrow)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBuyerCrowResponse{BuyerCrow: buyerCrows, Pagination: pageRes}, nil
}

func (k Keeper) BuyerCrow(c context.Context, req *types.QueryGetBuyerCrowRequest) (*types.QueryGetBuyerCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBuyerCrow(
		ctx,
		req.CrowId,
		req.BuyerId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBuyerCrowResponse{BuyerCrow: val}, nil
}
