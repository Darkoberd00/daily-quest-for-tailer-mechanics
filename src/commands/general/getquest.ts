import { SlashCommandBuilder } from "discord.js";
import {
	command,
} from "../../utils";
import { generateEmbedRepair } from "../../embeds";

const list = [
	{
		name: "type",
		value: "Type of Quest",
	},
	{
		name: "coupes",
		value: "Coupes",
	},
	{
		name: "muscle",
		value: "Muscle",
	},
	{
		name: "offroad",
		value: "Offroad",
	},
	{
		name: "sports",
		value: "Sports",
	},
	{
		name: "sportsclassics",
		value: "Sports Classics",
	},
	{
		name: "super",
		value: "Super",
	},
	{
		name: "suvs",
		value: "SUVs",
	},
	{
		name: "vans",
		value: "Vans",
	},{
		name: "hunt",
		value: "Hunt",
	},{
		name: "2hunt",
		value: "2Hunt",
	},{
		name: "3hunt",
		value: "3Hunt",
	},{	
		name: "4hunt",
		value: "4Hunt",
	},{
		name: "5hunt",
		value: "5Hunt",
	},{	
		name: "6hunt",
		value: "6Hunt",
	},{
		name: "7hunt",
		value: "7Hunt",
	}
]

const meta = (async () => { return new SlashCommandBuilder()
	.setName("getquest")
	.addStringOption((option) =>
		option
			.setName("type")
			.setDescription("Type of Quest")
			.setRequired(true)
			.setAutocomplete(true)
	)
	.setDescription("Get a random Quest for Tailer-Mechanics") })();

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
}, async ({ interaction }) => {
	const focsued = interaction.options.getFocused();
	const filtered = list.filter(choice => choice.name.startsWith(focsued));
	interaction.respond(filtered);
});


