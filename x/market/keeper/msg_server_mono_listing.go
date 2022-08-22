package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/market/types"
)

func (k msgServer) CreateMonoListing(goCtx context.Context, msg *types.MsgCreateMonoListing) (*types.MsgCreateMonoListingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetMonoListing(
		ctx,
		msg.ListingId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var monoListing = types.MonoListing{
		Seller:          msg.Seller,
		ListingId:       msg.ListingId,
		Title:           msg.Title,
		Desc:            msg.Desc,
		Price:           msg.Price,
		OrderId:         msg.OrderId,
		AcceptedOrderId: msg.AcceptedOrderId,
		Status:          msg.Status,
	}

	k.SetMonoListing(
		ctx,
		monoListing,
	)
	return &types.MsgCreateMonoListingResponse{}, nil
}

func (k msgServer) UpdateMonoListing(goCtx context.Context, msg *types.MsgUpdateMonoListing) (*types.MsgUpdateMonoListingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoListing(
		ctx,
		msg.ListingId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg seller is the same as the current owner
	if msg.Seller != valFound.Seller {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var monoListing = types.MonoListing{
		Seller:          msg.Seller,
		ListingId:       msg.ListingId,
		Title:           msg.Title,
		Desc:            msg.Desc,
		Price:           msg.Price,
		OrderId:         msg.OrderId,
		AcceptedOrderId: msg.AcceptedOrderId,
		Status:          msg.Status,
	}

	k.SetMonoListing(ctx, monoListing)

	return &types.MsgUpdateMonoListingResponse{}, nil
}

func (k msgServer) DeleteMonoListing(goCtx context.Context, msg *types.MsgDeleteMonoListing) (*types.MsgDeleteMonoListingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMonoListing(
		ctx,
		msg.ListingId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg seller is the same as the current owner
	if msg.Seller != valFound.Seller {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMonoListing(
		ctx,
		msg.ListingId,
	)

	return &types.MsgDeleteMonoListingResponse{}, nil
}
