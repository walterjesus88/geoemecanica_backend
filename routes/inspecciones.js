var express = require('express');
var routes = express.Router();
var inspeccionesCtrl = require('../controllers/inspeccionesController');

routes.get('/', inspeccionesCtrl.index);
routes.get('/:id', inspeccionesCtrl.show);
routes.post('/', inspeccionesCtrl.store);
module.exports = routes;
