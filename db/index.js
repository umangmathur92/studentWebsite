const pgp = require('pg-promise')();
const dbConnection = pgp(process.env.DATABASE_URL);
module.exports = dbConnection;