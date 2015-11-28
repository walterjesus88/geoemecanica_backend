var Inspeccion = require('../models/Inspeccion');
var Roca = require('../models/Roca');
var Sostenimiento = require('../models/Sostenimiento');

exports.index = function(req, res, next) {
  Inspeccion.findAll()
  .then(function(inspecciones) {
    res.status(200).jsonp(inspecciones);
  })
}

exports.show = function(req, res, next) {
  Inspeccion.findById(req.params.id)
  .then(function(inspeccion) {
    res.status(200).jsonp(inspeccion);
  });
}

exports.store = function(req, res, next) {
  Inspeccion.create({
    inspeccion_id: req.body.inspeccion_id,
    fecha: req.body.fecha,
    periodo: req.body.periodo,
    tipo: req.body.tipo,
    estado: req.body.estado,
    recomendacion: req.body.recomendacion,
    instalacion: req.body.instalacion,
    ancho_real: req.body.ancho_real,
    alto_real: req.body.alto_real,
    nivel_riesgo: req.body.nivel_riesgo,
    comentario: req.body.comentario
  })

  .then(function(inspeccion) {
    res.status(201).jsonp(inspeccion);
  })
  .catch(function(err) {
    console.log('500');
    res.send(500, err);
  });

}

exports.update = function(req, res, next) {

}

exports.destroy = function(req, res, next) {
  Inspeccion.findById(req.params.id)
  .then(function(inspeccion) {
    inspeccion.destroy().then(function() {
      res.send('eliminado');
    });
  });
}
