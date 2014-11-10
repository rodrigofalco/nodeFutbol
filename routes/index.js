var express = require('express');
var router = express.Router();
var debug = require('debug')('nodeFutbol');

var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/futbolNode", {native_parser:true});

/* GET home page. */
router.get('/', function(req, res) {
	debug('Listing players');
	db.bind('players');
	db.players.find().toArray(function(err, items) {
		debug('Count');
		debug(items);
		debug('Count:' + items.length);
		var players = [];
		for (var i = 0; i < items.length; i++) {
			debug(items[i]);
			players[i] = items[i];
		};
	    db.close();
	    debug('Count:' + players.length);
	    res.render('index', { title: 'Express', players: players });
	});
  
});

module.exports = router;
