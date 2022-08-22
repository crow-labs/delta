package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/whitelist/types"
)

func (k msgServer) CreateBuyer(goCtx context.Context, msg *types.MsgCreateBuyer) (*types.MsgCreateBuyerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBuyer(
		ctx,
		msg.BuyerId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var buyer = types.Buyer{
		Buyer:    msg.Buyer,
		BuyerId:  msg.BuyerId,
		Name:     msg.Name,
		NumOrder: msg.NumOrder,
		OrderId:  msg.OrderId,
		Status:   msg.Status,
	}

	k.SetBuyer(
		ctx,
		buyer,
	)
	return &types.MsgCreateBuyerResponse{}, nil
}

func (k msgServer) UpdateBuyer(goCtx context.Context, msg *types.MsgUpdateBuyer) (*types.MsgUpdateBuyerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBuyer(
		ctx,
		msg.BuyerId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg buyer is the same as the current owner
	if msg.Buyer != valFound.Buyer {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var buyer = types.Buyer{
		Buyer:    msg.Buyer,
		BuyerId:  msg.BuyerId,
		Name:     msg.Name,
		NumOrder: msg.NumOrder,
		OrderId:  msg.OrderId,
		Status:   msg.Status,
	}

	k.SetBuyer(ctx, buyer)

	return &types.MsgUpdateBuyerResponse{}, nil
}

func (k msgServer) DeleteBuyer(goCtx context.Context, msg *types.MsgDeleteBuyer) (*types.MsgDeleteBuyerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBuyer(
		ctx,
		msg.BuyerId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg buyer is the same as the current owner
	if msg.Buyer != valFound.Buyer {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBuyer(
		ctx,
		msg.BuyerId,
	)

	return &types.MsgDeleteBuyerResponse{}, nil
}
