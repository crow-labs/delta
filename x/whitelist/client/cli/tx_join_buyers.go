package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/delta/x/whitelist/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdJoinBuyers() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "join-buyers [whitelist-id] [name]",
		Short: "Broadcast message joinBuyers",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argWhitelistId := args[0]
			argName := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgJoinBuyers(
				clientCtx.GetFromAddress().String(),
				argWhitelistId,
				argName,
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
