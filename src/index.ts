import 'dotenv/config';

import { Client, DMChannel, Intents, Message } from 'discord.js';

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

client.once('ready', c => {
  console.log(`Wordle Bot is online as ${c.user.tag}`);
});

function handleMessage(msg: Message) {
  const re = /^(?:Wordle )(?<number>[0-9]+) (?<attemps>[0-6])\/6[\n]*(?<guesses>[⬛🟨🟩\n]*)+/;
  const match = msg.content.match(re);
  if (match === null) return;
  console.log(msg.channel);
  console.log(msg.author);
  console.log(match.groups);
}

client.on("messageCreate", msg => {
  handleMessage(msg);
})

client.login(process.env.DISCORD_TOKEN);