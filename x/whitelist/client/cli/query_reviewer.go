package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/whitelist/types"
	"github.com/spf13/cobra"
)

func CmdListReviewer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-reviewer",
		Short: "list all reviewer",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllReviewerRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ReviewerAll(context.Background(), params)
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

func CmdShowReviewer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-reviewer [acc-addr]",
		Short: "shows a reviewer",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argAccAddr := args[0]

			params := &types.QueryGetReviewerRequest{
				AccAddr: argAccAddr,
			}

			res, err := queryClient.Reviewer(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
