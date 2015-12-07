var Inspeccion = require('../models/Inspeccion');
var Respuesta = require('../models/Respuesta');
var Pregunta = require('../models/Pregunta');

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
  var ins = Inspeccion.build({
    inspeccion_id: req.body.inspeccion_id,
    fecha: req.body.fecha,
    periodo: req.body.periodo,
    //tipoTipoId: req.body.tipo,
    estado: req.body.estado,
    recomendacion: req.body.recomendacion,
    instalacion: req.body.instalacion,
    ancho_real: req.body.ancho_real,
    alto_real: req.body.alto_real,
    nivel_riesgo: req.body.nivel_riesgo,
    comentario: req.body.comentario,
    //empresaEmpresaid: req.body.empresaEmpresaid,
    laborCodigo: req.body.laborCodigo,
    ResponsableUid: req.body.ResponsableUid,
    SeguridadUid: req.body.SeguridadUid,
    GeomecanicoUid: req.body.GeomecanicoUid,
    OperacionesUid: req.body.OperacionesUid,
    RegistroUid: req.body.RegistroUid,
    rocaRocaid: req.body.RocaId,
    sostenimientoSostenimientoid: req.body.SostenimientoId
  });

  ins.validarPorcentajes().then(function(valido) {
    ins.validarRespuestas().then(function(respuesta_valida) {
      ins.save().then(function(inspeccion) {
        var respuestas = req.body.respuestas;
        var array = [];
        respuestas.forEach(function(item) {
          var json = {
            inspeccionInspeccionId: req.body.inspeccion_id,
            preguntumPreguntaid: item.preguntaid
          };
          Pregunta.findById(item.preguntaid).then(function(pregunta) {
            if (pregunta.tipo === 'Check') {
              json.respuesta = {check: item.respuesta};
            } else if (pregunta.tipo === 'Opciones') {
              json.respuesta = {opcion: item.respuesta};
            } else if (pregunta.tipo === 'compuesto') {
              json.respuesta = {};
            }
            array.push(json);
          });
        });
        Respuesta.bulkCreate(array)
        .then(function() {
          res.status(201).jsonp(inspeccion);
        })
        .catch(function(err) {
          res.status(500).send(err);
        })
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
    });
  }).catch(function(err) {
    res.status(500).send(err);
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
