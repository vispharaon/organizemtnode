'use strict';

var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'organizemt'
});

module.exports = connection;