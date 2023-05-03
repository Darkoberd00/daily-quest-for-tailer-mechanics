import commands from "../../commands";
import { Command } from "../../types";
import { EditReply, event, Reply } from "../../utils";

const allCommands = commands.map(({ commands }) => commands).flat();
const allCommandsMap: Promise<Map<string, Command>> = (async () => {
	const map = new Map<string, Command>();
	return await Promise.all(
		allCommands.map(async (command) => {
			const meta = await command.meta;
			map.set(meta.name, command);
		})
	).then(() => map);
})();

export default event(
	"interactionCreate",
	async ({ log, client }, interaction) => {
		if (!interaction.isChatInputCommand() && !interaction.isAutocomplete())
			return;

		try {
			const commandName = interaction.commandName;
			const command = (await allCommandsMap).get(commandName);

			if (!command) throw new Error("Command not found...");

			if (interaction.isChatInputCommand()) {
				await command.exec({
					client,
					interaction,
					async log(...args: any[]) {
						log(`[${(await command.meta).name}]`, ...args);
					},
				});
			}

			if (interaction.isAutocomplete()) {
				await command.autocomplete!({
					client,
					interaction,
					async log(...args: any[]) {
						log(`[${(await command.meta).name}]`, ...args);
					},
				});
			}
		} catch (error) {
			log("[Command Error]", error);

			if (!interaction.isAutocomplete()) {
				if (interaction.replied)
					return interaction.editReply(
						EditReply.error("Something went wrong :(")
					);
				return interaction.reply(Reply.error("Something went wrong :("));
			} else {
				return interaction.respond([
					{
						name: "error",
						value: "Something went wrong :(",
					},
				]);
			}
		}
	}
);
