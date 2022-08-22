package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
)

func (k msgServer) OpenMonoListing(goCtx context.Context, msg *types.MsgOpenMonoListing) (*types.MsgOpenMonoListingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgOpenMonoListingResponse{}, nil
}
