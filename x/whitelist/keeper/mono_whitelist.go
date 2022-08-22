package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/whitelist/types"
)

// SetMonoWhitelist set a specific monoWhitelist in the store from its index
func (k Keeper) SetMonoWhitelist(ctx sdk.Context, monoWhitelist types.MonoWhitelist) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoWhitelistKeyPrefix))
	b := k.cdc.MustMarshal(&monoWhitelist)
	store.Set(types.MonoWhitelistKey(
		monoWhitelist.WhitelistId,
	), b)
}

// GetMonoWhitelist returns a monoWhitelist from its index
func (k Keeper) GetMonoWhitelist(
	ctx sdk.Context,
	whitelistId string,

) (val types.MonoWhitelist, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoWhitelistKeyPrefix))

	b := store.Get(types.MonoWhitelistKey(
		whitelistId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMonoWhitelist removes a monoWhitelist from the store
func (k Keeper) RemoveMonoWhitelist(
	ctx sdk.Context,
	whitelistId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoWhitelistKeyPrefix))
	store.Delete(types.MonoWhitelistKey(
		whitelistId,
	))
}

// GetAllMonoWhitelist returns all monoWhitelist
func (k Keeper) GetAllMonoWhitelist(ctx sdk.Context) (list []types.MonoWhitelist) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MonoWhitelistKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.MonoWhitelist
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
