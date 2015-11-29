var Sostenimiento = require('../models/Sostenimiento');
var Tipo = require('../models/Tipo');

exports.index = function(req, res, next) {
  var tipo = req.query.tipo;
  Sostenimiento.findAll({where: {tipoTipoId: tipo}, order: 'codigo',
  attributes: ['sostenimientoid', 'codigo', 'color', 'descripcion', 'tiempo_colocacion'],
  include: [{model: Tipo, attributes: ['nombre']}]})
  .then(function(sostenimientos) {
    res.status(200).jsonp(sostenimientos);
  })
  .catch(function(err) {
    res.status(500).send(err);
  })
}
