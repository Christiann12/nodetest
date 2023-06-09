const mysql = require('mysql');
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();    
}

exports.pool = () => {
    // MySQL Code goes here
    return mysql.createPool({
        connectionLimit: 10,
        host: process.env.HOST || 'localhost',
        user: process.env.USER ||  'root',
        password: process.env.PASS ||  '',
        database: process.env.DB_NAME ||  'nodetest'
    });
}