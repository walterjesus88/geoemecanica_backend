var User = require('../models/User');
var Rol = require('../models/Rol');
var jwt = require('jsonwebtoken');

exports.index = function(req, res, next) {
    User.findAll({attributes: ['uid', 'dni', 'nombre', 'estado', 'rolRolId', 'correo'],
    include: [{model: Rol, attributes: ['nombre_rol']}]})
    .then(function(users) {
      res.status(200).jsonp(users);
    });
}

exports.show = function(req, res, next) {
  User.findById(req.params.id)
  .then(function(user) {
    res.status(200).jsonp(user);
  });
}

exports.store = function(req, res, next) {
    User.create({
      uid: req.body.uid,
      dni: req.body.dni,
      nombre: req.body.nombre,
      password: req.body.password,
      rolRolId: req.body.rol_id,
      estado: 'Activo',
      uid_registro: req.user.uid,
      correo: req.body.correo
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
}

exports.update = function(req, res, next) {
    User.findById(req.params.id)
    .then(function(user) {
      if(!user) return res.send(400, 'usuario no existe');
      if (req.body.nombre) {
        user.nombre = req.body.nombre;
      }
      if (req.body.dni) {
        user.dni = req.body.dni;
      }
      if (req.body.estado) {
        user.estado = req.body.estado;
      }
      if (req.body.rolRolId) {
        user.rolRolId = req.body.rolRolId;
      }
      if (req.body.correo) {
        user.correo = req.body.correo;
      }
      if (req.body.password) {
        user.password = req.body.password;
      }
      user.save().then(function() {
        res.send('actualizado');
      });
    });
}

exports.destroy = function(req, res, next) {
    User.findById(req.params.id)
    .then(function(user) {
      if(!user) return res.send(400, 'usuario no existe');
      user.destroy().then(function() {
        res.send('eliminado');
      });
    });
}

exports.authenticate = function(req, res, next) {
  User.findById(req.body.uid)
  .then(function(user) {
    if(!user) return res.send(400, 'usuario no existe');
    if(user.estado === 'Inactivo') return res.send(400, 'usuario inactivo');
    if(!user.authenticate(req.body.password)) return res.send(400, 'contraseña incorrecta');
    res.status(200).jsonp({type: true, data: user, token: user.token});
  })
  .catch(function(err) {
    res.send(400, err);
  });
}
