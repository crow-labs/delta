package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/whitelist/types"
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

	cmd.AddCommand(CmdCreateBuyer())
	cmd.AddCommand(CmdUpdateBuyer())
	cmd.AddCommand(CmdDeleteBuyer())
	cmd.AddCommand(CmdCreateSeller())
	cmd.AddCommand(CmdUpdateSeller())
	cmd.AddCommand(CmdDeleteSeller())
	cmd.AddCommand(CmdCreateVoter())
	cmd.AddCommand(CmdUpdateVoter())
	cmd.AddCommand(CmdDeleteVoter())
	cmd.AddCommand(CmdCreateWhitelist())
	cmd.AddCommand(CmdUpdateWhitelist())
	cmd.AddCommand(CmdDeleteWhitelist())
	cmd.AddCommand(CmdCreateMonoWhitelist())
	cmd.AddCommand(CmdUpdateMonoWhitelist())
	cmd.AddCommand(CmdDeleteMonoWhitelist())
	cmd.AddCommand(CmdJoinBuyers())
	cmd.AddCommand(CmdJoinSellers())
	cmd.AddCommand(CmdJoinVoters())
	cmd.AddCommand(CmdCreateNewWhitelist())
	// this line is used by starport scaffolding # 1

	return cmd
}
