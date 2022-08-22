package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/market/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreateMonoListing())
	cmd.AddCommand(CmdUpdateMonoListing())
	cmd.AddCommand(CmdDeleteMonoListing())
	cmd.AddCommand(CmdCreateMonoOrder())
	cmd.AddCommand(CmdUpdateMonoOrder())
	cmd.AddCommand(CmdDeleteMonoOrder())
	cmd.AddCommand(CmdOpenMonoListing())
	cmd.AddCommand(CmdCloseListing())
	cmd.AddCommand(CmdOpenMonoOrder())
	cmd.AddCommand(CmdCancelPendingMonoOrder())
	cmd.AddCommand(CmdUpdatePendingMonoOrder())
	cmd.AddCommand(CmdAcceptMonoOrder())
	// this line is used by starport scaffolding # 1

	return cmd
}
