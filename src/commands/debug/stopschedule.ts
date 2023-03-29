import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { command, stopJob } from "../../utils";

const meta = new SlashCommandBuilder()
	.setName("stopschedule")
	.setDescription("Stop test schedule from node-schedule")
	.addStringOption((option) =>
		option
			.setName("jobname")
			.setDescription("stop job name")
			.setMinLength(1)
			.setMaxLength(255)
			.setRequired(true)
	);

export default command(meta, ({ interaction }) => {
	interaction.deferReply({ ephemeral: true });
	interaction.channel?.sendTyping();
	let jobname = interaction.options.getString("jobname");
	let embed = new EmbedBuilder()
		.setTitle("Stop Job")
		.setDescription("Job Test has been stoped");

	stopJob(jobname ?? "Test");

	return interaction.editReply({
		embeds: [embed],
	});
});
