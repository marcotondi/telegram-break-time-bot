'use strict';

const LOG = require('../utils/logs');

const dataSpeaks = require('./speakService');
var moment = require('moment');
moment.locale('it');

function getBreak() {
    let day = moment().day();

    if (isRest(day))
        return getMessageNotWork(day);

    return chooseMessage(day);
};

function isRest(day) {
    return (day == 6 || day == 0);
}

function chooseDay(day, hh) {
    let sizeDay = dataSpeaks.sizeDay(day, hh);
    let size99 = dataSpeaks.sizeDay(99, hh);

    let num = sizeDay / size99;

    return Math.random() < num ? day : 99;
}

function getMessage(day, hh) {
    let cDay = chooseDay(day, hh);

    return dataSpeaks.getDay(cDay, hh, getRandom(0, dataSpeaks.sizeDay(cDay, hh)));
}

function getMessageNotWork(day) {
    return dataSpeaks.getDay(day, "fiesta", getRandom(0, dataSpeaks.sizeDay(day, "fiesta")));
}

function chooseMessage(day) {
    let time = moment().format('LT');
    let hh = null;

    LOG.log.debug('day ', day, ' time ', time);

    if (time < '09:00') {
        hh = '_09';
    } else if (time >= '09:00' && time <= '09:20') {
        hh = "break";
    } else if (time < '11:00') {
        hh = '_11';
    } else if (time >= '11:00' && time <= '11:15') {
        hh = "break";
    } else if (time < '13:00') {
        hh = '_13';
    } else if (time >= '13:00' && time <= '14:00') {
        hh = "break";
    } else if (time < '15:15') {
        hh = '_15';
    } else if (time >= '15:15' && time <= '15:20') {
        hh = "break";
    } else if (time < '16:30') {
        hh = '_16';
    } else if (time >= '16:30' && time <= '16:55') {
        hh = "break";
    } else if (time > '17:00') {
        hh = "_17";
    } else {
        return 'Chiedi a Tiziano che sicuramente vuole fare pausa';
    }

    return getMessage(day, hh);
}

function getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
};

module.exports = {
    getBreak
};
