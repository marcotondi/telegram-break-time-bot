'use strict';
const LOG = require('../../utils/logs');
const dataService = require('../../service/dataService');


const startHandler = (ctx) => {
    const {
        reply,
        replyWithMarkdown,
        message,
        from,
    } = ctx;

    LOG.logMsg(ctx);
    dataService.registerUser(ctx);
    var m = 'Ciao :) \nvuoi fare una pausa? ;)';
    ctx.reply(m);
    LOG.logOutMsg(ctx, m);
};

module.exports = startHandler;