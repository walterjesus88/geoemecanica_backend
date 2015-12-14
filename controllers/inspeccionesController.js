var Inspeccion = require('../models/Inspeccion');
var Respuesta = require('../models/Respuesta');
var Pregunta = require('../models/Pregunta');
var Observaciones = require('../models/Observacion');

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

  ins.validarPorcentajes().then(function(valido) {
    ins.validarRespuestas(req.body.respuestas).then(function(respuesta_valida) {
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
          } else if (respuestas[i].tipo === 'compuesto') {
            json.respuesta = {hastialDerecho: 12, hastialIzquierdo: 23};
          }
          array.push(json);
        }
        Respuesta.bulkCreate(array)
        .then(function() {
          //res.status(201).jsonp(inspeccion);

          Observacion.create({
            inspeccionInspeccionId: inspeccion.inspeccion_id,
            userUid: req.user.uid
          })
          .then(function(observacion) {
            res.status(201).jsonp(inspeccion);
          })
          .catch(function(err){
            console.log('500');
            res.send(500, err)
          })


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
