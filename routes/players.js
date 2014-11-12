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
		var players = [];
		for (var i = 0; i < items.length; i++) {
			debug(items[i]);
			players[i] = items[i];
		};
	    db.close();
	    debug('Count:' + players.length);
	    res.render('index', { title: 'Express', players: players });
	    */
	    res.render('index', { title: 'Express', players: items });
	    db.close();
	});
});

module.exports = router;
