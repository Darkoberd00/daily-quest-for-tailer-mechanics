import { Namefakes } from "../types";

export async function getFakePerson(): Promise<Namefakes> {
	return fetch("https://api.namefake.com", {
		method: "GET",
	})
		.then((response) => response.json())
		.then((data) => {
			return data as Namefakes;
		});
}
