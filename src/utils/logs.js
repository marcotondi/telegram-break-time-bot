'use strict';

// create a custom timestamp format for log statements
const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
        logFilePath: 'breakBot.log',
        timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
    },
    log = SimpleNodeLogger.createSimpleLogger(opts);

log.setLevel('debug');

function userString(ctx) {
    return JSON.stringify(ctx.from.id == ctx.chat.id ? ctx.from : {
        from: ctx.from,
        chat: ctx.chat
    });
};

function logMsg(ctx) {
    var from = userString(ctx);
    log.debug('<', ctx.message.text, from)
};

function logOutMsg(ctx, text) {
    log.debug('>', {
        id: ctx.chat.id
    }, text);
};

module.exports = {
    log,
    logMsg,
    logOutMsg
};