package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/crow-labs/delta/x/escrow/types"
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

	cmd.AddCommand(CmdCreateBuyerMonoCrow())
	cmd.AddCommand(CmdUpdateBuyerMonoCrow())
	cmd.AddCommand(CmdDeleteBuyerMonoCrow())
	cmd.AddCommand(CmdCreateSellerMonoCrow())
	cmd.AddCommand(CmdUpdateSellerMonoCrow())
	cmd.AddCommand(CmdDeleteSellerMonoCrow())
	cmd.AddCommand(CmdCreateMonoCrow())
	cmd.AddCommand(CmdUpdateMonoCrow())
	cmd.AddCommand(CmdDeleteMonoCrow())
	cmd.AddCommand(CmdCreateMonoDispute())
	cmd.AddCommand(CmdUpdateMonoDispute())
	cmd.AddCommand(CmdDeleteMonoDispute())
	cmd.AddCommand(CmdCreateMonoRebutal())
	cmd.AddCommand(CmdUpdateMonoRebutal())
	cmd.AddCommand(CmdDeleteMonoRebutal())
	cmd.AddCommand(CmdCreateVote())
	cmd.AddCommand(CmdUpdateVote())
	cmd.AddCommand(CmdDeleteVote())
	cmd.AddCommand(CmdCreateVerdict())
	cmd.AddCommand(CmdUpdateVerdict())
	cmd.AddCommand(CmdDeleteVerdict())
	cmd.AddCommand(CmdBeginCrow())
	cmd.AddCommand(CmdJoinCrow())
	cmd.AddCommand(CmdSellerRaiseDispute())
	cmd.AddCommand(CmdBuyerRaiseDispute())
	cmd.AddCommand(CmdSellerDisputeRebuttal())
	cmd.AddCommand(CmdBuyerDisputeRebuttal())
	cmd.AddCommand(CmdVoteOnDispute())
	cmd.AddCommand(CmdReleaseCrow())
	// this line is used by starport scaffolding # 1

	return cmd
}
