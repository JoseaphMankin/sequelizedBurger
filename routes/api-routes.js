// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {
	app.get('/', function(req, res) {
		db.Burger.findAll({}).then(function(data) {
			let hbsObject = {
				burgers: data,
			};
			console.log(JSON.stringify(hbsObject));
			res.render('index', {burgers: data});
		});
	});


	// GET route for getting all of the burgers
	app.get('/api/burgers', function(req, res) {
		db.Burger.findAll({}).then(function(dbBurger) {
			res.render('index', dbBurger);
		});
	});

	// Get route for retrieving a single Burger
	app.get('/api/burgers/:id', function(req, res) {
		// 2. Add a join here to include the Author who wrote the Burger
		db.Burger.findOne({
			where: {
				id: req.params.id,
			},
		}).then(function(dbBurger) {
			console.log(dbBurger);
			res.json(dbBurger);
		});
	});

	// Burger route for saving a new Burger
	app.post('/api/burgers', function(req, res) {
		db.Burger.create(req.body).then(function(dbBurger) {
			res.json(dbBurger);
		});
	});

	// DELETE route for deleting burgers
	app.delete('/api/burgers/:id', function(req, res) {
		db.Burger.destroy({
			where: {
				id: req.params.id,
			},
		}).then(function(dbBurger) {
			res.json(dbBurger);
		});
	});

	// PUT route for updating burgers
	app.put('/api/burgers/:id', function(req, res) {
		db.Burger.update(req.body, {
			where: {
				id: req.params.id,
			},
		}).then(function(dbBurger) {
			res.json(dbBurger);
		});
	});
};
