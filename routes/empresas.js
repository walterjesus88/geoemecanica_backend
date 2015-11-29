var express = require('express');
var routes = express.Router();
var empresasCtrl  = require('../controllers/empresasController');

routes.get('/', empresasCtrl.index);

module.exports = routes;
