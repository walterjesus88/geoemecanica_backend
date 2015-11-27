var Pregunta = require('../models/Pregunta');

exports.index = function(req, res, next) {
  Pregunta.findAll()
  .then(function(preguntas) {
    res.status(200).jsonp(preguntas);
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
