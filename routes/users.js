var express = require('express');
var routes = express.Router();
var usersCtrl  = require('../controllers/usersController');

routes.get('/', usersCtrl.index);
routes.get('/:id', usersCtrl.show);
routes.put('/:id', usersCtrl.update);
routes.post('/', usersCtrl.store);
routes.delete('/:id', usersCtrl.destroy);

module.exports = routes;
