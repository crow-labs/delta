package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/crow-labs/delta/x/whitelist/keeper"
	"github.com/crow-labs/delta/x/whitelist/types"
)

func SimulateMsgCreateNewWhitelist(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCreateNewWhitelist{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CreateNewWhitelist simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CreateNewWhitelist simulation not implemented"), nil, nil
	}
}
