package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdListSellerCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-seller-crow",
		Short: "list all sellerCrow",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSellerCrowRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SellerCrowAll(context.Background(), params)
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

func CmdShowSellerCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-seller-crow [crow-id] [seller-id]",
		Short: "shows a sellerCrow",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCrowId := args[0]
			argSellerId := args[1]

			params := &types.QueryGetSellerCrowRequest{
				CrowId:   argCrowId,
				SellerId: argSellerId,
			}

			res, err := queryClient.SellerCrow(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
