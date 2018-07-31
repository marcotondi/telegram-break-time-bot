'use strict';
const LOG = require('../../utils/logs');

const mareHandler = ({ match, reply }) => {
    LOG.log.debug(match);

    reply('Avete fatto il castello di sabbia? No? \ne perché andate a mare allora? 😑');
};

module.exports = mareHandler;