var express = require('express');
var routes = express.Router();
var sostenimientosCtrl  = require('../controllers/sostenimientosController');

routes.get('/', sostenimientosCtrl.index);

module.exports = routes;
