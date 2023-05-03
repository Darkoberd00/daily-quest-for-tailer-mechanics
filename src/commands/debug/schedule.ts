import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { scheduleJob, RecurrenceRule } from "node-schedule";
import { command, createdJob } from "../../utils";
import { generateEmbedRepair } from "../../embeds";

const meta = (async () => { return new SlashCommandBuilder()
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
	.addStringOption((option) =>
		option
			.setName("time")
			.addChoices({
				name: "Every Minute",
				value: "minute",
			},{
				name: "Every Hour",
				value: "hour",
			},{
				name: "Every Day",
				value: "day",
			},{
				name: "Exectly Every Minute",
				value: "exectlyminute",
			},{
				name: "Exectly Every Hour",
				value: "exectlyhour",
			},{
				name: "Exectly Every Day",
				value: "exectlyday",
			})
			.setDescription("Choose a time for this job")
			.setRequired(true)
	)
	.addIntegerOption((option) =>
		option
			.setName("timevalue")
			.setDescription("Set a value for the time")
			.setMinValue(0)
			.setMaxValue(59)
			.setRequired(true)
	) })();	

export default command(meta, async ({ interaction }) => {
	await interaction.deferReply({ ephemeral: true });
	let jobname = interaction.options.getString("jobname");
	let time = interaction.options.getString("time");
	let timevalue = interaction.options.getInteger("timevalue");

	let rule: RecurrenceRule|string = "1 * * * *";

	if(time?.startsWith("exectly")){
		rule = new RecurrenceRule();
		switch(time){
			case "exectlyminute":
				rule.minute = timevalue??0;
				break;
			case "exectlyhour":
				rule.minute = 0;
				rule.hour = timevalue??0;
				break;
			case "exectlyday":
				rule.minute = 0;
				rule.hour = 0;
				rule.dayOfWeek = timevalue??0;
				break;
		}
	}else{
		switch(time){
			case "minute":
				rule = "*/"+timevalue+" * * * *";
				break;
			case "hour":
				rule = "0 */"+timevalue+" * * *";
				break;
			case "day":
				rule = "0 0 */"+timevalue+" * *";
				break;
		}
	}

	createdJob(
		jobname ?? "Test",
		scheduleJob(rule, async (job) => {
			let message = new EmbedBuilder();
			message.setTitle("schedule job");
			message.setDescription("This is a test Message");
			message.setTimestamp(job);
			interaction.channel?.sendTyping();
			if (jobname == "Car") {
				message = await generateEmbedRepair(
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
				);
			}
			message.setFooter({
				text: "[JobName: " + jobname + "]",
			});
			interaction.channel?.send({
				embeds: [message],
			});
		})
	);

	return interaction.editReply({
		content: "schedule is started",
	});
});
