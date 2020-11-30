// MySQL
const mysql = require('mysql');


// MySQl
let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'finderz'
});


module.exports = pool;