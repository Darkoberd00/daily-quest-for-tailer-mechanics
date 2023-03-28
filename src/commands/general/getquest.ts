import { SlashCommandBuilder } from "discord.js";
import {
	command,
	getFakePerson,
	getRandomVehicleFromCategorys,
	generateRepareList,
	generateInspectionList,
	generateTuningList,
} from "../../utils";
import { generateEmbedRepair } from "../../embeds";

const meta = new SlashCommandBuilder()
	.setName("getquest")
	.setDescription("Get a random Quest for Tailer-Mechanics");

export default command(meta, async ({ interaction }) => {
	let person = await getFakePerson();
	let vehicle = await getRandomVehicleFromCategorys(
		"coupes",
		"muscle",
		"offroad",
		"sports",
		"sportsclassics",
		"super",
		"suvs",
		"vans"
	);

	let tuningList = generateTuningList(4, 6);
	let repairList = generateRepareList(4, 6, vehicle);
	let inspectionList = null;

	if (Math.random() < 0.2) {
		inspectionList = generateInspectionList();
	}

	return interaction.reply({
		ephemeral: false,
		embeds: [
			generateEmbedRepair(
				vehicle,
				person,
				repairList,
				tuningList,
				inspectionList
			),
		],
	});
});
