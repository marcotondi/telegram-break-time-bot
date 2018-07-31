'use strict';

const { Composer } = require('telegraf');

const composer = new Composer();

const startHandler = require('./start');
const stopHandler = require('./stop');
const aboutHandler = require('./about');
const breakHandler = require('./break');
const pausaHandler = require('./pausa');

composer.command('start', startHandler);
composer.command('stop', stopHandler);
composer.command('about', aboutHandler);
composer.command('break', breakHandler);
composer.command('pausa', pausaHandler);

module.exports = composer;