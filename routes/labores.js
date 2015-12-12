var express = require('express');
var routes = express.Router();
var laboresCtrl  = require('../controllers/laboresController');

routes.get('/', laboresCtrl.index);
routes.get('/:id', laboresCtrl.show);
routes.post('/', laboresCtrl.store);
routes.put('/:id', laboresCtrl.update);
routes.delete('/:id', laboresCtrl.destroy);

module.exports = routes;
