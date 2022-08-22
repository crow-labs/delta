package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdListBuyerMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-buyer-mono-crow",
		Short: "list all buyerMonoCrow",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllBuyerMonoCrowRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.BuyerMonoCrowAll(context.Background(), params)
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

func CmdShowBuyerMonoCrow() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-buyer-mono-crow [buyer-crow-id]",
		Short: "shows a buyerMonoCrow",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argBuyerCrowId := args[0]

			params := &types.QueryGetBuyerMonoCrowRequest{
				BuyerCrowId: argBuyerCrowId,
			}

			res, err := queryClient.BuyerMonoCrow(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
