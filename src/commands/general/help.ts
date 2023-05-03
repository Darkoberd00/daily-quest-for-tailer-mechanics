import { SlashCommandBuilder } from "discord.js";
import { PromiseSlashCommandBuilder, command } from "../../utils";
import { getCategoryRoot } from "../../pages/help";

const meta = PromiseSlashCommandBuilder(
	"help",
	"Get a list of all commands for the bot."
);

export default command(meta, async ({ interaction }) => {
	await interaction.deferReply({ ephemeral: true });
	return interaction.editReply(getCategoryRoot());
});
