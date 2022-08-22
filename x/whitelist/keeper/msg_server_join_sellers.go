package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/whitelist/types"
)

func (k msgServer) JoinSellers(goCtx context.Context, msg *types.MsgJoinSellers) (*types.MsgJoinSellersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgJoinSellersResponse{}, nil
}
