package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdBuyerRaiseDispute() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "buyer-raise-dispute [crow-id] [title] [desc] [evidence]",
		Short: "Broadcast message buyerRaiseDispute",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCrowId := args[0]
			argTitle := args[1]
			argDesc := args[2]
			argEvidence := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBuyerRaiseDispute(
				clientCtx.GetFromAddress().String(),
				argCrowId,
				argTitle,
				argDesc,
				argEvidence,
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
