package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/whitelist/types"
)

func (k msgServer) CreateSeller(goCtx context.Context, msg *types.MsgCreateSeller) (*types.MsgCreateSellerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetSeller(
		ctx,
		msg.SellerId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var seller = types.Seller{
		Producer:    msg.Producer,
		SellerId:    msg.SellerId,
		Name:        msg.Name,
		Desc:        msg.Desc,
		ContactInfo: msg.ContactInfo,
		NumListing:  msg.NumListing,
		ListingId:   msg.ListingId,
		Status:      msg.Status,
	}

	k.SetSeller(
		ctx,
		seller,
	)
	return &types.MsgCreateSellerResponse{}, nil
}

func (k msgServer) UpdateSeller(goCtx context.Context, msg *types.MsgUpdateSeller) (*types.MsgUpdateSellerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetSeller(
		ctx,
		msg.SellerId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg producer is the same as the current owner
	if msg.Producer != valFound.Producer {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var seller = types.Seller{
		Producer:    msg.Producer,
		SellerId:    msg.SellerId,
		Name:        msg.Name,
		Desc:        msg.Desc,
		ContactInfo: msg.ContactInfo,
		NumListing:  msg.NumListing,
		ListingId:   msg.ListingId,
		Status:      msg.Status,
	}

	k.SetSeller(ctx, seller)

	return &types.MsgUpdateSellerResponse{}, nil
}

func (k msgServer) DeleteSeller(goCtx context.Context, msg *types.MsgDeleteSeller) (*types.MsgDeleteSellerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetSeller(
		ctx,
		msg.SellerId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg producer is the same as the current owner
	if msg.Producer != valFound.Producer {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSeller(
		ctx,
		msg.SellerId,
	)

	return &types.MsgDeleteSellerResponse{}, nil
}
