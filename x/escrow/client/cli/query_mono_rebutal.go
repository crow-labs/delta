package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/escrow/types"
	"github.com/spf13/cobra"
)

func CmdListMonoRebutal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-mono-rebutal",
		Short: "list all monoRebutal",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllMonoRebutalRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.MonoRebutalAll(context.Background(), params)
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

func CmdShowMonoRebutal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-mono-rebutal [rebuttal-id]",
		Short: "shows a monoRebutal",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argRebuttalId := args[0]

			params := &types.QueryGetMonoRebutalRequest{
				RebuttalId: argRebuttalId,
			}

			res, err := queryClient.MonoRebutal(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
