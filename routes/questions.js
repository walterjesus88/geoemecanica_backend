var express = require('express');
var routes = express.Router();
var ensureAuthorized = require('../middleware').ensureAuthorized;
var questionCtrl  = require('../controllers/questionsController');

routes.use(ensureAuthorized);
routes.get('/', questionCtrl.index);
routes.post('/', questionCtrl.store);
routes.get('/:id', questionCtrl.show);
//routes.put('/:id', usersCtrl.update);
//routes.delete('/:id', usersCtrl.destroy);

module.exports = routes;