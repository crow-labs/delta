package cli

import (
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/delta/x/whitelist/types"
	"github.com/spf13/cobra"
)

func CmdCreateMonoWhitelist() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-mono-whitelist [whitelist-id] [buyer] [seller] [voter]",
		Short: "Create a new monoWhitelist",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexWhitelistId := args[0]

			// Get value arguments
			argBuyer := new(types.Buyer)
			err = json.Unmarshal([]byte(args[1]), argBuyer)
			if err != nil {
				return err
			}
			argSeller := new(types.Seller)
			err = json.Unmarshal([]byte(args[2]), argSeller)
			if err != nil {
				return err
			}
			argVoter := new(types.Voter)
			err = json.Unmarshal([]byte(args[3]), argVoter)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateMonoWhitelist(
				clientCtx.GetFromAddress().String(),
				indexWhitelistId,
				argBuyer,
				argSeller,
				argVoter,
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

func CmdUpdateMonoWhitelist() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-mono-whitelist [whitelist-id] [buyer] [seller] [voter]",
		Short: "Update a monoWhitelist",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexWhitelistId := args[0]

			// Get value arguments
			argBuyer := new(types.Buyer)
			err = json.Unmarshal([]byte(args[1]), argBuyer)
			if err != nil {
				return err
			}
			argSeller := new(types.Seller)
			err = json.Unmarshal([]byte(args[2]), argSeller)
			if err != nil {
				return err
			}
			argVoter := new(types.Voter)
			err = json.Unmarshal([]byte(args[3]), argVoter)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateMonoWhitelist(
				clientCtx.GetFromAddress().String(),
				indexWhitelistId,
				argBuyer,
				argSeller,
				argVoter,
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

func CmdDeleteMonoWhitelist() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-mono-whitelist [whitelist-id]",
		Short: "Delete a monoWhitelist",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexWhitelistId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteMonoWhitelist(
				clientCtx.GetFromAddress().String(),
				indexWhitelistId,
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
