package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

// SetBuyerMonoCrow set a specific buyerMonoCrow in the store from its index
func (k Keeper) SetBuyerMonoCrow(ctx sdk.Context, buyerMonoCrow types.BuyerMonoCrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerMonoCrowKeyPrefix))
	b := k.cdc.MustMarshal(&buyerMonoCrow)
	store.Set(types.BuyerMonoCrowKey(
		buyerMonoCrow.BuyerCrowId,
	), b)
}

// GetBuyerMonoCrow returns a buyerMonoCrow from its index
func (k Keeper) GetBuyerMonoCrow(
	ctx sdk.Context,
	buyerCrowId string,

) (val types.BuyerMonoCrow, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerMonoCrowKeyPrefix))

	b := store.Get(types.BuyerMonoCrowKey(
		buyerCrowId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBuyerMonoCrow removes a buyerMonoCrow from the store
func (k Keeper) RemoveBuyerMonoCrow(
	ctx sdk.Context,
	buyerCrowId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerMonoCrowKeyPrefix))
	store.Delete(types.BuyerMonoCrowKey(
		buyerCrowId,
	))
}

// GetAllBuyerMonoCrow returns all buyerMonoCrow
func (k Keeper) GetAllBuyerMonoCrow(ctx sdk.Context) (list []types.BuyerMonoCrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuyerMonoCrowKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BuyerMonoCrow
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
