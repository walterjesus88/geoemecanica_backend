var Inspeccion = require('../models/Inspeccion');
var Respuesta = require('../models/Respuesta');
var Pregunta = require('../models/Pregunta');

var Observacion = require('../models/Observacion');

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
  console.log(req.body);
  //if (!req.body.fecha) res.status(500).send('Campo fecha es obligatorio');
  //if (!req.body.guardia) res.status(500).send('Campo guardia es obligatorio');
  //if (!req.body.progresiva.inicio) res.status(500).send('Inicio de progresiva es obligatorio');
  //if (!req.body.progresiva.fin) res.status(500).send('Fin de progresiva es obligatorio');
  //if (!req.body.ancho_real) res.status(500).send('Ancho es obligatorio');
  //if (!req.body.alto_real) res.status(500).send('Alto es obligatorio');
  if (!req.body.gsi_hd) req.body.gsi_hd = 0;
  if (!req.body.gsi_hi) req.body.gsi_hi = 0;
  if (!req.body.gsi_cor) req.body.gsi_cor = 0;
  //if (!req.body.riesgo.nivel) res.status(500).send('Nivel de riesgo obligatorio');
  //if (!req.body.riesgo.porcentaje) res.status(500).send('Porcentaje de riesgo es obligatorio');
  //if (!req.body.comentario) req.body.comentario = '';
  //if (!req.body.condicion_geomecanica) res.status(500).send('Condicion geomecanica es obligatoria');
  //if (!req.body.sostenimiento.comentario) req.body.sostenimiento.comentario = '';
  //if (!req.body.laborCodigo) res.status(500).send('Labor es obligatoria');
  //if (!req.body.RocaId) res.status(500).send('Tipo de roca es obligatorio');
  //if (!req.body.SostenimientoId) res.status(500).send('Tipo de sostenimiento es obligatorio');
  //if (!req.body.ResponsableUid) res.status(500).send('Responsable es obligatorio');
  if (!req.body.GeomecanicoUid) req.body.GeomecanicoUid = '';
  if (!req.body.SeguridadUid) req.body.SeguridadUid = '';
  if (!req.body.OperacionesUid) req.body.OperacionesUid = '';
  if (!req.body.SuperintendenteUid) req.body.SuperintendenteUid = '';
  if (!req.body.GerenciaUid) req.body.GerenciaUid = '';
  var ins = Inspeccion.build({
    fecha: req.body.fecha,
    guardia: req.body.guardia,
    progresiva_inicio: req.body.progresiva_inicio,
    progresiva_fin: req.body.progresiva_fin,
    ancho_real: req.body.ancho_real,
    alto_real: req.body.alto_real,
    gsi_hd: req.body.gsi_hd,
    gsi_hi: req.body.gsi_hi,
    gsi_cor: req.body.gsi_cor,
    estado_recomendacion: req.body.estado_recomendacion,
    nivel_riesgo: req.body.riesgo_nivel,
    porcentaje_riesgo: req.body.riesgo_porcentaje,
    comentario: req.body.comentario,
    condicion_geomecanica: req.body.condicion_geomecanica,
    estado_sostenimiento: req.body.sostenimiento_estado,
    comentario_sostenimiento: req.body.sostenimiento_comentario,
    instalacion: req.body.instalacion,
    laborCodigo: req.body.laborCodigo,
    rocaRocaid: req.body.RocaId,
    sostenimientoSostenimientoid: req.body.SostenimientoId,
    ResponsableUid: req.body.ResponsableUid,
    GeomecanicoUid: req.body.GeomecanicoUid,
    SeguridadUid: req.body.SeguridadUid,
    OperacionesUid: req.body.OperacionesUid,
    SuperintendenteUid: req.body.SuperintendenteUid,
    GerenciaUid: req.body.GerenciaUid,
    RegistroUid: req.user.uid

  });

  //ins.validarRiesgo(req.body.respuestas).then(function(valido){
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
  //})
  //.catch(function(err) {
  //  res.status(500).send(err);
  //});

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
