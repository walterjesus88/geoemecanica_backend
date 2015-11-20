var User = require('../models/User');
var jwt = require('jsonwebtoken');

exports.index = function(req, res, next) {

}

exports.show = function(req, res, next) {

}

exports.store = function(req, res, next) {
  User.create({
    uid: req.body.uid,
    dni: req.body.dni,
    nombre: req.body.nombre,
    password: req.body.password,
    estado: req.body.estado,
    uid_registro: req.body.uid_registro
  })
  .then(function(user){
    user.token = jwt.sign(user, process.env.JWT_SECRET);
    user.save().then(function() {
      res.status(200).jsonp({type: true, data: user, token: user.token});
    }).catch(function(err) {
      res.send(500, err);
    });
  })
  .catch(function(err) {
      res.send(500, err);
  });
}

exports.update = function(req, res, next) {
  User.findOne({ where: {uid: req.body.uid} })
  .then(function(user) {
    if(!user) return res.send(500, 'usuario no existe');
    user.update(req.data).then(function() {
      res.send('actualizado');
    });
  });
}

exports.destroy = function(req, res, next) {
  User.findOne({ where: {uid: req.body.uid} })
  .then(function(user) {
    if(!user) return res.send(500, 'usuario no existe');
    user.destroy().then(function() {
      res.send('eliminado');
    });
  });
}

exports.authenticate = function(req, res, next) {
  User.findById(req.body.uid)
  .then(function(user) {
    if(!user) return res.send(500, 'usuario no existe');
    if(!user.authenticate(req.body.password)) return res.send(500, 'contraseña incorrecta');
    res.status(200).jsonp({type: true, data: user, token: user.token});
  })
  .catch(function(err) {
    res.send(500, err);
  });
}
