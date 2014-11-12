var express = require('express');
var debug = require('debug')('nodeFutbol');
var mongo = require('mongoskin');

var router = express.Router();
var db = mongo.db("mongodb://localhost:27017/futbolNode", {native_parser:true});

/* GET players listing. */
router.get('/', function(req, res) {
	db.bind('players');
  res.send('Listing players');
  db.players.find().toArray(function(err, items) {
  	/*
  	res.render('index', { title: 'Express', players: items });
    */

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(items));
    db.close();
	});
});

module.exports = router;
