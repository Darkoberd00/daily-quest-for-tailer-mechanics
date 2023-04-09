import { SlashCommandBuilder } from "discord.js";
import {
	command,
} from "../../utils";
import { generateEmbedRepair } from "../../embeds";

const meta = new SlashCommandBuilder()
	.setName("getquest")
	.setDescription("Get a random Quest for Tailer-Mechanics");

export default command(meta, async ({ interaction }) => {
	await interaction.deferReply({ ephemeral: false });
	return interaction.editReply({
		embeds: [
			await generateEmbedRepair(
				{ min: 4, max: 6 },
				{ min: 4, max: 6 },
				"coupes",
				"muscle",
				"offroad",
				"sports",
				"sportsclassics",
				"super",
				"suvs",
				"vans"
			),
		],
	});
});
