package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-mono-crow [crow-id] [whitelist-id] [seller-crow-id] [buyer-crow-id] [dispute-id] [timeout] [status]",
		Short: "Create a new monoCrow",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCrowId := args[0]

			// Get value arguments
			argWhitelistId := args[1]
			argSellerCrowId := args[2]
			argBuyerCrowId := args[3]
			argDisputeId := strings.Split(args[4], listSeparator)
			argTimeout := strings.Split(args[5], listSeparator)
			argStatus := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateMonoCrow(
				clientCtx.GetFromAddress().String(),
				indexCrowId,
				argWhitelistId,
				argSellerCrowId,
				argBuyerCrowId,
				argDisputeId,
				argTimeout,
				argStatus,
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

func CmdUpdateMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-mono-crow [crow-id] [whitelist-id] [seller-crow-id] [buyer-crow-id] [dispute-id] [timeout] [status]",
		Short: "Update a monoCrow",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexCrowId := args[0]

			// Get value arguments
			argWhitelistId := args[1]
			argSellerCrowId := args[2]
			argBuyerCrowId := args[3]
			argDisputeId := strings.Split(args[4], listSeparator)
			argTimeout := strings.Split(args[5], listSeparator)
			argStatus := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateMonoCrow(
				clientCtx.GetFromAddress().String(),
				indexCrowId,
				argWhitelistId,
				argSellerCrowId,
				argBuyerCrowId,
				argDisputeId,
				argTimeout,
				argStatus,
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

func CmdDeleteMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-mono-crow [crow-id]",
		Short: "Delete a monoCrow",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexCrowId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteMonoCrow(
				clientCtx.GetFromAddress().String(),
				indexCrowId,
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
