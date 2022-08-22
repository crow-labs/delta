package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

// SetVerdict set a specific verdict in the store from its index
func (k Keeper) SetVerdict(ctx sdk.Context, verdict types.Verdict) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VerdictKeyPrefix))
	b := k.cdc.MustMarshal(&verdict)
	store.Set(types.VerdictKey(
		verdict.VerdictId,
	), b)
}

// GetVerdict returns a verdict from its index
func (k Keeper) GetVerdict(
	ctx sdk.Context,
	verdictId string,

) (val types.Verdict, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VerdictKeyPrefix))

	b := store.Get(types.VerdictKey(
		verdictId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveVerdict removes a verdict from the store
func (k Keeper) RemoveVerdict(
	ctx sdk.Context,
	verdictId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VerdictKeyPrefix))
	store.Delete(types.VerdictKey(
		verdictId,
	))
}

// GetAllVerdict returns all verdict
func (k Keeper) GetAllVerdict(ctx sdk.Context) (list []types.Verdict) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VerdictKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Verdict
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
