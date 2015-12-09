var Porcentaje = require('../models/Porcentaje');

exports.index = function(req, res, next) {
  Porcentaje.findAll({order: ['rocaRocaid', 'porcentaje']}).then(function(porcentajes) {
    res.status(200).jsonp(porcentajes);
  })
  .catch(function(err) {
    res.status(500).send(err);
  });
}
