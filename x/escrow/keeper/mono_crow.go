package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

// SetMonoCrow set a specific monoCrow in the store from its index
func (k Keeper) SetMonoCrow(ctx sdk.Context, monoCrow types.MonoCrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoCrowKeyPrefix))
	b := k.cdc.MustMarshal(&monoCrow)
	store.Set(types.MonoCrowKey(
		monoCrow.CrowId,
	), b)
}

// GetMonoCrow returns a monoCrow from its index
func (k Keeper) GetMonoCrow(
	ctx sdk.Context,
	crowId string,

) (val types.MonoCrow, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoCrowKeyPrefix))

	b := store.Get(types.MonoCrowKey(
		crowId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMonoCrow removes a monoCrow from the store
func (k Keeper) RemoveMonoCrow(
	ctx sdk.Context,
	crowId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoCrowKeyPrefix))
	store.Delete(types.MonoCrowKey(
		crowId,
	))
}

// GetAllMonoCrow returns all monoCrow
func (k Keeper) GetAllMonoCrow(ctx sdk.Context) (list []types.MonoCrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoCrowKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.MonoCrow
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
