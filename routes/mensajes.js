var express = require('express');
var routes = express.Router();
var mensajesCtrl = require('../controllers/mensajesController');

routes.get('/', mensajesCtrl.index);
routes.post('/', mensajesCtrl.store);

// routes.get('/', function(req, res, next) {
//   res.status(200).send('mail');
// })

module.exports = routes;
