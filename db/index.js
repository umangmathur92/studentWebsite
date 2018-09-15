const pgp = require('pg-promise')();
require('dotenv').config();
const dbConnection = pgp(process.env.DATABASE_URL);
module.exports = dbConnection;