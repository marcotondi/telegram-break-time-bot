'use strict';

const fs = require('fs');
const path = require('path');
var pathToJson = path.resolve(__dirname, '../speaks.json');

var speaks = {};
var fileLocked = false;

function loadSpeaks() {
    fs.readFile(pathToJson, 'utf8', (err, data) => {
        if (err) throw err;
        speaks = JSON.parse(data);
    });
};

function getList() {
    return Object.keys(speaks);
};

/**
 * 
 * @param {*} day è il giorno della settimana 0 - 6. 99 è il giorno comune a tutti
 * @param {*} hh è l'ora del break, con _ davanti
 * @param {*} r è il numero random della frase
 */
function getDay(day, hh, r) {
    return speaks[day][hh][r];
};

function sizeDay(day, hh) {
    return speaks[day][hh].length;
};


module.exports = {
    loadSpeaks,
    getList,
    getDay,
    sizeDay
};
