var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var inspeccionesCtrl = require('../controllers/inspeccionesController');

//routes.use(ensureAuthorized);
routes.get('/', inspeccionesCtrl.index);
routes.post('/grabarinspeccion', inspeccionesCtrl.store);
module.exports = routes;
