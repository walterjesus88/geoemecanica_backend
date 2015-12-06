var Pregunta = require('../models/Pregunta');

exports.index = function(req, res, next) {
  Pregunta.findAll({order: 'posicion'})
  .then(function(preguntas) {
    var respuesta = [];
    preguntas.forEach(function(pre) {
      if (pre.tipo === 'Check') {
        pre.alternativas = [{value: true, nombre: 'Si'}, {value: false, nombre: 'No'}];
      } else if (pre.tipo === 'Opciones') {
        var temp = [];
        pre.alternativas.forEach(function(alte) {
          var alte_new = {value: alte, nombre: alte};
          temp.push(alte_new);
        });
        pre.alternativas = temp;
      }
      respuesta.push(pre);
    });
    res.status(200).jsonp(respuesta);
  })
  .catch(function(err) {
    res.status(500).send(err);
  });
}

exports.show = function(req, res, next) {
  Pregunta.findById(req.params.id)
  .then(function(pregunta) {
    res.status(200).jsonp(pregunta);
  })
  .catch(function(err) {
  	  res.send(500, err);
  });
}

exports.store = function(req, res, next) {
  Pregunta.create({
    preguntaid: req.body.preguntaid,
    descripcion: req.body.descripcion,
    estado: req.body.estado,
    posicion: req.body.posicion
  })
  .then(function(pregunta){
    res.status(201).jsonp(pregunta);
  })
  .catch(function(err) {
    res.send(500, err);
  });
}
