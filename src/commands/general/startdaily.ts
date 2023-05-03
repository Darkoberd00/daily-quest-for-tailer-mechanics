import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { scheduleJob, RecurrenceRule } from "node-schedule";
import { command, createdJob, hasJob } from "../../utils";
import { generateEmbedRepair } from "../../embeds";

const meta = (async () => { return new SlashCommandBuilder()
	.setName("startdaily")
	.setDescription("start dailyquest at a specific time")
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
			.setDescription("Choose a time for this dailyquest")
			.setRequired(true)
	)
	.addIntegerOption((option) =>
		option
			.setName("timevalue")
			.setDescription("Set a value for the time")
			.setMinValue(0)
			.setMaxValue(59)
			.setRequired(true)
	)
})();

export default command(meta, async ({ interaction }) => {
	await interaction.deferReply({ ephemeral: true });
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
				rule.hour = timevalue??0;
				break;
			case "exectlyday":
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

    if (hasJob("Car")) {
        return interaction.editReply({
            content: "dailyquest is already started!",
        });
    }

	createdJob(
		"Car",
		scheduleJob(rule, async (job) => {
			let message = await generateEmbedRepair(
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
			interaction.channel?.send({
				embeds: [message],
			});
		})
	);

	return interaction.editReply({
		content: "Dayly Quest started!",
	});
});