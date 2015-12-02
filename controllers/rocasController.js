var Roca = require('../models/Roca');
var Propiedad = require('../models/Propiedad');

exports.index = function(req, res, next) {
  Roca.findAll(
    {
      attributes: ['rocaid', 'codigo'],
      include: [
        {model: Propiedad, as: 'Estructura', attributes: ['codigo', 'tipo', 'condicion', 'descripcion']},
        {model: Propiedad, as: 'Superficie', attributes: ['codigo', 'tipo', 'condicion', 'descripcion']}
      ]
    }
  )
  .then(function(rocas) {
    res.status(200).jsonp(rocas);
  })
  .catch(function(err) {
    res.status(500).send(err);
  })
}
