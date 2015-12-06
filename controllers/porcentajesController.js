var Porcentaje = require('../models/Porcentaje');

exports.index = function(req, res, next) {
  var roca = req.query.roca;
  var por_alto = req.query.porAlto;
  var por_ancho = req.query.porAncho;
  var por = 0;
  var respuesta = {};
  if (por_alto > por_ancho) {
    por = por_alto;
  } else {
    por = por_ancho;
  }
  Porcentaje.findAll({where: {rocaRocaid: roca}, order: 'porcentaje'}).then(function(porcentajes) {
    if (porcentajes) {
      var cont = 0;
      porcentajes.forEach(function(item) {
        if (item.porcentaje >= por && cont === 0) {
          respuesta = item;
          cont = 1;
        }
      });
      if (cont === 0) {
        respuesta = porcentajes.pop();
      }
    }
    var array = [];
    array.push(respuesta);
    res.status(200).jsonp(array);
  })
  .catch(function(err) {
    res.status(500).send(err);
  });
}
