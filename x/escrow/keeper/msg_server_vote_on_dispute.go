package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) VoteOnDispute(goCtx context.Context, msg *types.MsgVoteOnDispute) (*types.MsgVoteOnDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgVoteOnDisputeResponse{}, nil
}
