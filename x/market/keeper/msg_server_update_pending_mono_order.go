package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
)

func (k msgServer) UpdatePendingMonoOrder(goCtx context.Context, msg *types.MsgUpdatePendingMonoOrder) (*types.MsgUpdatePendingMonoOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgUpdatePendingMonoOrderResponse{}, nil
}
