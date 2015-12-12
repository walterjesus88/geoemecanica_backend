var express = require('express');
var routes = express.Router();
var porcentajesCtrl = require('../controllers/porcentajesController');

routes.get('/', porcentajesCtrl.index);

module.exports = routes;
