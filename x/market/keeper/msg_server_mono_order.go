package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/market/types"
)

func (k msgServer) CreateMonoOrder(goCtx context.Context, msg *types.MsgCreateMonoOrder) (*types.MsgCreateMonoOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetMonoOrder(
		ctx,
		msg.OrderId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var monoOrder = types.MonoOrder{
		Buyer:   msg.Buyer,
		OrderId: msg.OrderId,
		Price:   msg.Price,
		Timeout: msg.Timeout,
		Status:  msg.Status,
	}

	k.SetMonoOrder(
		ctx,
		monoOrder,
	)
	return &types.MsgCreateMonoOrderResponse{}, nil
}

func (k msgServer) UpdateMonoOrder(goCtx context.Context, msg *types.MsgUpdateMonoOrder) (*types.MsgUpdateMonoOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoOrder(
		ctx,
		msg.OrderId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg buyer is the same as the current owner
	if msg.Buyer != valFound.Buyer {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var monoOrder = types.MonoOrder{
		Buyer:   msg.Buyer,
		OrderId: msg.OrderId,
		Price:   msg.Price,
		Timeout: msg.Timeout,
		Status:  msg.Status,
	}

	k.SetMonoOrder(ctx, monoOrder)

	return &types.MsgUpdateMonoOrderResponse{}, nil
}

func (k msgServer) DeleteMonoOrder(goCtx context.Context, msg *types.MsgDeleteMonoOrder) (*types.MsgDeleteMonoOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoOrder(
		ctx,
		msg.OrderId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg buyer is the same as the current owner
	if msg.Buyer != valFound.Buyer {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMonoOrder(
		ctx,
		msg.OrderId,
	)

	return &types.MsgDeleteMonoOrderResponse{}, nil
}
