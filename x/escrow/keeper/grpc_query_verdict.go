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

func (k Keeper) VerdictAll(c context.Context, req *types.QueryAllVerdictRequest) (*types.QueryAllVerdictResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var verdicts []types.Verdict
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	verdictStore := prefix.NewStore(store, types.KeyPrefix(types.VerdictKeyPrefix))

	pageRes, err := query.Paginate(verdictStore, req.Pagination, func(key []byte, value []byte) error {
		var verdict types.Verdict
		if err := k.cdc.Unmarshal(value, &verdict); err != nil {
			return err
		}

		verdicts = append(verdicts, verdict)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllVerdictResponse{Verdict: verdicts, Pagination: pageRes}, nil
}

func (k Keeper) Verdict(c context.Context, req *types.QueryGetVerdictRequest) (*types.QueryGetVerdictResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetVerdict(
		ctx,
		req.VerdictId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetVerdictResponse{Verdict: val}, nil
}
