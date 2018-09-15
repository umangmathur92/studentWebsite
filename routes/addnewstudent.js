var express = require('express');
var router = express.Router();
const pgp = require('pg-promise')();
require('dotenv').config();
const dbConnection = pgp(process.env.DATABASE_URL);

router.get('/', function(req, res, next) {
  res.render('addnewstudent', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    var studentid = req.body.studentid;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var address = req.body.address;
    var gpa = req.body.gpa;
    var query = "INSERT INTO students(studentid, firstname, lastname, email, address, gpa) VALUES ('"+studentid+"','"+firstname+"','"+lastname+"','"+email+"','"+address+"',"+gpa+");";
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