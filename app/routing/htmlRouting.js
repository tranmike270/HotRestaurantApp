var router = require('express').Router();
var bodyParser = require('body-parser');
var path = require('path');


router.get('*', function(req,res){

    res.sendFile(path.join(__dirname, "../public/home.html"));
    
});

router.get('/table', function(req,res){

    res.sendFile(path.join(__dirname, "../public/tables.html"));

});

router.get('/newReservation', function(req,res){

    res.sendFile(path.join(__dirname, "../public/reservation.html"));

});

module.exports = router;