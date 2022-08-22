package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

// SetBallot set a specific ballot in the store from its index
func (k Keeper) SetBallot(ctx sdk.Context, ballot types.Ballot) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BallotKeyPrefix))
	b := k.cdc.MustMarshal(&ballot)
	store.Set(types.BallotKey(
		ballot.DisputeId,
		ballot.VoterId,
	), b)
}

// GetBallot returns a ballot from its index
func (k Keeper) GetBallot(
	ctx sdk.Context,
	disputeId string,
	voterId string,

) (val types.Ballot, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BallotKeyPrefix))

	b := store.Get(types.BallotKey(
		disputeId,
		voterId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBallot removes a ballot from the store
func (k Keeper) RemoveBallot(
	ctx sdk.Context,
	disputeId string,
	voterId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BallotKeyPrefix))
	store.Delete(types.BallotKey(
		disputeId,
		voterId,
	))
}

// GetAllBallot returns all ballot
func (k Keeper) GetAllBallot(ctx sdk.Context) (list []types.Ballot) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BallotKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Ballot
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
