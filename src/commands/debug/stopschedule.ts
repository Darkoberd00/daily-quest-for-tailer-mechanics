import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { PromiseSlashCommandBuilder, command, stopJob } from "../../utils";

const meta = PromiseSlashCommandBuilder(
	"stopschedule",
	"Stop test schedule from node-schedule"
).then((builder) =>
	builder.addStringOption((option) =>
		option
			.setName("jobname")
			.setDescription("stop job name")
			.setMinLength(1)
			.setMaxLength(255)
			.setRequired(true)
	)
);

export default command(meta, async ({ interaction }) => {
	await interaction.deferReply({ ephemeral: true });
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
