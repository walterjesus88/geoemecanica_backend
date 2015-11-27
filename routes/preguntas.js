var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var preguntasCtrl  = require('../controllers/preguntasController');

routes.use(ensureAuthorized);
routes.get('/', preguntasCtrl.index);
routes.post('/', preguntasCtrl.store);
routes.get('/:id', preguntasCtrl.show);
//routes.put('/:id', usersCtrl.update);
//routes.delete('/:id', usersCtrl.destroy);

module.exports = routes;