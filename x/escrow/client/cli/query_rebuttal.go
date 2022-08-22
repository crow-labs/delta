package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdListRebuttal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-rebuttal",
		Short: "list all rebuttal",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllRebuttalRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.RebuttalAll(context.Background(), params)
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

func CmdShowRebuttal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-rebuttal [dispute-id] [defendant-id]",
		Short: "shows a rebuttal",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argDisputeId := args[0]
			argDefendantId := args[1]

			params := &types.QueryGetRebuttalRequest{
				DisputeId:   argDisputeId,
				DefendantId: argDefendantId,
			}

			res, err := queryClient.Rebuttal(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
