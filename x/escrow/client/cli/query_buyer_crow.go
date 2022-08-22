package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdListBuyerCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-buyer-crow",
		Short: "list all buyerCrow",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllBuyerCrowRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.BuyerCrowAll(context.Background(), params)
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

func CmdShowBuyerCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-buyer-crow [crow-id] [buyer-id]",
		Short: "shows a buyerCrow",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCrowId := args[0]
			argBuyerId := args[1]

			params := &types.QueryGetBuyerCrowRequest{
				CrowId:  argCrowId,
				BuyerId: argBuyerId,
			}

			res, err := queryClient.BuyerCrow(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
