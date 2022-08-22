package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) BuyerRaiseDispute(goCtx context.Context, msg *types.MsgBuyerRaiseDispute) (*types.MsgBuyerRaiseDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgBuyerRaiseDisputeResponse{}, nil
}
