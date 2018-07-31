'use strict';
const LOG = require('../../utils/logs');

const buogniornoHandler = ({ match, reply }) => {
    LOG.log.debug(match);

    reply('Io voglio fare pausa!');
};

module.exports = buogniornoHandler;
