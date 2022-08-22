package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdJoinCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "join-crow [crow-id] [deposit] [collateral]",
		Short: "Broadcast message joinCrow",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCrowId := args[0]
			argDeposit, err := sdk.ParseCoinsNormalized(args[1])
			if err != nil {
				return err
			}
			argCollateral, err := sdk.ParseCoinsNormalized(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgJoinCrow(
				clientCtx.GetFromAddress().String(),
				argCrowId,
				argDeposit,
				argCollateral,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
