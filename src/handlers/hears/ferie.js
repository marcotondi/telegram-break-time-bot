'use strict';
const LOG = require('../../utils/logs');

const ferieHandler = ({ match, reply }) => {
    LOG.log.debug(match);

    reply('Hai detto ferie?! \n🎉🎉🎉 Alla grandissimaaa 🎉🎉🎉');
};

module.exports = ferieHandler;