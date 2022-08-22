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

func (k Keeper) MonoCrowAll(c context.Context, req *types.QueryAllMonoCrowRequest) (*types.QueryAllMonoCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var monoCrows []types.MonoCrow
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	monoCrowStore := prefix.NewStore(store, types.KeyPrefix(types.MonoCrowKeyPrefix))

	pageRes, err := query.Paginate(monoCrowStore, req.Pagination, func(key []byte, value []byte) error {
		var monoCrow types.MonoCrow
		if err := k.cdc.Unmarshal(value, &monoCrow); err != nil {
			return err
		}

		monoCrows = append(monoCrows, monoCrow)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMonoCrowResponse{MonoCrow: monoCrows, Pagination: pageRes}, nil
}

func (k Keeper) MonoCrow(c context.Context, req *types.QueryGetMonoCrowRequest) (*types.QueryGetMonoCrowResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMonoCrow(
		ctx,
		req.CrowId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMonoCrowResponse{MonoCrow: val}, nil
}
