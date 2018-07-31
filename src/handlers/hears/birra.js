'use strict';
const LOG = require('../../utils/logs');

const birraHandler = ({ match, reply }) => {
    LOG.log.debug(match);

    reply('Chi vuole una birra? io me ne farei una ghiacciata al momento!');
};

module.exports = birraHandler;