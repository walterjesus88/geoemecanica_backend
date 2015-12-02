var Inspeccion = require('../models/Inspeccion');

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
    tipoTipoId: req.body.tipo,
    estado: req.body.estado,
    recomendacion: req.body.recomendacion,
    instalacion: req.body.instalacion,
    ancho_real: req.body.ancho_real,
    alto_real: req.body.alto_real,
    nivel_riesgo: req.body.nivel_riesgo,
    comentario: req.body.comentario,
    empresaEmpresaid: req.body.empresaEmpresaid,
    laborCodigo: req.body.laborCodigo,
    ResponsableUid: req.body.ResponsableUid,
    SeguridadUid: req.body.SeguridadUid,
    GeomecanicoUid: req.body.GeomecanicoUid,
    OperacionesUid: req.body.OperacionesUid,
    RegistroUid: req.body.RegistroUid,
    rocaRocaid: req.body.RocaId,
    sostenimientoSostenimientoid: req.body.SostenimientoId
  })

  .then(function(inspeccion) {
    res.status(201).jsonp(inspeccion);
  })
  .catch(function(err) {
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
