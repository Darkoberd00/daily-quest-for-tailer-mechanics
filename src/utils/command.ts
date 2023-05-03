import {
	Command,
	CommandCategory,
	CommandCategoryExtra,
	CommandExec,
	CommandMeta,
	CommandAutocompleteExec
} from "../types";

export function command(meta: CommandMeta, exec: CommandExec, autocomplete?: CommandAutocompleteExec): Command {
	return {
		meta,
		exec,
		autocomplete,
	};
}


export function category(
	name: string,
	commands: Command[],
	extra: CommandCategoryExtra = {}
): CommandCategory {
	return {
		name,
		commands,
		...extra,
	};
}
