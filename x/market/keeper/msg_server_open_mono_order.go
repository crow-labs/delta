package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
)

func (k msgServer) OpenMonoOrder(goCtx context.Context, msg *types.MsgOpenMonoOrder) (*types.MsgOpenMonoOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgOpenMonoOrderResponse{}, nil
}
