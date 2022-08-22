package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) CreateSellerMonoCrow(goCtx context.Context, msg *types.MsgCreateSellerMonoCrow) (*types.MsgCreateSellerMonoCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetSellerMonoCrow(
		ctx,
		msg.SellerCrowId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var sellerMonoCrow = types.SellerMonoCrow{
		Seller:       msg.Seller,
		SellerCrowId: msg.SellerCrowId,
		Collateral:   msg.Collateral,
		Status:       msg.Status,
	}

	k.SetSellerMonoCrow(
		ctx,
		sellerMonoCrow,
	)
	return &types.MsgCreateSellerMonoCrowResponse{}, nil
}

func (k msgServer) UpdateSellerMonoCrow(goCtx context.Context, msg *types.MsgUpdateSellerMonoCrow) (*types.MsgUpdateSellerMonoCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetSellerMonoCrow(
		ctx,
		msg.SellerCrowId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg seller is the same as the current owner
	if msg.Seller != valFound.Seller {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var sellerMonoCrow = types.SellerMonoCrow{
		Seller:       msg.Seller,
		SellerCrowId: msg.SellerCrowId,
		Collateral:   msg.Collateral,
		Status:       msg.Status,
	}

	k.SetSellerMonoCrow(ctx, sellerMonoCrow)

	return &types.MsgUpdateSellerMonoCrowResponse{}, nil
}

func (k msgServer) DeleteSellerMonoCrow(goCtx context.Context, msg *types.MsgDeleteSellerMonoCrow) (*types.MsgDeleteSellerMonoCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetSellerMonoCrow(
		ctx,
		msg.SellerCrowId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg seller is the same as the current owner
	if msg.Seller != valFound.Seller {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSellerMonoCrow(
		ctx,
		msg.SellerCrowId,
	)

	return &types.MsgDeleteSellerMonoCrowResponse{}, nil
}
