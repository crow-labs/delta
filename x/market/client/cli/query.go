package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/crow-labs/delta/x/market/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group market queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListListing())
	cmd.AddCommand(CmdShowListing())
	cmd.AddCommand(CmdListMonoListing())
	cmd.AddCommand(CmdShowMonoListing())
	cmd.AddCommand(CmdListOrder())
	cmd.AddCommand(CmdShowOrder())
	cmd.AddCommand(CmdListMonoOrder())
	cmd.AddCommand(CmdShowMonoOrder())
	// this line is used by starport scaffolding # 1

	return cmd
}
