var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var tiposCtrl  = require('../controllers/tiposController');

//restriccion de acceso por medio del middleware
routes.use(ensureAuthorized);
routes.get('/', tiposCtrl.index);

module.exports = routes;
