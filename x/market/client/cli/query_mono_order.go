package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/market/types"
	"github.com/spf13/cobra"
)

func CmdListMonoOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-mono-order",
		Short: "list all monoOrder",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllMonoOrderRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.MonoOrderAll(context.Background(), params)
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

func CmdShowMonoOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-mono-order [order-id]",
		Short: "shows a monoOrder",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argOrderId := args[0]

			params := &types.QueryGetMonoOrderRequest{
				OrderId: argOrderId,
			}

			res, err := queryClient.MonoOrder(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
