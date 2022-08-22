package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/whitelist/types"
)

func (k msgServer) JoinBuyers(goCtx context.Context, msg *types.MsgJoinBuyers) (*types.MsgJoinBuyersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgJoinBuyersResponse{}, nil
}
