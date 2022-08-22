package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/whitelist/types"
)

// SetReviewer set a specific reviewer in the store from its index
func (k Keeper) SetReviewer(ctx sdk.Context, reviewer types.Reviewer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewerKeyPrefix))
	b := k.cdc.MustMarshal(&reviewer)
	store.Set(types.ReviewerKey(
		reviewer.AccAddr,
	), b)
}

// GetReviewer returns a reviewer from its index
func (k Keeper) GetReviewer(
	ctx sdk.Context,
	accAddr string,

) (val types.Reviewer, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewerKeyPrefix))

	b := store.Get(types.ReviewerKey(
		accAddr,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveReviewer removes a reviewer from the store
func (k Keeper) RemoveReviewer(
	ctx sdk.Context,
	accAddr string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewerKeyPrefix))
	store.Delete(types.ReviewerKey(
		accAddr,
	))
}

// GetAllReviewer returns all reviewer
func (k Keeper) GetAllReviewer(ctx sdk.Context) (list []types.Reviewer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReviewerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Reviewer
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
