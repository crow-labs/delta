package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
	"github.com/spf13/cobra"
)

func CmdCreateMonoOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-mono-order [order-id] [price] [timeout] [status]",
		Short: "Create a new monoOrder",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexOrderId := args[0]

			// Get value arguments
			argPrice, err := sdk.ParseCoinsNormalized(args[1])
			if err != nil {
				return err
			}
			argTimeout := args[2]
			argStatus := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateMonoOrder(
				clientCtx.GetFromAddress().String(),
				indexOrderId,
				argPrice,
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

func CmdUpdateMonoOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-mono-order [order-id] [price] [timeout] [status]",
		Short: "Update a monoOrder",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexOrderId := args[0]

			// Get value arguments
			argPrice, err := sdk.ParseCoinsNormalized(args[1])
			if err != nil {
				return err
			}
			argTimeout := args[2]
			argStatus := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateMonoOrder(
				clientCtx.GetFromAddress().String(),
				indexOrderId,
				argPrice,
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

func CmdDeleteMonoOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-mono-order [order-id]",
		Short: "Delete a monoOrder",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexOrderId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteMonoOrder(
				clientCtx.GetFromAddress().String(),
				indexOrderId,
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
