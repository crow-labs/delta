package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/whitelist/types"
)

func (k msgServer) CreateWhitelist(goCtx context.Context, msg *types.MsgCreateWhitelist) (*types.MsgCreateWhitelistResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var whitelist = types.Whitelist{
		Creator:     msg.Creator,
		WhitelistId: msg.WhitelistId,
	}

	id := k.AppendWhitelist(
		ctx,
		whitelist,
	)

	return &types.MsgCreateWhitelistResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateWhitelist(goCtx context.Context, msg *types.MsgUpdateWhitelist) (*types.MsgUpdateWhitelistResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var whitelist = types.Whitelist{
		Creator:     msg.Creator,
		Id:          msg.Id,
		WhitelistId: msg.WhitelistId,
	}

	// Checks that the element exists
	val, found := k.GetWhitelist(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetWhitelist(ctx, whitelist)

	return &types.MsgUpdateWhitelistResponse{}, nil
}

func (k msgServer) DeleteWhitelist(goCtx context.Context, msg *types.MsgDeleteWhitelist) (*types.MsgDeleteWhitelistResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetWhitelist(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveWhitelist(ctx, msg.Id)

	return &types.MsgDeleteWhitelistResponse{}, nil
}
