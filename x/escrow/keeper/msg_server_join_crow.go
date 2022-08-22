package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) JoinCrow(goCtx context.Context, msg *types.MsgJoinCrow) (*types.MsgJoinCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgJoinCrowResponse{}, nil
}
