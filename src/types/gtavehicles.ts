export interface VehicleInformation {
    images: VehicleImage,
    manufacturer: string,
    model: string,
    seats?: number,
    price?: number,
    topSpeed?: VehicleTopSpeed,
    speed?: number,
    acceleration?: number,
    braking?: number,
    handling?: number
}

export interface VehicleImage {
    frontQuarter: URL,
    rearQuarter: URL,
    front: URL,
    rear: URL,
    side: URL
}

export interface VehicleTopSpeed {
    mph: number,
    kmh: number
}

export interface Vehicle {
    name: string,
    stats: VehicleInformation
}

export interface VehiclesCategory {
    name: string,
    vehicles: Vehicle[]
}