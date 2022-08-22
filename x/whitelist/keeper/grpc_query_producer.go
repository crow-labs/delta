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

func (k Keeper) ProducerAll(c context.Context, req *types.QueryAllProducerRequest) (*types.QueryAllProducerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var producers []types.Producer
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	producerStore := prefix.NewStore(store, types.KeyPrefix(types.ProducerKeyPrefix))

	pageRes, err := query.Paginate(producerStore, req.Pagination, func(key []byte, value []byte) error {
		var producer types.Producer
		if err := k.cdc.Unmarshal(value, &producer); err != nil {
			return err
		}

		producers = append(producers, producer)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllProducerResponse{Producer: producers, Pagination: pageRes}, nil
}

func (k Keeper) Producer(c context.Context, req *types.QueryGetProducerRequest) (*types.QueryGetProducerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetProducer(
		ctx,
		req.AccAddr,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetProducerResponse{Producer: val}, nil
}
