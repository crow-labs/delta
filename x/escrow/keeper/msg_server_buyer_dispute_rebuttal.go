package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) BuyerDisputeRebuttal(goCtx context.Context, msg *types.MsgBuyerDisputeRebuttal) (*types.MsgBuyerDisputeRebuttalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgBuyerDisputeRebuttalResponse{}, nil
}
