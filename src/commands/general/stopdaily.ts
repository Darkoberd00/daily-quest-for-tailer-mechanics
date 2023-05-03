import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import {
	PromiseSlashCommandBuilder,
	command,
	hasJob,
	stopJob,
} from "../../utils";

const meta = PromiseSlashCommandBuilder(
	"stopdaily",
	"Stop this dailyquest schedule"
);

export default command(meta, async ({ interaction }) => {
	await interaction.deferReply({ ephemeral: true });
	interaction.channel?.sendTyping();

	if (hasJob("Car") == false) {
		return interaction.editReply({
			content: "Daily Quest is not running",
		});
	}

	stopJob("Car");
	let embed = new EmbedBuilder()
		.setTitle("Stop Daily Quest")
		.setDescription("Daily Quest has been stoped");

	return interaction.editReply({
		embeds: [embed],
	});
});
