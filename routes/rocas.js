var express = require('express');
var routes = express.Router();
var rocasCtrl  = require('../controllers/rocasController');

routes.get('/', rocasCtrl.index);

module.exports = routes;
