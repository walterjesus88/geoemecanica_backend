var User = require('./models/User');
var ACL = require('./models/ACL');

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
        console.log('user');
        if(user == null) return res.sendStatus(403);
        var rol = user.rolRolId;
        var recurso = getRecurso(req.path);
        var metodo = req.method;
        accesoByRol(rol, recurso, metodo).then(function(acceso) {
          if (!acceso) return res.sendStatus(403);
          req.user = user;
          next();
        })
        .catch(function(err) {
          console.log('llego');
          res.sendStatus(401);
        });
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
    } else {
      res.sendStatus(401);
    }
  }
}

function getRecurso(ruta) {
  return '/' + ruta.split('/')[1];
}

function accesoByRol(rol, recurso, metodo) {
  var promesa = new Promise(function(resolve, reject) {
    ACL.findOne({where: {rolRolId: rol, RecursoId: recurso, metodo: metodo}})
    .then(function(acl) {
      if (acl.acceso) {
        resolve(true);
      } else {
        resolve(false);
      }
    })
    .catch(function(err) {
      reject(err);
    });
  });
  return promesa;
}

//funcion para agregar datos al header
exports.allowCrossDomain = function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
}
