package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) CreateMonoCrow(goCtx context.Context, msg *types.MsgCreateMonoCrow) (*types.MsgCreateMonoCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetMonoCrow(
		ctx,
		msg.CrowId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var monoCrow = types.MonoCrow{
		Seller:       msg.Seller,
		CrowId:       msg.CrowId,
		WhitelistId:  msg.WhitelistId,
		SellerCrowId: msg.SellerCrowId,
		BuyerCrowId:  msg.BuyerCrowId,
		DisputeId:    msg.DisputeId,
		Timeout:      msg.Timeout,
		Status:       msg.Status,
	}

	k.SetMonoCrow(
		ctx,
		monoCrow,
	)
	return &types.MsgCreateMonoCrowResponse{}, nil
}

func (k msgServer) UpdateMonoCrow(goCtx context.Context, msg *types.MsgUpdateMonoCrow) (*types.MsgUpdateMonoCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoCrow(
		ctx,
		msg.CrowId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg seller is the same as the current owner
	if msg.Seller != valFound.Seller {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var monoCrow = types.MonoCrow{
		Seller:       msg.Seller,
		CrowId:       msg.CrowId,
		WhitelistId:  msg.WhitelistId,
		SellerCrowId: msg.SellerCrowId,
		BuyerCrowId:  msg.BuyerCrowId,
		DisputeId:    msg.DisputeId,
		Timeout:      msg.Timeout,
		Status:       msg.Status,
	}

	k.SetMonoCrow(ctx, monoCrow)

	return &types.MsgUpdateMonoCrowResponse{}, nil
}

func (k msgServer) DeleteMonoCrow(goCtx context.Context, msg *types.MsgDeleteMonoCrow) (*types.MsgDeleteMonoCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoCrow(
		ctx,
		msg.CrowId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg seller is the same as the current owner
	if msg.Seller != valFound.Seller {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMonoCrow(
		ctx,
		msg.CrowId,
	)

	return &types.MsgDeleteMonoCrowResponse{}, nil
}
