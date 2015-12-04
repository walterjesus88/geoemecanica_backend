var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var empresasCtrl  = require('../controllers/empresasController');

routes.use(ensureAuthorized);
routes.get('/', empresasCtrl.index);

module.exports = routes;
