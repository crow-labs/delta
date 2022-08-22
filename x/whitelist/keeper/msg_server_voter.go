package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/whitelist/types"
)

func (k msgServer) CreateVoter(goCtx context.Context, msg *types.MsgCreateVoter) (*types.MsgCreateVoterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetVoter(
		ctx,
		msg.VoterId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var voter = types.Voter{
		Reviewer:    msg.Reviewer,
		VoterId:     msg.VoterId,
		Name:        msg.Name,
		VotingPower: msg.VotingPower,
		NumVotes:    msg.NumVotes,
		VoteId:      msg.VoteId,
		Status:      msg.Status,
	}

	k.SetVoter(
		ctx,
		voter,
	)
	return &types.MsgCreateVoterResponse{}, nil
}

func (k msgServer) UpdateVoter(goCtx context.Context, msg *types.MsgUpdateVoter) (*types.MsgUpdateVoterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetVoter(
		ctx,
		msg.VoterId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg reviewer is the same as the current owner
	if msg.Reviewer != valFound.Reviewer {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var voter = types.Voter{
		Reviewer:    msg.Reviewer,
		VoterId:     msg.VoterId,
		Name:        msg.Name,
		VotingPower: msg.VotingPower,
		NumVotes:    msg.NumVotes,
		VoteId:      msg.VoteId,
		Status:      msg.Status,
	}

	k.SetVoter(ctx, voter)

	return &types.MsgUpdateVoterResponse{}, nil
}

func (k msgServer) DeleteVoter(goCtx context.Context, msg *types.MsgDeleteVoter) (*types.MsgDeleteVoterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetVoter(
		ctx,
		msg.VoterId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg reviewer is the same as the current owner
	if msg.Reviewer != valFound.Reviewer {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveVoter(
		ctx,
		msg.VoterId,
	)

	return &types.MsgDeleteVoterResponse{}, nil
}
