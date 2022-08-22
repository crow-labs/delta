package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-vote [vote-id] [buyer-guilty] [seller-guilty] [refund-to-buyer] [send-to-seller] [buyer-punishment] [seller-punishment]",
		Short: "Create a new vote",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexVoteId := args[0]

			// Get value arguments
			argBuyerGuilty, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}
			argSellerGuilty, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}
			argRefundToBuyer, err := sdk.ParseCoinsNormalized(args[3])
			if err != nil {
				return err
			}
			argSendToSeller, err := sdk.ParseCoinsNormalized(args[4])
			if err != nil {
				return err
			}
			argBuyerPunishment := args[5]
			argSellerPunishment := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateVote(
				clientCtx.GetFromAddress().String(),
				indexVoteId,
				argBuyerGuilty,
				argSellerGuilty,
				argRefundToBuyer,
				argSendToSeller,
				argBuyerPunishment,
				argSellerPunishment,
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

func CmdUpdateVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-vote [vote-id] [buyer-guilty] [seller-guilty] [refund-to-buyer] [send-to-seller] [buyer-punishment] [seller-punishment]",
		Short: "Update a vote",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexVoteId := args[0]

			// Get value arguments
			argBuyerGuilty, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}
			argSellerGuilty, err := cast.ToBoolE(args[2])
			if err != nil {
				return err
			}
			argRefundToBuyer, err := sdk.ParseCoinsNormalized(args[3])
			if err != nil {
				return err
			}
			argSendToSeller, err := sdk.ParseCoinsNormalized(args[4])
			if err != nil {
				return err
			}
			argBuyerPunishment := args[5]
			argSellerPunishment := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateVote(
				clientCtx.GetFromAddress().String(),
				indexVoteId,
				argBuyerGuilty,
				argSellerGuilty,
				argRefundToBuyer,
				argSendToSeller,
				argBuyerPunishment,
				argSellerPunishment,
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

func CmdDeleteVote() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-vote [vote-id]",
		Short: "Delete a vote",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexVoteId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteVote(
				clientCtx.GetFromAddress().String(),
				indexVoteId,
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
