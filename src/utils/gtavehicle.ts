import { Vehicle, VehicleInformation, VehiclesCategory } from "../types";

/**
 * Fetches a random vehicle from the GTAV vehicle API of the given categories.
 *
 * @param args - a list of vehicle categories
 * @returns {Vehicle} a random vehicle from the given categories
 */
export async function getRandomVehicleFromCategorys(
	...args: string[]
): Promise<Vehicle> {
	let vehicleCategoryList = await getAllCategoryVehicles();
	let vehicleList: Vehicle[] = [];
	args.forEach((argument) => {
		vehicleCategoryList.forEach((vehicleCategory) => {
			if (vehicleCategory.name === argument) {
				vehicleCategory.vehicles.forEach((vehicles) => {
					vehicleList.push(vehicles);
				});
			}
		});
	});
	let randomIndex = Math.floor(Math.random() * vehicleList.length);
	let vehicleName = vehicleList[randomIndex];
	return vehicleName;
}

/**
 * Fetches all vehicles from the GTAV vehicle API and sorts them into categories.
 *
 * @returns {VehiclesCategory[]} a list of vehicles sorted into categories
 */
export async function getAllCategoryVehicles(): Promise<VehiclesCategory[]> {
	return fetch("https://gta.vercel.app/api/vehicles/class", {
		method: "GET",
	})
		.then((response) => response.json())
		.then(async (data) => {
			let vehiclesCategoryList: VehiclesCategory[] = [];

			for (let key in data) {
				let vehicles: Vehicle[] = await getAllVehiclesFromCategory(key);
				let vehiclesCategory: VehiclesCategory = {
					name: key,
					vehicles: vehicles,
				};
				vehiclesCategoryList.push(vehiclesCategory);
			}

			return vehiclesCategoryList;
		});
}

/**
 * Fetches all vehicles from a category from the GTAV vehicle API.
 *
 * @param key - The category name
 * @returns {Promise<Vehicle[]>} The list of vehicles from the category
 */
export async function getAllVehiclesFromCategory(
	key: string
): Promise<Vehicle[]> {
	return fetch("https://gta.vercel.app/api/vehicles/class/" + key, {
		method: "GET",
	})
		.then((response) => response.json())
		.then(async (data) => {
			let vehicleList: Vehicle[] = [];

			for (const key in data) {
				vehicleList.push({
					name: key,
					stats: data[key] as VehicleInformation,
				});
			}

			return vehicleList;
		});
}
