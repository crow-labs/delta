package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdCreateBuyerMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-buyer-mono-crow [buyer-crow-id] [deposit] [collateral] [status]",
		Short: "Create a new buyerMonoCrow",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexBuyerCrowId := args[0]

			// Get value arguments
			argDeposit, err := sdk.ParseCoinsNormalized(args[1])
			if err != nil {
				return err
			}
			argCollateral, err := sdk.ParseCoinsNormalized(args[2])
			if err != nil {
				return err
			}
			argStatus := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBuyerMonoCrow(
				clientCtx.GetFromAddress().String(),
				indexBuyerCrowId,
				argDeposit,
				argCollateral,
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

func CmdUpdateBuyerMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-buyer-mono-crow [buyer-crow-id] [deposit] [collateral] [status]",
		Short: "Update a buyerMonoCrow",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexBuyerCrowId := args[0]

			// Get value arguments
			argDeposit, err := sdk.ParseCoinsNormalized(args[1])
			if err != nil {
				return err
			}
			argCollateral, err := sdk.ParseCoinsNormalized(args[2])
			if err != nil {
				return err
			}
			argStatus := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateBuyerMonoCrow(
				clientCtx.GetFromAddress().String(),
				indexBuyerCrowId,
				argDeposit,
				argCollateral,
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

func CmdDeleteBuyerMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-buyer-mono-crow [buyer-crow-id]",
		Short: "Delete a buyerMonoCrow",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexBuyerCrowId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteBuyerMonoCrow(
				clientCtx.GetFromAddress().String(),
				indexBuyerCrowId,
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
