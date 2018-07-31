'use strict';
const LOG = require('../../utils/logs');

const grazieHandler = ({ match, reply }) => {
    LOG.log.debug(match);

    reply('Prego, figurati!');
};

module.exports = grazieHandler;