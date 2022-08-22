package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/whitelist/types"
	"github.com/spf13/cobra"
)

func CmdListMonoWhitelist() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-mono-whitelist",
		Short: "list all monoWhitelist",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllMonoWhitelistRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.MonoWhitelistAll(context.Background(), params)
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

func CmdShowMonoWhitelist() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-mono-whitelist [whitelist-id]",
		Short: "shows a monoWhitelist",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argWhitelistId := args[0]

			params := &types.QueryGetMonoWhitelistRequest{
				WhitelistId: argWhitelistId,
			}

			res, err := queryClient.MonoWhitelist(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
