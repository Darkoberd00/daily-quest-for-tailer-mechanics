import { category } from "../../utils";
import help from "./help";
import getquest from "./getquest";
import startdaily from "./startdaily";
import stopdaily from "./stopdaily";
//import listjobs from "./listjobs";

export default category("General", [help, getquest, startdaily, stopdaily]);
