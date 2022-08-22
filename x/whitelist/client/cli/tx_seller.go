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

func CmdCreateSeller() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-seller [seller-id] [name] [desc] [contact-info] [num-listing] [listing-id] [status]",
		Short: "Create a new seller",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexSellerId := args[0]

			// Get value arguments
			argName := args[1]
			argDesc := args[2]
			argContactInfo := args[3]
			argNumListing, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argListingId := strings.Split(args[5], listSeparator)
			argStatus := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSeller(
				clientCtx.GetFromAddress().String(),
				indexSellerId,
				argName,
				argDesc,
				argContactInfo,
				argNumListing,
				argListingId,
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

func CmdUpdateSeller() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-seller [seller-id] [name] [desc] [contact-info] [num-listing] [listing-id] [status]",
		Short: "Update a seller",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexSellerId := args[0]

			// Get value arguments
			argName := args[1]
			argDesc := args[2]
			argContactInfo := args[3]
			argNumListing, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argListingId := strings.Split(args[5], listSeparator)
			argStatus := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSeller(
				clientCtx.GetFromAddress().String(),
				indexSellerId,
				argName,
				argDesc,
				argContactInfo,
				argNumListing,
				argListingId,
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

func CmdDeleteSeller() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-seller [seller-id]",
		Short: "Delete a seller",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexSellerId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSeller(
				clientCtx.GetFromAddress().String(),
				indexSellerId,
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
