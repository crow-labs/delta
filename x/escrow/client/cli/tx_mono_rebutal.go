package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdCreateMonoRebutal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-mono-rebutal [rebuttal-id] [desc] [evidence]",
		Short: "Create a new monoRebutal",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexRebuttalId := args[0]

			// Get value arguments
			argDesc := args[1]
			argEvidence := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateMonoRebutal(
				clientCtx.GetFromAddress().String(),
				indexRebuttalId,
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

func CmdUpdateMonoRebutal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-mono-rebutal [rebuttal-id] [desc] [evidence]",
		Short: "Update a monoRebutal",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexRebuttalId := args[0]

			// Get value arguments
			argDesc := args[1]
			argEvidence := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateMonoRebutal(
				clientCtx.GetFromAddress().String(),
				indexRebuttalId,
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

func CmdDeleteMonoRebutal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-mono-rebutal [rebuttal-id]",
		Short: "Delete a monoRebutal",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexRebuttalId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteMonoRebutal(
				clientCtx.GetFromAddress().String(),
				indexRebuttalId,
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
