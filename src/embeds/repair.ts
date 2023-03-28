import { EmbedBuilder } from "discord.js";
import { Vehicle, Namefakes, Repair } from "../types";
import { Colors } from "../utils";

/**
 * Generates an embed for the Vehicle to repair.
 *
 * @param {Vehicle} vehicle - The vehicle that needs to be repaired
 * @param {Namefakes} person - The owner of the vehicle
 * @param {Repair[]} repairList - The list of repairs that need to be done
 * @param {Repair[]} tuningList - The list of tunings that need to be done
 * @param {Repair[] | null} inspectionList - The list of inspections that need to be done
 * @returns {EmbedBuilder} The embed that needs to be send
 * @example
 **/
export function generateEmbedRepair(
	vehicle: Vehicle,
	person: Namefakes,
	repairList: Repair[],
	tuningList: Repair[],
	inspectionList: Repair[] | null
): EmbedBuilder {
	const embed = new EmbedBuilder()
		.setImage(vehicle.stats.images.frontQuarter.toString())
		.setTimestamp(new Date())
		.setTitle("Daily Quest")
		.setColor(Colors.daily)
		.setDescription(
			"The customer " +
				person.name +
				" would like to repair the car " +
				vehicle.name +
				"."
		)
		.addFields(
			{
				name: "Customer",
				value: person.name,
			},
			{
				name: "Vehicel",
				value: vehicle.name,
			},
			{
				name: "Tuning",
				value: tuningList.map((tuning) => " - " + tuning.name).join("\n"),
			},
			{
				name: "Repare",
				value: repairList.map((repare) => " - " + repare.name).join("\n"),
			}
		);
	let price = 0;

	if (inspectionList !== null) {
		embed.addFields({
			name: "Inspection",
			value: inspectionList
				.map((inspection) => " - " + inspection.name)
				.join("\n"),
		});
		inspectionList.forEach((inspection) => (price += inspection.price));
	}

	tuningList.forEach((tuning) => (price += tuning.price));
	repairList.forEach((repare) => (price += repare.price));

	embed.addFields(
		{
			name: "Price",
			value: price + "€",
		},
		{
			name: "Lohn",
			value: price + "€",
		}
	);
	return embed;
}
