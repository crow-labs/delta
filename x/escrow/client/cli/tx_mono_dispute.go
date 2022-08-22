package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdCreateMonoDispute() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-mono-dispute [dispute-id] [title] [desc] [evidence]",
		Short: "Create a new monoDispute",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexDisputeId := args[0]

			// Get value arguments
			argTitle := args[1]
			argDesc := args[2]
			argEvidence := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateMonoDispute(
				clientCtx.GetFromAddress().String(),
				indexDisputeId,
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

func CmdUpdateMonoDispute() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-mono-dispute [dispute-id] [title] [desc] [evidence]",
		Short: "Update a monoDispute",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexDisputeId := args[0]

			// Get value arguments
			argTitle := args[1]
			argDesc := args[2]
			argEvidence := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateMonoDispute(
				clientCtx.GetFromAddress().String(),
				indexDisputeId,
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

func CmdDeleteMonoDispute() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-mono-dispute [dispute-id]",
		Short: "Delete a monoDispute",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexDisputeId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteMonoDispute(
				clientCtx.GetFromAddress().String(),
				indexDisputeId,
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
