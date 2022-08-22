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

func CmdBuyerDisputeRebuttal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "buyer-dispute-rebuttal [crow-id] [desc] [evidence]",
		Short: "Broadcast message buyerDisputeRebuttal",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCrowId := args[0]
			argDesc := args[1]
			argEvidence := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBuyerDisputeRebuttal(
				clientCtx.GetFromAddress().String(),
				argCrowId,
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
