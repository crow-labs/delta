package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
)

func (k msgServer) CloseListing(goCtx context.Context, msg *types.MsgCloseListing) (*types.MsgCloseListingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCloseListingResponse{}, nil
}
