var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var ensureSuperAuthorized = require('../middleware').ensureSuperAuthorized;
var usersCtrl  = require('../controllers/usersController');

routes.use(ensureAuthorized);
routes.get('/:id', usersCtrl.show);
routes.put('/:id', usersCtrl.update);

routes.use(ensureSuperAuthorized);
routes.get('/', usersCtrl.index);
routes.post('/', usersCtrl.store);
routes.delete('/:id', usersCtrl.destroy);

module.exports = routes;
