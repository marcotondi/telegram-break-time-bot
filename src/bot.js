'use strict';

const Telegraf = require('telegraf');

const config = require('./config');
const handlers = require('./handlers');
const dataService = require('./service/dataService');
const dataSpeaks = require('./service/speakService');

const LOG = require('./utils/logs');

const bot = new Telegraf(config.botToken);

const inputErrMsg = `ðŸ’¥ BOOM... ðŸ”©â˜ ðŸ”§ðŸ”¨âš¡ï¸
Ops, qualcosa è andato storto.`;

//get username for group command handling
bot.telegram.getMe().then((botInfo) => {
    bot.options.username = botInfo.username;
    LOG.log.info("Initialized ", botInfo.username);
});

dataService.loadUsers();
dataSpeaks.loadSpeaks();

bot.use(handlers.commands, handlers.hears);

bot.catch((err) => {
    console.error(err);
});

/**
 * START BOT
 */
bot.startPolling();
