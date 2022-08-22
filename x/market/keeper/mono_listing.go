package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
)

// SetMonoListing set a specific monoListing in the store from its index
func (k Keeper) SetMonoListing(ctx sdk.Context, monoListing types.MonoListing) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoListingKeyPrefix))
	b := k.cdc.MustMarshal(&monoListing)
	store.Set(types.MonoListingKey(
		monoListing.ListingId,
	), b)
}

// GetMonoListing returns a monoListing from its index
func (k Keeper) GetMonoListing(
	ctx sdk.Context,
	listingId string,

) (val types.MonoListing, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoListingKeyPrefix))

	b := store.Get(types.MonoListingKey(
		listingId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMonoListing removes a monoListing from the store
func (k Keeper) RemoveMonoListing(
	ctx sdk.Context,
	listingId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoListingKeyPrefix))
	store.Delete(types.MonoListingKey(
		listingId,
	))
}

// GetAllMonoListing returns all monoListing
func (k Keeper) GetAllMonoListing(ctx sdk.Context) (list []types.MonoListing) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoListingKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.MonoListing
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
