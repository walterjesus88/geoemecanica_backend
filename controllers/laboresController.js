var Labor = require('../models/Labor');

exports.index = function(req, res, next) {
  Labor.findAll()
  .then(function(labores) {
    res.status(200).jsonp(labores);
  });
}

exports.show = function(req, res, next) {

}

exports.store = function(req, res, next) {
  Labor.create({
    codigo: req.body.codigo,
    nombre: req.body.nombre
  })
  .then(function(labor){
    res.status(201).jsonp(labor);
  });
}

exports.update = function(req, res, next) {

}

exports.destroy = function(req, res, next) {
  
}
