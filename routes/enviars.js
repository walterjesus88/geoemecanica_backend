var express = require('express');
var routes = express.Router();
var enviarCtrl = require('../controllers/enviarController');

routes.get('/', enviarCtrl.index);
routes.post('/', enviarCtrl.store);

// routes.get('/', function(req, res, next) {
//   res.status(200).send('mail');
// })

module.exports = routes;
