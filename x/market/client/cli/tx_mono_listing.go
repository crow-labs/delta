package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateMonoListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-mono-listing [listing-id] [title] [desc] [price] [order-id] [accepted-order-id] [status]",
		Short: "Create a new monoListing",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexListingId := args[0]

			// Get value arguments
			argTitle := args[1]
			argDesc := args[2]
			argPrice, err := sdk.ParseCoinsNormalized(args[3])
			if err != nil {
				return err
			}
			argOrderId := strings.Split(args[4], listSeparator)
			argAcceptedOrderId := args[5]
			argStatus := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateMonoListing(
				clientCtx.GetFromAddress().String(),
				indexListingId,
				argTitle,
				argDesc,
				argPrice,
				argOrderId,
				argAcceptedOrderId,
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

func CmdUpdateMonoListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-mono-listing [listing-id] [title] [desc] [price] [order-id] [accepted-order-id] [status]",
		Short: "Update a monoListing",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexListingId := args[0]

			// Get value arguments
			argTitle := args[1]
			argDesc := args[2]
			argPrice, err := sdk.ParseCoinsNormalized(args[3])
			if err != nil {
				return err
			}
			argOrderId := strings.Split(args[4], listSeparator)
			argAcceptedOrderId := args[5]
			argStatus := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateMonoListing(
				clientCtx.GetFromAddress().String(),
				indexListingId,
				argTitle,
				argDesc,
				argPrice,
				argOrderId,
				argAcceptedOrderId,
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

func CmdDeleteMonoListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-mono-listing [listing-id]",
		Short: "Delete a monoListing",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexListingId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteMonoListing(
				clientCtx.GetFromAddress().String(),
				indexListingId,
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
