package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/whitelist/types"
)

func (k msgServer) JoinVoters(goCtx context.Context, msg *types.MsgJoinVoters) (*types.MsgJoinVotersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgJoinVotersResponse{}, nil
}
