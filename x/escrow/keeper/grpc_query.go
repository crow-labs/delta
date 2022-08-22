package keeper

import (
	"github.com/crow-labs/delta/x/escrow/types"
)

var _ types.QueryServer = Keeper{}
