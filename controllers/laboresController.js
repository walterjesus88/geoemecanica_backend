var Labor = require('../models/Labor');

exports.index = function(req, res, next) {
  Labor.findAll()
  .then(function(labores) {
    res.status(200).jsonp(labores);
  });
}

exports.show = function(req, res, next) {
  Labor.findById(req.params.id)
  .then(function(labor) {
    res.status(200).jsonp(labor);
  })
  .catch(function(err) {

  });
}

exports.store = function(req, res, next) {
  Labor.create({
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    nivel: req.body.nivel,
    ancho_pro: req.body.ancho_pro,
    alto_pro: req.body.alto_pro,
    tipo: req.body.tipo,
    mfr: req.body.mfr
  })
  .then(function(labor){
    res.status(201).jsonp(labor);
  })
  .catch(function(err) {
    res.send(500, err);
  })
}

exports.update = function(req, res, next) {

}

exports.destroy = function(req, res, next) {
  Labor.findById(req.params.id)
  .then(function(labor) {
    labor.destroy().then(function() {
      res.send('eliminado');
    });
  })
}
