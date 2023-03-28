export interface Operation {
	name: string;
	price: Price[] | number;
}

export interface Price {
	name: string;
	value: number;
}

export interface Repair {
	name: string;
	price: number;
}
