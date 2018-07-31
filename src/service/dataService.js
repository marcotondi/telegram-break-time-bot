'use strict';

const fs = require('fs');
const path = require('path');
var pathToJson = path.resolve(__dirname, '../users.json');

var users = {};
var fileLocked = false;

function loadUsers() {
    fs.readFile(pathToJson , 'utf8', (err, data) => {
        if (err) throw err;
        users = JSON.parse(data);
    });
};

function saveUsers() {
	if(!fileLocked){
		fileLocked = true;
		var json = JSON.stringify(users);
		fs.writeFile(pathToJson, json, 'utf8', function (err) {
			if (err) throw err;
			fileLocked = false;
		})
	}
};

function registerUser(msg) {
    var uid = msg.chat.id;
    var usr = {enabled: true, data: {from: msg.from, chat: msg.chat}};
    users[uid] = usr;
    saveUsers();
};

function getUser(uid) {
    return users[uid];
};

function getUserList() {
    return Object.keys(users);
};

function setMetaData(uid, key, val) {
    users[uid].data[key] = val;
    saveUsers();
};

function getMetaData(uid, key) {
    return users[uid].data[key];
};


module.exports = {
    loadUsers,
    registerUser,
    getUser,
    getUserList,
    setMetaData,
    getMetaData
};