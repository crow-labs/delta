package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) CreateMonoDispute(goCtx context.Context, msg *types.MsgCreateMonoDispute) (*types.MsgCreateMonoDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetMonoDispute(
		ctx,
		msg.DisputeId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var monoDispute = types.MonoDispute{
		Plaintiff: msg.Plaintiff,
		DisputeId: msg.DisputeId,
		Title:     msg.Title,
		Desc:      msg.Desc,
		Evidence:  msg.Evidence,
	}

	k.SetMonoDispute(
		ctx,
		monoDispute,
	)
	return &types.MsgCreateMonoDisputeResponse{}, nil
}

func (k msgServer) UpdateMonoDispute(goCtx context.Context, msg *types.MsgUpdateMonoDispute) (*types.MsgUpdateMonoDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoDispute(
		ctx,
		msg.DisputeId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg plaintiff is the same as the current owner
	if msg.Plaintiff != valFound.Plaintiff {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var monoDispute = types.MonoDispute{
		Plaintiff: msg.Plaintiff,
		DisputeId: msg.DisputeId,
		Title:     msg.Title,
		Desc:      msg.Desc,
		Evidence:  msg.Evidence,
	}

	k.SetMonoDispute(ctx, monoDispute)

	return &types.MsgUpdateMonoDisputeResponse{}, nil
}

func (k msgServer) DeleteMonoDispute(goCtx context.Context, msg *types.MsgDeleteMonoDispute) (*types.MsgDeleteMonoDisputeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoDispute(
		ctx,
		msg.DisputeId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg plaintiff is the same as the current owner
	if msg.Plaintiff != valFound.Plaintiff {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMonoDispute(
		ctx,
		msg.DisputeId,
	)

	return &types.MsgDeleteMonoDisputeResponse{}, nil
}
