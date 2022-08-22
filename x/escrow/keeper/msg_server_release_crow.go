package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) ReleaseCrow(goCtx context.Context, msg *types.MsgReleaseCrow) (*types.MsgReleaseCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgReleaseCrowResponse{}, nil
}
