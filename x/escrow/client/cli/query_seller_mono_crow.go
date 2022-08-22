package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdListSellerMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-seller-mono-crow",
		Short: "list all sellerMonoCrow",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSellerMonoCrowRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SellerMonoCrowAll(context.Background(), params)
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

func CmdShowSellerMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-seller-mono-crow [seller-crow-id]",
		Short: "shows a sellerMonoCrow",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argSellerCrowId := args[0]

			params := &types.QueryGetSellerMonoCrowRequest{
				SellerCrowId: argSellerCrowId,
			}

			res, err := queryClient.SellerMonoCrow(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
