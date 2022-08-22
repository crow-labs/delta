package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

// SetRebuttal set a specific rebuttal in the store from its index
func (k Keeper) SetRebuttal(ctx sdk.Context, rebuttal types.Rebuttal) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RebuttalKeyPrefix))
	b := k.cdc.MustMarshal(&rebuttal)
	store.Set(types.RebuttalKey(
		rebuttal.DisputeId,
		rebuttal.DefendantId,
	), b)
}

// GetRebuttal returns a rebuttal from its index
func (k Keeper) GetRebuttal(
	ctx sdk.Context,
	disputeId string,
	defendantId string,

) (val types.Rebuttal, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RebuttalKeyPrefix))

	b := store.Get(types.RebuttalKey(
		disputeId,
		defendantId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveRebuttal removes a rebuttal from the store
func (k Keeper) RemoveRebuttal(
	ctx sdk.Context,
	disputeId string,
	defendantId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RebuttalKeyPrefix))
	store.Delete(types.RebuttalKey(
		disputeId,
		defendantId,
	))
}

// GetAllRebuttal returns all rebuttal
func (k Keeper) GetAllRebuttal(ctx sdk.Context) (list []types.Rebuttal) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RebuttalKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Rebuttal
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
