package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdListDispute() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-dispute",
		Short: "list all dispute",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllDisputeRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.DisputeAll(context.Background(), params)
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

func CmdShowDispute() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-dispute [crow-id] [plaintiff-id]",
		Short: "shows a dispute",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCrowId := args[0]
			argPlaintiffId := args[1]

			params := &types.QueryGetDisputeRequest{
				CrowId:      argCrowId,
				PlaintiffId: argPlaintiffId,
			}

			res, err := queryClient.Dispute(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
