import { SlashCommandBuilder } from "discord.js";
import {
	Command,
	CommandCategory,
	CommandCategoryExtra,
	CommandExec,
	CommandMeta,
	CommandAutocompleteExec,
} from "../types";

export function command(
	meta: CommandMeta,
	exec: CommandExec,
	autocomplete?: CommandAutocompleteExec
): Command {
	return {
		meta,
		exec,
		autocomplete,
	};
}

export function PromiseSlashCommandBuilder(
	name: string,
	description: string
): Promise<SlashCommandBuilder> {
	return Promise.resolve(
		new SlashCommandBuilder().setName(name).setDescription(description)
	);
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
