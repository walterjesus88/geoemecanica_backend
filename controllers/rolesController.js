var Rol = require('../models/Rol');

exports.index = function(req, res, next) {
    Rol.findAll({attributes: ['rol_id', 'nombre_rol']})
    .then(function(roles) {
      res.status(200).jsonp(roles);
    });
}

exports.show = function(req, res, next) {

}

exports.store = function(req, res, next) {

}

exports.update = function(req, res, next) {

}

exports.destroy = function(req, res, next) {

}
