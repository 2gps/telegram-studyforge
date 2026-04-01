// Entry point for the Telegram bot

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Import commands
const commands = require('./commands');

// Initialize commands
commands(bot);

bot.launch();

console.log('Bot is up and running');