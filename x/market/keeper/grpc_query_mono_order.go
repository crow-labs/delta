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

func (k Keeper) MonoOrderAll(c context.Context, req *types.QueryAllMonoOrderRequest) (*types.QueryAllMonoOrderResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var monoOrders []types.MonoOrder
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	monoOrderStore := prefix.NewStore(store, types.KeyPrefix(types.MonoOrderKeyPrefix))

	pageRes, err := query.Paginate(monoOrderStore, req.Pagination, func(key []byte, value []byte) error {
		var monoOrder types.MonoOrder
		if err := k.cdc.Unmarshal(value, &monoOrder); err != nil {
			return err
		}

		monoOrders = append(monoOrders, monoOrder)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMonoOrderResponse{MonoOrder: monoOrders, Pagination: pageRes}, nil
}

func (k Keeper) MonoOrder(c context.Context, req *types.QueryGetMonoOrderRequest) (*types.QueryGetMonoOrderResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMonoOrder(
		ctx,
		req.OrderId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMonoOrderResponse{MonoOrder: val}, nil
}
