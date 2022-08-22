package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/whitelist/types"
	"github.com/spf13/cobra"
)

func CmdListSeller() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-seller",
		Short: "list all seller",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSellerRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SellerAll(context.Background(), params)
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

func CmdShowSeller() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-seller [seller-id]",
		Short: "shows a seller",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argSellerId := args[0]

			params := &types.QueryGetSellerRequest{
				SellerId: argSellerId,
			}

			res, err := queryClient.Seller(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
