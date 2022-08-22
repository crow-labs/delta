package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/crow-labs/delta/x/whitelist/keeper"
	"github.com/crow-labs/delta/x/whitelist/types"
)

func SimulateMsgJoinVoters(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgJoinVoters{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the JoinVoters simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "JoinVoters simulation not implemented"), nil, nil
	}
}
