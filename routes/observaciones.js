var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var ensureSuperAuthorized = require('../middleware').ensureSuperAuthorized;
var observacionesCtrl = require('../controllers/observacionController');

routes.use(ensureAuthorized);
routes.get('/', observacionesCtrl.index);
routes.get('/:id', observacionesCtrl.show);
routes.post('/', observacionesCtrl.store);
routes.put('/:id', observacionesCtrl.update);
routes.delete('/:id', observacionesCtrl.destroy);

module.exports = routes;