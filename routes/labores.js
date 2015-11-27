var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var ensureSuperAuthorized = require('../middleware').ensureSuperAuthorized;
var laboresCtrl  = require('../controllers/laboresController');

//restriccion de acceso por medio del middleware
routes.use(ensureAuthorized);
routes.get('/', laboresCtrl.index);
routes.get('/:id', laboresCtrl.show);

routes.use(ensureSuperAuthorized);
routes.post('/', laboresCtrl.store);
routes.put('/:id', laboresCtrl.update);
routes.delete('/:id', laboresCtrl.destroy);

module.exports = routes;
