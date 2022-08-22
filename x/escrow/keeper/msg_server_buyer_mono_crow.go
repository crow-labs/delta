package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/crow-labs/delta/x/escrow/types"
)

func (k msgServer) CreateBuyerMonoCrow(goCtx context.Context, msg *types.MsgCreateBuyerMonoCrow) (*types.MsgCreateBuyerMonoCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBuyerMonoCrow(
		ctx,
		msg.BuyerCrowId,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var buyerMonoCrow = types.BuyerMonoCrow{
		Buyer:       msg.Buyer,
		BuyerCrowId: msg.BuyerCrowId,
		Deposit:     msg.Deposit,
		Collateral:  msg.Collateral,
		Status:      msg.Status,
	}

	k.SetBuyerMonoCrow(
		ctx,
		buyerMonoCrow,
	)
	return &types.MsgCreateBuyerMonoCrowResponse{}, nil
}

func (k msgServer) UpdateBuyerMonoCrow(goCtx context.Context, msg *types.MsgUpdateBuyerMonoCrow) (*types.MsgUpdateBuyerMonoCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBuyerMonoCrow(
		ctx,
		msg.BuyerCrowId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg buyer is the same as the current owner
	if msg.Buyer != valFound.Buyer {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var buyerMonoCrow = types.BuyerMonoCrow{
		Buyer:       msg.Buyer,
		BuyerCrowId: msg.BuyerCrowId,
		Deposit:     msg.Deposit,
		Collateral:  msg.Collateral,
		Status:      msg.Status,
	}

	k.SetBuyerMonoCrow(ctx, buyerMonoCrow)

	return &types.MsgUpdateBuyerMonoCrowResponse{}, nil
}

func (k msgServer) DeleteBuyerMonoCrow(goCtx context.Context, msg *types.MsgDeleteBuyerMonoCrow) (*types.MsgDeleteBuyerMonoCrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBuyerMonoCrow(
		ctx,
		msg.BuyerCrowId,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg buyer is the same as the current owner
	if msg.Buyer != valFound.Buyer {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBuyerMonoCrow(
		ctx,
		msg.BuyerCrowId,
	)

	return &types.MsgDeleteBuyerMonoCrowResponse{}, nil
}
