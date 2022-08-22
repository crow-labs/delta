package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) SellerRaiseDispute(goCtx context.Context, msg *types.MsgSellerRaiseDispute) (*types.MsgSellerRaiseDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSellerRaiseDisputeResponse{}, nil
}
