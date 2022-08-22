package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

// SetPoll set a specific poll in the store from its index
func (k Keeper) SetPoll(ctx sdk.Context, poll types.Poll) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKeyPrefix))
	b := k.cdc.MustMarshal(&poll)
	store.Set(types.PollKey(
		poll.CrowId,
		poll.DisputeId,
	), b)
}

// GetPoll returns a poll from its index
func (k Keeper) GetPoll(
	ctx sdk.Context,
	crowId string,
	disputeId string,

) (val types.Poll, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKeyPrefix))

	b := store.Get(types.PollKey(
		crowId,
		disputeId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePoll removes a poll from the store
func (k Keeper) RemovePoll(
	ctx sdk.Context,
	crowId string,
	disputeId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKeyPrefix))
	store.Delete(types.PollKey(
		crowId,
		disputeId,
	))
}

// GetAllPoll returns all poll
func (k Keeper) GetAllPoll(ctx sdk.Context) (list []types.Poll) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PollKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Poll
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
