const mysql = require('mysql2');
// Load environment variables from .env
require('dotenv').config();

// Create a connection pool using env variables
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

// Export pool with promise support for async/await
module.exports = pool.promise();