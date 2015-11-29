var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var sostenimientosCtrl  = require('../controllers/sostenimientosController');

//restriccion de acceso por medio del middleware
routes.use(ensureAuthorized);
routes.get('/', sostenimientosCtrl.index);

module.exports = routes;
