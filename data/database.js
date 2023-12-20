const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database:'blog',
    user: 'root',
    password: 'A5jA2nn(Y18NOH'

});

module.exports = pool;