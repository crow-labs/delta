package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/delta/x/market/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdOpenMonoListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "open-mono-listing [whitelist-id] [title] [desc] [price]",
		Short: "Broadcast message openMonoListing",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argWhitelistId := args[0]
			argTitle := args[1]
			argDesc := args[2]
			argPrice, err := sdk.ParseCoinsNormalized(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgOpenMonoListing(
				clientCtx.GetFromAddress().String(),
				argWhitelistId,
				argTitle,
				argDesc,
				argPrice,
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
