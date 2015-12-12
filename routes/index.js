var express = require('express');
var routes = express.Router();
var usersCtrl  = require('../controllers/usersController');

routes.get('/', function(req, res, next) {
  res.status(200).send('API REST de la oficina de geomecanica, ' +
  'para acceder a los recursos debera autentificarse');
})
routes.post('/authenticate', usersCtrl.authenticate);

module.exports = routes;
