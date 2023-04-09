import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Jobs, command } from "../../utils";

const meta = new SlashCommandBuilder()
	.setName("listjobs")
	.setDescription("Get a list of all jobs which are currently running.");

export default command(meta, async ({ interaction }) => {
	await interaction.deferReply({ ephemeral: true });

    const embed = new EmbedBuilder()
        .setTitle("List of all jobs")
        .setDescription("Here is a list of all jobs which are currently running.");
    
        Jobs.forEach((value, key) => {
            embed.addFields({
				name: key.toString(),
				value: "Started Job:" + value.pendingInvocations().toString() + "\n"+"Next Update: " + value.nextInvocation().toString(),
			});
        });


	return interaction.editReply({
        embeds: [
            embed
        ]       
    });
});