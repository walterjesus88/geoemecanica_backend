var express = require('express');
var routes = express.Router();
var tiposCtrl  = require('../controllers/tiposController');

routes.get('/', tiposCtrl.index);

module.exports = routes;
