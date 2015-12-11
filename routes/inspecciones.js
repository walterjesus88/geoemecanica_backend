var express = require('express');
var routes = express.Router();
var inspeccionesCtrl = require('../controllers/inspeccionesController');

routes.get('/', inspeccionesCtrl.index);
routes.post('/', inspeccionesCtrl.store);
module.exports = routes;
