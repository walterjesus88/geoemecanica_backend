var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var usersCtrl  = require('../controllers/usersController');

routes.use(ensureAuthorized);
routes.get('/', usersCtrl.index);
routes.post('/', usersCtrl.store);
routes.get('/:id', usersCtrl.show);
routes.put('/:id', usersCtrl.update);
routes.delete('/:id', usersCtrl.destroy);

module.exports = routes;
