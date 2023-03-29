import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { scheduleJob, RecurrenceRule, RecurrenceSegment } from "node-schedule";
import { command, createdJob } from "../../utils";
import { generateEmbedRepair } from "../../embeds";

const meta = new SlashCommandBuilder()
	.setName("schedule")
	.setDescription("a intern test for node-schedule")
	.addStringOption((option) =>
		option
			.setName("jobname")
			.setDescription("Set a name for this Job")
			.setMinLength(1)
			.setMaxLength(255)
			.setRequired(true)
	)
	.addIntegerOption((option) =>
		option
			.setName("seconds")
			.setDescription("Set this job every x Minute of a Seconds")
			.setMinValue(0)
			.setMaxValue(59)
			.setRequired(false)
	)
	.addIntegerOption((option) =>
		option
			.setName("minute")
			.setDescription("Set this job every x Minute of a hour")
			.setMinValue(0)
			.setMaxValue(59)
			.setRequired(false)
	)
	.addIntegerOption((option) =>
		option
			.setName("hour")
			.setDescription("Set this job every x Minute of a day")
			.setMinValue(0)
			.setMaxValue(23)
			.setRequired(false)
	);

export default command(meta, ({ interaction }) => {
	let sec = interaction.options.getInteger("seconds");
	let min = interaction.options.getInteger("minute");
	let hour = interaction.options.getInteger("hour");
	let jobname = interaction.options.getString("jobname");

	let rules = new RecurrenceRule();
	rules.second = sec ?? 20;

	if (min != null) {
		rules.minute = min;
	}
	if (hour != null) {
		rules.hour;
	}

	createdJob(
		jobname ?? "Test",
		scheduleJob(rules, async (job) => {
			let message = new EmbedBuilder();
			message.setTitle("schedule job");
			message.setDescription("This is a test Message")
			message.setTimestamp(job)
			interaction.channel?.sendTyping();
			if(jobname == "Car"){
				message = await generateEmbedRepair(
					{min: 4, max:6}, 
					{min: 4, max: 6}, 
					"coupes", 
					"muscle", 
					"offroad",
					"sports",
					"sportsclassics",
					"super",
					"suvs",
					"vans");
			}
			message.setFooter({
				text: "[JobName: "+(jobname)+"]"
			});
			interaction.channel?.send({
				embeds: [message],
			});
		})
	);

	return interaction.reply({
		ephemeral: true,
		content: "schedule is started",
	});
});
