var Tipo = require('../models/Tipo');

exports.index = function(req, res, next) {
    Tipo.findAll({attributes: ['tipo_id', 'nombre']})
    .then(function(tipos) {
      res.status(200).jsonp(tipos);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    })
}

exports.show = function(req, res, next) {

}

exports.store = function(req, res, next) {

}

exports.update = function(req, res, next) {

}

exports.destroy = function(req, res, next) {

}
