var Inspeccion = require('../models/Inspeccion');
var Respuesta = require('../models/Respuesta');
var Pregunta = require('../models/Pregunta');

var Empresa = require('../models/Empresa');
var User = require('../models/User');
var Labor = require('../models/Labor');
var Roca = require('../models/Roca');
var Sostenimiento = require('../models/Sostenimiento');
var Respuesta = require('../models/Respuesta');
var Tipo = require('../models/Tipo');


exports.index = function(req, res, next) {

  var condicion = {};
  var condicionLabor = {};
  var condicionRespuesta = {};

  if (req.query.nivel) condicion.nivel_riesgo = req.query.nivel;
  if (req.query.desde && req.query.hasta) condicion.fecha = {$between: [req.query.desde, req.query.hasta]};
  if (req.query.labor) condicion.laborCodigo = req.query.labor;
  if (req.query.responsable) condicion.ResponsableUid = req.query.responsable;
  if (req.query.inspector) condicion.RegistroUid = req.query.inspector;
  if (typeof(req.query.recoGeo) !== 'undefined') condicion.estado_recomendacion = req.query.recoGeo;
  if (req.query.guardia) condicion.guardia = req.query.guardia.toUpperCase();
  if (typeof(req.query.sostenimiento) !== 'undefined') condicion.estado_sostenimiento = req.query.sostenimiento;
  if (req.query.empresaid) condicionLabor.empresaEmpresaid = req.query.empresaid;
  if (req.query.tipo) condicionLabor.tipoTipoId = req.query.tipo;
  if (req.query.criterio) {
    if (req.query.criterio === '8') {

    } else if (req.query.criterio === '9') {

    } else if (req.query.criterio === '11') {

    } else if (req.query.criterio === '12') {

    } else if (req.query.criterio === 'SobreExcavacion') {

    } else if (req.query.criterio === 'GSI') {

    }
  }

  Inspeccion.findAll(
    {
      where: condicion, order: 'fecha DESC',
      include: [
        {model: Labor, attributes: ['codigo', 'nivel', 'alto_pro', 'ancho_pro', 'empresaEmpresaid', 'tipoTipoId'], where: condicionLabor,
          include: [{model: Empresa, attributes: ['nombre']}, {model: Tipo, attributes: ['nombre']}]
        },
        {model: Roca, attributes: ['codigo', 'porcentaje']},
        {model: Sostenimiento, attributes: ['codigo', 'descripcion']},
        {model: Respuesta, attributes: ['preguntumPreguntaid', 'respuesta'], where: condicionRespuesta},
        {model: User, as: 'Responsable', attributes: ['nombre']},
        {model: User, as: 'Geomecanico', attributes: ['nombre']},
        {model: User, as: 'Seguridad', attributes: ['nombre']},
        {model: User, as: 'Operaciones', attributes: ['nombre']},
        {model: User, as: 'Superintendente', attributes: ['nombre']},
        {model: User, as: 'Gerencia', attributes: ['nombre']},
        {model: User, as: 'Registro', attributes: ['nombre']}
      ]
    }
  )
  .then(function(inspecciones) {
    res.status(200).jsonp(inspecciones);
  })
}

exports.show = function(req, res, next) {
  Inspeccion.findOne({where: {inspeccion_id: req.params.id}, include: [{ all: true }]})
  .then(function(inspeccion) {
    res.status(200).jsonp(inspeccion);
  });
}

exports.store = function(req, res, next) {
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
    recomendacion: req.body.recomendacion_comentario,
    condicion_geomecanica: req.body.condicion_geomecanica,
    estado_sostenimiento: req.body.sostenimiento_estado,
    comentario_sostenimiento: req.body.sostenimiento_comentario,
    instalacion: req.body.instalacion,
    tiempo_ejecucion: req.body.tiempo_ejecucion,
    laborCodigo: req.body.labor,
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
      console.log(respuestas);
      var array = [];
      for (var i = 1; i < respuestas.length; i++) {
        if (respuestas[i] !== null) {
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
          json.respuesta.opcional = respuestas[i].comentario;
          array.push(json);
        }
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
