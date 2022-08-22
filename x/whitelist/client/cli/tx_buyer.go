package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/delta/x/whitelist/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateBuyer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-buyer [buyer-id] [name] [num-order] [order-id] [status]",
		Short: "Create a new buyer",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexBuyerId := args[0]

			// Get value arguments
			argName := args[1]
			argNumOrder, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argOrderId := strings.Split(args[3], listSeparator)
			argStatus := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBuyer(
				clientCtx.GetFromAddress().String(),
				indexBuyerId,
				argName,
				argNumOrder,
				argOrderId,
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

func CmdUpdateBuyer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-buyer [buyer-id] [name] [num-order] [order-id] [status]",
		Short: "Update a buyer",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexBuyerId := args[0]

			// Get value arguments
			argName := args[1]
			argNumOrder, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argOrderId := strings.Split(args[3], listSeparator)
			argStatus := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateBuyer(
				clientCtx.GetFromAddress().String(),
				indexBuyerId,
				argName,
				argNumOrder,
				argOrderId,
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

func CmdDeleteBuyer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-buyer [buyer-id]",
		Short: "Delete a buyer",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexBuyerId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteBuyer(
				clientCtx.GetFromAddress().String(),
				indexBuyerId,
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
