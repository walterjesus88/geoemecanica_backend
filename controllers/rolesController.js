var Rol = require('../models/Rol');

exports.index = function(req, res, next) {
  if (req.user.rolRolId === '001') {
    Rol.findAll({attributes: ['rol_id', 'nombre_rol']})
    .then(function(roles) {
      res.status(200).jsonp(roles);
    });
  } else {
    res.sendStatus(401);
  }

}

exports.show = function(req, res, next) {

}

exports.store = function(req, res, next) {

}

exports.update = function(req, res, next) {

}

exports.destroy = function(req, res, next) {

}
