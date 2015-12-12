var express = require('express');
var routes = express.Router();
var preguntasCtrl  = require('../controllers/preguntasController');

routes.get('/', preguntasCtrl.index);
routes.post('/', preguntasCtrl.store);
routes.get('/:id', preguntasCtrl.show);
//routes.put('/:id', usersCtrl.update);
//routes.delete('/:id', usersCtrl.destroy);

module.exports = routes;
