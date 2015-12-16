var Inspeccion = require('../models/Inspeccion');
var Respuesta = require('../models/Respuesta');
var Pregunta = require('../models/Pregunta');
var Labor = require('../models/Labor');
var Roca = require('../models/Roca');
var Sostenimiento = require('../models/Sostenimiento');
var Respuesta = require('../models/Respuesta');

exports.index = function(req, res, next) {
  var condicion = {};
  if (req.query.nivel) {
    condicion.nivel_riesgo = req.query.nivel;
  }
  if (req.query.desde && req.query.hasta) {
    condicion.fecha = {$between: [req.query.desde, req.query.hasta]};
  }
  Inspeccion.findAll(
    {
      where: condicion,
      include: [
        {model: Labor, attributes: ['nivel', 'alto_pro', 'ancho_pro']},
        {model: Roca, attributes: ['codigo', 'porcentaje']},
        {model: Sostenimiento, attributes: ['codigo', 'descripcion']},
        {model: Respuesta, attributes: ['preguntumPreguntaid', 'respuesta']}
      ]
    }
  )
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
    fecha: req.body.fecha,
    periodo: req.body.periodo,
    estado: req.body.estado,
    recomendacion: req.body.recomendacion,
    instalacion: req.body.instalacion,
    ancho_real: req.body.ancho_real,
    alto_real: req.body.alto_real,
    nivel_riesgo: req.body.nivel_riesgo,
    comentario: req.body.comentario,
    laborCodigo: req.body.laborCodigo,
    ResponsableUid: req.body.ResponsableUid,
    SeguridadUid: req.body.SeguridadUid,
    GeomecanicoUid: req.body.GeomecanicoUid,
    OperacionesUid: req.body.OperacionesUid,
    RegistroUid: req.body.RegistroUid,
    rocaRocaid: req.body.RocaId,
    sostenimientoSostenimientoid: req.body.SostenimientoId
  });

  ins.validarRiesgo(req.body.respuestas).then(function(valido){
    ins.save().then(function(inspeccion) {
      var respuestas = req.body.respuestas;
      var array = [];
      for (var i = 1; i < respuestas.length; i++) {
        var json = {
          inspeccionInspeccionId: inspeccion.inspeccion_id,
          preguntumPreguntaid: respuestas[i].preguntaid
        };
        if (respuestas[i].tipo === 'Check') {
          json.respuesta = {check: respuestas[i].value};
        } else if (respuestas[i].tipo === 'Opciones') {
          json.respuesta = {opcion: respuestas[i].value};
        } else {
          json.respuesta = respuestas[i].value || [];
        }
        array.push(json);
      }
      Respuesta.bulkCreate(array)
      .then(function() {
        res.status(201).jsonp(inspeccion);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
  })
  .catch(function(err) {
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
