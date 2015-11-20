var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var laboresCtrl  = require('../controllers/laboresController');

//routes.use(ensureAuthorized); //restriccion de acceso por medio del middleware
routes.get('/', laboresCtrl.index);
routes.post('/', laboresCtrl.store);
routes.get('/:id', laboresCtrl.show);
routes.put('/:id', laboresCtrl.update);
routes.delete('/:id', laboresCtrl.destroy);

module.exports = routes;
