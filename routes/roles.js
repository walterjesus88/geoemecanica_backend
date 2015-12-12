var express = require('express');
var routes = express.Router();
var rolesCtrl  = require('../controllers/rolesController');

routes.get('/', rolesCtrl.index);
routes.post('/', rolesCtrl.store);
routes.get('/:id', rolesCtrl.show);
routes.put('/:id', rolesCtrl.update);
routes.delete('/:id', rolesCtrl.destroy);

module.exports = routes;
