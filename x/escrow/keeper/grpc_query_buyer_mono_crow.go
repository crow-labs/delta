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

func (k Keeper) BuyerMonoCrowAll(c context.Context, req *types.QueryAllBuyerMonoCrowRequest) (*types.QueryAllBuyerMonoCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var buyerMonoCrows []types.BuyerMonoCrow
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	buyerMonoCrowStore := prefix.NewStore(store, types.KeyPrefix(types.BuyerMonoCrowKeyPrefix))

	pageRes, err := query.Paginate(buyerMonoCrowStore, req.Pagination, func(key []byte, value []byte) error {
		var buyerMonoCrow types.BuyerMonoCrow
		if err := k.cdc.Unmarshal(value, &buyerMonoCrow); err != nil {
			return err
		}

		buyerMonoCrows = append(buyerMonoCrows, buyerMonoCrow)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBuyerMonoCrowResponse{BuyerMonoCrow: buyerMonoCrows, Pagination: pageRes}, nil
}

func (k Keeper) BuyerMonoCrow(c context.Context, req *types.QueryGetBuyerMonoCrowRequest) (*types.QueryGetBuyerMonoCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBuyerMonoCrow(
		ctx,
		req.BuyerCrowId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBuyerMonoCrowResponse{BuyerMonoCrow: val}, nil
}
