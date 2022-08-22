package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/whitelist/types"
)

// GetWhitelistCount get the total number of whitelist
func (k Keeper) GetWhitelistCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.WhitelistCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetWhitelistCount set the total number of whitelist
func (k Keeper) SetWhitelistCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.WhitelistCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendWhitelist appends a whitelist in the store with a new id and update the count
func (k Keeper) AppendWhitelist(
	ctx sdk.Context,
	whitelist types.Whitelist,
) uint64 {
	// Create the whitelist
	count := k.GetWhitelistCount(ctx)

	// Set the ID of the appended value
	whitelist.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistKey))
	appendedValue := k.cdc.MustMarshal(&whitelist)
	store.Set(GetWhitelistIDBytes(whitelist.Id), appendedValue)

	// Update whitelist count
	k.SetWhitelistCount(ctx, count+1)

	return count
}

// SetWhitelist set a specific whitelist in the store
func (k Keeper) SetWhitelist(ctx sdk.Context, whitelist types.Whitelist) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistKey))
	b := k.cdc.MustMarshal(&whitelist)
	store.Set(GetWhitelistIDBytes(whitelist.Id), b)
}

// GetWhitelist returns a whitelist from its id
func (k Keeper) GetWhitelist(ctx sdk.Context, id uint64) (val types.Whitelist, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistKey))
	b := store.Get(GetWhitelistIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveWhitelist removes a whitelist from the store
func (k Keeper) RemoveWhitelist(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistKey))
	store.Delete(GetWhitelistIDBytes(id))
}

// GetAllWhitelist returns all whitelist
func (k Keeper) GetAllWhitelist(ctx sdk.Context) (list []types.Whitelist) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhitelistKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Whitelist
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetWhitelistIDBytes returns the byte representation of the ID
func GetWhitelistIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetWhitelistIDFromBytes returns ID in uint64 format from a byte array
func GetWhitelistIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
