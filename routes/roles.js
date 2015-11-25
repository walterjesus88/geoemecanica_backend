var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var ensureSuperAuthorized = require('../middleware').ensureSuperAuthorized;
var rolesCtrl  = require('../controllers/rolesController');

//restriccion de acceso por medio del middleware
routes.use(ensureAuthorized);
routes.use(ensureSuperAuthorized);
routes.get('/', rolesCtrl.index);
routes.post('/', rolesCtrl.store);
routes.get('/:id', rolesCtrl.show);
routes.put('/:id', rolesCtrl.update);
routes.delete('/:id', rolesCtrl.destroy);

module.exports = routes;