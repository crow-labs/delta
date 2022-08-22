package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdListBallot() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-ballot",
		Short: "list all ballot",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllBallotRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.BallotAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowBallot() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-ballot [dispute-id] [voter-id]",
		Short: "shows a ballot",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argDisputeId := args[0]
			argVoterId := args[1]

			params := &types.QueryGetBallotRequest{
				DisputeId: argDisputeId,
				VoterId:   argVoterId,
			}

			res, err := queryClient.Ballot(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
