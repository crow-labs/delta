package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdVoteOnDispute() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "vote-on-dispute [dispute-id] [buyer-guilty] [seller-guilty] [refund-to-buyer] [send-to-seller] [buyer-punishment] [seller-punishment]",
		Short: "Broadcast message voteOnDispute",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDisputeId := args[0]
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

			msg := types.NewMsgVoteOnDispute(
				clientCtx.GetFromAddress().String(),
				argDisputeId,
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
