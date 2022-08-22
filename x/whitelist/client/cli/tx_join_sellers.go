package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/delta/x/whitelist/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdJoinSellers() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "join-sellers [whitelist-id] [name] [desc] [contact-info]",
		Short: "Broadcast message joinSellers",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argWhitelistId := args[0]
			argName := args[1]
			argDesc := args[2]
			argContactInfo := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgJoinSellers(
				clientCtx.GetFromAddress().String(),
				argWhitelistId,
				argName,
				argDesc,
				argContactInfo,
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
