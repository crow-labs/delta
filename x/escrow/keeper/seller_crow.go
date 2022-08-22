package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

// SetSellerCrow set a specific sellerCrow in the store from its index
func (k Keeper) SetSellerCrow(ctx sdk.Context, sellerCrow types.SellerCrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerCrowKeyPrefix))
	b := k.cdc.MustMarshal(&sellerCrow)
	store.Set(types.SellerCrowKey(
		sellerCrow.CrowId,
		sellerCrow.SellerId,
	), b)
}

// GetSellerCrow returns a sellerCrow from its index
func (k Keeper) GetSellerCrow(
	ctx sdk.Context,
	crowId string,
	sellerId string,

) (val types.SellerCrow, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerCrowKeyPrefix))

	b := store.Get(types.SellerCrowKey(
		crowId,
		sellerId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSellerCrow removes a sellerCrow from the store
func (k Keeper) RemoveSellerCrow(
	ctx sdk.Context,
	crowId string,
	sellerId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerCrowKeyPrefix))
	store.Delete(types.SellerCrowKey(
		crowId,
		sellerId,
	))
}

// GetAllSellerCrow returns all sellerCrow
func (k Keeper) GetAllSellerCrow(ctx sdk.Context) (list []types.SellerCrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerCrowKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SellerCrow
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
