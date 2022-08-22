package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

// SetMonoRebutal set a specific monoRebutal in the store from its index
func (k Keeper) SetMonoRebutal(ctx sdk.Context, monoRebutal types.MonoRebutal) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoRebutalKeyPrefix))
	b := k.cdc.MustMarshal(&monoRebutal)
	store.Set(types.MonoRebutalKey(
		monoRebutal.RebuttalId,
	), b)
}

// GetMonoRebutal returns a monoRebutal from its index
func (k Keeper) GetMonoRebutal(
	ctx sdk.Context,
	rebuttalId string,

) (val types.MonoRebutal, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoRebutalKeyPrefix))

	b := store.Get(types.MonoRebutalKey(
		rebuttalId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMonoRebutal removes a monoRebutal from the store
func (k Keeper) RemoveMonoRebutal(
	ctx sdk.Context,
	rebuttalId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoRebutalKeyPrefix))
	store.Delete(types.MonoRebutalKey(
		rebuttalId,
	))
}

// GetAllMonoRebutal returns all monoRebutal
func (k Keeper) GetAllMonoRebutal(ctx sdk.Context) (list []types.MonoRebutal) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoRebutalKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.MonoRebutal
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
