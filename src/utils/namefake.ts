import { Namefakes } from "../types";

/**
 * Fetches a fake person from the namefake api.
 *
 * @returns {Promise<Namefakes>} The namefake object
 */
export async function getFakePerson(): Promise<Namefakes> {
	return fetch("https://api.namefake.com", {
		method: "GET",
	})
		.then((response) => response.json())
		.then((data) => {
			return data as Namefakes;
		});
}
