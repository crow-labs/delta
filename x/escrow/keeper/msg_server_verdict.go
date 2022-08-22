package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) CreateVerdict(goCtx context.Context, msg *types.MsgCreateVerdict) (*types.MsgCreateVerdictResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetVerdict(
		ctx,
		msg.VerdictId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var verdict = types.Verdict{
		Creator:       msg.Creator,
		VerdictId:     msg.VerdictId,
		VoteIds:       msg.VoteIds,
		ResultingVote: msg.ResultingVote,
	}

	k.SetVerdict(
		ctx,
		verdict,
	)
	return &types.MsgCreateVerdictResponse{}, nil
}

func (k msgServer) UpdateVerdict(goCtx context.Context, msg *types.MsgUpdateVerdict) (*types.MsgUpdateVerdictResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetVerdict(
		ctx,
		msg.VerdictId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var verdict = types.Verdict{
		Creator:       msg.Creator,
		VerdictId:     msg.VerdictId,
		VoteIds:       msg.VoteIds,
		ResultingVote: msg.ResultingVote,
	}

	k.SetVerdict(ctx, verdict)

	return &types.MsgUpdateVerdictResponse{}, nil
}

func (k msgServer) DeleteVerdict(goCtx context.Context, msg *types.MsgDeleteVerdict) (*types.MsgDeleteVerdictResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetVerdict(
		ctx,
		msg.VerdictId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveVerdict(
		ctx,
		msg.VerdictId,
	)

	return &types.MsgDeleteVerdictResponse{}, nil
}
