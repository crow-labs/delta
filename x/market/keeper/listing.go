package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
)

// SetListing set a specific listing in the store from its index
func (k Keeper) SetListing(ctx sdk.Context, listing types.Listing) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingKeyPrefix))
	b := k.cdc.MustMarshal(&listing)
	store.Set(types.ListingKey(
		listing.WhitelistId,
		listing.SellerId,
	), b)
}

// GetListing returns a listing from its index
func (k Keeper) GetListing(
	ctx sdk.Context,
	whitelistId string,
	sellerId string,

) (val types.Listing, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingKeyPrefix))

	b := store.Get(types.ListingKey(
		whitelistId,
		sellerId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveListing removes a listing from the store
func (k Keeper) RemoveListing(
	ctx sdk.Context,
	whitelistId string,
	sellerId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingKeyPrefix))
	store.Delete(types.ListingKey(
		whitelistId,
		sellerId,
	))
}

// GetAllListing returns all listing
func (k Keeper) GetAllListing(ctx sdk.Context) (list []types.Listing) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ListingKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Listing
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
