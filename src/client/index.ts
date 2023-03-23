import { Client, GatewayIntentBits } from "discord.js";
import keys from "../keys";

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
    ],
})

client.login(keys.botToken)
    .catch((err) => {
        console.log('[Login Error]', err)
        process.exit(1)
    })