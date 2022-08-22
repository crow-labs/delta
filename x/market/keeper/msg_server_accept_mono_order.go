package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
)

func (k msgServer) AcceptMonoOrder(goCtx context.Context, msg *types.MsgAcceptMonoOrder) (*types.MsgAcceptMonoOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgAcceptMonoOrderResponse{}, nil
}
