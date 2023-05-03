import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { command, hasJob, stopJob } from "../../utils";

const meta = (async () => { return new SlashCommandBuilder()
	.setName("stopdaily")
	.setDescription("Stop this dailyquest schedule")
})();


export default command(meta, async ({ interaction }) => {
	await interaction.deferReply({ ephemeral: true });
	interaction.channel?.sendTyping();
	
    if(hasJob("Car") == false) {
        return interaction.editReply({
            content: "Daily Quest is not running"
        });
    }

    stopJob("Car");
    let embed = new EmbedBuilder()
        .setTitle("Stop Daily Quest")
        .setDescription("Daily Quest has been stoped");
    

	return interaction.editReply({
		embeds: [embed],
	});
});