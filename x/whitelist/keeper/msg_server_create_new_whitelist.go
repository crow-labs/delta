package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/whitelist/types"
)

func (k msgServer) CreateNewWhitelist(goCtx context.Context, msg *types.MsgCreateNewWhitelist) (*types.MsgCreateNewWhitelistResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateNewWhitelistResponse{}, nil
}
