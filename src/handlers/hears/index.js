'use strict';

const { Composer } = require('telegraf');

const composer = new Composer();

const buongiornoHandler = require('./buongiorno');
const pausaHandler = require('./pausa');
const grazieHandler = require('./grazie');
const birraHandler = require('./birra');
const ferieHandler = require('./ferie');
const mareHandler = require('./mare');

composer.hears(/[bB]+uongiorno/, buongiornoHandler);
composer.hears(/[pP]+ausa/, pausaHandler);
composer.hears(/[gG]+razie/, grazieHandler);
composer.hears(/[bB]+irra/, birraHandler);
composer.hears(/[fF]+erie/, ferieHandler);
composer.hears(/[mM]+are/, mareHandler);

module.exports = composer;