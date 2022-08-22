package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/whitelist/types"
)

func (k msgServer) CreateMonoWhitelist(goCtx context.Context, msg *types.MsgCreateMonoWhitelist) (*types.MsgCreateMonoWhitelistResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetMonoWhitelist(
		ctx,
		msg.WhitelistId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var monoWhitelist = types.MonoWhitelist{
		Governor:    msg.Governor,
		WhitelistId: msg.WhitelistId,
		Buyer:       msg.Buyer,
		Seller:      msg.Seller,
		Voter:       msg.Voter,
	}

	k.SetMonoWhitelist(
		ctx,
		monoWhitelist,
	)
	return &types.MsgCreateMonoWhitelistResponse{}, nil
}

func (k msgServer) UpdateMonoWhitelist(goCtx context.Context, msg *types.MsgUpdateMonoWhitelist) (*types.MsgUpdateMonoWhitelistResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoWhitelist(
		ctx,
		msg.WhitelistId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg governor is the same as the current owner
	if msg.Governor != valFound.Governor {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var monoWhitelist = types.MonoWhitelist{
		Governor:    msg.Governor,
		WhitelistId: msg.WhitelistId,
		Buyer:       msg.Buyer,
		Seller:      msg.Seller,
		Voter:       msg.Voter,
	}

	k.SetMonoWhitelist(ctx, monoWhitelist)

	return &types.MsgUpdateMonoWhitelistResponse{}, nil
}

func (k msgServer) DeleteMonoWhitelist(goCtx context.Context, msg *types.MsgDeleteMonoWhitelist) (*types.MsgDeleteMonoWhitelistResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoWhitelist(
		ctx,
		msg.WhitelistId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg governor is the same as the current owner
	if msg.Governor != valFound.Governor {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMonoWhitelist(
		ctx,
		msg.WhitelistId,
	)

	return &types.MsgDeleteMonoWhitelistResponse{}, nil
}
