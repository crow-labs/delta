package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/delta/x/market/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCancelPendingMonoOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "cancel-pending-mono-order [order-id]",
		Short: "Broadcast message cancelPendingMonoOrder",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argOrderId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCancelPendingMonoOrder(
				clientCtx.GetFromAddress().String(),
				argOrderId,
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
