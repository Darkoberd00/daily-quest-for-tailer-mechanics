import {
	Awaitable,
	Client,
	ChatInputCommandInteraction,
	SlashCommandBuilder,
	AutocompleteInteraction,
} from "discord.js";

type LoggerFunction = (...args: unknown[]) => void;
export interface CommandProps {
	interaction: ChatInputCommandInteraction;
	client: Client;
	log: LoggerFunction;
}

export interface CommandAutocompleteProps {
	interaction: AutocompleteInteraction;
	client: Client;
	log: LoggerFunction;
}

export type CommandExec = (props: CommandProps) => Awaitable<unknown>;
export type CommandAutocompleteExec = (props: CommandAutocompleteProps) => Awaitable<unknown>;
export type CommandMeta =
	| Promise<SlashCommandBuilder>
	| Promise<Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">>;
export interface Command {
	meta: CommandMeta;
	exec: CommandExec;
	autocomplete?: CommandAutocompleteExec;
}

export interface CommandCategoryExtra {
	description?: string;
	emoji?: string;
}

export interface CommandCategory extends CommandCategoryExtra {
	name: string;
	commands: Command[];
}
