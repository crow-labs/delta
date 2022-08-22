package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/crow-labs/delta/x/escrow/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group escrow queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListBuyerCrow())
	cmd.AddCommand(CmdShowBuyerCrow())
	cmd.AddCommand(CmdListBuyerMonoCrow())
	cmd.AddCommand(CmdShowBuyerMonoCrow())
	cmd.AddCommand(CmdListSellerCrow())
	cmd.AddCommand(CmdShowSellerCrow())
	cmd.AddCommand(CmdListSellerMonoCrow())
	cmd.AddCommand(CmdShowSellerMonoCrow())
	cmd.AddCommand(CmdListCrow())
	cmd.AddCommand(CmdShowCrow())
	cmd.AddCommand(CmdListMonoCrow())
	cmd.AddCommand(CmdShowMonoCrow())
	cmd.AddCommand(CmdListDispute())
	cmd.AddCommand(CmdShowDispute())
	cmd.AddCommand(CmdListMonoDispute())
	cmd.AddCommand(CmdShowMonoDispute())
	cmd.AddCommand(CmdListRebuttal())
	cmd.AddCommand(CmdShowRebuttal())
	cmd.AddCommand(CmdListMonoRebutal())
	cmd.AddCommand(CmdShowMonoRebutal())
	cmd.AddCommand(CmdListBallot())
	cmd.AddCommand(CmdShowBallot())
	cmd.AddCommand(CmdListVote())
	cmd.AddCommand(CmdShowVote())
	cmd.AddCommand(CmdListPoll())
	cmd.AddCommand(CmdShowPoll())
	cmd.AddCommand(CmdListVerdict())
	cmd.AddCommand(CmdShowVerdict())
	// this line is used by starport scaffolding # 1

	return cmd
}
