import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Jobs, PromiseSlashCommandBuilder, command } from "../../utils";

const meta = PromiseSlashCommandBuilder("listjobs", "List all jobs");

export default command(meta, async ({ interaction }) => {
	await interaction.deferReply({ ephemeral: true });

	const embed = new EmbedBuilder()
		.setTitle("List of all jobs")
		.setDescription("Here is a list of all jobs which are currently running.");

	Jobs.forEach((value, key) => {
		embed.addFields({
			name: key.toString(),
			value:
				"Started Job:" +
				value.pendingInvocations().toString() +
				"\n" +
				"Next Update: " +
				value.nextInvocation().toString(),
		});
	});

	return interaction.editReply({
		embeds: [embed],
	});
});
