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

func CmdCreateVoter() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-voter [voter-id] [name] [voting-power] [num-votes] [vote-id] [status]",
		Short: "Create a new voter",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexVoterId := args[0]

			// Get value arguments
			argName := args[1]
			argVotingPower, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argNumVotes, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argVoteId := strings.Split(args[4], listSeparator)
			argStatus := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateVoter(
				clientCtx.GetFromAddress().String(),
				indexVoterId,
				argName,
				argVotingPower,
				argNumVotes,
				argVoteId,
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

func CmdUpdateVoter() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-voter [voter-id] [name] [voting-power] [num-votes] [vote-id] [status]",
		Short: "Update a voter",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexVoterId := args[0]

			// Get value arguments
			argName := args[1]
			argVotingPower, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argNumVotes, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argVoteId := strings.Split(args[4], listSeparator)
			argStatus := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateVoter(
				clientCtx.GetFromAddress().String(),
				indexVoterId,
				argName,
				argVotingPower,
				argNumVotes,
				argVoteId,
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

func CmdDeleteVoter() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-voter [voter-id]",
		Short: "Delete a voter",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexVoterId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteVoter(
				clientCtx.GetFromAddress().String(),
				indexVoterId,
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
