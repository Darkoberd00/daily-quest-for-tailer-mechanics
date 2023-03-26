import { EmbedBuilder, SlashCommandBuilder } from 'discord.js'
import { command, getFakePerson, Colors, getAllCategoryVehicles, getRandomVehicleFromCategorys } from '../../utils'

const meta = new SlashCommandBuilder()
    .setName("getquest")
    .setDescription("Get a random Quest for Tailer-Mechanics")

export default command(meta, async ({ interaction }) => {

    let person = await getFakePerson()
    let vehicle = await getRandomVehicleFromCategorys("coupes","muscle","offroad","sports","sportsclassics","super","suvs","vans");

    const embed = new EmbedBuilder()
    .setImage(vehicle.stats.images.frontQuarter.toString())
    .setTimestamp(new Date())
    .setTitle("Daily Quest")
    .setColor(Colors.daily)
    .setDescription("The customer " + person.name + " would like to repair the car " + vehicle.name + ".")
    .addFields(
        {
            name: 'Customer',
            value: person.name
        },
        {
            name: 'Vehicel',
            value: vehicle.name
        },
    )

    return interaction.reply({
        ephemeral: false,
        embeds: [embed]
    });

})
