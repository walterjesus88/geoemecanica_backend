var express = require('express');
var routes = express.Router();
var enviarCtrl = require('../controllers/enviarController');

routes.get('/', enviarCtrl.index);
routes.post('/', enviarCtrl.store);
routes.get('/csv', enviarCtrl.getCSV);

module.exports = routes;
