var User = require('../models/User');
var Rol = require('../models/Rol');
var jwt = require('jsonwebtoken');

exports.index = function(req, res, next) {
  if (req.user.rolRolId === '001') {
    User.findAll({attributes: ['uid', 'dni', 'nombre', 'estado', 'rolRolId'],
    include: [{model: Rol, attributes: ['nombre_rol']}]})
    .then(function(users) {
      res.status(200).jsonp(users);
    });
  } else {
    res.sendStatus(401);
  }

}

exports.show = function(req, res, next) {
  User.findById(req.params.id)
  .then(function(user) {
    res.status(200).jsonp(user);
  });
}

exports.store = function(req, res, next) {
  if (req.user.rolRolId === '001') {
    User.create({
      uid: req.body.uid,
      dni: req.body.dni,
      nombre: req.body.nombre,
      password: req.body.password,
      rolRolId: req.body.rol_id,
      estado: 'Activo',
      uid_registro: req.user.uid
    })
    .then(function(user){
      user.token = jwt.sign(user, process.env.JWT_SECRET);
      user.save().then(function() {
        res.status(200).jsonp({type: true, data: user, token: user.token});
      }).catch(function(err) {
        res.send(400, err);
      });
    })
    .catch(function(err) {
        res.send(400, err);
    });
  } else {
    res.sendStatus(401);
  }
}

exports.update = function(req, res, next) {
  if (req.user.rolRolId === '001') {
    User.findById(req.params.id)
    .then(function(user) {
      if(!user) return res.send(400, 'usuario no existe');
      user.update(req.data).then(function() {
        res.send('actualizado');
      });
    });
  } else {
    res.sendStatus(401);
  }

}

exports.destroy = function(req, res, next) {
  if (req.user.rolRolId === '001') {
    User.findById(req.params.id)
    .then(function(user) {
      if(!user) return res.send(400, 'usuario no existe');
      user.destroy().then(function() {
        res.send('eliminado');
      });
    });
  } else {
    res.sendStatus(401);
  }

}

exports.authenticate = function(req, res, next) {
  User.findById(req.body.uid)
  .then(function(user) {
    if(!user) return res.send(400, 'usuario no existe');
    if(!user.authenticate(req.body.password)) return res.send(400, 'contraseña incorrecta');
    res.status(200).jsonp({type: true, data: user, token: user.token});
  })
  .catch(function(err) {
    res.send(400, err);
  });
}
