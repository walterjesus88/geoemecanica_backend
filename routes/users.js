var express = require('express');
var routes = express.Router();
var usersCtrl  = require('../controllers/usersController');

routes.get('/', laboresCtrl.index);
routes.post('/', laboresCtrl.store);
routes.get('/:id', laboresCtrl.show);
routes.put('/:id', laboresCtrl.update);
routes.delete('/:id', laboresCtrl.destroy);

module.exports = routes;
