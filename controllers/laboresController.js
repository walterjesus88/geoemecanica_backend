var Labor = require('../models/Labor');
var Tipo = require('../models/Tipo');
var Empresa = require('../models/Empresa');

exports.index = function(req, res, next) {
  Labor.findAll({include: [{model: Tipo, attributes: ['nombre']}, {model:Empresa, attributes: ['nombre']}]})
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
    tipoTipoId: req.body.tipoTipoId,
    empresaEmpresaid: req.body.empresaEmpresaid
  })
  .then(function(labor) {
    res.status(201).jsonp(labor);
  })
  .catch(function(err) {
    res.send(500, err);
  });
}

exports.update = function(req, res, next) {
  Labor.findById(req.params.id)
  .then(function(labor) {
    if(!labor) return res.send(400, 'usuario no existe');
    if (req.body.nombre) labor.nombre = req.body.nombre;
    if (req.body.nivel) labor.nivel = req.body.nivel;
    if (req.body.alto_pro) labor.alto_pro = req.body.alto_pro;
    if (req.body.ancho_pro) labor.ancho_pro = req.body.ancho_pro;
    if (req.body.tipoTipoId) labor.tipoTipoId = req.body.tipoTipoId;
    if (req.body.empresaEmpresaid) labor.empresaEmpresaid = req.body.empresaEmpresaid;
    labor.save().then(function() {
      res.send('actualizado');
    });
  })
  .catch(function(err) {
    res.status(500).send(err);
  })

}

exports.destroy = function(req, res, next) {
  Labor.findById(req.params.id)
  .then(function(labor) {
    labor.destroy().then(function() {
      res.send('eliminado');
    });
  });
}
