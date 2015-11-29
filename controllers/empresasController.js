var Empresa = require('../models/Empresa');

exports.index = function(req, res, next) {
  Empresa.findAll()
  .then(function(empresas) {
    res.status(200).jsonp(empresas);
  })
  .catch(function(err) {
    res.status(500).send(err);
  })

}
