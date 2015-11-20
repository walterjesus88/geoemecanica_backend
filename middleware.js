var User = require('./models/User');

//funcion de comprobacion de autenticacion por medio de tokens
exports.ensureAuthorized = function(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(" ");
    bearerToken = bearer[1];
    req.token = bearerToken;
    User.findOne({token: req.token})
    .then(function(user) {
      if(user == null) return res.sendStatus(403);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}
