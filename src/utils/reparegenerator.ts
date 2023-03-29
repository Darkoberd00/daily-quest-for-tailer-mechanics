import { Repair, Price, Vehicle, Operation } from "../types";
import {
	TuningPricelist,
	RepairPriceList,
	InspectionPricelist,
} from "../utils";

/**
 * Generates a list of tunings that need to be done. bewteen min and max.
 *
 * @param min - The minimum amount of tunings that need to be done
 * @param max - The maximum amount of tunings that need to be done
 * @returns {Repair[]} The list of tunings that need to be done
 */
export function generateTuningList(min: number, max: number): Repair[] {
	let tuningList: Operation[] = Object.assign([], TuningPricelist);
	let repairList: Repair[] = [];

	for (let i = 0; i < Math.floor(Math.random() * max) + min; i++) {
		let random = Math.floor(Math.random() * tuningList.length);

		if (Array.isArray(tuningList[random].price)) {
			let list: Price[] = tuningList[random].price as Price[];
			let randomPrice = Math.floor(Math.random() * list.length);
			repairList.push({
				name: tuningList[random].name + " (" + list[randomPrice].name + ")",
				price: list[randomPrice].value,
			});
		} else {
			repairList.push({
				name: tuningList[random].name,
				price: tuningList[random].price as number,
			});
		}
		tuningList.splice(random, 1);
	}
	return repairList;
}

/**
 * Generates a list of repairs that need to be done. bewteen min and max.
 *
 * @param min - The minimum amount of repairs that need to be done
 * @param max - The maximum amount of repairs that need to be done
 * @param vehicle - The vehicle that needs to be repaired
 * @returns {Repair[]} The list of repairs that need to be done
 */
export function generateRepairList(
	min: number,
	max: number,
	vehicle: Vehicle
): Repair[] {
	let repairList: Operation[] = Object.assign([], RepairPriceList);
	let list: Repair[] = [];
	for (let i = 0; i < Math.floor(Math.random() * max) + min; i++) {
		let random = Math.floor(Math.random() * repairList.length);
		if (
			repairList[random].name != undefined &&
			repairList[random].name == "Tür"
		) {
			let seats = 1;
			if (vehicle.stats.seats) {
				seats = vehicle.stats.seats;
			}
			let randomSeats = Math.floor(Math.random() * seats) + 1;
			list.push({
				name: repairList[random].name + " (" + randomSeats + "x)",
				price: (repairList[random].price as number) * randomSeats,
			});
		} else {
			list.push({
				name: repairList[random].name,
				price: repairList[random].price as number,
			});
		}
	}
	return list;
}

/**
 * Generates a list of inspections that need to be done.
 *
 * @returns {Repair[]} The list of inspections that need to be done
 */
export function generateInspectionList(): Repair[] {
	let inspectionList: Operation[] = Object.assign([], InspectionPricelist);
	let repairlist: Repair[] = [];
	for (let i = 0; i < 1; i++) {
		let random = Math.floor(Math.random() * inspectionList.length);
		if (Array.isArray(inspectionList[random].price)) {
			let list: Price[] = inspectionList[random].price as Price[];
			let randomPrice = Math.floor(Math.random() * list.length);
			repairlist.push({
				name: inspectionList[random].name + " (" + list[randomPrice].name + ")",
				price: list[randomPrice].value,
			});
		} else {
			repairlist.push({
				name: inspectionList[random].name,
				price: inspectionList[random].price as number,
			});
		}
		inspectionList.splice(random, 1);
	}
	return repairlist;
}
