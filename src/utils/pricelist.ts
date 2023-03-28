import { Operation } from "../types";

export const TuningPricelist: Operation[] = [
	{
		name: "Motor",
		price: [
			{
				name: "StufeI",
				value: 10000,
			},
			{
				name: "StufeII",
				value: 15000,
			},
			{
				name: "StufeIII",
				value: 20000,
			},
			{
				name: "StufeIV",
				value: 25000,
			},
		],
	},
	{
		name: "Getriebe",
		price: [
			{
				name: "StufeI",
				value: 10000,
			},
			{
				name: "StufeII",
				value: 15000,
			},
			{
				name: "StufeIII",
				value: 20000,
			},
			{
				name: "StufeIV",
				value: 25000,
			},
		],
	},
	{
		name: "Bremsen",
		price: [
			{
				name: "StufeI",
				value: 5000,
			},
			{
				name: "StufeII",
				value: 10000,
			},
			{
				name: "StufeIII",
				value: 13000,
			},
			{
				name: "StufeIV",
				value: 15000,
			},
		],
	},
	{
		name: "Turbo",
		price: 20000,
	},
	{
		name: "Stoßstange (Front)",
		price: 4000,
	},
	{
		name: "Stoßstange (Heck)",
		price: 4000,
	},
	{
		name: "Auspuff",
		price: 5000,
	},
	{
		name: "Scheinwerferabdeckung",
		price: 1000,
	},
	{
		name: "Scheinwerfer (Foliert)",
		price: 2000,
	},
	{
		name: "Scheinwerfer (Bunt)",
		price: 3000,
	},
	{
		name: "Motorhaube",
		price: 6000,
	},
	{
		name: "Hupe",
		price: 4500,
	},
	{
		name: "Spoiler",
		price: 2500,
	},
	{
		name: "Seitenverkleidung",
		price: 3000,
	},
	{
		name: "Kotflügel",
		price: 3500,
	},
	{
		name: "Licht (Unterboden)",
		price: [
			{
				name: "Weiß",
				value: 1000,
			},
			{
				name: "Blau",
				value: 1500,
			},
			{
				name: "Elektrisch Blau",
				value: 2000,
			},
			{
				name: "Mintgrün",
				value: 2500,
			},
			{
				name: "Limettengrün",
				value: 2000,
			},
			{
				name: "Orange",
				value: 1500,
			},
			{
				name: "Rot",
				value: 1500,
			},
			{
				name: "Pony Pink",
				value: 3000,
			},
			{
				name: "Leuchtend Lila",
				value: 3000,
			},
			{
				name: "Lila",
				value: 2000,
			},
			{
				name: "Schwarzlicht",
				value: 6000,
			},
		],
	},
	{
		name: "Licht (Unterboden Anordnung)",
		price: [
			{
				name: "Front",
				value: 4000,
			},
			{
				name: "Heck",
				value: 4000,
			},
			{
				name: "Seiten",
				value: 7000,
			},
			{
				name: "Front und Heck",
				value: 8000,
			},
			{
				name: "Front und Seiten",
				value: 11000,
			},
			{
				name: "Heck und Seiten",
				value: 11000,
			},
			{
				name: "Front, Heck und Seiten",
				value: 16000,
			},
		],
	},
	{
		name: "Nummernschild",
		price: 500,
	},
	{
		name: "Lackierung",
		price: [
			{
				name: "Chrom",
				value: 20000,
			},
			{
				name: "Klassisch",
				value: 5000,
			},
			{
				name: "Matt",
				value: 7000,
			},
			{
				name: "Metallic",
				value: 8500,
			},
			{
				name: "Metalle",
				value: 30000,
			},
			{
				name: "Perleffekt",
				value: 3000,
			},
		],
	},
	{
		name: "Ausstattungsfarbe",
		price: 2500,
	},
	{
		name: "Sonnenblende",
		price: 1000,
	},
	{
		name: "Federung",
		price: [
			{
				name: "Tiefgelegte Federung",
				value: 1500,
			},
			{
				name: "Straßenfederung",
				value: 3000,
			},
			{
				name: "Sportfederung",
				value: 4500,
			},
			{
				name: "Wettkaempferfederung",
				value: 6000,
			},
		],
	},
	{
		name: "Felgen",
		price: [
			{
				name: "Luxus",
				value: 30000,
			},
			{
				name: "Lowrider",
				value: 10000,
			},
			{
				name: "Muscel-car",
				value: 10000,
			},
			{
				name: "Offroad",
				value: 15000,
			},
			{
				name: "Sport",
				value: 15000,
			},
			{
				name: "SUV",
				value: 18000,
			},
			{
				name: "Tuner",
				value: 15000,
			},
			{
				name: "Straße",
				value: 15000,
			},
			{
				name: "Track",
				value: 20000,
			},
		],
	},
	{
		name: "Felgen Lackierung",
		price: 1000,
	},
	{
		name: "Reifenmuster",
		price: 1000,
	},
	{
		name: "Reifenqualm",
		price: 5000,
	},
	{
		name: "Fenster Tönung",
		price: [
			{
				name: "Helles Rauchglas",
				value: 1500,
			},
			{
				name: "Dunkles Rauchglas",
				value: 3000,
			},
			{
				name: "Limousine",
				value: 5000,
			},
		],
	},
];

export const RepairPriceList: Operation[] = [
	{
		name: "Scheinwerfer",
		price: 500,
	},
	{
		name: "Motorhaube",
		price: 2000,
	},
	{
		name: "Reifen",
		price: 2000,
	},
	{
		name: "Stoßstange Vornen",
		price: 2500,
	},
	{
		name: "Stoßstange Hinten",
		price: 2500,
	},
	{
		name: "Neu Lackierung",
		price: 1500,
	},
	{
		name: "Neue Radaufhängung",
		price: 8000,
	},
	{
		name: "Motor",
		price: 10000,
	},
	{
		name: "Getriebe",
		price: 13000,
	},
	{
		name: "Zündkerzen",
		price: 1000,
	},
	{
		name: "Bremsleitung",
		price: 2500,
	},
	{
		name: "Tank",
		price: 3000,
	},
	{
		name: "Kofferraum Klappe",
		price: 2500,
	},
	{
		name: "Stoßdämpfer",
		price: 4500,
	},
	{
		name: "Bremsen",
		price: 2000,
	},
	{
		name: "Tür",
		price: 4000,
	},
	{
		name: "Ausbeulen",
		price: 1000,
	},
	{
		name: "Kratzer Auspolieren",
		price: 500,
	},
];

export const InspectionPricelist: Operation[] = [
	{
		name: "Inspektion",
		price: 500,
	},
	{
		name: "Einzelservice",
		price: [
			{
				name: "Ölwechsel",
				value: 200,
			},
			{
				name: "Filterwechsel",
				value: 300,
			},
		],
	},
];
