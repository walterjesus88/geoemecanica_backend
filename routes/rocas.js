var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var rocasCtrl  = require('../controllers/rocasController');

//restriccion de acceso por medio del middleware
routes.use(ensureAuthorized);
routes.get('/', rocasCtrl.index);

module.exports = routes;
