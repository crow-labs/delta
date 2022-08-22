package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) CreateMonoRebutal(goCtx context.Context, msg *types.MsgCreateMonoRebutal) (*types.MsgCreateMonoRebutalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetMonoRebutal(
		ctx,
		msg.RebuttalId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var monoRebutal = types.MonoRebutal{
		Defendant:  msg.Defendant,
		RebuttalId: msg.RebuttalId,
		Desc:       msg.Desc,
		Evidence:   msg.Evidence,
	}

	k.SetMonoRebutal(
		ctx,
		monoRebutal,
	)
	return &types.MsgCreateMonoRebutalResponse{}, nil
}

func (k msgServer) UpdateMonoRebutal(goCtx context.Context, msg *types.MsgUpdateMonoRebutal) (*types.MsgUpdateMonoRebutalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoRebutal(
		ctx,
		msg.RebuttalId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg defendant is the same as the current owner
	if msg.Defendant != valFound.Defendant {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var monoRebutal = types.MonoRebutal{
		Defendant:  msg.Defendant,
		RebuttalId: msg.RebuttalId,
		Desc:       msg.Desc,
		Evidence:   msg.Evidence,
	}

	k.SetMonoRebutal(ctx, monoRebutal)

	return &types.MsgUpdateMonoRebutalResponse{}, nil
}

func (k msgServer) DeleteMonoRebutal(goCtx context.Context, msg *types.MsgDeleteMonoRebutal) (*types.MsgDeleteMonoRebutalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoRebutal(
		ctx,
		msg.RebuttalId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg defendant is the same as the current owner
	if msg.Defendant != valFound.Defendant {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMonoRebutal(
		ctx,
		msg.RebuttalId,
	)

	return &types.MsgDeleteMonoRebutalResponse{}, nil
}
