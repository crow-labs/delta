package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdUpdatePendingMonoOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-pending-mono-order [order-id] [price] [timeeout]",
		Short: "Broadcast message updatePendingMonoOrder",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argOrderId := args[0]
			argPrice, err := sdk.ParseCoinsNormalized(args[1])
			if err != nil {
				return err
			}
			argTimeeout := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdatePendingMonoOrder(
				clientCtx.GetFromAddress().String(),
				argOrderId,
				argPrice,
				argTimeeout,
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
