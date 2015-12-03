var User = require('./models/User');

//funcion de comprobacion de autenticacion por medio de tokens
exports.ensureAuthorized = function(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    if (typeof bearerHeader !== 'undefined') {
      var bearer = bearerHeader.split(" ");
      bearerToken = bearer[1];
      req.token = bearerToken;
      User.findOne({where: {token: req.token}, attributes: ['uid', 'estado', 'rolRolId']})
      .then(function(user) {
        if(user == null) return res.sendStatus(403);
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  }
}

exports.ensureSuperAuthorized = function(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    if (typeof bearerHeader !== 'undefined') {
      var bearer = bearerHeader.split(" ");
      bearerToken = bearer[1];
      req.token = bearerToken;
      User.findOne({where: {token: req.token}, attributes: ['uid', 'estado', 'rolRolId']})
      .then(function(user) {
        if(user == null) return res.sendStatus(403);
        if (user.rolRolId === '001') {
          req.user = user;
          next();
        } else {
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
  }
}

exports.ensureResponsableAuthorized = function(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    if (typeof bearerHeader !== 'undefined') {
      var bearer = bearerHeader.split(" ");
      bearerToken = bearer[1];
      req.token = bearerToken;
      User.findOne({where: {token: req.token}, attributes: ['uid', 'estado', 'rolRolId']})
      .then(function(user) {
        if(user == null) return res.sendStatus(403);
        if (user.rolRolId === '104') {
          req.user = user;
          next();
        } else {
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
  }
}

//funcion para agregar datos al header
exports.allowCrossDomain = function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
}
