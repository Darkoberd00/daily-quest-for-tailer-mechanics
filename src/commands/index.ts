import debug from "./debug";
import general from "./general";
let all_catogtorys = [general];
if (process.env.NODE_ENV !== "production") {
	all_catogtorys.push(debug);
}

export default all_catogtorys;
