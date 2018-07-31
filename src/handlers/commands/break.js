'use strict';

const LOG = require('../../utils/logs');
const breakService = require('../../service/breakService');


const breakHandler = (ctx) => {
    LOG.logMsg(ctx);

    var msg = breakService.getBreak();

    LOG.logOutMsg(ctx, msg);
    ctx.reply(msg);
};

module.exports = breakHandler;