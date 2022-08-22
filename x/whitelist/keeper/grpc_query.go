package keeper

import (
	"github.com/crow-labs/delta/x/whitelist/types"
)

var _ types.QueryServer = Keeper{}
