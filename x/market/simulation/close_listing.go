package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/crow-labs/delta/x/market/keeper"
	"github.com/crow-labs/delta/x/market/types"
)

func SimulateMsgCloseListing(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCloseListing{
			Seller: simAccount.Address.String(),
		}

		// TODO: Handling the CloseListing simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CloseListing simulation not implemented"), nil, nil
	}
}
