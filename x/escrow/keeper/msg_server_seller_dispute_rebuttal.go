package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) SellerDisputeRebuttal(goCtx context.Context, msg *types.MsgSellerDisputeRebuttal) (*types.MsgSellerDisputeRebuttalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSellerDisputeRebuttalResponse{}, nil
}
