package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/whitelist/types"
)

// SetProducer set a specific producer in the store from its index
func (k Keeper) SetProducer(ctx sdk.Context, producer types.Producer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerKeyPrefix))
	b := k.cdc.MustMarshal(&producer)
	store.Set(types.ProducerKey(
		producer.AccAddr,
	), b)
}

// GetProducer returns a producer from its index
func (k Keeper) GetProducer(
	ctx sdk.Context,
	accAddr string,

) (val types.Producer, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerKeyPrefix))

	b := store.Get(types.ProducerKey(
		accAddr,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveProducer removes a producer from the store
func (k Keeper) RemoveProducer(
	ctx sdk.Context,
	accAddr string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerKeyPrefix))
	store.Delete(types.ProducerKey(
		accAddr,
	))
}

// GetAllProducer returns all producer
func (k Keeper) GetAllProducer(ctx sdk.Context) (list []types.Producer) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProducerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Producer
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
