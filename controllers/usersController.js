var User = require('../models/User');

exports.index = function(req, res, next) {

}

exports.show = function(req, res, next) {

}

exports.store = function(req, res, next) {

}

exports.update = function(req, res, next) {

}

exports.destroy = function(req, res, next) {

}

exports.authenticate = function(req, res, next) {
  User.findOne({email: req.body.email})
  .then(function(user) {
    if(!user) return res.send(500, 'usuario no existe');
    if(!user.authenticate(req.body.password)) return res.send(500, 'contraseña incorrecta');
    res.status(200).jsonp({type: true, data: user, token: user.token});
  });
}
