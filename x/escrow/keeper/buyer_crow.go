package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

// SetBuyerCrow set a specific buyerCrow in the store from its index
func (k Keeper) SetBuyerCrow(ctx sdk.Context, buyerCrow types.BuyerCrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerCrowKeyPrefix))
	b := k.cdc.MustMarshal(&buyerCrow)
	store.Set(types.BuyerCrowKey(
		buyerCrow.CrowId,
		buyerCrow.BuyerId,
	), b)
}

// GetBuyerCrow returns a buyerCrow from its index
func (k Keeper) GetBuyerCrow(
	ctx sdk.Context,
	crowId string,
	buyerId string,

) (val types.BuyerCrow, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerCrowKeyPrefix))

	b := store.Get(types.BuyerCrowKey(
		crowId,
		buyerId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBuyerCrow removes a buyerCrow from the store
func (k Keeper) RemoveBuyerCrow(
	ctx sdk.Context,
	crowId string,
	buyerId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerCrowKeyPrefix))
	store.Delete(types.BuyerCrowKey(
		crowId,
		buyerId,
	))
}

// GetAllBuyerCrow returns all buyerCrow
func (k Keeper) GetAllBuyerCrow(ctx sdk.Context) (list []types.BuyerCrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerCrowKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BuyerCrow
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
