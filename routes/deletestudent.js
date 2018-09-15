var express = require('express');
var router = express.Router();
const dbConnection = require('../db/index.js');

router.post('/', function(req, res, next) {
    var studentid = req.body.studentid;
    studentid = "'" + studentid + "'";
    var query = 'DELETE FROM students WHERE studentid='+ studentid +';';
    console.log(query);
    dbConnection.any(query).then(function(data) {
        console.log('query successful');
        res.send('true');
    }).catch(function(error) {
        console.log('error while performing query');
        res.send('false');
    });
});

module.exports = router;