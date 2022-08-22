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

func CmdOpenMonoOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "open-mono-order [listing-id] [price] [timeout]",
		Short: "Broadcast message openMonoOrder",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argListingId := args[0]
			argPrice, err := sdk.ParseCoinsNormalized(args[1])
			if err != nil {
				return err
			}
			argTimeout := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgOpenMonoOrder(
				clientCtx.GetFromAddress().String(),
				argListingId,
				argPrice,
				argTimeout,
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
