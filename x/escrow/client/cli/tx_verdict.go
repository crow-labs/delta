package cli

import (
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateVerdict() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-verdict [verdict-id] [vote-ids] [resulting-vote]",
		Short: "Create a new verdict",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexVerdictId := args[0]

			// Get value arguments
			argVoteIds := strings.Split(args[1], listSeparator)
			argResultingVote := new(types.Vote)
			err = json.Unmarshal([]byte(args[2]), argResultingVote)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateVerdict(
				clientCtx.GetFromAddress().String(),
				indexVerdictId,
				argVoteIds,
				argResultingVote,
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

func CmdUpdateVerdict() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-verdict [verdict-id] [vote-ids] [resulting-vote]",
		Short: "Update a verdict",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexVerdictId := args[0]

			// Get value arguments
			argVoteIds := strings.Split(args[1], listSeparator)
			argResultingVote := new(types.Vote)
			err = json.Unmarshal([]byte(args[2]), argResultingVote)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateVerdict(
				clientCtx.GetFromAddress().String(),
				indexVerdictId,
				argVoteIds,
				argResultingVote,
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

func CmdDeleteVerdict() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-verdict [verdict-id]",
		Short: "Delete a verdict",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexVerdictId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteVerdict(
				clientCtx.GetFromAddress().String(),
				indexVerdictId,
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
