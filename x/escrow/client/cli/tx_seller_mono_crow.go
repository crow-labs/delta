package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdCreateSellerMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-seller-mono-crow [seller-crow-id] [collateral] [status]",
		Short: "Create a new sellerMonoCrow",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexSellerCrowId := args[0]

			// Get value arguments
			argCollateral, err := sdk.ParseCoinsNormalized(args[1])
			if err != nil {
				return err
			}
			argStatus := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSellerMonoCrow(
				clientCtx.GetFromAddress().String(),
				indexSellerCrowId,
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

func CmdUpdateSellerMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-seller-mono-crow [seller-crow-id] [collateral] [status]",
		Short: "Update a sellerMonoCrow",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexSellerCrowId := args[0]

			// Get value arguments
			argCollateral, err := sdk.ParseCoinsNormalized(args[1])
			if err != nil {
				return err
			}
			argStatus := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSellerMonoCrow(
				clientCtx.GetFromAddress().String(),
				indexSellerCrowId,
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

func CmdDeleteSellerMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-seller-mono-crow [seller-crow-id]",
		Short: "Delete a sellerMonoCrow",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexSellerCrowId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSellerMonoCrow(
				clientCtx.GetFromAddress().String(),
				indexSellerCrowId,
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
