var express = require('express');
var routes = express.Router();
var usersCtrl  = require('../controllers/usersController');

routes.post('/authenticate', usersCtrl.authenticate);

module.exports = routes;
