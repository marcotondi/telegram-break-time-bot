'use strict';
const LOG = require('../../utils/logs');

const pausaHandler = ({ match, reply }) => {
    LOG.log.debug(match);

    reply('Caffè?');
};

module.exports = pausaHandler;