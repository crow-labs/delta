package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/crow-labs/delta/x/whitelist/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group whitelist queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListUser())
	cmd.AddCommand(CmdShowUser())
	cmd.AddCommand(CmdListBuyer())
	cmd.AddCommand(CmdShowBuyer())
	cmd.AddCommand(CmdListProducer())
	cmd.AddCommand(CmdShowProducer())
	cmd.AddCommand(CmdListSeller())
	cmd.AddCommand(CmdShowSeller())
	cmd.AddCommand(CmdListReviewer())
	cmd.AddCommand(CmdShowReviewer())
	cmd.AddCommand(CmdListVoter())
	cmd.AddCommand(CmdShowVoter())
	cmd.AddCommand(CmdListWhitelist())
	cmd.AddCommand(CmdShowWhitelist())
	cmd.AddCommand(CmdListMonoWhitelist())
	cmd.AddCommand(CmdShowMonoWhitelist())
	// this line is used by starport scaffolding # 1

	return cmd
}
