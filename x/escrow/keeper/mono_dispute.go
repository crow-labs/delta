package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

// SetMonoDispute set a specific monoDispute in the store from its index
func (k Keeper) SetMonoDispute(ctx sdk.Context, monoDispute types.MonoDispute) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoDisputeKeyPrefix))
	b := k.cdc.MustMarshal(&monoDispute)
	store.Set(types.MonoDisputeKey(
		monoDispute.DisputeId,
	), b)
}

// GetMonoDispute returns a monoDispute from its index
func (k Keeper) GetMonoDispute(
	ctx sdk.Context,
	disputeId string,

) (val types.MonoDispute, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoDisputeKeyPrefix))

	b := store.Get(types.MonoDisputeKey(
		disputeId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMonoDispute removes a monoDispute from the store
func (k Keeper) RemoveMonoDispute(
	ctx sdk.Context,
	disputeId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoDisputeKeyPrefix))
	store.Delete(types.MonoDisputeKey(
		disputeId,
	))
}

// GetAllMonoDispute returns all monoDispute
func (k Keeper) GetAllMonoDispute(ctx sdk.Context) (list []types.MonoDispute) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoDisputeKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.MonoDispute
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
