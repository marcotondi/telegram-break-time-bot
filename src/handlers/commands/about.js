'use strict';
const LOG = require('../../utils/logs');

const aboutMsg = 'Cerchiamo collaboratori! Fatevi avanti 😊 \nScrivi a @marcotondi';

const aboutHandler = (ctx) => {
    LOG.logMsg(ctx);
    LOG.logOutMsg(ctx, aboutMsg);
    ctx.reply(aboutMsg);
};

module.exports = aboutHandler;