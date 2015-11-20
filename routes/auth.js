var express = require('express');
var routes = express.Router();
var usersCtrl  = require('../controllers/usersController');

routes.post('/authenticate', usersCtrl.authenticate);
routes.post('/register', usersCtrl.store);

module.exports = routes;
