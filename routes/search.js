var express = require('express');
var router = express.Router();
const pgp = require('pg-promise')();
require('dotenv').config();
const dbConnection = pgp(process.env.DATABASE_URL);

router.post('/', function(req, res, next) {
    var key = req.body.search_query;
    var searchCriteria = req.body.search_criteria;
    var columnName = "";
    switch(searchCriteria) {
        case "First-Name":
            columnName = "firstName";
            break;
        case "Last-Name":
            columnName = "lastName";
            break;
        case "Student-ID":
            columnName = "studentId";
            break;
        default:
            columnName = "";
    }
    var term = "'" + key + "%'"
    var query = 'SELECT studentId, firstName, lastName, email, address, gpa FROM students WHERE ' + columnName + ' ILIKE ' + term;
    console.log(query);
    dbConnection.any(query).then(function(data) {
        console.log('query successful');
        res.send(data);
    }).catch(function(error) {
        console.log('error while performing query');
        res.send('Error while performing Query.');
    });
});

module.exports = router;
