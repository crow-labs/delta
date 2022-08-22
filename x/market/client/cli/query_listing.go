package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/market/types"
	"github.com/spf13/cobra"
)

func CmdListListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-listing",
		Short: "list all listing",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllListingRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ListingAll(context.Background(), params)
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

func CmdShowListing() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-listing [whitelist-id] [seller-id]",
		Short: "shows a listing",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argWhitelistId := args[0]
			argSellerId := args[1]

			params := &types.QueryGetListingRequest{
				WhitelistId: argWhitelistId,
				SellerId:    argSellerId,
			}

			res, err := queryClient.Listing(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
