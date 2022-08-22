package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/market/types"
	"github.com/spf13/cobra"
)

func CmdListMonoListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-mono-listing",
		Short: "list all monoListing",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllMonoListingRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.MonoListingAll(context.Background(), params)
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

func CmdShowMonoListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-mono-listing [listing-id]",
		Short: "shows a monoListing",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argListingId := args[0]

			params := &types.QueryGetMonoListingRequest{
				ListingId: argListingId,
			}

			res, err := queryClient.MonoListing(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
