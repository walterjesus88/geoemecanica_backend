var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var porcentajesCtrl = require('../controllers/porcentajesController');

routes.use(ensureAuthorized);
routes.get('/', porcentajesCtrl.index);

module.exports = routes;
