package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
)

// SetMonoOrder set a specific monoOrder in the store from its index
func (k Keeper) SetMonoOrder(ctx sdk.Context, monoOrder types.MonoOrder) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoOrderKeyPrefix))
	b := k.cdc.MustMarshal(&monoOrder)
	store.Set(types.MonoOrderKey(
		monoOrder.OrderId,
	), b)
}

// GetMonoOrder returns a monoOrder from its index
func (k Keeper) GetMonoOrder(
	ctx sdk.Context,
	orderId string,

) (val types.MonoOrder, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoOrderKeyPrefix))

	b := store.Get(types.MonoOrderKey(
		orderId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMonoOrder removes a monoOrder from the store
func (k Keeper) RemoveMonoOrder(
	ctx sdk.Context,
	orderId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoOrderKeyPrefix))
	store.Delete(types.MonoOrderKey(
		orderId,
	))
}

// GetAllMonoOrder returns all monoOrder
func (k Keeper) GetAllMonoOrder(ctx sdk.Context) (list []types.MonoOrder) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoOrderKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.MonoOrder
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
