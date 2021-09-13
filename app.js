require('dotenv').config()
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const fs = require("fs");

client.commands = new Collection();
client.aliases = new Collection();

["aliases", "commands"].forEach(cmd => client[cmd] = new Collection());
["console", "command", "event"].forEach(events => require(`./handlers/${events}`)(client));

client.categories = fs.readdirSync('./commands');

client.login(process.env.TOKEN);