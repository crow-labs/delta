package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
)

func (k msgServer) CancelPendingMonoOrder(goCtx context.Context, msg *types.MsgCancelPendingMonoOrder) (*types.MsgCancelPendingMonoOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCancelPendingMonoOrderResponse{}, nil
}
