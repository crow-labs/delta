package keeper

import (
	"github.com/crow-labs/delta/x/market/types"
)

var _ types.QueryServer = Keeper{}
