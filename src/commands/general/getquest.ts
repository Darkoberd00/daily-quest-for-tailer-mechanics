import { SlashCommandBuilder } from "discord.js";
import {
	command,
	getFakePerson,
	getRandomVehicleFromCategorys,
	generateRepairList,
	generateInspectionList,
	generateTuningList,
} from "../../utils";
import { generateEmbedRepair } from "../../embeds";

const meta = new SlashCommandBuilder()
	.setName("getquest")
	.setDescription("Get a random Quest for Tailer-Mechanics");

export default command(meta, async ({ interaction }) => {
	interaction.channel?.sendTyping();
	return interaction.reply({
		ephemeral: false,
		embeds: [
			await generateEmbedRepair(
				{min: 4, max:6}, 
				{min: 4, max: 6}, 
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
