import { Vehicle, VehicleInformation, VehiclesCategory } from "../types";

export async function getRandomVehicleFromCategorys(...args: string[]): Promise<Vehicle> {
    let vehicleCategoryList = await getAllCategoryVehicles();
    let vehicleList: Vehicle[] = [] 
    args.forEach((argument) => {
        vehicleCategoryList.forEach((vehicleCategory) => {
            if(vehicleCategory.name === argument){
                vehicleCategory.vehicles.forEach((vehicles) => {
                    vehicleList.push(vehicles);
                })
            }
        })
    })
    let randomIndex = Math.floor(Math.random()*vehicleList.length)
    let vehicleName = vehicleList[randomIndex];
    return vehicleName;
}



export async function getAllCategoryVehicles(): Promise<VehiclesCategory[]> {
    return fetch("https://gta.vercel.app/api/vehicles/class", {
        method: "GET",
    }).then((response) => response.json())
    .then(async (data) => {
        let vehiclesCategoryList: VehiclesCategory[] = [];

        for(let key in data){
            let vehicles: Vehicle[] = await getAllVehiclesFromCategory(key)
            let vehiclesCategory: VehiclesCategory = {
                name: key,
                vehicles: vehicles
            }
            vehiclesCategoryList.push(vehiclesCategory);
        }

        return vehiclesCategoryList;
    })
}

export async function getAllVehiclesFromCategory(key: string): Promise<Vehicle[]> {    
    return fetch("https://gta.vercel.app/api/vehicles/class/" + key, {
        method: "GET",
    }).then((response) => response.json())
    .then(async (data) => {
        let vehicleList: Vehicle[] = []
        
        for(const key in data) {
            vehicleList.push({
                name: key,
                stats: data[key] as VehicleInformation
            });
        }
        
        return vehicleList;
    })
}
