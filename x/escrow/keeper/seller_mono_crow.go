package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
)

// SetSellerMonoCrow set a specific sellerMonoCrow in the store from its index
func (k Keeper) SetSellerMonoCrow(ctx sdk.Context, sellerMonoCrow types.SellerMonoCrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerMonoCrowKeyPrefix))
	b := k.cdc.MustMarshal(&sellerMonoCrow)
	store.Set(types.SellerMonoCrowKey(
		sellerMonoCrow.SellerCrowId,
	), b)
}

// GetSellerMonoCrow returns a sellerMonoCrow from its index
func (k Keeper) GetSellerMonoCrow(
	ctx sdk.Context,
	sellerCrowId string,

) (val types.SellerMonoCrow, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerMonoCrowKeyPrefix))

	b := store.Get(types.SellerMonoCrowKey(
		sellerCrowId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSellerMonoCrow removes a sellerMonoCrow from the store
func (k Keeper) RemoveSellerMonoCrow(
	ctx sdk.Context,
	sellerCrowId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerMonoCrowKeyPrefix))
	store.Delete(types.SellerMonoCrowKey(
		sellerCrowId,
	))
}

// GetAllSellerMonoCrow returns all sellerMonoCrow
func (k Keeper) GetAllSellerMonoCrow(ctx sdk.Context) (list []types.SellerMonoCrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SellerMonoCrowKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SellerMonoCrow
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
